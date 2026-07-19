# android/ — 原生層骨架

## ⚠️ 先讀這段

**這整個資料夾從未編譯過，也從未在真機上跑過。** 我（AI）沒有 Android 環境。

這是「有依據的草稿」，目的是讓你**少從零翻文件**，不是可以直接 `gradlew` 的成品。
第一次編幾乎一定要調：`import` 路徑、API level、`react-native-bare-kit` 你裝到的版本
真正的類別／方法名、以及套件名（我用 `com.phisorilla`，你的可能不同）。

把它當成「該補哪些檔、每個檔大概長怎樣、有哪些坑」的清單。

## 這些檔案在幹嘛

| 檔案 | 作用 |
|---|---|
| `PhiForegroundService.java` | 前台服務 + wake lock，讓背景連線在 Doze 底下活著 |
| `PhiServiceModule.java` | RN 原生模組，讓 JS 能 `start()`／`stop()` 服務 |
| `PhiServicePackage.java` | 把上面那個模組註冊進 RN（要在 `MainApplication` 裡 add） |
| `AndroidManifest.additions.xml` | 要**合併**進 RN 產生的 manifest 的權限與 `<service>` 宣告 |
| `app/build.gradle.additions` | ABI 設定（32/64 位真正被決定的地方）＋ bare-kit 相依 |

對應的 JS 側是 `../app/service.js`（已接進 `App.jsx`，解鎖後呼叫 `startService()`；
沒有原生模組時安全地 no-op）。

## 為什麼需要前台服務

無伺服器 P2P 要收訊息 → 需要一條一直活著的連線 → Android 判定為背景後幾分鐘就凍結
（Doze）→ **唯一合規的長期存活方式就是帶常駐通知的前台服務**。通知是 Android 強制的。

**耗電是無法避免的代價**：螢幕關著也維持網路連線。這是所有無伺服器通訊 app 的共同宿命
（SimpleX、Session 都一樣）。

## 補進去的大致步驟

1. `react-native init` 產生標準 `android/` 專案
2. 把這四個 `.java` 放進 `android/app/src/main/java/com/<你的套件>/`（改套件名）
3. 把 `AndroidManifest.additions.xml` 的內容**合併**進 `android/app/src/main/AndroidManifest.xml`
4. 把 `build.gradle.additions` 的內容**合併**進 `android/app/build.gradle`
5. 在 `MainApplication` 的 `getPackages()` 裡 `add(new PhiServicePackage())`
6. 把 `../app/worklet.bundle.mjs` 放進 `android/app/src/main/assets/`（或照 bare-kit 文件指定的位置）

## 已知會踩的坑

- **Android 12+**：不能從背景啟動前台服務。要在 app 位於前台時（例如解鎖成功當下）呼叫 `start()`——`service.js` 就是這樣接的。
- **Android 13+**：`POST_NOTIFICATIONS` 是執行期權限，沒給的話前台通知不顯示（服務仍在跑，但使用者看不到）。`service.js` 會先 request。
- **Android 14+**：前台服務**必須**宣告 `foregroundServiceType`。這裡用 `dataSync`。
- **激進的中國廠商 ROM**（小米/華為/OPPO…）：光有前台服務仍可能斷網。要**引導使用者手動**把 app 加入「電池最佳化白名單」／「自啟動白名單」。這個沒有純程式解，一定要 UI 提示。
- **`START_STICKY` 重啟時 intent 是 null**：`onStartCommand` 已處理，但你自己改的時候要記得。

## 這個骨架解決不了的

- **CGNAT 打洞**：手機在營運商 NAT 後面，UDP 打洞成功率下降。這是架構問題，前台服務救不了。
- **app 被完全滑掉關閉後收訊息**：那要 FCM 推播，而 FCM 需要 Google 伺服器 + token，跟無帳號／無伺服器架構衝突。前台服務只能撐「背景」，撐不了「被殺」。
- **安全性**：這是未經審計的學習專案，加原生層不會讓它變安全。
