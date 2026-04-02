<template>
  <div class="yahe-page">
    <div class="page-header">
      <button class="back-btn" @click="$emit('navigate', 'yahe-home')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span>{{ lang === 'zh' ? '快速缴费' : 'Quick Payment' }}</span>
      <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh' ? 'EN' : '中' }}</div>
    </div>
    <div class="page-body">
      <div class="pay-tabs">
        <span v-for="(t, i) in tabs" :key="t" class="ptab" :class="{ active: activeTab === i }" @click="activeTab = i">{{ t }}</span>
      </div>
      <!-- 待缴费 -->
      <div v-if="activeTab === 0">
        <div class="bill-card" v-for="b in pendingBills" :key="b.id">
          <div class="bill-header">
            <span class="bill-name">{{ lang === 'zh' ? b.nameCn : b.nameEn }}</span>
            <span class="bill-amount">¥{{ b.amount }}</span>
          </div>
          <div class="bill-meta">
            <span>{{ b.date }}</span>
            <span>{{ lang === 'zh' ? b.deptCn : b.deptEn }}</span>
          </div>
          <button class="pay-now-btn" @click="doPay(b)">{{ lang === 'zh' ? '立即缴费' : 'Pay Now' }}</button>
        </div>
        <div class="empty-tip" v-if="pendingBills.length === 0">
          <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="rgba(214,174,108,0.3)" stroke-width="1.5"><rect x="8" y="12" width="48" height="36" rx="4"/><path d="M8 22h48"/><rect x="14" y="30" width="12" height="8" rx="2"/></svg>
          <p>{{ lang === 'zh' ? '暂无待缴费项目' : 'No pending payments' }}</p>
        </div>
      </div>
      <!-- 缴费记录 -->
      <div v-if="activeTab === 1">
        <div class="history-item" v-for="h in history" :key="h.id">
          <div class="history-info">
            <span class="history-name">{{ lang === 'zh' ? h.nameCn : h.nameEn }}</span>
            <span class="history-date">{{ h.date }}</span>
          </div>
          <div class="history-right">
            <span class="history-amount">-¥{{ h.amount }}</span>
            <span class="history-method">{{ h.method }}</span>
          </div>
        </div>
      </div>
      <!-- 支付成功弹窗 -->
      <div class="pay-success-overlay" v-if="showSuccess" @click="showSuccess = false">
        <div class="pay-success-modal">
          <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
            <circle cx="32" cy="32" r="30" stroke="#D6AE6C" stroke-width="2" fill="rgba(214,174,108,0.1)"/>
            <path d="M20 32l8 8 16-16" stroke="#D6AE6C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="success-title">{{ lang === 'zh' ? '缴费成功' : 'Payment Successful' }}</div>
          <div class="success-amount">¥{{ paidAmount }}</div>
          <button class="close-btn" @click="showSuccess = false">{{ lang === 'zh' ? '完成' : 'Done' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const emit = defineEmits(['navigate'])
const lang = ref('zh')
const activeTab = ref(0)
const showSuccess = ref(false)
const paidAmount = ref(0)
function toggleLang() { lang.value = lang.value === 'zh' ? 'en' : 'zh' }
const tabs = computed(() => lang.value === 'zh' ? ['待缴费', '缴费记录'] : ['Pending', 'History'])
const pendingBills = ref([
  { id: 1, nameCn: '门诊诊金', nameEn: 'Consultation Fee', amount: 500, date: '2026-04-02', deptCn: '心血管内科', deptEn: 'Cardiology' },
  { id: 2, nameCn: '检验费', nameEn: 'Lab Test Fee', amount: 380, date: '2026-04-02', deptCn: '检验科', deptEn: 'Laboratory' },
])
const history = [
  { id: 1, nameCn: '门诊诊金', nameEn: 'Consultation Fee', amount: 400, date: '2026-03-25', method: '微信支付' },
  { id: 2, nameCn: '体检套餐', nameEn: 'Health Check Package', amount: 3800, date: '2026-02-15', method: '商保直付' },
]
function doPay(b) {
  paidAmount.value = b.amount
  pendingBills.value = pendingBills.value.filter(x => x.id !== b.id)
  showSuccess.value = true
}
</script>
<style scoped>
.yahe-page { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; position: relative; }
.page-header { display: flex; align-items: center; padding: 54px 16px 12px; background: linear-gradient(180deg, #1a0a00, #2A1500); border-bottom: 1px solid rgba(214,174,108,0.2); }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; }
.page-header span { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 1px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; }
.page-body { padding: 16px; }
.pay-tabs { display: flex; background: #1E0E00; border-radius: 10px; padding: 3px; margin-bottom: 16px; }
.ptab { flex: 1; text-align: center; padding: 8px; font-size: 14px; color: rgba(214,174,108,0.6); border-radius: 8px; cursor: pointer; transition: all 0.2s; }
.ptab.active { background: linear-gradient(135deg, #D6AE6C, #E3BF88); color: #1a0a00; font-weight: 700; }
.bill-card { background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.25); border-radius: 14px; padding: 16px; margin-bottom: 10px; }
.bill-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.bill-name { font-size: 15px; font-weight: 700; color: #F0E1B4; }
.bill-amount { font-size: 18px; color: #D6AE6C; font-weight: 800; }
.bill-meta { display: flex; gap: 12px; font-size: 12px; color: rgba(214,174,108,0.6); margin-bottom: 12px; }
.pay-now-btn { width: 100%; padding: 11px; background: linear-gradient(135deg, #D6AE6C, #E3BF88); border: none; border-radius: 10px; font-size: 14px; font-weight: 700; color: #1a0a00; cursor: pointer; }
.history-item { display: flex; justify-content: space-between; align-items: center; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.15); border-radius: 12px; padding: 14px; margin-bottom: 8px; }
.history-name { display: block; font-size: 14px; color: #F0E1B4; font-weight: 600; margin-bottom: 3px; }
.history-date { font-size: 11px; color: rgba(214,174,108,0.6); }
.history-right { text-align: right; }
.history-amount { display: block; font-size: 16px; color: #D6AE6C; font-weight: 700; margin-bottom: 3px; }
.history-method { font-size: 11px; color: rgba(214,174,108,0.6); }
.empty-tip { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 40px 0; color: rgba(214,174,108,0.4); font-size: 14px; }
.pay-success-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 100; }
.pay-success-modal { background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.4); border-radius: 20px; padding: 32px 24px; text-align: center; width: 260px; }
.success-title { font-size: 18px; font-weight: 800; color: #F0E1B4; margin: 12px 0 6px; }
.success-amount { font-size: 32px; font-weight: 800; color: #D6AE6C; margin-bottom: 20px; }
.close-btn { width: 100%; padding: 12px; background: linear-gradient(135deg, #D6AE6C, #E3BF88); border: none; border-radius: 10px; font-size: 15px; font-weight: 700; color: #1a0a00; cursor: pointer; }
</style>
