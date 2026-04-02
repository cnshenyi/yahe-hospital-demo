<template>
  <div class="yahe-page">
    <!-- Header -->
    <div class="page-header">
      <button class="back-btn" @click="$emit('navigate', 'yahe-home')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span>{{ lang === 'zh' ? '商保直付' : 'Direct Billing' }}</span>
      <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh' ? 'EN' : '中' }}</div>
    </div>

    <div class="page-body">
      <!-- Hero banner -->
      <div class="hero-card">
        <div class="hero-icon">
          <svg viewBox="0 0 48 48" width="38" height="38" fill="none">
            <path d="M24 4L6 12v12c0 10.5 7.7 20.3 18 22.6C34.3 44.3 42 34.5 42 24V12L24 4z" fill="rgba(214,174,108,0.15)" stroke="#D6AE6C" stroke-width="1.5"/>
            <path d="M16 24l6 6 10-10" stroke="#D6AE6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="hero-text">
          <h2>{{ lang === 'zh' ? '商业保险直付服务' : 'Commercial Insurance Direct Billing' }}</h2>
          <p>{{ lang === 'zh' ? '雅和医疗中心与签约保险公司可直接结算，使患者就诊方便快捷' : 'Graceland Medical Center settles directly with partner insurers for a seamless patient experience' }}</p>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-row">
        <div class="stat-item">
          <span class="stat-num">24</span>
          <span class="stat-label">{{ lang === 'zh' ? '合作保险' : 'Partners' }}</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-num">0</span>
          <span class="stat-label">{{ lang === 'zh' ? '垫付压力' : 'Upfront Cost' }}</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-num">7×24</span>
          <span class="stat-label">{{ lang === 'zh' ? '客服支持' : 'Support' }}</span>
        </div>
      </div>

      <!-- Steps -->
      <div class="section-title">{{ lang === 'zh' ? '直付流程' : 'How It Works' }}</div>
      <div class="steps-row">
        <div class="step-item" v-for="(s, i) in steps" :key="i">
          <div class="step-num">{{ i + 1 }}</div>
          <div class="step-line" v-if="i < steps.length - 1"></div>
          <div class="step-label">{{ lang === 'zh' ? s.cn : s.en }}</div>
        </div>
      </div>

      <!-- Partners title + filter -->
      <div class="section-title">
        {{ lang === 'zh' ? '合作保险机构' : 'Insurance Partners' }}
        <span class="section-count">{{ filteredInsurers.length }}</span>
      </div>
      <div class="cat-tabs">
        <span v-for="cat in categories" :key="cat.id"
          class="cat-tab" :class="{ active: activeCat === cat.id }"
          @click="activeCat = cat.id">
          {{ lang === 'zh' ? cat.cn : cat.en }}
        </span>
      </div>

      <!-- Logo grid — real images -->
      <div class="insurer-grid">
        <div class="insurer-card" v-for="ins in filteredInsurers" :key="ins.file">
          <div class="ins-logo-wrap">
            <img :src="`/images/yahe/insurance/${ins.file}.png`" :alt="ins.name" class="ins-logo-img" />
          </div>
          <span class="ins-name">{{ ins.name }}</span>
          <span class="ins-en">{{ ins.en }}</span>
        </div>
      </div>

      <!-- Tips -->
      <div class="tips-card">
        <div class="tips-title">
          <svg viewBox="0 0 20 20" width="15" height="15" fill="none"><circle cx="10" cy="10" r="9" stroke="#D6AE6C" stroke-width="1.2"/><path d="M10 9v5M10 6.5v.5" stroke="#D6AE6C" stroke-width="1.5" stroke-linecap="round"/></svg>
          {{ lang === 'zh' ? '温馨提示' : 'Important Notes' }}
        </div>
        <ul class="tips-list">
          <li v-for="t in tips" :key="t.cn">{{ lang === 'zh' ? t.cn : t.en }}</li>
        </ul>
      </div>

      <!-- Hotline -->
      <div class="contact-bar">
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#1a0a00" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
        <span>{{ lang === 'zh' ? '商保咨询热线：020-38777688' : 'Insurance Hotline: 020-38777688' }}</span>
      </div>

      <div style="height: 30px"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
