package com.phisorilla;

// ──────────────────────────────────────────────────────────────────────────
// PhiServiceModule — 讓 JS 能啟動／停止前台服務。
//
// ⚠️ 骨架，從未編譯或執行過。API level、ReactPackage 註冊、權限請求時機都要真機調。
//
// JS 端用法（要在拿到通知權限後呼叫）：
//   import { NativeModules } from 'react-native'
//   NativeModules.PhiService.start()
//   NativeModules.PhiService.stop()
// ──────────────────────────────────────────────────────────────────────────

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class PhiServiceModule extends ReactContextBaseJavaModule {

  public PhiServiceModule(ReactApplicationContext ctx) {
    super(ctx);
  }

  @Override
  public String getName() {
    return "PhiService";
  }

  @ReactMethod
  public void start(Promise promise) {
    try {
      Context ctx = getReactApplicationContext();
      Intent intent = new Intent(ctx, PhiForegroundService.class);
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        ctx.startForegroundService(intent);
      } else {
        ctx.startService(intent);
      }
      promise.resolve(true);
    } catch (Exception e) {
      // Android 12+ 對「從背景啟動前台服務」有限制，可能在這裡丟例外。
      // 要在 app 位於前台時呼叫 start()。
      promise.reject("START_FAILED", e);
    }
  }

  @ReactMethod
  public void stop(Promise promise) {
    try {
      Context ctx = getReactApplicationContext();
      ctx.stopService(new Intent(ctx, PhiForegroundService.class));
      promise.resolve(true);
    } catch (Exception e) {
      promise.reject("STOP_FAILED", e);
    }
  }
}
