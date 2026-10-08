/* English is the first-run default. Language preference is independent of user content. */
(function () {
  const key = 'qianli-language';
  let language = 'en';
  try { if (localStorage.getItem(key) === 'zh-CN') language = 'zh-CN'; } catch {}
  window.APP_LANGUAGE = language;
  window.setLanguage = function (next) {
    if (!['en', 'zh-CN'].includes(next) || next === language) return;
    try { localStorage.setItem(key, next); } catch {
      document.getElementById('toast').textContent = language === 'en'
        ? 'Your browser could not save the language preference.' : '浏览器无法保存语言设置。';
      document.getElementById('toast').style.display = 'block';
      return;
    }
    location.reload();
  };
  document.documentElement.lang = language;
  if (language === 'zh-CN') {
    document.title = '千里铜钱 · 让文化在日常延续';
    document.querySelector('.brand').innerHTML = '<span class="brand-coin">▣</span><span>千里铜钱<small>让文化在日常延续</small></span>';
    document.querySelector('.settings-link').setAttribute('aria-label', '设置');
    document.querySelector('nav').setAttribute('aria-label', '主导航');
    const labels = ['首页', '藏书', '起卦', '共读', '足迹'];
    document.querySelectorAll('nav a').forEach((a, i) => a.lastChild.textContent = labels[i]);
  }
  const prefix = language === 'en' ? 'js/locales/en/' : 'js/';
  function load(name) { return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = ['studio', 'journey', 'motion', 'vendor/anime.umd.min'].includes(name) ? 'js/' + name + '.js' : prefix + name + '.js'; script.onload = resolve; script.onerror = reject;
    document.body.appendChild(script);
  }); }
  (async () => {
    try { for (const name of ['vendor/anime.umd.min', 'motion']) { try { await load(name); } catch {} }
      for (const name of ['hexagrams', 'engine', 'knowledge', 'studio', 'journey', 'app']) await load(name); }
    catch { document.getElementById('app').textContent = language === 'en' ? 'Unable to load. Please refresh the page.' : '加载失败，请刷新页面。'; }
  })();
})();
