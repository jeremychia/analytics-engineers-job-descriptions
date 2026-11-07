/* Slides only the v6 deck uses: what AI changes, read from the ads that ask for it. */
/* ads that ask for AI name a semantic layer about twice as often; one ad says why; the conference phrase for it is almost absent */
function buildContext(stage, o = {}) {   // o.senior: senior and lead ads only; o.line: [plain, emphasised] for the last line
  const S = o.senior ? D.semantics.senior : D.semantics, pct = ([k, n]) => Math.round(100 * k / n), A = D.corpus_n.toLocaleString('en-US'), show = (el, on) => el.style.opacity = on ? 1 : 0;
  const row = (label, kn, col) => { const fill = h('div', { style: { width: 0, height: '100%', background: col, borderRadius: '6px', transition: 'width 1s cubic-bezier(.2,.8,.2,1)' } });
    const el = h('div', { style: { display: 'grid', gridTemplateColumns: 'clamp(150px,17vw,280px) 1fr clamp(60px,6vw,96px)', alignItems: 'center', gap: '1.2vw' } },
      h('div', { style: { fontSize: 'clamp(15px,1.6vw,25px)', fontWeight: 700, color: col, textAlign: 'right' } }, label, h('div', { style: { fontSize: 'clamp(11px,1vw,15px)', fontWeight: 400, color: C.ink2 } }, `${kn[1].toLocaleString('en-US')} ads`)),
      h('div', { style: { height: 'clamp(22px,3.4vh,38px)', background: C.line, borderRadius: '6px' } }, fill),
      h('div', { style: { fontSize: 'clamp(24px,3vw,46px)', fontWeight: 700, color: col } }, `${pct(kn)}%`));
    return { el, grow: on => fill.style.width = on ? `${pct(kn)}%` : 0 }; };
  const ai = row('ask for AI', S.ai, C.coral), other = row('don’t', S.other, C.mute);
  const bars = h('div', { style: { display: 'flex', flexDirection: 'column', gap: '1.6vh' } },
    h('div', { style: { fontSize: 'clamp(13px,1.2vw,19px)', fontWeight: 700, color: C.ink2 } }, `name a semantic layer or model · % of ${(S.ai[1] + S.other[1]).toLocaleString('en-US')} ${o.senior ? 'senior and lead ' : ''}ads`), ai.el, other.el);
  const card = h('div', { class: 'adcard', style: { opacity: 0, transition: 'opacity .5s' } }, h('div', { class: 'adlab' }, 'Multiverse · analytics engineer · from the ad text'),
    h('div', { style: { fontSize: 'clamp(16px,1.8vw,28px)', lineHeight: 1.35 } }, '“…', h('mark', { class: 'm-ask' }, D.quotes.multiverse.replace(/\.$/, '')), '”'));
  const ctx = h('div', { style: { display: 'flex', alignItems: 'baseline', gap: '1.2vw', opacity: 0, transition: 'opacity .5s' } },
    h('div', { style: { fontSize: 'clamp(40px,5vw,80px)', fontWeight: 700, color: C.coral, lineHeight: 1 } }, `${D.semantics.context_engineering}`),
    h('div', { style: { fontSize: 'clamp(17px,2vw,30px)', fontWeight: 700 } }, `of all ${A} ads say “context engineering”`));
  const line = h('div', { class: 'finalline', style: { fontSize: 'clamp(22px,3vw,46px)', opacity: 0, transition: 'opacity .6s' } }, ...(o.line ? [o.line[0], h('em', {}, o.line[1])] : ['The machine needs the business written down. ', h('em', {}, 'So does the junior.')]));
  stage.append(h('div', { class: 'col', style: { gap: '3vh' } }, bars, card, ctx, line));
  const state = (b, c, x, l) => { ai.grow(b); other.grow(b); show(card, c); show(ctx, x); show(line, l); card.style.display = x ? 'none' : ''; };   // the quote leaves once the count is up: one thing to look at per click
  return [
    async () => { state(0, 0, 0, 0); await wait(Anim.fast ? 0 : 50); state(1, 0, 0, 0); await wait(Anim.fast ? 0 : 1000); },
    async () => { state(1, 1, 0, 0); await wait(Anim.fast ? 0 : 500); },
    async () => { state(1, 0, 1, 0); await wait(Anim.fast ? 0 : 500); },
    async () => { state(1, 0, 1, 1); await wait(Anim.fast ? 0 : 600); }
  ];
}
