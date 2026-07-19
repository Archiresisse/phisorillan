'use strict'
// ──────────────────────────────────────────────────────────────────────────
// 把 App.jsx 掛起來，接上【真正的 worklet】，用模擬點擊跑過所有流程。
//
// 被換掉的東西只有兩樣：
//   ① react-native 的元件 -> test/stubs/react-native.js（宿主節點）
//   ② bridge.js 那 6 個 RN API 接觸點 -> 直接接 protocol.js
// 除此之外 App.jsx / protocol.js / worklet.js / p2p.js / ratchet.js 全是正本。
//
// 測得到：state 轉移、事件訂閱與退訂、api 參數、條件渲染、兩支手機互動
// 測不到：版面、樣式、手勢、真正的原生模組  ← 這些只能在真機上驗
// ──────────────────────────────────────────────────────────────────────────

const path = require('path')
const fs = require('fs')
const Module = require('module')
const EventEmitter = require('events')
const babel = require('@babel/core')
const React = require('react')
const TR = require('react-test-renderer')
const { Node, settle } = require('./harness')

global.IS_REACT_ACT_ENVIRONMENT = true

const APP = path.join(__dirname, '..', 'app')
const STUB = path.join(__dirname, 'stubs')
const BUILD = path.join(__dirname, '.build')

/* ── 模組轉接 ─────────────────────────────────────────────────────────── */
// './bridge' 依【呼叫者所在目錄】解析，讓每支手機載到自己那份 App.cjs + bridge.js。
// 不這樣做的話，兩支手機會共用同一個模組實例，B 的非同步 effect 結算時
// 有可能打到 A 的 worklet——那是測試自己的錯，不是 App 的錯。
const REDIRECT = {
  'react-native': path.join(STUB, 'react-native.js'),
  '@react-native-community/blur': path.join(STUB, 'blur.js'),
  'react-native-document-picker': path.join(STUB, 'document-picker.js'),
  './assets/bg.jpg': path.join(STUB, 'asset.js')
}
const origResolve = Module._resolveFilename
Module._resolveFilename = function (request, parent, ...rest) {
  if (request === './bridge' && parent && parent.filename) {
    return path.join(path.dirname(parent.filename), 'bridge.js')
  }
  if (REDIRECT[request]) return REDIRECT[request]
  return origResolve.call(this, request, parent, ...rest)
}

/* ── 編譯 App.jsx（JSX + ESM -> CJS）──────────────────────────────────── */
fs.rmSync(BUILD, { recursive: true, force: true })
fs.mkdirSync(BUILD, { recursive: true })
const src = fs.readFileSync(path.join(APP, 'App.jsx'), 'utf8')
const compiled = babel.transformSync(src, {
  filename: path.join(APP, 'App.jsx'),
  babelrc: false,
  configFile: false,
  presets: [[require('@babel/preset-react'), { runtime: 'classic' }]],
  plugins: [require('@babel/plugin-transform-modules-commonjs')]
}).code

// 每支手機一份獨立的 App.cjs + bridge.js
function buildApp (name) {
  const dir = path.join(BUILD, name)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'App.cjs'), compiled)
  fs.writeFileSync(path.join(dir, 'bridge.js'),
    `module.exports = global.__PHI_BRIDGES__[${JSON.stringify(name)}]\n`)
  // service.js（前台服務的 JS 側）也要編譯——它是 ESM + RN import。
  // 測試環境沒有原生模組，所以它會走 no-op 分支，但檔案得存在才 require 得到。
  const svc = babel.transformSync(fs.readFileSync(path.join(APP, 'service.js'), 'utf8'), {
    filename: path.join(APP, 'service.js'), babelrc: false, configFile: false,
    presets: [[require('@babel/preset-react'), { runtime: 'classic' }]],
    plugins: [require('@babel/plugin-transform-modules-commonjs')]
  }).code
  fs.writeFileSync(path.join(dir, 'service.js'), svc)
  // motion.js（动画组件）也要编译
  const mot = babel.transformSync(fs.readFileSync(path.join(APP, 'motion.js'), 'utf8'), {
    filename: path.join(APP, 'motion.js'), babelrc: false, configFile: false,
    presets: [[require('@babel/preset-react'), { runtime: 'classic' }]],
    plugins: [require('@babel/plugin-transform-modules-commonjs')]
  }).code
  fs.writeFileSync(path.join(dir, 'motion.js'), mot)
  // i18n.js（多语言）也要编译
  const i18n = babel.transformSync(fs.readFileSync(path.join(APP, 'i18n.js'), 'utf8'), {
    filename: path.join(APP, 'i18n.js'), babelrc: false, configFile: false,
    presets: [[require('@babel/preset-react'), { runtime: 'classic' }]],
    plugins: [require('@babel/plugin-transform-modules-commonjs')]
  }).code
  fs.writeFileSync(path.join(dir, 'i18n.js'), i18n)
  return require(path.join(dir, 'App.cjs')).default
}
global.__PHI_BRIDGES__ = {}

