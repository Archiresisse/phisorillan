'use strict'
// 在 Noise 加密的位元組串流上做訊息分框。
// 每一框：4 bytes 大端長度 + 該長度的 UTF-8 JSON。
// 這樣對方收到的不是裸位元組流，而是一則則完整 JSON 物件。

const MAX_FRAME = 8 * 1024 * 1024 // 單框上限 8MB，避免惡意超大框撐爆記憶體

function encode (obj) {
  const json = Buffer.from(JSON.stringify(obj), 'utf8')
  const header = Buffer.allocUnsafe(4)
  header.writeUInt32BE(json.length, 0)
  return Buffer.concat([header, json])
}

// 增量解碼器：餵入任意切片，吐出完整物件。
class Decoder {
  constructor (onMessage, onError) {
    this._buf = Buffer.alloc(0)
    this._onMessage = onMessage
    this._onError = onError || (() => {})
  }

  push (chunk) {
    this._buf = this._buf.length ? Buffer.concat([this._buf, chunk]) : chunk
    while (this._buf.length >= 4) {
      const len = this._buf.readUInt32BE(0)
      if (len > MAX_FRAME) {
        this._onError(new Error('frame too large: ' + len))
        this._buf = Buffer.alloc(0)
        return
      }
      if (this._buf.length < 4 + len) break // 框還沒收齊，等下一片
      const body = this._buf.subarray(4, 4 + len)
      this._buf = this._buf.subarray(4 + len)
      try {
        this._onMessage(JSON.parse(body.toString('utf8')))
      } catch (err) {
        this._onError(err)
      }
    }
  }
}

module.exports = { encode, Decoder, MAX_FRAME }
