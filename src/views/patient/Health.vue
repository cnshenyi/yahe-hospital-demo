<template>
  <div class="health-page">
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
      <div class="health-header">
        <div class="header-tabs">
          <span class="htab active">推荐</span>
          <span class="htab">我的收藏</span>
        </div>
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
    <div class="scroll-content">
    <div class="search-bar">
      <div class="search-input">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <span>搜索健康知识</span>
      </div>
    </div>

    <!-- Content Tabs -->
    <div class="content-tabs">
      <span class="ctab active">图文</span>
      <span class="ctab">视频</span>
    </div>

    <!-- Articles -->
    <div class="articles">
      <div class="article-card" v-for="a in articles" :key="a.title">
        <h3>{{ a.title }}</h3>
        <div class="article-img">
          <img :src="a.img" :alt="a.title" />
        </div>
        <div class="article-footer">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#999" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
          <span>{{ a.likes }}</span>
        </div>
      </div>
    </div>

    <div style="height: 120px"></div>
    </div><!-- end scroll-content -->
  </div>
</template>

<script setup>
const articles = [
  { title: '春季养生：这5种食物要多吃', img: '/images/health-article1.png', likes: 128 },
  { title: '高血压患者日常注意事项', img: '/images/health-article2.png', likes: 256 },
  { title: '糖尿病饮食管理全攻略', img: '/images/health-article3.png', likes: 89 },
]
</script>

<style scoped>
.health-page { height: 100%; display: flex; flex-direction: column; background: var(--bg); position: relative; }
.health-page::before {
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

.health-header {
  background: transparent; padding: 8px 16px 14px; display: flex; align-items: center; justify-content: space-between;
}

.scroll-content { flex: 1; overflow-y: auto; overflow-x: hidden; padding-top: 12px; position: relative; z-index: 1; }
.header-tabs { display: flex; gap: 20px; }
.htab { font-size: 17px; color: rgba(255,255,255,.6); font-weight: 500; }
.htab.active { color: #fff; font-weight: 700; font-size: 19px; }

.wechat-capsule {
  display: flex; align-items: center; background: rgba(255,255,255,.25);
  border: .5px solid rgba(255,255,255,.35); border-radius: 16px; height: 30px; padding: 0 2px;
}
.cap-dots { padding: 0 9px; font-size: 20px; color: #fff; letter-spacing: 3px; line-height: 1; }
.cap-divider { width: .5px; height: 16px; background: rgba(255,255,255,.45); }
.cap-circle { padding: 0 7px; display: flex; align-items: center; }

.search-bar { padding: 12px 16px 0; }
.search-input {
  display: flex; align-items: center; gap: 8px; background: #fff; border-radius: 20px;
  padding: 10px 16px; box-shadow: 0 1px 6px rgba(0,0,0,.05);
}
.search-input span { color: #ccc; font-size: 14px; }

.content-tabs { padding: 14px 16px 0; display: flex; gap: 24px; }
.ctab { font-size: 14px; color: #999; padding-bottom: 8px; position: relative; }
.ctab.active { color: var(--text-primary); font-weight: 700; }
.ctab.active::after {
  content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 20px; height: 3px; background: var(--primary); border-radius: 2px;
}

.articles { padding: 12px 16px; }
.article-card { background: #fff; border-radius: 12px; margin-bottom: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.05); }
.article-card h3 { padding: 14px 14px 10px; font-size: 15px; color: var(--text-primary); line-height: 1.4; }
.article-img { height: 160px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.article-img img { width: 100%; height: 100%; object-fit: cover; }
.article-footer { padding: 10px 14px; display: flex; align-items: center; gap: 4px; border-top: 1px solid #f5f5f5; }
.article-footer span { font-size: 12px; color: #999; }
</style>
