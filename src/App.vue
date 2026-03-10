<template>
  <div class="control-panel">
    <div class="ctrl-group">
      <span class="ctrl-label">Theme:</span>
      <div class="ctrl-btns">
        <button class="ctrl-btn" :class="{ active: theme === 'A' }" @click="setTheme('A')">A 龙岗紫</button>
        <button class="ctrl-btn" :class="{ active: theme === 'B' }" @click="setTheme('B')">B 科技蓝绿</button>
      </div>
    </div>
    <div class="ctrl-group">
      <span class="ctrl-label">Mode:</span>
      <div class="ctrl-btns">
        <button class="ctrl-btn" :class="{ active: side === 'patient' }" @click="setSide('patient')">患者端</button>
        <button class="ctrl-btn" :class="{ active: side === 'doctor' }" @click="setSide('doctor')">医生端</button>
      </div>
    </div>
    <div class="ctrl-group">
      <span class="ctrl-label">Page:</span>
      <div class="ctrl-btns">
        <button
          v-for="(page, idx) in currentPages"
          :key="page.path"
          class="ctrl-btn"
          :class="{ active: currentPageIdx === idx }"
          @click="goToPage(idx)"
        >{{ page.label }}</button>
      </div>
    </div>
  </div>

  <div class="phone-wrapper">
    <div class="phone-frame" :data-theme="theme">
      <div class="phone-screen hide-scrollbar" ref="screenRef">
        <router-view :theme="theme" :side="side" />
      </div>
      <!-- Tab Bar -->
      <div class="tab-bar">
        <div
          v-for="(page, idx) in currentPages"
          :key="page.path"
          class="tab-bar-item"
          :class="{ active: currentPageIdx === idx }"
          @click="goToPage(idx)"
        >
          <component :is="page.icon" :active="currentPageIdx === idx" :theme="theme" />
          <span>{{ page.label }}</span>
          <div v-if="page.badge" class="dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { tabHome, tabHealth, tabMessage, tabMy, tabWorkstation, tabPatients, themeColors } from './utils/icons.js'

const router = useRouter()
const route = useRoute()

const theme = ref('A')
const side = ref('patient')

// Solid filled tab bar icons — color is injected based on active state + theme
function makeTabIcon(iconFn) {
  return {
    props: ['active', 'theme'],
    render(ctx) {
      const tc = themeColors(ctx.theme || 'A')
      const color = ctx.active ? tc.p : '#B0BEC5'
      return h('div', { innerHTML: iconFn(color) })
    }
  }
}

const IconHome = makeTabIcon(tabHome)
const IconHealth = makeTabIcon(tabHealth)
const IconMsg = makeTabIcon(tabMessage)
const IconUser = makeTabIcon(tabMy)
const IconWorkstation = makeTabIcon(tabWorkstation)
const IconPatients = makeTabIcon(tabPatients)

const patientPages = [
  { path: '/patient/home', label: '首页', icon: IconHome },
  { path: '/patient/health', label: '健康', icon: IconHealth },
  { path: '/patient/message', label: '消息', icon: IconMsg, badge: true },
  { path: '/patient/my', label: '我的', icon: IconUser },
]

const doctorPages = [
  { path: '/doctor/workstation', label: '工作台', icon: IconWorkstation },
  { path: '/doctor/patients', label: '患者', icon: IconPatients },
  { path: '/doctor/message', label: '消息', icon: IconMsg, badge: true },
  { path: '/doctor/my', label: '我的', icon: IconUser },
]

const currentPages = computed(() => side.value === 'patient' ? patientPages : doctorPages)
const currentPageIdx = computed(() => {
  const idx = currentPages.value.findIndex(p => route.path === p.path)
  return idx >= 0 ? idx : 0
})

const screenRef = ref(null)

function setTheme(t) {
  theme.value = t
}

function setSide(s) {
  side.value = s
  const pages = s === 'patient' ? patientPages : doctorPages
  router.push(pages[0].path)
  if (screenRef.value) screenRef.value.scrollTop = 0
}

function goToPage(idx) {
  router.push(currentPages.value[idx].path)
  if (screenRef.value) screenRef.value.scrollTop = 0
}

// Initialize
router.push('/patient/home')
</script>

<style scoped>
</style>
