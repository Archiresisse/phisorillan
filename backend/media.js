'use strict'
// 媒體儲存：圖片／影片／任意檔案，串流寫入磁碟（不佔記憶體，支援任意大小）。
// 存放於使用者可自訂的資料夾 <dataDir>/media，每個媒體兩個檔：
//   <id>.bin   原始位元組
//   <id>.json  中繼資料 {name, mime, mkind, size}
// 註：媒體檔以明文存於你選定的本機路徑（方便任意大小與直接存取）；
//     金鑰／聯絡人／文字訊息仍在加密保險庫內。要連媒體一起靜態加密，
//     可把資料路徑設在加密磁碟區。

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { Readable } = require('stream')

let DIR = null
const HEXID = /^[0-9a-f]{32}$/

const MIME = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif', webp: 'image/webp', bmp: 'image/bmp',
  mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime', mkv: 'video/x-matroska', avi: 'video/x-msvideo',
  mp3: 'audio/mpeg', wav: 'audio/wav', ogg: 'audio/ogg', m4a: 'audio/mp4',
  pdf: 'application/pdf', txt: 'text/plain', zip: 'application/zip'
}
function mimeFor (name) {
  const ext = path.extname(name).slice(1).toLowerCase()
  return MIME[ext] || 'application/octet-stream'
}
function kindOf (mime) {
  if (mime.startsWith('image/')) return 'image'
  if (mime.startsWith('video/')) return 'video'
  if (mime.startsWith('audio/')) return 'audio'
  return 'file'
}

function init (dir) { DIR = dir; fs.mkdirSync(dir, { recursive: true }) }
function dirOf () { return DIR }
function newId () { return crypto.randomBytes(16).toString('hex') }
function binPath (id) { return path.join(DIR, id + '.bin') }
function metaPath (id) { return path.join(DIR, id + '.json') }

function readMeta (id) {
  try { return JSON.parse(fs.readFileSync(metaPath(id), 'utf8')) } catch { return null }
}
function writeMeta (id, meta) { fs.writeFileSync(metaPath(id), JSON.stringify(meta)) }

// 檔名只是給人看的中繼資料，但別人送來的檔名可能含 ../ 或 /。
// 只要 RN/原生端拿它去組儲存路徑就會變成路徑穿越，這裡先一律剝乾淨。
function safeName (name) {
  return String(name || 'file')
    .replace(/[\\/\x00]/g, '_')
    .replace(/^\.+/, '_')
    .slice(0, 120) || 'file'
}

// 匯入本機檔案到媒體庫（串流複製）。回傳 Promise<media 中繼資料>。
// displayName：Android 的 content:// 必須先在原生層複製到快取，快取檔名是亂碼，
//              使用者看到的真實檔名要另外傳進來。
function importFile (srcPath, displayName) {
  return new Promise((resolve, reject) => {
    const id = newId()
    const name = safeName(displayName || path.basename(srcPath))
    const mime = mimeFor(name)
    let size = 0
    try { size = fs.statSync(srcPath).size } catch {}
    const meta = { id, name, mime, mkind: kindOf(mime), size }
    const rs = fs.createReadStream(srcPath)
    const ws = fs.createWriteStream(binPath(id))
    rs.on('error', reject); ws.on('error', reject)
    ws.on('finish', () => { writeMeta(id, meta); resolve(meta) })
    rs.pipe(ws)
  })
}

// 接收端：開一個寫入串流，邊收邊寫。
function openIncoming (id, meta) {
  if (!HEXID.test(id)) return null
  writeMeta(id, {
    id,
    name: safeName(meta.name),
    mime: String(meta.mime || 'application/octet-stream').slice(0, 100),
    mkind: ['image', 'video', 'audio', 'file'].includes(meta.mkind) ? meta.mkind : 'file',
    size: Number(meta.size) || 0
  })
  return fs.createWriteStream(binPath(id))
}

function remove (id) {
  if (!HEXID.test(id)) return
  try { fs.unlinkSync(binPath(id)) } catch {}
  try { fs.unlinkSync(metaPath(id)) } catch {}
}

function exists (id) { return HEXID.test(id) && fs.existsSync(binPath(id)) }

// 供桌面版 pmedia:// 自訂協定串流播放（支援 Range，影片可拖曳進度）。回傳 Web Response。
// ⚠️ 僅限桌面：Bare 沒有 Response，Android 端請改用 MEDIA_PATH 拿到 file:// 路徑。
function serve (req) {
  if (typeof Response === 'undefined') throw new Error('serve() 只在桌面版可用；Android 請用 MEDIA_PATH')
  try {
    const url = new URL(req.url)
    const id = url.hostname || url.pathname.replace(/[^0-9a-f]/g, '')
    if (!exists(id)) return new Response('not found', { status: 404 })
    const meta = readMeta(id) || { mime: 'application/octet-stream', size: 0 }
    const total = fs.statSync(binPath(id)).size
    const range = req.headers.get('range') || req.headers.get('Range')
    const headers = { 'Content-Type': meta.mime, 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-store' }

    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range)
      let start = m && m[1] ? parseInt(m[1], 10) : 0
      let end = m && m[2] ? parseInt(m[2], 10) : total - 1
      if (isNaN(start)) start = 0
      if (isNaN(end) || end >= total) end = total - 1
      if (start > end) start = 0
      headers['Content-Range'] = `bytes ${start}-${end}/${total}`
      headers['Content-Length'] = String(end - start + 1)
      const stream = Readable.toWeb(fs.createReadStream(binPath(id), { start, end }))
      return new Response(stream, { status: 206, headers })
    }
    headers['Content-Length'] = String(total)
    return new Response(Readable.toWeb(fs.createReadStream(binPath(id))), { status: 200, headers })
  } catch (e) {
    return new Response('error', { status: 500 })
  }
}

module.exports = { init, dirOf, newId, mimeFor, kindOf, safeName, importFile, openIncoming, remove, exists, readMeta, serve, binPath, metaPath }
