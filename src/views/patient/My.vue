<template>
  <div class="my-page">
    <!-- Fixed Top -->
    <div class="fixed-top">
      <!-- iOS Status Bar (iPhone 17 Pro) -->
      <div class="ios-status-bar">
        <span class="sb-time">12:45</span>
        <div class="sb-island"></div>
        <div class="sb-right">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="white"><path d="M1.5 4.5C4.5 1.5 8.5.5 8.5.5s4 1 7 4" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M3.5 7C5.5 5 8.5 4 8.5 4s3 1 5 3" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="8.5" cy="10" r="1.5" fill="white"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity=".35"/></svg>
          <div class="sb-battery"><div class="sb-battery-body"><div class="sb-battery-level"></div></div><div class="sb-battery-cap"></div></div>
        </div>
      </div>

      <!-- Profile Header -->
      <div class="profile-header">
        <div class="wechat-capsule">
          <span class="cap-dots">···</span>
          <span class="cap-divider"></span>
          <span class="cap-circle">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
          </span>
        </div>
        <div class="profile-info">
          <div class="avatar">
            <svg viewBox="0 0 48 48" width="48" height="48" fill="rgba(255,255,255,.8)"><circle cx="24" cy="18" r="8"/><path d="M8 42c0-8.84 7.16-16 16-16s16 7.16 16 16"/></svg>
          </div>
          <div class="profile-text">
            <span class="profile-name">沈先生</span>
            <span class="profile-link">选择就诊人 ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scrollable Content -->
    <div class="scroll-content">
    <div class="stats-row">
      <div class="stat-item" v-for="s in stats" :key="s.label">
        <strong>{{ s.value }}</strong>
        <span>{{ s.label }}</span>
      </div>
    </div>

    <!-- Service Orders -->
    <div class="section-card">
      <div class="section-title">服务订单</div>
      <div class="icon-grid">
        <div class="icon-item" v-for="o in orders" :key="o.name">
          <div class="icon-circle">
            <div v-html="o.svg"></div>
          </div>
          <span>{{ o.name }}</span>
        </div>
      </div>
    </div>

    <!-- Health Services -->
    <div class="section-card">
      <div class="section-title">健康服务</div>
      <div class="icon-grid five-col">
        <div class="icon-item" v-for="h in healthServices" :key="h.name">
          <div class="icon-circle" :style="{ background: h.bg }">
            <div v-html="h.svg"></div>
          </div>
          <span>{{ h.name }}</span>
        </div>
      </div>
    </div>

    <!-- Menu List -->
    <div class="menu-list">
      <div class="menu-item" v-for="item in menuItems" :key="item">
        <span>{{ item }}</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ccc" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    </div>

    <div style="height: 120px"></div>
    </div><!-- end scroll-content -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  themeColors,
  iconOrderPay, iconOrderChat, iconOrderLab, iconOrderRefund,
  iconMyReg, iconMyWaitlist, iconMyPrescription, iconMyTest, iconMyReport
} from '../../utils/icons.js'

const props = defineProps({ theme: { type: String, default: 'A' }, side: String })

const stats = [
  { value: 0, label: '我的关注' },
  { value: 0, label: '我的收藏' },
  { value: 0, label: '我的评论' },
  { value: 3, label: '关注医生' },
]

const orders = [
  { name: '待付款', svg: iconOrderPay() },
  { name: '线上问诊', svg: iconOrderChat() },
  { name: '检查检验申请', svg: iconOrderLab() },
  { name: '退费申请记录', svg: iconOrderRefund() },
]

const healthServices = computed(() => {
  const t = props.theme
  const bg = themeColors(t).bg
  return [
    { name: '挂号记录', bg, svg: iconMyReg(t) },
    { name: '候补记录', bg, svg: iconMyWaitlist(t) },
    { name: '我的处方', bg, svg: iconMyPrescription(t) },
    { name: '我的验单', bg, svg: iconMyTest(t) },
    { name: '我的报告', bg, svg: iconMyReport(t) },
  ]
})

const menuItems = ['自助入院办理', '我的发票', '报销清单', '互联网医院门诊电子病历申请', '收货地址']
</script>

<style scoped>
.my-page { height: 100%; display: flex; flex-direction: column; background: var(--bg); position: relative; }
.my-page::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 240px;
  background: var(--gradient-header); z-index: 0; pointer-events: none;
}

.fixed-top { flex-shrink: 0; z-index: 10; background: transparent; position: relative; }

.ios-status-bar {
  height: 54px; padding: 12px 24px 0; display: flex; justify-content: space-between; align-items: center;
  background: transparent; position: relative; z-index: 10;
}
.sb-time { color: #fff; font-size: 16px; font-weight: 700; width: 54px; }
.sb-island {
  width: 126px; height: 36px; background: #000; border-radius: 18px;
  position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
}
.sb-right { display: flex; align-items: center; gap: 6px; }
.sb-battery { display: flex; align-items: center; }
.sb-battery-body { width: 22px; height: 11px; border: 1.5px solid #fff; border-radius: 2.5px; padding: 1.5px; }
.sb-battery-level { width: 75%; height: 100%; background: #fff; border-radius: 1px; }
.sb-battery-cap { width: 2px; height: 5px; background: #fff; border-radius: 0 1px 1px 0; margin-left: 1px; }

.profile-header {
  background: transparent; padding: 0 16px 24px; position: relative;
}

.scroll-content { flex: 1; overflow-y: auto; overflow-x: hidden; padding-top: 0; position: relative; z-index: 1; }
.wechat-capsule {
  position: absolute; top: 0; right: 16px; display: flex; align-items: center; background: rgba(255,255,255,.25);
  border: .5px solid rgba(255,255,255,.35); border-radius: 16px; height: 30px; padding: 0 2px;
}
.cap-dots { padding: 0 9px; font-size: 20px; color: #fff; letter-spacing: 3px; line-height: 1; }
.cap-divider { width: .5px; height: 16px; background: rgba(255,255,255,.45); }
.cap-circle { padding: 0 7px; display: flex; align-items: center; }

.profile-info { display: flex; align-items: center; gap: 14px; padding-top: 8px; }
.avatar {
  width: 60px; height: 60px; border-radius: 50%; background: rgba(255,255,255,.2);
  display: flex; align-items: center; justify-content: center; border: 2px solid rgba(255,255,255,.4);
}
.profile-text { display: flex; flex-direction: column; gap: 4px; }
.profile-name { font-size: 20px; font-weight: 700; color: #fff; }
.profile-link { font-size: 13px; color: rgba(255,255,255,.75); }

.stats-row {
  display: flex; background: #fff; margin: 8px 12px 0; border-radius: 12px;
  padding: 16px 0; box-shadow: 0 2px 12px rgba(0,0,0,.06); position: relative; z-index: 2;
}
.stat-item { flex: 1; text-align: center; display: flex; flex-direction: column; gap: 2px; }
.stat-item strong { font-size: 18px; color: var(--text-primary); }
.stat-item span { font-size: 11px; color: #999; }

.section-card {
  margin: 12px 12px 0; background: #fff; border-radius: 12px; padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
}
.section-title { font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 14px; }
.icon-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.icon-grid.five-col { grid-template-columns: repeat(5, 1fr); }
.icon-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.icon-circle { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.icon-item span { font-size: 11px; color: #666; text-align: center; line-height: 1.3; }

.menu-list { margin: 12px 12px 0; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
.menu-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px; border-bottom: .5px solid #f5f5f5;
}
.menu-item span { font-size: 14px; color: var(--text-primary); }
.menu-item:last-child { border-bottom: none; }
</style>
