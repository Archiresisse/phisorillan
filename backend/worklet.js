'use strict'
// ──────────────────────────────────────────────────────────────────────────
// Phisorilla — Bare worklet（桌面版 main.js 的替身）
//
// 跑在 Bare runtime 的背景執行緒裡，由 react-native-bare-kit 嵌入 Android app。
// UI（React Native）透過 IPC 呼叫這裡的 RPC 介面；本檔不碰任何畫面。
//
// 架構對照桌面版：
//   Electron main.js  --ipcMain.handle-->  renderer
//   Bare worklet.js   --RPC over IPC   -->  React Native
//
// ── 設計鐵則（Bare 上比 Electron 嚴格）──────────────────────────────────
// 1. 這條執行緒死掉 = Android 背景服務沒了 = 收不到任何訊息。
//    因此：任何由對方資料觸發的路徑一律包 try/catch，絕不讓例外逃出去。
// 2. 非同步錯誤同樣會殺執行緒 -> 所有 async 都要接住 rejection。
// 3. 對方宣告的任何數字（檔案大小、成員、TTL）都當敵意輸入驗。
//
// ── 與桌面版的相容性 ────────────────────────────────────────────────────
// 線路格式（framing / 訊框 type / 棘輪 / vault）與桌面版**完全一致**，手機與電腦可互連。
// 本檔只改「收到之後怎麼驗證」，不改「線上長什麼樣」。
// ──────────────────────────────────────────────────────────────────────────

/* global Bare, BareKit */

const b4a = require('b4a')
const path = require('path')            // -> bare-path（見 package.json imports）
const crypto = require('crypto')        // -> bare-crypto
const identity = require('./identity')
const store = require('./store')
const ratchet = require('./ratchet')
const mailcrypto = require('./mailcrypto')
const safety = require('./safety')
const media = require('./media')
const P2P = require('./p2p')

// ── RPC 指令表（與桌面版 ipcMain.handle 的名稱對齊）──────────────────────
const CMD = {
  VAULT_STATUS: 1, VAULT_CREATE: 2, VAULT_UNLOCK: 3, APP_LOCK: 4,
  IDENTITY_GET: 10,
  CONTACTS_LIST: 20, CONTACTS_ADD: 21, CONTACTS_REMOVE: 22, CONTACTS_RENAME: 23,
  MESSAGES_LIST: 30, MESSAGE_SEND: 31, MESSAGE_DELETE: 32, MESSAGES_CLEAR: 33,
  SAFETY_GET: 40, SAFETY_VERIFY: 41,
  SETTINGS_GET: 50, SETTINGS_SET_NAME: 51, SETTINGS_SET_MAILBOX: 52, SETTINGS_SET_LANG: 53,
  GROUP_LIST: 60, GROUP_MESSAGES: 61, GROUP_CREATE: 62, GROUP_SEND: 63,
  GROUP_JOIN: 64, GROUP_INVITE: 65, GROUP_KICK: 66, GROUP_SET_ROLE: 67,
  GROUP_SET_TITLE: 68, GROUP_LEAVE: 69, GROUP_RENAME: 70,
  MEDIA_ATTACH: 80, MEDIA_PATH: 81, MEDIA_META: 82,
  TTL_GET: 90, TTL_SET: 91,
  // 由 worklet 主動推給 UI 的事件（對應桌面版 send('evt:...')）
  EVT_MESSAGE: 100, EVT_MSGSTATE: 101, EVT_STATUS: 102,
  EVT_GMESSAGE: 103, EVT_GROUPUPDATE: 104, EVT_PROGRESS: 105,
  EVT_DELETED: 106, EVT_TTL: 107, EVT_PROFILE: 108, EVT_WARN: 109,
  EVT_GROUPGONE: 110
}

const TEXT_TAG = 0x01
const CTRL_TAG = 0x00
const REPLY_TAG = 0x02

const HEX64 = /^[0-9a-f]{64}$/
const HEX32 = /^[0-9a-f]{32}$/
const MSGID = /^[0-9a-f]{24}$/
const ROLES = ['admin', 'member']
const TTL_MAX = 7 * 24 * 3600           // 閱後即焚上限 7 天（對方送來的值也照這個夾住）

let p2p = null
let me = null            // { publicKey, secretKey }
const rcache = new Map() // peerHex -> ratchet state
let burnTimer = null

const myHex = () => (me ? identity.toHex(me.publicKey) : null)
const newMsgId = () => b4a.toString(crypto.randomBytes(12), 'hex')

// 「認識的人」= 聯絡人，或任何群組的成員。
// 注意：Hyperswarm 上任何知道你公鑰的人都連得上你，不需要你先加他。
// 因此收到的東西必須自己判斷是不是認識的人送來的。
function knownPeer (hex) {
  if (store.getContacts().some(c => c.publicKey === hex)) return true
  return store.getGroups().some(g => (g.members || []).some(m => m.pubkey === hex))
}

// ── Double Ratchet 管理（與桌面版邏輯相同）────────────────────────────────
function encodeTextPayload (msg) {
  const body = b4a.from(msg.text, 'utf8')
  if (msg.replyTo && MSGID.test(msg.replyTo)) {
    return b4a.concat([b4a.from([REPLY_TAG]), b4a.from(msg.replyTo, 'latin1'), body])
  }
  return b4a.concat([b4a.from([TEXT_TAG]), body])
}

function ratchetFor (peerHex) {
  if (rcache.has(peerHex)) return rcache.get(peerHex)
  const saved = store.getRatchet(peerHex)
  let r
  if (saved) {
    r = ratchet.deserialize(saved)
  } else {
    const shared = mailcrypto.sharedSecret(me.secretKey, identity.parsePublicKey(peerHex))
    // 決定性初始者：公鑰字典序較小者為 initiator（雙方各自算出同樣結論）
    r = ratchet.bootstrap(shared, myHex() < peerHex)
  }
  rcache.set(peerHex, r)
  return r
}

function persistRatchet (peerHex) {
  const r = rcache.get(peerHex)
  if (r) store.setRatchet(peerHex, ratchet.serialize(r))
}

