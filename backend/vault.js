'use strict'
// 本機加密保險庫。全程使用 Node 內建 crypto，不引入任何原生模組。
//   金鑰導出：scrypt（記憶體困難型）
//   對稱加密：AES-256-GCM（附帶完整性驗證標籤）
// 通行碼永不落地；只有解密後的內容在記憶體中。

const crypto = require('crypto')          // Node -> crypto；Bare -> bare-crypto（見 package.json imports）
const { syncScrypt } = require('scrypt-js') // bare-crypto 無 scryptSync；純 JS 版輸出與 Node 位元組一致

const KDF = { N: 1 << 15, r: 8, p: 1 } // ~32MB 記憶體
const MAXMEM = 96 * 1024 * 1024

function deriveKey (password, salt, N, r, p) {
  return Buffer.from(syncScrypt(Buffer.from(password, 'utf8'), salt,
    N || KDF.N, r || KDF.r, p || KDF.p, 32))
}

// 物件 -> 可寫入磁碟的加密 JSON 結構
function encrypt (obj, password) {
  const salt = crypto.randomBytes(16)
  const iv = crypto.randomBytes(12)
  const key = deriveKey(password, salt)
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)
  const plain = Buffer.from(JSON.stringify(obj), 'utf8')
  const ct = Buffer.concat([cipher.update(plain), cipher.final()])
  const tag = cipher.getAuthTag()
  return {
    v: 1,
    kdf: 'scrypt', N: KDF.N, r: KDF.r, p: KDF.p,
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    tag: tag.toString('base64'),
    ct: ct.toString('base64')
  }
}

// 加密結構 + 通行碼 -> 物件；通行碼錯誤會在驗證標籤階段丟出錯誤
function decrypt (blob, password) {
  const salt = Buffer.from(blob.salt, 'base64')
  const iv = Buffer.from(blob.iv, 'base64')
  const tag = Buffer.from(blob.tag, 'base64')
  const ct = Buffer.from(blob.ct, 'base64')
  const key = deriveKey(password, salt, blob.N, blob.r, blob.p)
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv)
  decipher.setAuthTag(tag)
  const plain = Buffer.concat([decipher.update(ct), decipher.final()])
  return JSON.parse(plain.toString('utf8'))
}

module.exports = { encrypt, decrypt }
