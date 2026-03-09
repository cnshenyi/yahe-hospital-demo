<template>
  <div class="patient-home">
    <!-- Fixed Top: Status Bar + Header (nav + user) -->
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

      <!-- Header (fixed part: nav + user) -->
      <div class="header-fixed">
        <div class="header-bg">
          <div class="header-pattern p1"></div>
          <div class="header-pattern p2"></div>
          <div class="header-pattern p3"></div>
          <div class="header-leaf leaf1"></div>
          <div class="header-leaf leaf2"></div>
        </div>

        <!-- Nav Row: logo + title + capsule -->
        <div class="nav-row">
          <img src="/emblem.png" class="hospital-logo" alt="logo" />
          <div class="app-title-capsule">
            <span class="title-main">龙岗耳鼻喉</span>
          </div>
          <div class="wechat-capsule">
            <span class="cap-dots">···</span>
            <span class="cap-divider"></span>
            <span class="cap-circle">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
            </span>
          </div>
        </div>

        <!-- User Row -->
        <div class="user-row">
          <span class="user-name">沈先生</span>
          <span class="switch-tag">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="white" stroke-width="1.5"><path d="M4 6l4 4 4-4"/></svg>
            切换
          </span>
          <div class="user-right">
            <span class="care-mode">关怀模式</span>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="white" opacity=".85"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/></svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Scrollable Content -->
    <div class="scroll-content">
      <!-- Banner -->
      <div class="banner-section">
        <div class="banner-wrap">
          <div class="banner-track" :style="{ transform: `translateX(-${bannerIdx * 100}%)` }">
            <div class="banner-slide" v-for="(b, i) in banners" :key="i">
              <img :src="b.src" :alt="b.alt" class="banner-img" />
            </div>
          </div>
          <div class="banner-indicators">
            <span v-for="(b, i) in banners" :key="i" class="indicator" :class="{ active: bannerIdx === i }"></span>
          </div>
        </div>
      </div>

    <!-- Notice -->
    <div class="notice-bar">
      <div class="notice-icon-wrap">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--primary)"><path d="M3 10c0 3.866 3.134 7 7 7h1v3l4-4c2.21-1.5 3-4 3-6 0-3.866-3.134-7-7-7S3 6.134 3 10z"/></svg>
      </div>
      <span class="notice-text">不排队！自助出院办理指南</span>
      <span class="notice-link">查看公告</span>
    </div>

    <!-- Main Actions -->
    <div class="main-actions">
      <div class="action-big" @click="void 0">
        <div class="action-big-icon" v-html="mainIcons.appointment"></div>
        <strong>预约挂号</strong>
      </div>
      <div class="action-big" @click="void 0">
        <div class="action-big-icon" v-html="mainIcons.clinic"></div>
        <strong>在线门诊</strong>
      </div>
    </div>

    <!-- Quick Functions 4-grid -->
    <div class="quick-grid">
      <div class="quick-item" v-for="q in quickFuncs" :key="q.name">
        <div class="quick-icon">
          <div v-html="q.svg"></div>
        </div>
        <span>{{ q.name }}</span>
      </div>
    </div>

    <!-- Section Tabs -->
    <div class="section-card">
      <div class="section-tabs">
        <span v-for="(t, i) in tabs" :key="t.name" class="stab" :class="{ active: activeTab === i }" @click="activeTab = i">{{ t.name }}</span>
      </div>
      <div class="section-grid">
        <div class="sgrid-item" v-for="item in tabs[activeTab].items" :key="item.name">
          <div class="sgrid-icon">
            <div v-html="item.svg"></div>
          </div>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>

    <!-- Nursing Banner -->
    <div class="nursing-section">
      <div class="nursing-banner">
        <img src="/images/nursing-banner.png" alt="互联网护理" class="nursing-img" />
        <div class="nursing-overlay">
          <div class="nursing-badge">特色服务</div>
          <h3>互联网+护理服务</h3>
          <p>专业护士上门，居家护理无忧</p>
        </div>
      </div>
    </div>

    <!-- Bottom spacer for tab bar -->
    <div style="height: 120px"></div>
    </div><!-- end scroll-content -->
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  themeColors,
  iconCheckin, iconPayment, iconReport, iconCalendar,
  iconAppointment, iconOnlineClinic,
  iconRegRecord, iconInsurance, iconLabOrder, iconEmbryoFee,
  iconMaternity, iconPhysical, iconSlice, iconPathology,
  iconHospitalPay, iconHospitalList, iconDischarge, iconDailyList
} from '../../utils/icons.js'

const props = defineProps({ theme: { type: String, default: 'A' }, side: String })

const bannerIdx = ref(0)
let timer = null

const banners = [
  { src: '/images/banner1.png', alt: '门诊自助缴费' },
  { src: '/images/banner2.png', alt: '在线问诊' },
]

const tc = computed(() => themeColors(props.theme))

const mainIcons = computed(() => ({
  appointment: iconAppointment(props.theme),
  clinic: iconOnlineClinic(props.theme),
}))

