'use strict'
// ──────────────────────────────────────────────────────────────────────────
// 測試台：在同一個行程裡開好幾個「虛擬裝置」，讓它們真的互相對話。
//
// 【關鍵設計：只替換 swarm，不替換 P2P】
// MockP2P 繼承真正的 P2P，只把 `this.swarm` 換成一個記憶體版的假 swarm。
// 因此 _onConnection / _onFrame / _write / sendFile / 背壓 / framing / 棘輪
// 全部是**正式程式碼**在跑，不是另外寫一份測試用的模擬品。
// 唯一沒被測到的是 hyperswarm/UDX 本身（沙箱擋 UDP，這裡本來就測不了）。
//
// 【隔離】
// 每個節點把 backend/ 複製一份到自己的目錄再 require。
// 絕對路徑不同 = require 快取不同 = store/media 的模組級狀態完全獨立，
// 不會出現「A 的媒體目錄跟 B 是同一個」這種假通過。
// ──────────────────────────────────────────────────────────────────────────

const fs = require('fs')
const path = require('path')
const os = require('os')
const EventEmitter = require('events')
const _p = require('path')
const DHT = require(_p.resolve(__dirname, '..', 'backend', 'node_modules', 'hyperdht'))

const BACKEND = path.resolve(__dirname, '..', 'backend')
const ROOT = fs.mkdtempSync(path.join(os.tmpdir(), 'phi-test-'))

// ── 記憶體交換機：誰在線、誰連著誰 ────────────────────────────────────────
const HUB = {
  nodes: new Map(),          // hex -> MockP2P
  drops: new Set(),          // hex -> 被強制離線（模擬對方關機）
  join (p2p) { this.nodes.set(p2p.publicKeyHex(), p2p) },
  leave (p2p) { this.nodes.delete(p2p.publicKeyHex()) },
  offline (hex) { this.drops.add(hex) },
  online (hex) { this.drops.delete(hex) },

  link (from, toHex) {
    if (from.conns.has(toHex)) return
    const to = this.nodes.get(toHex)
    if (!to) return                                        // 對方不存在 -> 連不上（正常情況）
    if (this.drops.has(toHex) || this.drops.has(from.publicKeyHex())) return
    const meHex = from.publicKeyHex()
    const [a, b] = pair(meHex, toHex)
    from._onConnection(a, { client: true })                // ← 正式碼
    to._onConnection(b, { client: false })                 // ← 正式碼
  },

  unlink (from, toHex) {
    const c = from.conns.get(toHex)
    if (c) { try { c.socket.destroy() } catch {} }
  },

  reset () { this.nodes.clear(); this.drops.clear() }
}

// ── 假 socket：一對相連的雙工端點，語意比照 Hyperswarm 的加密連線 ──────────
class FakeSock extends EventEmitter {
  constructor (remoteHex) {
    super()
    this.remotePublicKey = Buffer.from(remoteHex, 'hex')
    this.destroyed = false
    this.rawStream = { setKeepAlive () {} }   // p2p.js 會對它呼叫 setKeepAlive
    this._peer = null
    this._paused = false
  }

  write (buf) {
    if (this.destroyed) return false
    const p = this._peer
    if (!p || p.destroyed) return false
    const copy = Buffer.from(buf)             // 複製：真網路不會共用記憶體
    setImmediate(() => { if (!p.destroyed) p.emit('data', copy) })
    // 模擬背壓：大量寫入時回 false，逼 sendFile 走 pause/drain 路徑
    if (this._paused) return false
    return true
  }

  pause () { this._paused = true }
  resume () { this._paused = false; this.emit('drain') }

  destroy () {
    if (this.destroyed) return
    this.destroyed = true
    setImmediate(() => this.emit('close'))
    const p = this._peer
    if (p && !p.destroyed) p.destroy()
  }

  end () { this.destroy() }
}

function pair (aHex, bHex) {
  const a = new FakeSock(bHex)   // a 在 A 手上，遠端是 B
  const b = new FakeSock(aHex)   // b 在 B 手上，遠端是 A
  a._peer = b; b._peer = a
  return [a, b]
}

