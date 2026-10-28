/* Embed runtime for the main pages: fills each [data-q] element with that question's chart, including elements the page adds later.
   data-q: question id · data-who: comma list of action audiences to keep (looking, hiring, starting, moving) · data-body: show the explanation · data-note: appended to the line under the title. */
function qvFigure(el) {
  const q = Q.find(x => x.id === el.dataset.q);
  if (!q || el.dataset.qvMounted) return;
  el.dataset.qvMounted = '1';
  const who = el.dataset.who ? el.dataset.who.split(',') : null;
  const parts = questionBlocks({ ...q, body: 'body' in el.dataset ? q.body : [], actions: (q.actions || []).filter(a => !who || who.includes(a.for)) });
  const def = chartDef(q.id), W = chartWidget(def, q.method);
  const sub = [q.q, `all ${D.corpus_n.toLocaleString('en-GB')} ads`, el.dataset.note].filter(Boolean).join(' · ');
  el.classList.add('qv', 'qv-fig');
  el.append(h('div', { class: 'qv-title', html: def.title }), h('div', { class: 'qv-sub' }, sub), ...parts.lead, W.el, ...parts.after);
  new IntersectionObserver((es, io) => { if (es.some(e => e.isIntersecting)) { io.disconnect(); wFocus(W); } }, { threshold: .35 }).observe(W.stage);
}
const deckTag = tag;
tag = (parent, x, y, word, o = {}) => {        // same pill as the deck, with the plain word
  const g = deckTag(parent, x, y, word, o), plain = PLAIN_VERDICT[word], size = o.size || 14;
  if (!plain || plain === word) return g;
  const w = plain.length * size * .62 + size * 1.4;
  g.querySelector('rect').setAttribute('width', w);
  Object.assign(g.querySelector('text'), { textContent: plain }).setAttribute('x', w / 2);
  if (o.anchor === 'end') g.setAttribute('transform', `translate(${x - w},${y - size})`);
  return g;
};
function qvScan(root) { if (root.matches && root.matches('[data-q]')) qvFigure(root); root.querySelectorAll('[data-q]').forEach(qvFigure); }
document.head.append(h('style', { id: 'qv-style' }, QV_CSS));
qvScan(document.body);
const target = location.hash && document.getElementById(location.hash.slice(1));
if (target) requestAnimationFrame(() => target.scrollIntoView());   // the charts above it have just changed the page height
new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) qvScan(n); }))).observe(document.body, { childList: true, subtree: true });
