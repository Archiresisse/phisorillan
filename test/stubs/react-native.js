'use strict'
// ──────────────────────────────────────────────────────────────────────────
// react-native 的替身，只為了讓 App.jsx 能在 Node 裡被 react-test-renderer 掛起來。
//
// 這【不是】RN 的模擬器，不驗證版面、樣式、手勢、原生模組。
// 它驗證的是 App.jsx 的「邏輯」：state 轉移、事件訂閱／退訂、api 呼叫的參數、
// 條件渲染的分支。這些東西壞掉在真機上就是白畫面或按了沒反應，
// 而它們完全不需要真的 RN 就能測。
//
// 樣式和版面仍然【只能】在真機上驗。
// ──────────────────────────────────────────────────────────────────────────

const React = require('react')
const h = React.createElement

// 宿主元件用字串就好，react-test-renderer 會直接照 type 名稱建節點。
const host = (name) => name

const View = host('View')
const Text = host('Text')
const TextInput = host('TextInput')
const Pressable = host('Pressable')
const ScrollView = host('ScrollView')
const Image = host('Image')
const ActivityIndicator = host('ActivityIndicator')
const ImageBackground = host('ImageBackground')
const KeyboardAvoidingView = host('KeyboardAvoidingView')
const Switch = host('Switch')

// FlatList 要有真行為（空清單、keyExtractor、renderItem），不然測不到清單邏輯
const FlatList = React.forwardRef(function FlatList (
  { data, renderItem, keyExtractor, ListEmptyComponent, ListHeaderComponent, ...rest }, ref) {
  React.useImperativeHandle(ref, () => ({ scrollToEnd () {}, scrollToIndex () {}, scrollToOffset () {} }))
  const rows = data || []
  const kids = rows.map((item, index) =>
    h('Row', { key: keyExtractor ? keyExtractor(item, index) : String(index) }, renderItem({ item, index })))
  const head = ListHeaderComponent
    ? h('ListHeader', null, typeof ListHeaderComponent === 'function' ? h(ListHeaderComponent) : ListHeaderComponent)
    : null
  const empty = (!rows.length && ListEmptyComponent)
    ? h('ListEmpty', null, typeof ListEmptyComponent === 'function' ? h(ListEmptyComponent) : ListEmptyComponent)
    : null
  return h('FlatList', rest, head, empty, ...kids)
})

// Modal 不可見時不該渲染內容——這是條件渲染分支，要測得到
function Modal ({ visible, children, ...rest }) {
  return visible ? h('Modal', rest, children) : null
}

const StyleSheet = {
  create: (o) => o,
  absoluteFillObject: {},
  flatten: (x) => (Array.isArray(x) ? Object.assign({}, ...x.filter(Boolean)) : x || {}),
  hairlineWidth: 1
}

const Platform = {
  OS: 'android',
  select: (o) => (Platform.OS in o ? o[Platform.OS] : o.default)
}

// Alert：測試要能「替使用者按下確認」，所以把呼叫記下來並提供 press()
const Alert = {
  calls: [],
  alert (title, message, buttons) {
    Alert.calls.push({ title, message, buttons: buttons || [] })
  },
  // 按下最近一次 Alert 裡標題含 label 的按鈕
  press (label) {
    const last = Alert.calls[Alert.calls.length - 1]
    if (!last) throw new Error('沒有跳出任何 Alert')
    const b = last.buttons.find(x => (x.text || '').includes(label))
    if (!b) throw new Error(`Alert 裡沒有「${label}」按鈕，只有：${last.buttons.map(x => x.text).join('/')}`)
    return b.onPress && b.onPress()
  },
  reset () { Alert.calls = [] }
}

const Share = {
  calls: [],
  share: async (content) => { Share.calls.push(content); return { action: 'sharedAction' } },
  reset () { Share.calls = [] }
}

const Clipboard = {
  value: null,
  setString (s) { Clipboard.value = s }
}

const Linking = { openURL: async () => true }


const PermissionsAndroid = {
  PERMISSIONS: { POST_NOTIFICATIONS: 'android.permission.POST_NOTIFICATIONS' },
  RESULTS: { GRANTED: 'granted', DENIED: 'denied' },
  request: async () => 'granted'
}
const NativeModules = {}   // 測試環境沒有原生模組 -> service.js 會走 no-op 分支

// ── Animated 替身 ────────────────────────────────────────────────────────
// 只需让 motion.js 的组件能渲染、动画调用不崩。不模拟真实动画时序。
// react-test-renderer 测的是逻辑（state/事件/条件渲染），动画视觉本来就测不到。
class AnimatedValue {
  constructor (v) { this._value = v }
  setValue (v) { this._value = v }
  interpolate () { return new AnimatedValue(0) }  // 返回可用于 style 的占位
}
const makeAnim = () => {
  const ctrl = { start: (cb) => { if (cb) cb({ finished: true }) }, stop: () => {} }
  return ctrl
}
const Animated = {
  Value: AnimatedValue,
  View: host('Animated.View'),
  Text: host('Animated.Text'),
  ScrollView: host('Animated.ScrollView'),
  Image: host('Animated.Image'),
  spring: () => makeAnim(),
  timing: () => makeAnim(),
  sequence: () => makeAnim(),
  loop: () => makeAnim(),
  parallel: () => makeAnim(),
  delay: () => makeAnim()
}
const Easing = {
  ease: (x) => x, linear: (x) => x,
  inOut: () => (x) => x, in: () => (x) => x, out: () => (x) => x
}

module.exports = {
  PermissionsAndroid, NativeModules, Animated, Easing,
  View, Text, TextInput, Pressable, ScrollView, Image, ActivityIndicator,
  ImageBackground, KeyboardAvoidingView, Switch, FlatList, Modal,
  StyleSheet, Platform, Alert, Share, Clipboard, Linking,
  TouchableOpacity: Pressable, SafeAreaView: View, StatusBar: host('StatusBar')
}
