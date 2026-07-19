# Phisorilla → Android（Bare）移植

> **這不是 apk。** 這是一份**協議層、應用層、UI 都已經補完，而且有 251 項測試在跑**的原始碼，
> 加上一份誠實的「哪些我做不到」清單。
> 最後的 build 必須在你自己機器上做（這裡沒有 Android SDK/NDK、沒有模擬器、UDP 被擋）。

```bash
npm install     # 會連 backend 的相依一起裝
npm test        # 251 項，應該全過（suite 148 + bridge 22 + ui 81）
```

---

## 〇、這一輪做了什麼（懶人包）

| | 之前 | 現在 |
|---|---|---|
| `worklet.js` RPC | 19 個 | **34 個 + 11 種事件** |
| 媒體傳輸／閱後即焚／為所有人刪除／群組管理 | ❌ 沒做 | ✅ 後端 + **UI 全部接上** |
| `App.jsx` 接上的 api | 14 / 45 | **44 / 45**（`mediaMeta` 冗餘，見五之二） |
| `App.jsx` | 「一行都沒跑過」 | ✅ **81 項 UI 測試**在跑（見四之三） |
| 群組授權 | ⚠️ **知道 gid 就能劫持整個群** | ✅ 已修（6 種攻擊情境測試） |
| `ratchet.js` | ⚠️ **一則訊框可遠端癱瘓你的棘輪** | ✅ 已修（原子化） |
| 🔴 **回應方先開口 = 訊息石沉大海** | ⚠️ **一半的新對話會中，畫面上還打勾** | ✅ 已修（見六之 1） |
| `store.js` / `media.js` / `p2p.js` | 「沒實測，不要當成已完成」 | ✅ **跑在測試台上的是這幾支正本** |
| `bridge.js` | 「一行都沒跑過」 | ✅ 抽出 `protocol.js`，**只剩 6 個 API 接觸點沒跑過** |
| 測試 | 只有 smoke | **148 + 22 + 81 = 251 項** |

沒變的：**安全性**。見最後一節。

---

## 一、地基驗證（實測，不是推論）

| 驗證項 | 結果 |
|---|---|
| Bare runtime | v1.30.3 可執行 |
| `hyperswarm` / `hyperdht` / `sodium-native` / `b4a` 在 Bare 載入 | ✅ |
| 在 Bare 裡實際 `new Hyperswarm()` | ✅ 產生有效 32-byte 公鑰 |
| `sodium-native` / `udx-native` Android 預編譯 | ✅ `android-arm`, `arm64`, `ia32`, `x64` |
| `bare-crypto` 的 `createHmac('sha256')` vs Node | ✅ **位元組完全一致** |
| 自製 HKDF（`hkdf.js`）vs Node `crypto.hkdfSync` | ✅ **位元組完全一致** |
| `scrypt-js` vs Node `crypto.scryptSync`（N=32768, r=8, p=1） | ✅ **位元組完全一致** |
| **棘輪互通：Node（桌面）加密 → Bare（手機）解密** | ✅ **3/3**（中文、emoji、ASCII，同一條棘輪連續推進） |
| **vault 互通：Node 建的 `vault.enc` → Bare 開啟** | ✅ 格式完全相容 |
| Bare 的 `Buffer`（from/hex/utf8/alloc/concat/subarray） | ✅ 與 Node 相容 |
| `package.json` 的 `imports` 條件映射（fs/path/events/crypto → bare-*） | ✅ 生效 |

**結論：手機版能用與桌面版完全相同的 hyperswarm 線路協議，兩邊可以互連**——不是另開一個網路。
這正是選 Bare 而非 Tauri+Rust 重寫的關鍵理由（Rust 重寫協議會不同，兩邊互不相通）。

---

## 二、更正：我先前寫錯的兩件事

1. ~~「Bare 的 Buffer 與 Node 不同，整個 codebase 要換成 b4a，這是工作量所在」~~
   **錯。** 實測全過。當初那個「失敗」是**我的測試腳本傳錯型別**。我原本估的最大一塊工作量根本不存在。