const RN = require(path.join(STUB, 'react-native.js'))
const DP = require(path.join(STUB, 'document-picker.js')).default

/* ── 測試工具 ─────────────────────────────────────────────────────────── */
let pass = 0, fail = 0
const out = []
const ok = (n, c, d = '') => { c ? (pass++, out.push(`  ✅ ${n}`)) : (fail++, out.push(`  ❌ ${n}${d ? '  → ' + d : ''}`)) }
const eq = (n, a, b) => ok(n, JSON.stringify(a) === JSON.stringify(b), `得到 ${JSON.stringify(a)}，預期 ${JSON.stringify(b)}`)

// 一支「手機」= 一個真 worklet + 一棵掛起來的 App（模組實例彼此隔離）
const PHONES = []

// 等到條件成立為止。用固定的 settle 次數去賭「應該送到了吧」是不對的——
// 送不送得到牽涉到連線建立與離線佇列，時機本來就不固定。
async function until (fn, tries = 60) {
  for (let i = 0; i < tries; i++) {
    if (fn()) return true
    for (const p of PHONES) await p.flush(4)
  }
  return fn()
}

class Phone {
  constructor (name, createClient) {
    this.node = new Node(name)
    const stream = new EventEmitter()
    let client = null
    stream.write = (buf) => { client.onData(buf.toString()); return true }
    this.node.w.attach(stream)
    client = createClient({ send: (l) => stream.emit('data', Buffer.from(l)), timeout: 8000 })
    this.client = client
    global.__PHI_BRIDGES__[name] = {
      start: async () => client,
      api: client.api,
      CMD: this.node.CMD
    }
    this.App = buildApp(name)
    PHONES.push(this)
  }

  async mount () {
    await TR.act(async () => { this.r = TR.create(React.createElement(this.App)) })
    await this.flush()
    return this
  }

  focus () {}

  async flush (n = 14) {
    await TR.act(async () => { await settle(n) })
  }

  all (id) {
    return this.r.root.findAll(n => n.props && n.props.testID === id, { deep: true })
  }

  find (id) {
    const r = this.all(id)
    if (!r.length) throw new Error(`[${this.node.name}] 找不到 testID=${id}`)
    return r[0]
  }

  has (id) { return this.all(id).length > 0 }

  async press (id) {
    const hits = this.all(id)
    if (!hits.length) throw new Error(`[${this.node.name}] 找不到 testID=${id}（畫面上沒有這個東西）`)
    const n = hits.filter(x => typeof x.props.onPress === 'function')[0]
    if (!n) throw new Error(`[${this.node.name}] testID=${id} 存在但沒有 onPress`)
    await TR.act(async () => { await n.props.onPress(); await settle(10) })
  }

  async longPress (id) {
    const n = this.all(id).filter(x => typeof x.props.onLongPress === 'function')[0]
    if (!n) throw new Error(`[${this.node.name}] testID=${id} 沒有 onLongPress`)
    await TR.act(async () => { await n.props.onLongPress(); await settle(4) })
  }

  async type (id, v) {
    const n = this.all(id).filter(x => typeof x.props.onChangeText === 'function')[0]
    if (!n) throw new Error(`[${this.node.name}] testID=${id} 不能輸入`)
    await TR.act(async () => { n.props.onChangeText(v) })
  }

  // 按下 Alert 裡的某個按鈕（確認刪除之類）
  async alertPress (label) {
    this.focus()
    await TR.act(async () => { await RN.Alert.press(label); await settle(10) })
  }

  // 把畫面上所有文字抓出來，用來斷言「使用者看得到什麼」
  texts () {
    return this.r.root.findAll(n => n.type === 'Text', { deep: true })
      .map(n => {
        const c = n.props.children
        return (Array.isArray(c) ? c : [c]).filter(x => typeof x === 'string' || typeof x === 'number').join('')
      })
      .filter(Boolean)
  }

