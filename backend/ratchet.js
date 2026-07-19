'use strict'
// Double Ratchet（逐訊息前向保密 + 後向安全）— 標準 Signal 演算法。
//  · DH 棘輪：Curve25519（X25519）
//  · 根/鏈 KDF：HKDF-SHA256 / HMAC-SHA256
//  · 訊息加密：XChaCha20-Poly1305（每訊息一把一次性金鑰，故 nonce 可固定為零）
//
// 引導（無 X3DH、無額外握手）：雙方由「長期身分金鑰的 X25519 共享祕密」推導同一個根金鑰；
// 以「身分公鑰較小者」為發起方(initiator)。發起方可立即送出；回應方在收到第一則訊息前
// 無法送出（呼叫端需先佇列，待引導完成後再送）。
//
// 安全兜底：任何解密失敗都「丟出例外」，由呼叫端標記為「[無法解密]」，絕不讓程式崩潰。

const sodium = require('sodium-native')
const crypto = require('crypto')
const { hkdfSync } = require('./hkdf')

const MAX_SKIP = 256
const MAX_SKIPPED_STORE = 2048   // 跳過金鑰的總量上限，避免手機記憶體被慢慢撐大
const MAX_COUNTER = 1e6          // 訊息序號的合理上限
const ZERO_NONCE = Buffer.alloc(sodium.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES)
const AKEY = sodium.crypto_aead_xchacha20poly1305_ietf_KEYBYTES
const ABYTES = sodium.crypto_aead_xchacha20poly1305_ietf_ABYTES

// ---- 原語 ----
const hkdf = (salt, ikm, info, len) => Buffer.from(hkdfSync('sha256', ikm, salt, info, len))
const hmac = (key, b) => crypto.createHmac('sha256', key).update(b).digest()
function dh (sk, pk) { const o = Buffer.alloc(32); sodium.crypto_scalarmult(o, sk, pk); return o }
function genKP () { const pk = Buffer.alloc(32), sk = Buffer.alloc(32); sodium.crypto_box_keypair(pk, sk); return { pk, sk } }
function kpFromSeed (seed) { const pk = Buffer.alloc(32), sk = Buffer.alloc(32); sodium.crypto_box_seed_keypair(pk, sk, seed); return { pk, sk } }

function kdfRK (rk, dhOut) { const o = hkdf(rk, dhOut, Buffer.from('phisorilla/dr/rk'), 64); return [o.subarray(0, 32), o.subarray(32, 64)] }
function kdfCK (ck) { return [hmac(ck, Buffer.from([0x02])), hmac(ck, Buffer.from([0x01]))] } // [ck', mk]

function aeadEnc (mk, plain, ad) {
  const c = Buffer.alloc(plain.length + ABYTES)
  sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(c, plain, ad, null, ZERO_NONCE, mk)
  return c
}
function aeadDec (mk, ct, ad) {
  const m = Buffer.alloc(ct.length - ABYTES)
  sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(m, null, ct, ad, ZERO_NONCE, mk) // 失敗會 throw
  return m
}

const adOf = (header) => Buffer.from(JSON.stringify(header), 'utf8')

// ---- 引導 ----
// shared: 由雙方身分金鑰算出的 X25519 共享祕密(Buffer32)。amInitiator: 我方身分公鑰是否較小。
function bootstrap (shared, amInitiator) {
  const RK0 = hkdf(Buffer.alloc(32), shared, Buffer.from('phisorilla/dr/root'), 32)
  const respSeed = hkdf(shared, Buffer.from('responder'), Buffer.from('phisorilla/dr/respkey'), 32)
  const respKP = kpFromSeed(respSeed)
  if (amInitiator) {
    const DHs = genKP()
    const [RK, CKs] = kdfRK(RK0, dh(DHs.sk, respKP.pk))
    return { DHs, DHr: respKP.pk, RK, CKs, CKr: null, Ns: 0, Nr: 0, PN: 0, skipped: {} }
  }
  return { DHs: respKP, DHr: null, RK: RK0, CKs: null, CKr: null, Ns: 0, Nr: 0, PN: 0, skipped: {} }
}

const canSend = (st) => st.CKs != null

// ---- 加密 ----
function encrypt (st, plaintextBuf) {
  if (!canSend(st)) { const e = new Error('RATCHET_NOT_READY'); e.code = 'NOT_READY'; throw e }
  const [CKs, mk] = kdfCK(st.CKs); st.CKs = CKs
  const header = { dh: st.DHs.pk.toString('hex'), pn: st.PN, n: st.Ns }
  st.Ns += 1
  const ct = aeadEnc(mk, plaintextBuf, adOf(header))
  return { header, ct: ct.toString('base64') }
}

