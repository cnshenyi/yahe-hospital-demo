<template>
  <div class="yahe-page">
    <div class="page-header">
      <button class="back-btn" @click="$emit('navigate', back)">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D6AE6C" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span>{{ title }}</span>
      <div class="lang-toggle" @click="toggleLang">{{ lang === 'zh' ? 'EN' : '中' }}</div>
    </div>
    <div class="page-body">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({ title: String, back: { type: String, default: 'yahe-home' } })
const emit = defineEmits(['navigate'])
const lang = ref('zh')
function toggleLang() { lang.value = lang.value === 'zh' ? 'en' : 'zh' }
</script>
<style scoped>
.yahe-page { min-height: 100%; background: #0D0D0D; color: #fff; font-family: -apple-system, 'PingFang SC', sans-serif; }
.page-header { display: flex; align-items: center; padding: 54px 16px 12px; background: linear-gradient(180deg, #1a0a00, #2A1500); border-bottom: 1px solid rgba(214,174,108,0.2); }
.back-btn { background: none; border: none; padding: 4px; cursor: pointer; display: flex; }
.page-header span { flex: 1; text-align: center; font-size: 17px; font-weight: 700; color: #F0E1B4; letter-spacing: 1px; }
.lang-toggle { width: 32px; height: 22px; border: 1px solid #D6AE6C; border-radius: 4px; font-size: 11px; color: #D6AE6C; display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 600; }
.page-body { padding: 16px; }
</style>
