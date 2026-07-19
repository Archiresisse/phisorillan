'use strict'
// 網路核心：Hyperswarm DHT。
// - 用種子推導金鑰對，swarm.listen() 後就能被別人用我的公鑰找到。
// - joinPeer(對方公鑰) 主動建立並維持一條到對方的直連，每條都是 Noise 端對端加密。
// - 離線信箱：對方不在線時，把「用對方公鑰封裝的密文」投遞到對方的信箱節點暫存；
//   自己上線時連回「我的信箱」收取並就地解密。信箱看不到內容。
// 對外事件：message / ack / profile / peer-status / mailbox-ack / warn。

const EventEmitter = require('events')
const Hyperswarm = require('hyperswarm')
const fs = require('fs')
const { encode, Decoder } = require('./framing')
const mailcrypto = require('./mailcrypto')
const media = require('./media')

// 單一媒體檔上限。對方在 file-begin 宣告的尺寸超過就拒收；
// 沒有這道閘，任何連上的人都能無限往你手機寫檔。
const MAX_MEDIA = 2 * 1024 * 1024 * 1024   // 2GB

class P2P extends EventEmitter {
  constructor () {
    super()
    this.swarm = null
    this.conns = new Map()        // peerHex -> { socket, decoder, isMailbox }
    this.profile = { name: '', mailbox: '' } // 連上時送給對方
    this.mailboxes = new Set()    // 我關注的信箱節點（我的信箱 + 正在投遞的對方信箱）
    this.myMailbox = ''           // 我的信箱公鑰
    this.depositQueue = new Map()  // mailboxHex -> [ {to,id,box,ts} ] 等連上再送
    this.pendingDeposits = new Map() // id -> {resolve, timer}
    this.fetchTimer = null
    this.keepTimer = null         // 周期性確保連線（斷線重連）
    this.wantPeers = new Set()    // 我希望保持連線的對象（聯絡人 / 群組成員 / 信箱）
    this.recv = new Map()         // mediaId -> { ws, mid, peer, size, received, name }
  }

  async start (seed) {
    this.swarm = new Hyperswarm({ seed })
    this.swarm.on('connection', (socket, info) => {
      // 任何一條連線的建立過程出錯，都不該讓整個背景執行緒死掉。
      try { this._onConnection(socket, info) } catch (e) { this.emit('warn', { error: String(e && e.message) }) }
    })
    await this.swarm.listen()
    // 斷線重連：每 15 秒檢查一次，對「想連、但目前沒連上」的對象重新嘗試。
    // Hyperswarm 對 joinPeer 的對象本來就會持續維持/重連；這裡再加一道保險。
    clearInterval(this.keepTimer)
    this.keepTimer = setInterval(() => this._ensureConnections(), 15000)
  }

  _ensureConnections () {
    if (!this.swarm) return
    for (const hex of this.wantPeers) {
      if (!this.conns.has(hex)) {
        try { this.swarm.joinPeer(Buffer.from(hex, 'hex')) } catch {}
      }
    }
    try { this.swarm.flush && this.swarm.flush() } catch {} // 重新廣播自己的位址，利於對方找到（NAT 友善）
  }

  stop () { clearInterval(this.keepTimer); clearInterval(this.fetchTimer) }

  publicKeyHex () {
    return this.swarm ? Buffer.from(this.swarm.keyPair.publicKey).toString('hex') : null
  }

  setProfileName (name) { this.profile.name = name || '' }
  setProfileMailbox (hex) { this.profile.mailbox = hex || '' }

  connectPeer (peerHex) {
    if (!this.swarm) return
    this.wantPeers.add(peerHex)
    this.swarm.joinPeer(Buffer.from(peerHex, 'hex'))
  }

  disconnectPeer (peerHex) {
    if (!this.swarm) return
    this.wantPeers.delete(peerHex)
    try { this.swarm.leavePeer(Buffer.from(peerHex, 'hex')) } catch {}
    const c = this.conns.get(peerHex)
    if (c) { try { c.socket.destroy() } catch {}; this.conns.delete(peerHex) }
  }