function sendRatchetText (peerHex, msg) {
  try {
    const r = ratchetFor(peerHex)
    if (!ratchet.canSend(r)) return false        // 尚未引導完成 -> 等對方先來訊息
    const out = ratchet.encrypt(r, encodeTextPayload(msg))
    persistRatchet(peerHex)
    return p2p.sendRatchetMsg(peerHex, msg.id, out.header, out.ct, msg.ts)
  } catch (e) {
    // 安全兜底：訊息留在佇列（state 仍為 sent），但絕不讓後端執行緒死掉
    return false
  }
}

function handleRatchetMsg (peerHex, { id, header, ct, ts }) {
  if (store.hasMessage(peerHex, id)) { p2p.sendAck(peerHex, id); return }
  let text = null
  let replyTo = null
  try {
    const pt = ratchet.decrypt(ratchetFor(peerHex), header, ct)
    persistRatchet(peerHex)      // decrypt 現在是原子的：丟例外時狀態不會被污染，所以這行只在成功後跑
    if (pt.length && pt[0] === CTRL_TAG) {
      // 這通常就是對方的開鏈握手：我方棘輪到這一刻才有送出能力，
      // 先前卡在佇列裡的訊息要馬上補送出去。
      p2p.sendAck(peerHex, id)
      resendPending(peerHex)
      return
    }
    if (pt.length >= 25 && pt[0] === REPLY_TAG) {
      replyTo = b4a.toString(pt.subarray(1, 25), 'latin1')
      text = b4a.toString(pt.subarray(25), 'utf8')
    } else {
      text = b4a.toString(pt.subarray(1), 'utf8')
    }
  } catch (e) {
    // 安全兜底：解不開就標記，不讓 worklet 崩潰
  }
  if (text === null) {
    // 解不開。對「已知聯絡人」顯示佔位符（可能是棘輪失步，使用者該知道有訊息沒收到）；
    // 對「完全不認識的人」直接丟掉——任何知道你公鑰的人都能連上來灌垃圾，
    // 而每存一則訊息就要把整個保險庫重新加密寫回，手機上這是實打實的耗電/耗儲存攻擊。
    if (!knownPeer(peerHex)) return
    text = '[無法解密]'
  }
  const message = { id, dir: 'in', text, ts, state: 'delivered' }
  if (replyTo) message.replyTo = replyTo
  addMessage(peerHex, message)
  push(CMD.EVT_MESSAGE, { peer: peerHex, message })
  p2p.sendAck(peerHex, id)
  resendPending(peerHex)      // 剛剛才拿到 DHr 的話，卡住的訊息現在送得出去了
}

// ── 閱後即焚（TTL）────────────────────────────────────────────────────────
// 語意：每個對話一個秒數，雙方共用（任一方設定都同步給對方，比照 Signal）。
// expiresAt 由「訊息時間戳 + 秒數」決定性算出 -> 兩邊在同一刻燒掉，不靠事件同步。
// 不用 1 秒輪詢：算出「下一個到期時刻」再排一次 timer（手機上省電）。

function stampTTL (key, msg) {
  const s = store.getTTL(key)
  if (s > 0) msg.expiresAt = msg.ts + s * 1000
  return msg
}

// 統一入口：所有寫進 store 的訊息都經過這裡，確保 TTL 一定被蓋章。
function addMessage (key, msg) {
  stampTTL(key, msg)
  store.appendMessage(key, msg)
  if (msg.expiresAt) scheduleBurn()
  return msg
}

function burnExpired () {
  const now = Date.now()
  let next = Infinity
  for (const key of store.chatKeys()) {
    // 先收集再刪，避免邊走訪邊 splice
    const due = store.getMessages(key).filter(m => m.expiresAt && m.expiresAt <= now)
    for (const m of due) {
      dropMedia(m)
      store.deleteMessage(key, m.id)
      push(CMD.EVT_DELETED, { peer: key, id: m.id, reason: 'ttl' })
    }
    for (const m of store.getMessages(key)) {
      if (m.expiresAt && m.expiresAt < next) next = m.expiresAt
    }
  }
  return next
}

function scheduleBurn () {
  clearTimeout(burnTimer); burnTimer = null
  let next
  try { next = burnExpired() } catch (e) { return }
  if (!isFinite(next)) return                       // 沒有待燒的訊息 -> 不掛 timer
  const wait = Math.max(250, Math.min(next - Date.now(), 30 * 60 * 1000)) // 最長 30 分後再醒
  burnTimer = setTimeout(() => { try { scheduleBurn() } catch (e) {} }, wait)
  if (burnTimer && burnTimer.unref) burnTimer.unref()
}

// ── 媒體 ──────────────────────────────────────────────────────────────────
// Android 沒有桌面版的 pmedia:// 自訂協定。改法：worklet 交出 .bin 的絕對路徑，
// RN 端用 file:// 直接渲染；匯出到相簿／下載匣屬於 SAF，只能在原生層做（見 android/）。
function dropMedia (m) {
  if (m && m.kind === 'media' && m.media && m.media.id) {
    try { media.remove(m.media.id) } catch (e) {}
  }
}

// ── 群組 ──────────────────────────────────────────────────────────────────
const GROUP_MAX = 10
const memberHexes = (g) => (g.members || []).map(m => m.pubkey)
const roleOf = (g, hex) => { const m = (g.members || []).find(x => x.pubkey === hex); return m ? m.role : null }
const isAdmin = (g, hex) => roleOf(g, hex) === 'admin'

function groupView (g) {
  const mine = (g.members || []).find(m => m.pubkey === myHex())
  // 自己永遠算在線；在線數含自己（與桌面版 v0.5.2 修正後一致）
  const members = (g.members || []).map(m => ({
    ...m, online: m.pubkey === myHex() ? true : (p2p ? p2p.isOnline(m.pubkey) : false)
  }))
  return {
    id: g.id, name: g.name, members, createdAt: g.createdAt,
    myRole: mine ? mine.role : 'guest',
    online: members.filter(m => m.online).length,
    ttl: store.getTTL(g.id)
  }
}

