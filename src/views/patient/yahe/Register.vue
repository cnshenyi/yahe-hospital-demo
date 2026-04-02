<template>
  <div class="yahe-page">
    <div class="page-header">
      <button class="back-btn" @click="$emit('navigate', 'yahe-home')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span>{{ lang === 'zh' ? '门诊挂号' : 'Outpatient Registration' }}</span>
      <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh' ? 'EN' : '中' }}</div>
    </div>

    <div class="page-body">
      <!-- Step indicator -->
      <div class="steps">
        <div v-for="(s, i) in steps" :key="i" class="step-item">
          <div class="step-circle" :class="{ active: step >= i, done: step > i }">
            <svg v-if="step > i" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="#1a0a00" stroke-width="2.5"><path d="M3 8l3.5 3.5L13 5"/></svg>
            <span v-else>{{ i + 1 }}</span>
          </div>
          <span class="step-label">{{ lang === 'zh' ? s.cn : s.en }}</span>
          <div v-if="i < steps.length - 1" class="step-line" :class="{ done: step > i }"></div>
        </div>
      </div>

      <!-- Step 0: Select Dept -->
      <div v-if="step === 0" class="step-content">
        <div class="content-title">{{ lang === 'zh' ? '选择科室' : 'Select Department' }}</div>
        <div class="dept-list">
          <div class="dept-item" v-for="d in depts" :key="d.id" @click="selectDept(d)">
            <div class="dept-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="1.5"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <div class="dept-info">
              <span class="dept-name">{{ lang === 'zh' ? d.nameCn : d.nameEn }}</span>
              <span class="dept-tag">{{ lang === 'zh' ? '国际医疗专区' : 'International Zone' }}</span>
            </div>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#D6AE6C" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        </div>
      </div>

      <!-- Step 1: Select Doctor -->
      <div v-if="step === 1" class="step-content">
        <div class="content-title">{{ lang === 'zh' ? `${selectedDept?.nameCn} · 选择医生` : `${selectedDept?.nameEn} · Select Doctor` }}</div>
        <div class="doctor-list">
          <div class="doctor-card" v-for="d in doctors" :key="d.name" @click="selectDoctor(d)">
            <img :src="d.img" class="doc-avatar" />
            <div class="doc-info">
              <span class="doc-name">{{ d.name }}</span>
              <span class="doc-title">{{ lang === 'zh' ? d.title : d.titleEn }}</span>
              <span class="doc-fee">{{ lang === 'zh' ? `诊金 ¥${d.fee}` : `Fee ¥${d.fee}` }}</span>
            </div>
            <div class="doc-avail">
              <span class="avail-dot"></span>
              <span>{{ lang === 'zh' ? '有号' : 'Available' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Select Time -->
      <div v-if="step === 2" class="step-content">
        <div class="content-title">{{ lang === 'zh' ? '选择就诊时间' : 'Select Appointment Time' }}</div>
        <div class="doc-brief">
          <img :src="selectedDoctor?.img" class="brief-avatar" />
          <div>
            <span class="brief-name">{{ selectedDoctor?.name }}</span>
            <span class="brief-dept">{{ lang === 'zh' ? selectedDept?.nameCn : selectedDept?.nameEn }}</span>
          </div>
        </div>
        <div class="time-slots">
          <div class="slot-group" v-for="g in timeSlots" :key="g.date">
            <div class="slot-date">{{ g.date }}</div>
            <div class="slot-grid">
              <div class="slot-item" v-for="t in g.times" :key="t.time"
                :class="{ selected: selectedTime === t.time, full: t.full }"
                @click="!t.full && (selectedTime = t.time)">
                {{ t.time }}
              </div>
            </div>
          </div>
        </div>
        <button class="next-btn" :disabled="!selectedTime" @click="step = 3">
          {{ lang === 'zh' ? '下一步' : 'Next' }}
        </button>
      </div>

      <!-- Step 3: Confirm -->
      <div v-if="step === 3" class="step-content">
        <div class="content-title">{{ lang === 'zh' ? '确认挂号信息' : 'Confirm Registration' }}</div>
        <div class="confirm-card">
          <div class="confirm-row"><span>{{ lang === 'zh' ? '科室' : 'Department' }}</span><span>{{ lang === 'zh' ? selectedDept?.nameCn : selectedDept?.nameEn }}</span></div>
          <div class="confirm-row"><span>{{ lang === 'zh' ? '医生' : 'Doctor' }}</span><span>{{ selectedDoctor?.name }}</span></div>
          <div class="confirm-row"><span>{{ lang === 'zh' ? '时间' : 'Time' }}</span><span>{{ selectedTime }}</span></div>
          <div class="confirm-row"><span>{{ lang === 'zh' ? '就诊人' : 'Patient' }}</span><span>{{ lang === 'zh' ? '沈先生' : 'Mr. Shen' }}</span></div>
          <div class="confirm-row fee-row"><span>{{ lang === 'zh' ? '诊金' : 'Fee' }}</span><span class="fee-val">¥{{ selectedDoctor?.fee }}</span></div>
        </div>
        <button class="next-btn" @click="step = 4">
          {{ lang === 'zh' ? '确认并支付' : 'Confirm & Pay' }}
        </button>
      </div>

      <!-- Step 4: Payment -->
      <div v-if="step === 4" class="step-content">
        <div class="content-title">{{ lang === 'zh' ? '订单支付' : 'Payment' }}</div>
        <div class="pay-amount">
          <span class="pay-label">{{ lang === 'zh' ? '应付金额' : 'Amount Due' }}</span>
          <span class="pay-num">¥{{ selectedDoctor?.fee }}</span>
        </div>
        <div class="pay-methods">
          <div class="pay-method" v-for="m in payMethods" :key="m.id" :class="{ selected: payMethod === m.id }" @click="payMethod = m.id">
            <div v-html="m.icon"></div>
            <span>{{ lang === 'zh' ? m.nameCn : m.nameEn }}</span>
            <div class="pay-check" v-if="payMethod === m.id">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="#1a0a00" stroke-width="2.5"><path d="M3 8l3.5 3.5L13 5"/></svg>
            </div>
          </div>
        </div>
        <button class="next-btn" @click="step = 5">
          {{ lang === 'zh' ? '立即支付' : 'Pay Now' }}
        </button>
      </div>

      <!-- Step 5: Success -->
      <div v-if="step === 5" class="step-content success-content">
        <div class="success-icon">
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="#D6AE6C" stroke-width="2" fill="rgba(214,174,108,0.1)"/>
            <path d="M20 32l8 8 16-16" stroke="#D6AE6C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="success-title">{{ lang === 'zh' ? '挂号成功' : 'Registration Successful' }}</div>
        <div class="success-sub">{{ lang === 'zh' ? '请按时就诊，祝您早日康复' : 'Please arrive on time. Wishing you a speedy recovery.' }}</div>
        <div class="success-card">
          <div class="confirm-row"><span>{{ lang === 'zh' ? '科室' : 'Dept' }}</span><span>{{ lang === 'zh' ? selectedDept?.nameCn : selectedDept?.nameEn }}</span></div>
          <div class="confirm-row"><span>{{ lang === 'zh' ? '医生' : 'Doctor' }}</span><span>{{ selectedDoctor?.name }}</span></div>
          <div class="confirm-row"><span>{{ lang === 'zh' ? '时间' : 'Time' }}</span><span>{{ selectedTime }}</span></div>
          <div class="confirm-row"><span>{{ lang === 'zh' ? '取号码' : 'Queue No.' }}</span><span class="fee-val">A-{{ Math.floor(Math.random()*90)+10 }}</span></div>
        </div>
        <button class="next-btn" @click="$emit('navigate', 'yahe-home')">
          {{ lang === 'zh' ? '返回首页' : 'Back to Home' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const emit = defineEmits(['navigate'])
const lang = ref('zh')
const step = ref(0)
const selectedDept = ref(null)
const selectedDoctor = ref(null)
const selectedTime = ref(null)
const payMethod = ref('wechat')

function toggleLang() { lang.value = lang.value === 'zh' ? 'en' : 'zh' }

const steps = [
  { cn: '选科室', en: 'Dept' },
  { cn: '选医生', en: 'Doctor' },
  { cn: '选时间', en: 'Time' },
  { cn: '确认', en: 'Confirm' },
  { cn: '支付', en: 'Pay' },
  { cn: '完成', en: 'Done' },
]

const depts = [
  { id: 1, nameCn: '普通外科', nameEn: 'General Surgery' },
  { id: 2, nameCn: '肛肠外科', nameEn: 'Colorectal Surgery' },
  { id: 3, nameCn: '结直肠外科', nameEn: 'Colorectal & Rectal Surgery' },
  { id: 4, nameCn: '胃肠外科', nameEn: 'Gastrointestinal Surgery' },
  { id: 5, nameCn: '胰腺肝胆外科', nameEn: 'Hepatopancreatobiliary Surgery' },
  { id: 6, nameCn: '肝胆胰脾外科', nameEn: 'HPB Surgery' },
  { id: 7, nameCn: '胸外科', nameEn: 'Thoracic Surgery' },
  { id: 8, nameCn: '盆底外科', nameEn: 'Pelvic Floor Surgery' },
  { id: 9, nameCn: '妇产科', nameEn: 'Obstetrics & Gynecology' },
  { id: 10, nameCn: '优生遗传科', nameEn: 'Genetics & Prenatal Diagnosis' },
  { id: 11, nameCn: '消化内科', nameEn: 'Gastroenterology' },
  { id: 12, nameCn: '风湿免疫科', nameEn: 'Rheumatology & Immunology' },
  { id: 13, nameCn: '影像诊断科', nameEn: 'Diagnostic Imaging' },
]

// 各科室对应的真实专家
const deptDoctors = {
  1: [
    { name: '汪建平', title: '教授 · 主任医师', titleEn: 'Professor · Chief Physician', fee: 600, img: '/images/yahe/doctors/wangjianping.jpg' },
    { name: '万云乐', title: '主任医师', titleEn: 'Chief Physician', fee: 400, img: '/images/yahe/doctors/wanyunle.jpg' },
  ],
  2: [
    { name: '任东林', title: '教授 · 主任医师', titleEn: 'Professor · Chief Physician', fee: 600, img: '/images/yahe/doctors/rendonglin.jpg' },
    { name: '林宏城', title: '主任医师 · 博导', titleEn: 'Chief Physician · PhD Supervisor', fee: 400, img: '/images/yahe/doctors/linhongcheng.jpg' },
  ],
  3: [
    { name: '秦启元', title: '主任医师 · 博导', titleEn: 'Chief Physician · PhD Supervisor', fee: 500, img: '/images/yahe/doctors/qinqiyuan.jpg' },
    { name: '张迪', title: '副主任医师', titleEn: 'Associate Chief Physician', fee: 300, img: '/images/yahe/doctors/zhangdi.jpg' },
  ],
  4: [
    { name: '郭学峰', title: '主任医师', titleEn: 'Chief Physician', fee: 400, img: '/images/yahe/doctors/guoxuefeng.jpg' },
  ],
  5: [
    { name: '潘卫东', title: '主任医师', titleEn: 'Chief Physician', fee: 500, img: '/images/yahe/doctors/panweidong.jpg' },
  ],
  6: [
    { name: '李国林', title: '主任医师', titleEn: 'Chief Physician', fee: 500, img: '/images/yahe/doctors/liguolin.jpg' },
  ],
  7: [
    { name: '廖洪映', title: '教授 · 主任医师', titleEn: 'Professor · Chief Physician', fee: 500, img: '/images/yahe/doctors/liaohongying.jpg' },
  ],
  8: [
    { name: '张迪', title: '副主任医师', titleEn: 'Associate Chief Physician', fee: 300, img: '/images/yahe/doctors/zhangdi.jpg' },
  ],
  9: [
    { name: '高羽', title: '主任医师 · 博导', titleEn: 'Chief Physician · PhD Supervisor', fee: 500, img: '/images/yahe/doctors/gaoyu.jpg' },
  ],
  10: [
    { name: '蒋玮莹', title: '主任医师', titleEn: 'Chief Physician', fee: 400, img: '/images/yahe/doctors/jiangweiying.jpg' },
  ],
  11: [
    { name: '张敏', title: '主任医师', titleEn: 'Chief Physician', fee: 400, img: '/images/yahe/doctors/zhangmin.jpg' },
  ],
  12: [
    { name: '黄建林', title: '教授 · 主任医师', titleEn: 'Professor · Chief Physician', fee: 500, img: '/images/yahe/doctors/huangjianlin.jpg' },
  ],
  13: [
    { name: '孟晓春', title: '教授 · 主任医师', titleEn: 'Professor · Chief Physician', fee: 500, img: '/images/yahe/doctors/mengxiaochun.jpg' },
  ],
}

const doctors = computed(() => selectedDept.value ? (deptDoctors[selectedDept.value.id] || []) : [])

const timeSlots = [
  { date: '明天 04/03 (周四)', times: [
    { time: '08:30', full: false }, { time: '09:00', full: true }, { time: '09:30', full: false },
    { time: '10:00', full: false }, { time: '10:30', full: false }, { time: '14:00', full: true },
    { time: '14:30', full: false }, { time: '15:00', full: false },
  ]},
  { date: '后天 04/04 (周五)', times: [
    { time: '08:30', full: false }, { time: '09:00', full: false }, { time: '09:30', full: false },
    { time: '10:00', full: false }, { time: '14:00', full: false }, { time: '14:30', full: false },
  ]},
]

const payMethods = [
  { id: 'wechat', nameCn: '微信支付', nameEn: 'WeChat Pay', icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="#07C160"><circle cx="12" cy="12" r="10"/><path d="M8 11c-.5-2 1-4 3.5-4s4 1.5 3.5 4" stroke="white" stroke-width="1.2" fill="none"/></svg>` },
  { id: 'alipay', nameCn: '支付宝', nameEn: 'Alipay', icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="#1677FF"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">支</text></svg>` },
  { id: 'insurance', nameCn: '商保直付', nameEn: 'Insurance Direct', icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#D6AE6C" stroke-width="1.5"><path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7L12 2z"/></svg>` },
]

function selectDept(d) { selectedDept.value = d; step.value = 1 }
function selectDoctor(d) { selectedDoctor.value = d; step.value = 2 }
</script>

<style scoped>
.yahe-page { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; }
.page-header { display: flex; align-items: center; padding: 54px 16px 12px; background: linear-gradient(180deg, #1a0a00, #2A1500); border-bottom: 1px solid rgba(214,174,108,0.2); }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; }
.page-header span { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 1px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; }

.page-body { padding: 16px; }

/* Steps */
.steps { display: flex; align-items: center; margin-bottom: 20px; overflow-x: auto; padding-bottom: 4px; }
.steps::-webkit-scrollbar { display: none; }
.step-item { display: flex; align-items: center; flex-shrink: 0; }
.step-circle { width: 24px; height: 24px; border-radius: 50%; border: 1.5px solid rgba(214,174,108,0.4); display: flex; align-items: center; justify-content: center; font-size: 11px; color: rgba(214,174,108,0.5); transition: all 0.3s; }
.step-circle.active { border-color: #D6AE6C; color: #D6AE6C; background: rgba(214,174,108,0.1); }
.step-circle.done { background: #D6AE6C; border-color: #D6AE6C; }
.step-label { font-size: 10px; color: rgba(214,174,108,0.6); margin: 0 4px; white-space: nowrap; }
.step-line { width: 16px; height: 1px; background: rgba(214,174,108,0.2); }
.step-line.done { background: #D6AE6C; }

.content-title { font-size: 16px; font-weight: 700; color: #F0E1B4; margin-bottom: 14px; }

/* Dept List */
.dept-list { display: flex; flex-direction: column; gap: 8px; }
.dept-item { display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 12px; padding: 14px; cursor: pointer; transition: all 0.2s; }
.dept-item:active { border-color: #D6AE6C; }
.dept-icon { width: 40px; height: 40px; background: rgba(214,174,108,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; }
.dept-info { flex: 1; }
.dept-name { display: block; font-size: 15px; color: #F0E1B4; font-weight: 600; margin-bottom: 3px; }
.dept-tag { font-size: 10px; color: #D6AE6C; background: rgba(214,174,108,0.1); padding: 1px 6px; border-radius: 4px; }

/* Doctor List */
.doctor-list { display: flex; flex-direction: column; gap: 10px; }
.doctor-card { display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 12px; padding: 12px; cursor: pointer; transition: all 0.2s; }
.doctor-card:active { border-color: #D6AE6C; }
.doc-avatar { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; object-position: top; border: 1.5px solid rgba(214,174,108,0.4); }
.doc-info { flex: 1; }
.doc-name { display: block; font-size: 15px; color: #F0E1B4; font-weight: 700; margin-bottom: 3px; }
.doc-title { display: block; font-size: 11px; color: rgba(214,174,108,0.7); margin-bottom: 4px; }
.doc-fee { font-size: 13px; color: #D6AE6C; font-weight: 600; }
.doc-avail { display: flex; align-items: center; gap: 4px; font-size: 11px; color: #4CAF50; }
.avail-dot { width: 6px; height: 6px; border-radius: 50%; background: #4CAF50; }

/* Time Slots */
.doc-brief { display: flex; align-items: center; gap: 10px; background: rgba(214,174,108,0.08); border-radius: 10px; padding: 10px; margin-bottom: 14px; }
.brief-avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; object-position: top; }
.brief-name { display: block; font-size: 14px; color: #F0E1B4; font-weight: 700; }
.brief-dept { display: block; font-size: 11px; color: rgba(214,174,108,0.7); }
.slot-group { margin-bottom: 14px; }
.slot-date { font-size: 12px; color: rgba(214,174,108,0.7); margin-bottom: 8px; }
.slot-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.slot-item { text-align: center; padding: 8px 4px; border: 1px solid rgba(214,174,108,0.25); border-radius: 8px; font-size: 13px; color: #F0E1B4; cursor: pointer; transition: all 0.2s; }
.slot-item.selected { background: #D6AE6C; color: #1a0a00; font-weight: 700; border-color: #D6AE6C; }
.slot-item.full { color: rgba(255,255,255,0.25); border-color: rgba(255,255,255,0.1); cursor: not-allowed; text-decoration: line-through; }

/* Confirm */
.confirm-card { background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 14px; padding: 16px; margin-bottom: 16px; }
.confirm-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(214,174,108,0.1); font-size: 14px; }
.confirm-row:last-child { border-bottom: none; }
.confirm-row span:first-child { color: rgba(214,174,108,0.7); }
.confirm-row span:last-child { color: #F0E1B4; font-weight: 600; }
.fee-row span:first-child { color: rgba(214,174,108,0.7); }
.fee-val { color: #D6AE6C !important; font-size: 18px !important; font-weight: 800 !important; }

/* Payment */
.pay-amount { text-align: center; padding: 24px 0; }
.pay-label { display: block; font-size: 13px; color: rgba(214,174,108,0.7); margin-bottom: 8px; }
.pay-num { font-size: 40px; font-weight: 800; color: #D6AE6C; }
.pay-methods { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
.pay-method { display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 12px; padding: 14px; cursor: pointer; transition: all 0.2s; }
.pay-method.selected { border-color: #D6AE6C; }
.pay-method span { flex: 1; font-size: 15px; color: #F0E1B4; }
.pay-check { width: 22px; height: 22px; background: #D6AE6C; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

/* Success */
.success-content { display: flex; flex-direction: column; align-items: center; padding-top: 20px; }
.success-icon { margin-bottom: 16px; }
.success-title { font-size: 22px; font-weight: 800; color: #F0E1B4; margin-bottom: 8px; }
.success-sub { font-size: 13px; color: rgba(214,174,108,0.65); margin-bottom: 24px; text-align: center; }
.success-card { width: 100%; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 14px; padding: 16px; margin-bottom: 20px; }

/* Next Button */
.next-btn { width: 100%; padding: 15px; background: linear-gradient(135deg, #D6AE6C, #E3BF88); border: none; border-radius: 12px; font-size: 16px; font-weight: 700; color: #1a0a00; cursor: pointer; transition: all 0.2s; }
.next-btn:active { transform: scale(0.98); }
.next-btn:disabled { opacity: 0.4; cursor: not-allowed; }
</style>