  isOnline (peerHex) {
    const c = this.conns.get(peerHex)
    return !!c && !c.isMailbox
  }

  // ---------------- 信箱：我的 ----------------
  setMyMailbox (hex) {
    hex = hex || ''
    if (this.myMailbox === hex) return
    // 解除舊的
    if (this.myMailbox) { this.mailboxes.delete(this.myMailbox); this.disconnectPeer(this.myMailbox) }
    this.myMailbox = hex
    this.setProfileMailbox(hex)
    if (hex) { this.mailboxes.add(hex); this.connectPeer(hex) }
    // 定時收信（萬一中途短暫離線過）
    clearInterval(this.fetchTimer)
    if (hex) this.fetchTimer = setInterval(() => this._fetchMyMailbox(), 45000)
  }

  _fetchMyMailbox () {
    if (this.myMailbox && this.isMailboxConnected(this.myMailbox)) this._write(this.myMailbox, { type: 'fetch' })
  }

  isMailboxConnected (hex) {
    const c = this.conns.get(hex)
    return !!c && c.isMailbox
  }

  // ---------------- 信箱：投遞給離線的對方 ----------------
  // 回傳 Promise<boolean>：是否成功寄存（deposit-ok）。
  depositToMailbox (mailboxHex, toHex, id, boxB64, ts) {
    return new Promise((resolve) => {
      if (!this.swarm || !mailboxHex) return resolve(false)
      const item = { to: toHex, id, box: boxB64, ts }
      if (!this.depositQueue.has(mailboxHex)) this.depositQueue.set(mailboxHex, [])
      this.depositQueue.get(mailboxHex).push(item)

      const timer = setTimeout(() => { this.pendingDeposits.delete(id); resolve(false) }, 20000)
      this.pendingDeposits.set(id, { resolve, timer })

      this.mailboxes.add(mailboxHex)
      if (this.isMailboxConnected(mailboxHex)) this._flushDeposits(mailboxHex)
      else this.connectPeer(mailboxHex) // 連上後在 _onConnection 觸發 flush
    })
  }

  _flushDeposits (mailboxHex) {
    const q = this.depositQueue.get(mailboxHex)
    if (!q || !q.length) return
    for (const it of q) this._write(mailboxHex, { type: 'deposit', to: it.to, id: it.id, box: it.box, ts: it.ts })
    this.depositQueue.set(mailboxHex, [])
  }

  // ---------------- 連線事件 ----------------
  _onConnection (socket, info) {
    const peerHex = Buffer.from(socket.remotePublicKey).toString('hex')
    const existing = this.conns.get(peerHex)
    if (existing && existing.socket !== socket && !existing.socket.destroyed) {
      try { socket.destroy() } catch {}; return
    }
    const isMailbox = this.mailboxes.has(peerHex)
    const decoder = new Decoder(
      (obj) => isMailbox ? this._onMailboxFrame(peerHex, obj) : this._onFrame(peerHex, obj),
      (err) => this.emit('warn', { peer: peerHex, error: String((err && err.message) || err) })
    )
    this.conns.set(peerHex, { socket, decoder, isMailbox })

    // NAT 穿透優化：在底層 UDX 串流上開 keepalive，定期送保活封包，
    // 避免家用路由器/CGNAT 的 NAT 映射在閒置時被回收而「假性斷線」。
    try {
      const raw = socket.rawStream || socket
      if (raw && typeof raw.setKeepAlive === 'function') raw.setKeepAlive(5000)
    } catch {}

    socket.on('data', (chunk) => decoder.push(chunk))
    socket.on('error', () => {})
    socket.on('close', () => {
      const cur = this.conns.get(peerHex)
      if (cur && cur.socket === socket) this.conns.delete(peerHex)
      if (!isMailbox) this.emit('peer-status', { peer: peerHex, online: false })
      // 斷線重連：仍想連的對象，稍後再試一次（與周期性掃描互補）
      if (this.wantPeers.has(peerHex)) {
        setTimeout(() => { if (this.swarm && !this.conns.has(peerHex) && this.wantPeers.has(peerHex)) { try { this.swarm.joinPeer(Buffer.from(peerHex, 'hex')) } catch {} } }, 2500)
      }
    })

    if (isMailbox) {
      this._flushDeposits(peerHex)
      if (peerHex === this.myMailbox) this._write(peerHex, { type: 'fetch' })
    } else {
      this.emit('peer-status', { peer: peerHex, online: true })
      this._write(peerHex, { type: 'profile', name: this.profile.name, mailbox: this.profile.mailbox })
    }
  }

