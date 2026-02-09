<template>
  <div class="doctor-workstation">
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

      <!-- Header -->
      <div class="doc-header">
        <div class="header-bg">
          <div class="geo-line g1"></div>
          <div class="geo-line g2"></div>
          <div class="geo-line g3"></div>
        </div>
        <div class="doc-info">
          <img src="/doctor.png" class="doc-avatar" alt="doctor" />
          <div class="doc-text">
            <div class="doc-name-row">
              <span class="doc-name">李啸峰</span>
              <span class="doc-title">主任医师</span>
            </div>
            <span class="doc-hospital">中山大学附属第五医院</span>
            <div class="doc-stats-row">
              <span>今日接诊数：<strong>5</strong></span>
              <span>今日剩余号源：<strong>23</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scrollable Content -->
    <div class="scroll-content">
    <div class="clinic-card">
      <div class="card-header">
        <strong>我的诊室</strong>
        <span class="card-link">出诊设置 ></span>
      </div>
      <div class="clinic-grid">
        <div class="clinic-item" v-for="c in clinicItems" :key="c.name">
          <div class="clinic-icon" :style="{ background: c.bg }">
            <div v-html="c.svg"></div>
            <div v-if="c.badge" class="item-badge">{{ c.badge }}</div>
          </div>
          <span>{{ c.name }}</span>
        </div>
      </div>
    </div>

    <!-- Doctor-Patient Communication -->
    <div class="comm-btn">
      <span>医患沟通</span>
      <div class="comm-badge">6</div>
    </div>

    <!-- Quick Entry -->
    <div class="quick-card">
      <strong class="card-title">快捷入口</strong>
      <div class="quick-grid">
        <div class="quick-item" v-for="q in quickItems" :key="q.name">
          <div class="quick-icon">
            <div v-html="q.svg"></div>
          </div>
          <span>{{ q.name }}</span>
        </div>
      </div>
    </div>

    <div style="height: 130px"></div>
    </div><!-- end scroll-content -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  themeColors,
  iconDrOnline, iconDrTeam, iconDrLab, iconDrRefund, iconDrRecord, iconDrPrenatal,
  iconDrReview, iconDrQR, iconDrHistory, iconDrRx, iconDrHospital, iconDrFollowup, iconDrPulse, iconDrSpace
} from '../../utils/icons.js'

const props = defineProps({ theme: { type: String, default: 'A' }, side: String })

const clinicItems = computed(() => {
  const t = props.theme
  const bg = themeColors(t).bg
  return [
    { name: '在线门诊', badge: 6, bg, svg: iconDrOnline(t) },
    { name: '团队问诊', badge: 0, bg, svg: iconDrTeam(t) },
    { name: '检查检验', badge: 0, bg, svg: iconDrLab(t) },
    { name: '退费申请', badge: 0, bg, svg: iconDrRefund(t) },
    { name: '病历申请', badge: 0, bg, svg: iconDrRecord(t) },
    { name: '产前诊断', badge: 0, bg, svg: iconDrPrenatal(t) },
  ]
})

const quickItems = [
  { name: '我的评价', svg: iconDrReview() },
  { name: '我的二维码', svg: iconDrQR() },
  { name: '历史申请单', svg: iconDrHistory() },
  { name: '历史处方', svg: iconDrRx() },
  { name: '住院管理', svg: iconDrHospital() },
  { name: '我的随访', svg: iconDrFollowup() },
  { name: '我的动态', svg: iconDrPulse() },
  { name: '数字空间', svg: iconDrSpace() },
]
</script>

<style scoped>
.doctor-workstation { height: 100%; display: flex; flex-direction: column; background: var(--bg); position: relative; }
.doctor-workstation::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 260px;
  background: var(--gradient-header); z-index: 0; pointer-events: none;
}

.fixed-top { flex-shrink: 0; z-index: 10; background: transparent; position: relative; }

