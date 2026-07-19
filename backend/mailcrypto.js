'use strict'
// 離線訊息加密：用「收件人公鑰」做匿名封裝（libsodium sealed box）。
// 信箱中繼只看得到密文，看不到內容——這是離線投遞仍保有端對端加密的關鍵。
//
// 身分金鑰是 Ed25519（由種子推導，與 Hyperswarm 一致）；
// sealed box 需要 Curve25519，因此先做等價轉換。

const sodium = require('sodium-native')

function edPkToCurve (edPk) {
  const out = Buffer.alloc(sodium.crypto_box_PUBLICKEYBYTES)
  sodium.crypto_sign_ed25519_pk_to_curve25519(out, Buffer.from(edPk))
  return out
}
function edSkToCurve (edSk) {
  const out = Buffer.alloc(sodium.crypto_box_SECRETKEYBYTES)
  sodium.crypto_sign_ed25519_sk_to_curve25519(out, Buffer.from(edSk))
  return out
}

// 用收件人 Ed25519 公鑰封裝明文；回傳 base64 密文。寄件人匿名（box 本身不含寄件人）。
function sealFor (recipientEdPk, plaintextBuf) {
  const curvePk = edPkToCurve(recipientEdPk)
  const box = Buffer.alloc(plaintextBuf.length + sodium.crypto_box_SEALBYTES)
  sodium.crypto_box_seal(box, plaintextBuf, curvePk)
  return box.toString('base64')
}

// 用自己的 Ed25519 金鑰對解封；成功回傳 Buffer，失敗回傳 null。
function openSealed (boxB64, myEdPk, myEdSk) {
  const box = Buffer.from(boxB64, 'base64')
  if (box.length < sodium.crypto_box_SEALBYTES) return null
  const curvePk = edPkToCurve(myEdPk)
  const curveSk = edSkToCurve(myEdSk)
  const out = Buffer.alloc(box.length - sodium.crypto_box_SEALBYTES)
  const ok = sodium.crypto_box_seal_open(out, box, curvePk, curveSk)
  return ok ? out : null
}

// 由「我的 Ed25519 私鑰」與「對方 Ed25519 公鑰」算出 X25519 共享祕密（雙方一致）。
// 供 Double Ratchet 引導用。
function sharedSecret (myEdSk, theirEdPk) {
  const sk = edSkToCurve(myEdSk)
  const pk = edPkToCurve(theirEdPk)
  const out = Buffer.alloc(sodium.crypto_scalarmult_BYTES)
  sodium.crypto_scalarmult(out, sk, pk)
  return out
}

module.exports = { sealFor, openSealed, edPkToCurve, edSkToCurve, sharedSecret }
