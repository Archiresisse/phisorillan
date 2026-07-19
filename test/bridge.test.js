'use strict'
// ──────────────────────────────────────────────────────────────────────────
// 把「RN 端的 protocol.js」直接接上「真正的 worklet.js」跑。
// 這是原本 bridge.js「一行都沒跑過」那塊風險，能在沒有 RN 的環境下驗掉的部分。
//
// 沒被這裡涵蓋的，只剩 bridge.js 裡那 4 行 react-native-bare-kit 的接線。
// ──────────────────────────────────────────────────────────────────────────

const EventEmitter = require('events')
const { Node, HUB, settle } = require('./harness')

let pass = 0, fail = 0
const out = []
const ok = (n, c, d = '') => { c ? (pass++, out.push(`  ✅ ${n}`)) : (fail++, out.push(`  ❌ ${n}${d ? '  → ' + d : ''}`)) }
const eq = (n, a, b) => ok(n, JSON.stringify(a) === JSON.stringify(b), `得到 ${JSON.stringify(a)}，預期 ${JSON.stringify(b)}`)

// 把 protocol 的 client 接到某個節點的 worklet 上。
// splitter 用來模擬「真實 IPC 會把資料切在任意位置」。
function wire (node, createClient, splitter = (s) => [s]) {
  let client = null
  const stream = new EventEmitter()
  stream.write = (buf) => {
    const s = buf.toString()
    for (const piece of splitter(s)) client.onData(piece)   // 切碎再餵給 client
    return true
  }
  node.w.attach(stream)                                     // 用真正的 attach()
  client = createClient({ send: (line) => stream.emit('data', Buffer.from(line)), timeout: 6000 })
  return client
}