.ios-status-bar {
  height: 54px; padding: 12px 24px 0; display: flex; justify-content: space-between; align-items: center;
  background: transparent; position: relative; z-index: 10;
}
.sb-time { color: #fff; font-size: 16px; font-weight: 700; width: 54px; }
.sb-island { width: 126px; height: 36px; background: #000; border-radius: 18px; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); }
.sb-right { display: flex; align-items: center; gap: 6px; }
.sb-battery { display: flex; align-items: center; }
.sb-battery-body { width: 22px; height: 11px; border: 1.5px solid #fff; border-radius: 2.5px; padding: 1.5px; }
.sb-battery-level { width: 75%; height: 100%; background: #fff; border-radius: 1px; }
.sb-battery-cap { width: 2px; height: 5px; background: #fff; border-radius: 0 1px 1px 0; margin-left: 1px; }

.doc-header {
  background: transparent; padding: 12px 16px 24px; position: relative; overflow: hidden;
}

.scroll-content { flex: 1; overflow-y: auto; overflow-x: hidden; padding-top: 0; position: relative; z-index: 1; }
.header-bg { position: absolute; inset: 0; pointer-events: none; }
.geo-line { position: absolute; border: 1px solid rgba(255,255,255,.06); border-radius: 50%; }
.geo-line.g1 { width: 200px; height: 200px; top: -60px; right: -40px; }
.geo-line.g2 { width: 140px; height: 140px; top: 0; right: 0; border-color: rgba(255,255,255,.04); }
.geo-line.g3 { width: 100px; height: 100px; bottom: -20px; left: -30px; border-color: rgba(255,255,255,.05); }

.doc-info { display: flex; gap: 14px; align-items: center; position: relative; z-index: 2; }
.doc-avatar { width: 56px; height: 56px; border-radius: 50%; border: 2px solid rgba(255,255,255,.5); object-fit: cover; }
.doc-text { display: flex; flex-direction: column; gap: 3px; }
.doc-name-row { display: flex; align-items: center; gap: 8px; }
.doc-name { font-size: 20px; font-weight: 700; color: #fff; }
.doc-title { font-size: 12px; color: #fff; background: rgba(255,255,255,.25); padding: 2px 8px; border-radius: 4px; }
.doc-hospital { font-size: 13px; color: rgba(255,255,255,.8); }
.doc-stats-row { display: flex; gap: 16px; font-size: 12px; color: rgba(255,255,255,.75); margin-top: 2px; }
.doc-stats-row strong { color: #fff; }

.clinic-card {
  margin: 12px 12px 0; background: #fff; border-radius: 14px; padding: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,.08); position: relative; z-index: 2;
}
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.card-header strong { font-size: 17px; color: var(--text-primary); }
.card-link { font-size: 13px; color: var(--primary); }
.clinic-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px 8px; }
.clinic-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.clinic-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; position: relative; }
.clinic-item span { font-size: 12px; color: #555; }
.item-badge {
  position: absolute; top: -4px; right: -4px; min-width: 16px; height: 16px;
  background: #FF4444; border-radius: 8px; font-size: 10px; color: #fff;
  display: flex; align-items: center; justify-content: center; padding: 0 3px; font-weight: 600;
}

.comm-btn {
  margin: 12px 12px 0; background: var(--primary); border-radius: 12px; padding: 14px;
  text-align: center; color: #fff; font-size: 16px; font-weight: 600; position: relative;
  box-shadow: 0 4px 12px rgba(var(--primary-rgb),.3);
}
.comm-badge {
  position: absolute; top: -6px; right: 12px; min-width: 20px; height: 20px;
  background: #FF4444; border-radius: 10px; font-size: 11px; color: #fff;
  display: flex; align-items: center; justify-content: center; padding: 0 5px;
}

.quick-card {
  margin: 12px 12px 0; background: #fff; border-radius: 14px; padding: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
}
.card-title { font-size: 17px; color: var(--text-primary); display: block; margin-bottom: 16px; }
.quick-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px 8px; }
.quick-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.quick-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; }
.quick-item span { font-size: 11px; color: #666; text-align: center; }

.android-nav {
  position: absolute; bottom: 0; left: 0; right: 0; height: 36px; background: #f5f5f5;
  display: flex; justify-content: center; align-items: center; gap: 60px; color: #999; font-size: 18px;
}
</style>
