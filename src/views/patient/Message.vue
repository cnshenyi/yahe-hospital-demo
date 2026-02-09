<template>
  <div class="message-page">
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

      <!-- Header -->
      <div class="msg-header">
        <span class="msg-title">消息</span>
        <div class="wechat-capsule">
          <span class="cap-dots">···</span>
          <span class="cap-divider"></span>
          <span class="cap-circle">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
          </span>
        </div>
      </div>
    </div>

    <!-- Scrollable Content -->
    <div class="scroll-content">    <!-- Message List -->
    <div class="msg-list">
      <div class="msg-item" v-for="m in messages" :key="m.name">
        <div class="msg-avatar" :style="{ background: m.avatarBg }">
          <div v-html="m.avatarSvg"></div>
          <div v-if="m.badge" class="msg-badge">{{ m.badge }}</div>
        </div>
        <div class="msg-content">
          <div class="msg-top">
            <span class="msg-name">{{ m.name }} <span v-if="m.title" class="msg-tag">{{ m.title }}</span></span>
            <span class="msg-time">{{ m.time }}</span>
          </div>
          <p class="msg-preview">{{ m.preview }}</p>
        </div>
      </div>
    </div>

    <div class="msg-end">没有更多数据了</div>
    <div style="height: 120px"></div>
    </div><!-- end scroll-content -->
  </div>
</template>

<script setup>
const messages = [
  {
    name: '互联网医院通知', title: '', time: '今天 10:30',
    preview: '您的挂号订单已确认，请按时就诊',
    avatarBg: 'var(--primary)', badge: 3,
    avatarSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>'
  },
  {
    name: '李啸峰', title: '主任医师', time: '昨天 15:22',
    preview: '[模版消息] 您的检查报告已出，请查看',
    avatarBg: '#f0f0f0', badge: 1,
    avatarSvg: '<img src="/doctor.png" style="width:100%;height:100%;object-fit:cover;border-radius:12px" />'
  },
  {
    name: '系统消息', title: '', time: '02-07',
    preview: '您的处方已开具，请及时缴费取药',
    avatarBg: '#FFF3E0', badge: 0,
    avatarSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="#FF9800"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
  },
  {
    name: '王医生', title: '副主任医师', time: '02-05',
    preview: '您好，根据您的检查结果，建议...',
    avatarBg: '#f0f0f0', badge: 0,
    avatarSvg: '<img src="/doctor.png" style="width:100%;height:100%;object-fit:cover;border-radius:12px" />'
  },
]
</script>

<style scoped>
.message-page { height: 100%; display: flex; flex-direction: column; background: var(--bg); position: relative; }
.message-page::before {
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

.msg-header {
  background: transparent; padding: 6px 16px 14px; display: flex; align-items: center; justify-content: center; position: relative;
}

.scroll-content { flex: 1; overflow-y: auto; overflow-x: hidden; padding-top: 12px; position: relative; z-index: 1; }
.msg-title { font-size: 18px; font-weight: 700; color: #fff; }
.wechat-capsule {
  position: absolute; right: 16px; display: flex; align-items: center; background: rgba(255,255,255,.25);
  border: .5px solid rgba(255,255,255,.35); border-radius: 16px; height: 30px; padding: 0 2px;
}
.cap-dots { padding: 0 9px; font-size: 20px; color: #fff; letter-spacing: 3px; line-height: 1; }
.cap-divider { width: .5px; height: 16px; background: rgba(255,255,255,.45); }
.cap-circle { padding: 0 7px; display: flex; align-items: center; }

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
.msg-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
.msg-name { font-size: 15px; color: var(--text-primary); font-weight: 600; }
.msg-tag { font-size: 11px; color: var(--primary); background: rgba(var(--primary-rgb),.1); padding: 1px 6px; border-radius: 4px; font-weight: 500; margin-left: 4px; }
.msg-time { font-size: 12px; color: #bbb; }
.msg-preview { font-size: 13px; color: #999; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.msg-end { text-align: center; padding: 20px; font-size: 12px; color: #ccc; }
</style>
