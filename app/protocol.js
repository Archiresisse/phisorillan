// ──────────────────────────────────────────────────────────────────────────
// protocol.js — RPC 協定客戶端（純 JS，**沒有任何 react-native 相依**）
//
// 為什麼要單獨拆出來：
//   原本整包邏輯都寫在 bridge.js 裡，而 bridge.js 第一行就 import react-native-bare-kit，
//   於是「一行都沒跑過」——沒有 RN 環境就完全測不到。
//   把協定核心抽成純 JS 之後，它可以直接在 Node 裡對真正的 worklet 跑測試
//   （見 test/bridge.test.js），bridge.js 只剩下約 20 行真正碰 RN 的接線。
//
// 協定（換行分隔的 JSON）：
//   送出：{ id, cmd, args }
//   回覆：{ id, ok, data } | { id, ok:false, error }
//   事件：{ evt, data }   ← worklet 主動推送
// ──────────────────────────────────────────────────────────────────────────

export const CMD = {
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
  EVT_MESSAGE: 100, EVT_MSGSTATE: 101, EVT_STATUS: 102,
  EVT_GMESSAGE: 103, EVT_GROUPUPDATE: 104, EVT_PROGRESS: 105,
  EVT_DELETED: 106, EVT_TTL: 107, EVT_PROFILE: 108, EVT_WARN: 109,
  EVT_GROUPGONE: 110
}

const DEFAULT_TIMEOUT = 20000        // 手機上 scrypt 解鎖要 1~2 秒起跳，逾時不能設太短

