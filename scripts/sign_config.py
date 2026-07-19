#!/usr/bin/env python3
# 给 android/app/build.gradle 加 release 签名配置。
# 提取成独立文件，避免在 workflow YAML 里嵌套 heredoc 导致语法错误。
# 由 .github/workflows/build-apk.yml 调用。
import re
import sys

path = sys.argv[1] if len(sys.argv) > 1 else 'app/build.gradle'
s = open(path).read()

# 1) 在 signingConfigs { ... } 里加 release 块
block = ("\n        release {\n"
         "            storeFile file('phi-release.keystore')\n"
         "            storePassword 'phisorilla'\n"
         "            keyAlias 'phi'\n"
         "            keyPassword 'phisorilla'\n"
         "        }")
if "storeFile file('phi-release.keystore')" not in s:
    s = re.sub(r'(signingConfigs\s*\{)', lambda m: m.group(1) + block, s, count=1)

# 2) 让 release buildType 用 release 签名（默认是 debug）
s = re.sub(r'(release\s*\{[^}]*?signingConfig\s+signingConfigs\.)debug',
           r'\1release', s, count=1, flags=re.DOTALL)

open(path, 'w').write(s)
print("signing configured")
