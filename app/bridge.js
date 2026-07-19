// ──────────────────────────────────────────────────────────────────────────
// bridge.js — React Native 端唯一碰 react-native-bare-kit 的地方
//
// ⚠️ 這個檔案【沒有在真機上跑過】——這裡沒有 RN toolchain。
//    所以刻意把它壓到最小：所有協定邏輯都在 protocol.js（純 JS，已用真正的
//    worklet 測過，見 test/bridge.test.js）。這裡剩下的只有下面這幾行接線。
//    第一次上真機如果出錯，範圍只會在這幾行裡，不會是整包協定。
//
//    要對的 API（依 react-native-bare-kit 文件）：
//      new Worklet() / worklet.start(filename, source, args) / worklet.IPC
//      IPC 是雙工串流：.on('data') / .write()
//    如果實際 API 名稱不同，只要改 start() 裡面那幾行即可。
// ──────────────────────────────────────────────────────────────────────────

import { Worklet } from 'react-native-bare-kit'
import { createClient, CMD } from './protocol'
// worklet bundle 以「纯字符串」形式载入，不用 import bundle from './x.mjs'。
// 原因：bare-pack 产出的 bundle 不是合法 JS 模块（开头是数字、自有格式），
// Metro 试图解析它就会失败（一直报 Unable to resolve module）。
// worklet-source.js 只是 `export default "<bundle 全文>"`，Metro 当普通字符串处理，
// 不会去碰里面的 require。这个文件由 workflow 在构建时用 bundle 生成。
import bundleSource from './worklet-source'

export { CMD }

let worklet = null
let client = null

export async function start (dataDir) {
  // ↓↓↓ 沒被驗證過的，就是下面這幾個 API 接觸點 ↓↓↓
  worklet = new Worklet()
  // 第一个参数扩展名必须是 .bundle；第二个是 bundle 源码字符串
  await worklet.start('/app.bundle', bundleSource, [dataDir])
  const ipc = worklet.IPC

  client = createClient({ send: (line) => ipc.write(line) })
  ipc.on('data', (chunk) =>
    client.onData(typeof chunk === 'string' ? chunk : chunk.toString('utf8')))
  ipc.on('error', (e) => console.warn('IPC error', e))
  // ↑↑↑ 以上 ↑↑↑

  return client
}

export async function stop () {
  if (client) { client.destroy(); client = null }
  if (worklet) { try { await worklet.terminate() } catch (e) {} ; worklet = null }
}

const need = () => { if (!client) throw new Error('worklet 尚未啟動'); return client }

export const call = (cmd, args) => need().call(cmd, args)
export const on = (evt, fn) => need().on(evt, fn)

// api.xxx() 在 start() 之前呼叫會丟明確錯誤，而不是 undefined is not a function
export const api = new Proxy({}, {
  get: (_, k) => (...a) => need().api[k](...a)
})