;(async () => {
const { createClient, CMD } = await import('../app/protocol.js')

out.push('1. protocol.js ⇄ worklet.js 往返')
{
  const N = new Node('bridgeA')
  const c = wire(N, createClient)

  const st = await c.api.vaultStatus()
  eq('vaultStatus 往返', st, { exists: false, unlocked: false })

  const v = await c.api.createVault('passw0rd!')
  ok('createVault 透過 api 包裝成功', v.ok && /^[0-9a-f]{64}$/.test(v.publicKey))
  N.pub = v.publicKey
  await settle()

  const id = await c.api.getIdentity()
  eq('getIdentity 拿到同一把公鑰', id.publicKey, v.publicKey)
  ok('shortKey 有省略號', id.short.includes('…'))

  eq('listContacts 空陣列', await c.api.listContacts(), [])
  const bad = await c.api.addContact('not-a-key')
  eq('錯誤會以 { ok:false } 回來，而不是 reject', bad.ok, false)
}

out.push('\n2. 串流切割（真實 IPC 不會剛好一則一包）')
{
  // (a) 一次一個字元
  const N = new Node('bridgeB')
  const c1 = wire(N, createClient, (s) => s.split(''))
  const r1 = await c1.api.vaultStatus()
  eq('回覆被切成單一字元也能重組', r1, { exists: false, unlocked: false })

  // (b) 好幾則黏在同一包裡
  const N2 = new Node('bridgeC')
  const c2 = wire(N2, createClient)
  const all = await Promise.all([c2.api.vaultStatus(), c2.api.vaultStatus(), c2.api.vaultStatus()])
  eq('三個並行 RPC 各自對到自己的回覆', all.length, 3)
  ok('並行回覆內容都正確', all.every(r => r.exists === false))

  // (c) 中間夾垃圾行
  const N3 = new Node('bridgeD')
  let cl = null
  const stream = new EventEmitter()
  stream.write = (buf) => { cl.onData(buf.toString()); return true }
  N3.w.attach(stream)
  cl = createClient({ send: (l) => stream.emit('data', Buffer.from(l)), timeout: 6000 })
  cl.onData('這不是 JSON\n')
  cl.onData('{"broken":\n')
  cl.onData('\n\n')
  const r3 = await cl.api.vaultStatus()
  eq('垃圾行被跳過，串流沒被卡死', r3.exists, false)
}

out.push('\n3. 事件推播')
{
  const N = new Node('bridgeE')
  const c = wire(N, createClient)
  const seen = []
  const off = c.api.onStatus(d => seen.push(d))
  const v = await c.api.createVault('passw0rd!')
  N.pub = v.publicKey
  await settle(20)
  ok('onStatus 收到 swarm listening 事件', seen.some(d => d.swarm === 'listening'))
  off()
  const before = seen.length
  await settle(5)
  eq('取消訂閱之後不再收到', seen.length, before)
}

out.push('\n4. 錯誤與逾時')
{
  const N = new Node('bridgeF')
  const c = wire(N, createClient)
  let threw = null
  try { await c.call(9999) } catch (e) { threw = e.message }
  ok('未知指令 -> Promise reject 且有訊息', /unknown cmd/.test(threw || ''))

  // send 直接爆掉時要 reject，不能無聲吞掉
  const dead = createClient({ send: () => { throw new Error('IPC 已關閉') }, timeout: 500 })
  let e2 = null
  try { await dead.call(1) } catch (e) { e2 = e.message }
  eq('IPC 送不出去 -> reject', e2, 'IPC 已關閉')

  // 沒人回應 -> 逾時
  // protocol.js 的逾時 timer 是 unref 的（RN 裡沒有 unref 所以是 no-op，Node 裡則是
  // 「有 RPC 在等」不該讓行程活著不肯結束）。這裡得自己撐住事件迴圈才等得到逾時。
  const keepalive = setInterval(() => {}, 40)
  const silent = createClient({ send: () => {}, timeout: 300 })
  let e3 = null
  try { await silent.call(1) } catch (e) { e3 = e.message }
  clearInterval(keepalive)
  ok('沒有回應 -> 逾時 reject', /逾時/.test(e3 || ''))

  // destroy 要把所有等待中的 Promise 收掉，不能讓 UI 永遠 hang 住
  const d = createClient({ send: () => {}, timeout: 9000 })
  const p = d.call(1).catch(e => e.message)
  d.destroy()
  eq('destroy() 會 reject 所有等待中的呼叫', await p, '連線已關閉')
}

out.push('\n5. 兩支「手機」透過 api 完整對話')
{
  const A = new Node('phoneA'); const B = new Node('phoneB')
  const ca = wire(A, createClient, (s) => s.split(''))   // 順便用最惡劣的切法
  const cb = wire(B, createClient, (s) => s.split(''))

  A.pub = (await ca.api.createVault('passw0rd!')).publicKey
  B.pub = (await cb.api.createVault('passw0rd!')).publicKey
  await settle()

  await ca.api.setName('亞托莉')
  await ca.api.addContact(B.pub, 'B')
  await cb.api.addContact(A.pub, 'A')
  await settle(20)

  const [I, R] = A.pub < B.pub ? [[A, ca], [B, cb]] : [[B, cb], [A, ca]]
  const inbox = []
  R[1].api.onMessage(d => inbox.push(d.message.text))

  await I[1].api.sendMessage(R[0].pub, '從 UI 那一層送出來的')
  await settle(30)
  eq('對方的 UI 收到了 EVT_MESSAGE', inbox, ['從 UI 那一層送出來的'])
  eq('對方的 messages() 也拿得到',
     (await R[1].api.messages(I[0].pub)).map(m => m.text), ['從 UI 那一層送出來的'])

  const s1 = await ca.api.getSafety(B.pub)
  const s2 = await cb.api.getSafety(A.pub)
  eq('兩支手機的安全碼一致', s1.code, s2.code)

  // 群組整套走 api
  const g = await ca.api.createGroup('UI 建的群', [B.pub])
  await settle(30)
  eq('B 的 UI 看得到群組', (await cb.api.listGroups()).length, 1)
  const gmsgs = []
  cb.api.onGroupMessage(d => { if (d.message) gmsgs.push(d.message.text) })
  await ca.api.sendGroupMessage(g.group.id, '群組訊息')
  await settle(30)
  eq('群組事件推到 B 的 UI', gmsgs, ['群組訊息'])
  eq('群組雙勾', (await ca.api.groupMessages(g.group.id))[0].state, 'delivered')
}

console.log(out.join('\n'))
console.log('\n' + '─'.repeat(56))
console.log(`通過 ${pass} 項，失敗 ${fail} 項`)
console.log('─'.repeat(56))
process.exit(fail ? 1 : 0)
})().catch(e => { console.log(out.join('\n')); console.error('\n💥', e); process.exit(2) })
