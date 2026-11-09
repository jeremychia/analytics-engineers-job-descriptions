/* Explorer runtime: one visual at a time, with replay and step controls. */
const XP = { tabs: [], cur: 0, step: 0, steps: [] };
function xpMount(i, fast = false) {
  const T = XP.tabs[i], st = $('#vstage'); Anim.cancel(); Anim.fast = fast; st.innerHTML = ''; tip.hide();
  XP.cur = i; XP.steps = T.build(st); XP.step = 0;
  $('#vk').textContent = T.chapter; $('#vt').innerHTML = T.title; $('#vf').textContent = (Q.find(q => q.id === T.id) || {}).method || T.foot || '';
  $$('#vtabs button').forEach((b, k) => b.setAttribute('aria-selected', String(k === i))); xpCount();
}
function xpCount() { $('#vn').textContent = `step ${XP.step} of ${XP.steps.length}`; }
async function xpNext() { if (XP.step >= XP.steps.length) return; const k = XP.step++; xpCount(); await XP.steps[k](); }
async function xpTo(k, fast) { xpMount(XP.cur, true); for (let j = 0; j < k; j++) { XP.step++; await XP.steps[j](); } Anim.fast = false; xpCount(); }
function initExplorer() {
  XP.tabs = STORY_CHARTS;
  XP.tabs.forEach((T, i) => $('#vtabs').append(h('button', { role: 'tab', onclick: `xpMount(${i});xpNext()` }, T.name)));
  $('#b-replay').onclick = () => { xpMount(XP.cur); xpNext(); };
  $('#b-next').onclick = () => xpNext();
  $('#b-prev').onclick = async () => { const k = Math.max(0, XP.step - 1); Anim.cancel(); await xpTo(k); };
  $('#b-final').onclick = async () => { Anim.cancel(); await xpTo(XP.steps.length); };
  addEventListener('keydown', e => { if (e.target.closest('select,input')) return; if (e.key === 'ArrowRight') xpNext(); else if (e.key === 'ArrowLeft') $('#b-prev').onclick(); });
  xpMount(0); xpNext();
  window.__xp = async (i, k) => { Anim.cancel(); XP.cur = i; await xpTo(k); };    // test hook
}