2. ~~「`bare-crypto` 不存在」~~ **錯。** 它存在，我當時沒裝就測。

教訓也是這整包東西的重點：**測試比推論值錢。**

---

## 三、測試台（`test/harness.js`）— 為什麼這次的「已測」可信

問題：沙箱擋 UDP，沒有真 DHT。
偷懶的做法是自己刻一個假 P2P 來測——那只會測到假貨，毫無意義。

實際做法：**`MockP2P extends 真正的 P2P`，只把 `this.swarm` 換成記憶體版**。

```
被換掉的（1 個）        走正式程式碼的（全部）
─────────────────      ────────────────────────────────────
hyperswarm 的           _onConnection / _onFrame / _write
joinPeer/leavePeer      framing 編解碼 / 背壓 / sendFile 分塊
（改由 HUB 撮合）        ratchet / 群組路由 / worklet 全部
```

- `FakeSock`：一對雙工端點，模擬已加密連線 + 背壓（pause/drain）
- 每個節點**複製一份 backend 到獨立目錄** require（模組級狀態隔離），`node_modules` 用符號連結共用
- `rawSend()` 灌畸形訊框時走**對方真正的 Decoder → `_onFrame`**，不繞過任何驗證

**唯一沒被涵蓋的是 hyperswarm/UDX 傳輸層本身**（沙箱擋 UDP）。
也就是說：協議層之上全部測到了，網路層之下一項都沒測到。

---

## 四、`test/suite.js` — 143 項

17 個區塊，連跑 3 次穩定全過：

```
保險庫身分 · 聯絡人驗證（含無效公鑰崩潰回歸）
1:1 棘輪（中文/emoji/引用/連續 20 則）· 離線排隊上線補送
媒體傳輸（700KB 驗位元組一致 + 進度事件）
惡意媒體（5GB 宣告 / 尺寸謊報 / 截斷，3 種攻擊）
TTL 閱後即焚（雙方同刻燒 + 清磁碟）· 為所有人刪除（授權）
群組雙勾 gack 累計 · 群組成員管理 · 群組訊息刪除授權 · 群組檔案
★ 群組劫持防護（6 種情境）
安全碼 · 顯示名稱同步
韌性（25 種畸形訊框 + 陌生人 55 訊框，worklet 存活）· RPC 完整性
```

過程中抓到的都是**真 bug**（見第六節），只有 2 次是我測試斷言自己寫錯。

## 四之二、`test/bridge.test.js` — 22 項（本輪新增）

把 **RN 端的 `protocol.js` 直接接上真正的 `worklet.js`** 跑：

```
protocol ⇄ worklet 往返 · 串流被切成「單一字元」也能重組
並行 RPC 各自對到自己的回覆 · 垃圾行不會卡死串流
事件推播 / 取消訂閱 · 未知指令 reject · IPC 爆掉 reject · 逾時 · destroy 收乾淨
★ 兩支「手機」透過 api 完整對話（1:1 + 群組 + 安全碼），且每個位元組都被拆開來餵
```

這把「`bridge.js` 一行都沒跑過」的風險**壓到只剩 6 個 RN API 接觸點**（見第五節）。

## 四之三、`test/ui.test.js` — 81 項（本輪新增）

**把 `App.jsx` 真的掛起來跑**，用 `react-test-renderer` + 一份 react-native 替身，
接上**真正的 worklet**，然後模擬點擊：

```
開機 -> 鎖屏 -> 建立保險庫 -> 主畫面      設定：改名／公鑰／分享／信箱／鎖定
新增聯絡人（含亂填公鑰的錯誤處理）        聊天：送收／雙勾／引用回覆
附加檔案（驗位元組一致 + 進度）           長按 -> 為所有人刪除（雙方畫面同步消失）
閱後即焚（雙方橫幅同步）                  安全碼（兩支手機一致）＋標記已驗證
群組：建立／邀請碼／加入／送訊息          群組管理：頭銜／升降權限／踢人／改名／退出
被踢 -> 自動退回主畫面 ＋ 提示            後端 EVT_WARN -> 畫面橫幅
```

