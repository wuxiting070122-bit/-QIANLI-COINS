/* Local Anime.js enhancement. Content and actions never depend on animation. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const active = new Set();
  let previous = '', intent = null;
  function clear() { for (const a of active) a.revert(); active.clear(); }
  function run(targets, options) {
    if (reduced.matches || !window.anime || !targets || targets.length === 0) return;
    const a = anime.animate(targets, {duration: 380, ease: 'out(3)', ...options,
      onComplete: self => { self.revert(); active.delete(self); }});
    active.add(a);
  }
  const all = selector => document.querySelectorAll(selector);
  document.addEventListener('click', event => {
    const control = event.target.closest('button,a,summary');
    if (!control || control.disabled) return;
    intent = {bookmark:control.dataset.bookmark, place:control.dataset.place,
      action:control.dataset.action, filter:control.hasAttribute('data-library-filter') || control.hasAttribute('data-map-filter') || control.hasAttribute('data-filter'),
      studio:control.dataset.studio, answer:control.hasAttribute('data-answer')};
    const icon = control.querySelector('svg,[data-icon],.nav-coin');
    if (icon) run(icon,{scale:[0.8,1],rotate:control.matches('.settings-link')?[0,35,0]:[0,0],duration:300});
  }, true);
  reduced.addEventListener('change',clear);
  window.MotionUI = {
    before: clear,
    after(page) {
      const current = location.hash || '#splash';
      const changed = previous !== current;
      previous = current;
      if (changed) {
        const selectors = {
          splash:'.splash-page > *',
          home:'.welcome-topline,.welcome-intro,.coin-horizon,.welcome-panel',
          map:'.map-heading,.map-tabs,.map-canvas,.place-sheet',
          chat:'.chat-heading,.message-row,.chat-composer',
          play:'.cast-hero,.cast-body > *',
          library:'.library-page > *'
        };
        let targets = all(selectors[page] || '#app > :first-child > *');
        if (!targets.length) targets = all('#app > :first-child > *');
        run(targets,{opacity:[0,1],y:[page==='chat'?10:20,0],delay:window.anime?anime.stagger(35):0,duration:460});
        run(all('nav a[aria-current="page"] > span'),{scale:[0.75,1],duration:420});
      } else if (intent?.bookmark) {
        const buttons = [...all('[data-bookmark]')].filter(el=>el.dataset.bookmark===intent.bookmark);
        run(buttons,{scale:[0.84,1],duration:320});
      } else if (intent?.place) {
        run(all('.place-sheet'),{y:[16,0],opacity:[0.5,1]});
        run(all('.map-pin.is-selected'),{opacity:[0.4,1]});
      } else if (intent?.filter || intent?.studio==='reset-map') {
        run(all('.guide-row,.map-pin,.empty,.library-empty'),{opacity:[0,1],y:[8,0],delay:window.anime?anime.stagger(30):0});
      } else if (page==='map') {
        run(all('.map-options,#map-search,.place-sheet'),{opacity:[0,1],y:[8,0],duration:280});
      } else if (page==='quiz') {
        run(all(intent?.answer ? '.lens,.choice.correct' : '#app h2,#app .choice'),{opacity:[0.4,1],y:[8,0],duration:300});
      } else if (page==='play') {
        run(all('.arc-progress .done > *, .arc-progress .next > *, .orbit-caption'),{opacity:[0.3,1],scale:[0.94,1]});
      } else if (page==='chat') {
        run(all('.message-row:last-child'),{opacity:[0,1],x:[12,0]});
        run(all('.chat-tools'),{opacity:[0,1],y:[8,0]});
      } else {
        run(all('#app .notice,#app .empty,#app .quiz-feedback,#app .options,#app .feedback'),{opacity:[0,1],y:[6,0]});
      }
      intent = null;
    },
    toast() { run(document.getElementById('toast'),{opacity:[0,1],scale:[0.94,1],duration:240}); }
  };
})();
