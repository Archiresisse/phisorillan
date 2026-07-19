package com.phisorilla;

// ──────────────────────────────────────────────────────────────────────────
// PhiForegroundService — 讓背景執行緒在 Doze 底下活著。
//
// ⚠️ 這是【骨架】，我（AI）沒有 Android 環境，這個檔案【從未編譯過、從未在真機跑過】。
//    它是「有依據的草稿」，用來省掉你從零翻文件的時間，不是可以直接用的成品。
//    第一次編八成要調 import、API level、以及 react-native-bare-kit 真正的 Worklet 類別名。
//
// 為什麼需要它：
//   無伺服器 P2P 要收訊息，就得有一條一直活著的連線。Android 一旦把 app 判定為
//   「背景」，幾分鐘內就會凍結它（Doze）。唯一合規的長期存活方式，就是跑一個
//   帶常駐通知的前台服務——通知是 Android 強制的，讓使用者知道有東西在背景跑。
//
// 這對應桌面版的「關掉視窗仍在系統匣運行」，但 Android 要求更嚴：必須有可見通知，
//   而且耗電是無法避免的代價（螢幕關著也維持著網路連線）。
// ──────────────────────────────────────────────────────────────────────────

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.IBinder;
import android.os.PowerManager;
import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;

public class PhiForegroundService extends Service {

  public static final String CHANNEL_ID = "phisorilla_running";
  public static final int NOTIF_ID = 1001;
  public static final String ACTION_STOP = "com.phisorilla.STOP";

  @Nullable private PowerManager.WakeLock wakeLock;

  @Override
  public void onCreate() {
    super.onCreate();
    createChannel();

    // 部分機型（小米、華為…）光有前台服務仍會被激進地凍結網路，
    // 額外抓一個 partial wake lock 讓 CPU 在收到封包時能醒來。
    // 這會更耗電，但無伺服器 P2P 沒有別的辦法。
    PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
    if (pm != null) {
      wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "phisorilla:net");
      wakeLock.setReferenceCounted(false);
    }
  }

  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    if (intent != null && ACTION_STOP.equals(intent.getAction())) {
      stopSelf();
      return START_NOT_STICKY;
    }

    startForeground(NOTIF_ID, buildNotification("運行中", "端對端加密 · 正在接收訊息"));
    if (wakeLock != null && !wakeLock.isHeld()) {
      wakeLock.acquire();
    }

    // ⚠️ 這裡要啟動 Bare worklet。實際的類別／方法名要照 react-native-bare-kit
    //    你裝到的版本的 API 對——下面是【示意】，不保證方法簽名正確：
    //
    //    Worklet worklet = new Worklet();
    //    worklet.start("/app.bundle", loadBundleFromAssets(), new String[]{ getFilesDir().getPath() });
    //    IPC ipc = worklet.IPC();   // 再把 ipc 橋接到 RN（見 bridge.js 那 6 個接觸點）
    //
    // 由於 worklet 已經在 RN 那層透過 bridge.js 啟動了，這個服務比較可能的角色是
    // 「持有前台狀態 + wake lock」，讓那條已存在的 worklet 不被殺，而不是自己再開一條。
    // 這要看你的架構怎麼接——兩種做法我都沒法在這裡驗。

    // START_STICKY：被系統殺掉後盡量重啟（但 intent 會是 null，要處理）
    return START_STICKY;
  }

  @Override
  public void onDestroy() {
    if (wakeLock != null && wakeLock.isHeld()) {
      wakeLock.release();
    }
    super.onDestroy();
  }

  @Nullable
  @Override
  public IBinder onBind(Intent intent) {
    return null; // 這是 started service，不是 bound service
  }

  private Notification buildNotification(String title, String text) {
    // 點通知回到 app
    Intent openIntent = new Intent(this, getMainActivityClass());
    PendingIntent openPending = PendingIntent.getActivity(
        this, 0, openIntent,
        PendingIntent.FLAG_UPDATE_CURRENT |
            (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0));

    // 「停止」動作
    Intent stopIntent = new Intent(this, PhiForegroundService.class).setAction(ACTION_STOP);
    PendingIntent stopPending = PendingIntent.getService(
        this, 1, stopIntent,
        PendingIntent.FLAG_UPDATE_CURRENT |
            (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0));

    return new NotificationCompat.Builder(this, CHANNEL_ID)
        .setContentTitle("Phisorilla " + title)
        .setContentText(text)
        .setSmallIcon(android.R.drawable.ic_dialog_email) // TODO: 換成自己的圖示
        .setOngoing(true)                                  // 不能被滑掉
        .setPriority(NotificationCompat.PRIORITY_LOW)      // 不要一直叮
        .setContentIntent(openPending)
        .addAction(android.R.drawable.ic_menu_close_clear_cancel, "停止", stopPending)
        .setCategory(NotificationCompat.CATEGORY_SERVICE)
        .build();
  }

  private void createChannel() {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      NotificationChannel channel = new NotificationChannel(
          CHANNEL_ID, "Phisorilla 背景服務",
          NotificationManager.IMPORTANCE_LOW); // LOW：沒有聲音、不強制彈出
      channel.setDescription("維持連線以接收訊息。關閉會導致 app 在背景時收不到訊息。");
      channel.setShowBadge(false);
      NotificationManager nm = getSystemService(NotificationManager.class);
      if (nm != null) nm.createNotificationChannel(channel);
    }
  }

  // RN 的主 Activity 類別。標準 RN 專案是 MainActivity，
  // 若你改過套件名要對應調整。用反射避免這個骨架直接相依到還不存在的類別。
  private Class<?> getMainActivityClass() {
    try {
      return Class.forName("com.phisorilla.MainActivity");
    } catch (ClassNotFoundException e) {
      // 找不到就退回自己，至少不會崩（實際專案裡一定要指對）
      return PhiForegroundService.class;
    }
  }

  // 從 assets 讀 worklet bundle 的示意（若這個服務需要自己啟 worklet 才會用到）
  // private String loadBundleFromAssets() throws Exception {
  //   try (java.io.InputStream is = getAssets().open("worklet.bundle.mjs")) {
  //     byte[] buf = new byte[is.available()];
  //     is.read(buf);
  //     return new String(buf, java.nio.charset.StandardCharsets.UTF_8);
  //   }
  // }
}
