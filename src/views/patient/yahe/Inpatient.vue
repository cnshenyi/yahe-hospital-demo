<template>
  <div class="yahe-page">
    <div class="page-header">
      <button class="back-btn" @click="$emit('navigate', 'yahe-home')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span>{{ lang === 'zh' ? '住院服务' : 'Inpatient Services' }}</span>
      <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh' ? 'EN' : '中' }}</div>
    </div>
    <div class="page-body">
      <div class="room-types">
        <div class="room-card" v-for="r in rooms" :key="r.type">
          <div class="room-header">
            <span class="room-type">{{ lang === 'zh' ? r.typeCn : r.typeEn }}</span>
            <span class="room-price">{{ r.price }}</span>
          </div>
          <div class="room-features">
            <span v-for="f in (lang === 'zh' ? r.featuresCn : r.featuresEn)" :key="f" class="feature-tag">{{ f }}</span>
          </div>
        </div>
      </div>
      <div class="section-title">{{ lang === 'zh' ? '住院服务流程' : 'Admission Process' }}</div>
      <div class="process-list">
        <div class="process-item" v-for="(p, i) in process" :key="i">
          <div class="process-num">{{ i + 1 }}</div>
          <div class="process-text">
            <span class="process-title">{{ lang === 'zh' ? p.cn : p.en }}</span>
            <span class="process-desc">{{ lang === 'zh' ? p.descCn : p.descEn }}</span>
          </div>
        </div>
      </div>
      <div class="info-card">
        <div class="info-title">{{ lang === 'zh' ? '住院须知' : 'Admission Notes' }}</div>
        <p>{{ lang === 'zh' ? '• 请携带有效身份证件及医保卡' : '• Bring valid ID and insurance card' }}</p>
        <p>{{ lang === 'zh' ? '• 住院押金可通过微信/支付宝缴纳' : '• Deposit can be paid via WeChat/Alipay' }}</p>
        <p>{{ lang === 'zh' ? '• 病房提供24小时护理服务' : '• 24-hour nursing service available' }}</p>
        <p>{{ lang === 'zh' ? '• 支持商保直付结算' : '• Insurance direct billing supported' }}</p>
      </div>
      <div style="height: 30px"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['navigate'])
const lang = ref('zh')
function toggleLang() { lang.value = lang.value === 'zh' ? 'en' : 'zh' }
const rooms = [
  { typeCn: '单人间', typeEn: 'Single Room', price: '¥1,200/天', featuresCn: ['独立卫浴', '沙发床', '冰箱', '电视'], featuresEn: ['Private bath', 'Sofa bed', 'Fridge', 'TV'] },
  { typeCn: '双人间', typeEn: 'Double Room', price: '¥800/天', featuresCn: ['共享卫浴', '独立储物', '电视', '空调'], featuresEn: ['Shared bath', 'Private storage', 'TV', 'AC'] },
  { typeCn: '套房', typeEn: 'Suite', price: '¥2,800/天', featuresCn: ['客厅', '独立卫浴', '商务服务', '专属管家'], featuresEn: ['Living room', 'Private bath', 'Business service', 'Butler'] },
]
const process = [
  { cn: '医生开具住院证', en: 'Doctor issues admission order', descCn: '门诊就诊后由医生评估开具', descEn: 'Issued by doctor after outpatient evaluation' },
  { cn: '办理入院手续', en: 'Complete admission procedures', descCn: '携带证件至住院部办理', descEn: 'Bring ID to inpatient department' },
  { cn: '缴纳住院押金', en: 'Pay admission deposit', descCn: '支持多种支付方式', descEn: 'Multiple payment methods accepted' },
  { cn: '入住病房', en: 'Check into ward', descCn: '护士引导至指定病房', descEn: 'Nurse guides you to assigned ward' },
]
</script>
<style scoped>
.yahe-page { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; }
.page-header { display: flex; align-items: center; padding: 54px 16px 12px; background: linear-gradient(180deg, #1a0a00, #2A1500); border-bottom: 1px solid rgba(214,174,108,0.2); }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; }
.page-header span { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 1px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; }
.page-body { padding: 16px; }
.room-types { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
.room-card { background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.25); border-radius: 14px; padding: 14px 16px; }
.room-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.room-type { font-size: 16px; font-weight: 700; color: #F0E1B4; }
.room-price { font-size: 15px; color: #D6AE6C; font-weight: 700; }
.room-features { display: flex; flex-wrap: wrap; gap: 6px; }
.feature-tag { font-size: 11px; color: rgba(214,174,108,0.8); background: rgba(214,174,108,0.1); border: 1px solid rgba(214,174,108,0.2); padding: 3px 8px; border-radius: 6px; }
.section-title { font-size: 15px; font-weight: 700; color: #F0E1B4; margin-bottom: 12px; padding-left: 10px; border-left: 3px solid #D6AE6C; }
.process-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
.process-item { display: flex; gap: 12px; align-items: flex-start; }
.process-num { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #D6AE6C, #E3BF88); color: #1a0a00; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.process-text { flex: 1; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.15); border-radius: 10px; padding: 10px 12px; }
.process-title { display: block; font-size: 14px; color: #F0E1B4; font-weight: 700; margin-bottom: 3px; }
.process-desc { font-size: 12px; color: rgba(214,174,108,0.65); }
.info-card { background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 14px; padding: 16px; }
.info-title { font-size: 14px; font-weight: 700; color: #D6AE6C; margin-bottom: 10px; }
.info-card p { font-size: 13px; color: rgba(240,225,180,0.8); line-height: 1.8; }
</style>