// ---- 解密 ----
function trySkipped (st, header, ctBuf) {
  const key = header.dh + ':' + header.n
  const mkB64 = st.skipped[key]
  if (!mkB64) return null
  const mk = Buffer.from(mkB64, 'base64')
  const m = aeadDec(mk, ctBuf, adOf(header))
  delete st.skipped[key]
  return m
}
function skipMessageKeys (st, until) {
  if (st.Nr + MAX_SKIP < until) { const e = new Error('TOO_MANY_SKIPPED'); e.code = 'SKIP'; throw e }
  if (st.CKr == null) return
  const dhrHex = st.DHr.toString('hex')
  while (st.Nr < until) {
    const [CKr, mk] = kdfCK(st.CKr); st.CKr = CKr
    st.skipped[dhrHex + ':' + st.Nr] = mk.toString('base64')
    st.Nr += 1
  }
}
function dhRatchet (st, header) {
  st.PN = st.Ns; st.Ns = 0; st.Nr = 0
  st.DHr = Buffer.from(header.dh, 'hex')
  ;[st.RK, st.CKr] = kdfRK(st.RK, dh(st.DHs.sk, st.DHr))
  st.DHs = genKP()
  ;[st.RK, st.CKs] = kdfRK(st.RK, dh(st.DHs.sk, st.DHr))
}
// 對方送來的 header 完全不可信。先擋掉畸形的，再進任何會動到狀態的路徑。
function validHeader (h) {
  return !!h && typeof h.dh === 'string' && /^[0-9a-f]{64}$/.test(h.dh) &&
    Number.isInteger(h.pn) && h.pn >= 0 && h.pn <= MAX_COUNTER &&
    Number.isInteger(h.n) && h.n >= 0 && h.n <= MAX_COUNTER
}

// 深拷貝一份棘輪狀態；解密失敗時整份丟掉，原狀態一個位元組都不會被碰到。
function cloneState (st) {
  return {
    DHs: { pk: Buffer.from(st.DHs.pk), sk: Buffer.from(st.DHs.sk) },
    DHr: st.DHr ? Buffer.from(st.DHr) : null,
    RK: Buffer.from(st.RK),
    CKs: st.CKs ? Buffer.from(st.CKs) : null,
    CKr: st.CKr ? Buffer.from(st.CKr) : null,
    Ns: st.Ns, Nr: st.Nr, PN: st.PN,
    skipped: Object.assign({}, st.skipped)
  }
}

// 跳過金鑰只增不減會慢慢吃光記憶體；超量就丟掉最舊的（那些訊息本來也等不到了）。
function trimSkipped (st) {
  const keys = Object.keys(st.skipped)
  if (keys.length <= MAX_SKIPPED_STORE) return
  for (const k of keys.slice(0, keys.length - MAX_SKIPPED_STORE)) delete st.skipped[k]
}

function _decrypt (st, header, ctBuf) {
  const sk = trySkipped(st, header, ctBuf)
  if (sk) return sk
  if (st.DHr == null || header.dh !== st.DHr.toString('hex')) {
    skipMessageKeys(st, header.pn)
    dhRatchet(st, header)
  }
  skipMessageKeys(st, header.n)
  if (st.CKr == null) { const e = new Error('NO_RECV_CHAIN'); e.code = 'NO_CKR'; throw e }
  const [CKr, mk] = kdfCK(st.CKr); st.CKr = CKr; st.Nr += 1
  return aeadDec(mk, ctBuf, adOf(header))
}

// ⚠️ 這裡曾經是一個遠端 DoS：
//    原本的 decrypt 直接在 st 上動手，而 dhRatchet 會先寫入 st.DHr/Ns/Nr 才呼叫 dh()。
//    對方只要送一個 header.dh = 'zz'（或任何非曲線上的點），dh() 丟例外時
//    st 已經被改壞了 -> 這條棘輪從此再也解不開任何訊息，且狀態會被存進保險庫，
//    重開 app 也救不回來。任何知道你公鑰的人都能觸發，一則訊框就夠。
//    修法：先驗 header，再在副本上運算，只有成功才寫回。桌面版同樣需要這個修正。
function decrypt (st, header, ctB64) {
  if (!validHeader(header)) { const e = new Error('BAD_HEADER'); e.code = 'BAD_HEADER'; throw e }
  const ctBuf = Buffer.from(ctB64 || '', 'base64')
  if (ctBuf.length <= ABYTES) { const e = new Error('BAD_CIPHERTEXT'); e.code = 'BAD_CT'; throw e }
  const work = cloneState(st)
  const pt = _decrypt(work, header, ctBuf)   // 失敗就直接丟例外，work 整份作廢
  trimSkipped(work)
  Object.assign(st, work)                    // 只有成功才寫回
  return pt
}

// ---- 序列化（存進保險庫）----
function serialize (st) {
  return JSON.stringify({
    DHs: { pk: st.DHs.pk.toString('base64'), sk: st.DHs.sk.toString('base64') },
    DHr: st.DHr ? st.DHr.toString('base64') : null,
    RK: st.RK.toString('base64'),
    CKs: st.CKs ? st.CKs.toString('base64') : null,
    CKr: st.CKr ? st.CKr.toString('base64') : null,
    Ns: st.Ns, Nr: st.Nr, PN: st.PN, skipped: st.skipped
  })
}
function deserialize (json) {
  const o = typeof json === 'string' ? JSON.parse(json) : json
  const b = (x) => Buffer.from(x, 'base64')
  return {
    DHs: { pk: b(o.DHs.pk), sk: b(o.DHs.sk) },
    DHr: o.DHr ? b(o.DHr) : null,
    RK: b(o.RK),
    CKs: o.CKs ? b(o.CKs) : null,
    CKr: o.CKr ? b(o.CKr) : null,
    Ns: o.Ns, Nr: o.Nr, PN: o.PN, skipped: o.skipped || {}
  }
}

module.exports = { bootstrap, encrypt, decrypt, canSend, serialize, deserialize, validHeader, MAX_SKIP, MAX_SKIPPED_STORE }
