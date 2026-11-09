/* Shared by index.html, full-analysis.html and viz.js: one name and colour for every value a chart shows, the tests behind every test line, and the house card. */
window.Site = (function () {
  'use strict';

  /* ── vocabulary ── */
  const COLOUR = { ink: '#3d4452', grey: '#9ca3af', green: '#16a34a', amber: '#d97706', red: '#c0392b', teal: '#0891b2', violet: '#7c3aed', accent: '#1d4ed8' };
  const EUROPE_REGIONS = new Set(['uk_remote', 'benelux', 'iberia', 'berlin', 'other_europe', 'france', 'nordics', 'dach_other', 'baltics', 'hamburg', 'ireland']);
  const REGION_NAME = { apac: 'APAC', uk_remote: 'UK / remote', benelux: 'Benelux', berlin: 'Berlin', iberia: 'Iberia', other_europe: 'Other Europe', nordics: 'Nordics',
    france: 'France', global_remote: 'Global remote', dach_other: 'DACH (other)', hamburg: 'Hamburg', baltics: 'Baltics', ireland: 'Ireland', nyc_metro: 'NYC metro', other: 'Other / unclear' };
  const regionGroup = ad => (ad.geo_region === 'apac' || ad.geo_region === 'nyc_metro' ? ad.geo_region : EUROPE_REGIONS.has(ad.geo_region) ? 'europe' : 'other');
  /* a field lists its values in display order, each as [name, colour] */
  const field = (label, values) => ({ label, order: Object.keys(values),
    name: Object.fromEntries(Object.entries(values).map(([value, [name]]) => [value, name])),
    colour: Object.fromEntries(Object.entries(values).map(([value, [, colour]]) => [value, colour])) });
  const yesNo = (label, yes) => field(label, { yes: [yes, COLOUR.ink], no: ['Does not', COLOUR.grey] });
  const FIELDS = {
    seniority: field('Seniority', { junior: ['Junior', COLOUR.green], mid: ['Mid', COLOUR.teal], senior: ['Senior', COLOUR.ink], lead: ['Lead', COLOUR.violet], staff: ['Staff', COLOUR.red], manager: ['Manager', COLOUR.amber] }),
    data_team_maturity: field('Team stage', { early: ['Early stage', COLOUR.red], mid: ['Mid stage', COLOUR.amber], mature: ['Mature', COLOUR.green] }),
    autonomy_level: field('Who sets direction', { strategic: ['Sets direction', COLOUR.green], mixed: ['Mixed', COLOUR.grey], execution: ['Carries out plans', COLOUR.amber] }),
    greenfield_vs_fix: field('Build or fix', { greenfield: ['Builds from scratch', COLOUR.green], mixed: ['Mixed', COLOUR.grey], fix_scale: ['Fixes and scales', COLOUR.ink] }),
    ai_role: field('AI ask', { none: ['No AI ask', COLOUR.grey], ai_user: ['Uses AI tools', COLOUR.teal], ai_enabler: ['Builds for AI', COLOUR.violet] }),
    work_arrangement: field('Where you work', { remote: ['Remote', COLOUR.green], hybrid: ['Hybrid', COLOUR.ink], onsite: ['Office', COLOUR.red], not_stated: ['Not stated', COLOUR.grey] }),
    language_gate_type: field('Language', { hard: ['Another language required', COLOUR.red], soft: ['Another language a plus', COLOUR.amber], none: ['None named', COLOUR.grey] }),
    domain_risk: field('Domain risk', { low: ['Low risk', COLOUR.green], moderate: ['Moderate', COLOUR.amber], high: ['High risk', COLOUR.red] }),
    velocity_vs_rigour: field('Rigour or velocity', { rigour: ['Rigour', COLOUR.ink], mixed: ['Mixed', COLOUR.grey], velocity: ['Velocity', COLOUR.red] }),
    jd_authorship: field('Who wrote the ad', { hiring_manager: ['Hiring manager', COLOUR.ink], mixed: ['Mixed', COLOUR.grey], recruiter: ['Recruiter', COLOUR.red] }),
    stakeholder_orientation: field('Who the work serves', { finance: ['Finance', COLOUR.red], internal_data: ['Internal data', COLOUR.ink], commercial: ['Commercial', COLOUR.violet], mixed: ['Mixed', COLOUR.grey], product: ['Product', COLOUR.teal] }),
    testing_framing: field('Testing', { responsibility: ['Owns quality', COLOUR.ink], tool_listed: ['Tool listed', COLOUR.amber], absent: ['Absent', COLOUR.grey] }),
    loss_aversion_framing: field('Fear framing', { high: ['Compliance / trust fear', COLOUR.red], moderate: ['Operational fear', COLOUR.amber], none: ['No fear signal', COLOUR.green] }),
    geo_macro: field('Region', { europe: ['Europe', COLOUR.ink], nyc_metro: ['NYC metro', COLOUR.teal], apac: ['APAC', COLOUR.amber], other: ['Elsewhere or remote', COLOUR.grey] }),
    dbt_named: field('dbt', { named: ['dbt named', COLOUR.ink], not_named: ['dbt not named', COLOUR.grey] }),
    salary_stated: field('Pay', { stated: ['States the pay', COLOUR.ink], not_stated: ['Not stated', COLOUR.grey] }),
    rt_mentorship: yesNo('Mentoring', 'Lists mentoring'),
    rt_infra: yesNo('Running the warehouse', 'Lists warehouse work'),
  };
  const TIP_LABEL = { seeker: 'Apply this', manager: 'For your ad' };

  /* ── numbers ── */
  const isTrue = value => value === true || String(value).toLowerCase() === 'true';
  const percent = (count, total) => (total ? Math.round(100 * count / total) : 0);
  const percentWhere = (rows, test) => percent(rows.filter(test).length, rows.length);
  const formatCount = number => number.toLocaleString('en-GB');
  function median(values) {
    const sorted = values.filter(value => !Number.isNaN(value)).sort((a, b) => a - b), half = sorted.length / 2;
    if (!sorted.length) return 0;
    return sorted.length % 2 ? sorted[half - 0.5] : (sorted[half - 1] + sorted[half]) / 2;
  }

  /* ── tests ── */
  function logGamma(x) {
    const series = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
    let y = x, tmp = x + 5.5, sum = 1.000000000190015;
    tmp -= (x + 0.5) * Math.log(tmp);
    series.forEach(term => { sum += term / ++y; });
    return -tmp + Math.log(2.5066282746310005 * sum / x);
  }
  function upperGamma(a, x) {   // regularised Q(a, x)
    if (x <= 0) return 1;
    if (x < a + 1) {
      let ap = a, sum = 1 / a, term = sum;
      for (let i = 1; i < 300; i++) { ap++; term *= x / ap; sum += term; if (Math.abs(term) < Math.abs(sum) * 1e-12) break; }
      return 1 - sum * Math.exp(-x + a * Math.log(x) - logGamma(a));
    }
    let b = x + 1 - a, c = 1 / 1e-300, d = 1 / b, h = d;
    for (let i = 1; i < 300; i++) {
      const an = -i * (i - a); b += 2;
      d = an * d + b; if (Math.abs(d) < 1e-300) d = 1e-300;
      c = b + an / c; if (Math.abs(c) < 1e-300) c = 1e-300;
      d = 1 / d; const delta = d * c; h *= delta;
      if (Math.abs(delta - 1) < 1e-12) break;
    }
    return Math.exp(-x + a * Math.log(x) - logGamma(a)) * h;
  }
  const chiSquareTail = (statistic, freedom) => upperGamma(freedom / 2, statistic / 2);
  const formatP = p => (p < 0.0001 ? 'p&lt;0.0001' : p < 0.001 ? 'p&lt;0.001' : 'p=' + p.toFixed(p < 0.01 ? 3 : 2));
  function chiSquare(observed) {   // a table of counts; empty rows and columns are dropped, and fewer than 30 ads is not tested
    const rows = observed.filter(row => row.some(count => count > 0));
    const columns = rows.length ? rows[0].map((_, column) => column).filter(column => rows.some(row => row[column] > 0)) : [];
    const table = rows.map(row => columns.map(column => row[column]));
    const total = table.flat().reduce((sum, count) => sum + count, 0);
    if (total < 30 || table.length < 2 || columns.length < 2) return null;
    const rowTotals = table.map(row => row.reduce((sum, count) => sum + count, 0));
    const columnTotals = columns.map((_, column) => table.reduce((sum, row) => sum + row[column], 0));
    let statistic = 0, minExpected = Infinity;
    table.forEach((row, i) => row.forEach((count, j) => {
      const expected = rowTotals[i] * columnTotals[j] / total;
      minExpected = Math.min(minExpected, expected);
      if (expected > 0) statistic += (count - expected) ** 2 / expected;
    }));
    const freedom = (table.length - 1) * (columns.length - 1), p = chiSquareTail(statistic, freedom);
    const effect = Math.sqrt(statistic / (total * Math.min(table.length - 1, columns.length - 1)));
    return { n: total, statistic, freedom, p, effect, minExpected, summary: `χ²=${statistic.toFixed(1)}, df=${freedom}, ${formatP(p)}, V=${effect.toFixed(2)}` };
  }
  function wilsonRange(count, total) {   // 95% range of a share, in percent
    if (!total) return [0, 0];
    const z = 1.96, share = count / total, denominator = 1 + z * z / total;
    const centre = (share + z * z / (2 * total)) / denominator, half = z * Math.sqrt(share * (1 - share) / total + z * z / (4 * total * total)) / denominator;
    return [100 * Math.max(0, centre - half), 100 * Math.min(1, centre + half)];
  }
  function significanceLine(test, subject) {   // a pill for the verdict, then the test as reported
    if (!test) return '<span class="sig sig-na">not testable</span> too few ads under this filter for a meaningful test';
    const [badge, word] = test.p < 0.05 ? [test.p < 0.001 ? 'sig-strong' : 'sig-ok', 'significant'] : test.p < 0.10 ? ['sig-marginal', 'marginal'] : ['sig-none', 'not significant'];
    const sparse = test.minExpected < 5 ? ', sparse cells, so χ² is approximate and read as directional' : '';
    return `<span class="sig ${badge}">${word}</span> ${subject ? subject + ': ' : ''}${test.summary}, n=${formatCount(test.n)}${sparse}`;
  }

  /* ── markup; every value from the data goes through escapeHtml ── */
  const escapeHtml = text => String(text).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const tipAttribute = html => ` data-tip="${escapeHtml(html)}"`;
  function textColourOn(hex) {   // white or ink, whichever clears 4.5:1 on the fill
    const channels = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(channel => (channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4));
    return 1.05 / (0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2] + 0.05) >= 4.5 ? '#fff' : 'var(--text)';
  }
  const legend = entries => `<div class="legend">${entries.map(([name, colour]) => `<span class="legend-item"><i class="legend-dot" style="background:${colour}"></i>${escapeHtml(name)}</span>`).join('')}</div>`;
  function stackedBars(groups, split, valueFor, sideNote) {   // a 100% bar per group, split by a field's values, n= on the right
    const counted = groups.filter(group => group.items.length).map(group => ({ group, counts: split.order.map(value => group.items.filter(item => valueFor(item) === value).length) }));
    const shown = split.order.map((_, i) => i).filter(i => counted.some(({ counts }) => counts[i]));
    const rows = counted.map(({ group, counts }) => {
      const total = group.items.length;
      const segments = split.order.map((value, i) => {
        if (!counts[i]) return '';
        const share = 100 * counts[i] / total, colour = split.colour[value];
        const tip = `<b>${Math.round(share)}%</b> ${escapeHtml(split.name[value])}<br><span>${counts[i]} of ${total} · ${escapeHtml(group.label)}</span>`;
        return `<div class="xtab-seg" style="width:${share}%;background:${colour};color:${textColourOn(colour)}"${tipAttribute(tip)}>${share >= 11 ? Math.round(share) + '%' : ''}</div>`;
      }).join('');
      const spoken = shown.filter(i => counts[i]).map(i => `${split.name[split.order[i]]} ${percent(counts[i], total)}%`).join(', ');
      return `<div class="xtab-row"><div class="xtab-label">${escapeHtml(group.label)}</div><div class="xtab-bar" role="img" aria-label="${escapeHtml(group.label + ': ' + spoken)}">${segments}</div>`
        + `<div class="xtab-n">n=${formatCount(total)}</div>${sideNote ? `<div class="xtab-side">${sideNote(group)}</div>` : ''}</div>`;
    }).join('');
    return {
      html: rows + legend(shown.map(i => [split.name[split.order[i]], split.colour[split.order[i]]])),
      table: { head: [groups.label || 'Group', ...shown.map(i => split.name[split.order[i]]), 'Ads'],
        rows: counted.map(({ group, counts }) => [group.label, ...shown.map(i => `${percent(counts[i], group.items.length)}% (${counts[i]})`), group.items.length]) },
    };
  }
  function panelContent(parts) {   // the inside of a .rel-panel: question, finding and test above; reading on the left, chart on the right
    return `<div class="rel-head"><div class="rel-tag">${parts.tag}</div><h3 class="rel-question">${parts.question}</h3><div class="rel-stat">${parts.stat}</div><div class="rel-test">${parts.test}</div></div>`
      + `<div class="rel-body${parts.wide ? ' rel-wide' : ''}"><div class="rel-read">${parts.takeaway ? `<p class="rel-takeaway">${parts.takeaway}</p>` : ''}`
      + (parts.method ? `<details class="rel-details" data-keep="method"><summary>Full analysis &amp; methodology</summary><div class="rel-details-body">${parts.method}</div></details>` : '')
      + (parts.tip ? `<div class="resume-tip"><b>${TIP_LABEL[parts.reader]}:</b> ${parts.tip}</div>` : '')
      + `</div><div class="rel-viz">${parts.viz}</div></div>`;
  }

  /* ── one tooltip per page: any element with data-tip shows it on hover or keyboard focus, and charts drawn on a canvas call showTip ── */
  let tip = null, fromAttribute = false;
  function showTip(html, x, y) {
    if (!tip) { tip = Object.assign(document.createElement('div'), { id: 'tooltip' }); tip.setAttribute('role', 'tooltip'); document.body.append(tip); }
    tip.innerHTML = html;
    tip.classList.add('visible');
    const box = tip.getBoundingClientRect();
    tip.style.left = Math.max(8, Math.min(x + 14, innerWidth - box.width - 8)) + 'px';
    tip.style.top = (y + 14 + box.height > innerHeight ? y - box.height - 10 : y + 14) + 'px';
  }
  const hideTip = () => { if (tip) tip.classList.remove('visible'); };
  const tipTarget = event => event.target.closest && event.target.closest('[data-tip]');
  document.addEventListener('pointermove', event => {
    const target = tipTarget(event);
    if (target) { fromAttribute = true; showTip(target.dataset.tip, event.clientX, event.clientY); } else if (fromAttribute) { fromAttribute = false; hideTip(); }
  });
  document.addEventListener('focusin', event => {
    const target = tipTarget(event);
    if (target) { const box = target.getBoundingClientRect(); fromAttribute = true; showTip(target.dataset.tip, box.left + box.width / 2, box.bottom); } else if (fromAttribute) { fromAttribute = false; hideTip(); }
  });
  document.addEventListener('scroll', hideTip, { passive: true });

  return {
    COLOUR, EUROPE_REGIONS, REGION_NAME, FIELDS, TIP_LABEL, field, regionGroup,
    isTrue, percent, percentWhere, formatCount, median,
    chiSquareTail, chiSquare, wilsonRange, formatP, significanceLine,
    escapeHtml, tipAttribute, textColourOn, legend, stackedBars, panelContent,
    showTip: (html, x, y) => { fromAttribute = false; showTip(html, x, y); }, hideTip,
  };
})();
