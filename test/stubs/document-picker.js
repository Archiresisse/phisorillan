'use strict'
// react-native-document-picker 的替身。
// 測試可以用 __queue() 預先塞入「使用者會挑到的檔案」。
const q = []
const DocumentPicker = {
  types: { allFiles: '*/*', images: 'image/*' },
  async pickSingle () {
    if (!q.length) { const e = new Error('User canceled'); e.code = 'DOCUMENT_PICKER_CANCELED'; throw e }
    return q.shift()
  },
  isCancel: (e) => e && e.code === 'DOCUMENT_PICKER_CANCELED',
  __queue: (f) => q.push(f),
  __reset: () => { q.length = 0 }
}
module.exports = { __esModule: true, default: DocumentPicker, types: DocumentPicker.types, isCancel: DocumentPicker.isCancel }
