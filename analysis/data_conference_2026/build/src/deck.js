/* Deck runtime: sections, steps (Space/Right/Enter build, Left unbuild), pills, progress, replay on entry. */
const DECK = { cur: 0, step: 0, steps: [], busy: false };
function mountSlide(i) {
  const sec = $$('section.slide')[i], stage = $('.stage', sec);
  Anim.cancel(); Anim.fast = false; stage.innerHTML = ''; tip.hide();
  DECK.steps = SLIDES[i].build(stage); DECK.step = 0; DECK.cur = i; updateDots();
}
async function playTo(i, k) {            // rebuild slide i and run steps up to (and including) k-1 instantly, then animate step k-1 if animate
  mountSlide(i); Anim.fast = true;
  for (let j = 0; j < k - 1; j++) { await DECK.steps[j](); }
  Anim.fast = false; DECK.step = k - 1; await advance(true);
}
async function advance(first) {
  if (DECK.step >= DECK.steps.length) return false;
  const k = DECK.step; DECK.step++; updateDots();
  await DECK.steps[k]();
  return true;
}
function updateDots() { const d = $('#stepdots'); if (!d) return; d.innerHTML = ''; for (let k = 0; k < DECK.steps.length; k++) d.append(h('i', { class: k < DECK.step ? 'on' : '' })); }
function goSlide(i, behavior = 'smooth', mode = 'first') { i = Math.max(0, Math.min(SLIDES.length - 1, i)); DECK.mode = mode; $$('section.slide')[i].scrollIntoView({ behavior }); }
async function next() {
  if (DECK.step < DECK.steps.length) { await advance(); return; }
  if (DECK.cur < SLIDES.length - 1) goSlide(DECK.cur + 1);
}
async function prev() {
  if (DECK.step > 1) { Anim.cancel(); await playTo(DECK.cur, DECK.step - 1); return; }
  if (DECK.cur > 0) goSlide(DECK.cur - 1, 'smooth', 'final');   // previous slide, as you left it; keep pressing back to unbuild it
}
async function showFinal(i) {              // mount slide i with every step already shown
  mountSlide(i); Anim.fast = true;
  for (let j = 0; j < DECK.steps.length; j++) { DECK.step = j + 1; await DECK.steps[j](); }
  Anim.fast = false; updateDots();
}
function initDeck() {
  const main = $('#deck');
  SLIDES.forEach((S, i) => main.append(h('section', { class: 'slide', id: 's-' + S.id },
    h('div', { class: 'kick' }, S.kick), h('h1', { html: S.title }), h('div', { class: 'stage' }), h('div', { class: 'foot' }, h('span', {}, S.foot), h('span', { class: 'cnt' }, `${i + 1} / ${SLIDES.length}`)))));
  const tabs = $('#tabs'); SLIDES.forEach((S, i) => tabs.append(h('button', { role: 'tab', onclick: `goSlide(${i})` }, `${i + 1}. ${S.name}`)));
  document.body.append(h('div', { id: 'stepdots', title: 'build steps: space or → to reveal the next one' }));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const i = $$('section.slide').indexOf(e.target);
    $$('#tabs button').forEach((b, j) => b.setAttribute('aria-selected', String(j === i))); if (i !== DECK.cur || DECK.steps.length === 0 || !DECK.started) { DECK.started = true; const m = DECK.mode; DECK.mode = 'first'; if (m === 'final') showFinal(i); else { mountSlide(i); advance(); } } } }), { threshold: .6 });
  $$('section.slide').forEach(sct => io.observe(sct));
  addEventListener('keydown', e => { if (['ArrowRight', ' ', 'Enter', 'PageDown', 'ArrowDown'].includes(e.key)) { e.preventDefault(); next(); }
    else if (['ArrowLeft', 'PageUp', 'ArrowUp', 'Backspace'].includes(e.key)) { e.preventDefault(); prev(); } });
  $('#deck').addEventListener('click', e => { if (e.target.closest('button,select,a,.tchip')) return; if (e.clientX < innerWidth * .2) prev(); else next(); });
  const nav = h('div', { id: 'navbtns' }, h('button', { 'aria-label': 'Back', onclick: 'prev()' }, '‹'), h('button', { 'aria-label': 'Next', onclick: 'next()' }, '›'));
  document.body.append(nav);
  window.__show = async (i, k) => { goSlide(i, 'instant'); await new Promise(r => setTimeout(r, 120)); Anim.cancel(); await playTo(i, k); };   // test hook
}