// ── 一個虛擬裝置 ──────────────────────────────────────────────────────────
class Node {
  constructor (name) {
    this.name = name
    this.dir = path.join(ROOT, name)
    fs.mkdirSync(this.dir, { recursive: true })

    // 複製一份 backend 讓模組級狀態隔離；node_modules 用符號連結共用（無狀態）
    this.backend = path.join(this.dir, 'backend')
    fs.mkdirSync(this.backend, { recursive: true })
    for (const f of fs.readdirSync(BACKEND)) {
      if (f === 'node_modules' || f === 'package-lock.json') continue
      fs.copyFileSync(path.join(BACKEND, f), path.join(this.backend, f))
    }
    fs.symlinkSync(path.join(BACKEND, 'node_modules'), path.join(this.backend, 'node_modules'))

    // 先拿到「這個節點自己的」P2P 類別，做出 MockP2P，再塞回快取
    const RealP2P = require(path.join(this.backend, 'p2p.js'))
    class MockP2P extends RealP2P {
      async start (seed) {
        const kp = DHT.keyPair(seed)
        const self = this
        // 只有 swarm 是假的。joinPeer/leavePeer 由 HUB 接手；其餘全走正式程式碼。
        this.swarm = {
          keyPair: kp,
          joinPeer (buf) { HUB.link(self, Buffer.from(buf).toString('hex')) },
          leavePeer (buf) { HUB.unlink(self, Buffer.from(buf).toString('hex')) },
          listen: async () => {},
          flush () {},
          destroy () { HUB.leave(self) }
        }
        HUB.join(this)
        clearInterval(this.keepTimer)
        this.keepTimer = setInterval(() => this._ensureConnections(), 15000)
        if (this.keepTimer.unref) this.keepTimer.unref()
      }
    }
    require.cache[require.resolve(path.join(this.backend, 'p2p.js'))].exports = MockP2P

    this.w = require(path.join(this.backend, 'worklet.js'))
    this.CMD = this.w.CMD
    this.w.boot(this.dir)

    // 用真正的 attach()（含逐行分框、Promise 回覆處理），不是直接呼叫 handlers
    this.events = []
    this.listeners = new Map()
    this.pending = new Map()
    this.nextId = 1
    this.rxbuf = ''

    const self = this
    this.ipc = new (class extends EventEmitter {
      write (buf) { self._onIpcOut(buf.toString()); return true }
    })()
    this.w.attach(this.ipc)
  }

  _onIpcOut (chunk) {
    this.rxbuf += chunk
    let i
    while ((i = this.rxbuf.indexOf('\n')) >= 0) {
      const line = this.rxbuf.slice(0, i); this.rxbuf = this.rxbuf.slice(i + 1)
      if (!line.trim()) continue
      let msg; try { msg = JSON.parse(line) } catch { continue }
      if (msg.evt !== undefined) {
        this.events.push(msg)
        const set = this.listeners.get(msg.evt)
        if (set) for (const fn of [...set]) fn(msg.data)
        continue
      }
      const p = this.pending.get(msg.id)
      if (!p) continue
      this.pending.delete(msg.id)
      msg.ok ? p.resolve(msg.data) : p.reject(new Error(msg.error))
    }
  }

  call (cmd, args = {}) {
    return new Promise((resolve, reject) => {
      const id = this.nextId++
      this.pending.set(id, { resolve, reject })
      this.ipc.emit('data', Buffer.from(JSON.stringify({ id, cmd, args }) + '\n'))
      setTimeout(() => {
        if (this.pending.has(id)) { this.pending.delete(id); reject(new Error('RPC 逾時 cmd=' + cmd)) }
      }, 8000)
    })
  }

  on (evt, fn) {
    if (!this.listeners.has(evt)) this.listeners.set(evt, new Set())
    this.listeners.get(evt).add(fn)
    return () => this.listeners.get(evt).delete(fn)
  }

  // 等一個事件出現（含已經發生過的）
  waitEvt (evt, match = () => true, ms = 4000) {
    const hit = this.events.find(e => e.evt === evt && match(e.data))
    if (hit) return Promise.resolve(hit.data)
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => { off(); reject(new Error(`${this.name} 等不到事件 ${evt}`)) }, ms)
      const off = this.on(evt, (d) => { if (match(d)) { clearTimeout(t); off(); resolve(d) } })
    })
  }

  evts (evt) { return this.events.filter(e => e.evt === evt).map(e => e.data) }
  clearEvents () { this.events.length = 0 }

  // 直接窺看內部狀態（測試用；正式流程不該這樣做）
  get store () { return require(path.join(this.backend, 'store.js')) }
  get media () { return require(path.join(this.backend, 'media.js')) }

  get p2p () { return HUB.nodes.get(this.pub) }

  // 送一個「原始訊框」給某人——模擬惡意／畸形的對方。
  // 走的是假 socket -> 對方真正的 Decoder -> 對方真正的 _onFrame，沒有繞過任何驗證。
  rawSend (targetPub, frame) {
    const mine = this.p2p
    const c = mine && mine.conns.get(targetPub)
    if (!c) throw new Error(this.name + ' 沒有連到 ' + targetPub.slice(0, 8))
    const { encode } = require(path.join(this.backend, 'framing.js'))
    c.socket.write(encode(frame))
  }
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

// 等到「所有節點都閒下來」——比 sleep 固定秒數穩，事件全走 setImmediate。
async function settle (n = 12) { for (let i = 0; i < n; i++) await new Promise(r => setImmediate(r)) }

module.exports = { Node, HUB, ROOT, sleep, settle, pair, FakeSock }
