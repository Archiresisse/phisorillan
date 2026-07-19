// ──────────────────────────────────────────────────────────────────────────
// i18n.js — 三语言（繁中 / 简中 / English）
//
// 默认繁中。用 t('key') 取字符串，setLang() 切换，onLangChange() 订阅刷新。
// 语言偏好存在 worklet 的 settings 里（跨重启保留）；这里先用内存 + 回调，
// App 负责在启动时读回、切换时写入。
//
// ⚠️ 翻译从未在真机上审阅过。繁中是原文，简中/英文由我翻译，可能有措辞不自然处。
// ──────────────────────────────────────────────────────────────────────────

const DICT = {
  // ── 通用 ──
  appName: { tw: 'Phisorilla', cn: 'Phisorilla', en: 'Phisorilla' },
  ok: { tw: '好', cn: '好', en: 'OK' },
  cancel: { tw: '取消', cn: '取消', en: 'Cancel' },
  save: { tw: '儲存', cn: '保存', en: 'Save' },
  delete: { tw: '刪除', cn: '删除', en: 'Delete' },
  confirm: { tw: '確定', cn: '确定', en: 'Confirm' },
  back: { tw: '返回', cn: '返回', en: 'Back' },
  share: { tw: '分享', cn: '分享', en: 'Share' },
  loading: { tw: '載入中…', cn: '加载中…', en: 'Loading…' },
  online: { tw: '在線', cn: '在线', en: 'Online' },
  offline: { tw: '離線', cn: '离线', en: 'Offline' },

  // ── 锁屏 ──
  lockUnlockHint: { tw: '輸入通行碼解鎖', cn: '输入通行码解锁', en: 'Enter passcode to unlock' },
  lockCreateHint: { tw: '設定通行碼（忘記無法復原）', cn: '设定通行码（忘记无法恢复）', en: 'Set a passcode (unrecoverable if forgotten)' },
  lockPlaceholder: { tw: '通行碼', cn: '通行码', en: 'Passcode' },
  lockUnlock: { tw: '解鎖', cn: '解锁', en: 'Unlock' },
  lockCreate: { tw: '建立', cn: '创建', en: 'Create' },
  lockTooShort: { tw: '通行碼至少 6 個字。', cn: '通行码至少 6 个字符。', en: 'Passcode must be at least 6 characters.' },
  lockFailed: { tw: '失敗。', cn: '失败。', en: 'Failed.' },
  lockCryptoNote: { tw: '資料以 scrypt + AES-256-GCM 加密存在本機\n通行碼永不離開這台裝置', cn: '数据以 scrypt + AES-256-GCM 加密存在本机\n通行码永不离开这台设备', en: 'Data encrypted locally with scrypt + AES-256-GCM\nPasscode never leaves this device' },

  // ── 主页 ──
  emptyContacts: { tw: '還沒有聯絡人\n點右上角 ＋ 加一個', cn: '还没有联系人\n点右上角 ＋ 添加', en: 'No contacts yet\nTap ＋ to add one' },
  addTitle: { tw: '新增', cn: '添加', en: 'Add' },
  addContact: { tw: '新增聯絡人', cn: '添加联系人', en: 'Add contact' },
  createGroup: { tw: '建立群組', cn: '创建群组', en: 'Create group' },
  joinGroup: { tw: '用邀請碼加入群組', cn: '用邀请码加入群组', en: 'Join group with invite code' },
  membersOnline: { tw: '{n} 位成員 · {o} 在線', cn: '{n} 位成员 · {o} 在线', en: '{n} members · {o} online' },

  // ── 新增联系人 ──
  contactPubkeyLabel: { tw: '對方的公鑰（64 位十六進位）', cn: '对方的公钥（64 位十六进制）', en: "Contact's public key (64 hex chars)" },
  contactPubkeyPlaceholder: { tw: '貼上公鑰', cn: '粘贴公钥', en: 'Paste public key' },
  contactNoteLabel: { tw: '備註名稱（選填，只有你看得到）', cn: '备注名称（选填，只有你看得到）', en: 'Note name (optional, only you see it)' },
  contactNotePlaceholder: { tw: '例如：小明', cn: '例如：小明', en: 'e.g. Alice' },
  join: { tw: '加入', cn: '加入', en: 'Join' },
  addFailed: { tw: '加不進去。', cn: '添加失败。', en: 'Could not add.' },

  // ── 建立群组 ──
  groupNameLabel: { tw: '群組名稱', cn: '群组名称', en: 'Group name' },
  groupNamePlaceholder: { tw: '未命名群組', cn: '未命名群组', en: 'Untitled group' },
  pickMembers: { tw: '選成員（上限 10 人，含你）', cn: '选成员（上限 10 人，含你）', en: 'Pick members (max 10, incl. you)' },
  noContactsToPick: { tw: '還沒有聯絡人可以選。', cn: '还没有联系人可以选。', en: 'No contacts to pick.' },
  create: { tw: '建立', cn: '创建', en: 'Create' },
  groupCreateFailed: { tw: '建不起來。', cn: '创建失败。', en: 'Could not create.' },

  // ── 加入群组 ──
  inviteCodeLabel: { tw: '邀請碼', cn: '邀请码', en: 'Invite code' },
  inviteCodePlaceholder: { tw: '貼上邀請碼', cn: '粘贴邀请码', en: 'Paste invite code' },
  joinFailed: { tw: '加入失敗。', cn: '加入失败。', en: 'Failed to join.' },

  // ── 聊天 ──
  emptyMessages: { tw: '還沒有訊息', cn: '还没有消息', en: 'No messages yet' },
  inputPlaceholder: { tw: '輸入訊息…', cn: '输入消息…', en: 'Type a message…' },
  e2eOnline: { tw: '🔒 端對端加密 · 在線', cn: '🔒 端到端加密 · 在线', en: '🔒 End-to-end encrypted · Online' },
  e2eOffline: { tw: '🔒 端對端加密 · 離線', cn: '🔒 端到端加密 · 离线', en: '🔒 End-to-end encrypted · Offline' },
  sendFailed: { tw: '送不出去。', cn: '发送失败。', en: 'Could not send.' },
  reply: { tw: '回覆', cn: '回复', en: 'Reply' },
  deleteForEveryone: { tw: '為所有人刪除', cn: '为所有人删除', en: 'Delete for everyone' },
  deleteForMe: { tw: '只刪我這邊', cn: '只删我这边', en: 'Delete for me only' },
  message: { tw: '訊息', cn: '消息', en: 'Message' },
  file: { tw: '檔案', cn: '文件', en: 'File' },
  deleteFailed: { tw: '刪不掉。', cn: '删除失败。', en: 'Could not delete.' },
  cannotChange: { tw: '改不了。', cn: '改不了。', en: 'Could not change.' },
  fileGone: { tw: '檔案已不在', cn: '文件已不在', en: 'File no longer available' },
  noPickerInstalled: { tw: '沒有安裝檔案選擇器，無法附加檔案。', cn: '没有安装文件选择器，无法附加文件。', en: 'No file picker installed, cannot attach.' },
  pickFailed: { tw: '選檔失敗：', cn: '选文件失败：', en: 'File pick failed: ' },
  noFilePath: { tw: '拿不到檔案路徑。', cn: '拿不到文件路径。', en: 'Could not get file path.' },
  attachFailed: { tw: '附加失敗。', cn: '附加失败。', en: 'Attach failed.' },
  quotedMessage: { tw: '引用訊息', cn: '引用消息', en: 'Quoted message' },

  // ── 阅后即焚 ──
  ttlTitle: { tw: '閱後即焚', cn: '阅后即焚', en: 'Disappearing messages' },
  ttlOff: { tw: '關閉', cn: '关闭', en: 'Off' },
  ttl30s: { tw: '30 秒', cn: '30 秒', en: '30 seconds' },
  ttl5m: { tw: '5 分鐘', cn: '5 分钟', en: '5 minutes' },
  ttl1h: { tw: '1 小時', cn: '1 小时', en: '1 hour' },
  ttl1d: { tw: '1 天', cn: '1 天', en: '1 day' },
  ttl7d: { tw: '7 天', cn: '7 天', en: '7 days' },
  ttlSeconds: { tw: '{n} 秒', cn: '{n} 秒', en: '{n} seconds' },
  ttlDesc: { tw: '設定之後傳送的訊息，雙方會在同一時刻自動燒掉。\n既有訊息不受影響。', cn: '设定之后发送的消息，双方会在同一时刻自动销毁。\n既有消息不受影响。', en: 'Messages sent after this will auto-delete on both sides at the same time.\nExisting messages are unaffected.' },
  ttlAdminOnly: { tw: '\n\n只有管理員可以改群組的設定。', cn: '\n\n只有管理员可以改群组的设定。', en: '\n\nOnly admins can change the group setting.' },
  ttlBar: { tw: '閱後即焚：{label}', cn: '阅后即焚：{label}', en: 'Disappearing: {label}' },
  ttlPeerSet: { tw: '對方把閱後即焚設為「{label}」', cn: '对方把阅后即焚设为「{label}」', en: 'Peer set disappearing to "{label}"' },

  // ── 联系人资讯 ──
  contactTitle: { tw: '聯絡人', cn: '联系人', en: 'Contact' },
  displayNameLocalLabel: { tw: '顯示名稱（只有你看得到）', cn: '显示名称（只有你看得到）', en: 'Display name (only you see it)' },
  unnamed: { tw: '未命名', cn: '未命名', en: 'Unnamed' },
  saveNameBtn: { tw: '儲存名稱', cn: '保存名称', en: 'Save name' },
  peerSelfName: { tw: '對方自稱：{name}', cn: '对方自称：{name}', en: 'Peer calls themselves: {name}' },
  pubkeyLabel: { tw: '公鑰', cn: '公钥', en: 'Public key' },
  safetyLabel: { tw: '安全碼', cn: '安全码', en: 'Safety number' },
  safetyDesc: { tw: '用另一個管道（當面、電話）和對方比對這串數字。一樣就代表中間沒有人在偷聽。', cn: '用另一个渠道（当面、电话）和对方比对这串数字。一样就代表中间没有人在偷听。', en: 'Compare this number with your contact via another channel (in person, phone). Matching means no one is eavesdropping.' },
  markVerified: { tw: '標記為已驗證', cn: '标记为已验证', en: 'Mark as verified' },
  verifiedTapToUndo: { tw: '✓ 已驗證（點一下取消）', cn: '✓ 已验证（点一下取消）', en: '✓ Verified (tap to undo)' },
  verified: { tw: '已驗證', cn: '已验证', en: 'Verified' },
  clearMessages: { tw: '清空訊息紀錄', cn: '清空消息记录', en: 'Clear message history' },
  removeContact: { tw: '刪除聯絡人', cn: '删除联系人', en: 'Delete contact' },
  removeContactConfirm: { tw: '確定要刪除「{name}」？訊息也會一起消失。', cn: '确定要删除「{name}」？消息也会一起消失。', en: 'Delete "{name}"? Messages will be lost too.' },
  clearMessagesConfirm: { tw: '只清掉這台裝置上的紀錄，對方那邊還留著。', cn: '只清掉这台设备上的记录，对方那边还留着。', en: 'Clears only this device; the other side keeps theirs.' },
  clear: { tw: '清空', cn: '清空', en: 'Clear' },
  cleared: { tw: '已清空。', cn: '已清空。', en: 'Cleared.' },
  renamed: { tw: '已改名。', cn: '已改名。', en: 'Renamed.' },

  // ── 群组资讯 ──
  groupInfoTitle: { tw: '群組資訊', cn: '群组信息', en: 'Group info' },
  membersCount: { tw: '成員（{n}／10）', cn: '成员（{n}／10）', en: 'Members ({n}/10)' },
  admin: { tw: '管理員', cn: '管理员', en: 'Admin' },
  member: { tw: '成員', cn: '成员', en: 'Member' },
  you: { tw: '（你）', cn: '（你）', en: ' (you)' },
  demoteToMember: { tw: '降為成員', cn: '降为成员', en: 'Demote to member' },
  promoteToAdmin: { tw: '設為管理', cn: '设为管理', en: 'Make admin' },
  titleBtn: { tw: '頭銜', cn: '头衔', en: 'Title' },
  kick: { tw: '移出', cn: '移出', en: 'Remove' },
  genInvite: { tw: '產生邀請碼', cn: '生成邀请码', en: 'Generate invite code' },
  leaveGroup: { tw: '退出群組', cn: '退出群组', en: 'Leave group' },
  leaveGroupConfirm: { tw: '確定退出「{name}」？', cn: '确定退出「{name}」？', en: 'Leave "{name}"?' },
  leave: { tw: '退出', cn: '退出', en: 'Leave' },
  kickConfirm: { tw: '把「{name}」移出？', cn: '把「{name}」移出？', en: 'Remove "{name}"?' },
  inviteTitle: { tw: '邀請碼', cn: '邀请码', en: 'Invite code' },
  inviteDesc: { tw: '把這段字給對方，他在「加入群組」貼上就會進來。\n⚠️ 這是【持有者權杖】——拿到的人就能進群，沒有額外驗證。傳的時候請走安全的管道。', cn: '把这段字给对方，他在「加入群组」粘贴就会进来。\n⚠️ 这是【持有者令牌】——拿到的人就能进群，没有额外验证。传的时候请走安全的渠道。', en: 'Give this to your contact; they paste it in "Join group" to enter.\n⚠️ This is a bearer token — anyone who gets it can join, no extra check. Share via a secure channel.' },
  setTitleTitle: { tw: '設定頭銜', cn: '设定头衔', en: 'Set title' },
  setTitlePlaceholder: { tw: '例如：打雜的', cn: '例如：打杂的', en: 'e.g. Helper' },
  cannotGetInvite: { tw: '拿不到邀請碼。', cn: '拿不到邀请码。', en: 'Could not get invite code.' },

  // ── 设定 ──
  settingsTitle: { tw: '設定', cn: '设置', en: 'Settings' },
  displayNamePublicLabel: { tw: '顯示名稱（對方會看到）', cn: '显示名称（对方会看到）', en: 'Display name (visible to contacts)' },
  notSet: { tw: '未設定', cn: '未设置', en: 'Not set' },
  nameUpdated: { tw: '已更新，對方那邊也會看到。', cn: '已更新，对方那边也会看到。', en: 'Updated; your contacts will see it.' },
  saveFailed: { tw: '存不起來。', cn: '保存失败。', en: 'Could not save.' },
  myPubkeyLabel: { tw: '我的公鑰', cn: '我的公钥', en: 'My public key' },
  myPubkeyDesc: { tw: '把這串給對方，他加進聯絡人就能找到你。公鑰是公開的，給出去沒關係。', cn: '把这串给对方，他加进联系人就能找到你。公钥是公开的，给出去没关系。', en: 'Give this to others so they can add you. Public keys are public — safe to share.' },
  sharePubkey: { tw: '分享公鑰', cn: '分享公钥', en: 'Share public key' },
  mailboxLabel: { tw: '信箱（離線代收）', cn: '信箱（离线代收）', en: 'Mailbox (offline delivery)' },
  mailboxDesc: { tw: '⚠️ 老實說：信箱這條路【沒有前向保密】。身分私鑰一旦外洩，經過信箱的舊訊息都能被回溯解密。不確定的話就留空。', cn: '⚠️ 老实说：信箱这条路【没有前向保密】。身份私钥一旦泄露，经过信箱的旧消息都能被回溯解密。不确定的话就留空。', en: "⚠️ Honestly: the mailbox path has NO forward secrecy. If your identity key leaks, past mailbox messages can be decrypted retroactively. Leave blank if unsure." },
  mailboxPlaceholder: { tw: '留空 = 不使用', cn: '留空 = 不使用', en: 'Blank = not used' },
  langLabel: { tw: '語言', cn: '语言', en: 'Language' },
  auditNote: { tw: '這個程式沒有經過安全稽核，是學習性質的專案。真的有風險的通訊請用 SimpleX 或 Session。', cn: '这个程序没有经过安全审计，是学习性质的项目。真的有风险的通讯请用 SimpleX 或 Session。', en: 'This app is unaudited and a learning project. For truly sensitive communication use SimpleX or Session.' },
  lockBtn: { tw: '鎖定', cn: '锁定', en: 'Lock' },

  // ── 全局事件提示 ──
  kickedFromGroup: { tw: '你被移出了一個群組。', cn: '你被移出了一个群组。', en: 'You were removed from a group.' },
  leftGroup: { tw: '已退出群組。', cn: '已退出群组。', en: 'You left the group.' },
  backendError: { tw: '後端發生錯誤。', cn: '后端发生错误。', en: 'A backend error occurred.' },
  verifiedBadge: { tw: ' · ✓ 已驗證', cn: ' · ✓ 已验证', en: ' · ✓ Verified' }
}

