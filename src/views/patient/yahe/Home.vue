<template>
  <div class="yahe-home">
    <!-- Status Bar -->
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
    <div class="yahe-header">
      <div class="header-top-row">
        <button class="back-btn" @click="$emit('navigate', 'yahe-entry')">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="header-brand">
          <img src="/images/yahe/logo.png" class="header-logo" alt="logo" />
          <div>
            <div class="header-en">GRACELAND MEDICAL CENTER</div>
            <div class="header-cn">雅和医疗中心</div>
          </div>
        </div>
        <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh' ? 'EN' : '中' }}</div>
      </div>
      <p class="header-sub">{{ lang === 'zh' ? '为您提供高品质国际标准医疗服务' : 'Providing premium international standard healthcare' }}</p>
    </div>

    <!-- Scroll Content -->
    <div class="scroll-body">

      <!-- Banner Carousel -->
      <div class="banner-wrap">
        <div class="banner-track" :style="{ transform: `translateX(-${bannerIdx * 100}%)` }">
          <div class="banner-slide">
            <img src="/images/yahe/hero-banner.png" class="banner-img" />
            <div class="banner-caption">
              <span class="banner-tag">{{ lang === 'zh' ? '高端医疗' : 'Premium Care' }}</span>
              <p>{{ lang === 'zh' ? '国际标准 · 专属服务' : 'International Standards · Exclusive Service' }}</p>
            </div>
          </div>
          <div class="banner-slide banner-slide-ins" @click="$emit('navigate', 'yahe-insurance')" style="cursor:pointer">
            <div class="banner-ins-content">
              <div class="ins-title">{{ lang === 'zh' ? '商保直付' : 'Insurance Direct Billing' }}</div>
              <div class="ins-sub">{{ lang === 'zh' ? '24家合作保险，无忧就医' : '24 insurance partners, worry-free care' }}</div>
              <div class="ins-logos">
                <span v-for="ins in insuranceShort" :key="ins" class="ins-tag">{{ ins }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="banner-dots">
          <span v-for="i in 2" :key="i" class="dot" :class="{ active: bannerIdx === i-1 }" @click="bannerIdx = i-1"></span>
        </div>
      </div>

      <!-- 6 Function Grid -->
      <div class="func-section">
        <div class="section-header">
          <div class="gold-bar"></div>
          <span>{{ lang === 'zh' ? '医疗服务' : 'Medical Services' }}</span>
        </div>
        <div class="func-grid">
          <div class="func-item" v-for="f in funcItems" :key="f.key" @click="$emit('navigate', f.route)">
            <div class="func-icon-wrap" :style="{ background: f.bg }">
              <div v-html="f.svg"></div>
            </div>
            <span class="func-name">{{ lang === 'zh' ? f.nameCn : f.nameEn }}</span>
          </div>
        </div>
      </div>

      <!-- Expert Doctors -->
      <div class="expert-section">
        <div class="section-header">
          <div class="gold-bar"></div>
          <span>{{ lang === 'zh' ? '专家团队' : 'Expert Team' }}</span>
          <span class="see-all" @click="$emit('navigate', 'yahe-doctors')">{{ lang === 'zh' ? '查看全部' : 'View All' }} ›</span>
        </div>
        <div class="expert-scroll">
          <div class="expert-card" v-for="d in doctors" :key="d.name" @click="$emit('navigate', 'yahe-doctors')">
            <img :src="d.img" class="expert-avatar" :alt="d.name" />
            <div class="expert-info">
              <span class="expert-name">{{ d.name }}</span>
              <span class="expert-dept">{{ lang === 'zh' ? d.dept : d.deptEn }}</span>
              <span class="expert-title">{{ lang === 'zh' ? d.title : d.titleEn }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Insurance Banner -->
      <div class="ins-section" @click="$emit('navigate', 'yahe-insurance')">
        <div class="ins-banner">
          <div class="ins-left">
            <div class="ins-icon">
              <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
                <path d="M16 3L4 8v8c0 7 5.3 13.5 12 15 6.7-1.5 12-8 12-15V8L16 3z" stroke="#D6AE6C" stroke-width="1.5" fill="rgba(214,174,108,0.1)"/>
                <path d="M11 16l3 3 7-7" stroke="#D6AE6C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="ins-banner-title">{{ lang === 'zh' ? '商保直付服务' : 'Insurance Direct Billing' }}</div>
              <div class="ins-banner-sub">{{ lang === 'zh' ? '24家合作保险，直接结算' : '24 partners, direct settlement' }}</div>
            </div>
          </div>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#D6AE6C" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>

      <!-- Contact -->
      <div class="contact-section">
        <div class="section-header">
          <div class="gold-bar"></div>
          <span>{{ lang === 'zh' ? '联系我们' : 'Contact Us' }}</span>
        </div>
        <div class="contact-card" @click="$emit('navigate', 'yahe-guide')">
          <div class="contact-row">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#D6AE6C" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
            <span class="contact-label">{{ lang === 'zh' ? '服务热线' : 'Hotline' }}</span>
            <span class="contact-value">020-38777688</span>
          </div>
          <div class="contact-row">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#D6AE6C" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span class="contact-label">{{ lang === 'zh' ? '服务时间' : 'Hours' }}</span>
            <span class="contact-value">{{ lang === 'zh' ? '周一至周五 8:00-17:00' : 'Mon-Fri 8:00-17:00' }}</span>
          </div>
        </div>
      </div>

      <div style="height: 40px"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const emit = defineEmits(['navigate'])
const lang = ref('zh')
const bannerIdx = ref(0)
let timer = null

function toggleLang() { lang.value = lang.value === 'zh' ? 'en' : 'zh' }

const insuranceShort = ['平安', '友邦', '太平洋', '安联', '招商信诺', '泰康']

const funcItems = [
  {
    key: 'reg', nameCn: '门诊挂号', nameEn: 'Registration', route: 'yahe-register',
    bg: 'rgba(214,174,108,0.12)',
    svg: `<svg viewBox="0 0 36 36" width="32" height="32" fill="none">
      <rect x="6" y="4" width="24" height="28" rx="3" stroke="#D6AE6C" stroke-width="1.5"/>
      <path d="M12 12h12M12 18h12M12 24h8" stroke="#D6AE6C" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="26" cy="26" r="6" fill="#1E0E00" stroke="#D6AE6C" stroke-width="1.2"/>
      <path d="M26 23v3l2 1" stroke="#D6AE6C" stroke-width="1.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    key: 'inpatient', nameCn: '住院服务', nameEn: 'Inpatient', route: 'yahe-inpatient',
    bg: 'rgba(214,174,108,0.12)',
    svg: `<svg viewBox="0 0 36 36" width="32" height="32" fill="none">
      <rect x="4" y="14" width="28" height="18" rx="3" stroke="#D6AE6C" stroke-width="1.5"/>
      <path d="M4 20h28" stroke="#D6AE6C" stroke-width="1.2"/>
      <rect x="10" y="20" width="6" height="12" rx="1" stroke="#D6AE6C" stroke-width="1.2"/>
      <rect x="20" y="20" width="6" height="12" rx="1" stroke="#D6AE6C" stroke-width="1.2"/>
      <path d="M14 8h8v6h-8z" stroke="#D6AE6C" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M18 8V4" stroke="#D6AE6C" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    key: 'guide', nameCn: '就医指南', nameEn: 'Med. Guide', route: 'yahe-guide',
    bg: 'rgba(214,174,108,0.12)',
    svg: `<svg viewBox="0 0 36 36" width="32" height="32" fill="none">
      <circle cx="18" cy="18" r="13" stroke="#D6AE6C" stroke-width="1.5"/>
      <path d="M18 12v7l4 4" stroke="#D6AE6C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="18" cy="10" r="1.5" fill="#D6AE6C"/>
    </svg>`
  },
  {
    key: 'health', nameCn: '健康管理', nameEn: 'Health Mgmt', route: 'yahe-health',
    bg: 'rgba(214,174,108,0.12)',
    svg: `<svg viewBox="0 0 36 36" width="32" height="32" fill="none">
      <path d="M18 30s-12-8-12-17a8 8 0 0116 0 8 8 0 0116 0c0 9-12 17-12 17" stroke="#D6AE6C" stroke-width="1.5" stroke-linejoin="round" fill="rgba(214,174,108,0.1)"/>
      <path d="M12 18h4l2-4 2 8 2-4h4" stroke="#D6AE6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    key: 'report', nameCn: '报告查询', nameEn: 'Reports', route: 'yahe-report',
    bg: 'rgba(214,174,108,0.12)',
    svg: `<svg viewBox="0 0 36 36" width="32" height="32" fill="none">
      <rect x="6" y="4" width="24" height="28" rx="3" stroke="#D6AE6C" stroke-width="1.5"/>
      <path d="M11 13h14M11 18h10M11 23h7" stroke="#D6AE6C" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="26" cy="27" r="5" fill="#1E0E00" stroke="#D6AE6C" stroke-width="1.2"/>
      <path d="M24 27l1.5 1.5L28 25" stroke="#D6AE6C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    key: 'pay', nameCn: '快速缴费', nameEn: 'Quick Pay', route: 'yahe-pay',
    bg: 'rgba(214,174,108,0.12)',
    svg: `<svg viewBox="0 0 36 36" width="32" height="32" fill="none">
      <rect x="4" y="8" width="28" height="20" rx="4" stroke="#D6AE6C" stroke-width="1.5"/>
      <path d="M4 14h28" stroke="#D6AE6C" stroke-width="1.5"/>
      <rect x="8" y="19" width="8" height="4" rx="1" fill="rgba(214,174,108,0.3)" stroke="#D6AE6C" stroke-width="1"/>
      <circle cx="26" cy="21" r="2" fill="rgba(214,174,108,0.4)"/>
      <circle cx="22" cy="21" r="2" fill="rgba(214,174,108,0.2)" stroke="#D6AE6C" stroke-width="0.8"/>
    </svg>`
  },
]

const doctors = [
  { name: '汪建平', dept: '普通外科', deptEn: 'General Surgery', title: '教授 · 主任医师', titleEn: 'Professor · Chief Physician', img: '/images/yahe/doctors/wangjianping.jpg' },
  { name: '任东林', dept: '肛肠外科', deptEn: 'Colorectal Surgery', title: '教授 · 主任医师', titleEn: 'Professor · Chief Physician', img: '/images/yahe/doctors/rendonglin.jpg' },
  { name: '高羽', dept: '妇产科', deptEn: 'Obstetrics & Gynecology', title: '主任医师 · 博导', titleEn: 'Chief Physician · PhD Supervisor', img: '/images/yahe/doctors/gaoyu.jpg' },
  { name: '黄建林', dept: '风湿免疫科', deptEn: 'Rheumatology', title: '教授 · 主任医师', titleEn: 'Professor · Chief Physician', img: '/images/yahe/doctors/huangjianlin.jpg' },
  { name: '孟晓春', dept: '影像诊断科', deptEn: 'Diagnostic Imaging', title: '教授 · 主任医师', titleEn: 'Professor · Chief Physician', img: '/images/yahe/doctors/mengxiaochun.jpg' },
]
onMounted(() => { timer = setInterval(() => { bannerIdx.value = (bannerIdx.value + 1) % 2 }, 4000) })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.yahe-home { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; }

.ios-status-bar { height: 54px; padding: 12px 24px 0; display: flex; justify-content: space-between; align-items: center; background: #1a0a00; }
.sb-time { color: #fff; font-size: 16px; font-weight: 700; width: 54px; }
.sb-island { width: 126px; height: 36px; background: #000; border-radius: 18px; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); }
.sb-right { display: flex; align-items: center; gap: 6px; }
.sb-battery { display: flex; align-items: center; }
.sb-battery-body { width: 22px; height: 11px; border: 1.5px solid #fff; border-radius: 2.5px; padding: 1.5px; }
.sb-battery-level { width: 75%; height: 100%; background: #fff; border-radius: 1px; }
.sb-battery-cap { width: 2px; height: 5px; background: #fff; border-radius: 0 1px 1px 0; margin-left: 1px; }

/* Header */
.yahe-header {
  background: linear-gradient(180deg, #1a0a00 0%, #2A1500 100%);
  padding: 12px 16px 16px;
  border-bottom: 1px solid rgba(214,174,108,0.25);
}
.header-top-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; flex-shrink: 0; }
.header-brand { flex: 1; display: flex; align-items: center; gap: 10px; }
.header-logo { width: 38px; height: 38px; border-radius: 50%; border: 1px solid #D6AE6C; object-fit: cover; }
.header-en { font-size: 8px; color: #D6AE6C; letter-spacing: 1.5px; }
.header-cn { font-size: 16px; font-weight: 800; color: #F0E1B4; letter-spacing: 3px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; flex-shrink: 0; }
.header-sub { font-size: 12px; color: rgba(214,174,108,0.6); letter-spacing: 1px; padding-left: 48px; }

/* Scroll */
.scroll-body { overflow-y: auto; }

/* Banner */
.banner-wrap { position: relative; margin: 12px; border-radius: 14px; overflow: hidden; height: 160px; }
.banner-track { display: flex; transition: transform 0.5s ease; height: 100%; }
.banner-slide { min-width: 100%; position: relative; }
.banner-img { width: 100%; height: 160px; object-fit: cover; }
.banner-caption {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(0deg, rgba(26,10,0,0.85), transparent);
  padding: 12px 16px;
}
.banner-tag { font-size: 10px; background: #D6AE6C; color: #1a0a00; padding: 2px 8px; border-radius: 4px; font-weight: 700; margin-right: 8px; }
.banner-caption p { display: inline; font-size: 13px; color: #F0E1B4; font-weight: 600; }
.banner-slide-ins { background: linear-gradient(135deg, #1E0E00, #3A1F00); display: flex; align-items: center; }
.banner-ins-content { padding: 20px; }
.ins-title { font-size: 18px; font-weight: 800; color: #F0E1B4; margin-bottom: 6px; }
.ins-sub { font-size: 12px; color: rgba(214,174,108,0.7); margin-bottom: 12px; }
.ins-logos { display: flex; flex-wrap: wrap; gap: 6px; }
.ins-tag { font-size: 10px; color: #D6AE6C; border: 1px solid rgba(214,174,108,0.4); padding: 2px 8px; border-radius: 10px; }
.banner-dots { position: absolute; bottom: 8px; right: 12px; display: flex; gap: 5px; }
.dot { width: 6px; height: 6px; border-radius: 3px; background: rgba(214,174,108,0.4); cursor: pointer; transition: all 0.3s; }
.dot.active { width: 18px; background: #D6AE6C; }

/* Section Header */
.section-header { display: flex; align-items: center; gap: 8px; padding: 16px 16px 10px; }
.gold-bar { width: 3px; height: 16px; background: linear-gradient(180deg, #D6AE6C, #E3BF88); border-radius: 2px; }
.section-header span { font-size: 15px; font-weight: 700; color: #F0E1B4; flex: 1; }
.see-all { font-size: 12px; color: #D6AE6C; flex: none !important; cursor: pointer; }

/* Func Grid */
.func-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 0 12px; }
.func-item { display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; }
.func-icon-wrap {
  width: 60px; height: 60px; border-radius: 16px;
  border: 1px solid rgba(214,174,108,0.25);
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.func-item:active .func-icon-wrap { border-color: #D6AE6C; transform: scale(0.95); }
.func-name { font-size: 12px; color: rgba(240,225,180,0.85); font-weight: 500; text-align: center; }

/* Experts */
.expert-section { margin-top: 4px; }
.expert-scroll { display: flex; gap: 10px; padding: 0 12px; overflow-x: auto; }
.expert-scroll::-webkit-scrollbar { display: none; }
.expert-card {
  flex-shrink: 0; width: 130px;
  background: linear-gradient(180deg, #1E0E00, #2A1500);
  border: 1px solid rgba(214,174,108,0.2); border-radius: 14px;
  overflow: hidden; cursor: pointer; transition: all 0.2s;
}
.expert-card:active { border-color: #D6AE6C; transform: scale(0.97); }
.expert-avatar { width: 100%; height: 150px; object-fit: cover; object-position: top; display: block; }
.expert-info { padding: 7px 8px 9px; }
.expert-name { display: block; font-size: 14px; font-weight: 700; color: #F0E1B4; margin-bottom: 2px; }
.expert-dept { display: block; font-size: 11px; color: #D6AE6C; margin-bottom: 2px; }
.expert-title { display: block; font-size: 10px; color: rgba(214,174,108,0.6); line-height: 1.4; }

/* Insurance Banner */
.ins-section { padding: 4px 12px 0; }
.ins-banner {
  display: flex; align-items: center; justify-content: space-between;
  background: linear-gradient(135deg, #1E0E00, #2A1500);
  border: 1px solid rgba(214,174,108,0.3); border-radius: 14px;
  padding: 14px 16px; cursor: pointer;
}
.ins-left { display: flex; align-items: center; gap: 12px; }
.ins-icon { width: 44px; height: 44px; background: rgba(214,174,108,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.ins-banner-title { font-size: 15px; font-weight: 700; color: #F0E1B4; margin-bottom: 3px; }
.ins-banner-sub { font-size: 12px; color: rgba(214,174,108,0.65); }

/* Contact */
.contact-section { margin-top: 4px; }
.contact-card { margin: 0 12px; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 14px; padding: 14px 16px; }
.contact-row { display: flex; align-items: center; gap: 10px; padding: 6px 0; }
.contact-row + .contact-row { border-top: 1px solid rgba(214,174,108,0.1); }
.contact-label { font-size: 13px; color: rgba(214,174,108,0.7); flex: 1; }
.contact-value { font-size: 13px; color: #F0E1B4; font-weight: 600; }
</style>
