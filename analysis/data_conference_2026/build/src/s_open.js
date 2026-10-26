/* Slide: the Accenture ad. Says versus asks, then the ruler. Reused for the closing slide. */
function adRuler(parent, years) {
  const svg = s('svg', { viewBox: '0 0 1000 150', class: 'ruler' }, parent);
  const X = v => 70 + v * 143;
  s('rect', { x: X(0), y: 52, width: X(2) - X(0), height: 34, rx: 8, fill: C.soft, class: 'zone' }, svg);
  s('text', { x: (X(0) + X(2)) / 2, y: 40, 'text-anchor': 'middle', class: 'lbl', text: 'what "early career" usually asks' }, svg);
  s('line', { x1: X(0), x2: X(6), y1: 69, y2: 69, stroke: C.ink, 'stroke-width': 2 }, svg);
  for (let i = 0; i <= 6; i++) {
    s('line', { x1: X(i), x2: X(i), y1: 60, y2: 78, stroke: C.ink, 'stroke-width': 2 }, svg);
    s('text', { x: X(i), y: 108, 'text-anchor': 'middle', class: 'tick', text: i + (i === 6 ? '+' : '') }, svg);
  }
  s('text', { x: X(6) + 20, y: 108, class: 'tick', text: 'years' }, svg);
  const pin = s('g', { class: 'pin', style: { opacity: 0 } }, svg);
  s('path', { d: 'M0,0 L-13,-34 A18,18 0 1 1 13,-34 Z', fill: C.plum, transform: 'translate(0,66)' }, pin);
  s('circle', { cx: 0, cy: 32, r: 6.5, fill: C.bg }, pin);
  const pl = s('text', { x: 0, y: 5, 'text-anchor': 'middle', class: 'pinl', text: years + '+' }, pin);
  return {
    drop() { return tween(900, e => { const v = X(years); pin.setAttribute('transform', `translate(${v},${-150 * (1 - e)})`); pin.style.opacity = Math.min(1, e * 4); }, { ease: E.bounce }); },
    hide() { pin.style.opacity = 0; }
  };
}
function buildAdSlide(stage, final) {
  const D1 = D.quotes.accenture_says, D2 = D.quotes.accenture_asks;
  const card = h('div', { class: 'adcard' },
    h('div', { class: 'adlab' }, 'Accenture · Lisbon · Analytics Engineer'),
    h('div', { class: 'adline', id: 'l1' }, h('span', { class: 'tag say' }, 'SAYS'), h('span', { class: 'txt' })),
    h('div', { class: 'adline', id: 'l2' }, h('span', { class: 'tag ask' }, 'ASKS'), h('span', { class: 'txt' })));
  stage.append(h('div', { class: 'col' }, card));
  const L1 = $('#l1', card), L2 = $('#l2', card);
  L1.style.opacity = 0; L2.style.opacity = 0;
  const ruler = adRuler($('.col', stage), 3);
  $('.ruler', stage).style.opacity = 0;
  const hi = (el, word, cls) => { const t = el.textContent, i = t.indexOf(word); if (i < 0) return;
    el.innerHTML = t.slice(0, i) + `<mark class="${cls}">${word}</mark>` + t.slice(i + word.length); };
  const steps = [
    async () => { L1.style.opacity = 1; L1.classList.add('on'); await typeText($('.txt', L1), D1, 26); hi($('.txt', L1), 'Early Career', 'm-say'); },
    async () => { L2.style.opacity = 1; L2.classList.add('on'); await typeText($('.txt', L2), D2, 14); hi($('.txt', L2), 'Minimum of 3+ years', 'm-ask'); },
    async () => { $('.ruler', stage).style.opacity = 1; await ruler.drop(); }
  ];
  if (final) steps.push(async () => { const f = h('div', { class: 'finalline' }, 'Read what it asks. ', h('em', {}, 'Answer what it asks.')); $('.col', stage).append(f);
    f.style.opacity = 0; await tween(700, e => { f.style.opacity = e; f.style.transform = `translateY(${(1 - e) * 20}px)`; }); });
  return steps;
}
