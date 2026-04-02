<template>
  <div class="yahe-page">
    <div class="page-header">
      <button class="back-btn" @click="$emit('navigate', 'yahe-home')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span>{{ lang === 'zh' ? '报告查询' : 'Reports' }}</span>
      <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh' ? 'EN' : '中' }}</div>
    </div>
    <div class="page-body">
      <div class="report-tabs">
        <span v-for="(t, i) in tabs" :key="t" class="rtab" :class="{ active: activeTab === i }" @click="activeTab = i">{{ t }}</span>
      </div>
      <div class="report-list">
        <div class="report-item" v-for="r in filteredReports" :key="r.id">
          <div class="report-icon" :class="r.type">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div class="report-info">
            <span class="report-name">{{ lang === 'zh' ? r.nameCn : r.nameEn }}</span>
            <span class="report-date">{{ r.date }} · {{ lang === 'zh' ? r.deptCn : r.deptEn }}</span>
          </div>
          <span class="report-status" :class="r.status">{{ lang === 'zh' ? (r.status === 'ready' ? '已出报告' : '处理中') : (r.status === 'ready' ? 'Ready' : 'Processing') }}</span>
        </div>
      </div>
      <div class="empty-tip" v-if="filteredReports.length === 0">
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="rgba(214,174,108,0.3)" stroke-width="1.5"><rect x="12" y="8" width="40" height="48" rx="4"/><path d="M20 20h24M20 28h24M20 36h16"/></svg>
        <p>{{ lang === 'zh' ? '暂无报告' : 'No reports yet' }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const emit = defineEmits(['navigate'])
const lang = ref('zh')
const activeTab = ref(0)
function toggleLang() { lang.value = lang.value === 'zh' ? 'en' : 'zh' }
const tabs = computed(() => lang.value === 'zh' ? ['全部', '检验', '影像', '体检'] : ['All', 'Lab', 'Imaging', 'Health Check'])
const reports = [
  { id: 1, nameCn: '血常规检验报告', nameEn: 'Complete Blood Count', date: '2026-03-28', deptCn: '检验科', deptEn: 'Laboratory', type: 'lab', status: 'ready', tab: 1 },
  { id: 2, nameCn: '胸部CT报告', nameEn: 'Chest CT Report', date: '2026-03-25', deptCn: '放射科', deptEn: 'Radiology', type: 'imaging', status: 'ready', tab: 2 },
  { id: 3, nameCn: '心脏彩超报告', nameEn: 'Cardiac Ultrasound', date: '2026-03-20', deptCn: '超声科', deptEn: 'Ultrasound', type: 'imaging', status: 'ready', tab: 2 },
  { id: 4, nameCn: '年度体检报告', nameEn: 'Annual Health Check', date: '2026-02-15', deptCn: '体检中心', deptEn: 'Health Check Center', type: 'health', status: 'ready', tab: 3 },
  { id: 5, nameCn: '肿瘤标志物检测', nameEn: 'Tumor Marker Panel', date: '2026-04-01', deptCn: '检验科', deptEn: 'Laboratory', type: 'lab', status: 'processing', tab: 1 },
]
const filteredReports = computed(() => activeTab.value === 0 ? reports : reports.filter(r => r.tab === activeTab.value))
</script>
<style scoped>
.yahe-page { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; }
.page-header { display: flex; align-items: center; padding: 54px 16px 12px; background: linear-gradient(180deg, #1a0a00, #2A1500); border-bottom: 1px solid rgba(214,174,108,0.2); }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; }
.page-header span { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 1px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; }
.page-body { padding: 16px; }
.report-tabs { display: flex; background: #1E0E00; border-radius: 10px; padding: 3px; margin-bottom: 16px; }
.rtab { flex: 1; text-align: center; padding: 8px; font-size: 13px; color: rgba(214,174,108,0.6); border-radius: 8px; cursor: pointer; transition: all 0.2s; }
.rtab.active { background: linear-gradient(135deg, #D6AE6C, #E3BF88); color: #1a0a00; font-weight: 700; }
.report-list { display: flex; flex-direction: column; gap: 8px; }
.report-item { display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 12px; padding: 14px; cursor: pointer; }
.report-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.report-icon.lab { background: rgba(100,180,255,0.1); color: #64B4FF; }
.report-icon.imaging { background: rgba(214,174,108,0.1); color: #D6AE6C; }
.report-icon.health { background: rgba(100,220,150,0.1); color: #64DC96; }
.report-info { flex: 1; }
.report-name { display: block; font-size: 14px; color: #F0E1B4; font-weight: 600; margin-bottom: 3px; }
.report-date { font-size: 11px; color: rgba(214,174,108,0.6); }
.report-status { font-size: 11px; padding: 3px 8px; border-radius: 6px; font-weight: 600; white-space: nowrap; }
.report-status.ready { background: rgba(100,220,150,0.15); color: #64DC96; }
.report-status.processing { background: rgba(214,174,108,0.15); color: #D6AE6C; }
.empty-tip { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 40px 0; color: rgba(214,174,108,0.4); font-size: 14px; }
</style>
