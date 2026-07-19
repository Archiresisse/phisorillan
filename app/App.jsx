// ──────────────────────────────────────────────────────────────────────────
// App.jsx — Phisorilla 手機版 UI
//
// ⚠️ 版面／樣式從未在真機上跑過（此環境沒有 RN toolchain）。
//    但【邏輯】有測：test/ui.test.js 用 react-test-renderer 把這個檔案掛起來，
//    接上真正的 worklet，模擬點擊跑過所有流程。所以壞掉的話比較可能是
//    版面跑掉，而不是「按了沒反應」。
//
// 【平台限制，必讀】
// React Native 沒有 CSS，也沒有 backdrop-filter。桌面版那套液態玻璃
//   · 模糊     -> @react-native-community/blur。iOS 系統級；Android 品質與效能都差
//                 -> 此處 Android 用半透明色塊，不用真模糊
//   · 虹彩描邊 -> 需 react-native-svg 重畫（此處單色邊框）
//   · 角度動畫 -> 需 react-native-reanimated
//
// 【相依】
//   react-native-document-picker  ← 附加檔案用。沒裝的話附加鈕會停用，其餘功能不受影響。
//   @react-native-community/blur  ← iOS 模糊
// ──────────────────────────────────────────────────────────────────────────

import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import {
  View, Text, TextInput, Pressable, FlatList, ScrollView, StyleSheet,
  Platform, ActivityIndicator, KeyboardAvoidingView, ImageBackground,
  Image, Modal, Alert, Share, Animated
} from 'react-native'
import { BlurView } from '@react-native-community/blur'
import { start, api } from './bridge'
import { startService } from './service'   // 前台服務（有原生層才生效，否則 no-op）
import {
  Bouncy, Enter, ListItemEnter, ScreenTransition, SheetRise, Pulse, Fade, GLOW
} from './motion'
import { t, getLang, setLang, onLangChange, availableLangs, currentFont } from './i18n'

// ── 全局衬线字体 ──────────────────────────────────────────────────────────
// RN 没有全局 CSS。让所有 Text/TextInput 默认用 Noto Serif，标准做法是改默认 props。
// 字体随语言变（繁中/英→TC，简中→SC），所以 applyFont() 在启动和切换语言时都调。
// 等宽字体（公钥/安全码）不套衬线，保持 monospace（那些地方显式指定了 fontFamily）。
function applyGlobalFont () {
  const fam = currentFont()
  for (const Comp of [Text, TextInput]) {
    // 测试替身里 Text/TextInput 是字符串（宿主节点名），设不了 defaultProps。
    // 真机上它们是组件对象，才套字体。这个 guard 让测试环境安全略过。
    if (!Comp || typeof Comp === 'string') continue
    Comp.defaultProps = Comp.defaultProps || {}
    const prev = Comp.defaultProps.style
    Comp.defaultProps.style = [prev, { fontFamily: fam }].filter(Boolean)
  }
}

// 選檔器是選配：沒裝就把附加鈕停用，不要整個 app 開不起來
let DocumentPicker = null
try { DocumentPicker = require('react-native-document-picker').default } catch (e) { DocumentPicker = null }

/* ── 設計 token（夜櫻藍紫）─────────────────────────────────────────────── */
const T = {
  blue: '#9db8f0', rose: '#e6a9c7', teal: '#74dcc9', gold: '#e8c98a',
  strong: '#eef2fb', text: '#dbe3f4', muted: '#9fb0d0',
  // 玻璃在 Android 拉垮 → 改用「不透明深色卡片 + 彩色辉光阴影」堆层次
  panel: 'rgba(20,30,58,0.94)', card: 'rgba(24,34,64,0.97)', deep: 'rgba(12,18,38,0.98)',
  line: 'rgba(255,255,255,0.08)', lineStrong: 'rgba(157,184,240,0.22)',
  bubbleIn: 'rgba(32,46,80,0.98)', danger: '#e5707f'
}

// 卡片容器：不透明深色 + 蓝紫辉光。取代原来的半透明玻璃。
const Card = ({ style, children, tint = 'soft', ...p }) => (
  <View style={[{ backgroundColor: T.card }, GLOW[tint]({ radius: 20, opacity: 0.5, elevation: 10 }), style]} {...p}>
    {children}
  </View>
)
// 兼容旧代码里 Glass 名字（现在是不透明面板，不再模糊）
const Glass = ({ style, children }) => (
  <View style={[{ backgroundColor: T.panel }, style]}>{children}</View>
)

/* ── 小工具 ───────────────────────────────────────────────────────────── */
// TTL 选项用 key，label 在渲染时用 t() 取（这样切语言会跟着变）
const TTL_OPTS = [
  { s: 0, k: 'ttlOff' }, { s: 30, k: 'ttl30s' }, { s: 300, k: 'ttl5m' },
  { s: 3600, k: 'ttl1h' }, { s: 86400, k: 'ttl1d' }, { s: 604800, k: 'ttl7d' }
]
const ttlLabel = (s) => {
  const o = TTL_OPTS.find(o => o.s === s)
  return o ? t(o.k) : t('ttlSeconds', { n: s })
}
const fmtSize = (n) => {
  if (!n && n !== 0) return ''
  if (n < 1024) return n + ' B'
  if (n < 1048576) return (n / 1024).toFixed(0) + ' KB'
  if (n < 1073741824) return (n / 1048576).toFixed(1) + ' MB'
  return (n / 1073741824).toFixed(2) + ' GB'
}
const shortKey = (k) => (k ? k.slice(0, 8) + '…' + k.slice(-4) : '')
const nameOf = (c) => c.name || c.remoteName || shortKey(c.publicKey)

function Btn ({ onPress, children, kind = 'primary', disabled, testID, style }) {
  const st = kind === 'danger' ? s.dangerBtn : kind === 'ghost' ? s.ghostBtn : s.primaryBtn
  const tx = kind === 'danger' ? s.dangerTxt : kind === 'ghost' ? s.ghostTxt : s.primaryTxt
  const gl = kind === 'danger' ? GLOW.danger({ radius: 14, opacity: 0.5, elevation: 6 })
    : kind === 'ghost' ? null
    : GLOW.blue({ radius: 16, opacity: 0.55, elevation: 8 })
  return (
    <Bouncy testID={testID} onPress={onPress} disabled={disabled}
            style={[st, gl, disabled && s.disabled, style]}>
      <Text style={tx}>{children}</Text>
    </Bouncy>
  )
}

function Field ({ label, ...p }) {
  return (
    <View style={s.fieldWrap}>
      {label ? <Text style={s.label}>{label}</Text> : null}
      <TextInput style={s.input} placeholderTextColor={T.muted} {...p} />
    </View>
  )
}

