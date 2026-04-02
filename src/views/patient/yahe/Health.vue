<template>
  <div class="yahe-page">
    <div class="page-header">
      <button class="back-btn" @click="$emit('navigate', 'yahe-home')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span>{{ lang === 'zh' ? '健康管理' : 'Health Management' }}</span>
      <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh' ? 'EN' : '中' }}</div>
    </div>
    <div class="page-body">
      <div class="health-tabs">
        <span v-for="(t, i) in tabs" :key="t" class="htab" :class="{ active: activeTab === i }" @click="activeTab = i">{{ t }}</span>
      </div>
      <!-- 健康体检 -->
      <div v-if="activeTab === 0">
        <div class="pkg-card" v-for="p in packages" :key="p.name">
          <div class="pkg-header">
            <span class="pkg-name">{{ lang === 'zh' ? p.nameCn : p.nameEn }}</span>
            <span class="pkg-price">{{ p.price }}</span>
          </div>
          <p class="pkg-desc">{{ lang === 'zh' ? p.descCn : p.descEn }}</p>
          <div class="pkg-items">
            <span v-for="item in (lang === 'zh' ? p.itemsCn : p.itemsEn)" :key="item" class="pkg-item">✓ {{ item }}</span>
          </div>
          <button class="book-btn" @click="$emit('navigate', 'yahe-register')">{{ lang === 'zh' ? '立即预约' : 'Book Now' }}</button>
        </div>
      </div>
      <!-- 预防接种 -->
      <div v-if="activeTab === 1">
        <div class="vaccine-card" v-for="v in vaccines" :key="v.name">
          <div class="vaccine-header">
            <span class="vaccine-name">{{ lang === 'zh' ? v.nameCn : v.nameEn }}</span>
            <span class="vaccine-price">{{ v.price }}</span>
          </div>
          <p class="vaccine-desc">{{ lang === 'zh' ? v.descCn : v.descEn }}</p>
        </div>
        <div class="info-tip">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#D6AE6C" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          <span>{{ lang === 'zh' ? '接种前请致电 020-38777688 预约' : 'Call 020-38777688 to book vaccination' }}</span>
        </div>
      </div>
      <div style="height: 30px"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const emit = defineEmits(['navigate'])
const lang = ref('zh')
const activeTab = ref(0)
function toggleLang() { lang.value = lang.value === 'zh' ? 'en' : 'zh' }
const tabs = computed(() => lang.value === 'zh' ? ['健康体检', '预防接种'] : ['Health Check', 'Vaccination'])
const packages = [
  { nameCn: '尊享体检套餐', nameEn: 'Premium Health Check', price: '¥3,800', descCn: '适合35岁以上人群，全面筛查常见疾病', descEn: 'Comprehensive screening for adults 35+', itemsCn: ['血常规全套', '肿瘤标志物', '心脏彩超', '胃肠镜', 'CT检查'], itemsEn: ['Full blood panel', 'Tumor markers', 'Cardiac echo', 'Endoscopy', 'CT scan'] },
  { nameCn: '精英体检套餐', nameEn: 'Elite Health Check', price: '¥6,800', descCn: '高端全面体检，含基因检测', descEn: 'Premium comprehensive check with genetic testing', itemsCn: ['全套血液检查', '基因检测', '全身MRI', '心脏CT', '眼底检查'], itemsEn: ['Full blood work', 'Genetic testing', 'Full-body MRI', 'Cardiac CT', 'Fundus exam'] },
]
const vaccines = [
  { nameCn: '九价HPV疫苗', nameEn: '9-valent HPV Vaccine', price: '¥1,398/针', descCn: '预防宫颈癌，适合9-45岁女性', descEn: 'Prevents cervical cancer, for females 9-45' },
  { nameCn: '带状疱疹疫苗', nameEn: 'Shingles Vaccine', price: '¥1,680/针', descCn: '预防带状疱疹，适合50岁以上人群', descEn: 'Prevents shingles, for adults 50+' },
  { nameCn: '流感疫苗', nameEn: 'Influenza Vaccine', price: '¥168/针', descCn: '每年接种，预防季节性流感', descEn: 'Annual vaccination against seasonal flu' },
  { nameCn: '肺炎球菌疫苗', nameEn: 'Pneumococcal Vaccine', price: '¥680/针', descCn: '预防肺炎球菌感染', descEn: 'Prevents pneumococcal infections' },
]
</script>
<style scoped>
.yahe-page { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; }
.page-header { display: flex; align-items: center; padding: 54px 16px 12px; background: linear-gradient(180deg, #1a0a00, #2A1500); border-bottom: 1px solid rgba(214,174,108,0.2); }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; }
.page-header span { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 1px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; }
.page-body { padding: 16px; }
.health-tabs { display: flex; background: #1E0E00; border-radius: 10px; padding: 3px; margin-bottom: 16px; }
.htab { flex: 1; text-align: center; padding: 8px; font-size: 14px; color: rgba(214,174,108,0.6); border-radius: 8px; cursor: pointer; transition: all 0.2s; }
.htab.active { background: linear-gradient(135deg, #D6AE6C, #E3BF88); color: #1a0a00; font-weight: 700; }
.pkg-card { background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.25); border-radius: 14px; padding: 16px; margin-bottom: 12px; }
.pkg-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.pkg-name { font-size: 16px; font-weight: 700; color: #F0E1B4; }
.pkg-price { font-size: 16px; color: #D6AE6C; font-weight: 800; }
.pkg-desc { font-size: 13px; color: rgba(214,174,108,0.7); margin-bottom: 10px; }
.pkg-items { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
.pkg-item { font-size: 11px; color: rgba(240,225,180,0.8); background: rgba(214,174,108,0.08); border: 1px solid rgba(214,174,108,0.15); padding: 3px 8px; border-radius: 6px; }
.book-btn { width: 100%; padding: 11px; background: linear-gradient(135deg, #D6AE6C, #E3BF88); border: none; border-radius: 10px; font-size: 14px; font-weight: 700; color: #1a0a00; cursor: pointer; }
.vaccine-card { background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 12px; padding: 14px; margin-bottom: 10px; }
.vaccine-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.vaccine-name { font-size: 15px; font-weight: 700; color: #F0E1B4; }
.vaccine-price { font-size: 14px; color: #D6AE6C; font-weight: 700; }
.vaccine-desc { font-size: 13px; color: rgba(214,174,108,0.7); }
.info-tip { display: flex; align-items: center; gap: 8px; background: rgba(214,174,108,0.08); border-radius: 10px; padding: 12px; font-size: 13px; color: rgba(214,174,108,0.8); margin-top: 12px; }
</style>
