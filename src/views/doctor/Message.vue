<template>
  <div class="doc-msg-page">
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

      <div class="page-header"><span class="page-title">消息</span></div>
    </div>

    <!-- Scrollable Content -->
    <div class="scroll-content">
    <div class="msg-list">
      <div class="msg-item" v-for="m in messages" :key="m.name">
        <div class="msg-avatar" :style="{ background: m.bg }">
          <div v-html="m.svg"></div>
          <div v-if="m.badge" class="msg-badge">{{ m.badge }}</div>
        </div>
        <div class="msg-content">
          <div class="msg-top">
            <span class="msg-name">{{ m.name }}</span>
            <span class="msg-time">{{ m.time }}</span>
          </div>
          <p class="msg-preview">{{ m.preview }}</p>
        </div>
      </div>
    </div>

    <div class="msg-end">没有更多数据了</div>
    <div style="height: 130px"></div>
    </div><!-- end scroll-content -->
  </div>
</template>

<script setup>
const messages = [
  { name: '张三', time: '09:30', preview: '医生您好，我的血压最近偏高...', badge: 2, bg: '#E3F2FD', svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="#1E88E5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' },
  { name: '系统通知', time: '昨天', preview: '您有3条待处理的检查检验申请', badge: 3, bg: 'var(--primary)', svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>' },
  { name: '李女士', time: '02-08', preview: '好的医生，我会按时服药的', badge: 0, bg: '#FCE4EC', svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="#E91E63"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' },
  { name: '王先生', time: '02-07', preview: '检查报告已收到，谢谢医生', badge: 0, bg: '#E8F5E9', svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="#43A047"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' },
]
</script>

<style scoped>
.doc-msg-page { height: 100%; display: flex; flex-direction: column; background: var(--bg); position: relative; }
.doc-msg-page::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 120px;
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

.page-header { background: transparent; padding: 6px 16px 14px; text-align: center; }

.scroll-content { flex: 1; overflow-y: auto; overflow-x: hidden; padding-top: 12px; position: relative; z-index: 1; }
.page-title { font-size: 18px; font-weight: 700; color: #fff; }

.msg-list { padding: 8px 0; }
.msg-item {
  display: flex; align-items: center; gap: 12px; padding: 14px 16px;
  background: #fff; border-bottom: .5px solid #f0f0f0;
}
.msg-avatar {
  width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center;
  justify-content: center; flex-shrink: 0; position: relative;
}
.msg-badge {
  position: absolute; top: -4px; right: -4px; min-width: 18px; height: 18px;
  background: #FF4444; border-radius: 9px; font-size: 11px; color: #fff;
  display: flex; align-items: center; justify-content: center; padding: 0 4px; font-weight: 600;
}
.msg-content { flex: 1; min-width: 0; }
.msg-top { display: flex; justify-content: space-between; margin-bottom: 4px; }
.msg-name { font-size: 15px; font-weight: 600; color: var(--text-primary); }
.msg-time { font-size: 12px; color: #bbb; }
.msg-preview { font-size: 13px; color: #999; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.msg-end { text-align: center; padding: 20px; font-size: 12px; color: #ccc; }

.android-nav {
  position: absolute; bottom: 0; left: 0; right: 0; height: 36px; background: #f5f5f5;
  display: flex; justify-content: center; align-items: center; gap: 60px; color: #999; font-size: 18px;
}
</style>