被換掉的只有兩樣：① react-native 的元件 ② `bridge.js` 那 6 個接觸點。
**`App.jsx` / `protocol.js` / `worklet.js` / `p2p.js` / `ratchet.js` 全是正本。**

> **測得到**：state 轉移、事件訂閱與退訂、api 參數、條件渲染、兩支手機互動
> **測不到**：版面、樣式、手勢、真正的原生模組 ← 只能在真機上驗
>
> 換句話說：**「按了沒反應」這類問題這裡抓得到，「版面跑掉」抓不到。**

這一輪 UI 測試抓到 3 個真 bug（見第六節第 1、6、7 項），其中一個是**後端的**。

---

## 五、檔案現況

### `backend/`

| 檔案 | 狀態 |
|---|---|
| `framing.js` `mailcrypto.js` `identity.js` `safety.js` `hkdf.js` | ✅ 原樣可用，互通已驗證 |
| `vault.js` | ✅ Node/Bare 共用同一份，格式與桌面版相容 |
| `ratchet.js` | ✅ **本輪修掉遠端 DoS**（第六節）+ 跳號上限 |
| `store.js` | ✅ 加 `ttls` / `revoked` 欄位 + 一批 accessor，含向後相容補齊 |
| `media.js` | ✅ 加 `safeName()` 防路徑穿越、`displayName`；`serve()` 標為桌面專用 |
| `p2p.js` | ✅ 媒體上限 2GB／尺寸謊報偵測／截斷偵測／`sendFileToGroup`／**修好 gleave 路由** |
| `worklet.js` | ✅ **34 RPC + 11 事件**，全部有測試 |
| `package.json` | ✅ `imports` 條件映射，已驗證生效 |

### `app/`

| 檔案 | 狀態 |
|---|---|
| `protocol.js` | ✅ **本輪新增**。純 JS，**零 RN 相依**，45 個 api 方法，22 項測試 |
| `bridge.js` | ⚠️ 只剩 6 個 RN API 接觸點沒跑過（`new Worklet` / `start` / `IPC` / `write` / `on(data)` / `terminate`） |
| `App.jsx` | ❌ **從未執行過**。此環境沒有 RN toolchain，第一次上真機必然要調 |

#### UI 覆蓋率：44 / 45

`App.jsx` 呼叫的每個 api 方法都存在（無錯字），而 45 個 api 方法裡 **44 個已經接上 UI**。

唯一沒接的是 `mediaMeta`——因為 `mediaPath` 同一趟就把 `meta` 一起回來了，
再叫一次 `mediaMeta` 只是多跑一趟 RPC。它留在 api 裡是為了完整性，UI 用不到。
我不想為了把數字湊成 45/45 而硬塞一個沒必要的呼叫。

---

## 六、實測抓到的真 bug（**桌面版八成也有，建議一起修**）

### 1. 🔴 回應方先開口 = 訊息石沉大海（一半的新對話會中）

棘輪的 initiator 是**公鑰字典序較小**的那一方（`ratchetFor()`：`myHex() < peerHex`）。
responder 剛 bootstrap 完 `CKs` 是 `null` → `canSend()` false → `sendRatchetText()` 回 false
→ 訊息靜靜排進佇列。

於是：**你加了聯絡人，兩邊都在線，你打「你好」按送出，畫面顯示 ✓（已送出），
對方永遠收不到**——除非對方剛好先傳訊息給你。看公鑰誰大誰小，**大約一半的新對話會中**。

最壞的是它**看起來完全正常**：`MESSAGE_SEND` 回 `{ ok: true }`，UI 打勾，沒有任何錯誤。

