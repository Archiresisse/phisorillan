#!/usr/bin/env python3
# 给 android/app/build.gradle 的 defaultConfig 加上 ndk.abiFilters，
# 让 apk 同时包含 arm64-v8a/armeabi-v7a(手机) + x86/x86_64(模拟器)。
# 由 .github/workflows/build-apk.yml 调用。
import re
import sys

path = sys.argv[1] if len(sys.argv) > 1 else 'app/build.gradle'
s = open(path).read()

if 'abiFilters' in s:
    print("abiFilters already present, skipping")
else:
    block = '\n        ndk {\n            abiFilters "arm64-v8a", "armeabi-v7a", "x86", "x86_64"\n        }'
    s = re.sub(r'(defaultConfig\s*\{)', lambda m: m.group(1) + block, s, count=1)
    open(path, 'w').write(s)
    print("abiFilters added: arm64-v8a, armeabi-v7a, x86, x86_64")