// 把外來的群組物件正規化，順便擋掉畸形／超量成員。
function sanitizeGroup (src, gid) {
  const seen = new Set()
  const members = []
  for (const m of (src.members || [])) {
    if (!m || !HEX64.test(m.pubkey || '') || seen.has(m.pubkey)) continue
    seen.add(m.pubkey)
    members.push({
      pubkey: m.pubkey,
      role: ROLES.includes(m.role) ? m.role : 'member',
      title: String(m.title || '').slice(0, 24),
      name: String(m.name || '').slice(0, 48)
    })
    if (members.length >= GROUP_MAX) break
  }
  return {
    id: gid,
    name: String(src.name || '未命名群組').slice(0, 48),
    members,
    createdAt: typeof src.createdAt === 'number' ? src.createdAt : Date.now()
  }
}

// ── 群組狀態的授權模型（這是原本最大的洞）──────────────────────────────
//
// 原本的規則只有一條：「gsync 裡有我，就整包覆蓋」。
// 後果：任何知道 gid 的人（例如被踢掉的前成員，或拿到過邀請碼的任何人）
// 都能送一個 gsync 把群組整個換掉——改名、踢光所有人、把自己設成 admin。
// gid 又明文寫在邀請碼裡，等於這個群組永遠可被劫持。
//
// 修法（刻意不動線路格式，維持與桌面版互通，只改「收到之後怎麼驗」）：
//   · 沒有這個群組    -> 只在「我和寄件人都在名單裡」時接受（這就是邀請加入流程）
//   · 寄件人是 admin  -> 接受任何變更（含把我踢掉）
//   · 寄件人是一般成員 -> 只接受「把他自己加進來／改他自己的顯示名」這一種變化
//   · 寄件人不是成員   -> 一律拒絕  ← 關鍵的那道閘
//
// ⚠️ 誠實話：這仍然是「最後寫入者獲勝 + 角色檢查」，不是密碼學保證。
//    群組狀態沒有簽章，兩個 admin 可以打架，也無法向第三方證明誰改了什麼。
//    要真的做對，需要「每筆群組操作都由操作者簽名」的操作日誌／CRDT。
//    那超出本次移植範圍。但這個洞已從「任何路人可劫持」降到「admin 才能亂搞」。
function selfChangeOnly (mine, incoming, peer) {
  if (incoming.name !== mine.name) return false
  const before = new Map(mine.members.map(m => [m.pubkey, m]))
  const after = new Map(incoming.members.map(m => [m.pubkey, m]))
  for (const [pk, m] of after) {
    const b = before.get(pk)
    if (!b) { if (pk !== peer || m.role !== 'member') return false; continue } // 只能新增「他自己」且為一般成員
    if (b.role !== m.role || b.title !== m.title) return false                 // 不准改任何人的角色／頭銜
    if (b.name !== m.name && pk !== peer) return false                         // 只能改自己的顯示名
  }
  for (const pk of before.keys()) if (!after.has(pk)) return false             // 不准刪任何人
  return true
}

function gsyncAllowed (mine, incoming, peer) {
  if (!mine) {
    // 我還沒有這個群 -> 這是邀請加入流程：我和對方都得在名單裡
    return incoming.members.some(m => m.pubkey === myHex()) &&
           incoming.members.some(m => m.pubkey === peer)
  }
  if (isAdmin(mine, peer)) return true                                  // 管理員：任何變更
  if (roleOf(mine, peer)) return selfChangeOnly(mine, incoming, peer)   // 一般成員：只能動自己

  // 還不是成員 -> 這是「拿著邀請碼的新人」在自報到。
  // ⚠️ 誠實話：邀請碼只是 base64 的 JSON，沒有任何密碼學憑證，
  //    等於「知道 gid 就能加入」的持有者權杖模型。這是桌面版既有設計，這裡沒辦法在
  //    不破壞互通的前提下修掉。能做的是不讓「被踢過的人」憑記憶中的 gid 溜回來。
  if (store.isRevoked(mine.id, peer)) return false
  if (mine.members.length >= GROUP_MAX) return false
  return selfChangeOnly(mine, incoming, peer)
}

function saveGroup (g) {
  const gs = store.getGroups()
  const i = gs.findIndex(x => x.id === g.id)
  if (i >= 0) gs[i] = g; else gs.push(g)
  store.saveGroups(gs)
}

function dropGroup (gid) {
  store.saveGroups(store.getGroups().filter(g => g.id !== gid))
}