const quickFuncs = [
  { name: '门诊报到', svg: iconCheckin() },
  { name: '门诊缴费', svg: iconPayment() },
  { name: '报告查询', svg: iconReport() },
  { name: '检查预约', svg: iconCalendar() },
]

const activeTab = ref(0)

const tabs = computed(() => {
  const t = props.theme
  const bg = tc.value.bg
  return [
    {
      name: '门诊',
      items: [
        { name: '挂号记录', bg, svg: iconRegRecord(t) },
        { name: '医保定点', bg, svg: iconInsurance(t) },
        { name: '检查检验开单', bg, svg: iconLabOrder(t) },
        { name: '生殖胚胎续费', bg, svg: iconEmbryoFee(t) },
        { name: '产科建档', bg, svg: iconMaternity(t) },
        { name: '体检预约', bg, svg: iconPhysical(t) },
        { name: '石蜡切片申请', bg, svg: iconSlice(t) },
        { name: '病理会诊', bg, svg: iconPathology(t) },
      ]
    },
    {
      name: '住院',
      items: [
        { name: '住院缴费', bg, svg: iconHospitalPay(t) },
        { name: '住院清单', bg, svg: iconHospitalList(t) },
        { name: '出院办理', bg, svg: iconDischarge(t) },
        { name: '住院日清单', bg, svg: iconDailyList(t) },
      ]
    },
    {
      name: '综合',
      items: [
        { name: '体检预约', bg, svg: iconPhysical(t) },
        { name: '产科建档', bg, svg: iconMaternity(t) },
        { name: '石蜡切片申请', bg, svg: iconSlice(t) },
        { name: '病理会诊', bg, svg: iconPathology(t) },
      ]
    }
  ]
})

onMounted(() => {
  timer = setInterval(() => {
    bannerIdx.value = (bannerIdx.value + 1) % banners.length
  }, 3500)
})
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>
<style scoped>
.patient-home { height: 100%; display: flex; flex-direction: column; background: var(--bg); position: relative; }
.patient-home::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 380px;
  background: var(--gradient-header); z-index: 0; pointer-events: none;
}

/* Fixed Top */
.fixed-top { flex-shrink: 0; z-index: 10; background: transparent; position: relative; }

