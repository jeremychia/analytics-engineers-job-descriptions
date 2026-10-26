/* Stack against scope. Same level, different stack: strategic share; then the concrete duties; then two real first duties. */
function buildStack(stage) {
  const W = 1000, H = 520, svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage), ST = D.stack, G = D.gap;
  const layer = () => s('g', { style: { opacity: 0, transition: 'opacity .5s' } }, svg), g1 = layer(), g2 = layer(), g3 = layer(), g4 = layer(), g5 = layer();
  const show = async (...on) => { [g1, g2, g3, g4, g5].forEach(g => g.style.opacity = 0); await wait(Anim.fast ? 0 : 420); on.forEach(g => g.style.opacity = 1); await wait(Anim.fast ? 0 : 450); };
  // 1. same level, two stacks
  const L = 215, bw = 520, cols = { dbt_only: C.plum, pbi_only: C.coral }, nm = { dbt_only: 'dbt, no Power BI or Fabric', pbi_only: 'Power BI or Fabric, no dbt' };
  s('text', { x: L, y: 34, class: 'lbl', text: 'share of ads that ask for strategic work: “define, own, shape, lead”, rather than “support, assist, deliver”' }, g1);
  const bars = [];
  [['mid', 'Mid-level ads', 70], ['senior', 'Senior ads', 250]].forEach(([lv, lab, y0]) => {
    s('text', { x: L - 20, y: y0 + 62, 'text-anchor': 'end', class: 'rowlab', text: lab }, g1);
    ['dbt_only', 'pbi_only'].forEach((g, k) => { const [v, n] = ST.levels[lv][g], y = y0 + k * 70;
      s('rect', { x: L, y, width: bw, height: 52, rx: 12, fill: C.soft }, g1);
      const b = s('rect', { x: L, y, width: 0, height: 52, rx: 12, fill: cols[g] }, g1);
      const t = s('text', { x: L + 16, y: y + 35, class: 'barnum', text: '0%' }, g1);
      s('text', { x: L + bw + 12, y: y + 24, class: 'rowsub', text: nm[g] }, g1); s('text', { x: L + bw + 12, y: y + 42, class: 'rowsub', text: `${n} ads` }, g1);
      bars.push({ b, t, v }); }); });
  // 2. same title, two jobs
  s('text', { x: W / 2, y: 190, 'text-anchor': 'middle', class: 'bigstat2', text: ST.ae_titled.pbi_only_pct + '%' }, g2);
  s('text', { x: W / 2, y: 250, 'text-anchor': 'middle', class: 'bigline', text: 'of ads titled “Analytics Engineer”' }, g2);
  s('text', { x: W / 2, y: 292, 'text-anchor': 'middle', class: 'bigline', text: 'name Power BI or Fabric and no dbt.' }, g2);
  s('text', { x: W / 2, y: 340, 'text-anchor': 'middle', class: 'rowsub', text: `${ST.ae_titled.n} English-language ads with that title. The title doesn’t tell you which job it is.` }, g2);
  // 3. the duties
  const pick = ['BI & Reporting/Dashboards', 'Business Analysis & Insight Generation', 'Data Modeling & Transformation', 'Data Infrastructure & Warehouse Ops', 'Data Ownership (end-to-end)', 'Data Quality & Testing'];
  const nice = { 'BI & Reporting/Dashboards': 'dashboards and reporting', 'Business Analysis & Insight Generation': 'business analysis', 'Data Modeling & Transformation': 'data modelling', 'Data Infrastructure & Warehouse Ops': 'warehouse operations', 'Data Ownership (end-to-end)': 'end-to-end ownership', 'Data Quality & Testing': 'data quality and tests' };
  s('text', { x: 40, y: 34, class: 'lbl', text: 'share of an ad’s duties spent on each theme' }, g3);
  s('rect', { x: 560, y: 18, width: 12, height: 12, rx: 3, fill: C.coral }, g3); s('text', { x: 580, y: 29, class: 'rowsub', text: `Power BI or Fabric, no dbt (n = ${G.n[1]})` }, g3);
  s('rect', { x: 560, y: 40, width: 12, height: 12, rx: 3, fill: C.plum }, g3); s('text', { x: 580, y: 51, class: 'rowsub', text: `dbt with Snowflake or BigQuery (n = ${G.n[0]})` }, g3);
  const dbars = pick.map((t, k) => { const i = G.themes.indexOf(t), y = 82 + k * 66, sc = 560 / 22;
    s('text', { x: 40, y: y + 34, class: 'rowlab2', text: nice[t], style: { fontSize: '16px', fill: C.ink, fontWeight: 700 } }, g3);
    const a = s('rect', { x: 250, y, width: 0, height: 24, rx: 7, fill: C.coral }, g3), b = s('rect', { x: 250, y: y + 28, width: 0, height: 24, rx: 7, fill: C.plum }, g3);
    const ta = s('text', { x: 256, y: y + 18, class: 'cellnum', text: '', style: { fill: '#fff', fontSize: '13px' } }, g3), tb = s('text', { x: 256, y: y + 46, class: 'cellnum', text: '', style: { fill: '#fff', fontSize: '13px' } }, g3);
    return { a, b, ta, tb, va: G.ms[i] * 100, vb: G.dbt[i] * 100, sc }; });
  // 4. first duties of two senior ads
  const card = (x, title, col, quote, asks) => { const g = s('g', {}, g4);
    s('rect', { x, y: 40, width: 440, height: 330, rx: 20, fill: C.paper, stroke: C.line }, g); s('rect', { x, y: 40, width: 440, height: 8, rx: 4, fill: col }, g);
    s('text', { x: x + 28, y: 88, class: 'cardlab', text: title }, g);
    const fo = s('foreignObject', { x: x + 28, y: 110, width: 384, height: 170 }, g); fo.append(h('div', { class: 'cardq' }, '“' + quote + '…”'));
    s('text', { x: x + 28, y: 330, class: 'cardask', text: asks, style: { fill: col } }, g); };
  card(40, 'Senior · Power BI · Lenovo', C.coral, D.quotes.lenovo, 'asks: deliver the work');
  card(520, 'Senior · dbt + Snowflake · January', C.plum, D.quotes.january, 'asks: set the direction');
  s('text', { x: W / 2, y: 410, 'text-anchor': 'middle', class: 'rowsub', text: 'The first duty listed in each ad, verbatim. Same level, different verbs.' }, g4);
  // 5. the adjectives
  ['fast-paced', 'self-starter', 'wear many hats'].forEach((a, i) => { const x = 130 + i * 280;
    s('rect', { x: x - 100, y: 120, width: 240, height: 60, rx: 30, fill: C.paper, stroke: C.line }, g5);
    s('text', { x: x + 20, y: 158, 'text-anchor': 'middle', class: 'adj', text: '“' + a + '”' }, g5);
    s('text', { x: x + 20, y: 214, 'text-anchor': 'middle', class: 'rowsub', text: 'predicts nothing I could find' }, g5); });
  s('text', { x: W / 2, y: 330, 'text-anchor': 'middle', class: 'bigline', text: 'The adjectives say a lot. They ask for nothing.' }, g5);
  return [
    async () => { await show(g1); await Promise.all(bars.map(({ b, t, v }, i) => tween(1200, e => { b.setAttribute('width', bw * v / 70 * e); t.textContent = Math.round(v * e) + '%'; }, { delay: i * 260 }))); },
    async () => { await show(g2); },
    async () => { await show(g3); await Promise.all(dbars.map((d, i) => tween(1100, e => { d.a.setAttribute('width', d.sc * d.va * e); d.b.setAttribute('width', d.sc * d.vb * e);
      d.ta.textContent = d.va * e > 3 ? Math.round(d.va * e) + '%' : ''; d.tb.textContent = d.vb * e > 3 ? Math.round(d.vb * e) + '%' : ''; }, { delay: i * 150 }))); },
    async () => { await show(g4); },
    async () => { await show(g5); }
  ];
}
