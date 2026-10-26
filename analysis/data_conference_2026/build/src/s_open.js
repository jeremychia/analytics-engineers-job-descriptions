/* Slide: one real ad that says junior and asks for years. Says versus asks, then the ruler. Reused for the closing slide. */
function adRuler(parent, o) {
  const svg = s('svg', { viewBox: '0 0 1000 150', class: 'ruler' }, parent);
  const X = v => 70 + v * 143, z = o.zone;
  s('rect', { x: X(z[0]), y: 52, width: X(z[1]) - X(z[0]), height: 34, rx: 8, fill: C.soft }, svg);
  s('text', { x: X(z[0]), y: 40, class: 'lbl', text: o.zoneLabel }, svg);
  s('line', { x1: X(0), x2: X(6), y1: 69, y2: 69, stroke: C.ink, 'stroke-width': 2 }, svg);
  for (let i = 0; i <= 6; i++) {
    s('line', { x1: X(i), x2: X(i), y1: 60, y2: 78, stroke: C.ink, 'stroke-width': 2 }, svg);
    s('text', { x: X(i), y: 108, 'text-anchor': 'middle', class: 'tick', text: i + (i === 6 ? '+' : '') }, svg);
  }
  s('text', { x: X(6) + 20, y: 108, class: 'tick', text: 'years' }, svg);
  const rng_ = s('rect', { x: X(o.from), y: 56, width: 0, height: 26, rx: 13, fill: C.plum, opacity: .9 }, svg);
  const pin = s('g', { class: 'pin', style: { opacity: 0 } }, svg);
  s('path', { d: 'M0,0 L-13,-34 A18,18 0 1 1 13,-34 Z', fill: C.plum, transform: 'translate(0,66)' }, pin);
  s('circle', { cx: 0, cy: 32, r: 6.5, fill: C.bg }, pin);
  s('text', { x: X(o.from) + (X(o.to) - X(o.from)) / 2, y: 135, 'text-anchor': 'middle', class: 'ladnum2', text: o.label, style: { opacity: 0 } }, svg);
  const lab = svg.lastChild;
  return {
    async drop() {
      await tween(900, e => { pin.setAttribute('transform', `translate(${X(o.from)},${-150 * (1 - e)})`); pin.style.opacity = Math.min(1, e * 4); }, { ease: E.bounce });
      await tween(700, e => { rng_.setAttribute('width', (X(o.to) - X(o.from)) * e); lab.style.opacity = e; });
    }
  };
}
function buildAdSlide(stage, final) {
  const A = D.quotes.enhance_says + '…', B = D.quotes.enhance_asks;
  const card = h('div', { class: 'adcard' },
    h('div', { class: 'adlab' }, 'Enhance · Dubai · from the ad text'),
    h('div', { class: 'adline', id: 'l1' }, h('span', { class: 'tag say' }, 'SAYS'), h('span', { class: 'txt' })),
    h('div', { class: 'adline', id: 'l2' }, h('span', { class: 'tag ask' }, 'ASKS'), h('span', { class: 'txt' })));
  stage.append(h('div', { class: 'col' }, card));
  const L1 = $('#l1', card), L2 = $('#l2', card);
  L1.style.opacity = 0; L2.style.opacity = 0;
  const ruler = adRuler($('.col', stage), { zone: [0, 1], zoneLabel: 'what a typical junior ad asks: about 1 year', from: 2, to: 5, label: 'this “junior” ad asks: 2 to 5 years' });
  $('.ruler', stage).style.opacity = 0;
  const hi = (el, word, cls) => { const t = el.textContent, i = t.indexOf(word); if (i < 0) return;
    el.innerHTML = t.slice(0, i) + `<mark class="${cls}">${word}</mark>` + t.slice(i + word.length); };
  const steps = [
    async () => { L1.style.opacity = 1; await typeText($('.txt', L1), A, 26); hi($('.txt', L1), 'Junior', 'm-say'); },
    async () => { L2.style.opacity = 1; await typeText($('.txt', L2), B, 16); hi($('.txt', L2), '2-5 years', 'm-ask'); },
    async () => { $('.ruler', stage).style.opacity = 1; await ruler.drop(); }
  ];
  if (final) steps.push(async () => { const f = h('div', { class: 'finalline' }, 'Read what it asks. ', h('em', {}, 'Answer what it asks.')); $('.col', stage).append(f);
    f.style.opacity = 0; await tween(700, e => { f.style.opacity = e; f.style.transform = `translateY(${(1 - e) * 20}px)`; }); });
  return steps;
}