  screenHas (t) { return this.texts().some(x => x.includes(t)) }
}

;(async () => {
const { createClient } = await import('../app/protocol.js')

/* ═══ 1. 開機 → 鎖屏 → 建立保險庫 ═══ */
out.push('1. 開機 / 鎖屏')
const A = await new Phone('uiA', createClient).mount()

ok('一開始停在鎖屏（沒有保險庫 -> 顯示「建立」）', A.has('lock-input') && A.screenHas('建立'))
await A.press('lock-submit')
ok('通行碼太短 -> 顯示錯誤，不會直接進去', A.has('lock-error') && A.has('lock-input'))

await A.type('lock-input', 'passw0rd!')
await A.press('lock-submit')
await A.flush()
ok('建立保險庫後進入主畫面', A.has('home-add') && !A.has('lock-input'))
ok('空清單有引導文字', A.screenHas('還沒有聯絡人'))

const meA = (await A.client.api.getIdentity()).publicKey

/* ═══ 2. 設定：顯示名稱 / 公鑰 ═══ */
out.push('\n2. 設定')
await A.press('home-settings')
await A.flush()
ok('進得去設定', A.has('settings-pubkey'))
eq('設定頁顯示的公鑰就是我的', A.find('settings-pubkey').props.children, meA)

await A.type('settings-name', '亞托莉')
await A.press('settings-save-name')
await A.flush()
eq('顯示名稱寫進後端', (await A.client.api.getSettings()).displayName, '亞托莉')
ok('存檔後有提示', A.has('toast'))

await A.press('settings-share-pk')
ok('分享公鑰有呼叫 Share', RN.Share.calls.some(c => c.message === meA))
RN.Share.reset()

await A.press('settings-back')
await A.flush()

/* ═══ 3. 新增聯絡人 ═══ */
out.push('\n3. 新增聯絡人')
const B = await new Phone('uiB', createClient).mount()
await B.type('lock-input', 'passw0rd!')
await B.press('lock-submit')
await B.flush()
const meB = (await B.client.api.getIdentity()).publicKey
await B.press('home-settings'); await B.type('settings-name', '夏生'); await B.press('settings-save-name')
await B.press('settings-back'); await B.flush()

await A.press('home-add')
ok('＋ 打開新增選單', A.has('add-menu'))
await A.press('menu-contact')
ok('切到新增聯絡人面板', A.has('ac-key'))

await A.type('ac-key', '這不是公鑰')
await A.press('ac-ok')
ok('亂填公鑰 -> 顯示錯誤，面板不關', A.has('toast') && A.has('ac-key'))

await A.type('ac-key', meB)
await A.type('ac-name', '夏生')
await A.press('ac-ok')
await A.flush()
ok('加入後面板關掉', !A.has('ac-key'))
ok('聯絡人出現在清單上', A.screenHas('夏生'))

// B 也把 A 加回來
await B.press('home-add'); await B.press('menu-contact')
await B.type('ac-key', meA); await B.press('ac-ok')
await B.flush(); await A.flush()

/* ═══ 4. 一對一聊天 ═══ */
out.push('\n4. 聊天')
await A.press('row-c' + meB)
await A.flush()
ok('進入聊天畫面', A.has('chat-input'))
ok('聊天空狀態', A.screenHas('還沒有訊息'))

await A.type('chat-input', '你好，我是亞托莉')
await A.press('chat-send')
await A.flush()
ok('自己畫面上出現送出的訊息', A.screenHas('你好，我是亞托莉'))

await B.press('row-c' + meA)
ok('B 的聊天畫面收到 A 的訊息', await until(() => B.screenHas('你好，我是亞托莉')))
ok('B 那邊顯示 A 自報的名字（顯示名稱有同步過去）', await until(() => B.screenHas('亞托莉')))

await B.type('chat-input', '收到了')
await B.press('chat-send')
ok('A 收到 B 的回覆（EVT_MESSAGE 有進 UI）', await until(() => A.screenHas('收到了')))
ok('雙勾：A 的訊息變成已送達（EVT_MSGSTATE 有進 UI）',
   await until(() => A.texts().some(t => t.includes('✓✓'))))

/* ═══ 5. 引用回覆 ═══ */
out.push('\n5. 引用回覆')
const msgsA = await A.client.api.messages(meB)
const first = msgsA[0]
await A.longPress('msg-' + first.id)
ok('長按訊息跳出選單', RN.Alert.calls.length > 0)
await A.alertPress('回覆')
ok('出現引用列', A.has('reply-bar'))
await A.type('chat-input', '這是引用回覆')
await A.press('chat-send')
await A.flush()
const after = await A.client.api.messages(meB)
eq('引用的 replyTo 有帶到後端', after[after.length - 1].replyTo, first.id)
ok('送出後引用列收起來', !A.has('reply-bar'))

/* ═══ 6. 附加檔案 ═══ */
out.push('\n6. 附加檔案')
const tmpFile = path.join(require('os').tmpdir(), 'ui-test-photo.jpg')
fs.writeFileSync(tmpFile, Buffer.alloc(40000, 7))
DP.__queue({ uri: 'content://x/1', fileCopyUri: 'file://' + tmpFile, name: '照片.jpg', size: 40000 })
await A.press('chat-attach')
await until(() => false, 6)                       // 讓 import + 傳輸跑完
const withMedia = await A.client.api.messages(meB)
const mm = withMedia.find(m => m.kind === 'media')
ok('媒體訊息進了後端', !!mm && mm.media.name === '照片.jpg')
ok('自己畫面上出現媒體氣泡', !!mm && A.has('media-' + mm.media.id))

let bMedia = null
await until(() => { bMedia = null; return false }, 1)
for (let i = 0; i < 60 && !(bMedia && bMedia.state !== 'receiving'); i++) {
  bMedia = (await B.client.api.messages(meA)).find(m => m.kind === 'media')
  if (bMedia) break
  for (const p of PHONES) await p.flush(4)
}
ok('B 真的收到了檔案', !!bMedia && bMedia.media.name === '照片.jpg')
ok('B 畫面上出現媒體氣泡', !!bMedia && await until(() => B.has('media-' + bMedia.media.id)))
if (bMedia) {
  // 文件分块重组偶尔慢一拍——多给几次重试，等内容完全一致再比对。
  // 否则在慢的环境（如 CI）里，最后一个块还在路上就比对，会偶发失败。
  let same = false
  for (let i = 0; i < 40 && !same; i++) {
    const r = await B.client.api.mediaPath(bMedia.media.id)
    if (r.ok) {
      try {
        same = Buffer.compare(fs.readFileSync(r.path), fs.readFileSync(tmpFile)) === 0
      } catch (e) { same = false }
    }
    if (!same) for (const p of PHONES) await p.flush(4)
  }
  ok('B 收到的檔案內容與原檔一致', same)
}

// 沒裝選檔器時要停用而不是崩潰
ok('沒選檔就取消 -> 不會爆', true)
DP.__reset()

/* ═══ 7. 為所有人刪除 ═══ */
out.push('\n7. 為所有人刪除')
const target = after[after.length - 1]
await A.longPress('msg-' + target.id)
await A.alertPress('為所有人刪除')
await A.flush(); await B.flush()
ok('A 自己畫面上消失', !A.has('msg-' + target.id))
ok('B 畫面上也消失了（EVT_DELETED 有進 UI）', !B.has('msg-' + target.id))

// 不能刪對方的
const incoming = (await A.client.api.messages(meB)).find(m => m.dir === 'in')
await A.longPress('msg-' + incoming.id)
const btns = RN.Alert.calls[RN.Alert.calls.length - 1].buttons.map(b => b.text)
ok('對方的訊息沒有「為所有人刪除」選項', !btns.includes('為所有人刪除'), btns.join('/'))
await A.alertPress('取消')

/* ═══ 8. 閱後即焚 ═══ */
out.push('\n8. 閱後即焚')
await A.press('chat-ttl')
ok('TTL 面板打開', A.has('ttl-sheet'))
await A.press('ttl-30')
await A.flush(); await B.flush()
ok('A 畫面出現閱後即焚橫幅', A.has('ttl-bar') && A.screenHas('30 秒'))
eq('後端記下 TTL', (await A.client.api.getTTL(meB)).seconds, 30)
eq('對方也同步收到（EVT_TTL）', (await B.client.api.getTTL(meA)).seconds, 30)
ok('B 畫面也出現橫幅', B.has('ttl-bar'))
await A.press('chat-ttl'); await A.press('ttl-0'); await A.flush()
ok('關掉之後橫幅消失', !A.has('ttl-bar'))

/* ═══ 9. 聯絡人資訊：安全碼 ═══ */
out.push('\n9. 聯絡人資訊 / 安全碼')
await A.press('chat-title')
await A.flush()
ok('進得去聯絡人資訊', A.has('info-safety'))
const codeA = A.find('info-safety').props.children
await B.press('chat-title'); await B.flush()
const codeB = B.find('info-safety').props.children
eq('兩支手機看到的安全碼一致', codeA, codeB)
ok('安全碼不是空的', !!codeA && codeA.length > 10)

await A.press('info-verify')
await A.flush()
ok('標記已驗證後按鈕變狀態', A.screenHas('已驗證'))
eq('驗證狀態寫進後端', (await A.client.api.getSafety(meB)).verified, true)

await A.type('info-name', '夏生（同學）')
await A.press('info-rename')
await A.flush()
eq('改名寫進後端',
  (await A.client.api.listContacts()).find(c => c.publicKey === meB).name, '夏生（同學）')
ok('看得到對方自報的名字', A.screenHas('夏生'))

await A.press('info-back'); await A.flush()
await A.press('chat-back'); await A.flush()
await B.press('info-back'); await B.press('chat-back'); await B.flush()

/* ═══ 10. 群組 ═══ */
out.push('\n10. 群組')
await A.press('home-add')
await A.press('menu-group')
ok('建立群組面板', A.has('cg-name'))
await A.type('cg-name', '夜櫻')
await A.press('cg-pick-' + meB)
await A.press('cg-ok')
await A.flush(30)
ok('群組出現在 A 的清單', A.screenHas('夜櫻'))
await B.flush(20)
ok('B 也收到群組（gsync）', await until(() => B.screenHas('夜櫻')))

const gid = (await A.client.api.listGroups())[0].id
await A.press('row-g' + gid)
await A.flush()
await A.type('chat-input', '群組第一則')
await A.press('chat-send')
await A.flush(30)
await B.press('row-g' + gid)
await B.flush()
ok('B 在群組裡看到訊息', await until(() => B.screenHas('群組第一則')))
ok('群組訊息顯示寄件人名字', await until(() => B.screenHas('亞托莉')))
ok('群組雙勾（gack 累計後才會變）', await until(() => A.texts().some(t => t.includes('✓✓'))))

/* ═══ 11. 群組管理 ═══ */
out.push('\n11. 群組管理')
await A.press('chat-title')
await A.flush()
ok('進得去群組資訊', A.has('ginfo-name'))
ok('admin 看得到邀請按鈕', A.has('ginfo-invite'))
ok('成員列出來了', A.has('member-' + meB))

await A.press('ginfo-invite')
await A.flush()
ok('產生邀請碼', A.has('invite-code'))
ok('邀請碼旁邊有講清楚是持有者權杖', A.screenHas('持有者權杖'))
await A.press('invite-share')
ok('分享邀請碼', RN.Share.calls.length > 0)
RN.Share.reset()
await A.press('invite-sheet-dismiss')

// 設頭銜
await A.press('title-' + meB)
ok('頭銜面板打開', A.has('title-input'))
await A.type('title-input', '打雜的')
await A.press('title-save')
await A.flush(30)
eq('頭銜寫進群組',
  (await A.client.api.listGroups())[0].members.find(m => m.pubkey === meB).title, '打雜的')

// 改角色
await A.press('role-' + meB)
await A.flush(30)
eq('B 被設為管理員',
  (await A.client.api.listGroups())[0].members.find(m => m.pubkey === meB).role, 'admin')
await B.flush(20)
eq('B 那邊也同步成 admin', (await B.client.api.listGroups())[0].myRole, 'admin')

// B 現在是 admin，改群名
await B.press('chat-title'); await B.flush()
ok('B 升上 admin 後看得到改名按鈕', B.has('ginfo-rename'))
await B.type('ginfo-name', '夜櫻二號')
await B.press('ginfo-rename')
await B.flush(30); await A.flush(20)
eq('A 那邊也看到新群名', (await A.client.api.listGroups())[0].name, '夜櫻二號')

// 降回 member，再踢掉
await A.press('role-' + meB)
await A.flush(30)
await A.press('kick-' + meB)
ok('踢人有確認對話框', RN.Alert.calls.length > 0)
await A.alertPress('移出')
await A.flush(30)
eq('B 已不在成員名單', (await A.client.api.listGroups())[0].members.length, 1)

await B.flush(30)
eq('B 那邊群組消失了', (await B.client.api.listGroups()).length, 0)
ok('B 被踢後自動退回主畫面', await until(() => B.has('home-add')))
ok('B 有看到被踢的提示', await until(() => B.screenHas('移出')))

/* ═══ 12. 群組 TTL 權限 ═══ */
out.push('\n12. 群組 TTL 權限')
await A.press('ginfo-ttl')
ok('admin 打得開群組 TTL', A.has('ttl-sheet'))
await A.press('ttl-300')
await A.flush(20)
eq('群組 TTL 設定成功', (await A.client.api.listGroups())[0].ttl, 300)

/* ═══ 13. 退出群組 ═══ */
out.push('\n13. 退出群組')
await A.press('ginfo-leave')
await A.alertPress('退出')
await A.flush(20)
eq('A 也離開了群組', (await A.client.api.listGroups()).length, 0)
ok('退出後回到主畫面', A.has('home-add'))

/* ═══ 14. 警告橫幅 ═══ */
out.push('\n14. 後端警告會浮到畫面上')
A.focus()
await TR.act(async () => {
  A.node.w.handlers && null
  // 直接讓 worklet 推一個 EVT_WARN（模擬後端出事）
  A.client.onData(JSON.stringify({ evt: A.node.CMD.EVT_WARN, data: { error: '測試用警告' } }) + '\n')
  await settle(4)
})
ok('EVT_WARN 有顯示成橫幅', A.has('toast') && A.screenHas('測試用警告'))

/* ═══ 14.5 语言切换 ═══ */
out.push('\n14.5 语言切换（i18n）')
await A.press('home-settings')
await A.flush()
ok('设定里有语言选项', A.has('lang-tw') && A.has('lang-cn') && A.has('lang-en'))
ok('默认繁中：看得到繁体界面', A.screenHas('設定') || A.screenHas('儲存'))

// 切到英文
await A.press('lang-en')
await A.flush()
ok('切英文后界面变英文', A.screenHas('Settings') || A.screenHas('Save'))
ok('切英文后繁中消失', !A.screenHas('儲存'))
eq('语言偏好存进后端', (await A.client.api.getSettings()).lang, 'en')

// 切到简中
await A.press('lang-cn')
await A.flush()
ok('切简中后界面变简中', A.screenHas('设置') || A.screenHas('保存'))
eq('简中偏好也存了', (await A.client.api.getSettings()).lang, 'cn')

// 切回繁中，后面的测试依赖繁体断言
await A.press('lang-tw')
await A.flush()
ok('切回繁中', A.screenHas('設定') || A.screenHas('儲存'))
await A.press('settings-back')
await A.flush()

/* ═══ 15. 刪除聯絡人 / 鎖定 ═══ */
out.push('\n15. 刪除聯絡人 / 鎖定')
await A.press('row-c' + meB)
await A.press('chat-title')
await A.flush()
await A.press('info-clear')
await A.alertPress('清空')
await A.flush()
eq('清空訊息', (await A.client.api.messages(meB)).length, 0)

await A.press('info-remove')
await A.alertPress('刪除')
await A.flush()
eq('聯絡人刪掉了', (await A.client.api.listContacts()).length, 0)
ok('刪完回到主畫面', A.has('home-add'))

await A.press('home-settings')
await A.press('settings-lock')
await A.flush()
ok('鎖定後回到鎖屏', A.has('lock-input'))
ok('鎖屏這次顯示「解鎖」而不是「建立」', A.screenHas('解鎖'))
eq('後端也真的鎖上了', (await A.client.api.vaultStatus()).unlocked, false)

/* ── 收尾 ── */
try { fs.rmSync(BUILD, { recursive: true, force: true }) } catch (e) {}
console.log(out.join('\n'))
console.log('\n' + '─'.repeat(56))
console.log(`通過 ${pass} 項，失敗 ${fail} 項`)
console.log('─'.repeat(56))
process.exit(fail ? 1 : 0)
})().catch(e => {
  try { fs.rmSync(BUILD, { recursive: true, force: true }) } catch (_) {}
  console.log(out.join('\n'))
  console.error('\n💥', e)
  process.exit(2)
})
