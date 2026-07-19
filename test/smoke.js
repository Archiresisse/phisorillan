'use strict'
const { Node, HUB, settle } = require('./harness')

;(async () => {
  const A = new Node('A')
  const B = new Node('B')

  const a = await A.call(A.CMD.VAULT_CREATE, { password: 'hunter2!' })
  const b = await B.call(B.CMD.VAULT_CREATE, { password: 'hunter2!' })
  console.log('A pub:', a.publicKey.slice(0, 16), '| B pub:', b.publicKey.slice(0, 16))
  A.pub = a.publicKey; B.pub = b.publicKey

  await settle()
  console.log('HUB 節點數:', HUB.nodes.size)

  console.log('A 加 B:', await A.call(A.CMD.CONTACTS_ADD, { publicKey: B.pub, name: 'B' }))
  console.log('B 加 A:', await B.call(B.CMD.CONTACTS_ADD, { publicKey: A.pub, name: 'A' }))
  await settle()

  console.log('A 線上看得到 B?', (await A.call(A.CMD.CONTACTS_LIST))[0].online)

  const initiator = A.pub < B.pub ? 'A' : 'B'
  console.log('棘輪 initiator 應該是:', initiator)
  const [S, R] = initiator === 'A' ? [A, B] : [B, A]

  const sent = await S.call(S.CMD.MESSAGE_SEND, { peer: R.pub, text: '測試 🌸 hello' })
  console.log('送出:', sent.ok, sent.message.text)
  await settle(30)

  const got = await R.call(R.CMD.MESSAGES_LIST, { peer: S.pub })
  console.log('對方收到:', JSON.stringify(got.map(m => m.text)))

  const back = await R.call(R.CMD.MESSAGE_SEND, { peer: S.pub, text: '回你一句' })
  console.log('回送:', back.ok)
  await settle(30)
  const got2 = await S.call(S.CMD.MESSAGES_LIST, { peer: R.pub })
  console.log('原發送方收到:', JSON.stringify(got2.map(m => `${m.dir}:${m.text}:${m.state}`)))

  console.log('\nEVT_WARN 事件（應該是空的）:', JSON.stringify(A.evts(A.CMD.EVT_WARN).concat(B.evts(B.CMD.EVT_WARN))))
  process.exit(0)
})().catch(e => { console.error('💥', e); process.exit(1) })