  _onFrame (peerHex, obj) {
    if (!obj || typeof obj.type !== 'string') return
    if (obj.type === 'msg') {
      if (typeof obj.id !== 'string' || typeof obj.text !== 'string') return
      this._write(peerHex, { type: 'ack', id: obj.id })
      this.emit('message', {
        peer: peerHex,
        message: { id: obj.id, dir: 'in', text: obj.text, ts: typeof obj.ts === 'number' ? obj.ts : Date.now(), state: 'delivered' }
      })
    } else if (obj.type === 'rmsg') {
      // 棘輪加密的 1:1 文字：交給 main 解密（解不開也不崩潰）。ack 由 main 在處理後送出。
      if (!/^[0-9a-f]{24}$/.test(obj.id || '') || !obj.header || typeof obj.ct !== 'string') return
      this.emit('rmessage', { peer: peerHex, id: obj.id, header: obj.header, ct: obj.ct, ts: typeof obj.ts === 'number' ? obj.ts : Date.now() })
    } else if (obj.type === 'ttl') {
      // 帶 gid = 群組的閱後即焚設定，要走群組路徑（需驗證對方是不是管理員）
      if (typeof obj.gid === 'string' && /^[0-9a-f]{32}$/.test(obj.gid)) {
        this.emit('group', { peer: peerHex, frame: obj })
      } else {
        this.emit('ttl', { peer: peerHex, seconds: Math.max(0, Number(obj.seconds) || 0) })
      }
    } else if (obj.type === 'ack') {
      if (typeof obj.id === 'string') this.emit('ack', { peer: peerHex, id: obj.id })
    } else if (obj.type === 'profile') {
      this.emit('profile', { peer: peerHex, name: typeof obj.name === 'string' ? obj.name : '', mailbox: typeof obj.mailbox === 'string' ? obj.mailbox : '' })
    } else if (obj.type === 'file-begin') {
      const m = obj.media || {}
      if (typeof m.id !== 'string' || typeof obj.mid !== 'string') return
      if (this.recv.has(m.id)) return                       // 同一 mediaId 重送 -> 忽略，避免洩漏寫入串流
      const size = Number(m.size) || 0
      if (size < 0 || size > MAX_MEDIA) {                   // 對方宣告的尺寸不合理 -> 直接拒收
        this.emit('warn', { peer: peerHex, error: 'media too large: ' + size })
        return
      }
      const gid = (typeof obj.gid === 'string' && /^[0-9a-f]{32}$/.test(obj.gid)) ? obj.gid : null
      const ws = media.openIncoming(m.id, m)
      if (!ws) return
      ws.on('error', () => { this.recv.delete(m.id) })
      this.recv.set(m.id, { ws, mid: obj.mid, peer: peerHex, size, received: 0, name: m.name, gid })
      // 先建立一則「接收中」的訊息，讓畫面顯示進度。
      this.emit('message', {
        peer: peerHex, gid,
        message: { id: obj.mid, dir: 'in', ts: typeof obj.ts === 'number' ? obj.ts : Date.now(), state: 'receiving', kind: 'media', media: { id: m.id, name: m.name, mime: m.mime, mkind: m.mkind, size: m.size }, from: gid ? peerHex : undefined }
      })
    } else if (obj.type === 'file-chunk') {
      const r = this.recv.get(obj.mediaId)
      if (!r || r.peer !== peerHex || typeof obj.data !== 'string') return
      const buf = Buffer.from(obj.data, 'base64')
      // 只信任「對方一開始宣告的尺寸」；超出就中止，否則對方可以無限灌爆手機儲存空間。
      if (r.received + buf.length > r.size) {
        try { r.ws.destroy() } catch {}
        media.remove(obj.mediaId)
        this.recv.delete(obj.mediaId)
        this.emit('file-abort', { peer: peerHex, gid: r.gid, mediaId: obj.mediaId, mid: r.mid, reason: 'oversize' })
        return
      }
      r.ws.write(buf); r.received += buf.length
      this.emit('file-progress', { peer: peerHex, gid: r.gid, mediaId: obj.mediaId, dir: 'in', sent: r.received, size: r.size })
    } else if (obj.type === 'file-end') {
      const r = this.recv.get(obj.mediaId)
      if (!r || r.peer !== peerHex) return
      // 收到的位元組數與宣告不符 -> 視為失敗，不要留下半截檔案假裝成功。
      if (r.size && r.received !== r.size) {
        try { r.ws.destroy() } catch {}
        media.remove(obj.mediaId)
        this.recv.delete(obj.mediaId)
        this.emit('file-abort', { peer: peerHex, gid: r.gid, mediaId: obj.mediaId, mid: r.mid, reason: 'truncated' })
        return
      }
      // end(cb) 的回呼在 bare-stream 上不保證；改用 'finish' 事件，Node 與 Bare 都可靠。
      r.ws.once('finish', () => {
        this._write(peerHex, r.gid ? { type: 'gack', gid: r.gid, id: r.mid } : { type: 'ack', id: r.mid })
        this.emit('msgstate', { peer: peerHex, gid: r.gid, id: r.mid, state: 'delivered' })
        this.emit('file-complete', { peer: peerHex, gid: r.gid, mediaId: obj.mediaId, mid: r.mid, media: media.readMeta(obj.mediaId) })
        this.recv.delete(obj.mediaId)
      })
      r.ws.end()
    } else if (obj.type === 'delete') {
      if (typeof obj.id === 'string') this.emit('delete', { peer: peerHex, id: obj.id })
    } else if (obj.type === 'gmsg' || obj.type === 'gsync' || obj.type === 'gjoin' ||
               obj.type === 'gdelete' || obj.type === 'gack' || obj.type === 'gleave') {
      this.emit('group', { peer: peerHex, frame: obj })
    }
  }