// 底部彈出的面板。所有次要流程都走這個，省得再帶一套導航庫。
// 用 SheetRise 做弹性滑入（比 Modal 自带 slide 更有回弹感），顶部辉光。
function Sheet ({ visible, onClose, title, children, testID }) {
  return (
    <Modal visible={!!visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={s.sheetBack}>
        <Pressable style={s.sheetTapOut} onPress={onClose} testID={(testID || 'sheet') + '-dismiss'} />
        <SheetRise style={[s.sheet, GLOW.blue({ radius: 28, opacity: 0.4, elevation: 24, y: -4 })]} testID={testID}>
          <View testID={testID}>
            <View style={s.sheetGrip} />
            {title ? <Text style={s.sheetTitle}>{title}</Text> : null}
            {children}
          </View>
        </SheetRise>
      </View>
    </Modal>
  )
}

/* ── 警告橫幅（EVT_WARN）──────────────────────────────────────────────── */
function Toast ({ msg, onHide }) {
  useEffect(() => {
    if (!msg) return
    const t = setTimeout(onHide, 4000)
    return () => clearTimeout(t)
  }, [msg, onHide])
  if (!msg) return null
  // 从底部弹性滑入 + 危险色辉光
  return (
    <Enter from={30} style={s.toastWrap}>
      <View style={[s.toast, GLOW.danger({ radius: 20, opacity: 0.55, elevation: 12 })]} testID="toast">
        <Text style={s.toastTxt} numberOfLines={3}>{msg}</Text>
      </View>
    </Enter>
  )
}

/* ── 鎖屏 ─────────────────────────────────────────────────────────────── */
function Lock ({ exists, onDone }) {
  const [pw, setPw] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')

  const go = async () => {
    if (pw.length < 6) return setErr(t('lockTooShort'))
    setBusy(true); setErr('')
    try {
      const r = exists ? await api.unlock(pw) : await api.createVault(pw)
      if (r.ok) onDone(r.publicKey); else setErr(r.error || t('lockFailed'))
    } catch (e) { setErr(e.message) }
    setBusy(false)
  }

  return (
    <View style={s.lockWrap}>
      <Enter kind="bouncy" from={20}
             style={[s.lockCard, GLOW.blue({ radius: 34, opacity: 0.45, elevation: 20, y: 10 })]}>
        <Pulse><Text style={s.mark}>φ</Text></Pulse>
        <Text style={s.brand}>Phisorilla</Text>
        <Text style={s.sub}>{exists ? t('lockUnlockHint') : t('lockCreateHint')}</Text>
        <TextInput
          testID="lock-input"
          style={s.input} value={pw} onChangeText={setPw} secureTextEntry
          placeholder={t("lockPlaceholder")} placeholderTextColor={T.muted} onSubmitEditing={go}
        />
        {err ? <Text style={s.err} testID="lock-error">{err}</Text> : null}
        <Bouncy testID="lock-submit" onPress={go} disabled={busy}
                style={[s.primaryBtn, GLOW.blue({ radius: 16, opacity: 0.6, elevation: 8 })]}>
          {busy ? <ActivityIndicator color={T.strong} />
                : <Text style={s.primaryTxt}>{exists ? t('lockUnlock') : t('lockCreate')}</Text>}
        </Bouncy>
        <Text style={s.hint}>{t('lockCryptoNote')}</Text>
      </Enter>
    </View>
  )
}

/* ── 媒體氣泡 ─────────────────────────────────────────────────────────── */
function MediaBody ({ m, prog }) {
  const md = m.media || {}
  const [uri, setUri] = useState(null)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let alive = true
    if (!md.id) return
    api.mediaPath(md.id)
      .then(r => { if (!alive) return; if (r.ok) setUri(r.uri); else setGone(true) })
      .catch(() => { if (alive) setGone(true) })
    return () => { alive = false }
  }, [md.id, m.state])

  const pct = prog && prog.size ? Math.floor((prog.sent / prog.size) * 100) : null
  const isImg = md.mkind === 'image'

  const open = () => {
    if (!uri) return
    // 存到相簿／下載匣需要 Android SAF（原生層，見 README 第九節）。
    // 這裡只能把路徑交出去，先讓使用者知道檔案在哪。
    Alert.alert(md.name || t('file'), uri, [{ text: t('ok') }])
  }

  return (
    <Pressable testID={'media-' + md.id} onPress={open} disabled={!uri}>
      {isImg && uri
        ? <Image testID={'img-' + md.id} source={{ uri }} style={s.mediaImg} resizeMode="cover" />
        : (
          <View style={s.fileRow}>
            <Text style={s.fileIcon}>{gone ? '⚠️' : isImg ? '🖼' : '📄'}</Text>
            <View style={s.flex}>
              <Text style={s.fileName} numberOfLines={1}>{md.name || t('file')}</Text>
              <Text style={s.fileSub}>
                {gone ? t('fileGone') : fmtSize(md.size)}
                {pct !== null ? ` · ${pct}%` : ''}
              </Text>
            </View>
          </View>
        )}
      {pct !== null && pct < 100
        ? <View style={s.progTrack} testID={'prog-' + md.id}>
            <View style={[s.progFill, { width: pct + '%' }]} />
          </View>
        : null}
    </Pressable>
  )
}

/* ── 訊息氣泡 ─────────────────────────────────────────────────────────── */
const Bubble = React.memo(({ m, sender, prog, onLong, quoted }) => {
  const out = m.dir === 'out'
  const tick = m.state === 'failed' ? ' ⚠' : m.state === 'delivered' ? ' ✓✓'
    : m.state === 'mailboxed' ? ' ✉' : ' ✓'
  // 进场：spring 上浮 + 淡入。发出的气泡带蓝辉光，收到的带柔和阴影，立体分层。
  const gl = out ? GLOW.blue({ radius: 12, opacity: 0.4, elevation: 5, y: 3 })
                 : GLOW.soft({ radius: 10, opacity: 0.3, elevation: 3, y: 2 })
  return (
    <Enter from={14} style={{ alignSelf: out ? 'flex-end' : 'flex-start', maxWidth: '78%' }}>
      <Pressable testID={'msg-' + m.id} onLongPress={() => onLong && onLong(m)} delayLongPress={350}>
        <View style={[s.bubble, out ? s.bubbleOut : s.bubbleIn, gl]}>
          {!out && sender ? <Text style={s.sender}>{sender}</Text> : null}
          {m.replyTo
            ? <View style={s.quote}>
                <Text style={s.quoteTxt} numberOfLines={1}>{quoted || t('quotedMessage')}</Text>
              </View>
            : null}
          {m.kind === 'media' ? <MediaBody m={m} prog={prog} /> : null}
          {m.text && m.kind !== 'media' ? <Text style={s.bubbleTxt}>{m.text}</Text> : null}
          <Text style={s.meta}>
            {m.expiresAt ? '🔥 ' : ''}
            {new Date(m.ts).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}
            {out ? tick : ''}
          </Text>
        </View>
      </Pressable>
    </Enter>
  )
})

/* ── TTL 選單 ─────────────────────────────────────────────────────────── */
function TTLSheet ({ visible, onClose, value, onPick, locked }) {
  return (
    <Sheet visible={visible} onClose={onClose} title={t("ttlTitle")} testID="ttl-sheet">
      <Text style={s.note}>
        {t('ttlDesc')}{locked ? t('ttlAdminOnly') : ''}
      </Text>
      {TTL_OPTS.map(o => (
        <Pressable
          key={o.s} testID={'ttl-' + o.s} style={[s.opt, value === o.s && s.optOn]}
          onPress={() => onPick(o.s)} disabled={locked}
        >
          <Text style={[s.optTxt, value === o.s && s.optTxtOn]}>{t(o.k)}</Text>
          {value === o.s ? <Text style={s.check}>✓</Text> : null}
        </Pressable>
      ))}
    </Sheet>
  )
}

