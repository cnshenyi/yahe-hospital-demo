<template>
  <div class="yahe-page">
    <div class="page-header">
      <button class="back-btn" @click="$emit('navigate', 'yahe-home')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span>{{ getText('就医指南', '就醫指南', 'Medical Guide') }}</span>
      <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh-CN' ? '简' : lang === 'zh-TW' ? '繁' : 'EN' }}</div>
    </div>
    <div class="page-body">
      <div v-if="!activeItem">
        <div class="guide-item" v-for="item in guideItems" :key="item.id" @click="activeItem = item">
          <div class="guide-icon" v-html="item.icon"></div>
          <div class="guide-text">
            <span class="guide-title">{{ getText(item.titleCn, item.titleTw, item.titleEn) }}</span>
            <span class="guide-sub">{{ getText(item.subCn, item.subTw, item.subEn) }}</span>
          </div>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#D6AE6C" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
      <div v-else>
        <button class="back-sub" @click="activeItem = null">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#D6AE6C" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
          {{ getText('返回', '返回', 'Back') }}
        </button>
        <div class="detail-title">{{ getText(activeItem.titleCn, activeItem.titleTw, activeItem.titleEn) }}</div>
        <div class="detail-content" v-html="getText(activeItem.contentCn, activeItem.contentTw, activeItem.contentEn)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['navigate'])
const lang = ref('zh-CN')
const activeItem = ref(null)

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