function handleGroupFrame (peer, f) {
  const gid = f.gid || (f.group && f.group.id)
  if (typeof gid !== 'string' || !HEX32.test(gid)) return

  if (f.type === 'gmsg') {
    const g = store.getGroup(gid)
    if (!g || !g.members.some(m => m.pubkey === peer)) return
    if (typeof f.id !== 'string' || !MSGID.test(f.id)) return
    p2p.sendGroupAck(peer, gid, f.id)                 // 回執（群組雙勾）
    if (store.hasMessage(gid, f.id)) return           // 去重
    const message = {
      id: f.id, dir: 'in', text: String(f.text || ''),
      ts: typeof f.ts === 'number' ? f.ts : Date.now(), state: 'delivered', from: peer
    }
    if (typeof f.reply === 'string' && MSGID.test(f.reply)) message.replyTo = f.reply
    addMessage(gid, message)
    push(CMD.EVT_GMESSAGE, { gid, message, group: groupView(g) })

  } else if (f.type === 'gack') {
    const g = store.getGroup(gid); if (!g) return
    if (!g.members.some(m => m.pubkey === peer)) return    // 非成員的回執不算數
    const m = store.getMessage(gid, f.id)
    if (!m || m.dir !== 'out') return
    const gacks = m.gacks || []
    if (!gacks.includes(peer)) gacks.push(peer)
    // 「其他成員全部回執」才算送達。用當下的成員名單算：踢人之後不該永遠卡在單勾。
    const others = g.members.filter(x => x.pubkey !== myHex()).map(x => x.pubkey)
    const delivered = others.length > 0 && others.every(pk => gacks.includes(pk))
    const was = m.state
    store.updateMessage(gid, f.id, { gacks, state: delivered ? 'delivered' : was })
    if (delivered && was !== 'delivered') push(CMD.EVT_MSGSTATE, { peer: gid, id: f.id, state: 'delivered' })

  } else if (f.type === 'gsync') {
    const mine = store.getGroup(gid)
    const incoming = sanitizeGroup(f.group || {}, gid)
    if (!incoming.members.length) return
    if (!gsyncAllowed(mine, incoming, peer)) return

    // 管理員送來的名單是權威：被移除的人記進本機封鎖名單，被加回的人解除封鎖。
    if (mine && isAdmin(mine, peer)) {
      const after = new Set(incoming.members.map(m => m.pubkey))
      for (const m of mine.members) if (!after.has(m.pubkey) && m.pubkey !== myHex()) store.revoke(gid, m.pubkey)
      for (const pk of after) store.unrevoke(gid, pk)
    }

    if (!incoming.members.some(m => m.pubkey === myHex())) {
      // admin 送來一份沒有我的名單 = 我被踢了
      if (mine) { dropGroup(gid); store.clearRevoked(gid); push(CMD.EVT_GROUPGONE, { gid, reason: 'kicked' }) }
      return
    }
    const wasMember = mine ? !!roleOf(mine, peer) : false
    saveGroup(incoming)
    for (const h of memberHexes(incoming)) if (h !== myHex()) p2p.connectPeer(h)
    push(CMD.EVT_GROUPUPDATE, { group: groupView(incoming) })
    // 對方是新加入的成員、而我是管理員 -> 回一份權威名單，讓所有人收斂到同一版。
    if (!wasMember && isAdmin(incoming, myHex()) && peer !== myHex()) {
      p2p.groupBroadcast(memberHexes(incoming), { type: 'gsync', group: incoming })
    }

  } else if (f.type === 'gleave') {
    // 任何人都有權把「他自己」移出群組——這是唯一不需要 admin 的成員名單變更。
    const g = store.getGroup(gid)
    if (!g || !g.members.some(x => x.pubkey === peer)) return
    g.members = g.members.filter(x => x.pubkey !== peer)
    saveGroup(g)
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })

  } else if (f.type === 'ttl') {
    const g = store.getGroup(gid)
    if (!g || !isAdmin(g, peer)) return          // 群組的閱後即焚只有管理員能改
    const s = Math.max(0, Math.min(Math.floor(Number(f.seconds)) || 0, TTL_MAX))
    store.setTTL(gid, s)
    push(CMD.EVT_TTL, { peer: gid, seconds: s, by: 'peer' })
    scheduleBurn()

  } else if (f.type === 'gdelete') {
    const g = store.getGroup(gid)
    if (!g || !g.members.some(x => x.pubkey === peer)) return
    const m = store.getMessage(gid, f.id)
    if (!m) return
    // 只能刪「自己發的」；admin 可以刪任何人的。否則群裡任何人都能刪光別人的訊息。
    if (m.from !== peer && !isAdmin(g, peer)) return
    dropMedia(m)
    store.deleteMessage(gid, f.id)
    push(CMD.EVT_DELETED, { peer: gid, id: f.id, reason: 'remote' })
  }
}

// ── P2P 事件接線 ──────────────────────────────────────────────────────────
// 原本只接了 rmessage / ack / group / peer-status。
// 其餘（媒體、TTL、profile、刪除、進度）p2p.js 都在發，但沒人聽 -> 功能等於不存在。
function startSwarm () {
  p2p = new P2P()

  p2p.on('rmessage', ({ peer, ...rest }) => guard(() => handleRatchetMsg(peer, rest)))
  p2p.on('group', ({ peer, frame }) => guard(() => handleGroupFrame(peer, frame)))

  p2p.on('ack', ({ peer, id }) => guard(() => {
    store.updateMessageState(peer, id, 'delivered')
    push(CMD.EVT_MSGSTATE, { peer, id, state: 'delivered' })
  }))

  p2p.on('peer-status', ({ peer, online }) => guard(() => {
    push(CMD.EVT_STATUS, { peer, online })
    if (online) { kickstartRatchet(peer); resendPending(peer) }
  }))

  // 明文 msg／信箱取回／媒體開始 都走這裡
  p2p.on('message', ({ peer, gid, message }) => guard(() => {
    const key = gid || peer
    if (!key || !message || typeof message.id !== 'string') return
    if (gid) {                                   // 群組媒體：寄件人必須是成員
      const g = store.getGroup(gid)
      if (!g || !g.members.some(m => m.pubkey === peer)) return
    }
    if (store.hasMessage(key, message.id)) return
    addMessage(key, message)
    push(gid ? CMD.EVT_GMESSAGE : CMD.EVT_MESSAGE, gid ? { gid, message } : { peer, message })
  }))

  p2p.on('msgstate', ({ peer, gid, id, state }) => guard(() => {
    const key = gid || peer
    store.updateMessageState(key, id, state)
    push(CMD.EVT_MSGSTATE, { peer: key, id, state })
  }))

  // 進度事件很密集：只推給 UI，不寫進保險庫（每次寫都要重新加密整包）
  p2p.on('file-progress', (e) => push(CMD.EVT_PROGRESS, e))

  p2p.on('file-complete', ({ peer, gid, mid, media: meta }) => guard(() => {
    const key = gid || peer
    const patch = { state: 'delivered' }
    if (meta) patch.media = meta
    store.updateMessage(key, mid, patch)
    push(CMD.EVT_MSGSTATE, { peer: key, id: mid, state: 'delivered' })
  }))

  p2p.on('file-abort', ({ peer, gid, mid, reason }) => guard(() => {
    const key = gid || peer
    store.updateMessage(key, mid, { state: 'failed', error: reason })
    push(CMD.EVT_MSGSTATE, { peer: key, id: mid, state: 'failed', error: reason })
  }))

  // 為所有人刪除（1:1）：對方只能撤回「他自己發給我的」訊息。
  p2p.on('delete', ({ peer, id }) => guard(() => {
    const m = store.getMessage(peer, id)
    if (!m || m.dir !== 'in') return
    dropMedia(m)
    store.deleteMessage(peer, id)
    push(CMD.EVT_DELETED, { peer, id, reason: 'remote' })
  }))

  // 對方改了閱後即焚秒數
  p2p.on('ttl', ({ peer, seconds }) => guard(() => {
    const s = Math.max(0, Math.min(Math.floor(seconds) || 0, TTL_MAX))
    store.setTTL(peer, s)
    push(CMD.EVT_TTL, { peer, seconds: s, by: 'peer' })
    scheduleBurn()
  }))

  p2p.on('profile', ({ peer, name, mailbox }) => guard(() => {
    const list = store.getContacts()
    const c = list.find(x => x.publicKey === peer)
    if (!c) return
    c.remoteName = String(name || '').slice(0, 48)
    if (HEX64.test(mailbox || '')) c.mailbox = mailbox
    store.saveContacts(list)
    push(CMD.EVT_PROFILE, { peer, remoteName: c.remoteName, mailbox: c.mailbox || '' })
  }))

  p2p.on('warn', (e) => push(CMD.EVT_WARN, e))

  const st = store.getSettings()
  p2p.setProfileName(st.displayName || '')

  // start() 是 async：不接住 rejection 的話，Bare 上的未處理拒絕會直接殺掉執行緒。
  p2p.start(store.getSeed())
    .then(() => {
      for (const c of store.getContacts()) p2p.connectPeer(c.publicKey)
      for (const g of store.getGroups()) {
        for (const h of memberHexes(g)) if (h !== myHex()) p2p.connectPeer(h)
      }
      if (HEX64.test(st.mailbox || '')) p2p.setMyMailbox(st.mailbox)
      push(CMD.EVT_STATUS, { swarm: 'listening', publicKey: myHex() })
    })
    .catch((e) => push(CMD.EVT_WARN, { error: 'swarm 啟動失敗: ' + String(e && e.message) }))
}