/* iOS Status Bar */
.ios-status-bar {
  height: 54px; padding: 12px 24px 0; display: flex; justify-content: space-between; align-items: center;
  background: transparent; position: relative; z-index: 10;
}
.sb-time { color: #fff; font-size: 16px; font-weight: 700; letter-spacing: .5px; width: 54px; }
.sb-island {
  width: 126px; height: 36px; background: #000; border-radius: 18px;
  position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
}
.sb-right { display: flex; align-items: center; gap: 6px; }
.sb-battery { display: flex; align-items: center; }
.sb-battery-body { width: 22px; height: 11px; border: 1.5px solid #fff; border-radius: 2.5px; padding: 1.5px; }
.sb-battery-level { width: 75%; height: 100%; background: #fff; border-radius: 1px; }
.sb-battery-cap { width: 2px; height: 5px; background: #fff; border-radius: 0 1px 1px 0; margin-left: 1px; }

/* Header Fixed */
.header-fixed {
  background: transparent; padding: 0 16px 12px; position: relative; overflow: hidden;
}

/* Scrollable Content */
.scroll-content { flex: 1; overflow-y: auto; overflow-x: hidden; position: relative; z-index: 1; }

/* Banner Section */
.banner-section { background: transparent; padding: 0 16px 16px; position: relative; }
.header-bg { position: absolute; inset: 0; pointer-events: none; }
.header-pattern { position: absolute; border-radius: 50%; border: 1px solid rgba(255,255,255,.07); }
.header-pattern.p1 { width: 220px; height: 220px; top: -80px; right: -50px; }
.header-pattern.p2 { width: 140px; height: 140px; top: 10px; right: 10px; border-color: rgba(255,255,255,.04); }
.header-pattern.p3 { width: 90px; height: 90px; bottom: 20px; left: -30px; border-color: rgba(255,255,255,.05); }
.header-leaf { position: absolute; border-radius: 0 50% 50% 50%; background: rgba(255,255,255,.035); transform: rotate(45deg); }
.header-leaf.leaf1 { width: 70px; height: 70px; top: 20px; right: 70px; }
.header-leaf.leaf2 { width: 45px; height: 45px; bottom: 40px; left: 15px; }

/* Nav Row */
.nav-row {
  display: flex; align-items: center; justify-content: center; padding: 8px 0 14px;
  position: relative; z-index: 2;
}
.hospital-logo {
  height: 30px; width: 30px; position: absolute; left: 0;
  object-fit: contain; border-radius: 50%;
}
.app-title-capsule {
  display: flex; align-items: center; gap: 0;
  background: rgba(255,255,255,.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,.25); border-radius: 16px;
  padding: 0 18px 0 14px; height: 30px;
}
.title-i { font-size: 15px; font-weight: 300; color: rgba(255,255,255,.85); font-style: italic; font-family: 'Georgia', serif; margin-right: 3px; }
.title-main { font-size: 15px; font-weight: 700; color: #fff; letter-spacing: 4px; }
.wechat-capsule {
  position: absolute; right: 0; display: flex; align-items: center;
  background: rgba(255,255,255,.25); border: .5px solid rgba(255,255,255,.35);
  border-radius: 16px; height: 30px; padding: 0 2px; backdrop-filter: blur(8px);
}
.cap-dots { padding: 0 9px; font-size: 20px; color: #fff; letter-spacing: 3px; line-height: 1; }
.cap-divider { width: .5px; height: 16px; background: rgba(255,255,255,.45); }
.cap-circle { padding: 0 7px; display: flex; align-items: center; }

/* User Row */
.user-row {
  display: flex; align-items: center; gap: 8px; padding: 2px 0 14px; position: relative; z-index: 2;
}
.user-name { color: #fff; font-size: 16px; font-weight: 600; }
.switch-tag {
  display: flex; align-items: center; gap: 2px; font-size: 11px; color: #fff;
  background: rgba(255,255,255,.2); padding: 3px 10px 3px 6px; border-radius: 12px;
}
.user-right { margin-left: auto; display: flex; align-items: center; gap: 10px; }
.care-mode {
  font-size: 12px; color: var(--primary-dark); background: rgba(255,255,255,.85);
  padding: 4px 12px; border-radius: 14px; font-weight: 600;
}

/* Banner */
.banner-wrap {
  position: relative; z-index: 2; border-radius: 12px; overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,.12);
}
.banner-track { display: flex; transition: transform .5s ease; }
.banner-slide { min-width: 100%; }
.banner-img { width: 100%; height: 130px; object-fit: cover; display: block; }
.banner-indicators {
  position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 5px;
}
.indicator { width: 6px; height: 6px; border-radius: 3px; background: rgba(255,255,255,.5); transition: all .3s; }
.indicator.active { width: 18px; background: #fff; }

/* Notice */
.notice-bar {
  margin: 8px 12px 0; display: flex; align-items: center; background: #fff;
  border-radius: 10px; padding: 8px 12px; box-shadow: 0 1px 6px rgba(0,0,0,.05);
}
.notice-icon-wrap { margin-right: 8px; flex-shrink: 0; display: flex; }
.notice-text { flex: 1; font-size: 13px; color: #333; font-weight: 500; }
.notice-link { font-size: 12px; color: var(--primary); font-weight: 600; white-space: nowrap; }

/* Main Actions */
.main-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 8px 12px 0; }
.action-big {
  background: #fff; border-radius: 12px; padding: 14px 12px; display: flex; align-items: center;
  gap: 10px; box-shadow: 0 2px 10px rgba(0,0,0,.05); cursor: pointer; transition: transform .15s;
}
.action-big:active { transform: scale(.97); }
.action-big-icon { width: 48px; height: 48px; flex-shrink: 0; }
.action-big-icon :deep(svg) { width: 48px; height: 48px; }
.action-big strong { font-size: 16px; color: var(--text-primary); }

/* Quick Grid */
.quick-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin: 8px 12px 0;
  background: #fff; border-radius: 12px; padding: 12px 8px; box-shadow: 0 2px 10px rgba(0,0,0,.05);
}
.quick-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.quick-icon { width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.quick-item span { font-size: 11px; color: #555; font-weight: 500; }

/* Section Card */
.section-card {
  margin: 8px 12px 0; background: #fff; border-radius: 12px;
  padding: 12px; box-shadow: 0 2px 10px rgba(0,0,0,.05);
}
.section-tabs { display: flex; gap: 0; margin-bottom: 12px; background: #F5F5F5; border-radius: 8px; padding: 3px; }
.stab {
  flex: 1; text-align: center; font-size: 13px; color: #999; padding: 7px 0;
  border-radius: 6px; cursor: pointer; font-weight: 500; transition: all .2s;
}
.stab.active { background: #fff; color: var(--primary); font-weight: 700; box-shadow: 0 1px 4px rgba(0,0,0,.08); }
.section-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px 4px; }
.sgrid-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.sgrid-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.sgrid-item span { font-size: 11px; color: #666; text-align: center; line-height: 1.3; }

/* Nursing Section */
.nursing-section { margin: 8px 12px 0; }
.nursing-banner {
  position: relative; border-radius: 12px; overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,.1); height: 130px;
}
.nursing-img { width: 100%; height: 100%; object-fit: cover; }
.nursing-overlay {
  position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 100%);
  display: flex; flex-direction: column; justify-content: center; padding: 16px 20px;
}
.nursing-badge {
  font-size: 10px; color: #fff; background: var(--primary); padding: 2px 8px;
  border-radius: 4px; align-self: flex-start; margin-bottom: 6px; font-weight: 600;
}
.nursing-overlay h3 { color: #fff; font-size: 17px; font-weight: 700; margin-bottom: 4px; }
.nursing-overlay p { color: rgba(255,255,255,.85); font-size: 12px; }
</style>
