<template>
  <div class="patients-page">
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

      <div class="page-header">
        <span class="page-title">患者</span>
      </div>
    </div>

    <!-- Scrollable Content -->
    <div class="scroll-content">
    <div class="search-bar">
      <div class="search-input">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <span>搜索患者姓名</span>
      </div>
    </div>

    <div class="patient-list">
      <div class="patient-item" v-for="p in patients" :key="p.name">
        <div class="p-avatar" :style="{ background: p.color }">
          <span>{{ p.name[0] }}</span>
        </div>
        <div class="p-info">
          <div class="p-top">
            <span class="p-name">{{ p.name }}</span>
            <span class="p-gender">{{ p.gender }} {{ p.age }}岁</span>
            <span class="p-time">{{ p.time }}</span>
          </div>
          <p class="p-diag">{{ p.diagnosis }}</p>
        </div>
      </div>
    </div>

    <div style="height: 130px"></div>
    </div><!-- end scroll-content -->
  </div>
</template>

<script setup>
const patients = [
  { name: '张三', gender: '男', age: 45, time: '今天 09:30', diagnosis: '高血压病3级，高危', color: '#E3F2FD' },
  { name: '李女士', gender: '女', age: 32, time: '今天 10:15', diagnosis: '妊娠期糖尿病', color: '#FCE4EC' },
  { name: '王先生', gender: '男', age: 58, time: '昨天 14:20', diagnosis: '2型糖尿病，慢性胃炎', color: '#E8F5E9' },
  { name: '赵女士', gender: '女', age: 67, time: '昨天 11:00', diagnosis: '冠心病，心房颤动', color: '#FFF3E0' },
  { name: '陈先生', gender: '男', age: 41, time: '02-07', diagnosis: '慢性乙型肝炎', color: '#F3E5F5' },
  { name: '刘女士', gender: '女', age: 55, time: '02-06', diagnosis: '甲状腺功能亢进症', color: '#E0F2F1' },
]
</script>

<style scoped>
.patients-page { height: 100%; display: flex; flex-direction: column; background: var(--bg); position: relative; }
.patients-page::before {
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

.page-header {
  background: transparent; padding: 6px 16px 14px; text-align: center;
}

.scroll-content { flex: 1; overflow-y: auto; overflow-x: hidden; padding-top: 12px; position: relative; z-index: 1; }
.page-title { font-size: 18px; font-weight: 700; color: #fff; }

.search-bar { padding: 12px 16px; }
.search-input {
  display: flex; align-items: center; gap: 8px; background: #fff; border-radius: 20px;
  padding: 10px 16px; box-shadow: 0 1px 6px rgba(0,0,0,.05);
}
.search-input span { color: #ccc; font-size: 14px; }

.patient-list { padding: 0 12px; }
.patient-item {
  display: flex; gap: 12px; padding: 14px; background: #fff; border-radius: 12px;
  margin-bottom: 8px; box-shadow: 0 1px 6px rgba(0,0,0,.04); align-items: center;
}
.p-avatar {
  width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center;
  justify-content: center; flex-shrink: 0; font-size: 16px; font-weight: 700; color: var(--primary);
}
.p-info { flex: 1; min-width: 0; }
.p-top { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.p-name { font-size: 15px; font-weight: 600; color: var(--text-primary); }
.p-gender { font-size: 12px; color: #999; }
.p-time { margin-left: auto; font-size: 12px; color: #bbb; }
.p-diag { font-size: 13px; color: #888; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.android-nav {
  position: absolute; bottom: 0; left: 0; right: 0; height: 36px; background: #f5f5f5;
  display: flex; justify-content: center; align-items: center; gap: 60px; color: #999; font-size: 18px;
}
</style>