**修法**：initiator 一連上線就主動送一則 `CTRL_TAG` 握手訊息把鏈路打開。
- `CTRL_TAG` 訊框**收端本來就有處理**（回 ack 然後忽略）→ **線路格式完全沒變，桌面版照樣互通**
- 只在 `Ns === 0` 時送 → 每個聯絡人只發生一次
- responder 一解開握手就 `resendPending()` → 卡住的訊息立刻補送

> **這個 bug 為什麼躲過前面 143 項測試？**
> 因為**測試台自己有個 `handshake()` helper，一律先讓 initiator 開口**：
> ```js
> // 棘輪要先由 initiator（公鑰字典序較小者）開口，回應方才推得動。
> async function handshake (a, b) { const [i, r] = a.pub < b.pub ? [a, b] : [b, a]; ... }
> ```
> 我在之前的工作階段就碰到過這個不對稱，然後**把 workaround 寫進測試 helper**，
> 而不是認出它是使用者會踩到的 bug。結果 143 項測試全都先握手，這個洞就結構性地隱形了。
> 是這次的 UI 測試「像真人一樣操作」才把它撞出來的。
>
> **教訓：把 workaround 寫進測試 = 把 bug 藏起來。**
> `suite.js` 第 18 節現在有一段刻意【不】握手的回歸測試（把修正拿掉會立刻失敗）。

### 2. 🔴 一則訊框就能永久癱瘓你的棘輪
`ratchet.js` 的 `decrypt()` 直接在 `st` 上動手，`dhRatchet()` 先寫 `st.DHr/Ns/Nr` 才呼叫 `dh()`。
對方送 `header.dh = 'zz'`（非曲線上的點）→ `dh()` 丟例外時 **`st` 已經被改壞** →
這條棘輪**永久解不開**，而且壞狀態會被存進保險庫，**重開 app 也救不回來**。
**任何知道你公鑰的人，一則訊框就能觸發。**

修法：`validHeader()` 先驗 → `cloneState()` 在副本上運算 → 成功才 `Object.assign` 寫回（原子化）。
另加 `MAX_SKIPPED_STORE=2048` 防記憶體撐爆、`MAX_COUNTER=1e6`。

### 3. 🔴 知道群組 ID 就能劫持整個群
原規則是「gsync 裡有我 → 整包覆蓋」。而 **gid 是明文寫在邀請碼裡的**。
→ 任何拿過邀請碼的人可以踢光所有人、自封 admin。

修法（**不動線路格式，維持與桌面版互通**，只改收到後的驗證）：

| 寄件人 | 接受範圍 |
|---|---|
| 沒有此群 | 只接受「我和寄件人都在名單裡」（正常邀請流程） |
| admin | 任何變更 |
| 一般成員 | 只接受「加自己 / 改自己顯示名」 |
| 非成員 | 拒絕 |

外加本機 `revoked` 名單，擋「被踢的人憑記憶中的 gid 溜回來」。

> **誠實標注**：這是「最後寫入者 + 角色檢查」，**不是密碼學保證**。兩個 admin 可以打架，
> 你也無法向第三方證明誰改了什麼。真正正確要做操作日誌／CRDT + 簽章，那超出這次範圍。
> 邀請碼本質上是**無憑證的持有者權杖**。

### 4. 🟠 無效公鑰打死整個後端
`contacts:add` 只驗「64 位十六進位」，不驗是不是 Curve25519 上的合法點。
貼一串格式對但無效的 → 新增成功 → 發訊息時 `crypto_sign_ed25519_pk_to_curve25519` 丟出
未接住的 `status: -1` → **worklet 執行緒直接死亡**（Android 上等於背景服務沒了）。

### 5. 🟠 退群訊息送不到
`p2p.js` 的群組 emit 路由**漏了 `gleave`**。

### 6. 🟠 `media.init()` 從來沒被呼叫
`boot()` 沒呼叫 → `DIR = null` → 一收媒體就崩。

