'use strict'
// 身分 = 一組由 32-byte 種子決定的 Ed25519 金鑰對。
// 公鑰（hex）就是你的「地址」。沒有郵箱、沒有手機、沒有使用者名稱。
// 種子存在本機；只要種子在，身分就在。

const crypto = require('crypto')
const DHT = require('hyperdht')

// 從種子推導金鑰對（與 Hyperswarm 內部用同一套推導，確保身分一致）。
function keyPairFromSeed (seed) {
  return DHT.keyPair(seed)
}

function newSeed () {
  return crypto.randomBytes(32)
}

// 把任意輸入正規化成 32-byte 公鑰 Buffer，並驗證格式。
// 接受：64 字元 hex，或 "yozakura:<hex>" 前綴。
function parsePublicKey (input) {
  if (typeof input !== 'string') return null
  let s = input.trim()
  if (s.toLowerCase().startsWith('phisorilla:')) s = s.slice('phisorilla:'.length)
  if (s.toLowerCase().startsWith('yozakura:')) s = s.slice('yozakura:'.length)
  s = s.replace(/\s+/g, '')
  if (!/^[0-9a-fA-F]{64}$/.test(s)) return null
  return Buffer.from(s.toLowerCase(), 'hex')
}

function toHex (buf) {
  return Buffer.from(buf).toString('hex')
}

// 給 UI 用的短碼，例如 a1b2c3d4…7e8f9a0b
function shortKey (hex) {
  return hex.slice(0, 8) + '…' + hex.slice(-8)
}

module.exports = { keyPairFromSeed, newSeed, parsePublicKey, toHex, shortKey }
