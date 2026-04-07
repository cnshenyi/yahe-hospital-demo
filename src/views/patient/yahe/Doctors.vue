<template>
  <div class="yahe-page">
    <div class="page-header">
      <button class="back-btn" @click="$emit('navigate', 'yahe-home')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span>{{ getText('专家团队', '專家團隊', 'Expert Team') }}</span>
      <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh-CN' ? '简' : lang === 'zh-TW' ? '繁' : 'EN' }}</div>
    </div>

    <div class="page-body">
      <!-- Search bar -->
      <div class="search-bar">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="rgba(214,174,108,0.5)" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <input v-model="searchQuery" :placeholder="getText('搜索医生姓名或科室', '搜索醫生姓名或科室', 'Search doctor or department')" class="search-input" />
      </div>

      <!-- Dept filter -->
      <div class="dept-filter">
        <span v-for="d in deptFilters" :key="d.id"
          class="dept-chip" :class="{ active: activeDept === d.id }"
          @click="activeDept = d.id">
          {{ getText(d.cn, d.tw, d.en) }}
        </span>
      </div>

      <!-- Doctor list -->
      <div v-if="!selectedDoctor">
        <div class="doctor-card" v-for="doc in filteredDoctors" :key="doc.name" @click="selectedDoctor = doc">
          <div class="doc-avatar-wrap">
            <img v-if="doc.avatar" :src="doc.avatar" class="doc-avatar-img" :alt="doc.name" />
            <div v-else class="doc-avatar-placeholder">
              <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
                <circle cx="20" cy="15" r="8" stroke="#D6AE6C" stroke-width="1.5"/>
                <path d="M6 36c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#D6AE6C" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
          <div class="doc-info">
            <div class="doc-name-row">
              <span class="doc-name">{{ doc.name }}</span>
              <span class="doc-title-badge">{{ getText(doc.titleCn, doc.titleTw, doc.titleEn) }}</span>
            </div>
            <span class="doc-dept">{{ getText(doc.deptCn, doc.deptTw, doc.deptEn) }}</span>
            <p class="doc-specialty">{{ getText(doc.specialtyCn, doc.specialtyTw, doc.specialtyEn) }}</p>
          </div>
          <div class="book-btn-sm" @click.stop="$emit('navigate', 'yahe-register')">
            {{ getText('预约', '預約', 'Book') }}
          </div>
        </div>
        <div class="empty-tip" v-if="filteredDoctors.length === 0">
          <p>{{ getText('未找到相关医生', '未找到相關醫生', 'No doctors found') }}</p>
        </div>
      </div>

      <!-- Doctor detail -->
      <div v-else class="doctor-detail">
        <button class="back-sub" @click="selectedDoctor = null">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#D6AE6C" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          {{ getText('返回列表', '返回列表', 'Back') }}
        </button>
        <div class="detail-hero">
          <div class="detail-avatar-wrap">
            <img v-if="selectedDoctor.avatar" :src="selectedDoctor.avatar" class="detail-avatar-img" :alt="selectedDoctor.name" />
            <div v-else class="detail-avatar-placeholder">
              <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
                <circle cx="30" cy="22" r="12" stroke="#D6AE6C" stroke-width="1.5"/>
                <path d="M8 54c0-12.1 9.9-22 22-22s22 9.9 22 22" stroke="#D6AE6C" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
          <div class="detail-basic">
            <h2>{{ selectedDoctor.name }}</h2>
            <span class="detail-title">{{ getText(selectedDoctor.titleCn, selectedDoctor.titleTw, selectedDoctor.titleEn) }}</span>
            <span class="detail-dept">{{ getText(selectedDoctor.deptCn, selectedDoctor.deptTw, selectedDoctor.deptEn) }}</span>
          </div>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">{{ getText('擅长领域', '擅長領域', 'Specialties') }}</div>
          <p>{{ getText(selectedDoctor.specialtyCn, selectedDoctor.specialtyTw, selectedDoctor.specialtyEn) }}</p>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">{{ getText('个人简介', '個人簡介', 'Biography') }}</div>
          <p>{{ getText(selectedDoctor.bioCn, selectedDoctor.bioTw, selectedDoctor.bioEn) }}</p>
        </div>
        <button class="book-full-btn" @click="$emit('navigate', 'yahe-register')">
          {{ getText('立即预约挂号', '立即預約掛號', 'Book Appointment') }}
        </button>
      </div>

      <div style="height: 30px"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const emit = defineEmits(['navigate'])