const LANGS = ['tw', 'cn', 'en']
const LANG_NAMES = { tw: '繁體中文', cn: '简体中文', en: 'English' }

let current = 'tw'                    // 默认繁中
const listeners = new Set()

export function getLang () { return current }
export function langName (l) { return LANG_NAMES[l] || l }
export const availableLangs = LANGS.map(l => ({ code: l, name: LANG_NAMES[l] }))

export function setLang (l) {
  if (!LANGS.includes(l) || l === current) return
  current = l
  listeners.forEach(fn => { try { fn(l) } catch (e) {} })
}

export function onLangChange (fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

// t('key') 或 t('key', { n: 3 }) 做占位替换
export function t (key, vars) {
  const entry = DICT[key]
  let str = entry ? (entry[current] || entry.tw) : key
  if (vars) {
    for (const k in vars) str = str.split('{' + k + '}').join(String(vars[k]))
  }
  return str
}

// 当前语言对应的衬线字体。
// 繁中/英文用 Noto Serif TC；简中用 Noto Serif SC（简体字形更自然，且覆盖简体独有字）。
// 字体文件打包在 android/app/src/main/assets/fonts/，fontFamily 用文件里的 PostScript 名。
const FONT_BY_LANG = { tw: 'NotoSerifTC', cn: 'NotoSerifSC', en: 'NotoSerifTC' }
export function currentFont () { return FONT_BY_LANG[current] || 'NotoSerifTC' }
