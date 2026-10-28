/* Duty gaps: Power BI / Fabric ads minus dbt + warehouse ads, share of duties by theme. Dots slide out to their value. */
function buildGap(stage) {
  const G = D.gap, W = 1000, H = 540, svg = s('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart' }, stage);
  const idx = G.themes.map((_, i) => i).sort((a, b) => G.mean[b] - G.mean[a]), L = 290, lo = -.06, hi = .14, X = v => L + (v - lo) / (hi - lo) * (W - L - 40);
  const short = t => ({ 'Business Analysis & Insight Generation': 'Business analysis & insight', 'Stakeholder Collaboration & Requirements': 'Stakeholder collaboration',
    'Self-Service Enablement & Data Literacy': 'Self-service & literacy', 'Pipeline Engineering & Orchestration': 'Pipelines & orchestration', 'Data Infrastructure & Warehouse Ops': 'Warehouse & infra ops',
    'Architecture & Platform Strategy': 'Architecture & platform', 'Performance & Cost Optimization': 'Performance & cost', 'Data Modeling & Transformation': 'Data modelling', 'Governance & Documentation': 'Governance & docs',
    'Security, Privacy & Risk': 'Security & risk', 'Vendor & Tooling Evaluation': 'Vendor evaluation', 'Data Quality & Testing': 'Data quality & testing', 'Mentorship & Leadership': 'Mentorship & leadership',
    'Data Ownership (end-to-end)': 'End-to-end ownership', 'AI & Agentic Workflows': 'AI & agentic workflows', 'BI & Reporting/Dashboards': 'BI & reporting' }[t] || t);
  [-.04, 0, .04, .08, .12].forEach(v => { s('line', { x1: X(v), x2: X(v), y1: 56, y2: 505, stroke: v ? C.line : C.mute }, svg); s('text', { x: X(v), y: 526, 'text-anchor': 'middle', class: 'tick', text: (v > 0 ? '+' : '') + Math.round(v * 100) + ' points' }, svg); });
  s('text', { x: X(0) - 10, y: 36, 'text-anchor': 'end', class: 'lbl', text: '← more in dbt + warehouse ads' }, svg); s('text', { x: X(0) + 10, y: 36, class: 'lbl', text: 'more in Power BI / Fabric ads →' }, svg);
  const rows = idx.map((i, k) => { const y = 74 + k * 27, sig = G.holm[i] < .05, big = G.themes[i].startsWith('BI &');
    s('text', { x: L - 14, y: y + 5, 'text-anchor': 'end', class: sig ? 'rowlab2 sig' : 'rowlab2', text: short(G.themes[i]), style: { fill: sig ? C.ink : C.ink2, fontWeight: sig ? 700 : 500 } }, svg);
    const bar = s('line', { x1: X(0), x2: X(0), y1: y, y2: y, stroke: sig ? C.coral : C.mute, 'stroke-width': big ? 5 : 3, 'stroke-linecap': 'round' }, svg);
    const dot = s('circle', { cx: X(0), cy: y, r: big ? 9 : 6, fill: sig ? C.coral : C.bg, stroke: sig ? C.bg : C.mute, 'stroke-width': 2 }, svg);
    const hit = s('rect', { x: 0, y: y - 12, width: W, height: 24, fill: 'transparent' }, svg);
    hit.addEventListener('mousemove', e => tip.show(e, `<b>${G.themes[i]}</b><br>gap ${(G.mean[i] * 100).toFixed(1)} points, likely between ${(G.lo[i] * 100).toFixed(1)} and ${(G.hi[i] * 100).toFixed(1)}<br>${G.holm[i] < 0.05 ? 'a real difference' : 'could be chance'}`)); hit.addEventListener('mouseleave', () => tip.hide());
    return { i, bar, dot, k }; });
  return [async () => { await Promise.all(rows.map(({ i, bar, dot, k }) => tween(1100, e => { const m = X(G.mean[i] * e), a = X(G.lo[i] * e), b = X(G.hi[i] * e);
    dot.setAttribute('cx', m); bar.setAttribute('x1', a); bar.setAttribute('x2', b); }, { delay: k * 70, ease: E.out }))); }];
}