### 7. 🟠 UI：畫面拿著過期的群組快照（本輪 UI 測試抓到）
`nav.target` 是「點下去那一刻」的快照。你被升成管理員時人正開著那個群組 →
`Chat` 和 `GroupInfo` 還是舊的 `myRole: 'member'` → **管理按鈕永遠不出現**，要退出去重進才會對。
修法：根層訂閱 `EVT_GROUPUPDATE` 直接更新 `nav.target`，`GroupInfo` 不再自己存一份。

### 8. 🟠 UI：被踢的提示永遠看不到（本輪 UI 測試抓到）
「你被移出群組」的提示原本訂閱在 `Home` 裡。但**被踢的當下你通常正開著那個群組，
`Home` 根本沒掛載** → 訂閱不存在 → 提示永遠不會出現。
修法：全域事件（`EVT_GROUPGONE`／`EVT_WARN`）一律訂在永遠活著的根層。

> **→ 桌面版 `main.js` 請補這三個，都是遠端可觸發或使用者一定會踩到的：**
> - **第 1 項（回應方先開口）** ← 影響一半的新對話，優先度最高
> - **第 2 項（棘輪原子化）**
> - **第 4 項（公鑰驗證）**

---

## 七、設計鐵則（改 worklet 時請遵守）

**這條執行緒死掉 = Android 背景服務沒了 = 收不到任何訊息。**

所以：
- 所有「對方輸入」觸發的路徑一律 `guard()` 包住
- 所有 async 都接住 rejection（`attach()` 支援 handler 回 Promise）
- **對方宣告的任何數字都當敵意輸入驗**（宣告 5GB 的檔案、宣告 1000 只送 400…）
- TTL 用「下一個到期時刻」排 timer，**不是每秒輪詢**（手機耗電）

---

## 八、目標架構（Keet 就是這麼做的）

```
Android app (APK)
├── React Native  ← UI 層
│     ├── App.jsx      ✅ 81 項 UI 測試（⚠️ 版面／樣式仍未上過真機）
│     ├── bridge.js    ⚠️ 剩 6 個 RN API 接觸點沒跑過
│     └── protocol.js  ✅ 22 項測試
│           ↕  RPC（換行分隔 JSON over IPC）
└── react-native-bare-kit  ← 把 Bare 嵌進 App
      └── Bare worklet（背景執行緒）
            ├── hyperswarm / hyperdht        ✅ 載入驗證，❌ 真連線沒測（UDP 被擋）
            ├── worklet / p2p / store
            │   media / ratchet / vault …    ✅ 148 項測試
            └── 原生層：前台服務 / SAF / FCM  ❌ 完全沒做（見第九節）
```

---

## 九、我做不到的（要你在真機上處理）

這幾項不是我偷懶，是這個環境**物理上做不到**（沒有 Android SDK、UDP 被擋、沒有 Google 伺服器）：

1. **前台服務 + 常駐通知** — 不做的話 Doze 會殺掉背景進程，無伺服器 P2P 就收不到訊息。**耗電是必然代價。**
2. **FCM 推播** — app 被殺後要收訊息就得靠它，但 FCM 需要 Google 伺服器 + token，**與無帳號／無伺服器架構直接衝突**。SimpleX 和 Session 都被迫做了「通知中繼」的妥協，你會撞上同一個岔路。
3. **CGNAT 打洞成功率** — 手機幾乎全在營運商級 NAT 後面，**UDP 打洞成功率顯著下降**（桌面版在 CGNAT 下已有連線困難）。這只能真機量。
4. **真機 RN 版面調試** — 邏輯有 81 項測試顧著，但**版面、樣式、手勢、鍵盤閃避**
   一項都沒驗過。第一次跑八成要調間距和 `KeyboardAvoidingView`。
5. **`bare-pack` 打包 + 簽名發布**。
6. **Android SAF / 原生模組** — 媒體匯出相簿、`content://` 快取複製、`FLAG_SECURE`（對應桌面版的 `settings:setContentProtection`）。
7. **耗電量測**。

