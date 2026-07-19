// ──────────────────────────────────────────────────────────────────────────
// motion.js — 动画 + 彩色辉光阴影 基础组件
//
// 设计目标：无迟滞感。核心手段是 useNativeDriver: true —— 动画跑在原生 UI 线程，
// 即使 JS 线程正忙（解密、渲染长列表），动画照样满帧丝滑。
//
// 风格：彩色辉光阴影（蓝紫/粉，呼应夜樱主题）+ spring 弹性回弹。
//
// 只用 RN 内建 Animated，不引入 reanimated —— 避免再加一个原生依赖导致编译失败。
// ⚠️ 版面/动画从未在真机验证过；react-test-renderer 测的是逻辑，不是视觉。
// ──────────────────────────────────────────────────────────────────────────

import React, { useRef, useEffect, useCallback } from 'react'
import { Animated, Pressable, Platform, Easing, View } from 'react-native'

/* ── 辉光阴影预设 ─────────────────────────────────────────────────────────
   iOS 用 shadowColor/Radius/Opacity（能上色）；Android 用 elevation（系统阴影，
   Android P+ 才支持 shadowColor 上色，低版本退回灰色但仍有立体感）。 */
export const glow = (color, { radius = 16, opacity = 0.45, elevation = 8, y = 6 } = {}) =>
  Platform.select({
    ios: {
      shadowColor: color,
      shadowOffset: { width: 0, height: y },
      shadowRadius: radius,
      shadowOpacity: opacity
    },
    android: {
      shadowColor: color,          // Android 9+ 生效
      elevation
    }
  })

// 主题色辉光快捷方式
export const GLOW = {
  blue: (o) => glow('#6e8fe0', o),
  rose: (o) => glow('#e6a9c7', o),
  teal: (o) => glow('#74dcc9', o),
  soft: (o) => glow('#000000', { opacity: 0.35, ...o }),
  danger: (o) => glow('#e5707f', o)
}

/* ── spring 预设 ───────────────────────────────────────────────────────── */
const SPRING_SNAPPY = { tension: 300, friction: 15, useNativeDriver: true }   // 按钮反馈
const SPRING_BOUNCY = { tension: 180, friction: 12, useNativeDriver: true }   // 进场回弹
const SPRING_SOFT = { tension: 120, friction: 14, useNativeDriver: true }     // 页面切换

/* ── 按下即回弹的 Pressable ───────────────────────────────────────────────
   点击时缩到 0.95 并回弹，配合辉光。这是「按钮点击反馈」的顺滑来源。 */
export function Bouncy ({ children, onPress, onLongPress, style, scaleTo = 0.95,
                          disabled, testID, hitSlop, delayLongPress }) {
  const scale = useRef(new Animated.Value(1)).current
  const press = () => Animated.spring(scale, { toValue: scaleTo, ...SPRING_SNAPPY }).start()
  const release = () => Animated.spring(scale, { toValue: 1, ...SPRING_SNAPPY }).start()
  return (
    <Pressable
      testID={testID} onPress={onPress} onLongPress={onLongPress}
      onPressIn={press} onPressOut={release}
      disabled={disabled} hitSlop={hitSlop} delayLongPress={delayLongPress}
    >
      <Animated.View style={[style, { transform: [{ scale }] }]}>
        {children}
      </Animated.View>
    </Pressable>
  )
}

/* ── 进场动画：淡入 + spring 上浮 ─────────────────────────────────────────
   用于消息气泡、卡片。delay 让列表项依序出现（stagger）。 */
export function Enter ({ children, style, delay = 0, from = 12, kind = 'bouncy', testID }) {
  const t = useRef(new Animated.Value(0)).current
  useEffect(() => {
    const spring = kind === 'soft' ? SPRING_SOFT : SPRING_BOUNCY
    Animated.spring(t, { toValue: 1, delay, ...spring }).start()
  }, [])
  return (
    <Animated.View
      testID={testID}
      style={[
        style,
        {
          opacity: t,
          transform: [
            { translateY: t.interpolate({ inputRange: [0, 1], outputRange: [from, 0] }) },
            { scale: t.interpolate({ inputRange: [0, 1], outputRange: [0.97, 1] }) }
          ]
        }
      ]}
    >
      {children}
    </Animated.View>
  )
}

/* ── 列表项渐入 ───────────────────────────────────────────────────────────
   FlatList 的 renderItem 包这个，index 决定 stagger 延迟。
   延迟上限封顶，避免长列表尾部等太久。 */
export function ListItemEnter ({ children, index = 0, style }) {
  const delay = Math.min(index * 45, 400)
  return <Enter delay={delay} from={16} style={style}>{children}</Enter>
}

/* ── 页面切换过渡 ─────────────────────────────────────────────────────────
   包住整个屏幕内容。切换时从右侧滑入 + 淡入（像原生导航的推入感）。
   key 变化时重新触发（在 App 根据 nav.screen 设 key）。 */
export function ScreenTransition ({ children, style }) {
  const t = useRef(new Animated.Value(0)).current
  useEffect(() => {
    t.setValue(0)
    Animated.spring(t, { toValue: 1, ...SPRING_SOFT }).start()
  }, [])
  return (
    <Animated.View
      style={[
        { flex: 1 },
        style,
        {
          opacity: t,
          transform: [
            { translateX: t.interpolate({ inputRange: [0, 1], outputRange: [26, 0] }) }
          ]
        }
      ]}
    >
      {children}
    </Animated.View>
  )
}

/* ── 底部面板滑入 ─────────────────────────────────────────────────────────
   比 Modal 自带的 slide 更有弹性。用于所有 Sheet。 */
export function SheetRise ({ children, style }) {
  const t = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.spring(t, { toValue: 1, tension: 200, friction: 16, useNativeDriver: true }).start()
  }, [])
  return (
    <Animated.View
      style={[
        style,
        {
          opacity: t,
          transform: [
            { translateY: t.interpolate({ inputRange: [0, 1], outputRange: [40, 0] }) }
          ]
        }
      ]}
    >
      {children}
    </Animated.View>
  )
}

/* ── 脉动辉光（用于「运行中/在线」状态点、闪焚图标）─────────────────────────
   循环 spring，营造呼吸感。纯装饰。 */
export function Pulse ({ children, style, min = 0.85, max = 1.12, duration = 1400 }) {
  const t = useRef(new Animated.Value(0)).current
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(t, { toValue: 1, duration, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(t, { toValue: 0, duration, easing: Easing.inOut(Easing.ease), useNativeDriver: true })
      ])
    )
    loop.start()
    return () => loop.stop()
  }, [])
  return (
    <Animated.View
      style={[
        style,
        { transform: [{ scale: t.interpolate({ inputRange: [0, 1], outputRange: [min, max] }) }] }
      ]}
    >
      {children}
    </Animated.View>
  )
}

/* ── 淡入淡出容器（用于 toast、条件出现的元素）───────────────────────────── */
export function Fade ({ visible, children, style, duration = 220 }) {
  const t = useRef(new Animated.Value(visible ? 1 : 0)).current
  useEffect(() => {
    Animated.timing(t, { toValue: visible ? 1 : 0, duration, useNativeDriver: true }).start()
  }, [visible])
  return (
    <Animated.View style={[style, { opacity: t }]} pointerEvents={visible ? 'auto' : 'none'}>
      {children}
    </Animated.View>
  )
}