/* ── 聊天 ─────────────────────────────────────────────────────────────── */
function Chat ({ target, isGroup, me, onBack, onInfo, toast }) {
  const key = isGroup ? target.id : target.publicKey
  const [msgs, setMsgs] = useState([])
  const [text, setText] = useState('')
  const [ttl, setTtl] = useState(0)
  const [ttlOpen, setTtlOpen] = useState(false)
  const [reply, setReply] = useState(null)
  const [prog, setProg] = useState({})          // mediaId -> { sent, size }
  const listRef = useRef(null)

  const load = useCallback(async () => {
    setMsgs(isGroup ? await api.groupMessages(key) : await api.messages(key))
    setTtl((await api.getTTL(key)).seconds || 0)
  }, [key, isGroup])

  useEffect(() => { load() }, [load])

  useEffect(() => {
    const add = (m) => setMsgs(p => (p.some(x => x.id === m.id) ? p : [...p, m]))
    const offs = [
      api.onMessage(({ peer, message }) => { if (!isGroup && peer === key) add(message) }),
      api.onGroupMessage(({ gid, message }) => { if (isGroup && gid === key && message) add(message) }),
      api.onMsgState(({ peer, id, state }) => {
        if (peer === key) setMsgs(p => p.map(m => (m.id === id ? { ...m, state } : m)))
      }),
      // 為所有人刪除 / 閱後即焚燒掉 -> 從畫面上拿掉
      api.onDeleted(({ peer, id }) => { if (peer === key) setMsgs(p => p.filter(m => m.id !== id)) }),
      api.onTTL(({ peer, seconds, by }) => {
        if (peer !== key) return
        setTtl(seconds)
        if (by === 'peer') toast(t('ttlPeerSet', { label: ttlLabel(seconds) }))
      }),
      api.onProgress((e) => {
        const mine = isGroup ? e.gid === key : (e.peer === key && !e.gid)
        if (mine) setProg(p => ({ ...p, [e.mediaId]: { sent: e.sent, size: e.size } }))
      })
    ]
    return () => offs.forEach(f => f())
  }, [key, isGroup, toast])

  const send = async () => {
    const t = text.trim(); if (!t) return
    setText(''); const r0 = reply; setReply(null)
    const r = isGroup
      ? await api.sendGroupMessage(key, t, r0 && r0.id)
      : await api.sendMessage(key, t, r0 && r0.id)
    if (r.ok) setMsgs(p => [...p, r.message]); else toast(r.error || t('sendFailed'))
  }

  const attach = async () => {
    if (!DocumentPicker) return toast(t('noPickerInstalled'))
    let f
    try {
      // copyTo: 'cachesDirectory' 會把 content:// 複製成真實路徑，
      // 這樣就不需要自己寫原生模組來處理 SAF 的匯入端。
      f = await DocumentPicker.pickSingle({ copyTo: 'cachesDirectory', type: DocumentPicker.types.allFiles })
    } catch (e) {
      if (!DocumentPicker.isCancel || !DocumentPicker.isCancel(e)) toast(t('pickFailed') + e.message)
      return
    }
    const path = (f.fileCopyUri || f.uri || '').replace(/^file:\/\//, '')
    if (!path) return toast(t('noFilePath'))
    const r = await api.attach(isGroup ? { gid: key } : { peer: key }, decodeURIComponent(path), f.name)
    if (r.ok) setMsgs(p => [...p, r.message]); else toast(r.error || t('attachFailed'))
  }

  const pickTTL = async (secs) => {
    setTtlOpen(false)
    const r = await api.setTTL(key, secs)
    if (r.ok) setTtl(r.seconds); else toast(r.error || t('cannotChange'))
  }

  const onLong = (m) => {
    const btns = [{ text: t('reply'), onPress: () => setReply(m) }]
    if (m.dir === 'out') {
      btns.push({
        text: t('deleteForEveryone'),
        style: 'destructive',
        onPress: async () => {
          const r = await api.deleteMessage(key, m.id, true)
          if (r.ok) setMsgs(p => p.filter(x => x.id !== m.id)); else toast(r.error || t('deleteFailed'))
        }
      })
    }
    btns.push({
      text: t('deleteForMe'),
      onPress: async () => {
        const r = await api.deleteMessage(key, m.id, false)
        if (r.ok) setMsgs(p => p.filter(x => x.id !== m.id))
      }
    })
    btns.push({ text: t('cancel'), style: 'cancel' })
    Alert.alert(t('message'), m.kind === 'media' ? (m.media && m.media.name) : m.text, btns)
  }

  const memberName = (pk) => {
    if (!isGroup || !pk) return null
    const mem = target.members.find(x => x.pubkey === pk)
    if (!mem) return shortKey(pk)
    return (mem.name || shortKey(pk)) + (mem.title ? ` · ${mem.title}` : '')
  }
  const quotedOf = (m) => {
    if (!m.replyTo) return null
    const q = msgs.find(x => x.id === m.replyTo)
    return q ? (q.kind === 'media' ? (q.media && q.media.name) : q.text) : t('quotedMessage')
  }

  const subtitle = isGroup
    ? t('membersOnline', { n: target.members.length, o: target.online })
    : (target.online ? t('e2eOnline') : t('e2eOffline'))

  return (
    <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Glass style={s.head}>
        <Pressable onPress={onBack} hitSlop={12} testID="chat-back"><Text style={s.back}>‹</Text></Pressable>
        <Pressable style={s.flex} onPress={onInfo} testID="chat-title">
          <Text style={s.headName}>{isGroup ? target.name : nameOf(target)}</Text>
          <Text style={s.headSub}>{subtitle}</Text>
        </Pressable>
        <Bouncy scaleTo={0.85} onPress={() => setTtlOpen(true)} testID="chat-ttl" hitSlop={10}>
          {ttl > 0
            ? <Pulse min={0.9} max={1.15}><Text style={[s.icon, s.iconOn]}>🔥</Text></Pulse>
            : <Text style={s.icon}>⏱</Text>}
        </Bouncy>
      </Glass>

      {ttl > 0
        ? <View style={s.ttlBar} testID="ttl-bar">
            <Text style={s.ttlBarTxt}>{t('ttlBar', { label: ttlLabel(ttl) })}</Text>
          </View>
        : null}

      <FlatList
        ref={listRef} data={msgs} keyExtractor={m => m.id}
        contentContainerStyle={s.msgs}
        ListEmptyComponent={<Text style={s.empty}>{t('emptyMessages')}</Text>}
        renderItem={({ item }) => (
          <Bubble
            m={item} prog={item.media ? prog[item.media.id] : null}
            sender={isGroup ? memberName(item.from) : null}
            quoted={quotedOf(item)} onLong={onLong}
          />
        )}
        onContentSizeChange={() => listRef.current && listRef.current.scrollToEnd({ animated: true })}
      />

      {reply
        ? <View style={s.replyBar} testID="reply-bar">
            <View style={s.flex}>
              <Text style={s.replyLabel}>{t('reply')}</Text>
              <Text style={s.replyTxt} numberOfLines={1}>
                {reply.kind === 'media' ? (reply.media && reply.media.name) : reply.text}
              </Text>
            </View>
            <Pressable onPress={() => setReply(null)} hitSlop={10} testID="reply-cancel">
              <Text style={s.icon}>✕</Text>
            </Pressable>
          </View>
        : null}

      <Glass style={s.composer}>
        <Pressable onPress={attach} testID="chat-attach" hitSlop={8}>
          <Text style={[s.icon, !DocumentPicker && s.iconOff]}>📎</Text>
        </Pressable>
        <TextInput
          testID="chat-input"
          style={s.field} value={text} onChangeText={setText} multiline
          placeholder={t("inputPlaceholder")} placeholderTextColor={T.muted}
        />
        <Bouncy scaleTo={0.88} onPress={send} testID="chat-send"
                style={[s.send, GLOW.blue({ radius: 14, opacity: 0.6, elevation: 8 })]}>
          <Text style={s.sendTxt}>➤</Text>
        </Bouncy>
      </Glass>

      <TTLSheet
        visible={ttlOpen} onClose={() => setTtlOpen(false)} value={ttl} onPick={pickTTL}
        locked={isGroup && target.myRole !== 'admin'}
      />
    </KeyboardAvoidingView>
  )
}

/* ── 聯絡人資訊 ───────────────────────────────────────────────────────── */
function ContactInfo ({ target, onBack, onGone, toast }) {
  const pk = target.publicKey
  const [safety, setSafety] = useState({ code: '', verified: false })
  const [name, setName] = useState(target.name || '')
  const [ttl, setTtl] = useState(0)
  const [ttlOpen, setTtlOpen] = useState(false)

  useEffect(() => {
    api.getSafety(pk).then(setSafety).catch(() => {})
    api.getTTL(pk).then(r => setTtl(r.seconds || 0)).catch(() => {})
  }, [pk])

  const rename = async () => {
    const r = await api.renameContact(pk, name)
    toast(r.ok ? t('renamed') : (r.error || t('cannotChange')))
  }
  const verify = async () => {
    const r = await api.verifySafety(pk, !safety.verified)
    if (r.ok) setSafety(v => ({ ...v, verified: !v.verified }))
  }
  const remove = () => Alert.alert(t('removeContact'), t('removeContactConfirm', { name: nameOf(target) }), [
    { text: t('cancel'), style: 'cancel' },
    { text: t('delete'), style: 'destructive', onPress: async () => { await api.removeContact(pk); onGone() } }
  ])
  const clear = () => Alert.alert(t('clearMessages'), t('clearMessagesConfirm'), [
    { text: t('cancel'), style: 'cancel' },
    { text: t('clear'), style: 'destructive', onPress: async () => { await api.clearMessages(pk); toast(t('cleared')) } }
  ])
  const pickTTL = async (secs) => {
    setTtlOpen(false)
    const r = await api.setTTL(pk, secs)
    if (r.ok) setTtl(r.seconds)
  }

  return (
    <View style={s.flex}>
      <Glass style={s.head}>
        <Pressable onPress={onBack} hitSlop={12} testID="info-back"><Text style={s.back}>‹</Text></Pressable>
        <Text style={s.headName}>{t('contactTitle')}</Text>
      </Glass>
      <ScrollView contentContainerStyle={s.pad}>
        <View style={s.bigAvatar}><Text style={s.bigAvatarTxt}>{(nameOf(target)[0] || '?')}</Text></View>

        <Field label={t("displayNameLocalLabel")} value={name} onChangeText={setName} testID="info-name" placeholder={t("unnamed")} />
        <Btn onPress={rename} kind="ghost" testID="info-rename">{t('saveNameBtn')}</Btn>

        {target.remoteName
          ? <Text style={s.note} testID="info-remotename">{t('peerSelfName', { name: target.remoteName })}</Text>
          : null}

        <Text style={s.label}>{t('pubkeyLabel')}</Text>
        <Text style={s.mono} selectable testID="info-pubkey">{pk}</Text>

        <Text style={s.label}>{t('safetyLabel')}</Text>
        <Text style={s.note}>
          {t('safetyDesc')}
        </Text>
        <Text style={s.safety} testID="info-safety">{safety.code}</Text>
        <Btn
          onPress={verify} kind={safety.verified ? 'ghost' : 'primary'} testID="info-verify"
        >{safety.verified ? t('verifiedTapToUndo') : t('markVerified')}</Btn>

        <Text style={s.label}>{t('ttlTitle')}</Text>
        <Btn onPress={() => setTtlOpen(true)} kind="ghost" testID="info-ttl">{ttlLabel(ttl)}</Btn>

        <View style={s.gap} />
        <Btn onPress={clear} kind="ghost" testID="info-clear">{t('clearMessages')}</Btn>
        <Btn onPress={remove} kind="danger" testID="info-remove">{t('removeContact')}</Btn>
      </ScrollView>
      <TTLSheet visible={ttlOpen} onClose={() => setTtlOpen(false)} value={ttl} onPick={pickTTL} />
    </View>
  )
}

/* ── 群組資訊 ─────────────────────────────────────────────────────────── */
function GroupInfo ({ target, me, onBack, onGone, toast }) {
  // 直接用 target。App 那層已經讓它跟著 EVT_GROUPUPDATE 更新了，
  // 這裡再存一份 local state 只會多一個會不同步的來源。
  const g = target
  const [name, setName] = useState(target.name)
  const [ttlOpen, setTtlOpen] = useState(false)
  const [invite, setInvite] = useState(null)
  const admin = g.myRole === 'admin'

  // 別人改了群名 -> 輸入框跟著更新（除非我正在編輯）
  const editing = useRef(false)
  useEffect(() => { if (!editing.current) setName(target.name) }, [target.name])

  const rename = async () => {
    editing.current = false
    const r = await api.groupRename(g.id, name)
    if (!r.ok) toast(r.error || t('cannotChange'))
  }
  const doInvite = async (forPk) => {
    const r = await api.groupInvite(g.id, forPk)
    if (!r.ok) return toast(r.error || t('cannotGetInvite'))
    setInvite(r.code)
  }
  const shareInvite = async () => {
    try { await Share.share({ message: invite }) } catch (e) {}
  }
  const leave = () => Alert.alert(t('leaveGroup'), t('leaveGroupConfirm', { name: g.name }), [
    { text: t('cancel'), style: 'cancel' },
    { text: t('leave'), style: 'destructive', onPress: async () => { await api.groupLeave(g.id); onGone() } }
  ])
  const kick = (m) => Alert.alert(t('kick'), t('kickConfirm', { name: m.name || shortKey(m.pubkey) }), [
    { text: t('cancel'), style: 'cancel' },
    {
      text: t('kick'),
      style: 'destructive',
      onPress: async () => { const r = await api.groupKick(g.id, m.pubkey); if (!r.ok) toast(r.error) }
    }
  ])
  const toggleRole = async (m) => {
    const next = m.role === 'admin' ? 'member' : 'admin'
    const r = await api.groupSetRole(g.id, m.pubkey, next)
    if (!r.ok) toast(r.error || t('cannotChange'))
  }
  const setTitle = (m) => {
    // RN 的 Alert.prompt 只有 iOS 有。跨平台就用彈出面板收文字。
    setTitleFor(m)
  }
  const [titleFor, setTitleFor] = useState(null)
  const [titleTxt, setTitleTxt] = useState('')
  const saveTitle = async () => {
    const r = await api.groupSetTitle(g.id, titleFor.pubkey, titleTxt)
    setTitleFor(null); setTitleTxt('')
    if (!r.ok) toast(r.error || t('cannotChange'))
  }
  const pickTTL = async (secs) => {
    setTtlOpen(false)
    const r = await api.setTTL(g.id, secs)
    if (!r.ok) toast(r.error || t('cannotChange'))
  }

  return (
    <View style={s.flex}>
      <Glass style={s.head}>
        <Pressable onPress={onBack} hitSlop={12} testID="ginfo-back"><Text style={s.back}>‹</Text></Pressable>
        <Text style={s.headName}>{t('groupInfoTitle')}</Text>
      </Glass>
      <ScrollView contentContainerStyle={s.pad}>
        <Field
          label={t("groupNameLabel")} value={name} editable={admin} testID="ginfo-name"
          onChangeText={(t) => { editing.current = true; setName(t) }}
        />
        {admin ? <Btn onPress={rename} kind="ghost" testID="ginfo-rename">{t('saveNameBtn')}</Btn> : null}

        <Text style={s.label}>{t('ttlTitle')}</Text>
        <Btn onPress={() => setTtlOpen(true)} kind="ghost" testID="ginfo-ttl">{ttlLabel(g.ttl || 0)}</Btn>
        {!admin ? <Text style={s.note}>{t('ttlAdminOnly').trim()}</Text> : null}

        <Text style={s.label}>{t('membersCount', { n: g.members.length })}</Text>
        {g.members.map(m => {
          const self = m.pubkey === me
          return (
            <View key={m.pubkey} style={s.member} testID={'member-' + m.pubkey}>
              <View style={s.avatar}><Text style={s.avatarTxt}>{(m.name || '?')[0]}</Text></View>
              <View style={s.flex}>
                <Text style={s.rowName}>
                  {m.name || shortKey(m.pubkey)}{self ? t('you') : ''}
                  {m.online ? ' ·' : ''}
                </Text>
                <Text style={s.rowSub}>
                  {m.role === 'admin' ? t('admin') : t('member')}{m.title ? ` · ${m.title}` : ''}
                </Text>
              </View>
              {admin && !self
                ? <View style={s.memberBtns}>
                    <Pressable onPress={() => toggleRole(m)} testID={'role-' + m.pubkey} hitSlop={6}>
                      <Text style={s.smallBtn}>{m.role === 'admin' ? t('demoteToMember') : t('promoteToAdmin')}</Text>
                    </Pressable>
                    <Pressable onPress={() => setTitle(m)} testID={'title-' + m.pubkey} hitSlop={6}>
                      <Text style={s.smallBtn}>{t('titleBtn')}</Text>
                    </Pressable>
                    <Pressable onPress={() => kick(m)} testID={'kick-' + m.pubkey} hitSlop={6}>
                      <Text style={[s.smallBtn, { color: T.danger }]}>{t('kick')}</Text>
                    </Pressable>
                  </View>
                : null}
            </View>
          )
        })}

        {admin
          ? <>
              <View style={s.gap} />
              <Btn onPress={() => doInvite()} testID="ginfo-invite">{t('genInvite')}</Btn>
            </>
          : null}

        <View style={s.gap} />
        <Btn onPress={leave} kind="danger" testID="ginfo-leave">{t('leaveGroup')}</Btn>
      </ScrollView>

      <Sheet visible={!!invite} onClose={() => setInvite(null)} title={t("inviteTitle")} testID="invite-sheet">
        <Text style={s.note}>
          {t('inviteDesc')}
        </Text>
        <ScrollView style={s.codeBox}><Text style={s.mono} selectable testID="invite-code">{invite}</Text></ScrollView>
        <Btn onPress={shareInvite} testID="invite-share">{t('share')}</Btn>
      </Sheet>

      <Sheet visible={!!titleFor} onClose={() => setTitleFor(null)} title={t("setTitleTitle")} testID="title-sheet">
        <Field
          label={titleFor ? (titleFor.name || shortKey(titleFor.pubkey)) : ''}
          value={titleTxt} onChangeText={setTitleTxt} placeholder={t("setTitlePlaceholder")} testID="title-input"
        />
        <Btn onPress={saveTitle} testID="title-save">{t('save')}</Btn>
      </Sheet>

      <TTLSheet
        visible={ttlOpen} onClose={() => setTtlOpen(false)} value={g.ttl || 0}
        onPick={pickTTL} locked={!admin}
      />
    </View>
  )
}

/* ── 設定 ─────────────────────────────────────────────────────────────── */
function Settings ({ onBack, onLock, toast }) {
  const [id, setId] = useState(null)
  const [name, setName] = useState('')
  const [mailbox, setMailbox] = useState('')
  const [lang, setLangState] = useState(getLang())

  useEffect(() => {
    api.getIdentity().then(setId).catch(() => {})
    api.getSettings().then(st => {
      setName(st.displayName || '')
      setMailbox(st.mailbox || '')
      if (st.lang) setLangState(st.lang)
    }).catch(() => {})
  }, [])

  const pickLang = async (code) => {
    setLang(code)              // 立刻切换界面（触发全局重渲染）
    setLangState(code)
    api.setLang(code).catch(() => {})   // 持久化到 settings
  }

  const saveName = async () => {
    const r = await api.setName(name)
    toast(r.ok ? t('nameUpdated') : (r.error || t('saveFailed')))
  }
  const saveMailbox = async () => {
    const r = await api.setMailbox(mailbox)
    toast(r.ok ? t('nameUpdated') : (r.error || t('saveFailed')))
  }
  const sharePk = async () => {
    try { await Share.share({ message: id.publicKey }) } catch (e) {}
  }

  return (
    <View style={s.flex}>
      <Glass style={s.head}>
        <Pressable onPress={onBack} hitSlop={12} testID="settings-back"><Text style={s.back}>‹</Text></Pressable>
        <Text style={s.headName}>{t('settingsTitle')}</Text>
      </Glass>
      <ScrollView contentContainerStyle={s.pad}>
        <Text style={s.label}>{t('langLabel')}</Text>
        {availableLangs.map(l => (
          <Bouncy key={l.code} scaleTo={0.98} testID={'lang-' + l.code}
                  style={[s.opt, lang === l.code && s.optOn]} onPress={() => pickLang(l.code)}>
            <Text style={[s.optTxt, lang === l.code && s.optTxtOn]}>{l.name}</Text>
            {lang === l.code ? <Text style={s.check}>✓</Text> : null}
          </Bouncy>
        ))}

        <View style={s.gap} />
        <Field
          label={t("displayNamePublicLabel")} value={name} onChangeText={setName}
          placeholder={t("notSet")} testID="settings-name"
        />
        <Btn onPress={saveName} kind="ghost" testID="settings-save-name">{t('save')}</Btn>

        <Text style={s.label}>{t('myPubkeyLabel')}</Text>
        <Text style={s.note}>{t('myPubkeyDesc')}</Text>
        <Text style={s.mono} selectable testID="settings-pubkey">{id ? id.publicKey : '…'}</Text>
        <Btn onPress={sharePk} kind="ghost" testID="settings-share-pk" disabled={!id}>{t('sharePubkey')}</Btn>

        <Text style={s.label}>{t('mailboxLabel')}</Text>
        <Text style={s.note}>
          {t('mailboxDesc')}
        </Text>
        <Field value={mailbox} onChangeText={setMailbox} placeholder={t("mailboxPlaceholder")} testID="settings-mailbox" autoCapitalize="none" />
        <Btn onPress={saveMailbox} kind="ghost" testID="settings-save-mailbox">{t('save')}</Btn>

        <View style={s.gap} />
        <Text style={s.note}>
          {t('auditNote')}
        </Text>
        <Btn onPress={onLock} kind="danger" testID="settings-lock">{t('lockBtn')}</Btn>
      </ScrollView>
    </View>
  )
}

/* ── 清單 ─────────────────────────────────────────────────────────────── */
function Home ({ me, onOpen, onSettings, toast }) {
  const [contacts, setContacts] = useState([])
  const [groups, setGroups] = useState([])
  const [menu, setMenu] = useState(false)
  const [mode, setMode] = useState(null)      // 'contact' | 'group' | 'join'
  const [f1, setF1] = useState('')
  const [f2, setF2] = useState('')
  const [picks, setPicks] = useState([])

  const refresh = useCallback(async () => {
    setContacts(await api.listContacts())
    setGroups(await api.listGroups())
  }, [])

  useEffect(() => {
    refresh()
    const offs = [
      api.onStatus(() => refresh()),
      api.onGroupUpdate(() => refresh()),
      api.onGroupGone(() => refresh()),
      api.onProfile(() => refresh()),
      api.onMessage(() => refresh()),
      api.onGroupMessage(() => refresh())
    ]
    return () => offs.forEach(f => f())
  }, [refresh, toast])

  const close = () => { setMode(null); setMenu(false); setF1(''); setF2(''); setPicks([]) }

  const addContact = async () => {
    const r = await api.addContact(f1.trim(), f2.trim())
    if (!r.ok) return toast(r.error || t('addFailed'))
    close(); refresh()
  }
  const createGroup = async () => {
    const r = await api.createGroup(f1.trim(), picks)
    if (!r.ok) return toast(r.error || t('groupCreateFailed'))
    close(); refresh()
  }
  const joinGroup = async () => {
    const r = await api.groupJoin(f1.trim())
    if (!r.ok) return toast(r.error || t('joinFailed'))
    close(); refresh()
  }

  const rows = [
    ...groups.map(g => ({
      key: 'g' + g.id, title: g.name, sub: t('membersOnline', { n: g.members.length, o: g.online }),
      item: g, group: true, burn: g.ttl > 0
    })),
    ...contacts.map(c => ({
      key: 'c' + c.publicKey, title: nameOf(c),
      sub: (c.online ? t('online') : t('offline')) + (c.verified ? t('verifiedBadge') : ''),
      item: c, group: false
    }))
  ]

  return (
    <View style={s.flex}>
      <Glass style={s.head}>
        <View style={s.flex}>
          <Text style={s.headName}>Phisorilla</Text>
          <Text style={s.headSub} numberOfLines={1}>{shortKey(me)}</Text>
        </View>
        <Pressable onPress={() => setMenu(true)} hitSlop={10} testID="home-add">
          <Text style={s.icon}>＋</Text>
        </Pressable>
        <Pressable onPress={onSettings} hitSlop={10} testID="home-settings">
          <Text style={s.icon}>⚙</Text>
        </Pressable>
      </Glass>

      <FlatList
        data={rows} keyExtractor={r => r.key}
        contentContainerStyle={{ paddingVertical: 6 }}
        ListEmptyComponent={<Text style={s.empty}>{t('emptyContacts')}</Text>}
        renderItem={({ item: r, index }) => (
          <ListItemEnter index={index}>
            <Bouncy scaleTo={0.97} style={s.row} onPress={() => onOpen(r.item, r.group)} testID={'row-' + r.key}>
              <View style={[s.avatar, GLOW.blue({ radius: 10, opacity: 0.5, elevation: 5 })]}>
                <Text style={s.avatarTxt}>{r.title[0] || '?'}</Text>
              </View>
              <View style={s.flex}>
                <Text style={s.rowName}>{r.title}{r.burn ? ' 🔥' : ''}</Text>
                <Text style={s.rowSub}>{r.sub}</Text>
              </View>
            </Bouncy>
          </ListItemEnter>
        )}
      />

      <Sheet visible={menu && !mode} onClose={close} title={t("addTitle")} testID="add-menu">
        <Pressable style={s.opt} onPress={() => setMode('contact')} testID="menu-contact">
          <Text style={s.optTxt}>{t('addContact')}</Text></Pressable>
        <Pressable style={s.opt} onPress={() => setMode('group')} testID="menu-group">
          <Text style={s.optTxt}>{t('createGroup')}</Text></Pressable>
        <Pressable style={s.opt} onPress={() => setMode('join')} testID="menu-join">
          <Text style={s.optTxt}>{t('joinGroup')}</Text></Pressable>
      </Sheet>

      <Sheet visible={mode === 'contact'} onClose={close} title={t("addContact")} testID="add-contact">
        <Field label={t("contactPubkeyLabel")} value={f1} onChangeText={setF1}
               placeholder={t("contactPubkeyPlaceholder")} autoCapitalize="none" testID="ac-key" />
        <Field label={t("contactNoteLabel")} value={f2} onChangeText={setF2}
               placeholder={t("contactNotePlaceholder")} testID="ac-name" />
        <Btn onPress={addContact} testID="ac-ok">{t('join')}</Btn>
      </Sheet>

      <Sheet visible={mode === 'group'} onClose={close} title={t("createGroup")} testID="create-group">
        <Field label={t("groupNameLabel")} value={f1} onChangeText={setF1} placeholder={t("groupNamePlaceholder")} testID="cg-name" />
        <Text style={s.label}>{t('pickMembers')}</Text>
        {contacts.length === 0
          ? <Text style={s.note}>{t('noContactsToPick')}</Text>
          : contacts.map(c => {
            const on = picks.includes(c.publicKey)
            return (
              <Pressable
                key={c.publicKey} style={[s.opt, on && s.optOn]} testID={'cg-pick-' + c.publicKey}
                onPress={() => setPicks(p => (on ? p.filter(x => x !== c.publicKey) : [...p, c.publicKey]))}
              >
                <Text style={[s.optTxt, on && s.optTxtOn]}>{nameOf(c)}</Text>
                {on ? <Text style={s.check}>✓</Text> : null}
              </Pressable>
            )
          })}
        <Btn onPress={createGroup} testID="cg-ok">{t('create')}</Btn>
      </Sheet>

      <Sheet visible={mode === 'join'} onClose={close} title={t("joinGroup")} testID="join-group">
        <Field label={t("inviteCodeLabel")} value={f1} onChangeText={setF1} placeholder={t("inviteCodePlaceholder")}
               multiline autoCapitalize="none" testID="jg-code" />
        <Btn onPress={joinGroup} testID="jg-ok">{t('join')}</Btn>
      </Sheet>
    </View>
  )
}

/* ── 根 ───────────────────────────────────────────────────────────────── */
export default function App () {
  const [ready, setReady] = useState(false)
  const [exists, setExists] = useState(false)
  const [me, setMe] = useState(null)
  const [nav, setNav] = useState({ screen: 'home' })
  const [warn, setWarn] = useState('')
  const [, setLangTick] = useState(0)   // 切换语言时强制整个 app 重渲染

  const toast = useCallback((m) => setWarn(String(m || '')), [])

  // 语言变化 -> 重新套字体 + bump tick -> 全局重渲染，所有 t() 重新取值
  useEffect(() => {
    applyGlobalFont()   // 启动时先套一次（默认繁中 = TC）
    return onLangChange(() => { applyGlobalFont(); setLangTick(x => x + 1) })
  }, [])

  useEffect(() => {
    (async () => {
      // Android：app 私有目錄（其他 app 讀不到）
      await start(Platform.OS === 'android' ? '/data/data/com.phisorilla/files' : 'phisorilla')
      const st = await api.vaultStatus()
      setExists(st.exists); setReady(true)
    })().catch(e => console.error('worklet start failed', e))
  }, [])

  // 解锁后读取存的语言偏好（存在 settings 里，跨重启保留）
  useEffect(() => {
    if (!me) return
    api.getSettings().then(st => { if (st && st.lang) setLang(st.lang) }).catch(() => {})
  }, [me])

  // worklet 的警告一律浮到畫面上。後端出事時使用者至少看得到，不會只是「沒反應」。
  useEffect(() => {
    if (!me) return
    return api.onWarn((e) => toast(e && e.error ? e.error : t('backendError')))
  }, [me, toast])

  // 被踢／退群：退回清單並提示。提示一定要放在根層——被踢的當下你通常正開著
  // 那個群組，Home 沒掛載，訂閱在 Home 裡的話使用者永遠看不到。
  useEffect(() => {
    if (!me) return
    return api.onGroupGone(({ gid, reason }) => {
      toast(reason === 'kicked' ? t('kickedFromGroup') : t('leftGroup'))
      setNav(n => (n.target && n.target.id === gid ? { screen: 'home' } : n))
    })
  }, [me, toast])

  // nav.target 是「點下去那一刻」的快照。群組會在你開著的時候被改（改名、
  // 升降權限、加退成員），不同步的話 Chat 和 GroupInfo 會一直拿舊資料——
  // 例如你已經被升成管理員了，畫面上卻還是沒有管理按鈕。
  useEffect(() => {
    if (!me) return
    return api.onGroupUpdate(({ group }) => {
      setNav(n => (n.isGroup && n.target && n.target.id === group.id ? { ...n, target: group } : n))
    })
  }, [me])

  // 聯絡人的資料（對方改了自稱、上下線）同理
  useEffect(() => {
    if (!me) return
    const patch = (pk, fields) => setNav(n =>
      (!n.isGroup && n.target && n.target.publicKey === pk ? { ...n, target: { ...n.target, ...fields } } : n))
    const offs = [
      api.onProfile(({ peer, remoteName, mailbox }) => patch(peer, { remoteName, mailbox })),
      api.onStatus(({ peer, online }) => { if (peer) patch(peer, { online }) })
    ]
    return () => offs.forEach(f => f())
  }, [me])

  const lock = async () => { await api.lock(); setMe(null); setNav({ screen: 'home' }); setExists(true) }

  if (!ready) return <View style={s.center}><ActivityIndicator color={T.blue} /></View>

  let body
  if (!me) body = <Lock exists={exists} onDone={(pk) => { setMe(pk); startService() }} />
  else if (nav.screen === 'settings') body = <Settings onBack={() => setNav({ screen: 'home' })} onLock={lock} toast={toast} />
  else if (nav.screen === 'chat') {
    body = <Chat
      target={nav.target} isGroup={nav.isGroup} me={me}
      onBack={() => setNav({ screen: 'home' })}
      onInfo={() => setNav({ ...nav, screen: nav.isGroup ? 'ginfo' : 'info' })}
      toast={toast}
    />
  } else if (nav.screen === 'info') {
    body = <ContactInfo
      target={nav.target} toast={toast}
      onBack={() => setNav({ ...nav, screen: 'chat' })}
      onGone={() => setNav({ screen: 'home' })}
    />
  } else if (nav.screen === 'ginfo') {
    body = <GroupInfo
      target={nav.target} me={me} toast={toast}
      onBack={() => setNav({ ...nav, screen: 'chat' })}
      onGone={() => setNav({ screen: 'home' })}
    />
  } else {
    body = <Home
      me={me} toast={toast}
      onOpen={(target, isGroup) => setNav({ screen: 'chat', target, isGroup })}
      onSettings={() => setNav({ screen: 'settings' })}
    />
  }

  // key 用「屏幕 + 目标」组合：每次切换页面，ScreenTransition 重新触发滑入动画。
  // 用 nativeDriver 的 translateX + opacity，切换时从右侧弹性滑入，无迟滞。
  const navKey = (me ? nav.screen : 'lock') +
    (nav.target ? ':' + (nav.target.id || nav.target.publicKey || '') : '')

  return (
    <View style={s.root}>
      <View style={s.veil} />
      <ScreenTransition key={navKey}>{body}</ScreenTransition>
      <Toast msg={warn} onHide={() => setWarn('')} />
    </View>
  )
}

const s = StyleSheet.create({
  flex: { flex: 1 },
  gap: { height: 18 },
  pad: { padding: 18, paddingBottom: 48 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0f1c' },
  root: { flex: 1, backgroundColor: '#0a0f1c' },
  veil: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(12,18,38,0.5)' },

  lockWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  lockCard: { width: '100%', maxWidth: 380, padding: 28, borderRadius: 24, alignItems: 'center', borderWidth: 1, borderColor: T.lineStrong, backgroundColor: T.card },
  mark: { fontSize: 34, color: T.blue },
  brand: { fontSize: 22, color: T.strong, fontWeight: '700', marginTop: 4 },
  sub: { fontSize: 13, color: T.muted, marginTop: 6, marginBottom: 18 },
  hint: { fontSize: 11, color: T.muted, textAlign: 'center', marginTop: 16, lineHeight: 16 },

  fieldWrap: { marginTop: 12 },
  label: { color: T.muted, fontSize: 12, marginTop: 16, marginBottom: 6, fontWeight: '600' },
  input: { width: '100%', minHeight: 46, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 10, color: T.strong, backgroundColor: 'rgba(10,16,34,0.6)', borderWidth: 1, borderColor: T.lineStrong },
  err: { color: T.danger, fontSize: 12.5, marginTop: 8 },
  note: { color: T.muted, fontSize: 12, lineHeight: 18, marginTop: 4 },
  mono: { color: T.text, fontSize: 12, fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace', marginTop: 6, lineHeight: 18 },
  safety: { color: T.teal, fontSize: 17, letterSpacing: 2, marginTop: 8, marginBottom: 10, fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace' },

  primaryBtn: { width: '100%', minHeight: 46, borderRadius: 13, marginTop: 12, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(157,184,240,0.30)', borderWidth: 1, borderColor: 'rgba(157,184,240,0.5)' },
  primaryTxt: { color: T.strong, fontSize: 15, fontWeight: '600' },
  ghostBtn: { width: '100%', minHeight: 44, borderRadius: 13, marginTop: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 1, borderColor: T.line },
  ghostTxt: { color: T.text, fontSize: 14 },
  dangerBtn: { width: '100%', minHeight: 44, borderRadius: 13, marginTop: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(229,112,127,0.16)', borderWidth: 1, borderColor: 'rgba(229,112,127,0.45)' },
  dangerTxt: { color: T.danger, fontSize: 14, fontWeight: '600' },
  disabled: { opacity: 0.45 },

  head: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingTop: 48, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: T.lineStrong, zIndex: 10, ...GLOW.blue({ radius: 12, opacity: 0.25, elevation: 8, y: 3 }) },
  back: { color: T.blue, fontSize: 30, marginRight: 4 },
  headName: { color: T.strong, fontSize: 17, fontWeight: '700' },
  headSub: { color: T.muted, fontSize: 12, marginTop: 2 },
  icon: { color: T.blue, fontSize: 20, paddingHorizontal: 4 },
  iconOn: { color: T.rose },
  iconOff: { opacity: 0.35 },

  ttlBar: { backgroundColor: 'rgba(230,169,199,0.14)', paddingVertical: 5, alignItems: 'center' },
  ttlBarTxt: { color: T.rose, fontSize: 11.5 },

  msgs: { padding: 14, gap: 10 },
  // alignSelf/maxWidth 移到了 Enter 包装层，这里只管气泡本身外观
  bubble: { paddingHorizontal: 14, paddingVertical: 10, borderRadius: 18, borderWidth: 1, borderColor: T.line },
  bubbleIn: { backgroundColor: T.bubbleIn, borderBottomLeftRadius: 5, borderColor: 'rgba(255,255,255,0.06)' },
  bubbleOut: { backgroundColor: '#4a68c4', borderBottomRightRadius: 5, borderColor: 'rgba(157,184,240,0.4)' },
  bubbleTxt: { color: T.strong, fontSize: 15, lineHeight: 21 },
  sender: { color: T.blue, fontSize: 11.5, fontWeight: '700', marginBottom: 2 },
  quote: { borderLeftWidth: 3, borderLeftColor: T.blue, paddingLeft: 7, marginBottom: 5, backgroundColor: 'rgba(157,184,240,0.14)', borderRadius: 6, paddingVertical: 3 },
  quoteTxt: { color: T.muted, fontSize: 12 },
  meta: { color: 'rgba(238,243,251,0.55)', fontSize: 10.5, textAlign: 'right', marginTop: 3 },

  mediaImg: { width: 210, height: 158, borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.25)' },
  fileRow: { flexDirection: 'row', alignItems: 'center', gap: 9, paddingVertical: 3, minWidth: 170 },
  fileIcon: { fontSize: 22 },
  fileName: { color: T.strong, fontSize: 14 },
  fileSub: { color: T.muted, fontSize: 11, marginTop: 1 },
  progTrack: { height: 3, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.14)', marginTop: 6, overflow: 'hidden' },
  progFill: { height: 3, backgroundColor: T.teal },

  replyBar: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 14, paddingVertical: 7, borderTopWidth: 1, borderTopColor: T.line, backgroundColor: 'rgba(157,184,240,0.10)' },
  replyLabel: { color: T.blue, fontSize: 11, fontWeight: '700' },
  replyTxt: { color: T.muted, fontSize: 12.5, marginTop: 1 },

  composer: { flexDirection: 'row', alignItems: 'flex-end', gap: 8, paddingHorizontal: 12, paddingVertical: 10, borderTopWidth: 1, borderTopColor: T.line },
  field: { flex: 1, maxHeight: 110, minHeight: 44, borderRadius: 22, paddingHorizontal: 16, paddingTop: 11, color: T.strong, backgroundColor: 'rgba(10,16,34,0.6)', borderWidth: 1, borderColor: T.lineStrong },
  send: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4a68c4' },
  sendTxt: { color: T.strong, fontSize: 17 },

  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 11 },
  avatar: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(157,184,240,0.24)' },
  avatarTxt: { color: T.strong, fontSize: 17 },
  bigAvatar: { width: 76, height: 76, borderRadius: 26, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(157,184,240,0.24)', marginBottom: 6 },
  bigAvatarTxt: { color: T.strong, fontSize: 30 },
  rowName: { color: T.strong, fontSize: 15 },
  rowSub: { color: T.muted, fontSize: 12, marginTop: 1 },
  empty: { color: T.muted, textAlign: 'center', marginTop: 60, fontSize: 13, lineHeight: 20 },

  member: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: T.line },
  memberBtns: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  smallBtn: { color: T.blue, fontSize: 11.5 },

  sheetBack: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  sheetTapOut: { flex: 1 },
  sheet: { backgroundColor: T.deep, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 18, paddingBottom: 34, borderTopWidth: 1, borderColor: T.line, maxHeight: '86%' },
  sheetGrip: { width: 38, height: 4, borderRadius: 2, backgroundColor: T.line, alignSelf: 'center', marginBottom: 12 },
  sheetTitle: { color: T.strong, fontSize: 16, fontWeight: '700', marginBottom: 8 },
  opt: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14, paddingHorizontal: 15, borderRadius: 14, marginTop: 7, backgroundColor: 'rgba(30,42,74,0.7)', borderWidth: 1, borderColor: 'transparent' },
  optOn: { backgroundColor: 'rgba(74,104,196,0.35)', borderColor: T.lineStrong },
  optTxt: { color: T.text, fontSize: 14.5 },
  optTxtOn: { color: T.strong, fontWeight: '600' },
  check: { color: T.blue, fontSize: 15 },
  codeBox: { maxHeight: 130, backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 10, marginTop: 8 },

  toastWrap: { position: 'absolute', left: 14, right: 14, bottom: 28 },
  toast: { backgroundColor: '#d8586a', borderRadius: 14, paddingHorizontal: 15, paddingVertical: 11 },
  toastTxt: { color: '#fff', fontSize: 13, lineHeight: 18 },

  // 头部/输入条底部的细辉光分隔线（比 borderColor 更有层次）
  headGlow: GLOW.blue({ radius: 12, opacity: 0.3, elevation: 6, y: 2 }),
  cardGlow: GLOW.blue({ radius: 18, opacity: 0.4, elevation: 8 })
})