// 任何由對方輸入觸發的處理，都不准把例外丟出去（丟出去 = 背景服務死亡）。
function guard (fn) {
  try { fn() } catch (e) { push(CMD.EVT_WARN, { error: String((e && e.message) || e) }) }
}

// 🔴 棘輪只有「字典序較小」的那一方能先開口（bootstrap 時 responder 的 CKs 是 null）。
// 也就是說 responder 想先講話的話，訊息會一直卡在 state:'sent'，兩邊明明都在線卻永遠送不到。
// 這會影響大約一半的新對話（看公鑰誰大誰小），而且畫面上還是打勾，使用者完全看不出來。
//
// 解法：initiator 一連上線就主動送一則 CTRL 握手訊息，把鏈路打開。
//   · CTRL_TAG 的訊框收端【本來就有處理】（回 ack 然後忽略），所以線路格式完全沒變，
//     和桌面版仍然互通——桌面版收到只會靜靜 ack 掉。
//   · 只在 Ns === 0（這條鏈從沒送過東西）時送，所以每個聯絡人只會發生一次。
function kickstartRatchet (peerHex) {
  try {
    if (!HEX64.test(peerHex || '') || peerHex === myHex()) return
    if (myHex() > peerHex) return                  // 我是 responder，只能等對方先開口
    const r = ratchetFor(peerHex)
    if (!ratchet.canSend(r) || r.Ns !== 0) return  // 沒 bootstrap 完，或鏈路已經開過了
    const out = ratchet.encrypt(r, b4a.from([CTRL_TAG]))
    persistRatchet(peerHex)
    p2p.sendRatchetMsg(peerHex, newMsgId(), out.header, out.ct, Date.now())
  } catch (e) {}                                   // 握手失敗不能拖垮任何東西
}

// 對方上線時補送未送達的訊息（與桌面版相同策略）
function resendPending (peerHex) {
  for (const m of store.getMessages(peerHex)) {
    if (m.dir !== 'out' || m.state === 'delivered') continue
    if (!m.kind) sendRatchetText(peerHex, m)
  }
}

// 對方不在線且我們知道他的信箱 -> 用他的公鑰封裝後寄存（信箱看不到內容）。
// ⚠️ 誠實話：信箱這條路只有 sealed box，**沒有棘輪的前向保密**。
//    身分私鑰若日後外洩，寄存過的訊息可被回溯解密。這是桌面版既有設計，照搬以維持互通。
function tryMailbox (peerHex, msg) {
  try {
    const c = store.getContacts().find(x => x.publicKey === peerHex)
    if (!c || !HEX64.test(c.mailbox || '')) return
    const box = mailcrypto.sealFor(identity.parsePublicKey(peerHex),
      b4a.from(JSON.stringify({ id: msg.id, text: msg.text, ts: msg.ts }), 'utf8'))
    Promise.resolve(p2p.depositToMailbox(c.mailbox, peerHex, msg.id, box, msg.ts))
      .then((ok) => { if (ok) push(CMD.EVT_MSGSTATE, { peer: peerHex, id: msg.id, state: 'mailboxed' }) })
      .catch(() => {})
  } catch (e) {}
}

