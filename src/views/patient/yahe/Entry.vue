<template>
  <div class="yahe-entry">
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

    <!-- Nav Bar -->
    <div class="nav-bar">
      <button class="back-btn" @click="$emit('navigate', 'home')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span class="nav-title">国际医疗中心</span>
      <div class="nav-lang" @click="toggleLang">{{ lang === 'zh-CN' ? '简' : lang === 'zh-TW' ? '繁' : 'EN' }}</div>
    </div>

    <!-- Hero -->
    <div class="hero-section">
      <img src="/images/yahe/hero-banner.png" class="hero-img" alt="雅和医疗" />
      <div class="hero-overlay">
        <div class="hero-logo-row">
          <img src="/images/yahe/logo.png" class="hero-logo" alt="logo" />
          <div class="hero-brand">
            <span class="hero-brand-en">GRACELAND MEDICAL CENTER</span>
            <span class="hero-brand-cn">雅和医疗中心</span>
          </div>
        </div>
        <p class="hero-sub">{{ getText('中山大学附属第六医院', '中山大學附屬第六醫院', 'The Sixth Affiliated Hospital, Sun Yat-sen University') }}</p>
      </div>
    </div>

    <!-- Select Cards -->
    <div class="select-section">
      <p class="select-hint">{{ getText('请选择就诊类型', '請選擇就診類型', 'Please select service type') }}</p>
      <div class="select-cards">
        <div class="select-card" @click="$emit('navigate', 'yahe-home')">
          <div class="card-icon-wrap">
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
              <circle cx="24" cy="24" r="20" stroke="#D6AE6C" stroke-width="1.5"/>
              <path d="M24 14v20M14 24h20" stroke="#D6AE6C" stroke-width="2" stroke-linecap="round"/>
              <circle cx="24" cy="24" r="4" fill="#D6AE6C" opacity="0.3"/>
            </svg>
          </div>
          <div class="card-text">
            <strong>{{ getText('国际医疗部', '國際醫療部', 'International Medical Dept.') }}</strong>
            <span>{{ getText('高端国际标准医疗服务', '高端國際標準醫療服務', 'Premium international standard care') }}</span>
          </div>
          <svg class="card-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#D6AE6C" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
        <div class="select-card" @click="$emit('navigate', 'yahe-home')">
          <div class="card-icon-wrap">
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
              <rect x="8" y="8" width="32" height="32" rx="6" stroke="#D6AE6C" stroke-width="1.5"/>
              <path d="M16 24h16M24 16v16" stroke="#D6AE6C" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="card-text">
            <strong>{{ getText('特需医疗中心', '特需醫療中心', 'Special Needs Medical Center') }}</strong>
            <span>{{ getText('专属特需诊疗服务', '專屬特需診療服務', 'Exclusive specialized care services') }}</span>
          </div>
          <svg class="card-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#D6AE6C" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
    </div>

    <!-- Brief Intro -->
    <div class="intro-card">
      <div class="intro-gold-line"></div>
      <p class="intro-text">{{ getText(
        '雅和医疗中心成立于2009年，特约专家200余人，提供门急诊、住院、高端体检及医疗咨询等服务，拥有丰富的涉外医疗经验。',
        '雅和醫療中心成立於2009年，特約專家200餘人，提供門急診、住院、高端體檢及醫療諮詢等服務，擁有豐富的涉外醫療經驗。',
        'Established in 2009, Graceland Medical Center has over 200 top specialists providing outpatient, inpatient, premium health check and medical consultation services.') }}</p>
      <div class="intro-stats">
        <div class="stat-item"><span class="stat-num">200+</span><span class="stat-label">{{ getText('特约专家', '特約專家', 'Specialists') }}</span></div>
        <div class="stat-divider"></div>
        <div class="stat-item"><span class="stat-num">15+</span><span class="stat-label">{{ getText('年服务经验', '年服務經驗', 'Years Experience') }}</span></div>
        <div class="stat-divider"></div>
        <div class="stat-item"><span class="stat-num">24</span><span class="stat-label">{{ getText('合作保险', '合作保險', 'Insurance Partners') }}</span></div>
      </div>
    </div>

    <div style="height: 40px"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['navigate'])
const lang = ref('zh-CN')

function toggleLang() { 
  if (lang.value === 'zh-CN') lang.value = 'zh-TW'
  else if (lang.value === 'zh-TW') lang.value = 'en'
  else lang.value = 'zh-CN'
}

