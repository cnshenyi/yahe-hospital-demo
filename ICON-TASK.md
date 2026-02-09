# Icon Redesign Task

## Overview
Replace ALL SVG icons in the i五院 hospital app prototype with new high-quality, theme-aware icons.

## Theme System
- Theme A "中山蓝": primary=#1565C0, light=#42A5F5, bg=#EBF2FC, gradient=linear-gradient(135deg, #1565C0, #42A5F5)
- Theme B "科技蓝绿": primary=#00897B, light=#26A69A, bg=#E0F2F1, gradient=linear-gradient(135deg, #00695C, #26A69A)
- Theme is passed as prop `theme` ('A' or 'B') to each view component
- Icons must change color based on theme

## Architecture
Create `src/utils/icons.js` that exports icon generator functions. Each function takes a `theme` parameter and returns an SVG string.

Example:
```js
export function iconAppointment(theme) {
  const primary = theme === 'A' ? '#1565C0' : '#00897B'
  const light = theme === 'A' ? '#42A5F5' : '#26A69A'
  const bg = theme === 'A' ? '#EBF2FC' : '#E0F2F1'
  return `<svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="16" fill="${bg}"/>
    ...
  </svg>`
}
```

## Icon Style Guide

### Style A — Square (for core/primary functions)
- Container: 64×64 viewBox, 16px border-radius rect background
- Background: theme bg color (very light)
- Icon graphic: Large, fills ~70% of container
- Colors: theme gradient (primary→light), white details inside
- Use for: main actions, category grids, function grids

### Style B — Circle (for quick/secondary functions)  
- Container: 52×52 viewBox, circle background
- Background: semantic colors (green=#E8F5E9, orange=#FFF3E0, blue=#E3F2FD, purple=#F3E5F5)
- Icon graphic: Bold, centered, fills ~65% of container
- Colors: matching semantic dark colors (green=#2E7D32, orange=#EF6C00, blue=#1565C0, purple=#7B1FA2)
- Use for: quick function grids (4-item rows)
- These DON'T change with theme (they use semantic colors)

### Bottom Nav Icons
- 26×26 display size, 24×24 viewBox
- Active: theme primary color, filled
- Inactive: #B0BEC5, filled
- Must be SOLID/FILLED shapes (not outlines)

## Files to Modify

### 1. CREATE: src/utils/icons.js
All icon functions organized by page/section.

### 2. MODIFY: src/views/patient/Home.vue
- `quickFuncs` array (4 items): Style B circle — 门诊报到(green ✓), 门诊缴费(orange ¥), 报告查询(blue doc+search), 检查预约(purple calendar)
- `tabs[0].items` (门诊, 8 items): Style A square — 挂号记录, 医保定点, 检查检验开单, 生殖胚胎续费, 产科建档, 体检预约, 石蜡切片申请, 病理会诊
- `tabs[1].items` (住院, 4 items): Style A square — 住院缴费, 住院清单, 出院办理, 住院日清单
- `tabs[2].items` (综合, 4 items): Style A square — 体检预约, 产科建档, 石蜡切片申请, 病理会诊
- Main action icons in template (预约挂号, 在线门诊): Style A square, large
- Import icons from utils/icons.js, use computed properties with theme prop

### 3. MODIFY: src/views/patient/My.vue
- `orders` array (4 items): Style B circle — 待付款(orange ¥), 线上问诊(blue chat), 检查检验申请(green doc), 退费申请记录(red ×)
- `healthServices` array (5 items): Style A square — 挂号记录, 候补记录, 我的处方, 我的验单, 我的报告

### 4. MODIFY: src/views/doctor/Workstation.vue
- `clinicItems` array (6 items): Style A square — 在线门诊, 团队问诊, 检查检验, 退费申请, 病历申请, 产前诊断
- `quickItems` array (8 items): Style B circle — 我的评价(yellow ★), 我的二维码(blue QR), 历史申请单(orange doc), 历史处方(purple Rx), 住院管理(green +), 我的随访(blue phone), 我的动态(teal pulse), 数字空间(gray folder)

### 5. MODIFY: src/views/doctor/My.vue
- `funcItems` array (4 items): Style B circle — 门诊设置(green gear), 我的医嘱(blue clipboard), 二维码(purple QR), 团队设置(orange people)

### 6. MODIFY: src/App.vue
- Patient tab bar icons (4): 首页(home), 健康(heart), 消息(chat), 我的(person) — SOLID filled
- Doctor tab bar icons (4): 工作台(monitor), 患者(people), 消息(chat), 我的(person) — SOLID filled
- Tab bar background: add subtle theme tint
- Active icon color follows theme, inactive = #B0BEC5

### 7. MODIFY: src/views/doctor/Message.vue
- Avatar SVGs for 张三, 系统通知, 李女士, 王先生 — these are fine as-is (person silhouettes), just make them larger

### 8. MODIFY: src/views/patient/Message.vue  
- 互联网医院通知 icon (bell) and 系统消息 icon (envelope) — make larger and bolder

## Key Requirements
- ALL icon SVGs must be LARGE and BOLD — fill at least 65-70% of their container
- NO thin line icons — everything should be SOLID/FILLED
- Theme-dependent icons use the icons.js utility functions
- Semantic-colored icons (Style B) stay the same across themes
- Each icon should be visually distinct and recognizable at small sizes
- Professional, high-end feel — think Apple Health, Alipay Health

## Working Directory
/Users/shenyi/Documents/zswy/zswyvi/prototype-v2/

## Build & Test
After changes: `npx vite build` then check dist/ via http://localhost:5174/
