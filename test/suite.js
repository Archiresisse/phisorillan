'use strict'
// ──────────────────────────────────────────────────────────────────────────
// Phisorilla worklet 測試套件
// 每一項都是真的跑出來的：真的 p2p.js、真的 framing、真的棘輪、真的檔案 I/O。
// 唯一模擬的是 hyperswarm/UDX 的傳輸層（沙箱擋 UDP，本來就測不了）。
// ──────────────────────────────────────────────────────────────────────────

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { Node, HUB, ROOT, sleep, settle } = require('./harness')

let pass = 0, fail = 0
const results = []

function ok (name, cond, detail = '') {
  if (cond) { pass++; results.push(`  ✅ ${name}`) }
  else { fail++; results.push(`  ❌ ${name}${detail ? '  → ' + detail : ''}`) }
}
function eq (name, a, b) { ok(name, JSON.stringify(a) === JSON.stringify(b), `得到 ${JSON.stringify(a)}，預期 ${JSON.stringify(b)}`) }
function section (t) { results.push('\n' + t) }

let seq = 0
async function mk (name) {
  const n = new Node(name + '_' + (seq++))
  n.name = name
  const r = await n.call(n.CMD.VAULT_CREATE, { password: 'passw0rd!' })
  n.pub = r.publicKey
  await settle()
  return n
}
async function befriend (a, b) {
  await a.call(a.CMD.CONTACTS_ADD, { publicKey: b.pub, name: b.name })
  await b.call(b.CMD.CONTACTS_ADD, { publicKey: a.pub, name: a.name })
  await settle()
}
// 棘輪要先由 initiator（公鑰字典序較小者）開口，回應方才推得動。
async function handshake (a, b) {
  const [i, r] = a.pub < b.pub ? [a, b] : [b, a]
  await i.call(i.CMD.MESSAGE_SEND, { peer: r.pub, text: '·' })
  await settle(20)
  await r.call(r.CMD.MESSAGE_SEND, { peer: i.pub, text: '·' })
  await settle(20)
  await a.call(a.CMD.MESSAGES_CLEAR, { peer: b.pub })
  await b.call(b.CMD.MESSAGES_CLEAR, { peer: a.pub })
  a.clearEvents(); b.clearEvents()
}

const C = new Node('probe').CMD   // 指令表（每個節點都一樣）

