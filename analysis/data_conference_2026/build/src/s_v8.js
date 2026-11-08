/* Slides only the v8 deck uses: how alike the responsibilities in two analytics-engineer ads are, against an analytics-engineer ad and a data-engineer ad. Runs after s_v7.js. */

/* similarity of the responsibility bullets on its full 0–100% scale: two ads from one company as the yardstick, then two analytics-engineer ads from different companies, then one against a data-engineer ad, then the claim */
function buildAlike(stage) {
  const B = D.sim.duties_only, MAX = 1;
  const bar = (label, share, col) => {
    const fill = h('div', { style: { height: '100%', width: 0, background: col, borderRadius: '8px', transition: 'width .9s cubic-bezier(.2,.7,.2,1)' } });
    // the label sits above its bar, so a narrow window never squeezes it into the bar
    const row = v7.fade(h('div', { style: { display: 'flex', flexDirection: 'column', gap: '1vh' } },
      h('div', { style: { fontSize: 'clamp(16px,1.8vw,28px)', fontWeight: 700, whiteSpace: 'nowrap' } }, label),
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '1.5vw' } },
        h('div', { style: { flex: '1 1 0', minWidth: 0, height: 'clamp(26px,4vh,44px)', background: C.line, borderRadius: '8px' } }, fill),
        h('div', { style: { fontSize: 'clamp(28px,3.6vw,56px)', fontWeight: 700, color: col, lineHeight: 1, width: '3.3em', textAlign: 'right', fontVariantNumeric: 'tabular-nums' } }, `${(100 * share).toFixed(1)}%`))));
    row.fill = () => fill.style.width = `${100 * share / MAX}%`;
    return row;
  };
  const head = v7.fade(h('div', { style: { fontSize: 'clamp(15px,1.5vw,24px)', color: C.ink2 } }, 'How alike the responsibilities in two ads are · 100% = identical'));
  const same = bar('two ads from the same company', B.mean_within, C.mute);
  const ae = bar('two analytics-engineer ads, different companies', B.ae_ae.mean, C.plum), de = bar('an analytics-engineer ad and a data-engineer ad', B.ae_de.mean, C.coral);
  const line = v7.line('Same title. ', 'No closer than a data-engineer ad.');
  stage.append(h('div', { class: 'col', style: { gap: '3.5vh' } }, head, same, ae, de, line));
  const rows = [head, same, ae, de, line];
  const step = (on, pause = 900) => async () => { rows.forEach((el, k) => { v7.show(el, on[k]); on[k] && el.fill && el.fill(); }); await wait(Anim.fast ? 0 : pause); };
  return [step([1, 1, 0, 0, 0]), step([1, 1, 1, 0, 0]), step([1, 1, 1, 1, 0]), step([1, 1, 1, 1, 1], 600)];
}
