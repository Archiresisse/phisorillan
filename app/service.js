// service.js — 前台服務的 JS 側開關。
// ⚠️ 對應的原生模組（android/ 裡的 PhiServiceModule）是骨架，未在真機驗證過。
// 在一般環境（沒有原生模組）會安全地變成 no-op，不會讓 app 崩。

import { NativeModules, PermissionsAndroid, Platform } from 'react-native'

const Native = NativeModules.PhiService || null

export const serviceAvailable = !!Native

// Android 13+ 要先拿通知權限，前台服務的通知才顯示得出來
export async function ensureNotificationPermission () {
  if (Platform.OS !== 'android' || Platform.Version < 33) return true
  try {
    const g = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
    return g === PermissionsAndroid.RESULTS.GRANTED
  } catch (e) { return false }
}

export async function startService () {
  if (!Native) return false           // 沒有原生模組（例如還沒編原生層）-> 靜默略過
  await ensureNotificationPermission()
  try { await Native.start(); return true } catch (e) { return false }
}

export async function stopService () {
  if (!Native) return false
  try { await Native.stop(); return true } catch (e) { return false }
}
