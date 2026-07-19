# 部署到全新 GitHub 仓库 — v10

> 这份给「删掉旧仓库、从零开始」用。照做，不改任何东西。

## ⭐ v10 找到了真正的根因（前面都白改了）

**症状**：apk 编译成功、能装，但真机和模拟器都【立即闪退，无任何画面】。

**根因**：`react-native-bare-kit` 是 TurboModule，**必须启用 React Native 的 New Architecture**
才能在运行时找到它的原生模块。RN 0.81 默认 `newArchEnabled=false`，所以：
- app 能编译（所以我们一直拿到 apk）
- 但一启动 `new Worklet()` 就找不到 BareKit 原生模块 → **瞬间崩溃，没有 UI**

这解释了为什么**真机和模拟器一样崩**——跟 CPU 架构完全无关，是原生模块没加载。
之前怪模拟器转译、怪 ARM/x86，都是误判。抱歉走了弯路。

**v10 的三个关键修复**（都在 workflow 里自动做）：
1. `newArchEnabled=true` —— 让 TurboModule 能工作
2. 手动在 MainApplication.kt 注册 `BareKitPackage` —— 因为 bare-kit 在纯 RN CLI 项目里
   autolinking 对 android 返回 null（官方 issue #17 确认）
3. worklet bundle 内联成字符串（之前修的，保留）

---

## 步骤

### 1. 建新仓库
GitHub → New repository → 取名 → **Private** → Create

### 2. 上传整个项目
解压后**进 phi-bare 文件夹内部**，全选内容上传到仓库根。
- ⚠️ Windows 开「显示隐藏项目」，否则 `.github` 被漏掉
- 漏了 `.github` 就网页建档：Add file → Create new file →
  文件名打 `.github/workflows/build-apk.yml` → 粘贴内容

### 3. 确认这些关键文件在仓库里
- `app/worklet-source.js`（1MB 内联 bundle，四架构）
- `app/` 其余 js（App.jsx / bridge.js / i18n.js / motion.js / protocol.js / service.js）
- `backend/` 整个文件夹
- `scripts/`（**新增，重要**）：register_barekit.py / abi_config.py / sign_config.py
- `fonts/`（两个 .ttf 衬线字体）
- `app-icons/`（图标）
- `.github/workflows/build-apk.yml`

### 4. 触发编译
Commit 后自动开始。或 Actions → Build APK → Run workflow

### 5. 等 15~40 分钟，拿 apk
Actions → 最新运行 → 绿勾 → 最底 Artifacts → 下载 `phisorilla-release-apk`
→ 解压得 .apk → 装（手机或模拟器都行，这个 apk 四架构通吃）

### 6. 红叉的话
点进红叉那步复制红字。这次 workflow 会打印 MainApplication.kt 修改前后的内容，
如果 BareKitPackage 没注册成功，log 里看得到。

---

## 装上后

这次修的是「启动即崩」。如果 v10 能开、进得了 φ 锁屏画面 = **BareKit 原生模块加载成功了**，
这是整个项目第一次真正跑起来。重点看：
1. 能不能打开、进不进得去锁屏（不再 0.5 秒闪退 = 根因修对了）
2. 字体是不是衬线体
3. 设定页能不能切三种语言

---

## 仍然的能力边界

- **真 DHT 连线从未验证**——能开 ≠ 两台手机能收发消息（CGNAT 是架构死穴）
- **前台服务这次没打包**（那个未验证的 Java 骨架先拿掉了，避免它引入新崩溃）→
  背景会被杀，等核心跑通再补
- **未经审计的学习项目**——真有保密需求用 SimpleX / Session
- **259 项测试**证明逻辑对，不是真机上一切正常