const lang = ref('zh-CN')
const searchQuery = ref('')
const activeDept = ref('all')
const selectedDoctor = ref(null)

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

const deptFilters = [
  { id: 'all', cn: '全部', tw: '全部', en: 'All' },
  { id: 'surgery', cn: '外科', tw: '外科', en: 'Surgery' },
  { id: 'internal', cn: '内科', tw: '內科', en: 'Internal' },
  { id: 'gynecology', cn: '妇产科', tw: '婦產科', en: 'Gynecology' },
  { id: 'imaging', cn: '影像', tw: '影像', en: 'Imaging' },
]

const doctors = [
  {
    name: '汪建平', titleCn: '教授 · 主任医师', titleTw: '教授 · 主任醫師', titleEn: 'Professor · Chief Physician',
    deptCn: '普通外科', deptTw: '普通外科', deptEn: 'General Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/wangjianping.jpg',
    specialtyCn: '从事普通外科临床诊治40余年，擅长结直肠肿瘤、胃肠道疾病的外科治疗',
    specialtyTw: '從事普通外科臨床診治40餘年，擅長結直腸腫瘤、胃腸道疾病的外科治療',
    specialtyEn: '40+ years in general surgery, specializing in colorectal tumors and gastrointestinal diseases',
    bioCn: '医学博士，教授，主任医师，博士研究生导师。中山大学附属第六医院结直肠肛门外科学科带头人，国内结直肠外科领域权威专家。',
    bioTw: '醫學博士，教授，主任醫師，博士研究生導師。中山大學附屬第六醫院結直腸肛門外科學科帶頭人，國內結直腸外科領域權威專家。',
    bioEn: 'MD, Professor, Chief Physician, PhD Supervisor. Head of Colorectal Surgery at the Sixth Affiliated Hospital of Sun Yat-sen University.',
  },
  {
    name: '任东林', titleCn: '教授 · 主任医师', titleTw: '教授 · 主任醫師', titleEn: 'Professor · Chief Physician',
    deptCn: '肛肠外科', deptTw: '肛腸外科', deptEn: 'Colorectal Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/rendonglin.jpg',
    specialtyCn: '从事肛肠外科临床和教学工作30余年，擅长复杂性肛瘘、痔疮、盆底疾病的外科治疗',
    specialtyTw: '從事肛腸外科臨床和教學工作30餘年，擅長複雜性肛瘺、痔瘡、盆底疾病的外科治療',
    specialtyEn: '30+ years in colorectal surgery, specializing in complex anal fistula, hemorrhoids, and pelvic floor disorders',
    bioCn: '外科主任、肛肠外科主任、盆底及肛门外科主任。医学博士，教授，主任医师，博士生导师。',
    bioTw: '外科主任、肛腸外科主任、盆底及肛門外科主任。醫學博士，教授，主任醫師，博士生導師。',
    bioEn: 'Director of Surgery, Colorectal Surgery, and Pelvic Floor & Anal Surgery. MD, Professor, Chief Physician, PhD Supervisor.',
  },
  {
    name: '万云乐', titleCn: '主任医师', titleTw: '主任醫師', titleEn: 'Chief Physician',
    deptCn: '普外科', deptTw: '普外科', deptEn: 'General Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/wanyunle.jpg',
    specialtyCn: '对肝胆胰脾、胃肠、甲状腺和乳腺等普外科疾病有丰富的临床经验',
    specialtyTw: '對肝膽胰脾、胃腸、甲狀腺和乳腺等普外科疾病有豐富的臨床經驗',
    specialtyEn: 'Extensive experience in hepatobiliary, gastrointestinal, thyroid and breast surgery',
    bioCn: '医学博士，主任医师，博士生导师。擅长肝胆胰脾、胃肠、甲状腺和乳腺等普外科疾病的诊治。',
    bioTw: '醫學博士，主任醫師，博士生導師。擅長肝膽胰脾、胃腸、甲狀腺和乳腺等普外科疾病的診治。',
    bioEn: 'MD, Chief Physician, PhD Supervisor. Specializes in hepatobiliary, gastrointestinal, thyroid and breast surgery.',
  },
  {
    name: '高羽', titleCn: '主任医师 · 博导', titleTw: '主任醫師 · 博導', titleEn: 'Chief Physician · PhD Supervisor',
    deptCn: '妇产科', deptTw: '婦產科', deptEn: 'Obstetrics & Gynecology', dept: 'gynecology',
    avatar: '/images/yahe/doctors/gaoyu.jpg',
    specialtyCn: '从事妇产科专业临床工作20年，在孕产期保健、妇科肿瘤、不孕不育等方面有丰富经验',
    specialtyTw: '從事婦產科專業臨床工作20年，在孕產期保健、婦科腫瘤、不孕不育等方面有豐富經驗',
    specialtyEn: '20 years in obstetrics & gynecology, specializing in prenatal care, gynecological tumors, and infertility',
    bioCn: '医学博士，主任医师，博士生导师。从事妇产科专业临床工作20年，具有丰富的临床经验。',
    bioTw: '醫學博士，主任醫師，博士生導師。從事婦產科專業臨床工作20年，具有豐富的臨床經驗。',
    bioEn: 'MD, Chief Physician, PhD Supervisor. 20 years of clinical experience in obstetrics and gynecology.',
  },
  {
    name: '孟晓春', titleCn: '教授 · 主任医师', titleTw: '教授 · 主任醫師', titleEn: 'Professor · Chief Physician',
    deptCn: '影像诊断科', deptTw: '影像診斷科', deptEn: 'Diagnostic Imaging', dept: 'imaging',
    avatar: '/images/yahe/doctors/mengxiaochun.jpg',
    specialtyCn: '从医近30年，以腹部疾病影像诊断与介入治疗为主要研究方向',
    specialtyTw: '從醫近30年，以腹部疾病影像診斷與介入治療為主要研究方向',
    specialtyEn: '30 years in diagnostic imaging, focusing on abdominal disease imaging and interventional therapy',
    bioCn: '医学博士，主任医师，博士/硕士研究生导师。从医近30年，以腹部疾病影像诊断与介入治疗为主要研究方向。',
    bioTw: '醫學博士，主任醫師，博士/碩士研究生導師。從醫近30年，以腹部疾病影像診斷與介入治療為主要研究方向。',
    bioEn: 'MD, Chief Physician, PhD/Master Supervisor. Nearly 30 years of experience in abdominal imaging and interventional therapy.',
  },
  {
    name: '郭学峰', titleCn: '主任医师', titleTw: '主任醫師', titleEn: 'Chief Physician',
    deptCn: '胃肠外科', deptTw: '胃腸外科', deptEn: 'Gastrointestinal Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/guoxuefeng.jpg',
    specialtyCn: '主要从事胃肠外科和内镜外科的临床工作，擅长胃肠道肿瘤的微创手术治疗',
    specialtyTw: '主要從事胃腸外科和內鏡外科的臨床工作，擅長胃腸道腫瘤的微創手術治療',
    specialtyEn: 'Specializes in gastrointestinal and endoscopic surgery, minimally invasive treatment of GI tumors',
    bioCn: '主任医师，医学博士，硕士生导师。主要从事胃肠外科和内镜外科的临床工作。',
    bioTw: '主任醫師，醫學博士，碩士生導師。主要從事胃腸外科和內鏡外科的臨床工作。',
    bioEn: 'Chief Physician, MD, Master Supervisor. Specializes in gastrointestinal and endoscopic surgery.',
  },
  {
    name: '黄建林', titleCn: '教授 · 主任医师', titleTw: '教授 · 主任醫師', titleEn: 'Professor · Chief Physician',
    deptCn: '风湿免疫科', deptTw: '風濕免疫科', deptEn: 'Rheumatology & Immunology', dept: 'internal',
    avatar: '/images/yahe/doctors/huangjianlin.jpg',
    specialtyCn: '擅长类风湿关节炎、系统性红斑狼疮、强直性脊柱炎等风湿免疫疾病的诊治',
    specialtyTw: '擅長類風濕關節炎、系統性紅斑狼瘡、強直性脊柱炎等風濕免疫疾病的診治',
    specialtyEn: 'Specializes in rheumatoid arthritis, systemic lupus erythematosus, ankylosing spondylitis',
    bioCn: '教授、主任医师，医学博士，博士研究生导师。风湿免疫科学科带头人。',
    bioTw: '教授、主任醫師，醫學博士，博士研究生導師。風濕免疫科學科帶頭人。',
    bioEn: 'Professor, Chief Physician, MD, PhD Supervisor. Head of Rheumatology & Immunology.',
  },
  {
    name: '廖洪映', titleCn: '教授 · 主任医师', titleTw: '教授 · 主任醫師', titleEn: 'Professor · Chief Physician',
    deptCn: '胸外科', deptTw: '胸外科', deptEn: 'Thoracic Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/liaohongying.jpg',
    specialtyCn: '擅长胸部各种良恶性肿瘤如肺癌、食管癌等的外科治疗，尤其是微创胸腔镜手术',
    specialtyTw: '擅長胸部各種良惡性腫瘤如肺癌、食管癌等的外科治療，尤其是微創胸腔鏡手術',
    specialtyEn: 'Specializes in thoracic tumors including lung cancer and esophageal cancer, especially VATS',
    bioCn: '医学博士，主任医师，教授，博士生导师。擅长胸部良恶性肿瘤的外科治疗。',
    bioTw: '醫學博士，主任醫師，教授，博士生導師。擅長胸部良惡性腫瘤的外科治療。',
    bioEn: 'MD, Chief Physician, Professor, PhD Supervisor. Expert in thoracic tumor surgery.',
  },
  {
    name: '潘卫东', titleCn: '主任医师', titleEn: 'Chief Physician',
    deptCn: '胰腺肝胆外科', deptEn: 'Hepatopancreatobiliary Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/panweidong.jpg',
    specialtyCn: '精通肝胆胰脾外科常见病、多发病和疑难病症的诊治，擅长腹腔镜微创手术',
    specialtyEn: 'Expert in hepatopancreatobiliary surgery, specializing in laparoscopic minimally invasive procedures',
    bioCn: '中山大学附属第六医院胰腺肝胆外科主任医师。精通肝胆胰脾外科疾病的诊治。',
    bioEn: 'Chief Physician, Hepatopancreatobiliary Surgery, Sixth Affiliated Hospital of Sun Yat-sen University.',
  },
  {
    name: '林宏城', titleCn: '主任医师 · 博导', titleEn: 'Chief Physician · PhD Supervisor',
    deptCn: '肛肠外科', deptEn: 'Colorectal Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/linhongcheng.jpg',
    specialtyCn: '擅长复杂性/复发性肛瘘、结直肠恶性肿瘤的外科治疗',
    specialtyEn: 'Specializes in complex/recurrent anal fistula and colorectal malignancy surgery',
    bioCn: '博士，博士生导师，博士后合作导师。擅长复杂性肛瘘、结直肠肿瘤的外科治疗。',
    bioEn: 'PhD, PhD Supervisor, Postdoctoral Supervisor. Expert in complex anal fistula and colorectal tumor surgery.',
  },
  {
    name: '李国林', titleCn: '主任医师', titleEn: 'Chief Physician',
    deptCn: '肝胆胰脾外科', deptEn: 'Hepatopancreatobiliary Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/liguolin.jpg',
    specialtyCn: '专注于结直肠癌肝转移的外科精准治疗，擅长腹腔镜微创手术',
    specialtyEn: 'Focuses on precision surgical treatment of colorectal liver metastasis, laparoscopic surgery',
    bioCn: '外科副主任、肝胆胰脾外科副主任。主任医师，专注于结直肠癌肝转移的外科精准治疗。',
    bioEn: 'Deputy Director of Surgery and Hepatopancreatobiliary Surgery. Chief Physician specializing in colorectal liver metastasis.',
  },
  {
    name: '张敏', titleCn: '主任医师', titleEn: 'Chief Physician',
    deptCn: '消化内科', deptEn: 'Gastroenterology', dept: 'internal',
    avatar: '/images/yahe/doctors/zhangmin.jpg',
    specialtyCn: '从事消化内科临床及教学工作20余年，擅长消化道疾病的内镜诊断与治疗',
    specialtyEn: '20+ years in gastroenterology, specializing in endoscopic diagnosis and treatment',
    bioCn: '博士，硕士研究生导师，消化内科医师。从事消化内科临床及教学工作20余年。',
    bioEn: 'PhD, Master Supervisor. 20+ years of clinical and teaching experience in gastroenterology.',
  },
  {
    name: '秦启元', titleCn: '主任医师 · 博导', titleEn: 'Chief Physician · PhD Supervisor',
    deptCn: '结直肠外科', deptEn: 'Colorectal Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/qinqiyuan.jpg',
    specialtyCn: '直肠癌保功能治疗、结直肠肿瘤微创治疗',
    specialtyEn: 'Function-preserving rectal cancer treatment, minimally invasive colorectal tumor surgery',
    bioCn: '外科主任医师，博士生导师，医学博士。擅长直肠癌保功能治疗、结直肠肿瘤微创治疗。',
    bioEn: 'Chief Physician, PhD Supervisor, MD. Specializes in function-preserving rectal cancer treatment.',
  },
  {
    name: '蒋玮莹', titleCn: '主任医师', titleEn: 'Chief Physician',
    deptCn: '优生遗传科', deptEn: 'Genetics & Prenatal Diagnosis', dept: 'gynecology',
    avatar: '/images/yahe/doctors/jiangweiying.jpg',
    specialtyCn: '从事优生遗传咨询及遗传病的分子诊断，擅长产前诊断和遗传咨询',
    specialtyEn: 'Specializes in genetic counseling, molecular diagnosis of genetic diseases, and prenatal diagnosis',
    bioCn: '中山医科大学医学博士，曾赴美国斯坦福大学深造。从事优生遗传咨询及遗传病的分子诊断。',
    bioEn: 'MD from Sun Yat-sen University of Medical Sciences, trained at Stanford University. Expert in genetic counseling.',
  },
  {
    name: '张迪', titleCn: '副主任医师', titleEn: 'Associate Chief Physician',
    deptCn: '盆底外科', deptEn: 'Pelvic Floor Surgery', dept: 'surgery',
    avatar: '/images/yahe/doctors/zhangdi.jpg',
    specialtyCn: '对骶前肿瘤、直肠脱垂等盆底疾病开展诊疗，擅长盆底功能障碍性疾病的外科治疗',
    specialtyEn: 'Specializes in sacral tumors, rectal prolapse, and pelvic floor dysfunction surgery',
    bioCn: '医学博士，硕士生导师，国家自然科学基金项目负责人。擅长盆底疾病的外科治疗。',
    bioEn: 'MD, Master Supervisor, National Natural Science Foundation project leader. Expert in pelvic floor surgery.',
  },
]

