'use strict'
// Node 的 crypto.hkdfSync 在 Bare 沒有；用 HMAC 自行實作 RFC5869（extract + expand）。
// 已驗證輸出與 Node crypto.hkdfSync 完全一致 -> 手機與桌面的棘輪金鑰推導相同。
const { createHmac } = require('crypto')
function hkdfSync (digest, ikm, salt, info, keylen) {
  const prk = createHmac(digest, Buffer.from(salt)).update(Buffer.from(ikm)).digest()   // extract
  const out = []; let t = Buffer.alloc(0); let i = 0
  while (Buffer.concat(out).length < keylen) {
    i++
    t = createHmac(digest, prk).update(Buffer.concat([t, Buffer.from(info), Buffer.from([i])])).digest()
    out.push(t)
  }
  return Buffer.concat(out).subarray(0, keylen)
}
module.exports = { hkdfSync }