export function createClient ({ send, timeout = DEFAULT_TIMEOUT }) {
  let nextId = 1
  let buf = ''
  const pending = new Map()          // id -> { resolve, reject, timer }
  const listeners = new Map()        // evt -> Set<fn>

  // 餵入從 worklet 讀到的任意切片。訊框可能被切在任何位置，甚至一次來好幾則。
  function onData (chunk) {
    buf += chunk
    let i
    while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i); buf = buf.slice(i + 1)
      if (!line.trim()) continue
      let msg
      try { msg = JSON.parse(line) } catch { continue }   // 壞行跳過，不要讓 UI 掛掉

      if (msg.evt !== undefined) {                        // worklet 推來的事件
        const set = listeners.get(msg.evt)
        if (set) for (const fn of [...set]) { try { fn(msg.data) } catch (e) {} }
        continue
      }
      const p = pending.get(msg.id)                       // RPC 回覆
      if (!p) continue
      clearTimeout(p.timer)
      pending.delete(msg.id)
      if (msg.ok) p.resolve(msg.data)
      else p.reject(new Error(msg.error || 'RPC 失敗'))
    }
  }

  function call (cmd, args = {}) {
    return new Promise((resolve, reject) => {
      const id = nextId++
      const timer = setTimeout(() => {
        if (pending.has(id)) { pending.delete(id); reject(new Error('RPC 逾時 (cmd ' + cmd + ')')) }
      }, timeout)
      if (timer.unref) timer.unref()
      pending.set(id, { resolve, reject, timer })
      try { send(JSON.stringify({ id, cmd, args }) + '\n') } catch (e) {
        clearTimeout(timer); pending.delete(id); reject(e)
      }
    })
  }

  function on (evt, fn) {
    if (!listeners.has(evt)) listeners.set(evt, new Set())
    listeners.get(evt).add(fn)
    return () => { const s = listeners.get(evt); if (s) s.delete(fn) }
  }

  function destroy () {
    for (const [, p] of pending) { clearTimeout(p.timer); p.reject(new Error('連線已關閉')) }
    pending.clear(); listeners.clear(); buf = ''
  }

  // ── 便利包裝（對應桌面版 preload.js 的 window.api）───────────────────────
  const api = {
    vaultStatus: () => call(CMD.VAULT_STATUS),
    createVault: (password) => call(CMD.VAULT_CREATE, { password }),
    unlock: (password) => call(CMD.VAULT_UNLOCK, { password }),
    lock: () => call(CMD.APP_LOCK),
    getIdentity: () => call(CMD.IDENTITY_GET),

    listContacts: () => call(CMD.CONTACTS_LIST),
    addContact: (publicKey, name) => call(CMD.CONTACTS_ADD, { publicKey, name }),
    removeContact: (publicKey) => call(CMD.CONTACTS_REMOVE, { publicKey }),
    renameContact: (publicKey, name) => call(CMD.CONTACTS_RENAME, { publicKey, name }),

    messages: (peer) => call(CMD.MESSAGES_LIST, { peer }),
    sendMessage: (peer, text, replyTo) => call(CMD.MESSAGE_SEND, { peer, text, replyTo }),
    deleteMessage: (peer, id, forEveryone) => call(CMD.MESSAGE_DELETE, { peer, id, forEveryone }),
    clearMessages: (peer) => call(CMD.MESSAGES_CLEAR, { peer }),

    getSafety: (peer) => call(CMD.SAFETY_GET, { peer }),
    verifySafety: (peer, verified = true) => call(CMD.SAFETY_VERIFY, { peer, verified }),

    getSettings: () => call(CMD.SETTINGS_GET),
    setName: (name) => call(CMD.SETTINGS_SET_NAME, { name }),
    setMailbox: (mailbox) => call(CMD.SETTINGS_SET_MAILBOX, { mailbox }),
    setLang: (lang) => call(CMD.SETTINGS_SET_LANG, { lang }),

    listGroups: () => call(CMD.GROUP_LIST),
    groupMessages: (gid) => call(CMD.GROUP_MESSAGES, { gid }),
    createGroup: (name, members) => call(CMD.GROUP_CREATE, { name, members }),
    sendGroupMessage: (gid, text, replyTo) => call(CMD.GROUP_SEND, { gid, text, replyTo }),
    groupInvite: (gid, forPubkey) => call(CMD.GROUP_INVITE, { gid, for: forPubkey }),
    groupJoin: (code) => call(CMD.GROUP_JOIN, { code }),
    groupKick: (gid, pubkey) => call(CMD.GROUP_KICK, { gid, pubkey }),
    groupSetRole: (gid, pubkey, role) => call(CMD.GROUP_SET_ROLE, { gid, pubkey, role }),
    groupSetTitle: (gid, pubkey, title) => call(CMD.GROUP_SET_TITLE, { gid, pubkey, title }),
    groupRename: (gid, name) => call(CMD.GROUP_RENAME, { gid, name }),
    groupLeave: (gid) => call(CMD.GROUP_LEAVE, { gid }),

    // path 必須是真實檔案路徑。Android 的選取器給的是 content:// URI，
    // 要先用原生模組（PhiMedia.cacheFromUri）複製到快取再傳進來。
    attach: (target, path, name) => call(CMD.MEDIA_ATTACH, { ...target, path, name }),
    mediaPath: (id) => call(CMD.MEDIA_PATH, { id }),
    mediaMeta: (id) => call(CMD.MEDIA_META, { id }),

    getTTL: (key) => call(CMD.TTL_GET, { key }),
    setTTL: (key, seconds) => call(CMD.TTL_SET, { key, seconds }),

    onMessage: (fn) => on(CMD.EVT_MESSAGE, fn),
    onMsgState: (fn) => on(CMD.EVT_MSGSTATE, fn),
    onStatus: (fn) => on(CMD.EVT_STATUS, fn),
    onGroupMessage: (fn) => on(CMD.EVT_GMESSAGE, fn),
    onGroupUpdate: (fn) => on(CMD.EVT_GROUPUPDATE, fn),
    onGroupGone: (fn) => on(CMD.EVT_GROUPGONE, fn),
    onProgress: (fn) => on(CMD.EVT_PROGRESS, fn),
    onDeleted: (fn) => on(CMD.EVT_DELETED, fn),
    onTTL: (fn) => on(CMD.EVT_TTL, fn),
    onProfile: (fn) => on(CMD.EVT_PROFILE, fn),
    onWarn: (fn) => on(CMD.EVT_WARN, fn)
  }

  return { onData, call, on, destroy, api, CMD }
}
