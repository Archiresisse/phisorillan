#!/usr/bin/env python3
# ──────────────────────────────────────────────────────────────────────────
# 手动把 BareKitPackage 注册进 MainApplication.kt。
#
# 为什么需要：react-native-bare-kit 是 TurboModule，在纯 React Native CLI 项目里
# autolinking 经常对 android 返回 null（见 issue #17），导致 BareKit 原生模块
# 运行时找不到，启动即崩。手动注册是官方 issue 里确认可行的解法。
#
# 由 .github/workflows/build-apk.yml 调用。传入 MainApplication.kt 路径。
# ──────────────────────────────────────────────────────────────────────────
import re
import sys

path = sys.argv[1]
s = open(path).read()

changed = False

# 1) 加 import（如果还没有）
if 'to.holepunch.bare.kit.react.BareKitPackage' not in s:
    # 在第一个 import 之后插入
    m = re.search(r'^(import .+\n)', s, flags=re.MULTILINE)
    if m:
        s = s[:m.end()] + 'import to.holepunch.bare.kit.react.BareKitPackage\n' + s[m.end():]
        changed = True
    else:
        print("WARN: no import line found in MainApplication.kt")

# 2) 在 getPackages() 里注册。
# RN 0.81 的 Kotlin 模板长这样：
#   override fun getPackages(): List<ReactPackage> =
#       PackageList(this).packages.apply {
#         // Packages that cannot be autolinked yet can be added manually here, for example:
#         // add(MyReactNativePackage())
#       }
# 我们在 apply { } 块里加 add(BareKitPackage())
if 'BareKitPackage()' not in s:
    # 找 PackageList(this).packages.apply {  然后在紧接着的 { 后插入
    m = re.search(r'(PackageList\(this\)\.packages\.apply\s*\{)', s)
    if m:
        s = s[:m.end()] + '\n              add(BareKitPackage())' + s[m.end():]
        changed = True
    else:
        # 备用：有些模板是 val packages = PackageList(this).packages 然后 return packages
        m2 = re.search(r'(val packages\s*=\s*PackageList\(this\)\.packages)', s)
        if m2:
            s = s[:m2.end()] + '\n            packages.add(BareKitPackage())' + s[m2.end():]
            changed = True
        else:
            print("WARN: could not find getPackages() apply block — BareKitPackage NOT registered")
            print("---- MainApplication.kt getPackages area ----")
            gm = re.search(r'getPackages.*?\n(.*\n){0,15}', s)
            if gm:
                print(gm.group(0))

open(path, 'w').write(s)
print("MainApplication.kt patched" if changed else "MainApplication.kt already had BareKitPackage")
