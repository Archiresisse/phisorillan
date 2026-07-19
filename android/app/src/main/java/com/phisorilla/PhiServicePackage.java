package com.phisorilla;

// 把 PhiServiceModule 註冊進 RN。要在 MainApplication 的 getPackages() 裡 add 這個。
// ⚠️ 骨架，未編譯。

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PhiServicePackage implements ReactPackage {
  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext ctx) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new PhiServiceModule(ctx));
    return modules;
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext ctx) {
    return Collections.emptyList();
  }
}
