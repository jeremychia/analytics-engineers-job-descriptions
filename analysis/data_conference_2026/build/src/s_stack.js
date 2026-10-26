/* Stack versus scope: four bars, then two real first duties, then the adjectives that predict nothing. */
function buildStack(stage) {
  const W = 1000, H = 520, svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const rows = [['dbt, no Power BI or Fabric', 47, C.plum, 395], ['Power BI or Fabric, plus dbt', 31, C.blue, 160], ['neither', 32, C.mute, 189], ['Power BI or Fabric, no dbt', 18, C.coral, 198]];
  const L = 290, bw = 600, gB = s('g', {}, svg), gC = s('g', { style: { opacity: 0 } }, svg), gQ = s('g', { style: { opacity: 0 } }, svg), gA = s('g', { style: { opacity: 0 } }, svg);
  s('text', { x: L, y: 36, class: 'lbl', text: 'share of ads that ask for strategic scope (English ads, n = 942)' }, gB);
  const bars = rows.map(([lab, v, col, n], i) => { const y = 70 + i * 82;
    s('text', { x: L - 18, y: y + 34, 'text-anchor': 'end', class: 'rowlab', text: lab }, gB);
    s('text', { x: L - 18, y: y + 56, 'text-anchor': 'end', class: 'rowsub', text: n + ' ads' }, gB);
    s('rect', { x: L, y, width: bw, height: 52, rx: 12, fill: C.soft }, gB);
    const b = s('rect', { x: L, y, width: 0, height: 52, rx: 12, fill: col }, gB);
    const t = s('text', { x: L + 16, y: y + 35, class: 'barnum', text: '0%' }, gB); return { b, t, v, i }; });
  const chips = [['same seniority mix', 150], ['same rigour framing (p = 0.5)', 560]];
  chips.forEach(([t, x], k) => { s('rect', { x: L + (k ? 250 : 0), y: 410, width: k ? 330 : 240, height: 40, rx: 20, fill: C.paper, stroke: C.line }, gC);
    s('text', { x: L + (k ? 250 : 0) + (k ? 165 : 120), y: 436, 'text-anchor': 'middle', class: 'chip', text: t }, gC); });
  // quote cards
  const card = (x, title, col, quote, asks) => { const g = s('g', {}, gQ);
    s('rect', { x, y: 70, width: 440, height: 330, rx: 20, fill: C.paper, stroke: C.line }, g);
    s('rect', { x, y: 70, width: 440, height: 8, rx: 4, fill: col }, g);
    s('text', { x: x + 28, y: 118, class: 'cardlab', text: title }, g);
    const fo = s('foreignObject', { x: x + 28, y: 140, width: 384, height: 170 }, g);
    fo.append(h('div', { class: 'cardq' }, '“' + quote + '…”'));
    s('text', { x: x + 28, y: 352, class: 'cardask', text: 'asks: ' + asks, style: { fill: col } }, g); };
  card(40, 'Power BI · Lenovo', C.coral, D.quotes.lenovo, 'deliver the scoped work');
  card(520, 'dbt + Snowflake · January', C.plum, D.quotes.january, 'set the direction');
  s('text', { x: W / 2, y: 436, 'text-anchor': 'middle', class: 'lbl', text: 'the first duty listed in each ad, verbatim' }, gQ);
  const adj = ['fast-paced', 'self-starter', 'wear many hats'];
  adj.forEach((a, i) => { const x = 130 + i * 280;
    s('rect', { x: x - 100, y: 150, width: 240, height: 60, rx: 30, fill: C.paper, stroke: C.line }, gA);
    s('text', { x: x + 20, y: 188, 'text-anchor': 'middle', class: 'adj', text: '“' + a + '”' }, gA);
    s('rect', { x: x - 100, y: 240, width: 240, height: 10, rx: 5, fill: C.soft }, gA);
    s('text', { x: x + 20, y: 282, 'text-anchor': 'middle', class: 'rowsub', text: 'predicts: nothing I could find' }, gA); });
  s('text', { x: W / 2, y: 360, 'text-anchor': 'middle', class: 'bigline', text: 'The adjectives say a lot. They ask for nothing.' }, gA);
  return [
    async () => { await Promise.all(bars.map(({ b, t, v, i }) => tween(1200, e => { b.setAttribute('width', bw * v / 60 * e); t.textContent = Math.round(v * e) + '%'; }, { delay: i * 220 }))); },
    async () => { gC.style.transition = 'opacity .6s'; gC.style.opacity = 1; await wait(600); },
    async () => { gB.style.transition = gC.style.transition = 'opacity .5s'; gB.style.opacity = 0; gC.style.opacity = 0; await wait(450);
      gQ.style.transition = 'opacity .7s'; gQ.style.opacity = 1; await wait(700); },
    async () => { gQ.style.transition = 'opacity .5s'; gQ.style.opacity = 0; await wait(450); gA.style.transition = 'opacity .7s'; gA.style.opacity = 1; await wait(700); }
  ];
}
