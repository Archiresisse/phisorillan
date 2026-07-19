'use strict'
// 安全碼（safety number）：由「雙方的長期身分公鑰」確定性推導出一串可人工比對的數字。
// 兩邊算出來必定相同（先把兩把公鑰排序，保證次序無關）。
// 用途：帶外比對這串數字，確認你連到的公鑰確實屬於本人，藉此偵測中間人（MITM）。
//   - 數字一致  -> 沒有人在中間掉包公鑰
//   - 數字不同  -> 連線被掉包，或對方換了身分金鑰
// 仿 Signal 的做法：對每把公鑰做多次雜湊得到指紋，各取 30 位數，合併成 60 位數。

const crypto = require('crypto')
const sha512 = (buf) => crypto.createHash('sha512').update(buf).digest()

const ITER = 5200

// 對單一公鑰做迭代雜湊 -> 指紋（取前 30 位數字）
function fingerprintDigits (pub) {
  let h = Buffer.concat([Buffer.from([0x50, 0x68]), pub]) // 'Ph' 版本前綴
  for (let i = 0; i < ITER; i++) h = sha512(Buffer.concat([h, pub]))
  let out = ''
  for (let i = 0; i < 6; i++) {            // 6 組，每組 5 位數 = 30 位
    const slice = h.subarray(i * 5, i * 5 + 5)
    let n = 0
    for (const b of slice) n = (n * 256 + b) % 100000
    out += String(n).padStart(5, '0')
  }
  return out
}

// 兩把公鑰（hex）-> 60 位安全碼，分成 12 組、每組 5 位，空白分隔
function safetyNumber (pubHexA, pubHexB) {
  const a = Buffer.from(pubHexA, 'hex')
  const b = Buffer.from(pubHexB, 'hex')
  const [lo, hi] = pubHexA < pubHexB ? [a, b] : [b, a]
  const digits = fingerprintDigits(lo) + fingerprintDigits(hi) // 60 位
  return digits.match(/.{1,5}/g).join(' ')
}

module.exports = { safetyNumber }
