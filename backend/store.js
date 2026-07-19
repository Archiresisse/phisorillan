'use strict'
// 以加密保險庫為後盾的儲存層。
// 解鎖後，全部內容（種子／設定／聯絡人／訊息）以單一物件存在記憶體；
// 任何變更都會（去抖動地）重新加密寫回 vault.enc。磁碟上永遠是密文。

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const vault = require('./vault')

let FILE = null
let state = null          // 解鎖後的明文狀態（記憶體）
let password = null       // 僅存在記憶體，供重新加密用
let writeTimer = null

function init (userDataDir) {
  FILE = path.join(userDataDir, 'vault.enc')
}

function exists () {
  return FILE && fs.existsSync(FILE)
}

function blankState () {
  return {
    seed: crypto.randomBytes(32).toString('hex'),
    settings: { displayName: '', background: null, avatar: null, mailbox: '' },
    contacts: [],          // { publicKey, name, remoteName, avatar, mailbox, addedAt }
    messages: {},          // peerHex 或 groupId -> [ {id,dir,text,ts,state} ]
    groups: [],            // { id, name, members:[{pubkey,role,title,name}], createdAt }
    ratchets: {},          // peerHex -> Double Ratchet 序列化狀態（JSON 字串）
    ttls: {},              // peerHex/groupId -> 閱後即焚秒數（0 = 關閉）
    revoked: {}            // groupId -> [被踢過的 pubkey]（本機記錄，不上線路）
  }
}

// 建立新保險庫（首次使用）
function create (pw) {
  state = blankState()
  password = pw
  persistNow()
  return true
}

// 用通行碼解鎖；通行碼錯誤會丟出錯誤
function unlock (pw) {
  const blob = JSON.parse(fs.readFileSync(FILE, 'utf8'))
  state = vault.decrypt(blob, pw) // 錯誤密碼 -> 在此丟出
  // 向後相容：補齊缺漏欄位
  state.settings = Object.assign({ displayName: '', background: null, avatar: null, mailbox: '' }, state.settings || {})
  state.contacts = state.contacts || []
  state.messages = state.messages || {}
  state.groups = state.groups || []
  state.ratchets = state.ratchets || {}
  password = pw
  return true
}

function lock () {
  flush()
  state = null
  password = null
}

function isUnlocked () { return !!state }

function persistNow () {
  if (!state || password == null) return
  const blob = vault.encrypt(state, password)
  const tmp = FILE + '.tmp'
  fs.writeFileSync(tmp, JSON.stringify(blob))
  fs.renameSync(tmp, FILE)
}

// 去抖動寫入，避免連續變更時頻繁加密
function persist () {
  clearTimeout(writeTimer)
  writeTimer = setTimeout(persistNow, 250)
}

function flush () {
  clearTimeout(writeTimer)
  persistNow()
}

// ---- 存取器（全部操作記憶體中的 state，再排程寫回）----
function getSeed () { return Buffer.from(state.seed, 'hex') }

function getSettings () { return state.settings }
function setSettings (patch) { Object.assign(state.settings, patch); persist(); return state.settings }

function getContacts () { return state.contacts }
function saveContacts (list) { state.contacts = list; persist() }

function getGroups () { return state.groups }
function getGroup (id) { return state.groups.find(g => g.id === id) || null }
function saveGroups (list) { state.groups = list; persist() }

function getRatchet (peer) { return state.ratchets[peer] || null }
function setRatchet (peer, json) { state.ratchets[peer] = json; persist() }
function dropRatchet (peer) { delete state.ratchets[peer]; persist() }

function getTTL (key) { return state.ttls[key] || 0 }
function setTTL (key, seconds) {
  if (seconds > 0) state.ttls[key] = seconds; else delete state.ttls[key]
  persist()
}

// 群組踢人名單：純本機記錄，不寫進任何訊框（維持與桌面版的線路相容）。
// 用途：擋掉「被踢的人記得 gid，事後自己 gsync 溜回來」。
function isRevoked (gid, pubkey) { return (state.revoked[gid] || []).includes(pubkey) }
function revoke (gid, pubkey) {
  if (!state.revoked[gid]) state.revoked[gid] = []
  if (!state.revoked[gid].includes(pubkey)) { state.revoked[gid].push(pubkey); persist() }
}
// 管理員重新把某人加回名單時解除封鎖
function unrevoke (gid, pubkey) {
  const l = state.revoked[gid]
  if (!l) return
  const i = l.indexOf(pubkey)
  if (i >= 0) { l.splice(i, 1); persist() }
}
// 群組整個沒了（退群／被踢）-> 封鎖名單也不用留
function clearRevoked (gid) { delete state.revoked[gid]; persist() }

// 所有有訊息的對話鍵（peerHex 或 groupId）——供 TTL 清掃走訪。
function chatKeys () { return Object.keys(state.messages) }

function getMessages (peer) { return state.messages[peer] || [] }
function getMessage (peer, id) {
  const list = state.messages[peer]
  return (list && list.find(m => m.id === id)) || null
}
// 就地更新任意欄位（比 updateMessageState 通用；供 gacks / expiresAt / 媒體進度用）。
function updateMessage (peer, id, patch) {
  const m = getMessage(peer, id)
  if (!m) return null
  Object.assign(m, patch)
  persist()
  return m
}
function hasMessage (peer, id) {
  const list = state.messages[peer]
  return !!list && list.some(m => m.id === id)
}
function appendMessage (peer, msg) {
  if (!state.messages[peer]) state.messages[peer] = []
  state.messages[peer].push(msg)
  persist()
  return msg
}
function updateMessageState (peer, id, st) {
  const list = state.messages[peer]
  if (!list) return null
  const m = list.find(x => x.id === id)
  if (m) { m.state = st; persist() }
  return m || null
}
// 刪除一則訊息（為所有人刪除／本機刪除共用）；回傳被刪的訊息（供清理媒體檔）。
function deleteMessage (peer, id) {
  const list = state.messages[peer]
  if (!list) return null
  const i = list.findIndex(x => x.id === id)
  if (i < 0) return null
  const [removed] = list.splice(i, 1)
  persist()
  return removed
}

module.exports = {
  init, exists, create, unlock, lock, isUnlocked, flush,
  getSeed, getSettings, setSettings,
  getContacts, saveContacts,
  getGroups, getGroup, saveGroups,
  getRatchet, setRatchet, dropRatchet,
  getTTL, setTTL, chatKeys, isRevoked, revoke, unrevoke, clearRevoked,
  getMessages, getMessage, hasMessage, appendMessage,
  updateMessage, updateMessageState, deleteMessage
}