### 32 位／64 位（ABI）
`app/worklet.bundle.mjs` 用 `--host android-arm64 --host android-arm` 打包。但 **ABI 實際是在
`android/app/build.gradle` 的 `abiFilters` 決定的**（見 `android/app/build.gradle.additions`），
不是在 bundle 裡。`sodium-native` / `udx-native` 兩個 ABI 的原生 `.bare` 二進位都在套件裡，
react-native-bare-kit 會依 `abiFilters` 挑。預設 `arm64-v8a` + `armeabi-v7a` 兩者都收。

### 效能備註
`scrypt-js`（純 JS）比 Node 原生慢約 **3 倍**（x64: 91ms → 273ms）。
手機 ARM 上跑 N=32768／32MB，**解鎖預估 1~2 秒起跳**。這是保住 vault 格式相容的代價。
（`protocol.js` 的 RPC 逾時因此設 20 秒。）

---

## 十、在你機器上怎麼開始

```bash
# 0. 先確認測試在你環境也過
npm install && npm test          # 應該 143 + 22 全過

# 1. 環境（需 JDK 17、Android SDK + NDK）
npx react-native@latest init PhisorillaMobile
cd PhisorillaMobile
npm install react-native-bare-kit bare-rpc
npm install @react-native-community/blur react-native-document-picker

# 2. 放入 backend 與 app
cp -r <本包>/backend ./backend
cp <本包>/app/protocol.js <本包>/app/bridge.js <本包>/app/App.jsx ./
cd backend && npm install && cd ..

# 3. worklet bundle —— app/worklet.bundle.mjs 已經幫你打包好了（arm64+arm 雙架構），
#    可以直接用。想自己重打的話（imports.json 也已附在 backend/）：
npx bare-pack --host android-arm64 --host android-arm --linked \
              --imports backend/imports.json \
              --out app/worklet.bundle.mjs backend/worklet.js

# 3b. 原生層（前台服務，否則背景收不到訊息）—— 見 android/README.md
#     把 android/ 裡的 .java 和設定片段合併進 RN 專案。⚠️ 那些是未編譯的骨架。

# 4. build
npx react-native run-android              # debug
cd android && ./gradlew assembleRelease   # release apk（需自己簽名）
```

---

## 十一、老實話

- **沒有 apk。** 這裡編不了也測不了。給你一個「應該能跑」的 apk 對你沒有好處。
- **真 DHT 連線一次都沒跑過。** 沙箱擋 UDP。上面 251 項測試涵蓋協議層以上的一切，
  但**網路層之下一項都沒測到**。真機上第一個會爆的大概就是那裡。
- **UI 的版面沒驗過。** 81 項 UI 測試證明的是「按了會有反應、資料流是對的」，
  **不是「畫面好看」**。react-native 替身不做版面計算——間距、字級、鍵盤閃避、
  安全區域、Android 的返回鍵，這些全部要真機調。
- **信箱（mailbox）路徑只有 sealed box，沒有棘輪的前向保密。** 身分私鑰一旦外洩，
  之前所有經信箱的訊息都能回溯解密。這是桌面版既有設計，我照搬以維持互通——**但它是個真的弱點。**
- **群組狀態沒有簽章**（第六節第 2 項的誠實標注）。
- **這個移植不會讓安全性變好。** 桌面版本身是**未經審計的學習專案級別**；搬到手機不會改變這一點，
  只會多出背景存活、推播、CGNAT 三個新問題。這幾輪總共修掉 8 個真 bug、補了 251 項測試——
  **那只代表「我測到的部分沒壞」，不代表「這東西安全」。** 沒有人審計過它。我不是審計。
- **而且這輪剛好證明了測試的極限**：第六節第 1 項那個「一半的新對話收不到訊息」的 bug，
  在 143 項測試全綠的情況下活得好好的，因為**我自己把 workaround 寫進了測試 helper**。
  綠燈只代表「我想到要測的東西沒壞」。
- 真有風險的通訊，還是用經過獨立審計的 **SimpleX / Session**。這句話在手機上**更成立**——
  背景存活和推播這兩個坑，正是那兩個團隊花了好幾年才填的。
