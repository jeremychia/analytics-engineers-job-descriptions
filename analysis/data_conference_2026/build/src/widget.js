/* Chart widget and the text around it, for the charts on the main pages. One chart animates at a time. */
const WIDGET = { cur: null };
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const chartDef = id => [...SLIDES, ...EXTRA].find(x => x.id === id);
const PLAIN_VERDICT = { conclusive: 'clear', suggestive: 'likely', descriptive: 'counted', inconclusive: 'unclear', untested: 'untested' };   // no longer than the deck's word, so captions laid out after a pill still fit
function wCount(W) { W.count.textContent = `step ${W.step} of ${W.steps.length}`; W.next.disabled = W.step >= W.steps.length; }
function wMount(W) { Anim.cancel(); Anim.fast = false; W.stage.innerHTML = ''; tip.hide(); W.steps = W.def.build(W.stage); W.step = 0; wCount(W); }
async function wTo(W, k) {
  wMount(W); Anim.fast = true;
  for (let j = 0; j < Math.min(k, W.steps.length); j++) { W.step++; await W.steps[j](); }
  Anim.fast = false; wCount(W);
}
async function wNext(W) { if (W.step >= W.steps.length) return; const k = W.step++; wCount(W); await W.steps[k](); }
async function wFocus(W) {               // settle the chart that was playing, then start this one
  if (WIDGET.cur === W) return;
  const prev = WIDGET.cur; WIDGET.cur = W;
  if (prev && prev.steps && prev.stage.isConnected) await wTo(prev, prev.step);
  if (!W.steps) { if (REDUCED) await wTo(W, Infinity); else { wMount(W); await wNext(W); } }
}
function chartWidget(def, method) {
  const W = { def, stage: h('div', { class: 'vstage' }), steps: null, step: 0, count: h('span', { class: 'n', 'aria-live': 'polite' }) };
  const btn = (label, fn) => { const b = h('button', { type: 'button' }, label); b.addEventListener('click', async () => { await wFocus(W); fn(); }); return b; };
  W.next = btn('Next step ▶', () => wNext(W));
  W.el = h('figure', { class: 'vcard' },
    h('figcaption', { class: 'vt', html: def.title }), W.stage, h('p', { class: 'vhint' }, 'Swipe sideways to see the whole chart.'),
    h('div', { class: 'vctl' }, btn('↺ Replay', () => { wMount(W); wNext(W); }), btn('◀ Back a step', () => wTo(W, Math.max(1, W.step - 1))), W.next,
      btn('Show all', () => wTo(W, Infinity)), h('span', { class: 'sp' }), W.count),
    h('details', { class: 'vmethod' }, h('summary', {}, 'How this was measured'), h('p', {}, method)));
  return W;
}
function questionBlocks(q) {               // lead goes above the chart, after goes below it
  const after = [];
  if (q.actions) after.push(h('div', { class: 'qdo' }, q.actions.map(a => h('div', {}, h('b', {}, a.who), h('p', {}, a.text)))));
  if (q.verdicts) after.push(h('div', { class: 'qsure' }, h('div', { class: 'vkick' }, 'How sure'),
    q.verdicts.map(v => h('p', {}, h('span', { class: 'pill ' + v.word, style: { color: VERDICT[v.word], borderColor: VERDICT[v.word] } }, PLAIN_VERDICT[v.word]), h('span', {}, v.text)))));
  return { lead: [h('p', { class: 'qanswer' }, q.answer), h('div', { class: 'qbody' }, (q.body || []).map(p => h('p', {}, p)))], after };
}
