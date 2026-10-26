/* The similarity barcode: 150 ads x 150 ads, role text only. Bright diagonal blocks are the same company. */
function buildBarcode(stage) {
  const S = D.sim, n = S.n, SZ = 560;
  const wrap = h('div', { class: 'bcwrap' });
  const cv = h('canvas', { class: 'bc' }); const dpr = Math.min(2, window.devicePixelRatio || 1);
  cv.width = SZ * dpr; cv.height = SZ * dpr; cv.style.width = cv.style.height = SZ + 'px'; wrap.append(cv);
  const ov = h('div', { class: 'bcov' }); wrap.append(ov); stage.append(wrap);
  const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
  const cell = SZ / n, stops = [[0, '#fdf1ee'], [8, '#f9ddd5'], [20, '#ea5b4d'], [45, '#a8322a'], [100, '#5b2a4a']];
  const draw = p => { ctx.clearRect(0, 0, SZ, SZ);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { if ((i + j) / (2 * n) > p) continue;
      ctx.fillStyle = i === j ? C.plum : scale(stops, S.m[i][j]); ctx.fillRect(j * cell, i * cell, cell + .4, cell + .4); } };
  draw(0);
  const k = S.groups[0].size, frac = k / n;
  const callAmazon = h('div', { class: 'call', style: { left: (frac * SZ + 14) + 'px', top: '4px' } }, h('b', {}, 'Amazon · Prime Video · AWS'), h('br'), 'one qualifications checklist');
  const callStr = h('div', { class: 'call', style: { left: (SZ * .5) + 'px', top: (SZ * .55) + 'px' } }, h('b', {}, 'Strangers: 4% alike'), h('br'), 'nearly empty, every pair');
  const callSame = h('div', { class: 'call', style: { left: (SZ * .56) + 'px', top: (SZ * .86) + 'px' } }, h('b', {}, 'Same company: 22%'), h('br'), 'small bright squares on the diagonal');
  [callAmazon, callStr, callSame].forEach(c => { c.style.opacity = 0; ov.append(c); });
  const side = h('div', { class: 'bcside' },
    h('div', { class: 'bigstat' }, h('span', { id: 'bc1' }, '0'), h('small', {}, ' in 1,000')),
    h('div', { class: 'lbl2' }, 'duty bullets copied word for word from another company'));
  side.style.opacity = 0; wrap.append(side);
  return [
    async () => { await tween(2200, (e) => draw(e * 1.02), { ease: E.inOut }); },
    async () => { await tween(500, e => { callAmazon.style.opacity = e; callStr.style.opacity = e; callSame.style.opacity = e; }); },
    async () => { side.style.opacity = 1; side.style.transform = 'translateX(0)'; await countUp($('#bc1', side), 1.3, { fmt: v => v.toFixed(1), dur: 1000 }); }
  ];
}