const guideItems = [
  {
    id: 1,
    titleCn: '国际医疗部介绍', titleTw: '國際醫療部介紹', titleEn: 'About Graceland',
    subCn: '中心简介、服务理念、专家团队', subTw: '中心簡介、服務理念、專家團隊', subEn: 'Introduction, philosophy, expert team',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#D6AE6C" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    contentCn: `<p>雅和医疗中心成立于2009年，是中山大学附属第六医院旗下的高端医疗服务品牌。</p>
<p>中心包括<strong>特需门诊、特需病房和高端体检区</strong>三部分，采用国际先进的医院运营管理模式。</p>
<p>特约专家200余人，常驻医护人员均经过严格挑选及培训，可为患者提供门急诊、住院、高端体检及医疗咨询等服务。</p>
<p>中心拥有丰富的涉外医疗经验，可协助安排国内外专家会诊，提供快速通道双向转诊服务。</p>`,
    contentTw: `<p>雅和醫療中心成立於2009年，是中山大學附屬第六醫院旗下的高端醫療服務品牌。</p>
<p>中心包括<strong>特需門診、特需病房和高端體檢區</strong>三部分，採用國際先進的醫院運營管理模式。</p>
<p>特約專家200餘人，常駐醫護人員均經過嚴格挑選及培訓，可為患者提供門急診、住院、高端體檢及醫療諮詢等服務。</p>
<p>中心擁有豐富的涉外醫療經驗，可協助安排國內外專家會診，提供快速通道雙向轉診服務。</p>`,
    contentEn: `<p>Graceland Medical Center was established in 2009 as the premium healthcare brand of the Sixth Affiliated Hospital of Sun Yat-sen University.</p>
<p>The center includes <strong>specialist outpatient clinic, VIP inpatient ward, and premium health check area</strong>, adopting international advanced hospital management models.</p>
<p>Over 200 top specialists with carefully selected resident medical staff provide outpatient, inpatient, premium health check and consultation services.</p>`
  },
  {
    id: 2,
    titleCn: '就医导航', titleTw: '就醫導航', titleEn: 'Navigation',
    subCn: '门诊楼位置、停车指引、交通路线', subTw: '門診樓位置、停車指引、交通路線', subEn: 'Location, parking, transportation',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#D6AE6C" stroke-width="1.5"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 00-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 00-8-8z"/></svg>`,
    contentCn: `<p><strong>地址：</strong>广州市天河区员村二横路26号</p>
<p><strong>雅和医疗中心位于：</strong>门诊楼3楼（特需门诊）、住院楼18-20楼（特需病房）</p>
<p><strong>停车：</strong>医院地下停车场，凭就诊记录可享优惠停车</p>
<p><strong>地铁：</strong>5号线员村站B出口，步行约8分钟</p>
<p><strong>公交：</strong>员村总站，多路公交可达</p>`,
    contentTw: `<p><strong>地址：</strong>廣州市天河區員村二橫路26號</p>
<p><strong>雅和醫療中心位於：</strong>門診樓3樓（特需門診）、住院樓18-20樓（特需病房）</p>
<p><strong>停車：</strong>醫院地下停車場，憑就診記錄可享優惠停車</p>
<p><strong>地鐵：</strong>5號線員村站B出口，步行約8分鐘</p>
<p><strong>公交：</strong>員村總站，多路公交可達</p>`,
    contentEn: `<p><strong>Address:</strong> 26 Yuancun Erheng Road, Tianhe District, Guangzhou</p>
<p><strong>Graceland Location:</strong> 3F Outpatient Building (Specialist Clinic), 18-20F Inpatient Building (VIP Wards)</p>
<p><strong>Parking:</strong> Underground parking available, discounted with medical record</p>
<p><strong>Metro:</strong> Line 5 Yuancun Station Exit B, ~8 min walk</p>`
  },
  {
    id: 3,
    titleCn: '联系方式', titleTw: '聯繫方式', titleEn: 'Contact',
    subCn: '服务热线、微信公众号、预约方式', subTw: '服務熱線、微信公眾號、預約方式', subEn: 'Hotline, WeChat, appointment methods',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#D6AE6C" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>`,
    contentCn: `<p><strong>服务热线：</strong>020-38777688</p>
<p><strong>服务时间：</strong>周一至周五 8:00-17:00</p>
<p><strong>微信公众号：</strong>中山大学附属第六医院雅和医疗</p>
<p><strong>官方网址：</strong>yahewx.mytijian.com</p>
<p><strong>预约方式：</strong>电话预约 / 微信公众号预约 / 本小程序在线预约</p>`,
    contentTw: `<p><strong>服務熱線：</strong>020-38777688</p>
<p><strong>服務時間：</strong>週一至週五 8:00-17:00</p>
<p><strong>微信公眾號：</strong>中山大學附屬第六醫院雅和醫療</p>
<p><strong>官方網址：</strong>yahewx.mytijian.com</p>
<p><strong>預約方式：</strong>電話預約 / 微信公眾號預約 / 本小程序在線預約</p>`,
    contentEn: `<p><strong>Hotline:</strong> 020-38777688</p>
<p><strong>Hours:</strong> Monday to Friday, 8:00-17:00</p>
<p><strong>WeChat:</strong> 中山大学附属第六医院雅和医疗</p>
<p><strong>Appointment:</strong> Phone / WeChat / This mini-program</p>`
  },
  {
    id: 4,
    titleCn: '就诊须知', titleTw: '就診須知', titleEn: 'Visit Guidelines',
    subCn: '首诊流程、证件要求、注意事项', subTw: '首診流程、證件要求、注意事項', subEn: 'First visit process, ID requirements',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#D6AE6C" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    contentCn: `<p><strong>首诊须知：</strong></p>
<ul>
<li>请携带有效身份证件（身份证/护照/港澳通行证）</li>
<li>外籍患者请携带护照原件</li>
<li>如有既往病历资料，请一并携带</li>
<li>建议提前15分钟到达，完成登记手续</li>
</ul>
<p><strong>支付方式：</strong>支持微信、支付宝、银行卡及商保直付</p>`,
    contentTw: `<p><strong>首診須知：</strong></p>
<ul>
<li>請攜帶有效身份證件（身份證/護照/港澳通行證）</li>
<li>外籍患者請攜帶護照原件</li>
<li>如有既往病歷資料，請一併攜帶</li>
<li>建議提前15分鐘到達，完成登記手續</li>
</ul>
<p><strong>支付方式：</strong>支持微信、支付寶、銀行卡及商保直付</p>`,
    contentEn: `<p><strong>First Visit Guidelines:</strong></p>
<ul>
<li>Please bring valid ID (ID card/passport/HK-Macau permit)</li>
<li>Foreign patients must bring original passport</li>
<li>Bring previous medical records if available</li>
<li>Arrive 15 minutes early for registration</li>
</ul>
<p><strong>Payment:</strong> WeChat Pay, Alipay, bank card, and insurance direct billing accepted</p>`
  },
]
</script>

<style scoped>
.yahe-page { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; }
.page-header { display: flex; align-items: center; padding: 54px 16px 12px; background: linear-gradient(180deg, #1a0a00, #2A1500); border-bottom: 1px solid rgba(214,174,108,0.2); }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; }
.page-header span { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 1px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; }
.page-body { padding: 16px; }

.guide-item { display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.2); border-radius: 12px; padding: 14px; margin-bottom: 10px; cursor: pointer; transition: all 0.2s; }
.guide-item:active { border-color: #D6AE6C; }
.guide-icon { width: 44px; height: 44px; background: rgba(214,174,108,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.guide-text { flex: 1; }
.guide-title { display: block; font-size: 15px; color: #F0E1B4; font-weight: 700; margin-bottom: 3px; }
.guide-sub { font-size: 12px; color: rgba(214,174,108,0.65); }

.back-sub { background: none; border: none; color: #D6AE6C; font-size: 14px; display: flex; align-items: center; gap: 4px; cursor: pointer; margin-bottom: 14px; padding: 0; }
.detail-title { font-size: 18px; font-weight: 800; color: #F0E1B4; margin-bottom: 16px; padding-left: 10px; border-left: 3px solid #D6AE6C; }
.detail-content { font-size: 14px; color: rgba(240,225,180,0.85); line-height: 1.8; background: linear-gradient(135deg, #1E0E00, #2A1500); border: 1px solid rgba(214,174,108,0.15); border-radius: 12px; padding: 16px; }
.detail-content :deep(p) { margin-bottom: 10px; }
.detail-content :deep(strong) { color: #D6AE6C; }
.detail-content :deep(ul) { padding-left: 16px; }
.detail-content :deep(li) { margin-bottom: 6px; }
</style>