  _onMailboxFrame (mailboxHex, obj) {
    if (!obj || typeof obj.type !== 'string') return
    if (obj.type === 'deposit-ok') {
      this._resolveDeposit(obj.id, true)
    } else if (obj.type === 'deposit-err') {
      this._resolveDeposit(obj.id, false)
    } else if (obj.type === 'mail') {
      if (mailboxHex !== this.myMailbox || !Array.isArray(obj.items)) return
      const kp = this.swarm.keyPair
      const ids = []
      for (const it of obj.items) {
        if (!it || typeof it.box !== 'string') continue
        const plain = mailcrypto.openSealed(it.box, kp.publicKey, kp.secretKey)
        if (!plain) continue
        let m; try { m = JSON.parse(plain.toString('utf8')) } catch { continue }
        if (typeof m.id !== 'string' || typeof m.text !== 'string') continue
        ids.push(it.id)
        this.emit('message', {
          peer: typeof it.from === 'string' ? it.from : '',
          message: { id: m.id, dir: 'in', text: m.text, ts: typeof m.ts === 'number' ? m.ts : it.ts, state: 'delivered', viaMailbox: true }
        })
      }
      if (ids.length) this._write(mailboxHex, { type: 'drain', ids })
    }
  }

  _resolveDeposit (id, ok) {
    const p = this.pendingDeposits.get(id)
    if (!p) return
    clearTimeout(p.timer); this.pendingDeposits.delete(id)
    p.resolve(ok)
    this.emit('mailbox-ack', { id, ok })
  }

