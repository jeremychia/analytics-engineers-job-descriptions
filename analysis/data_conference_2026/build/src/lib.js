'use strict';
/* Shared helpers: palette, DOM/SVG builders, easing, cancellable tweens. */
const NS = 'http://www.w3.org/2000/svg';
const C = { coral: '#ea5b4d', plum: '#5b2a4a', blue: '#3b6fd1', teal: '#1d9a74', amber: '#e3a21a', ink: '#2a0a08',
  ink2: '#7a5a55', mute: '#b79e99', line: '#e9cfc8', soft: '#f5d6cf', bg: '#fdf1ee', paper: '#fff8f6', grey: '#e6d4cf' };
const $ = (q, r = document) => r.querySelector(q);
const $$ = (q, r = document) => [...r.querySelectorAll(q)];
function h(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  for (const k in (attrs || {})) {
    if (k === 'class') e.className = attrs[k]; else if (k === 'html') e.innerHTML = attrs[k];
    else if (k === 'style' && typeof attrs[k] === 'object') Object.assign(e.style, attrs[k]); else e.setAttribute(k, attrs[k]);
  }
  kids.flat().forEach(c => e.append(c.nodeType ? c : document.createTextNode(c)));
  return e;
}
function s(tag, attrs, parent) {
  const e = document.createElementNS(NS, tag);
  for (const k in (attrs || {})) {
    if (k === 'text') e.textContent = attrs[k]; else if (k === 'style' && typeof attrs[k] === 'object') Object.assign(e.style, attrs[k]);
    else e.setAttribute(k, attrs[k]);
  }
  if (parent) parent.appendChild(e);
  return e;
}
const E = { out: t => 1 - Math.pow(1 - t, 3), inOut: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  back: t => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  bounce: t => { const n = 7.5625, d = 2.75; if (t < 1 / d) return n * t * t; if (t < 2 / d) return n * (t -= 1.5 / d) * t + .75;
    if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + .9375; return n * (t -= 2.625 / d) * t + .984375; }, lin: t => t };
/* One callback per frame: requestAnimationFrame normally, a timer as backup (headless browsers and hidden tabs). */
function frame(f) { let done = false; const run = () => { if (done) return; done = true; f(); }; requestAnimationFrame(run); setTimeout(run, 34); }
function later(fn, ms) { if (Anim.fast || !ms) { fn(); return; } const t = Anim.tok; setTimeout(() => { if (t === Anim.tok) fn(); }, ms); }
/* Every animation checks the token; bumping it cancels all running tweens (slide change, step back, reset). */
/* Fast mode (replaying earlier steps) also switches CSS transitions off, so a replay lands instantly. */
const Anim = { tok: 0, _fast: false, cancel() { this.tok++; },
  get fast() { return this._fast; },
  set fast(v) { this._fast = v; const r = document.documentElement; if (v) r.classList.add('fast'); else { void r.offsetWidth; r.classList.remove('fast'); } } };
const optional = step => Object.assign(step, { optional: true });   // a build the short version of the talk skips
/* One-word verdict pill beside the claim it qualifies; anchor 'start' or 'end' at x. */
const VERDICT = { conclusive: '#2b7a4b', suggestive: '#b9770e', descriptive: '#9a817c', inconclusive: '#7a5a55', untested: '#7a5a55' };
function tag(parent, x, y, word, o = {}) {
  const { anchor = 'start', size = 14 } = o, w = word.length * size * .62 + size * 1.4, col = VERDICT[word] || C.ink2;
  const g = s('g', { class: 'vtag', transform: `translate(${anchor === 'end' ? x - w : x},${y - size})` }, parent);
  s('rect', { width: w, height: size * 1.7, rx: size * .85, fill: C.paper, stroke: col, 'stroke-width': 1.5, 'stroke-dasharray': word === 'untested' ? '4 3' : 'none' }, g);
  s('text', { x: w / 2, y: size * 1.18, 'text-anchor': 'middle', class: 'vtagt', text: word, style: { fill: col, fontSize: size + 'px' } }, g);
  return g;
}
function tween(dur, fn, o = {}) {
  const { delay = 0, ease = E.out } = o, tok = Anim.tok;
  if (Anim.fast) { fn(ease(1), 1); return Promise.resolve(true); }
  return new Promise(res => {
    const t0 = performance.now() + delay;
    const f = () => {
      if (tok !== Anim.tok) return res(false);
      const now = performance.now(), p = Math.max(0, Math.min(1, (now - t0) / dur));
      if (now >= t0) fn(ease(p), p);
      if (p < 1) frame(f); else res(true);
    };
    frame(f);
  });
}
const wait = ms => Anim.fast ? Promise.resolve(true) : new Promise(r => { const tok = Anim.tok; setTimeout(() => r(tok === Anim.tok), ms); });
function countUp(el, to, o = {}) {
  const { dur = 1100, fmt = v => Math.round(v).toLocaleString('en-US'), from = 0, delay = 0 } = o;
  return tween(dur, e => { el.textContent = fmt(from + (to - from) * e); }, { delay });
}
async function typeText(el, text, ms = 28) {
  if (Anim.fast) { el.textContent = text; return true; }
  el.textContent = '';
  for (let i = 1; i <= text.length; i++) { el.textContent = text.slice(0, i); if (!(await wait(ms))) return false; }
  return true;
}
function rng(seed) { let x = seed >>> 0; return () => { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; }; }
function shuffle(a, r) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function mix(a, b, t) { const pa = a.match(/\w\w/g).map(x => parseInt(x, 16)), pb = b.match(/\w\w/g).map(x => parseInt(x, 16));
  return '#' + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0')).join(''); }
function scale(stops, v) { // stops: [[value,'#hex'],...]
  if (v <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) if (v <= stops[i][0]) return mix(stops[i - 1][1].slice(1), stops[i][1].slice(1), (v - stops[i - 1][0]) / (stops[i][0] - stops[i - 1][0]));
  return stops[stops.length - 1][1];
}
const tip = { el: null, show(e, html) { if (!this.el) { this.el = h('div', { id: 'tip' }); document.body.append(this.el); }
  this.el.innerHTML = html; this.el.style.display = 'block'; this.el.style.left = Math.min(e.clientX + 14, innerWidth - 270) + 'px'; this.el.style.top = (e.clientY + 14) + 'px'; },
  hide() { if (this.el) this.el.style.display = 'none'; } };
const pct = (n, d) => Math.round(100 * n / d);