defineEmits(['navigate'])
const lang = ref('zh')
const activeCat = ref('all')
function toggleLang() { lang.value = lang.value === 'zh' ? 'en' : 'zh' }

const steps = [
  { cn: '出示保险卡', en: 'Show Insurance Card' },
  { cn: '前台核验', en: 'Front Desk Verify' },
  { cn: '就医诊疗', en: 'Receive Treatment' },
  { cn: '直接结算', en: 'Direct Settlement' },
]

const categories = [
  { id: 'all', cn: '全部', en: 'All' },
  { id: 'life', cn: '寿险', en: 'Life' },
  { id: 'health', cn: '健康险', en: 'Health' },
  { id: 'broker', cn: '经纪/服务', en: 'Broker' },
]

const insurers = [
  { file: 'zhaoshan_xinnuo', name: '招商信诺', en: 'CIGNA CM&B', cat: 'life' },
  { file: 'wellbe', name: '威尔比', en: 'WellBe', cat: 'health' },
  { file: 'msh_china', name: '万欣和', en: 'MSH China', cat: 'health' },
  { file: 'cpic', name: '太平洋健康保险', en: 'CPIC Health', cat: 'health' },
  { file: 'pingan', name: '平安健康保险', en: 'Ping An Health', cat: 'health' },
  { file: 'medilink', name: '中间带', en: 'Medilink-Global', cat: 'broker' },
  { file: 'aia', name: '友邦保险', en: 'AIA China', cat: 'life' },
  { file: 'prosper', name: '柏盛健康', en: 'Prosper', cat: 'health' },
  { file: 'csieth', name: '商保通', en: 'C&I Healthcare', cat: 'broker' },
  { file: 'generali', name: '中意人寿', en: 'Generali China', cat: 'life' },
  { file: 'windstone', name: '风石健康', en: 'Windstone', cat: 'health' },
  { file: 'taikang', name: '泰康人寿', en: 'TaiKang Life', cat: 'life' },
  { file: 'allianz', name: '安联世合', en: 'Allianz', cat: 'health' },
  { file: 'ssc', name: '圣杰', en: 'SSC', cat: 'broker' },
  { file: 'ergo', name: '安顾援助', en: 'ERGO Assistance', cat: 'broker' },
  { file: 'gbg', name: '吉佰吉', en: 'GBG', cat: 'health' },
  { file: 'dthealth', name: '稻田企业服务', en: 'DTHealth', cat: 'broker' },
  { file: 'fosun', name: '复星联合健康保险', en: 'Fosun Health', cat: 'health' },
  { file: 'huatai', name: '华泰保险经纪', en: 'China KE', cat: 'broker' },
  { file: 'jd_allianz', name: '京东安联', en: 'JD Allianz', cat: 'health' },
  { file: 'eaj', name: '康马捷', en: 'EAJ', cat: 'broker' },
  { file: 'hsc', name: '休苏', en: 'HSC', cat: 'broker' },
  { file: 'aig', name: '美亚', en: 'AIG', cat: 'life' },
  { file: 'shengnuo', name: '盛诺一家', en: 'Shengnuo', cat: 'broker' },
]

const filteredInsurers = computed(() =>
  activeCat.value === 'all' ? insurers : insurers.filter(i => i.cat === activeCat.value)
)

const tips = [
  { cn: '就诊前请提前联系保险公司确认保障范围', en: 'Contact your insurer before visit to confirm coverage' },
  { cn: '请携带有效保险卡及身份证件', en: 'Bring valid insurance card and ID documents' },
  { cn: '部分险种需提前获取预授权，请提前告知前台', en: 'Some plans require pre-authorization — inform front desk in advance' },
  { cn: '如有疑问请拨打商保咨询热线 020-38777688', en: 'For inquiries call our insurance hotline: 020-38777688' },
]
</script>

