<template>
  <div class="doc-my-page">
    <!-- Fixed Top -->
    <div class="fixed-top">
      <!-- iOS Status Bar (iPhone 17 Pro) -->
      <div class="ios-status-bar">
        <span class="sb-time">12:45</span>
        <div class="sb-island"></div>
        <div class="sb-right">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="white"><path d="M1.5 4.5C4.5 1.5 8.5.5 8.5.5s4 1 7 4" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M3.5 7C5.5 5 8.5 4 8.5 4s3 1 5 3" stroke="white" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="8.5" cy="10" r="1.5" fill="white"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity=".35"/></svg>
          <div class="sb-battery"><div class="sb-battery-body"><div class="sb-battery-level"></div></div><div class="sb-battery-cap"></div></div>
        </div>
      </div>

      <!-- Profile Header -->
      <div class="profile-header">
        <div class="header-bg"><div class="geo g1"></div><div class="geo g2"></div></div>
        <div class="profile-row">
          <img src="/images/doctor-zeng.png" class="doc-avatar" alt="doctor" />
          <div class="profile-text">
            <div class="name-row">
              <span class="doc-name">曾宪海</span>
              <span class="doc-badge">主任医师</span>
            </div>
            <span class="doc-org">深圳市龙岗区耳鼻咽喉医院</span>
            <span class="doc-social">粉丝 128 · 获赞 56 · 评分 4.9</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scrollable Content -->
    <div class="scroll-content">
    <!-- Stats -->
    <div class="stats-card">
      <div class="stat" v-for="s in mainStats" :key="s.label">
        <strong>{{ s.value }}</strong>
        <span>{{ s.label }}</span>
      </div>
    </div>

    <!-- Donut Chart -->
    <div class="chart-card">
      <div class="chart-header">
        <strong>接诊总览</strong>
        <div class="chart-tabs">
          <span class="ct active">近30天</span>
          <span class="ct">近12个月</span>
          <span class="ct">自定义</span>
        </div>
      </div>
      <div class="chart-area">
        <div class="donut-wrap">
          <svg viewBox="0 0 120 120" width="140" height="140">
            <!-- Background circle -->
            <circle cx="60" cy="60" r="48" fill="none" stroke="#f0f0f0" stroke-width="12"/>
            <!-- Online consultation (green) - 22/261 = 30.3° -->
            <circle cx="60" cy="60" r="48" fill="none" stroke="var(--primary)" stroke-width="12"
              stroke-dasharray="25.5 276" stroke-dashoffset="0" transform="rotate(-90 60 60)" stroke-linecap="round"/>
            <!-- Offline registration (blue) - 239/261 = 276° -->
            <circle cx="60" cy="60" r="48" fill="none" stroke="var(--primary-light)" stroke-width="12"
              stroke-dasharray="276 276" stroke-dashoffset="-25.5" transform="rotate(-90 60 60)" opacity=".4"/>
          </svg>
          <div class="donut-center">
            <strong>261</strong>
            <span>累计接诊</span>
          </div>
        </div>
        <div class="chart-legend">
          <div class="legend-item"><span class="dot" style="background:var(--primary)"></span>在线问诊 22</div>
          <div class="legend-item"><span class="dot" style="background:#E8E8E8"></span>检查检验 0</div>
          <div class="legend-item"><span class="dot" style="background:var(--primary-light);opacity:.5"></span>线下挂号 239</div>
        </div>
      </div>
    </div>

    <!-- Function Area -->
    <div class="func-card">
      <div class="func-grid">
        <div class="func-item" v-for="f in funcItems" :key="f.name">
          <div class="func-icon"><div v-html="f.svg"></div></div>
          <span>{{ f.name }}</span>
        </div>
      </div>
    </div>

    <!-- Menu List -->
    <div class="menu-list">
      <div class="menu-item" v-for="item in menuItems" :key="item">
        <span>{{ item }}</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ccc" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </div>
    </div>

    <div style="height: 130px"></div>
    </div><!-- end scroll-content -->
  </div>
</template>

<script setup>
import {
  iconDrSettings, iconDrOrders, iconDrMyQR, iconDrTeamSettings
} from '../../utils/icons.js'

const props = defineProps({ theme: { type: String, default: 'A' }, side: String })

const mainStats = [
  { value: 156, label: '在线问诊' },
  { value: 42, label: '检查检验' },
  { value: 1088, label: '线下挂号' },
  { value: 1286, label: '累计完成' },
]

const funcItems = [
  { name: '门诊设置', svg: iconDrSettings() },
  { name: '我的医嘱', svg: iconDrOrders() },
  { name: '二维码', svg: iconDrMyQR() },
  { name: '团队设置', svg: iconDrTeamSettings() },
]