;(async () => {

// ═══════════ 1. 保險庫與身分 ═══════════
section('1. 保險庫與身分')
{
  const n = new Node('vault')
  const st0 = await n.call(C.VAULT_STATUS)
  eq('新裝置：保險庫不存在', st0.exists, false)
  const bad = await n.call(C.VAULT_CREATE, { password: '123' })
  eq('通行碼太短被擋下', bad.ok, false)
  const r = await n.call(C.VAULT_CREATE, { password: 'passw0rd!' })
  ok('建立保險庫', r.ok && /^[0-9a-f]{64}$/.test(r.publicKey))
  await n.call(C.APP_LOCK)
  const wrong = await n.call(C.VAULT_UNLOCK, { password: 'wrong-pass' })
  eq('錯誤通行碼被 GCM 標籤擋下', wrong.ok, false)
  const right = await n.call(C.VAULT_UNLOCK, { password: 'passw0rd!' })
  ok('正確通行碼解鎖，身分不變', right.ok && right.publicKey === r.publicKey)
}

// ═══════════ 2. 聯絡人驗證（含已知崩潰 bug 的回歸測試）═══════════
section('2. 聯絡人驗證')
{
  const A = await mk('A')
  eq('格式錯誤的公鑰', (await A.call(C.CONTACTS_ADD, { publicKey: 'nonsense' })).ok, false)
  eq('64 字元但不在曲線上（就是這個會打死 worklet）',
     (await A.call(C.CONTACTS_ADD, { publicKey: 'f'.repeat(64) })).ok, false)
  eq('加自己', (await A.call(C.CONTACTS_ADD, { publicKey: A.pub })).ok, false)
  const B = await mk('B')
  ok('加合法公鑰', (await A.call(C.CONTACTS_ADD, { publicKey: B.pub, name: 'B' })).ok)
  eq('重複新增', (await A.call(C.CONTACTS_ADD, { publicKey: B.pub })).ok, false)
  // 關鍵：塞完垃圾之後 worklet 還活著嗎？
  const alive = await A.call(C.IDENTITY_GET)
  ok('灌完無效公鑰後 worklet 仍存活', alive.publicKey === A.pub)
  eq('EVT_WARN 沒有被觸發（沒有例外逃出去）', A.evts(C.EVT_WARN).length, 0)
}

// ═══════════ 3. 1:1 棘輪訊息 ═══════════
section('3. 1:1 棘輪訊息')
{
  const A = await mk('A'); const B = await mk('B')
  await befriend(A, B)
  const [I, R] = A.pub < B.pub ? [A, B] : [B, A]

  const m1 = await I.call(C.MESSAGE_SEND, { peer: R.pub, text: '第一則 🌸' })
  await settle(20)
  const rx = await R.call(C.MESSAGES_LIST, { peer: I.pub })
  eq('initiator -> responder 中文+emoji', rx.map(m => m.text), ['第一則 🌸'])
  eq('送達回執（雙勾）', (await I.call(C.MESSAGES_LIST, { peer: R.pub }))[0].state, 'delivered')

  await R.call(C.MESSAGE_SEND, { peer: I.pub, text: '回一句' })
  await settle(20)
  eq('responder -> initiator', (await I.call(C.MESSAGES_LIST, { peer: R.pub })).map(m => m.text),
     ['第一則 🌸', '回一句'])

  const rep = await R.call(C.MESSAGE_SEND, { peer: I.pub, text: '這是引用', replyTo: m1.message.id })
  await settle(20)
  const got = (await I.call(C.MESSAGES_LIST, { peer: R.pub })).find(m => m.id === rep.message.id)
  eq('引用回覆的 replyTo 有跨機器傳過去', got.replyTo, m1.message.id)

  // 連續 20 則，確認棘輪一路推得動
  for (let i = 0; i < 20; i++) await I.call(C.MESSAGE_SEND, { peer: R.pub, text: 'n' + i })
  await settle(60)
  const many = (await R.call(C.MESSAGES_LIST, { peer: I.pub })).filter(m => /^n\d+$/.test(m.text))
  eq('連續 20 則棘輪推進', many.map(m => m.text), Array.from({ length: 20 }, (_, i) => 'n' + i))
  eq('過程中沒有任何 [無法解密]',
     (await R.call(C.MESSAGES_LIST, { peer: I.pub })).filter(m => m.text === '[無法解密]').length, 0)
}

// ═══════════ 4. 離線排隊與上線補送 ═══════════
section('4. 離線排隊與上線補送')
{
  const A = await mk('A'); const B = await mk('B')
  await befriend(A, B); await handshake(A, B)

  HUB.offline(B.pub)
  A.p2p.conns.get(B.pub).socket.destroy()
  await settle(10)
  eq('對方離線', (await A.call(C.CONTACTS_LIST))[0].online, false)

  const q = await A.call(C.MESSAGE_SEND, { peer: B.pub, text: '你不在的時候發的' })
  await settle(10)
  eq('離線時訊息留在佇列（單勾）', (await A.call(C.MESSAGES_LIST, { peer: B.pub }))
    .find(m => m.id === q.message.id).state, 'sent')
  eq('對方確實沒收到', (await B.call(C.MESSAGES_LIST, { peer: A.pub })).length, 0)

  HUB.online(B.pub)
  A.p2p._ensureConnections()
  await settle(40)
  eq('上線後自動補送', (await B.call(C.MESSAGES_LIST, { peer: A.pub })).map(m => m.text),
     ['你不在的時候發的'])
  eq('補送後變成雙勾', (await A.call(C.MESSAGES_LIST, { peer: B.pub }))
    .find(m => m.id === q.message.id).state, 'delivered')
}

// ═══════════ 5. 媒體傳輸 ═══════════
section('5. 媒體傳輸')
{
  const A = await mk('A'); const B = await mk('B')
  await befriend(A, B); await handshake(A, B)

  // 造一個 700KB 的隨機檔（跨越多個 256KB chunk，會走到背壓路徑）
  const src = path.join(ROOT, 'photo.jpg')
  const payload = crypto.randomBytes(700 * 1024)
  fs.writeFileSync(src, payload)

  const r = await A.call(C.MEDIA_ATTACH, { peer: B.pub, path: src })
  ok('MEDIA_ATTACH 成功', r.ok && r.message.kind === 'media')
  eq('mime 由副檔名判定', r.message.media.mime, 'image/jpeg')
  eq('mkind 分類', r.message.media.mkind, 'image')
  eq('尺寸正確', r.message.media.size, payload.length)

  await B.waitEvt(C.EVT_MESSAGE, d => d.message && d.message.kind === 'media')
  await A.waitEvt(C.EVT_MSGSTATE, d => d.id === r.message.id && d.state === 'delivered')
  await settle(20)

  const bmsg = (await B.call(C.MESSAGES_LIST, { peer: A.pub })).find(m => m.kind === 'media')
  ok('B 收到媒體訊息', !!bmsg)
  const pth = await B.call(C.MEDIA_PATH, { id: bmsg.media.id })
  ok('MEDIA_PATH 給得出 file:// URI', pth.ok && pth.uri.startsWith('file://'))
  const received = fs.readFileSync(pth.path)
  ok('收到的位元組與原檔完全一致', Buffer.compare(received, payload) === 0,
     `收到 ${received.length} bytes / 原檔 ${payload.length}`)
  eq('B 的檔案不是寫在 A 的目錄（隔離有效）', pth.path.includes(B.dir), true)

  const prog = B.evts(C.EVT_PROGRESS).filter(e => e.dir === 'in')
  ok('有回報接收進度', prog.length >= 2, `${prog.length} 個進度事件`)
  eq('最後一個進度 = 檔案大小', prog[prog.length - 1].sent, payload.length)
  eq('寄件端狀態變成 delivered',
     (await A.call(C.MESSAGES_LIST, { peer: B.pub })).find(m => m.id === r.message.id).state, 'delivered')
}

// ═══════════ 6. 媒體：惡意對方 ═══════════
section('6. 媒體：惡意對方（這些以前會直接寫爆你的手機）')
{
  const A = await mk('A'); const B = await mk('B')
  await befriend(A, B); await handshake(A, B)
  const mid = crypto.randomBytes(12).toString('hex')
  const mediaId = crypto.randomBytes(16).toString('hex')

  // (a) 宣告 5GB
  A.rawSend(B.pub, { type: 'file-begin', mid, ts: Date.now(),
    media: { id: mediaId, name: 'huge.bin', mime: 'application/octet-stream', mkind: 'file', size: 5 * 1024 * 1024 * 1024 } })
  await settle(10)
  ok('宣告 5GB 的檔案被拒收', B.evts(C.EVT_WARN).some(e => /media too large/.test(e.error || '')))
  eq('沒有替它建立訊息', (await B.call(C.MESSAGES_LIST, { peer: A.pub })).length, 0)

  // (b) 宣告 10 bytes 卻狂送資料
  const id2 = crypto.randomBytes(16).toString('hex')
  const mid2 = crypto.randomBytes(12).toString('hex')
  A.rawSend(B.pub, { type: 'file-begin', mid: mid2, ts: Date.now(),
    media: { id: id2, name: 'lie.bin', mime: 'application/octet-stream', mkind: 'file', size: 10 } })
  await settle(6)
  A.rawSend(B.pub, { type: 'file-chunk', mediaId: id2, data: Buffer.alloc(100000).toString('base64') })
  await settle(10)
  eq('宣告 10 bytes 卻送 100KB -> 中止', B.evts(C.EVT_MSGSTATE).some(e => e.state === 'failed' && e.error === 'oversize'), true)
  eq('半截檔案已從磁碟清掉', B.media.exists(id2), false)

  // (c) 送到一半就說結束
  const id3 = crypto.randomBytes(16).toString('hex')
  const mid3 = crypto.randomBytes(12).toString('hex')
  A.rawSend(B.pub, { type: 'file-begin', mid: mid3, ts: Date.now(),
    media: { id: id3, name: 'cut.bin', mime: 'application/octet-stream', mkind: 'file', size: 1000 } })
  await settle(6)
  A.rawSend(B.pub, { type: 'file-chunk', mediaId: id3, data: Buffer.alloc(400).toString('base64') })
  await settle(6)
  A.rawSend(B.pub, { type: 'file-end', mediaId: id3 })
  await settle(10)
  eq('宣告 1000 只送 400 -> 標記失敗，不假裝成功',
     B.evts(C.EVT_MSGSTATE).some(e => e.id === mid3 && e.state === 'failed' && e.error === 'truncated'), true)
  eq('截斷的檔案已清掉', B.media.exists(id3), false)

  const alive = await B.call(C.IDENTITY_GET)
  ok('三種惡意媒體攻擊後 worklet 仍存活', alive.publicKey === B.pub)
}

// ═══════════ 7. 閱後即焚（TTL）═══════════
section('7. 閱後即焚（TTL）')
{
  const A = await mk('A'); const B = await mk('B')
  await befriend(A, B); await handshake(A, B)

  const t = await A.call(C.TTL_SET, { key: B.pub, seconds: 1 })
  eq('A 設定 1 秒', t.seconds, 1)
  await settle(15)
  eq('TTL 同步到 B', (await B.call(C.TTL_GET, { key: A.pub })).seconds, 1)

  const m = await A.call(C.MESSAGE_SEND, { peer: B.pub, text: '這句話會消失' })
  await settle(20)
  ok('訊息上蓋了到期時間', !!m.message.expiresAt)
  eq('B 也收到了', (await B.call(C.MESSAGES_LIST, { peer: A.pub })).length, 1)

  // 附一個媒體，確認燒掉時磁碟上的檔案也一起清
  const src = path.join(ROOT, 'burn.png')
  fs.writeFileSync(src, crypto.randomBytes(2048))
  const mm = await A.call(C.MEDIA_ATTACH, { peer: B.pub, path: src })
  await settle(30)
  const mediaId = mm.message.media.id
  eq('媒體檔在磁碟上', A.media.exists(mediaId), true)

  await sleep(1400)
  await settle(10)
  eq('A 這邊燒掉了', (await A.call(C.MESSAGES_LIST, { peer: B.pub })).length, 0)
  eq('B 那邊也燒掉了（雙方獨立算出同一個到期時刻）', (await B.call(C.MESSAGES_LIST, { peer: A.pub })).length, 0)
  eq('磁碟上的媒體檔一併刪除，不是只把訊息藏起來', A.media.exists(mediaId), false)
  ok('有發出 ttl 刪除事件', A.evts(C.EVT_DELETED).some(e => e.reason === 'ttl'))

  eq('TTL 上限被夾住（對方送 999 天也一樣）',
     (await A.call(C.TTL_SET, { key: B.pub, seconds: 99999999 })).seconds, 7 * 24 * 3600)
  await A.call(C.TTL_SET, { key: B.pub, seconds: 0 })
  await settle(10)
  const after = await A.call(C.MESSAGE_SEND, { peer: B.pub, text: '關掉之後就不燒了' })
  ok('關掉 TTL 之後的訊息不再蓋章', !after.message.expiresAt)
}

// ═══════════ 8. 為所有人刪除 ═══════════
section('8. 為所有人刪除')
{
  const A = await mk('A'); const B = await mk('B')
  await befriend(A, B); await handshake(A, B)

  const m = await A.call(C.MESSAGE_SEND, { peer: B.pub, text: '發錯了' })
  await settle(20)
  eq('B 收到了', (await B.call(C.MESSAGES_LIST, { peer: A.pub })).length, 1)

  ok('A 撤回', (await A.call(C.MESSAGE_DELETE, { peer: B.pub, id: m.message.id, forEveryone: true })).ok)
  await settle(20)
  eq('B 那邊消失了', (await B.call(C.MESSAGES_LIST, { peer: A.pub })).length, 0)
  eq('A 自己這邊也消失了', (await A.call(C.MESSAGES_LIST, { peer: B.pub })).length, 0)

  // B 不能撤回 A 發的訊息
  const m2 = await A.call(C.MESSAGE_SEND, { peer: B.pub, text: '你不能撤我的' })
  await settle(20)
  const bad = await B.call(C.MESSAGE_DELETE, { peer: A.pub, id: m2.message.id, forEveryone: true })
  eq('B 想撤 A 的訊息 -> 被 RPC 擋下', bad.ok, false)

  // 就算 B 硬送 delete 訊框，A 也不該刪掉自己發出去的訊息
  B.rawSend(A.pub, { type: 'delete', id: m2.message.id })
  await settle(15)
  eq('直接偽造 delete 訊框也刪不掉別人發的訊息',
     (await A.call(C.MESSAGES_LIST, { peer: B.pub })).length, 1)

  // 本機刪除只影響自己
  const m3 = await A.call(C.MESSAGE_SEND, { peer: B.pub, text: '只刪我這邊' })
  await settle(20)
  await A.call(C.MESSAGE_DELETE, { peer: B.pub, id: m3.message.id, forEveryone: false })
  await settle(15)
  eq('本機刪除 -> 對方仍保留', (await B.call(C.MESSAGES_LIST, { peer: A.pub })).some(x => x.id === m3.message.id), true)
}

// ═══════════ 9. 群組：建立 / 加入 / 雙勾累計 ═══════════
section('9. 群組：建立 / 加入 / 雙勾（gack 累計）')
{
  const A = await mk('A'); const B = await mk('B'); const D = await mk('D')
  await befriend(A, B); await befriend(A, D); await befriend(B, D)

  const g = await A.call(C.GROUP_CREATE, { name: '牛逼666', members: [B.pub, D.pub] })
  ok('建群', g.ok && g.group.members.length === 3)
  eq('建立者是管理員', g.group.myRole, 'admin')
  await settle(30)
  const gid = g.group.id
  eq('B 收到群組', (await B.call(C.GROUP_LIST)).length, 1)
  eq('D 收到群組', (await D.call(C.GROUP_LIST)).length, 1)
  eq('B 的角色是一般成員', (await B.call(C.GROUP_LIST))[0].myRole, 'member')

  A.clearEvents()
  const m = await A.call(C.GROUP_SEND, { gid, text: '大家好' })
  eq('剛送出時是單勾', m.message.state, 'sent')
  await settle(40)
  eq('B 收到', (await B.call(C.GROUP_MESSAGES, { gid })).map(x => x.text), ['大家好'])
  eq('D 收到', (await D.call(C.GROUP_MESSAGES, { gid })).map(x => x.text), ['大家好'])
  const after = (await A.call(C.GROUP_MESSAGES, { gid })).find(x => x.id === m.message.id)
  eq('兩人都回執 -> 雙勾', after.state, 'delivered')
  eq('gacks 累計了兩個人', after.gacks.length, 2)

  // 只有一個人在線時，不能提早變雙勾
  A.clearEvents()
  HUB.offline(D.pub)
  A.p2p.conns.get(D.pub).socket.destroy()
  await settle(10)
  const m2 = await A.call(C.GROUP_SEND, { gid, text: 'D 不在的時候' })
  await settle(40)
  const s2 = (await A.call(C.GROUP_MESSAGES, { gid })).find(x => x.id === m2.message.id)
  eq('只有 B 回執 -> 仍是單勾（不能提早變雙勾）', s2.state, 'sent')
  eq('gacks 只有 1 個', s2.gacks.length, 1)

  // 把 D 踢掉之後，這則訊息該補成雙勾（因為「其他成員」只剩 B）
  await A.call(C.GROUP_KICK, { gid, pubkey: D.pub })
  await settle(20)
  const m3 = await A.call(C.GROUP_SEND, { gid, text: 'D 走了之後' })
  await settle(40)
  eq('剩兩人時，B 一回執就是雙勾',
     (await A.call(C.GROUP_MESSAGES, { gid })).find(x => x.id === m3.message.id).state, 'delivered')
  HUB.online(D.pub)
}

// ═══════════ 10. 群組成員管理 ═══════════
section('10. 群組成員管理')
{
  const A = await mk('A'); const B = await mk('B'); const D = await mk('D')
  await befriend(A, B); await befriend(A, D); await befriend(B, D)
  const g = await A.call(C.GROUP_CREATE, { name: '管理測試', members: [B.pub, D.pub] })
  const gid = g.group.id
  await settle(30)

  eq('一般成員不能踢人', (await B.call(C.GROUP_KICK, { gid, pubkey: D.pub })).ok, false)
  eq('一般成員不能改名', (await B.call(C.GROUP_RENAME, { gid, name: '我改的' })).ok, false)
  eq('一般成員不能改別人角色', (await B.call(C.GROUP_SET_ROLE, { gid, pubkey: B.pub, role: 'admin' })).ok, false)
  eq('管理員不能踢自己', (await A.call(C.GROUP_KICK, { gid, pubkey: A.pub })).ok, false)
  eq('不能設不存在的角色', (await A.call(C.GROUP_SET_ROLE, { gid, pubkey: B.pub, role: 'god' })).ok, false)
  eq('最後一位管理員不能被降級', (await A.call(C.GROUP_SET_ROLE, { gid, pubkey: A.pub, role: 'member' })).ok, false)

  ok('管理員升 B 為管理員', (await A.call(C.GROUP_SET_ROLE, { gid, pubkey: B.pub, role: 'admin' })).ok)
  await settle(25)
  eq('B 那邊確實變成管理員', (await B.call(C.GROUP_LIST))[0].myRole, 'admin')
  ok('有兩個管理員時可以降級其中一個', (await A.call(C.GROUP_SET_ROLE, { gid, pubkey: A.pub, role: 'member' })).ok)
  await settle(25)
  await B.call(C.GROUP_SET_ROLE, { gid, pubkey: A.pub, role: 'admin' })
  await settle(25)

  ok('管理員設頭銜', (await B.call(C.GROUP_SET_TITLE, { gid, pubkey: D.pub, title: '打雜的' })).ok)
  await settle(25)
  eq('頭銜同步到 D', (await D.call(C.GROUP_LIST))[0].members.find(m => m.pubkey === D.pub).title, '打雜的')
  eq('一般成員不能設別人的頭銜', (await D.call(C.GROUP_SET_TITLE, { gid, pubkey: B.pub, title: '狗' })).ok, false)
  ok('一般成員可以設自己的頭銜', (await D.call(C.GROUP_SET_TITLE, { gid, title: '自封的' })).ok)

  ok('管理員改群名', (await A.call(C.GROUP_RENAME, { gid, name: '新名字' })).ok)
  await settle(25)
  eq('群名同步', (await D.call(C.GROUP_LIST))[0].name, '新名字')

  // 踢人：被踢的人要收到通知
  D.clearEvents()
  ok('管理員踢 D', (await A.call(C.GROUP_KICK, { gid, pubkey: D.pub })).ok)
  await settle(30)
  ok('D 收到「你被踢了」', D.evts(C.EVT_GROUPGONE).some(e => e.gid === gid && e.reason === 'kicked'))
  eq('D 的群組列表清空', (await D.call(C.GROUP_LIST)).length, 0)
  eq('A 這邊剩兩人', (await A.call(C.GROUP_LIST))[0].members.length, 2)

  // 退群
  B.clearEvents()
  ok('B 主動退群', (await B.call(C.GROUP_LEAVE, { gid })).ok)
  await settle(30)
  eq('B 自己的列表清空', (await B.call(C.GROUP_LIST)).length, 0)
  eq('A 看到 B 走了', (await A.call(C.GROUP_LIST))[0].members.length, 1)

  // 10 人上限
  eq('建群時超過 10 人會被截斷',
     (await A.call(C.GROUP_CREATE, { name: '滿的', members: Array.from({ length: 15 }, () => crypto.randomBytes(32).toString('hex')) })).group.members.length, 10)
}

// ═══════════ 11. 群組劫持（原本的授權漏洞）═══════════
section('11. 群組劫持防護 ← 這次修掉的授權漏洞')
{
  const A = await mk('A'); const B = await mk('B'); const X = await mk('X')  // X = 局外人
  await befriend(A, B); await befriend(A, X); await befriend(B, X)
  const g = await A.call(C.GROUP_CREATE, { name: '私人群', members: [B.pub] })
  const gid = g.group.id
  await settle(30)

  // (a) 完全的局外人，用同一個 gid 送一份「他是 admin」的名單
  const hijack = { id: gid, name: '已被接管', createdAt: Date.now(),
    members: [{ pubkey: X.pub, role: 'admin', title: '', name: 'X' }, { pubkey: B.pub, role: 'member', title: '', name: 'B' }] }
  X.rawSend(B.pub, { type: 'gsync', gid, group: hijack })
  await settle(15)
  const gb = (await B.call(C.GROUP_LIST))[0]
  eq('局外人的 gsync 被拒絕（群名沒被改）', gb.name, '私人群')
  eq('局外人沒能把自己塞進成員名單', gb.members.some(m => m.pubkey === X.pub), false)

  // (b) 局外人想用 gsync 把 B 踢出群
  X.rawSend(B.pub, { type: 'gsync', gid, group: { id: gid, name: '私人群', createdAt: Date.now(), members: [{ pubkey: X.pub, role: 'admin', title: '', name: 'X' }] } })
  await settle(15)
  eq('局外人踢不掉 B', (await B.call(C.GROUP_LIST)).length, 1)

  // (c) 一般成員 B 想把自己升成 admin
  B.rawSend(A.pub, { type: 'gsync', gid, group: { id: gid, name: '私人群', createdAt: g.group.createdAt,
    members: [{ pubkey: A.pub, role: 'member', title: '', name: '' }, { pubkey: B.pub, role: 'admin', title: '', name: 'B' }] } })
  await settle(15)
  const ga = (await A.call(C.GROUP_LIST))[0]
  eq('一般成員無法自我升級', ga.members.find(m => m.pubkey === B.pub).role, 'member')
  eq('也沒能把 A 降級', ga.myRole, 'admin')

  // (d) 一般成員想改群名
  B.rawSend(A.pub, { type: 'gsync', gid, group: { id: gid, name: 'B 改的名', createdAt: g.group.createdAt, members: g.group.members.map(m => ({ pubkey: m.pubkey, role: m.role, title: m.title, name: m.name })) } })
  await settle(15)
  eq('一般成員改不了群名', (await A.call(C.GROUP_LIST))[0].name, '私人群')

  // (e) 被踢掉的人，事後還想用舊 gid 回來
  await A.call(C.GROUP_KICK, { gid, pubkey: B.pub })
  await settle(20)
  B.rawSend(A.pub, { type: 'gsync', gid, group: { id: gid, name: '私人群', createdAt: g.group.createdAt,
    members: [{ pubkey: A.pub, role: 'admin', title: '', name: '' }, { pubkey: B.pub, role: 'member', title: '', name: 'B' }] } })
  await settle(15)
  eq('被踢的人塞不回來', (await A.call(C.GROUP_LIST))[0].members.length, 1)

  // (f) 正常的邀請加入流程要照樣能動
  const inv = await A.call(C.GROUP_INVITE, { gid })
  ok('管理員拿得到邀請碼', inv.ok && inv.code.length > 100)
  const joined = await X.call(C.GROUP_JOIN, { code: inv.code })
  ok('局外人拿著合法邀請碼可以加入', joined.ok)
  await settle(30)
  eq('A 承認新成員（正常流程沒被誤擋）', (await A.call(C.GROUP_LIST))[0].members.some(m => m.pubkey === X.pub), true)
  eq('X 進來後是一般成員', (await X.call(C.GROUP_LIST))[0].myRole, 'member')
  eq('一般成員拿不到邀請碼', (await X.call(C.GROUP_INVITE, { gid })).ok, false)
}

// ═══════════ 12. 群組訊息刪除授權 ═══════════
section('12. 群組訊息刪除授權')
{
  const A = await mk('A'); const B = await mk('B'); const D = await mk('D')
  await befriend(A, B); await befriend(A, D); await befriend(B, D)
  const g = await A.call(C.GROUP_CREATE, { name: '刪除測試', members: [B.pub, D.pub] })
  const gid = g.group.id
  await settle(30)

  const bm = await B.call(C.GROUP_SEND, { gid, text: 'B 說的話' })
  await settle(30)
  eq('D 收到 B 的訊息', (await D.call(C.GROUP_MESSAGES, { gid })).length, 1)

  // D 偽造 gdelete，想刪掉 B 說的話
  D.rawSend(A.pub, { type: 'gdelete', gid, id: bm.message.id })
  await settle(15)
  eq('一般成員刪不掉別人的訊息', (await A.call(C.GROUP_MESSAGES, { gid })).length, 1)

  // B 自己撤回
  ok('B 撤回自己的', (await B.call(C.MESSAGE_DELETE, { peer: gid, id: bm.message.id, forEveryone: true })).ok)
  await settle(25)
  eq('A 那邊消失', (await A.call(C.GROUP_MESSAGES, { gid })).length, 0)
  eq('D 那邊消失', (await D.call(C.GROUP_MESSAGES, { gid })).length, 0)

  // 管理員可以刪任何人的
  const dm = await D.call(C.GROUP_SEND, { gid, text: 'D 說的話' })
  await settle(30)
  A.rawSend(B.pub, { type: 'gdelete', gid, id: dm.message.id })
  await settle(15)
  eq('管理員可以刪別人的訊息', (await B.call(C.GROUP_MESSAGES, { gid })).length, 0)
}

// ═══════════ 13. 群組檔案 ═══════════
section('13. 群組檔案')
{
  const A = await mk('A'); const B = await mk('B'); const D = await mk('D')
  await befriend(A, B); await befriend(A, D); await befriend(B, D)
  const g = await A.call(C.GROUP_CREATE, { name: '檔案群', members: [B.pub, D.pub] })
  const gid = g.group.id
  await settle(30)

  const src = path.join(ROOT, 'group-file.pdf')
  const payload = crypto.randomBytes(300 * 1024)
  fs.writeFileSync(src, payload)

  const r = await A.call(C.MEDIA_ATTACH, { gid, path: src })
  ok('群組檔案送出', r.ok)
  eq('mime', r.message.media.mime, 'application/pdf')
  await B.waitEvt(C.EVT_GMESSAGE, d => d.message && d.message.kind === 'media')
  await D.waitEvt(C.EVT_GMESSAGE, d => d.message && d.message.kind === 'media')
  await settle(30)

  for (const [nm, N] of [['B', B], ['D', D]]) {
    const msg = (await N.call(C.GROUP_MESSAGES, { gid })).find(m => m.kind === 'media')
    ok(`${nm} 收到群組檔案`, !!msg)
    const p = await N.call(C.MEDIA_PATH, { id: msg.media.id })
    ok(`${nm} 的檔案位元組一致`, p.ok && Buffer.compare(fs.readFileSync(p.path), payload) === 0)
  }
  eq('群組檔案的雙勾（兩人都收到才算送達）',
     (await A.call(C.GROUP_MESSAGES, { gid })).find(m => m.kind === 'media').state, 'delivered')
}

// ═══════════ 14. 安全碼 ═══════════
section('14. 安全碼')
{
  const A = await mk('A'); const B = await mk('B')
  await befriend(A, B)
  const sa = await A.call(C.SAFETY_GET, { peer: B.pub })
  const sb = await B.call(C.SAFETY_GET, { peer: A.pub })
  eq('雙方算出同一組安全碼（次序無關）', sa.code, sb.code)
  ok('格式：12 組 5 位數', /^(\d{5} ){11}\d{5}$/.test(sa.code))
  eq('預設未驗證', sa.verified, false)
  ok('SAFETY_VERIFY 有實作（原本是 unknown cmd 41）',
     (await A.call(C.SAFETY_VERIFY, { peer: B.pub })).ok)
  eq('標記後狀態改變', (await A.call(C.SAFETY_GET, { peer: B.pub })).verified, true)
  eq('可以取消驗證', (await A.call(C.SAFETY_VERIFY, { peer: B.pub, verified: false })).verified, false)
  eq('驗證不存在的聯絡人', (await A.call(C.SAFETY_VERIFY, { peer: 'a'.repeat(64) })).ok, false)
}

// ═══════════ 15. 顯示名稱同步 ═══════════
section('15. 顯示名稱同步（原本只寫進 store，對方永遠看不到）')
{
  const A = await mk('A'); const B = await mk('B')
  await A.call(C.SETTINGS_SET_NAME, { name: '亞托莉' })
  await befriend(A, B)
  await settle(25)
  const c = (await B.call(C.CONTACTS_LIST)).find(x => x.publicKey === A.pub)
  eq('B 看得到 A 自報的名字', c.remoteName, '亞托莉')
  eq('信箱公鑰格式會驗', (await A.call(C.SETTINGS_SET_MAILBOX, { mailbox: 'garbage' })).ok, false)
  ok('合法信箱公鑰可設定', (await A.call(C.SETTINGS_SET_MAILBOX, { mailbox: B.pub })).ok)
}

// ═══════════ 16. 韌性：畸形訊框不准殺死背景執行緒 ═══════════
section('16. 韌性：畸形訊框不准殺死背景執行緒')
{
  const A = await mk('A'); const B = await mk('B')
  await befriend(A, B); await handshake(A, B)

  const nasty = [
    { type: 'gmsg' },
    { type: 'gmsg', gid: 'x' },
    { type: 'gmsg', gid: 'a'.repeat(32), id: 'bad' },
    { type: 'gsync', gid: 'a'.repeat(32) },
    { type: 'gsync', gid: 'a'.repeat(32), group: { members: null } },
    { type: 'gsync', gid: 'a'.repeat(32), group: { members: [{ pubkey: 'zz' }] } },
    { type: 'gack', gid: 'a'.repeat(32), id: null },
    { type: 'gdelete', gid: 'a'.repeat(32), id: 'a'.repeat(24) },
    { type: 'gleave', gid: 'a'.repeat(32) },
    { type: 'rmsg', id: 'x', header: {}, ct: 'not-base64!!!' },
    { type: 'rmsg', id: 'a'.repeat(24), header: { dh: 'zz', pn: -1, n: 1e9 }, ct: 'AAAA' },
    { type: 'ttl', seconds: 'NaN' },
    { type: 'ttl', seconds: -99999 },
    { type: 'ttl', seconds: Number.MAX_SAFE_INTEGER },
    { type: 'ack', id: 12345 },
    { type: 'profile', name: { evil: 1 }, mailbox: 'x' },
    { type: 'delete', id: null },
    { type: 'file-chunk', mediaId: 'nope', data: 'AAAA' },
    { type: 'file-end', mediaId: 'nope' },
    { type: 'file-begin', mid: 'x', media: { id: '../../etc/passwd' } },
    { type: 'file-begin', mid: 'a'.repeat(24), media: { id: 'a'.repeat(32), size: -5 } },
    { type: 'msg' },
    { type: 'unknown-type-entirely', payload: 'x'.repeat(1000) },
    { type: 123 },
    {}
  ]
  for (const f of nasty) { try { A.rawSend(B.pub, f) } catch (e) {} }
  await settle(40)

  const alive = await B.call(C.IDENTITY_GET)
  ok(`灌 ${nasty.length} 種畸形訊框後 worklet 仍存活`, alive.publicKey === B.pub)
  // 已知聯絡人送來解不開的東西 -> 如實顯示「[無法解密]」（可能是棘輪失步，使用者該知道）
  const junk = await B.call(C.MESSAGES_LIST, { peer: A.pub })
  eq('已知聯絡人的畸形訊框：只留下無法解密的佔位符，不會憑空生出內容',
     junk.map(m => m.text), ['[無法解密]'])
  eq('沒有憑空冒出群組', (await B.call(C.GROUP_LIST)).length, 0)
  await B.call(C.MESSAGES_CLEAR, { peer: A.pub })
  eq('畸形 TTL（負數／MAX_SAFE_INTEGER）被夾進合法範圍', (await B.call(C.TTL_GET, { key: A.pub })).seconds, 7 * 24 * 3600)
  eq('路徑穿越的 media id 沒有在磁碟上留下東西', fs.existsSync('/etc/passwd.bin'), false)

  // ── 關鍵：Hyperswarm 上任何知道你公鑰的人都連得上你，不必你先加他。
  //     陌生人灌垃圾不該在你的保險庫裡佔位置（每存一則都要重新加密整包 = 耗電/耗儲存攻擊）。
  const S = await mk('S')   // 陌生人：B 沒加他，他也沒加 B
  S.p2p.connectPeer(B.pub)
  await settle(20)
  ok('陌生人確實連得上（這就是 Hyperswarm 的現實）', !!S.p2p.conns.get(B.pub))
  for (const f of nasty) { try { S.rawSend(B.pub, f) } catch (e) {} }
  for (let i = 0; i < 30; i++) {
    S.rawSend(B.pub, { type: 'rmsg', id: crypto.randomBytes(12).toString('hex'), header: { dh: 'a'.repeat(64), pn: 0, n: i }, ct: Buffer.alloc(60).toString('base64') })
  }
  await settle(40)
  eq('陌生人灌 55 個訊框 -> 保險庫裡一則都沒有',
     (await B.call(C.MESSAGES_LIST, { peer: S.pub })).length, 0)
  ok('灌完之後 worklet 仍存活', (await B.call(C.IDENTITY_GET)).publicKey === B.pub)

  // 灌完之後棘輪還要能用（這正是原本會被一則畸形 header 永久毀掉的地方）
  await A.call(C.MESSAGE_SEND, { peer: B.pub, text: '灌完之後還能通' })
  await settle(25)
  eq('畸形訊框沒有毀掉棘輪，正常訊息照樣收得到',
     (await B.call(C.MESSAGES_LIST, { peer: A.pub })).map(m => m.text), ['灌完之後還能通'])
}

// ═══════════ 17. RPC 介面完整性 ═══════════
section('17. RPC 介面完整性')
{
  const A = await mk('A')
  const known = Object.values(C).filter(v => v < 100)
  const impl = Object.keys(A.w.handlers).map(Number)
  const missing = known.filter(k => !impl.includes(k))
  eq('CMD 表裡每個指令都有對應的 handler', missing, [])
  ok(`RPC 數量：${impl.length}`, impl.length >= 30)
  const unknown = await A.call(C.MESSAGES_LIST, { peer: 'x' }).then(() => 'ok').catch(() => 'threw')
  eq('未知的對象不會炸掉', unknown, 'ok')
  await A.call(9999).then(() => ok('未知指令應回錯誤', false)).catch(e => ok('未知指令回明確錯誤', /unknown cmd/.test(e.message)))
}

// ═══════════ 18. 回應方先開口（原本會石沉大海）═══════════
section('18. 回應方先開口 ← 這次抓到的真 bug')
{
  // 棘輪的 initiator 是「公鑰字典序較小」的那一方；responder 剛 bootstrap 完
  // CKs 是 null，送不出東西。原本的行為是：訊息卡在 state:'sent'，畫面上還打勾，
  // 但對方永遠收不到——而且看公鑰誰大誰小，大約一半的新對話都會中。
  //
  // ⚠️ 這個 bug 之所以躲過前面 143 項測試，是因為測試台自己有個 handshake()
  //    helper 一律「先讓 initiator 開口」。workaround 寫進測試 = 把 bug 藏起來。
  //    這一段刻意【不】呼叫 handshake()。
  const A = await mk('A'); const B = await mk('B')
  await befriend(A, B)                        // 注意：故意不 handshake

  // 挑出 responder（公鑰較大的那個），讓他先講話
  const [init, resp] = A.pub < B.pub ? [A, B] : [B, A]
  const r = await resp.call(resp.CMD.MESSAGE_SEND, { peer: init.pub, text: '我先開口' })
  ok('responder 送得出去（回 ok）', r.ok)
  await settle(30)

  const got = await init.call(init.CMD.MESSAGES_LIST, { peer: resp.pub })
  eq('initiator 真的收到了 responder 的第一則訊息', got.map(m => m.text), ['我先開口'])
  eq('responder 這邊也標記成已送達',
    (await resp.call(resp.CMD.MESSAGES_LIST, { peer: init.pub }))[0].state, 'delivered')

  // 反向也要正常
  await init.call(init.CMD.MESSAGE_SEND, { peer: resp.pub, text: '收到' })
  await settle(30)
  eq('反向仍然正常',
    (await resp.call(resp.CMD.MESSAGES_LIST, { peer: init.pub })).map(m => m.text),
    ['我先開口', '收到'])

  // 握手訊息不能被使用者看到
  const initMsgs = await init.call(init.CMD.MESSAGES_LIST, { peer: resp.pub })
  ok('CTRL 握手訊息不會出現在對話裡', !initMsgs.some(m => m.text === '' || m.text === '[無法解密]'),
    JSON.stringify(initMsgs.map(m => m.text)))
}

// ═══════════ 收尾 ═══════════
console.log(results.join('\n'))
console.log('\n' + '─'.repeat(56))
console.log(`通過 ${pass} 項，失敗 ${fail} 項`)
console.log('─'.repeat(56))
process.exit(fail ? 1 : 0)

})().catch(e => { console.log(results.join('\n')); console.error('\n💥 測試台自己炸了:', e); process.exit(2) })