<style scoped>
.yahe-page { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; }
.page-header { display: flex; align-items: center; padding: 54px 16px 12px; background: linear-gradient(180deg, #1a0a00, #2A1500); border-bottom: 1px solid rgba(214,174,108,0.2); }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; }
.page-header span { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 1px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; }
.page-body { padding: 14px 16px; }

.hero-card { display: flex; gap: 14px; align-items: center; background: linear-gradient(135deg, #1E0E00, #3A1F00); border: 1px solid rgba(214,174,108,0.3); border-radius: 16px; padding: 16px; margin-bottom: 14px; }
.hero-icon { flex-shrink: 0; width: 56px; height: 56px; background: rgba(214,174,108,0.08); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(214,174,108,0.2); }
.hero-text h2 { font-size: 15px; font-weight: 800; color: #F0E1B4; margin: 0 0 5px; }
.hero-text p { font-size: 12px; color: rgba(214,174,108,0.7); line-height: 1.6; margin: 0; }

.stats-row { display: flex; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 14px; padding: 12px 0; margin-bottom: 18px; }
.stat-item { flex: 1; text-align: center; }
.stat-num { display: block; font-size: 20px; font-weight: 900; color: #D6AE6C; }
.stat-label { display: block; font-size: 11px; color: rgba(214,174,108,0.6); margin-top: 2px; }
.stat-divider { width: 1px; background: rgba(214,174,108,0.15); margin: 4px 0; }

.section-title { font-size: 15px; font-weight: 700; color: #F0E1B4; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
.section-count { font-size: 12px; color: #D6AE6C; background: rgba(214,174,108,0.12); border: 1px solid rgba(214,174,108,0.25); padding: 1px 8px; border-radius: 10px; font-weight: 600; }

.steps-row { display: flex; align-items: flex-start; margin-bottom: 20px; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.15); border-radius: 14px; padding: 14px 8px; }
.step-item { flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; }
.step-num { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #D6AE6C, #E3BF88); color: #1a0a00; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-bottom: 7px; flex-shrink: 0; }
.step-line { position: absolute; top: 13px; left: 60%; width: 80%; height: 1px; background: linear-gradient(90deg, #D6AE6C, rgba(214,174,108,0.2)); }
.step-label { font-size: 11px; color: rgba(240,225,180,0.8); text-align: center; line-height: 1.4; }

.cat-tabs { display: flex; gap: 8px; margin-bottom: 12px; overflow-x: auto; }
.cat-tabs::-webkit-scrollbar { display: none; }
.cat-tab { flex-shrink: 0; font-size: 12px; padding: 5px 14px; border-radius: 16px; border: 1px solid rgba(214,174,108,0.25); color: rgba(214,174,108,0.7); cursor: pointer; transition: all 0.2s; }
.cat-tab.active { background: linear-gradient(135deg, #D6AE6C, #E3BF88); color: #1a0a00; font-weight: 700; border-color: transparent; }

/* Logo grid — 3列 */
.insurer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 18px; }
.insurer-card { display: flex; flex-direction: column; align-items: center; gap: 5px; background: #fff; border-radius: 12px; padding: 10px 6px 8px; cursor: pointer; border: 1px solid rgba(214,174,108,0.1); transition: box-shadow 0.2s; }
.insurer-card:active { box-shadow: 0 0 0 2px rgba(214,174,108,0.4); }
.ins-logo-wrap { width: 100%; height: 48px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.ins-logo-img { max-width: 100%; max-height: 44px; object-fit: contain; }
.ins-name { font-size: 10px; color: #333; text-align: center; line-height: 1.3; font-weight: 600; }
.ins-en { font-size: 9px; color: #888; text-align: center; }

.tips-card { background: linear-gradient(135deg, #1a0a00, #2A1500); border: 1px solid rgba(214,174,108,0.15); border-radius: 14px; padding: 14px 16px; margin-bottom: 14px; }
.tips-title { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: #D6AE6C; margin-bottom: 10px; }
.tips-list { margin: 0; padding-left: 16px; }
.tips-list li { font-size: 12px; color: rgba(240,225,180,0.75); line-height: 1.8; }

.contact-bar { display: flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #D6AE6C, #E3BF88); border-radius: 12px; padding: 14px 16px; }
.contact-bar span { flex: 1; font-size: 14px; font-weight: 700; color: #1a0a00; }
</style>