const filteredDoctors = computed(() => {
  let list = doctors
  if (activeDept.value !== 'all') list = list.filter(d => d.dept === activeDept.value)
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(d => d.name.includes(q) || d.deptCn.toLowerCase().includes(q) || d.deptEn.toLowerCase().includes(q))
  }
  return list
})
</script>

<style scoped>
.yahe-page { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; }
.page-header { display: flex; align-items: center; padding: 54px 16px 12px; background: linear-gradient(180deg, #1a0a00, #2A1500); border-bottom: 1px solid rgba(214,174,108,0.2); }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; }
.page-header span { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 1px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; }
.page-body { padding: 12px 16px; }

.search-bar { display: flex; align-items: center; gap: 8px; background: #1E0E00; border: 1px solid rgba(214,174,108,0.2); border-radius: 10px; padding: 10px 12px; margin-bottom: 12px; }
.search-input { flex: 1; background: none; border: none; outline: none; font-size: 14px; color: #F0E1B4; }
.search-input::placeholder { color: rgba(214,174,108,0.4); }

.dept-filter { display: flex; gap: 8px; overflow-x: auto; margin-bottom: 14px; padding-bottom: 2px; }
.dept-filter::-webkit-scrollbar { display: none; }
.dept-chip { flex-shrink: 0; font-size: 12px; padding: 5px 12px; border-radius: 16px; border: 1px solid rgba(214,174,108,0.25); color: rgba(214,174,108,0.7); cursor: pointer; transition: all 0.2s; white-space: nowrap; }
.dept-chip.active { background: linear-gradient(135deg, #D6AE6C, #E3BF88); color: #1a0a00; font-weight: 700; border-color: transparent; }

.doctor-card { display: flex; align-items: flex-start; gap: 12px; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.18); border-radius: 14px; padding: 14px; margin-bottom: 10px; cursor: pointer; transition: all 0.2s; }
.doctor-card:active { border-color: #D6AE6C; }
.doc-avatar-wrap { flex-shrink: 0; }
.doc-avatar-placeholder { width: 72px; height: 96px; border-radius: 8px; background: rgba(214,174,108,0.1); border: 1.5px solid rgba(214,174,108,0.3); display: flex; align-items: center; justify-content: center; }
.doc-info { flex: 1; min-width: 0; }
.doc-name-row { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; flex-wrap: wrap; }
.doc-name { font-size: 16px; font-weight: 800; color: #F0E1B4; }
.doc-title-badge { font-size: 10px; color: #D6AE6C; background: rgba(214,174,108,0.1); border: 1px solid rgba(214,174,108,0.25); padding: 1px 6px; border-radius: 4px; white-space: nowrap; }
.doc-dept { display: block; font-size: 12px; color: rgba(214,174,108,0.7); margin-bottom: 5px; }
.doc-specialty { font-size: 12px; color: rgba(240,225,180,0.65); line-height: 1.5; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.book-btn-sm { flex-shrink: 0; padding: 6px 12px; background: linear-gradient(135deg, #D6AE6C, #E3BF88); border: none; border-radius: 8px; font-size: 12px; font-weight: 700; color: #1a0a00; cursor: pointer; align-self: center; }

.doc-avatar-img { width: 72px; height: 96px; border-radius: 8px; object-fit: cover; object-position: top center; border: 1.5px solid rgba(214,174,108,0.3); display: block; }
.detail-avatar-img { width: 110px; height: 146px; border-radius: 10px; object-fit: cover; object-position: top center; border: 1.5px solid rgba(214,174,108,0.4); display: block; }
.empty-tip { text-align: center; padding: 40px 0; color: rgba(214,174,108,0.4); font-size: 14px; }

/* Detail */
.back-sub { background: none; border: none; color: #D6AE6C; font-size: 14px; display: flex; align-items: center; gap: 4px; cursor: pointer; margin-bottom: 16px; padding: 0; }
.detail-hero { display: flex; gap: 16px; align-items: flex-start; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.25); border-radius: 16px; padding: 16px; margin-bottom: 16px; }
.detail-avatar-wrap { flex-shrink: 0; }
.detail-avatar-placeholder { width: 110px; height: 146px; border-radius: 10px; background: rgba(214,174,108,0.1); border: 1.5px solid rgba(214,174,108,0.4); display: flex; align-items: center; justify-content: center; }
.detail-basic h2 { font-size: 22px; font-weight: 800; color: #F0E1B4; margin-bottom: 6px; }
.detail-title { display: block; font-size: 13px; color: #D6AE6C; margin-bottom: 4px; }
.detail-dept { display: block; font-size: 12px; color: rgba(214,174,108,0.65); }
.detail-section { background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.15); border-radius: 12px; padding: 14px 16px; margin-bottom: 12px; }
.detail-section-title { font-size: 13px; font-weight: 700; color: #D6AE6C; margin-bottom: 8px; }
.detail-section p { font-size: 14px; color: rgba(240,225,180,0.85); line-height: 1.8; margin: 0; }
.book-full-btn { width: 100%; padding: 15px; background: linear-gradient(135deg, #D6AE6C, #E3BF88); border: none; border-radius: 12px; font-size: 16px; font-weight: 700; color: #1a0a00; cursor: pointer; margin-top: 4px; }
</style>