function getText(cn, tw, en) {
  if (lang.value === 'zh-CN') return cn
  if (lang.value === 'zh-TW') return tw
  return en
}
</script>

<style scoped>
.yahe-entry {
  min-height: 100%;
  background: #0D0D0D;
  color: #fff;
  font-family: -apple-system, 'PingFang SC', sans-serif;
}

/* Status Bar */
.ios-status-bar {
  height: 54px; padding: 12px 24px 0; display: flex; justify-content: space-between; align-items: center;
  background: #1a0a00; position: relative; z-index: 10;
}
.sb-time { color: #fff; font-size: 16px; font-weight: 700; letter-spacing: .5px; width: 54px; }
.sb-island { width: 126px; height: 36px; background: #000; border-radius: 18px; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); }
.sb-right { display: flex; align-items: center; gap: 6px; }
.sb-battery { display: flex; align-items: center; }
.sb-battery-body { width: 22px; height: 11px; border: 1.5px solid #fff; border-radius: 2.5px; padding: 1.5px; }
.sb-battery-level { width: 75%; height: 100%; background: #fff; border-radius: 1px; }
.sb-battery-cap { width: 2px; height: 5px; background: #fff; border-radius: 0 1px 1px 0; margin-left: 1px; }

/* Nav */
.nav-bar {
  display: flex; align-items: center; padding: 10px 16px;
  background: #1a0a00; border-bottom: 1px solid rgba(214,174,108,0.2);
}
.back-btn { background: none; border: none; color: #D6AE6C; padding: 4px; cursor: pointer; display: flex; }
.nav-title { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 2px; }
.nav-lang {
  width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px;
  font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-weight: 600;
}

/* Hero */
.hero-section { position: relative; height: 200px; overflow: hidden; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(26,10,0,0.7) 0%, rgba(26,10,0,0.85) 100%);
  display: flex; flex-direction: column; justify-content: center; padding: 20px;
}
.hero-logo-row { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.hero-logo { width: 52px; height: 52px; border-radius: 50%; border: 1.5px solid #D6AE6C; object-fit: cover; }
.hero-brand { display: flex; flex-direction: column; gap: 3px; }
.hero-brand-en { font-size: 9px; color: #D6AE6C; letter-spacing: 2px; font-weight: 500; }
.hero-brand-cn { font-size: 22px; font-weight: 800; color: #F0E1B4; letter-spacing: 4px; }
.hero-sub { font-size: 12px; color: rgba(240,225,180,0.65); letter-spacing: 1px; }

/* Select */
.select-section { padding: 20px 16px 0; }
.select-hint { font-size: 12px; color: rgba(214,174,108,0.7); letter-spacing: 1px; margin-bottom: 12px; text-align: center; }
.select-cards { display: flex; flex-direction: column; gap: 10px; }
.select-card {
  display: flex; align-items: center; gap: 14px;
  background: linear-gradient(135deg, #1E0E00 0%, #2A1500 100%);
  border: 1px solid rgba(214,174,108,0.3); border-radius: 14px;
  padding: 16px; cursor: pointer; transition: all 0.2s;
}
.select-card:active { transform: scale(0.98); border-color: #D6AE6C; }
.card-icon-wrap { width: 52px; height: 52px; background: rgba(214,174,108,0.08); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.card-text { flex: 1; }
.card-text strong { display: block; font-size: 16px; color: #F0E1B4; font-weight: 700; margin-bottom: 4px; }
.card-text span { font-size: 12px; color: rgba(214,174,108,0.65); }
.card-arrow { flex-shrink: 0; }

/* Intro */
.intro-card {
  margin: 16px; background: linear-gradient(135deg, #1E0E00, #2A1500);
  border: 1px solid rgba(214,174,108,0.2); border-radius: 14px; padding: 18px;
}
.intro-gold-line { width: 32px; height: 2px; background: linear-gradient(90deg, #D6AE6C, #E3BF88); border-radius: 1px; margin-bottom: 12px; }
.intro-text { font-size: 13px; color: rgba(240,225,180,0.8); line-height: 1.7; margin-bottom: 16px; }
.intro-stats { display: flex; align-items: center; justify-content: space-around; }
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 3px; }
.stat-num { font-size: 22px; font-weight: 800; color: #D6AE6C; }
.stat-label { font-size: 11px; color: rgba(214,174,108,0.65); }
.stat-divider { width: 1px; height: 32px; background: rgba(214,174,108,0.2); }
</style>