const menuItems = ['我的文章', '我的评价', '新手教程', '常见问题', '关于我们', '系统设置']
</script>

<style scoped>
.doc-my-page { height: 100%; display: flex; flex-direction: column; background: var(--bg); position: relative; }
.doc-my-page::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 260px;
  background: var(--gradient-header); z-index: 0; pointer-events: none;
}

.fixed-top { flex-shrink: 0; z-index: 10; background: transparent; position: relative; }

.ios-status-bar {
  height: 54px; padding: 12px 24px 0; display: flex; justify-content: space-between; align-items: center;
  background: transparent; position: relative; z-index: 10;
}
.sb-time { color: #fff; font-size: 16px; font-weight: 700; width: 54px; }
.sb-island { width: 126px; height: 36px; background: #000; border-radius: 18px; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); }
.sb-right { display: flex; align-items: center; gap: 6px; }
.sb-battery { display: flex; align-items: center; }
.sb-battery-body { width: 22px; height: 11px; border: 1.5px solid #fff; border-radius: 2.5px; padding: 1.5px; }
.sb-battery-level { width: 75%; height: 100%; background: #fff; border-radius: 1px; }
.sb-battery-cap { width: 2px; height: 5px; background: #fff; border-radius: 0 1px 1px 0; margin-left: 1px; }

.profile-header {
  background: transparent; padding: 12px 16px 28px; position: relative; overflow: hidden;
}

.scroll-content { flex: 1; overflow-y: auto; overflow-x: hidden; padding-top: 0; position: relative; z-index: 1; }
.header-bg { position: absolute; inset: 0; pointer-events: none; }
.geo { position: absolute; border: 1px solid rgba(255,255,255,.06); border-radius: 50%; }
.geo.g1 { width: 180px; height: 180px; top: -50px; right: -30px; }
.geo.g2 { width: 120px; height: 120px; top: 10px; right: 10px; border-color: rgba(255,255,255,.04); }

.profile-row { display: flex; gap: 14px; align-items: center; position: relative; z-index: 2; }
.doc-avatar { width: 64px; height: 64px; border-radius: 50%; border: 3px solid rgba(255,255,255,.4); object-fit: cover; }
.profile-text { display: flex; flex-direction: column; gap: 3px; }
.name-row { display: flex; align-items: center; gap: 8px; }
.doc-name { font-size: 22px; font-weight: 700; color: #fff; }
.doc-badge { font-size: 11px; color: #fff; background: rgba(255,255,255,.25); padding: 2px 8px; border-radius: 4px; }
.doc-org { font-size: 13px; color: rgba(255,255,255,.8); }
.doc-social { font-size: 12px; color: rgba(255,255,255,.65); }

.stats-card {
  display: flex; background: #fff; margin: 12px 12px 0; border-radius: 12px;
  padding: 16px 0; box-shadow: 0 4px 16px rgba(0,0,0,.08); position: relative; z-index: 2;
}
.stat { flex: 1; text-align: center; display: flex; flex-direction: column; gap: 2px; }
.stat strong { font-size: 20px; font-weight: 700; color: var(--text-primary); }
.stat span { font-size: 11px; color: #999; }

.chart-card {
  margin: 12px 12px 0; background: #fff; border-radius: 12px; padding: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
}
.chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.chart-header strong { font-size: 17px; color: var(--text-primary); }
.chart-tabs { display: flex; gap: 0; background: #f5f5f5; border-radius: 6px; padding: 2px; }
.ct { font-size: 11px; color: #999; padding: 4px 10px; border-radius: 4px; }
.ct.active { background: #fff; color: var(--primary); font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,.08); }

.chart-area { display: flex; align-items: center; gap: 16px; }
.donut-wrap { position: relative; flex-shrink: 0; }
.donut-center {
  position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.donut-center strong { font-size: 28px; font-weight: 700; color: var(--text-primary); }
.donut-center span { font-size: 11px; color: #999; }

.chart-legend { display: flex; flex-direction: column; gap: 10px; }
.legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #666; }
.dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

.func-card {
  margin: 12px 12px 0; background: #fff; border-radius: 12px; padding: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
}
.func-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.func-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.func-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; }
.func-item span { font-size: 12px; color: #666; }

.menu-list {
  margin: 12px 12px 0; background: #fff; border-radius: 12px; overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
}
.menu-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px; border-bottom: .5px solid #f5f5f5;
}
.menu-item span { font-size: 14px; color: var(--text-primary); }
.menu-item:last-child { border-bottom: none; }

.android-nav {
  position: absolute; bottom: 0; left: 0; right: 0; height: 36px; background: #f5f5f5;
  display: flex; justify-content: center; align-items: center; gap: 60px; color: #999; font-size: 18px;
}
</style>