  _write (peerHex, obj) {
    const c = this.conns.get(peerHex)
    if (!c || c.socket.destroyed) return false
    try { c.socket.write(encode(obj)); return true } catch { return false }
  }

  // 直連送出一則訊息；false = 對方目前不在線。
  sendMessage (peerHex, id, text, ts) {
    return this._write(peerHex, { type: 'msg', id, text, ts })
  }

  // 棘輪加密文字訊息（header + 密文 base64）。
  sendRatchetMsg (peerHex, id, header, ct, ts) {
    return this._write(peerHex, { type: 'rmsg', id, header, ct, ts })
  }

  sendAck (peerHex, id) { return this._write(peerHex, { type: 'ack', id }) }

  // 同步「閱後即焚」秒數給對方。
  sendTTL (peerHex, seconds) { return this._write(peerHex, { type: 'ttl', seconds }) }

  // 群組訊息回執（用於群組雙勾）。
  sendGroupAck (peerHex, gid, id) { return this._write(peerHex, { type: 'gack', gid, id }) }

  // 串流送出一個媒體檔（任意大小，邊讀邊送，含背壓控制）。
  // mid = 訊息 id；m = 媒體中繼資料；filePath = 媒體庫裡的 .bin 路徑；gid = 群組 id（群組檔案時帶上）。
  sendFile (peerHex, mid, m, filePath, ts, gid) {
    return new Promise((resolve) => {
      const c = this.conns.get(peerHex)
      if (!c || c.isMailbox || c.socket.destroyed) return resolve(false)
      const sock = c.socket
      this._write(peerHex, { type: 'file-begin', mid, media: m, ts, gid })
      const rs = fs.createReadStream(filePath, { highWaterMark: 256 * 1024 })
      let sent = 0
      rs.on('data', (chunk) => {
        const ok = sock.write(encode({ type: 'file-chunk', mediaId: m.id, data: chunk.toString('base64') }))
        sent += chunk.length
        this.emit('file-progress', { peer: peerHex, mediaId: m.id, dir: 'out', sent, size: m.size })
        if (!ok) { rs.pause(); sock.once('drain', () => rs.resume()) }
      })
      rs.on('end', () => { this._write(peerHex, { type: 'file-end', mediaId: m.id }); resolve(true) })
      rs.on('error', () => resolve(false))
    })
  }

  // 為所有人刪除：通知對方移除該訊息。
  sendDelete (peerHex, id) { return this._write(peerHex, { type: 'delete', id }) }

  // 群組檔案：沒有中繼，只能對每個成員各推一份（與 groupBroadcast 同樣是網狀直送）。
  // 回傳 Promise<成功送達的成員數>。
  async sendFileToGroup (memberHexes, mid, m, filePath, ts, gid) {
    const me = this.publicKeyHex()
    let ok = 0
    for (const h of memberHexes) {
      if (!h || h === me) continue
      if (await this.sendFile(h, mid, m, filePath, ts, gid)) ok++
    }
    return ok
  }

  // 群組廣播：把同一個訊框送給每個成員（自己除外）。網狀直送，無中繼。
  groupBroadcast (memberHexes, frame) {
    const me = this.publicKeyHex()
    for (const h of memberHexes) {
      if (h && h !== me) { this.connectPeer(h); this._write(h, frame) }
    }
  }

  async destroy () {
    clearInterval(this.fetchTimer)
    clearInterval(this.keepTimer)
    if (this.swarm) { try { await this.swarm.destroy() } catch {}; this.swarm = null }
    this.conns.clear()
  }
}

module.exports = P2P