// ── RPC 介面 ──────────────────────────────────────────────────────────────
const handlers = {
  [CMD.VAULT_STATUS]: () => ({ exists: store.exists(), unlocked: store.isUnlocked() }),

  [CMD.VAULT_CREATE]: ({ password }) => {
    if (typeof password !== 'string' || password.length < 6) return { ok: false, error: '通行碼至少 6 個字。' }
    store.create(password)
    me = identity.keyPairFromSeed(store.getSeed())
    startSwarm()
    return { ok: true, publicKey: myHex() }
  },

  [CMD.VAULT_UNLOCK]: ({ password }) => {
    try {
      store.unlock(password)
    } catch (e) {
      return { ok: false, error: '通行碼錯誤。' }   // GCM 驗證標籤擋下
    }
    me = identity.keyPairFromSeed(store.getSeed())
    startSwarm()
    scheduleBurn()          // 解鎖時先把離線期間已到期的訊息燒掉
    return { ok: true, publicKey: myHex() }
  },

  [CMD.APP_LOCK]: () => {
    clearTimeout(burnTimer); burnTimer = null
    if (p2p) { const old = p2p; p2p = null; Promise.resolve(old.destroy()).catch(() => {}) }
    rcache.clear()
    me = null
    store.lock()
    return { ok: true }
  },

  [CMD.IDENTITY_GET]: () => ({ publicKey: myHex(), short: identity.shortKey(myHex()) }),

  [CMD.CONTACTS_LIST]: () => store.getContacts().map(c => ({
    ...c, online: p2p ? p2p.isOnline(c.publicKey) : false, ttl: store.getTTL(c.publicKey)
  })),

  [CMD.CONTACTS_ADD]: ({ publicKey, name }) => {
    const pk = identity.parsePublicKey(publicKey)     // 注意：格式錯是回傳 null，不是丟例外
    if (!pk) return { ok: false, error: '公鑰格式不正確。' }
    // 格式正確不代表是曲線上的合法點；不驗的話，之後建立棘輪時 sodium 會丟出
    // 未接住的例外並殺死整個 worklet。這裡先試轉一次 Curve25519 當作驗證。
    try { mailcrypto.edPkToCurve(pk) } catch { return { ok: false, error: '這不是有效的公鑰。' } }
    const hex = identity.toHex(pk)
    if (hex === myHex()) return { ok: false, error: '不能加自己。' }
    const list = store.getContacts()
    if (list.some(c => c.publicKey === hex)) return { ok: false, error: '已經在聯絡人裡了。' }
    const contact = { publicKey: hex, name: String(name || '').slice(0, 48), addedAt: Date.now(), verified: false }
    list.push(contact)
    store.saveContacts(list)
    p2p.connectPeer(hex)
    return { ok: true, contact }
  },

  [CMD.CONTACTS_REMOVE]: ({ publicKey }) => {
    store.saveContacts(store.getContacts().filter(c => c.publicKey !== publicKey))
    store.dropRatchet(publicKey)
    rcache.delete(publicKey)
    for (const m of store.getMessages(publicKey)) dropMedia(m)
    if (p2p) p2p.disconnectPeer(publicKey)
    return { ok: true }
  },

  [CMD.CONTACTS_RENAME]: ({ publicKey, name }) => {
    const list = store.getContacts()
    const c = list.find(x => x.publicKey === publicKey)
    if (!c) return { ok: false, error: '找不到這位聯絡人。' }
    c.name = String(name || '').slice(0, 48)
    store.saveContacts(list)
    return { ok: true, contact: c }
  },

  [CMD.MESSAGES_LIST]: ({ peer }) => store.getMessages(peer),

  [CMD.MESSAGE_SEND]: ({ peer, text, replyTo }) => {
    if (!HEX64.test(peer || '')) return { ok: false, error: '對象不正確。' }
    text = String(text || '').trim()
    if (!text) return { ok: false, error: '訊息是空的。' }
    const msg = { id: newMsgId(), dir: 'out', text, ts: Date.now(), state: 'sent' }
    if (replyTo && MSGID.test(replyTo)) msg.replyTo = replyTo
    addMessage(peer, msg)
    if (!sendRatchetText(peer, msg)) tryMailbox(peer, msg)   // 送不出去 -> 寄信箱；再不行就排隊等上線
    return { ok: true, message: msg }
  },

  // 為所有人刪除／本機刪除。只有「自己發出的」才能撤回。
  [CMD.MESSAGE_DELETE]: ({ peer, id, forEveryone }) => {
    const m = store.getMessage(peer, id)
    if (!m) return { ok: false, error: '找不到這則訊息。' }
    if (forEveryone) {
      if (m.dir !== 'out') return { ok: false, error: '只能撤回自己發出的訊息。' }
      const g = store.getGroup(peer)
      if (g) p2p.groupBroadcast(memberHexes(g), { type: 'gdelete', gid: peer, id })
      else p2p.sendDelete(peer, id)
    }
    dropMedia(m)
    store.deleteMessage(peer, id)
    push(CMD.EVT_DELETED, { peer, id, reason: forEveryone ? 'me-all' : 'me-local' })
    return { ok: true }
  },

  [CMD.MESSAGES_CLEAR]: ({ peer }) => {
    for (const m of store.getMessages(peer).slice()) {
      dropMedia(m)
      store.deleteMessage(peer, m.id)
    }
    return { ok: true }
  },

  [CMD.SAFETY_GET]: ({ peer }) => {
    if (!HEX64.test(peer || '')) return { code: '' }
    const c = store.getContacts().find(x => x.publicKey === peer)
    return { code: safety.safetyNumber(myHex(), peer), verified: !!(c && c.verified) }
  },

  // 桌面版有這個介面但這裡漏做，呼叫會直接回 "unknown cmd 41"。
  // 帶外比對過安全碼之後，把這位聯絡人標記為已驗證。
  [CMD.SAFETY_VERIFY]: ({ peer, verified }) => {
    const list = store.getContacts()
    const c = list.find(x => x.publicKey === peer)
    if (!c) return { ok: false, error: '找不到這位聯絡人。' }
    c.verified = verified !== false
    c.verifiedAt = c.verified ? Date.now() : null
    store.saveContacts(list)
    return { ok: true, verified: c.verified }
  },

  [CMD.SETTINGS_GET]: () => store.getSettings(),

  [CMD.SETTINGS_SET_NAME]: ({ name }) => {
    const n = String(name || '').slice(0, 48)
    store.setSettings({ displayName: n })
    if (p2p) p2p.setProfileName(n)          // 原本只寫進 store，對方永遠看不到你改名
    return { ok: true }
  },

  [CMD.SETTINGS_SET_MAILBOX]: ({ mailbox }) => {
    const hex = String(mailbox || '').trim().toLowerCase()
    if (hex && !HEX64.test(hex)) return { ok: false, error: '信箱公鑰格式不正確。' }
    store.setSettings({ mailbox: hex })
    if (p2p) p2p.setMyMailbox(hex)
    return { ok: true }
  },

  // 语言偏好（纯本机，不上线路）。只接受已知的三个值。
  [CMD.SETTINGS_SET_LANG]: ({ lang }) => {
    const l = String(lang || '')
    if (!['tw', 'cn', 'en'].includes(l)) return { ok: false, error: 'unknown lang' }
    store.setSettings({ lang: l })
    return { ok: true }
  },

  // ── 閱後即焚 ────────────────────────────────────────────────────────────
  [CMD.TTL_GET]: ({ key }) => ({ seconds: store.getTTL(key) }),

  [CMD.TTL_SET]: ({ key, seconds }) => {
    const s = Math.max(0, Math.min(Math.floor(Number(seconds)) || 0, TTL_MAX))
    const g = store.getGroup(key)
    if (g && !isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以改群組的閱後即焚。' }
    store.setTTL(key, s)
    if (g) p2p.groupBroadcast(memberHexes(g), { type: 'ttl', gid: key, seconds: s })
    else if (HEX64.test(key || '')) p2p.sendTTL(key, s)
    // 只影響之後的訊息；不追溯既有訊息（與 Signal 一致，避免「一改設定就燒掉整段歷史」）
    push(CMD.EVT_TTL, { peer: key, seconds: s, by: 'me' })
    return { ok: true, seconds: s }
  },

  // ── 媒體 ────────────────────────────────────────────────────────────────
  // path 由 RN 端提供：Android 的相簿／檔案選取器給的是 content:// URI，
  // 必須先在原生層複製成真實路徑再傳進來（bare-fs 開不了 content://）。
  [CMD.MEDIA_ATTACH]: ({ peer, gid, path: src, name }) => {
    const key = gid || peer
    if (!key) return Promise.resolve({ ok: false, error: '沒有指定對象。' })
    if (typeof src !== 'string' || !src) return Promise.resolve({ ok: false, error: '沒有檔案路徑。' })
    const g = gid ? store.getGroup(gid) : null
    if (gid && !g) return Promise.resolve({ ok: false, error: '找不到群組。' })

    return media.importFile(src, name).then((m) => {
      const msg = {
        id: newMsgId(), dir: 'out', ts: Date.now(), state: 'sent',
        kind: 'media', media: m, text: m.name
      }
      addMessage(key, msg)
      const done = gid
        ? p2p.sendFileToGroup(memberHexes(g), msg.id, m, media.binPath(m.id), msg.ts, gid)
        : p2p.sendFile(peer, msg.id, m, media.binPath(m.id), msg.ts)
      Promise.resolve(done).catch(() => {})     // 送失敗就留佇列；rejection 不能逃出去
      return { ok: true, message: msg }
    }).catch((e) => ({ ok: false, error: '讀不到這個檔案：' + String(e && e.message) }))
  },

  // Android 沒有 pmedia://：交出實體路徑，RN 端用 file:// 渲染；
  // 要存到相簿／下載匣則由原生層走 SAF（見 android/PhiMediaModule.kt）。
  [CMD.MEDIA_PATH]: ({ id }) => {
    if (!media.exists(id)) return { ok: false, error: '媒體不存在。' }
    return { ok: true, path: media.binPath(id), uri: 'file://' + media.binPath(id), meta: media.readMeta(id) }
  },

  [CMD.MEDIA_META]: ({ id }) => media.readMeta(id) || { ok: false, error: '媒體不存在。' },

  // ── 群組 ────────────────────────────────────────────────────────────────
  [CMD.GROUP_LIST]: () => store.getGroups().map(groupView),

  [CMD.GROUP_MESSAGES]: ({ gid }) => store.getMessages(gid),

  [CMD.GROUP_CREATE]: ({ name, members }) => {
    name = String(name || '').trim().slice(0, 48) || '未命名群組'
    const id = b4a.toString(crypto.randomBytes(16), 'hex')
    const picks = (members || []).filter(pk => HEX64.test(pk) && pk !== myHex()).slice(0, GROUP_MAX - 1)
    const mem = [{ pubkey: myHex(), role: 'admin', title: '', name: store.getSettings().displayName || '' }]
    for (const pk of picks) {
      const c = store.getContacts().find(x => x.publicKey === pk)
      mem.push({ pubkey: pk, role: 'member', title: '', name: c ? (c.name || '') : '' })
    }
    const g = { id, name, members: mem, createdAt: Date.now() }
    saveGroup(g)
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    return { ok: true, group: groupView(g) }
  },

  // for（選填）：指定這張邀請碼是發給誰的。指定的話會順便解除他的封鎖，
  // 讓「踢掉之後又想請回來」這件事做得到（不指定的話，被踢過的人用不了這張碼）。
  [CMD.GROUP_INVITE]: ({ gid, for: target }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    if (!isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以邀請。' }
    if (g.members.length >= GROUP_MAX) return { ok: false, error: '群組已達 10 人上限。' }
    if (HEX64.test(target || '')) store.unrevoke(gid, target)
    return { ok: true, code: b4a.toString(b4a.from(JSON.stringify({ g }), 'utf8'), 'base64') }
  },

  [CMD.GROUP_JOIN]: ({ code }) => {
    let payload
    try { payload = JSON.parse(b4a.toString(b4a.from(code, 'base64'), 'utf8')) } catch { return { ok: false, error: '邀請碼格式不正確。' } }
    const src = payload.g || {}
    if (!HEX32.test(src.id || '')) return { ok: false, error: '邀請碼無效。' }
    const g = sanitizeGroup(src, src.id)
    if (!g.members.length) return { ok: false, error: '邀請碼無效。' }
    if (!g.members.some(m => m.pubkey === myHex())) {
      if (g.members.length >= GROUP_MAX) return { ok: false, error: '群組已滿（10 人）。' }
      g.members.push({ pubkey: myHex(), role: 'member', title: '', name: store.getSettings().displayName || '' })
    }
    saveGroup(g)
    for (const h of memberHexes(g)) if (h !== myHex()) p2p.connectPeer(h)
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_SEND]: ({ gid, text, replyTo }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    text = String(text || '').trim(); if (!text) return { ok: false, error: '訊息是空的。' }
    const msg = { id: newMsgId(), dir: 'out', text, ts: Date.now(), state: 'sent', gacks: [] }
    if (replyTo && MSGID.test(replyTo)) msg.replyTo = replyTo
    addMessage(gid, msg)
    p2p.groupBroadcast(memberHexes(g), { type: 'gmsg', gid, id: msg.id, text, ts: msg.ts, reply: msg.replyTo })
    return { ok: true, message: msg }
  },

  [CMD.GROUP_RENAME]: ({ gid, name }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    if (!isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以改名。' }
    g.name = String(name || '').trim().slice(0, 48) || g.name
    saveGroup(g)
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_KICK]: ({ gid, pubkey }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    if (!isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以踢人。' }
    if (pubkey === myHex()) return { ok: false, error: '要離開群組請用「退出」。' }
    if (!g.members.some(m => m.pubkey === pubkey)) return { ok: false, error: '這個人不在群組裡。' }
    const before = memberHexes(g)                    // 先留一份：被踢的人也得收到通知
    g.members = g.members.filter(m => m.pubkey !== pubkey)
    saveGroup(g)
    store.revoke(gid, pubkey)                        // 免得他記著 gid，事後自己 gsync 溜回來
    p2p.groupBroadcast(before, { type: 'gsync', group: g })   // 含被踢者 -> 他那邊會 EVT_GROUPGONE
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_SET_ROLE]: ({ gid, pubkey, role }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    if (!isAdmin(g, myHex())) return { ok: false, error: '只有管理員可以改角色。' }
    if (!ROLES.includes(role)) return { ok: false, error: '角色不正確。' }
    const m = g.members.find(x => x.pubkey === pubkey)
    if (!m) return { ok: false, error: '這個人不在群組裡。' }
    // 不能把最後一個管理員降級，否則這個群組永遠沒人管得動。
    if (m.role === 'admin' && role !== 'admin' && g.members.filter(x => x.role === 'admin').length <= 1) {
      return { ok: false, error: '群組至少要有一位管理員。' }
    }
    m.role = role
    saveGroup(g)
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_SET_TITLE]: ({ gid, pubkey, title }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    const target = pubkey || myHex()
    // 管理員可以給任何人設頭銜；一般成員只能改自己的。
    if (!isAdmin(g, myHex()) && target !== myHex()) return { ok: false, error: '只能改自己的頭銜。' }
    const m = g.members.find(x => x.pubkey === target)
    if (!m) return { ok: false, error: '這個人不在群組裡。' }
    m.title = String(title || '').slice(0, 24)
    saveGroup(g)
    // 一般成員改自己的頭銜也會送出去，但收方的 selfChangeOnly 只放行「加自己／改自己名字」，
    // 所以非管理員的頭銜要等管理員再送一次 gsync 才會全體收斂（已知限制，見 README）。
    p2p.groupBroadcast(memberHexes(g), { type: 'gsync', group: g })
    push(CMD.EVT_GROUPUPDATE, { group: groupView(g) })
    return { ok: true, group: groupView(g) }
  },

  [CMD.GROUP_LEAVE]: ({ gid }) => {
    const g = store.getGroup(gid); if (!g) return { ok: false, error: '找不到群組。' }
    p2p.groupBroadcast(memberHexes(g), { type: 'gleave', gid })
    for (const m of store.getMessages(gid)) dropMedia(m)
    dropGroup(gid)
    store.clearRevoked(gid)
    push(CMD.EVT_GROUPGONE, { gid, reason: 'left' })
    return { ok: true }
  }
}

// ── IPC 接線（react-native-bare-kit 提供 BareKit.IPC）────────────────────
// 協定：{ id, cmd, args } -> { id, ok, data } | { id, ok:false, error }
// 事件推播：{ evt, data }
let ipc = null

function push (evt, data) {
  if (!ipc) return
  try { ipc.write(b4a.from(JSON.stringify({ evt, data }) + '\n')) } catch (e) {}
}

function reply (stream, res) {
  try { stream.write(b4a.from(JSON.stringify(res) + '\n')) } catch (e) {}
}

function attach (stream) {
  ipc = stream
  let buf = ''
  stream.on('data', (chunk) => {
    buf += b4a.toString(chunk, 'utf8')
    let i
    while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i); buf = buf.slice(i + 1)
      if (!line.trim()) continue
      let req
      try { req = JSON.parse(line) } catch { continue }
      const fn = handlers[req.cmd]
      if (!fn) { reply(stream, { id: req.id, ok: false, error: 'unknown cmd ' + req.cmd }); continue }
      try {
        const out = fn(req.args || {})
        // handler 可以回 Promise（媒體匯入是非同步的）；rejection 一律轉成 RPC 錯誤，
        // 絕不讓它變成 unhandled rejection 把執行緒帶走。
        if (out && typeof out.then === 'function') {
          out.then(
            (data) => reply(stream, { id: req.id, ok: true, data }),
            (e) => reply(stream, { id: req.id, ok: false, error: String((e && e.message) || e) })
          )
        } else {
          reply(stream, { id: req.id, ok: true, data: out })
        }
      } catch (e) {
        reply(stream, { id: req.id, ok: false, error: String((e && e.message) || e) })
      }
    }
  })
  stream.on('error', () => {})
}

// 初始化：資料目錄由宿主 app 傳入（Android 用 app 私有目錄）
function boot (dataDir) {
  store.init(dataDir)
  // 原本沒人呼叫 media.init()：DIR 是 null，一收到檔案 path.join(null,…) 就丟例外，
  // 媒體功能等於完全不會動。
  media.init(path.join(dataDir, 'media'))
}

// 在 react-native-bare-kit 裡，BareKit.IPC 是與 RN 端的雙工串流
if (typeof BareKit !== 'undefined' && BareKit.IPC) {
  boot(Bare.argv[0] || '/data/data/com.phisorilla/files')
  attach(BareKit.IPC)
}

module.exports = { boot, attach, handlers, CMD }
