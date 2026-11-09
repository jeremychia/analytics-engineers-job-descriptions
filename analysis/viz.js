/* Story cards for index.html and full-analysis.html: live charts from data.json, drawn as house cards (site.js, site.css).
   A page lists cards in order with data-cards="id id …" and the four answers with data-answers, then calls
   JDViz.init({ rows, mode, themes | themesUrl }) once and JDViz.refresh() whenever its filter or reader changes. */
(function () {
  'use strict';
  const { COLOUR, REGION_NAME, FIELDS, field, isTrue, percent, formatCount, chiSquare, chiSquareTail, wilsonRange, formatP, significanceLine, escapeHtml, tipAttribute, legend, panelContent } = Site;

  /* ── vocabulary: the values cards group by, beyond the fields every page shares ── */
  const MONTH_NAME = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const LEVEL_OF_SENIORITY = { junior: 'junior', mid: 'mid', senior: 'senior', lead: 'lead', staff: 'lead', manager: 'lead' };
  const statesPay = ad => Boolean(ad.salary_min && ad.salary_max);
  const asksForAi = ad => Boolean(ad.ai_role) && ad.ai_role !== 'none';
  const DERIVED = {
    level: ad => LEVEL_OF_SENIORITY[ad.seniority],
    stack: ad => {
      const dbt = isTrue(ad.has_dbt), powerBi = isTrue(ad.has_power_bi) || isTrue(ad.has_fabric_synapse);
      return dbt && !powerBi ? 'dbt' : powerBi && !dbt ? 'pbi' : dbt ? 'both' : 'neither';
    },
    geo_macro: Site.regionGroup,
    month: ad => String(ad.jd_id).slice(0, 7),
    semantic: ad => (isTrue(ad.has_semantic_layer) ? 'yes' : 'no'),
  };
  const valueOf = (ad, key) => (DERIVED[key] ? DERIVED[key](ad) : ad[key]);
  const DIMENSION = { ...FIELDS,
    level: field('Level', { junior: ['Junior', COLOUR.green], mid: ['Mid', COLOUR.teal], senior: ['Senior', COLOUR.ink], lead: ['Lead and above', COLOUR.violet] }),
    stack: field('Stack', { dbt: ['dbt, no Power BI', COLOUR.ink], both: ['dbt and Power BI', COLOUR.teal], pbi: ['Power BI or Fabric, no dbt', COLOUR.amber], neither: ['Neither named', COLOUR.grey] }),
    semantic: field('Semantic layer', { yes: ['Names a semantic layer', COLOUR.accent], no: ['Does not', COLOUR.grey] }),
  };
  const THEMES = [
    ['BI & Reporting/Dashboards', 'Reporting and dashboards'], ['Data Modeling & Transformation', 'Data modelling'],
    ['Stakeholder Collaboration & Requirements', 'Working with the people who use data'], ['Data Quality & Testing', 'Data quality and testing'],
    ['Governance & Documentation', 'Governance and documentation'], ['Pipeline Engineering & Orchestration', 'Pipelines'],
    ['Business Analysis & Insight Generation', 'Business analysis'], ['Data Infrastructure & Warehouse Ops', 'Running the warehouse'],
    ['Performance & Cost Optimization', 'Performance and cost'], ['Architecture & Platform Strategy', 'Architecture and platform'],
    ['Data Ownership (end-to-end)', 'Owning data end to end'], ['Self-Service Enablement & Data Literacy', 'Helping others self-serve'],
    ['AI & Agentic Workflows', 'AI and agents'], ['Mentorship & Leadership', 'Mentoring and leading'],
    ['Security, Privacy & Risk', 'Security and privacy'], ['Vendor & Tooling Evaluation', 'Choosing tools and vendors'],
  ];
  const THEME_NAME = Object.fromEntries(THEMES);
  const TOOLS = [['SQL', 'has_sql'], ['Python', 'has_python'], ['dbt', 'has_dbt'], ['Snowflake', 'has_snowflake'], ['BigQuery', 'has_bigquery'],
    ['Databricks', 'has_databricks'], ['Redshift', 'has_redshift'], ['Spark', 'has_spark'], ['Airflow', 'has_airflow'], ['Dagster', 'has_dagster'],
    ['Fivetran', 'has_fivetran'], ['Power BI', 'has_power_bi'], ['Fabric / Synapse', 'has_fabric_synapse'], ['Tableau', 'has_tableau'], ['Looker', 'has_looker'],
    ['Git', 'has_version_control'], ['CI/CD', 'has_ci_cd'], ['AWS', 'has_aws'], ['Azure', 'has_azure'], ['GCP', 'has_gcp']];
  const TOOL_FIELD = Object.fromEntries(TOOLS);
  /* things a card can measure across levels; a duty measure counts only ads whose list of duties was read */
  const METRICS = [
    { key: 'direction', label: 'Asks you to set direction', test: ad => ad.autonomy_level === 'strategic' },
    { key: 'mentor', label: 'Mentoring and leading', theme: 'Mentorship & Leadership' },
    { key: 'arch', label: 'Architecture and platform', theme: 'Architecture & Platform Strategy' },
    { key: 'people', label: 'Working with the people who use data', theme: 'Stakeholder Collaboration & Requirements' },
    { key: 'reporting', label: 'Reporting and dashboards', theme: 'BI & Reporting/Dashboards' },
    { key: 'selfserve', label: 'Helping others self-serve', theme: 'Self-Service Enablement & Data Literacy' },
    { key: 'sql', label: 'SQL', test: ad => isTrue(ad.has_sql) },
    { key: 'dbt', label: 'dbt', test: ad => isTrue(ad.has_dbt) },
    { key: 'python', label: 'Python', test: ad => isTrue(ad.has_python) },
    { key: 'powerbi', label: 'Power BI', test: ad => isTrue(ad.has_power_bi) },
    { key: 'ai', label: 'Asks for AI', test: asksForAi },
    { key: 'semantic', label: 'Names a semantic layer', test: ad => isTrue(ad.has_semantic_layer) },
    { key: 'greenfield', label: 'Builds from scratch', test: ad => ad.greenfield_vs_fix === 'greenfield' },
    { key: 'language', label: 'Requires another language', test: ad => ad.language_gate_type === 'hard' },
    { key: 'remote', label: 'Fully remote', test: ad => ad.work_arrangement === 'remote' },
    { key: 'pay', label: 'States the pay', test: statesPay },
  ];
  const METRIC_BY_KEY = Object.fromEntries(METRICS.map(metric => [metric.key, metric]));

  /* ── state ── */
  const view = { rows: () => [], mode: () => 'seeker', themeSets: null, bulletsByTheme: {}, settings: {}, ready: false };
  const hasDuties = ad => Boolean(view.themeSets && view.themeSets[ad.jd_id]);
  const listsTheme = (ad, theme) => view.themeSets[ad.jd_id].includes(theme);
  const measure = (ads, metric) => {
    const pool = metric.theme ? ads.filter(hasDuties) : ads;
    return [pool.filter(ad => (metric.theme ? listsTheme(ad, metric.theme) : metric.test(ad))).length, pool.length];
  };

  /* ── numbers, words and the tests only cards run; the χ² test itself is shared ── */
  const shareOf = pair => percent(pair[0], pair[1]);
  const plural = (count, word) => `${formatCount(count)} ${word}${count === 1 ? '' : 's'}`;
  const signed = number => `${number > 0 ? '+' : ''}${number}`;
  const lower = text => text.charAt(0).toLowerCase() + text.slice(1);
  const joinList = items => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`);
  const chiSquareAcross = (groups, valueFor, order) => chiSquare(groups.map(group => order.map(value => group.items.filter(ad => valueFor(ad) === value).length)));
  function twoShareP([countA, totalA], [countB, totalB]) {
    if (totalA < 5 || totalB < 5) return null;
    const pooled = (countA + countB) / (totalA + totalB), spread = Math.sqrt(pooled * (1 - pooled) * (1 / totalA + 1 / totalB));
    return spread ? chiSquareTail(((countA / totalA - countB / totalB) / spread) ** 2, 1) : null;
  }
  function holm(pValues) {
    const ranked = pValues.map((p, index) => [p, index]).filter(([p]) => p != null).sort((a, b) => a[0] - b[0]);
    const adjusted = pValues.map(() => null);
    let running = 0;
    ranked.forEach(([p, index], rank) => { running = Math.max(running, Math.min(1, (ranked.length - rank) * p)); adjusted[index] = running; });
    return adjusted;
  }
  const holds = test => Boolean(test) && test.p < 0.05;
  const strengthWord = effect => (effect >= 0.3 ? 'strong' : effect >= 0.15 ? 'moderate' : effect >= 0.08 ? 'weak' : 'negligible');
  const countLine = text => `<span class="sig sig-na">a count</span> ${text}`;
  const tallyLine = (held, of, text) => `<span class="sig ${held ? 'sig-ok' : 'sig-none'}">${held} of ${of}</span> ${text}`;

  /* ── markup; every value from the data goes through escapeHtml ── */
  const kpiRow = tiles => `<div class="sv-kpis" style="grid-template-columns:repeat(${tiles.length},minmax(0,1fr))">${tiles.map(([value, label]) => `<div><b>${value}</b><span>${escapeHtml(label)}</span></div>`).join('')}</div>`;
  const note = text => `<p class="sv-note">${text}</p>`;
  const subheading = text => `<div class="sv-sub">${text}</div>`;
  const clickable = action => (action ? ` data-act="${escapeHtml(action[0])}" data-v="${escapeHtml(action[1])}" role="button" tabindex="0"` : '');

  /* ── charts; each returns { html, table } in the house look ── */
  const stackedBars = (groups, key, sideNote) => Site.stackedBars(groups, DIMENSION[key], ad => valueOf(ad, key), sideNote);

  function rankedBars(items, options = {}) {   // bars on one baseline; a long bar carries its value inside
    const valueText = item => (options.value ? options.value(item) : `${percent(item.count, item.total)}%`);
    const html = items.map(item => {
      const width = options.width ? options.width(item) : 100 * item.count / (item.total || 1), inside = width > 78;
      const tip = `<b>${valueText(item)}</b> ${escapeHtml(item.label)}<br><span>${item.count} of ${item.total}</span>`;
      return `<div class="sv-brow${item.active ? ' sv-active' : ''}${item.action ? ' sv-click' : ''}"${clickable(item.action)}${tipAttribute(tip)}>`
        + `<div class="sv-blabel">${escapeHtml(item.label)}</div><div class="sv-btrack"><div class="sv-bfill" style="width:${width}%"></div>`
        + `<span class="sv-bval${inside ? ' sv-in' : ''}" style="${inside ? `right:calc(${100 - width}% + 6px)` : `left:calc(${width}% + 6px)`}">${valueText(item)}</span></div></div>`;
    }).join('');
    return { html: `<div class="sv-bars">${html}</div>`, table: { head: ['', options.valueHead || 'Share', 'Count'], rows: items.map(item => [item.label, valueText(item), `${item.count} of ${item.total}`]) } };
  }

  function dumbbell(items, first, second) {   // two groups item by item: a dot each, the gap, and whether it holds after Holm
    const adjusted = holm(items.map(item => twoShareP(item.first, item.second)));
    const axis = `<div class="sv-drow sv-daxis"><div></div><div class="sv-dtrack">${[0, 25, 50, 75, 100].map(tick => `<span style="left:${tick}%">${tick}%</span>`).join('')}</div><div></div></div>`;
    const rows = items.map((item, i) => {
      const a = 100 * item.first[0] / (item.first[1] || 1), b = 100 * item.second[0] / (item.second[1] || 1), held = adjusted[i] != null && adjusted[i] < 0.05;
      const verdict = adjusted[i] == null ? 'too few ads to test' : `${held ? 'a gap beyond chance' : 'could be chance'}, Holm ${formatP(adjusted[i])}`;
      const tip = `<b>${escapeHtml(item.label)}</b><br>${escapeHtml(first.name)}: <b>${Math.round(a)}%</b> <span>(${item.first[0]} of ${item.first[1]})</span>`
        + `<br>${escapeHtml(second.name)}: <b>${Math.round(b)}%</b> <span>(${item.second[0]} of ${item.second[1]})</span><br><span>${verdict}</span>`;
      return `<div class="sv-drow${item.active ? ' sv-active' : ''}${item.action ? ' sv-click' : ''}"${clickable(item.action)}${tipAttribute(tip)}>`
        + `<div class="sv-dlabel">${escapeHtml(item.label)}</div><div class="sv-dtrack"><i class="sv-dline" style="left:${Math.min(a, b)}%;width:${Math.abs(a - b)}%"></i>`
        + `<i class="sv-dot" style="left:${b}%;background:${second.colour}"></i><i class="sv-dot" style="left:${a}%;background:${first.colour}"></i></div>`
        + `<div class="sv-dgap${held ? ' sv-held' : ''}">${signed(Math.round(a - b))}</div></div>`;
    }).join('');
    return {
      html: legend([[first.name, first.colour], [second.name, second.colour]]) + `<div class="sv-dumb">${axis}${rows}</div>`
        + note(`The number on the right is the gap in percentage points. Bold gaps hold after correcting for testing ${items.length} items at once (Holm).`),
      held: adjusted.filter(pValue => pValue != null && pValue < 0.05).length,
      table: { head: ['', first.name, second.name, 'Gap', 'Holm p'], rows: items.map((item, i) => [item.label, `${shareOf(item.first)}% (${item.first[0]}/${item.first[1]})`,
        `${shareOf(item.second)}% (${item.second[0]}/${item.second[1]})`, signed(shareOf(item.first) - shareOf(item.second)), adjusted[i] == null ? '–' : formatP(adjusted[i]).replace('&lt;', '<')]) },
    };
  }

  function heatGrid(rowSpecs, columnSpecs, cellFor, options = {}) {   // shares in a grid, darker = higher
    const head = `<tr><th></th>${columnSpecs.map(column => `<th scope="col"${options.rotate ? ' class="sv-rot"' : ''}><span>${escapeHtml(column.label)}</span></th>`).join('')}`
      + `${options.extra ? `<th scope="col">${escapeHtml(options.extra.label)}</th>` : ''}</tr>`;
    const body = rowSpecs.map((row, i) => `<tr><th scope="row">${escapeHtml(row.label)}</th>${columnSpecs.map((column, j) => {
      const cell = cellFor(i, j);
      if (!cell || !cell.total) return '<td class="sv-empty">–</td>';
      const share = 100 * cell.count / cell.total, alpha = Math.min(1, share / 100) * 0.92;
      const tip = cell.tip || `<b>${Math.round(share)}%</b> ${escapeHtml(row.label)} · ${escapeHtml(column.label)}<br><span>${cell.count} of ${cell.total}</span>`;
      return `<td style="background:rgba(29,78,216,${alpha.toFixed(3)});color:${alpha > 0.45 ? '#fff' : 'var(--text)'}"${cell.self ? ' class="sv-self"' : ''}${tipAttribute(tip)}>${Math.round(share)}</td>`;
    }).join('')}${options.extra ? `<td class="sv-extra">${options.extra.value(i)}</td>` : ''}</tr>`).join('');
    return {
      html: `<div class="sv-heatwrap"><table class="sv-heat${options.rotate ? ' sv-compact' : ''}">${head}${body}</table></div>${note(options.note || 'Each cell is a share of ads, in percent. Darker means a higher share.')}`,
      table: { head: ['', ...columnSpecs.map(column => column.label)], rows: rowSpecs.map((row, i) => [row.label, ...columnSpecs.map((_, j) => {
        const cell = cellFor(i, j);
        return cell && cell.total ? `${percent(cell.count, cell.total)}% (${cell.count}/${cell.total})` : '–';
      })]) },
    };
  }

  function levelLines(points, series) {   // lines across ordered points, each point with its 95% range, one hover band per point
    const width = 680, height = 300, left = 44, right = 190, top = 14, bottom = 52, plotWidth = width - left - right, plotHeight = height - top - bottom;
    const ceiling = Math.min(100, Math.ceil(Math.max(10, ...series.flatMap(line => line.points.map(pair => wilsonRange(...pair)[1]))) / 25) * 25);
    const x = i => left + (points.length === 1 ? plotWidth / 2 : i * plotWidth / (points.length - 1));
    const y = value => top + plotHeight - value / ceiling * plotHeight;
    const spoken = series.map(line => line.name + ': ' + line.points.map((pair, i) => `${points[i].label} ${shareOf(pair)}%`).join(', ')).join('; ');
    let svg = `<svg viewBox="0 0 ${width} ${height}" class="sv-svg" role="img" aria-label="${escapeHtml(spoken)}">`;
    for (let tick = 0; tick <= ceiling; tick += 25) svg += `<line x1="${left}" x2="${left + plotWidth}" y1="${y(tick)}" y2="${y(tick)}" class="sv-grid"/><text x="${left - 8}" y="${y(tick) + 4}" text-anchor="end" class="sv-tick">${tick}%</text>`;
    points.forEach((point, i) => {
      svg += `<text x="${x(i)}" y="${height - bottom + 20}" text-anchor="middle" class="sv-xtick">${escapeHtml(point.label)}</text>`;
      if (point.total != null) svg += `<text x="${x(i)}" y="${height - bottom + 36}" text-anchor="middle" class="sv-tick">n=${formatCount(point.total)}</text>`;
    });
    const endLabels = [];
    series.forEach(line => {
      const coordinates = line.points.map((pair, i) => [x(i), y(100 * pair[0] / (pair[1] || 1))]);
      line.points.forEach((pair, i) => { const [low, high] = wilsonRange(...pair); svg += `<line x1="${x(i)}" x2="${x(i)}" y1="${y(low)}" y2="${y(high)}" stroke="${line.colour}" stroke-opacity=".35" stroke-width="6" stroke-linecap="round"/>`; });
      svg += `<path d="${coordinates.map((point, i) => (i ? 'L' : 'M') + point[0].toFixed(1) + ' ' + point[1].toFixed(1)).join('')}" fill="none" stroke="${line.colour}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
      coordinates.forEach(point => { svg += `<circle cx="${point[0]}" cy="${point[1]}" r="5" fill="${line.colour}" stroke="#fff" stroke-width="2"/>`; });
      const last = coordinates[coordinates.length - 1];
      endLabels.push({ x: last[0], y: last[1], text: `${line.name} ${shareOf(line.points[line.points.length - 1])}%`, colour: line.colour });
    });
    endLabels.sort((a, b) => a.y - b.y).forEach((label, i, all) => { label.labelY = i ? Math.max(label.y, all[i - 1].labelY + 16) : label.y; });
    endLabels.forEach(label => { svg += `<line x1="${label.x + 8}" x2="${label.x + 20}" y1="${label.y}" y2="${label.labelY}" stroke="${label.colour}" stroke-width="1.5"/><text x="${label.x + 24}" y="${label.labelY + 4}" class="sv-end">${escapeHtml(label.text)}</text>`; });
    points.forEach((point, i) => {
      const band = points.length > 1 ? plotWidth / (points.length - 1) : plotWidth;
      const tip = `<b>${escapeHtml(point.label)}</b>` + series.map(line => {
        const pair = line.points[i], [low, high] = wilsonRange(...pair);
        return `<br><i style="background:${line.colour}"></i>${escapeHtml(line.name)}: <b>${shareOf(pair)}%</b> <span>${pair[0]} of ${pair[1]}, likely ${Math.round(low)}–${Math.round(high)}%</span>`;
      }).join('');
      svg += `<rect x="${x(i) - band / 2}" y="${top}" width="${band}" height="${plotHeight}" fill="transparent"${tipAttribute(tip)}/>`;
    });
    return {
      html: svg + '</svg>' + legend(series.map(line => [line.name, line.colour])) + note('Each point carries its likely range (95%), so a short band means a solid estimate.'),
      table: { head: ['', ...points.map(point => point.label)], rows: series.map(line => [line.name, ...line.points.map(pair => `${shareOf(pair)}% (${pair[0]}/${pair[1]})`)]) },
    };
  }

  function timeColumns(bins, key) {   // columns over time, optionally stacked by an ordered group, one hover target per column
    const width = 680, height = 230, left = 40, right = 10, top = 12, bottom = 34, plotWidth = width - left - right, plotHeight = height - top - bottom, dimension = key ? DIMENSION[key] : null;
    const tallest = Math.max(1, ...bins.map(bin => bin.items.length)), step = tallest > 200 ? 100 : tallest > 80 ? 25 : 10, ceiling = Math.ceil(tallest / step) * step;
    const band = plotWidth / bins.length, barWidth = Math.min(24, band * 0.72), y = value => top + plotHeight - value / ceiling * plotHeight;
    const countsIn = bin => (dimension ? dimension.order.map(value => [value, bin.items.filter(ad => valueOf(ad, key) === value).length]) : [[null, bin.items.length]]);
    let svg = `<svg viewBox="0 0 ${width} ${height}" class="sv-svg" role="img" aria-label="${escapeHtml(bins.map(bin => `${bin.label}: ${bin.items.length} ads`).join(', '))}">`;
    for (let tick = 0; tick <= ceiling; tick += step) svg += `<line x1="${left}" x2="${left + plotWidth}" y1="${y(tick)}" y2="${y(tick)}" class="sv-grid"/><text x="${left - 6}" y="${y(tick) + 4}" text-anchor="end" class="sv-tick">${tick}</text>`;
    const labelEvery = Math.ceil(bins.length / 12);
    bins.forEach((bin, i) => {
      const columnX = left + i * band + (band - barWidth) / 2, parts = countsIn(bin);
      let baseline = y(0);
      parts.forEach(([value, count], j) => {
        if (!count) return;
        const barHeight = count / ceiling * plotHeight, gap = dimension && j < parts.length - 1 ? 1 : 0;
        baseline -= barHeight;
        svg += `<rect x="${columnX}" y="${baseline + gap}" width="${barWidth}" height="${Math.max(0, barHeight - gap)}" fill="${dimension ? dimension.colour[value] : 'rgba(26,29,36,0.72)'}" rx="${!dimension || j === parts.length - 1 ? 3 : 0}"/>`;
      });
      if (i % labelEvery === 0) svg += `<text x="${columnX + barWidth / 2}" y="${height - bottom + 18}" text-anchor="middle" class="sv-tick">${escapeHtml(bin.short || bin.label)}</text>`;
      const busiest = largest(tally(bin.items, ad => ad.company)).slice(0, 3);
      const tip = `<b>${bin.items.length} ads</b> ${escapeHtml(bin.label)}`
        + (dimension ? parts.filter(([, count]) => count).map(([value, count]) => `<br><i style="background:${dimension.colour[value]}"></i>${escapeHtml(dimension.name[value])}: <b>${count}</b>`).join('') : '')
        + (busiest.length ? `<br><span>Most ads from ${busiest.map(([employer, count]) => `${escapeHtml(employer)} (${count})`).join(', ')}</span>` : '');
      svg += `<rect x="${left + i * band}" y="${top}" width="${band}" height="${plotHeight}" fill="transparent"${tipAttribute(tip)}/>`;
    });
    return {
      html: svg + '</svg>' + (dimension ? legend(dimension.order.map(value => [dimension.name[value], dimension.colour[value]])) : ''),
      table: { head: ['Period', 'Ads', ...(dimension ? dimension.order.map(value => dimension.name[value]) : [])], rows: bins.map(bin => [bin.label, bin.items.length, ...(dimension ? countsIn(bin).map(([, count]) => count) : [])]) },
    };
  }

  /* ── grouping ── */
  const tally = (items, keyFor) => items.reduce((counts, item) => { const key = keyFor(item); counts[key] = (counts[key] || 0) + 1; return counts; }, {});
  const largest = counts => Object.entries(counts).sort((a, b) => b[1] - a[1]);
  function groupBy(rows, key) {
    const dimension = DIMENSION[key];
    const groups = dimension.order.map(value => ({ key: value, label: dimension.name[value], items: rows.filter(ad => valueOf(ad, key) === value) })).filter(group => group.items.length);
    groups.label = dimension.label;
    return groups;
  }
  function monthGroups(rows, minimum = 1) {
    const groups = [...new Set(rows.map(DERIVED.month))].sort().map(month => {
      const name = MONTH_NAME[Number(month.slice(5)) - 1];
      return { key: month, label: `${name} ${month.slice(0, 4)}`, short: `${name.slice(0, 3)} ${month.slice(2, 4)}`, items: rows.filter(ad => DERIVED.month(ad) === month) };
    }).filter(group => group.items.length >= minimum);
    groups.label = 'Month saved';
    return groups;
  }
  function regionGroups(rows, minimum) {
    const groups = Object.keys(REGION_NAME).map(region => ({ key: region, label: REGION_NAME[region], items: rows.filter(ad => (ad.geo_region || 'other') === region) }))
      .filter(group => group.items.length >= minimum).sort((a, b) => b.items.length - a.items.length);
    groups.label = 'Region';
    return groups;
  }
  const toolsNamed = ad => TOOLS.filter(([, field]) => isTrue(ad[field])).map(([tool]) => tool);
  const themeShares = rows => { const pool = rows.filter(hasDuties); return THEMES.map(([theme, label]) => ({ theme, label, count: pool.filter(ad => listsTheme(ad, theme)).length, total: pool.length })); };
  const LEVEL_WORDS = /\b(senior|sr\.?|junior|jr\.?|lead|staff|principal|mid[- ]?level|associate|graduate|entry[- ]level|intern|head of|i{1,3}|iv)\b/gi;
  function cleanTitle(role) {   // drop team names, places and "(m/f/d)" after a dash, bracket or comma, then the level words
    const title = String(role || '').split(/\s[-–—|:]\s|[(,|]/)[0].replace(LEVEL_WORDS, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    return title ? title.replace(/(^|\s)\S/g, letter => letter.toUpperCase()).replace(/\bBi\b/g, 'BI') : '(no title)';
  }
  function highlight(bullet, matched) {   // a pattern may match only a word stem ("collaborat"), so the mark runs to the end of that word
    const text = escapeHtml(bullet);
    if (!matched) return text;
    const found = text.match(new RegExp(escapeHtml(matched).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\w-]*', 'i'));
    return found ? `${text.slice(0, found.index)}<mark>${found[0]}</mark>${text.slice(found.index + found[0].length)}` : text;
  }
  const LOADING = { stat: 'Loading the duties read from each ad…', test: countLine('loading…'), takeaway: '', method: '', tips: null, chart: { html: note('Loading the duties read from each ad…'), table: null } };

  /* ── the cards; each slot on a page lists the ones it shows, and each card opens with a bridge from what came before ── */
  const CARDS = [
    {
      id: 'titles', tag: 'Titles × duties · same name, different jobs', wide: true,
      question: 'How many job titles are there, and does the same title mean the same work?',
      bridge: 'The title is the first thing anyone reads, so start there.',
      build(rows, settings) {
        const byTitle = tally(rows, ad => cleanTitle(ad.role)), ranked = largest(byTitle), top = ranked.slice(0, 12);
        const rawTitles = new Set(rows.map(ad => String(ad.role || '').trim().toLowerCase())).size;
        const picked = settings.title && byTitle[settings.title] ? settings.title : top[0] && top[0][0];
        const topThree = ranked.slice(0, 3).reduce((sum, [, count]) => sum + count, 0);
        const titleBars = rankedBars(top.map(([title, count]) => ({ label: title, count, total: rows.length, active: title === picked, action: ['title', title] })),
          { value: item => `${item.count}`, valueHead: 'Ads', width: item => 100 * item.count / top[0][1] });
        let profile = { html: note('Loading the duties read from each ad…'), table: null, held: 0 }, difference = '';
        if (view.themeSets && picked) {
          const inTitle = rows.filter(ad => cleanTitle(ad.role) === picked && hasDuties(ad)), others = rows.filter(ad => cleanTitle(ad.role) !== picked && hasDuties(ad));
          const items = THEMES.map(([theme, label]) => ({ label, first: [inTitle.filter(ad => listsTheme(ad, theme)).length, inTitle.length], second: [others.filter(ad => listsTheme(ad, theme)).length, others.length] }))
            .sort((a, b) => Math.abs(shareOf(b.first) - shareOf(b.second)) - Math.abs(shareOf(a.first) - shareOf(a.second)));
          profile = dumbbell(items, { name: `"${picked}" ads (${inTitle.length})`, colour: COLOUR.accent }, { name: `All other ads (${others.length})`, colour: COLOUR.grey });
          difference = ` The biggest difference is ${lower(items[0].label)}: ${shareOf(items[0].first)}% of "${escapeHtml(picked)}" ads against ${shareOf(items[0].second)}% of the rest.`;
        }
        const engineer = byTitle['Analytics Engineer'] || 0;
        return {
          stat: `${formatCount(rows.length)} ads use ${formatCount(rawTitles)} different titles. With level words and team names removed, ${formatCount(ranked.length)} remain, and "Analytics Engineer" alone covers ${percent(engineer, rows.length)}% of ads.${difference}`,
          test: view.themeSets ? tallyLine(profile.held, THEMES.length, `kinds of duty differ beyond chance between "${escapeHtml(picked)}" ads and all other ads (two-proportion tests, Holm-corrected)`) : countLine('loading the duties…'),
          takeaway: `Titles bunch on a few names: the top three cover ${percent(topThree, rows.length)}% of ads. But one name covers many jobs${view.themeSets ? `: "${escapeHtml(picked)}" ads differ from the rest on ${plural(profile.held, 'kind')} of duty` : ''}. Pick a title on the left to compare it.`,
          method: `Titles are cleaned before counting: anything after a dash, comma, bracket or bar is dropped (team names, places, "m/f/d"), and level words such as senior, junior, lead, staff and principal are removed. The comparison uses the duties read from each ad's list of responsibilities, sorted into ${THEMES.length} kinds of work; each dot is the share of ads that list at least one duty of that kind. Ads without a list of responsibilities are left out of the comparison.`,
          tips: { seeker: 'Search by title to find ads, then read the duties to decide. If the duties lean to dashboards, it is a reporting job whatever the title says.', manager: 'Your title will be read as one of a dozen names. The duties tell a candidate which job it is, so put the defining ones first.' },
          chart: { html: `<div class="sv-two"><div>${subheading('Most common titles, after cleaning. Click one to compare.')}${titleBars.html}</div><div>${subheading('Duties in those ads, against all other ads')}${profile.html}</div></div>`, table: profile.table || titleBars.table },
        };
      },
      act(settings, action, value) { if (action === 'title') settings.title = value; },
    },
    {
      id: 'duties', tag: 'Duties · the shared core and the local edges', wide: true,
      question: 'Which duties do ads list, and where do two kinds of ad part ways?',
      bridge: 'If the title doesn\'t settle it, the duties should. This is what ads ask people to do, and where different kinds of ad part ways.',
      controls: [{ key: 'compare', label: 'Compare', options: [['none', 'All ads'], ['stack', 'dbt vs Power BI'], ['level', 'Junior vs senior and above'], ['region', 'Europe vs NYC metro'], ['ai', 'AI ask vs none']], initial: 'none' },
        { key: 'shown', hidden: true, initial: 6 }],
      build(rows, settings) {
        if (!view.themeSets) return LOADING;
        const shares = themeShares(rows).sort((a, b) => b.count - a.count), withDuties = rows.filter(hasDuties).length, core = shares.slice(0, 4);
        const picked = settings.theme && THEME_NAME[settings.theme] ? settings.theme : shares[0].theme;
        const PAIRS = {
          stack: [ad => DERIVED.stack(ad) === 'dbt', ad => DERIVED.stack(ad) === 'pbi', 'dbt, no Power BI', 'Power BI or Fabric, no dbt'],
          level: [ad => DERIVED.level(ad) === 'junior', ad => ['senior', 'lead'].includes(DERIVED.level(ad)), 'Junior', 'Senior and above'],
          region: [ad => DERIVED.geo_macro(ad) === 'europe', ad => DERIVED.geo_macro(ad) === 'nyc_metro', 'Europe', 'NYC metro'],
          ai: [asksForAi, ad => !asksForAi(ad), 'Asks for AI', 'No AI ask'],
        };
        let chart, stat, test, takeaway;
        if (settings.compare === 'none') {
          chart = rankedBars(shares.map(share => ({ label: share.label, count: share.count, total: share.total, active: share.theme === picked, action: ['theme', share.theme] })));
          stat = `${formatCount(withDuties)} ads have a list of duties to read. The four most common kinds appear in ${percent(core[3].count, withDuties)}% to ${percent(core[0].count, withDuties)}% of them, and ${shares.filter(share => 2 * share.count > withDuties).length} of ${THEMES.length} kinds appear in more than half.`;
          test = countLine('one ad can list several kinds of duty, so the shares add up to more than 100%');
          takeaway = `A core of ${joinList(core.map(share => lower(share.label)))} appears in ${percent(core[3].count, withDuties)}% to ${percent(core[0].count, withDuties)}% of ads. Past that core, each kind of duty appears in fewer ads, and that is where jobs differ.`;
        } else {
          const [isFirst, isSecond, firstName, secondName] = PAIRS[settings.compare];
          const first = rows.filter(ad => hasDuties(ad) && isFirst(ad)), second = rows.filter(ad => hasDuties(ad) && isSecond(ad));
          const items = THEMES.map(([theme, label]) => ({ label, first: [first.filter(ad => listsTheme(ad, theme)).length, first.length], second: [second.filter(ad => listsTheme(ad, theme)).length, second.length], active: theme === picked, action: ['theme', theme] }))
            .sort((a, b) => (shareOf(b.first) - shareOf(b.second)) - (shareOf(a.first) - shareOf(a.second)));
          chart = dumbbell(items, { name: `${firstName} (${first.length})`, colour: COLOUR.accent }, { name: `${secondName} (${second.length})`, colour: COLOUR.amber });
          const most = items[0], least = items[items.length - 1];
          stat = `${firstName} ads list ${lower(most.label)} more often than ${secondName} ads: ${shareOf(most.first)}% against ${shareOf(most.second)}%. The gap runs the other way for ${lower(least.label)}: ${shareOf(least.first)}% against ${shareOf(least.second)}%.`;
          test = tallyLine(chart.held, THEMES.length, `kinds of duty differ beyond chance between the two groups (two-proportion tests, Holm-corrected, n=${first.length + second.length})`);
          takeaway = chart.held ? `The two kinds of ad share the core but part ways on ${plural(chart.held, 'kind')} of duty. The widest gaps are ${lower(most.label)} and ${lower(least.label)}.` : 'Under this filter, the two kinds of ad list much the same duties. No gap holds once chance is allowed for.';
        }
        const byId = Object.fromEntries(rows.map(ad => [ad.jd_id, ad]));
        const lines = (view.bulletsByTheme[picked] || []).filter(line => byId[line.jd_id]);
        const spread = Math.max(1, Math.floor(lines.length / 24)), sample = lines.filter((_, i) => i % spread === 0).slice(0, settings.shown);
        const evidence = `<div class="sv-evidence">${subheading(`Real lines from these ads: ${escapeHtml(lower(THEME_NAME[picked]))}, ${formatCount(lines.length)} lines in all. The highlighted words are what matched. Click another kind of duty to change.`)}`
          + (sample.map(line => `<blockquote>${highlight(line.bullet, line.matched_text)}<cite>${escapeHtml(byId[line.jd_id].company)} · ${escapeHtml(byId[line.jd_id].role)}</cite></blockquote>`).join('') || note('No lines under this filter.'))
          + (sample.length < Math.min(lines.length, 24) ? '<button type="button" class="sv-opt sv-more" data-act="more" data-v="6">Show more lines</button>' : '') + '</div>';
        return {
          stat, test, takeaway,
          method: `Each ad's list of responsibilities is split into single lines, and each line is matched against ${THEMES.length} kinds of work using fixed phrase lists. A line can match more than one kind. A share is the percentage of ads with at least one matching line. Comparisons use a two-proportion test for each kind of duty, then a Holm correction, because testing ${THEMES.length} kinds at once makes a chance gap more likely somewhere. The quoted lines are spread evenly across the matching lines in the current filter.`,
          tips: { seeker: 'Read an ad\'s duties against this core. If an ad lists only the core, the role is broad. If it leans hard on one edge, such as pipelines or dashboards, that edge is the job.', manager: 'Start from the shared core, then name the edge that makes your role different. Candidates compare your list against every other ad they read.' },
          chart: { html: chart.html + evidence, table: chart.table },
        };
      },
      act(settings, action, value) {
        if (action === 'theme') { settings.theme = value; settings.shown = 6; }
        if (action === 'more') settings.shown += Number(value);
      },
    },
    {
      id: 'stack', tag: 'Stack × the job · what the tools say',
      question: 'Does the stack an ad names tell you more about the job than its title?',
      bridge: 'The edges follow the tools. Hold the level fixed, and the stack an ad names still goes with a different kind of job.',
      controls: [{ key: 'field', label: 'Show', options: [['autonomy_level', 'Who sets direction'], ['greenfield_vs_fix', 'Build or fix'], ['ai_role', 'AI ask'], ['data_team_maturity', 'Team stage']], initial: 'autonomy_level' },
        { key: 'level', label: 'Level', options: [['all', 'All'], ['mid', 'Mid'], ['senior', 'Senior']], initial: 'all' }],
      build(rows, settings) {
        const pool = settings.level === 'all' ? rows : rows.filter(ad => DERIVED.level(ad) === settings.level);
        const groups = groupBy(pool, 'stack'), dimension = DIMENSION[settings.field], lead = dimension.order[0];
        const leadShare = key => { const group = groups.find(item => item.key === key); return group ? [group.items.filter(ad => ad[settings.field] === lead).length, group.items.length] : [0, 0]; };
        const dbt = leadShare('dbt'), powerBi = leadShare('pbi'), test = chiSquareAcross(groups, ad => ad[settings.field], dimension.order);
        const atLevel = settings.level === 'all' ? '' : ` at ${settings.level} level`;
        return {
          stat: `${dimension.name[lead]}: ${shareOf(dbt)}% of dbt ads (n=${dbt[1]}) against ${shareOf(powerBi)}% of Power BI or Fabric ads (n=${powerBi[1]})${atLevel}.${test ? ` The link between stack and ${lower(dimension.label)} is ${strengthWord(test.effect)}.` : ''}`,
          test: significanceLine(test),
          takeaway: `${dimension.name[lead]} appears in ${shareOf(dbt)}% of dbt ads and ${shareOf(powerBi)}% of Power BI ads${atLevel}. ${holds(test) ? 'The stacks go with different jobs, beyond chance.' : 'Under this filter, the gap could be chance.'} It is a pattern in ads, not proof that a tool causes the work.`,
          method: 'Ads are grouped by the modelling and BI tools they name: dbt without Power BI or Fabric, Power BI or Fabric without dbt, both, or neither. Each bar shows how the chosen reading splits inside a group. The test is a χ² test of independence across all four groups; V (Cramér\'s V) measures how strong the link is, from 0 (none) to 1 (total). Picking a level holds seniority fixed, because Power BI ads include more junior and mid roles.',
          tips: { seeker: 'Pick the job by what fills the ad. If you want to set direction and build models, look at the dbt ads first. If you like building reports, the Power BI ads are your market.', manager: 'Name the stack. It tells candidates more about the job than the title does, and it is the first thing they check.' },
          chart: stackedBars(groups, settings.field),
        };
      },
    },
    {
      id: 'tools', tag: 'Tools × tools · which ones travel together', wide: true,
      question: 'When an ad names one tool, which others does it name?',
      bridge: 'Tools rarely come alone. When an ad names one, it tends to name its neighbours.',
      controls: [{ key: 'order', label: 'Order', options: [['prevalence', 'Most named first'], ['family', 'By family']], initial: 'family' }],
      build(rows, settings) {
        const FAMILY_ORDER = ['SQL', 'Python', 'Git', 'CI/CD', 'dbt', 'Snowflake', 'Fivetran', 'Looker', 'BigQuery', 'GCP', 'Airflow', 'Dagster', 'Redshift', 'AWS', 'Tableau', 'Databricks', 'Spark', 'Power BI', 'Fabric / Synapse', 'Azure'];
        const naming = Object.fromEntries(TOOLS.map(([tool, field]) => [tool, rows.filter(ad => isTrue(ad[field]))]));
        const order = settings.order === 'family' ? FAMILY_ORDER : TOOLS.map(([tool]) => tool).sort((a, b) => naming[b].length - naming[a].length);
        const pairings = [];
        order.forEach((tool, i) => order.slice(i + 1).forEach(other => {
          const together = naming[tool].filter(ad => isTrue(ad[TOOL_FIELD[other]])).length, expected = naming[tool].length * naming[other].length / (rows.length || 1);
          if (naming[tool].length >= 30 && naming[other].length >= 30 && expected > 0) pairings.push({ a: tool, b: other, lift: together / expected });
        }));
        pairings.sort((first, second) => second.lift - first.lift);
        const grid = heatGrid(order.map(tool => ({ label: `${tool} (${naming[tool].length})` })), order.map(tool => ({ label: tool })), (row, column) => {
          const tool = order[row], other = order[column];
          if (row === column) return { count: naming[tool].length, total: rows.length, self: true, tip: `<b>${percent(naming[tool].length, rows.length)}%</b> of all ads name ${escapeHtml(tool)}<br><span>${naming[tool].length} of ${rows.length}</span>` };
          const together = naming[tool].filter(ad => isTrue(ad[TOOL_FIELD[other]])).length;
          return { count: together, total: naming[tool].length, tip: `<b>${percent(together, naming[tool].length)}%</b> of ${escapeHtml(tool)} ads also name ${escapeHtml(other)}<br><span>${together} of ${naming[tool].length} · ${percent(naming[other].length, rows.length)}% of all ads name ${escapeHtml(other)}</span>` };
        }, { rotate: true, note: 'Read along a row: of the ads that name the tool on the left, the share that also name the tool above. The outlined diagonal is the share of all ads that name the tool.' });
        const strongest = pairings.slice(0, 3);
        return {
          stat: strongest.length ? `The strongest pairings: ${strongest.map(pair => `${escapeHtml(pair.a)} with ${escapeHtml(pair.b)} (${pair.lift.toFixed(1)} times as often as chance)`).join('; ')}. ${percent(naming.SQL.length, rows.length)}% of ads name SQL, so it sits alongside almost everything.` : 'Too few ads under this filter to compare pairs of tools.',
          test: countLine('"times as often as chance" compares how often two tools appear together with how often they would if ads picked them independently; only tools named in at least 30 ads are compared'),
          takeaway: strongest.length ? `Tools come in families. The tightest pair is ${escapeHtml(strongest[0].a)} with ${escapeHtml(strongest[0].b)}, named together ${strongest[0].lift.toFixed(1)} times as often as chance. Read which family an ad belongs to, not only the single tools it names.` : '',
          method: 'A cell is a conditional share: among the ads that name the row\'s tool, the percentage that also name the column\'s tool. The grid is not symmetric, because a rare tool can almost always appear with a common one while the common one rarely appears with it. The pairings use lift: how often two tools appear together, divided by how often they would if ads chose them independently. A lift of 2 means twice as often as chance.',
          tips: { seeker: 'If you know one tool in a family, learn its neighbours next. They are what the same ads will ask for.', manager: 'Candidates read your tool list as a family. Naming tools from two families reads as a migration, or as two jobs in one.' },
          chart: grid,
        };
      },
    },
    {
      id: 'mix', tag: 'Your tools × every ad · coverage', wide: true,
      question: 'Which ads does your set of tools cover, and which tool would open the most new ones?',
      bridge: 'Put together, the tools an ad names make a mix that is almost never repeated. Here is where your own set lands.',
      controls: [{ key: 'mine', label: 'Your tools', multiple: true, options: TOOLS.map(([tool]) => [tool, tool]), initial: ['SQL', 'Python', 'dbt'] },
        { key: 'level', label: 'Level', options: [['all', 'All'], ['junior', 'Junior'], ['mid', 'Mid'], ['senior', 'Senior'], ['lead', 'Lead and above']], initial: 'all' }],
      build(rows, settings) {
        const mine = new Set(settings.mine), levelPool = settings.level === 'all' ? rows : rows.filter(ad => DERIVED.level(ad) === settings.level);
        const pool = levelPool.map(toolsNamed).filter(tools => tools.length);
        const covered = pool.filter(tools => tools.every(tool => mine.has(tool))), exact = covered.filter(tools => tools.length === mine.size);
        const oneAway = pool.filter(tools => tools.filter(tool => !mine.has(tool)).length === 1);
        const opens = largest(tally(oneAway, tools => tools.find(tool => !mine.has(tool)))).slice(0, 10);
        const unique = Object.values(tally(pool, tools => tools.slice().sort().join(' + '))).filter(count => count === 1).length;
        const bars = rankedBars(opens.map(([tool, count]) => ({ label: `+ ${tool}`, count, total: pool.length })), { value: item => `+${item.count} ads`, valueHead: 'Ads opened', width: item => 100 * item.count / opens[0][1] });
        const where = settings.level === 'all' ? '' : ` at ${settings.level === 'lead' ? 'lead level and above' : settings.level + ' level'}`;
        return {
          stat: `With ${escapeHtml([...mine].join(', ') || 'no tools')}, you cover ${percent(covered.length, pool.length)}% of ${formatCount(pool.length)} ads${where}: every tool they name is one you have. Another ${formatCount(oneAway.length)} ads are one tool away, and ${plural(exact.length, 'ad')} name exactly your set.`,
          test: countLine('an ad is covered when every one of the 20 tools it names is in your set; ads that name none of them are left out'),
          takeaway: `${percent(unique, pool.length)}% of these ads name a mix of tools no other ad names, so a close match is normal and a perfect one is rare.${opens.length ? ` With your set, the next tool that opens the most ads is ${escapeHtml(opens[0][0])} (+${opens[0][1]}).` : ''}`,
          method: 'Each ad\'s tool set is the subset of 20 common tools it names anywhere in the text. "Covered" means the ad names no tool outside your set. "One tool away" means it names exactly one tool you don\'t have; the bars count those ads by the missing tool, so they show which single tool would open the most new ads. Naming a tool is not the same as requiring it, so read coverage as an upper bound.',
          tips: { seeker: 'Add the tool at the top of the bars before chasing a rarer one. And pitch your mix: most ads ask for a set nobody else asks for.', manager: 'Most candidates will cover part of your list, not all of it. Say which tools are must-haves and which can be learnt on the job.' },
          chart: { html: kpiRow([[`${percent(covered.length, pool.length)}%`, 'of ads covered'], [formatCount(covered.length), 'ads covered'], [formatCount(oneAway.length), 'ads one tool away'], [formatCount(exact.length), 'ads with exactly your set']])
            + subheading('The next tool to learn: ads it would add to your coverage') + (opens.length ? bars.html : note('No ads are one tool away from this set.')), table: bars.table },
        };
      },
    },
    {
      id: 'ai', tag: 'AI ask × who asks · use it, or build for it',
      question: 'Which ads ask for AI, and do they want you to use it or to build for it?',
      bridge: 'Start with how often ads ask for AI at all, and what they mean by it.',
      controls: [{ key: 'by', label: 'Split by', options: [['level', 'Level'], ['stack', 'Stack'], ['geo_macro', 'Region'], ['month', 'Month saved']], initial: 'stack' }],
      build(rows, settings) {
        const splitBy = key => (key === 'month' ? monthGroups(rows, 30) : groupBy(rows, key)), roles = DIMENSION.ai_role.order;
        const test = chiSquareAcross(splitBy(settings.by), ad => ad.ai_role, roles);
        const effects = ['level', 'stack', 'geo_macro'].map(key => { const result = chiSquareAcross(splitBy(key), ad => ad.ai_role, roles); return [key, result ? result.effect : 0]; }).sort((a, b) => b[1] - a[1]);
        const users = rows.filter(ad => ad.ai_role === 'ai_user').length, builders = rows.filter(ad => ad.ai_role === 'ai_enabler').length;
        const [strongest, ...rest] = effects;
        return {
          stat: `${percent(users + builders, rows.length)}% of ads ask for AI in some form: ${percent(users, rows.length)}% want you to use AI tools and ${percent(builders, rows.length)}% want you to get data ready for AI. Of level, stack and region, the ask varies most with ${lower(DIMENSION[strongest[0]].label)} (V=${strongest[1].toFixed(2)}, against ${joinList(rest.map(([key, effect]) => `${lower(DIMENSION[key].label)} ${effect.toFixed(2)}`))}).`,
          test: significanceLine(test),
          takeaway: `AI is common in these ads but uneven. Ads ask you to ${builders >= users ? 'build for AI more often than to use AI tools' : 'use AI tools more often than to build for AI'}, and the ask depends more on the ${lower(DIMENSION[strongest[0]].label)} than on anything else here.`,
          method: 'An ad counts as asking for AI when AI is part of the job, not company marketing or a note about the hiring process. "Uses AI tools" means the ad expects you to work with AI assistants, such as Copilot or Cursor. "Builds for AI" means the ad asks you to prepare data, metrics or pipelines that AI products or agents rely on. Months with fewer than 30 ads are left out of the month split. V compares how strongly each split goes with the AI ask.',
          tips: { seeker: 'A vague AI line tells you little. Ask which tool the team uses, and whether the job is using AI or building for it.', manager: 'Say which kind of AI ask you mean: using AI tools in the work, or preparing data for AI. Candidates read a vague line as boilerplate.' },
          chart: stackedBars(splitBy(settings.by), 'ai_role'),
        };
      },
    },
    {
      id: 'semantic', tag: 'AI ask × semantic layer · the same work under an older name?',
      question: 'Do ads that ask for AI also ask for a semantic layer?',
      bridge: 'A vague AI line is easy to write. A semantic layer is one concrete thing behind it: one place that defines each metric, so people and AI agents get the same answer.',
      controls: [{ key: 'level', label: 'Level', options: [['all', 'All'], ['mid', 'Mid'], ['senior', 'Senior']], initial: 'all' }],
      build(rows, settings) {
        const pool = settings.level === 'all' ? rows : rows.filter(ad => DERIVED.level(ad) === settings.level), groups = groupBy(pool, 'ai_role');
        const test = chiSquareAcross(groups, DERIVED.semantic, ['yes', 'no']);
        const namesIt = key => { const group = groups.find(item => item.key === key); return group ? [group.items.filter(ad => DERIVED.semantic(ad) === 'yes').length, group.items.length] : [0, 0]; };
        const builders = namesIt('ai_enabler'), users = namesIt('ai_user'), none = namesIt('none');
        return {
          stat: `${shareOf(builders)}% of ads that ask you to build for AI name a semantic layer, against ${shareOf(users)}% of ads that ask you to use AI tools and ${shareOf(none)}% of ads with no AI ask${settings.level === 'all' ? '' : ` (${settings.level} level only)`}.`,
          test: significanceLine(test),
          takeaway: shareOf(builders) > shareOf(none) && holds(test) ? 'Ads that ask for AI name a semantic layer more often, beyond chance. Some of the AI work is the old metrics work under a new name.' : 'Under this filter, ads that ask for AI do not name a semantic layer more often beyond chance.',
          method: 'A semantic layer is one place that defines each business metric, such as revenue or active users, so every dashboard and tool returns the same number. The match counts phrases such as "semantic layer" and "metrics layer". Power BI\'s "semantic model" is counted too, because ads use it for the same job. Picking a level rules out the idea that senior ads simply mention more of everything.',
          tips: { seeker: 'If an ad asks for AI, ask how the team defines its metrics. A good answer usually involves a semantic layer, and it is a skill you can show.', manager: 'If your AI plans rely on trusted metrics, say so and name the semantic layer. It is the concrete version of a vague AI line.' },
          chart: stackedBars(groups, 'semantic'),
        };
      },
    },
    {
      id: 'trend', tag: 'AI ask × month saved · is it growing?',
      question: 'Is the share of ads asking for AI rising month by month?',
      bridge: 'If ads trail the work, the AI ask should climb as they catch up. Here is how it moves month by month.',
      build(rows) {
        const months = monthGroups(rows, 30);
        const series = [{ name: 'Any AI ask', colour: COLOUR.accent, points: months.map(month => [month.items.filter(asksForAi).length, month.items.length]) },
          { name: 'Builds for AI', colour: COLOUR.violet, points: months.map(month => [month.items.filter(ad => ad.ai_role === 'ai_enabler').length, month.items.length]) }];
        const test = chiSquare(months.map(month => [month.items.filter(asksForAi).length, month.items.filter(ad => !asksForAi(ad)).length]));
        const first = series[0].points[0], last = series[0].points[series[0].points.length - 1];
        return {
          stat: months.length > 1 ? `In ${months[0].label}, ${shareOf(first)}% of ads asked for AI (n=${first[1]}). In ${months[months.length - 1].label}, ${shareOf(last)}% did (n=${last[1]}). The band on each point shows how far one month can move by chance.` : 'Too few months with 30 or more ads under this filter.',
          test: significanceLine(test, 'months differ'),
          takeaway: `${holds(test) ? 'The months differ beyond chance' : 'The months do not differ beyond chance'}. Ads are longer in some months than others, and longer ads mention more of everything, so read any rise with care.`,
          method: 'Each point is the share of that month\'s ads that ask for AI, with its 95% Wilson range. Months with fewer than 30 ads are left out. The test asks whether the months differ more than chance allows; it does not test a straight-line trend, and it does not hold ad length fixed.',
          tips: { seeker: 'Do not read a rising month as a rule. Ask each team what AI work it does today.', manager: 'Write the AI line for the work your team does now. Ads that copy the moment\'s wording date fast.' },
          chart: months.length > 1 ? levelLines(months.map(month => ({ label: month.short, total: month.items.length })), series) : { html: note('Too few months to draw.'), table: null },
        };
      },
    },
    {
      id: 'disclose', tag: 'Region × what the ad tells you', wide: true,
      question: 'What does an ad tell you, region by region?',
      bridge: 'Start with what ads tell a candidate at all, region by region.',
      build(rows) {
        const COLUMNS = [{ label: 'States the pay', test: statesPay }, { label: 'Says where you work', test: ad => ad.work_arrangement && ad.work_arrangement !== 'not_stated' },
          { label: 'Describes the interview', test: ad => ad.interview_stages != null }, { label: 'Names partner teams', test: ad => ad.collaboration_width > 0 },
          { label: 'Names a language requirement', test: ad => ad.language_gate_type && ad.language_gate_type !== 'none' }];
        const regions = regionGroups(rows, 10), groups = [{ label: 'All ads', items: rows }, ...regions];
        const grid = heatGrid(groups.map(group => ({ label: `${group.label} (${group.items.length})` })), COLUMNS, (i, j) => ({ count: groups[i].items.filter(COLUMNS[j].test).length, total: groups[i].items.length }));
        const test = chiSquare(regions.map(region => [region.items.filter(statesPay).length, region.items.filter(ad => !statesPay(ad)).length]));
        const told = COLUMNS.map(column => ({ label: lower(column.label), share: percent(rows.filter(column.test).length, rows.length) })).sort((a, b) => b.share - a.share);
        const payByRegion = regions.filter(region => region.items.length >= 30).map(region => [region.label, percent(region.items.filter(statesPay).length, region.items.length)]).sort((a, b) => b[1] - a[1]);
        const nyc = regions.find(region => region.key === 'nyc_metro'), nycPay = nyc && nyc.items.length >= 30 ? percent(nyc.items.filter(statesPay).length, nyc.items.length) : null;
        const lawLine = nycPay != null && nycPay > 2 * percent(rows.filter(statesPay).length, rows.length) ? ` Where the law asks for pay, ads give it: ${nycPay}% of NYC metro ads state a range.` : '';
        return {
          stat: `${joinList(told.map(item => `${item.share}% ${item.label}`))}.${payByRegion.length > 1 ? ` Among regions with at least 30 ads, pay is stated most in ${escapeHtml(payByRegion[0][0])} (${payByRegion[0][1]}%) and least in ${escapeHtml(payByRegion[payByRegion.length - 1][0])} (${payByRegion[payByRegion.length - 1][1]}%).` : ''}`,
          test: significanceLine(test, 'pay stated, by region'),
          takeaway: `An ad asks a lot and tells little. Ads most often ${told[0].label} and ${told[1].label}; few ${told[told.length - 1].label} or ${told[told.length - 2].label}.${lawLine}`,
          method: 'Each column counts ads that state the item at all, however briefly. Pay counts when the ad gives a figure or a range. Interview counts when the ad lists its stages. Partner teams counts when the ad names at least one team you would work with. Regions with fewer than 10 ads under the current filter are left out of the grid but stay in "All ads". The test asks whether the share stating pay differs between regions more than chance allows.',
          tips: { seeker: 'Ask early for what the ad leaves out: the pay, the interview steps and who you would report to. Silence is the norm, so asking is normal too.', manager: 'Say what the job is and what it pays. Where few ads do, stating it sets you apart; where the law requires it, leaving it out stands out the other way.' },
          chart: grid,
        };
      },
    },
    {
      id: 'arrangement', tag: 'Where you work × who is hiring',
      question: 'Remote, hybrid or office: what do ads say, and who says nothing?',
      bridge: 'Where you will work is one of the first things a candidate asks. Here is how often ads answer it, and how.',
      controls: [{ key: 'by', label: 'Split by', options: [['geo_macro', 'Region'], ['level', 'Level'], ['data_team_maturity', 'Team stage']], initial: 'geo_macro' }],
      build(rows, settings) {
        const groups = groupBy(rows, settings.by), dimension = DIMENSION.work_arrangement, test = chiSquareAcross(groups, ad => ad.work_arrangement, dimension.order);
        const answersGiven = dimension.order.map(value => [dimension.name[value], percent(rows.filter(ad => ad.work_arrangement === value).length, rows.length)]).sort((a, b) => b[1] - a[1]);
        const mostSilent = groups.map(group => [group.label, percent(group.items.filter(ad => ad.work_arrangement === 'not_stated').length, group.items.length)]).sort((a, b) => b[1] - a[1])[0];
        const remote = percent(rows.filter(ad => ad.work_arrangement === 'remote').length, rows.length);
        return {
          stat: `${joinList(answersGiven.map(([name, share]) => `${lower(name)} ${share}%`))}. Silence is highest among ${mostSilent ? `${escapeHtml(lower(mostSilent[0]))} ads (${mostSilent[1]}%)` : '–'}.`,
          test: significanceLine(test),
          takeaway: `The most common answer is ${lower(answersGiven[0][0])} (${answersGiven[0][1]}%), then ${lower(answersGiven[1][0])} (${answersGiven[1][1]}%). Fully remote is ${remote}% of ads.`,
          method: 'The arrangement is read from the ad text. "Not stated" means the ad gives no clue at all; an ad that names an office city but no policy also counts as not stated. The test is a χ² test across all four answers.',
          tips: { seeker: 'Do not read silence as "office by default". Ask directly, before the first interview.', manager: 'If you offer remote or flexible work, say so plainly with the days. Vague claims get ignored, and silence reads as office-only.' },
          chart: stackedBars(groups, 'work_arrangement'),
        };
      },
    },
    {
      id: 'language', tag: 'Region × language requirement',
      question: 'Which ads require a language other than English, and which languages?',
      bridge: 'One thing ads do state plainly is a language requirement, because it rules people out.',
      build(rows) {
        const regions = regionGroups(rows, 15), dimension = DIMENSION.language_gate_type;
        const test = chiSquareAcross(regions, ad => ad.language_gate_type || 'none', dimension.order);
        const required = rows.filter(ad => ad.language_gate_type === 'hard');
        const languages = largest(tally(required.flatMap(ad => ad.language_gate_languages || []), language => language)).slice(0, 8);
        const mostRequired = regions.map(region => [region.label, percent(region.items.filter(ad => ad.language_gate_type === 'hard').length, region.items.length)]).sort((a, b) => b[1] - a[1])[0];
        const split = stackedBars(regions, 'language_gate_type');
        const bars = rankedBars(languages.map(([language, count]) => ({ label: language, count, total: required.length })), { value: item => `${item.count}`, valueHead: 'Ads', width: item => 100 * item.count / languages[0][1] });
        return {
          stat: `${percent(required.length, rows.length)}% of ads require a language other than English, and ${percent(rows.filter(ad => ad.language_gate_type === 'soft').length, rows.length)}% name one as a plus.${languages.length ? ` The most required: ${languages.slice(0, 3).map(([language, count]) => `${escapeHtml(language)} (${count} ads)`).join(', ')}.` : ''}`,
          test: significanceLine(test),
          takeaway: test && mostRequired ? `Language requirements are a ${strengthWord(test.effect)} regional pattern${holds(test) ? '' : ' that could be chance here'}: they are most common in ${escapeHtml(mostRequired[0])}, where ${mostRequired[1]}% of ads require one. It is a yes-or-no dealbreaker, so check it first.` : 'It is a yes-or-no dealbreaker, so check it first.',
          method: '"Required" means the ad asks for fluency in a language other than English as a condition. "A plus" means it names the language as welcome but not required. Regions with fewer than 15 ads under the current filter are left out of the split. The language bars count required languages only.',
          tips: { seeker: 'Filter on the language before anything else. A required language is the one ask you cannot work around in an interview.', manager: 'If you need a language, say so in the first lines. If it is a plus, say that instead, or you will lose candidates who would have been fine.' },
          chart: { html: split.html + `<div class="sv-sub sv-gap">Languages required, number of ads</div>${bars.html}`, table: split.table },
        };
      },
    },
    {
      id: 'ladder', tag: 'Level × any ask · pick what to follow up the ladder', wide: true,
      question: 'What changes from one level to the next, and what stays the same?',
      bridge: 'The same silence covers moving up. Each ad describes one level, never the path. Read across the levels, and the path appears.',
      controls: [{ key: 'pick', label: 'Follow', multiple: true, limit: 4, options: METRICS.map(metric => [metric.key, metric.label]), initial: ['direction', 'mentor', 'sql'] }],
      build(rows, settings) {
        const levels = DIMENSION.level.order.map(level => ({ label: DIMENSION.level.name[level], items: rows.filter(ad => DERIVED.level(ad) === level) }));
        const palette = [COLOUR.accent, COLOUR.amber, COLOUR.green, COLOUR.violet];
        const picked = settings.pick.map(key => METRIC_BY_KEY[key]).filter(metric => metric && (!metric.theme || view.themeSets));
        const series = picked.map((metric, i) => ({ name: metric.label, colour: palette[i], points: levels.map(level => measure(level.items, metric)) }));
        const verdicts = series.map(line => {
          const test = chiSquare(line.points.map(([count, total]) => [count, total - count])), change = shareOf(line.points[line.points.length - 1]) - shareOf(line.points[0]);
          return { name: line.name, test, kind: !holds(test) || Math.abs(change) < 10 ? 'flat' : change > 0 ? 'climbs' : 'falls' };
        });
        const phrase = (kind, singular, several) => { const names = verdicts.filter(item => item.kind === kind).map(item => lower(item.name)); return names.length ? `${joinList(names)} ${names.length === 1 ? singular : several}` : null; };
        const parts = [phrase('climbs', 'climbs', 'climb'), phrase('falls', 'falls', 'fall'), phrase('flat', 'stays flat', 'stay flat')].filter(Boolean);
        return {
          stat: series.map(line => `${escapeHtml(line.name)}: ${shareOf(line.points[0])}% of junior ads, ${shareOf(line.points[line.points.length - 1])}% of lead ads`).join('. ') + '.',
          test: verdicts.map(item => significanceLine(item.test, escapeHtml(item.name))).join('<br>'),
          takeaway: parts.length ? `Of what you picked, ${parts.join('; ')} from junior to lead. Pick other asks to see which climb.` : 'Pick something to follow up the ladder.',
          method: 'Each line is the share of ads at each level that ask for the chosen thing, with its 95% range. Duty lines count only ads whose list of responsibilities was read. Each test asks whether the share differs across the four levels more than chance allows. A line counts as climbing or falling when it moves 10 points or more from junior to lead and the test holds. These are ads for outside hires, not a company\'s promotion rules, so read the climb as what employers ask a new person at each level.',
          tips: { seeker: 'Practise the next level\'s verb on the work you already do: own something, then define something, then lead it. The core skills will not set you apart.', manager: 'If you expect a senior hire to set direction or mentor, write it in the ad. Candidates read the verbs to judge the level, more than the title.' },
          chart: levelLines(levels.map(level => ({ label: level.label, total: level.items.length })), series),
        };
      },
    },
    {
      id: 'levelduties', tag: 'Level × duties · what each level adds', wide: true,
      question: 'Which kinds of work grow with seniority, and which shrink?',
      bridge: 'Seen duty by duty, here is what each level adds, and what it lets go.',
      build(rows) {
        if (!view.themeSets) return LOADING;
        const levels = DIMENSION.level.order.map(level => ({ label: DIMENSION.level.name[level], items: rows.filter(ad => DERIVED.level(ad) === level && hasDuties(ad)) }));
        const themes = THEMES.map(([theme, label]) => {
          const shares = levels.map(level => [level.items.filter(ad => listsTheme(ad, theme)).length, level.items.length]);
          return { label, shares, change: shareOf(shares[3]) - shareOf(shares[0]), test: chiSquare(shares.map(([count, total]) => [count, total - count])) };
        }).sort((a, b) => b.change - a.change);
        const adjusted = holm(themes.map(theme => (theme.test ? theme.test.p : null))), held = adjusted.filter(pValue => pValue != null && pValue < 0.05).length;
        const grid = heatGrid(themes.map(theme => ({ label: theme.label })), levels.map(level => ({ label: `${level.label} (${level.items.length})` })), (i, j) => ({ count: themes[i].shares[j][0], total: themes[i].shares[j][1] }), {
          extra: { label: 'Junior → lead', value: i => `<span class="${adjusted[i] != null && adjusted[i] < 0.05 ? 'sv-held' : ''}">${signed(themes[i].change)}</span>` },
          note: 'Each cell is the share of ads at that level that list the kind of duty. The last column is the change from junior to lead and above, in percentage points; bold changes hold across the four levels after a Holm correction.' });
        const rising = themes.slice(0, 3), falling = themes[themes.length - 1];
        return {
          stat: `From junior to lead, ${joinList(rising.map(theme => `${lower(theme.label)} ${signed(theme.change)}`))} points.${falling.change < 0 ? ` ${falling.label} moves ${falling.change} points.` : ''}`,
          test: tallyLine(held, THEMES.length, 'kinds of duty differ across levels beyond chance (χ² per kind, Holm-corrected)'),
          takeaway: `Seniority adds ${joinList(rising.map(theme => lower(theme.label)))}. ${falling.change < 0 ? `It lets go of little: the biggest fall is ${lower(falling.label)}, ${falling.change} points.` : 'Nothing falls from junior to lead.'}`,
          method: `Each kind of duty is tested across the four levels with a χ² test, then the ${THEMES.length} tests are corrected together (Holm). Rows are sorted by the change from junior to lead and above. With ${levels[0].items.length} junior ads and ${levels[3].items.length} lead ads, the end columns carry the widest ranges.`,
          tips: { seeker: 'The top rows are the work the next level adds. Take some of it on now, and you will have the examples a senior interview asks for.', manager: 'If your senior role keeps the junior work and adds none of the top rows, it may be a mid-level role with a senior title. Candidates will notice.' },
          chart: grid,
        };
      },
    },
    {
      id: 'levels', tag: 'Level × where the ads are · the shape of the market', wide: true,
      question: 'How many ads are there at each level, and where are the junior ones?',
      bridge: 'Start with how many doors there are at all.',
      controls: [{ key: 'by', label: 'Split by', options: [['geo_macro', 'Region'], ['stack', 'Stack'], ['data_team_maturity', 'Team stage']], initial: 'geo_macro' }],
      build(rows, settings) {
        const isJunior = ad => DERIVED.level(ad) === 'junior', groups = groupBy(rows, settings.by);
        const test = chiSquareAcross(groups, ad => (isJunior(ad) ? 'junior' : 'other'), ['junior', 'other']);
        const juniors = rows.filter(isJunior).length, seniorPlus = rows.filter(ad => ['senior', 'lead'].includes(DERIVED.level(ad))).length, ratio = juniors ? Math.round(seniorPlus / juniors) : null;
        const highest = groups.map(group => [group.label, percent(group.items.filter(isJunior).length, group.items.length), group.items.length]).sort((a, b) => b[1] - a[1])[0];
        const withAll = Object.assign([{ label: 'All ads', items: rows }, ...groups], { label: groups.label });
        return {
          stat: `${ratio ? `There is 1 junior ad for every ${ratio} at senior level or above (${juniors} against ${formatCount(seniorPlus)}).` : 'No junior ads under this filter.'} Junior ads are ${percent(juniors, rows.length)}% of all ads.${highest ? ` The junior share is highest among ${escapeHtml(lower(highest[0]))} ads (${highest[1]}% of ${highest[2]}).` : ''}`,
          test: significanceLine(test, 'junior share differs'),
          takeaway: ratio ? `For every junior ad there are ${ratio} at senior level or above. Today's juniors are the seniors teams will need in five years, and these ads open few doors for them.` : 'No junior ads under this filter.',
          method: 'Level is read from each ad: junior, mid, senior, and lead and above (lead, staff and manager together). The ads come from one person\'s job search, which leans senior, so read the ratio as this snapshot\'s, not the market\'s. The test asks whether the junior share differs between the groups more than chance allows.',
          tips: { seeker: 'The doors are fewer, not shut. Look where the junior share is highest, and apply to the mid-level ads that ask for little experience.', manager: 'Opening a junior role is the cheapest way to have seniors in five years. If you do, say who will teach the new hire.' },
          chart: stackedBars(withAll, 'level', group => `junior ${percent(group.items.filter(isJunior).length, group.items.length)}%`),
        };
      },
    },
    {
      id: 'juniorask', tag: 'Junior ads × mid-level ads · the first step', wide: true,
      question: 'What do junior ads ask for, compared with mid-level ads?',
      bridge: 'At the door itself: what junior ads ask for, set against the mid-level ads one step up.',
      build(rows) {
        const juniors = rows.filter(ad => DERIVED.level(ad) === 'junior'), mids = rows.filter(ad => DERIVED.level(ad) === 'mid');
        const items = METRICS.filter(metric => !metric.theme || view.themeSets).map(metric => ({ label: metric.label, first: measure(juniors, metric), second: measure(mids, metric) }))
          .sort((a, b) => (shareOf(b.first) - shareOf(b.second)) - (shareOf(a.first) - shareOf(a.second)));
        const chart = dumbbell(items, { name: `Junior (${juniors.length})`, colour: COLOUR.green }, { name: `Mid (${mids.length})`, colour: COLOUR.teal });
        const most = items[0], least = items[items.length - 1];
        return {
          stat: `${juniors.length} junior ads against ${formatCount(mids.length)} mid-level ads. Junior ads ask for ${lower(most.label)} more often (${shareOf(most.first)}% against ${shareOf(most.second)}%), and for ${lower(least.label)} less often (${shareOf(least.first)}% against ${shareOf(least.second)}%).`,
          test: tallyLine(chart.held, items.length, 'asks differ beyond chance between junior and mid-level ads (two-proportion tests, Holm-corrected)'),
          takeaway: `${chart.held ? `${plural(chart.held, 'ask')} of ${items.length} differ beyond chance; the rest are close.` : 'No ask differs beyond chance.'} The first step asks for much the same as the next one, so a junior title does not mean a lighter ask.`,
          method: `Each row compares the share of junior ads and of mid-level ads that ask for something. Duty rows count only ads whose list of responsibilities was read. With ${juniors.length} junior ads, a gap needs to be large to hold after the Holm correction, so a thin gap here is not evidence of no difference.`,
          tips: { seeker: 'If you have the core skills, junior and mid ads are closer than their titles suggest. Apply up a level when the asks fit.', manager: 'Check that your junior ad asks for what a junior can bring. If it reads like a mid-level ad, you will get mid-level applicants or none.' },
          chart,
        };
      },
    },
    {
      id: 'juniorlist', tag: 'Every junior ad in this snapshot', wide: true,
      question: 'What does each junior ad actually say?',
      bridge: 'And the doors themselves, one by one.',
      controls: [{ key: 'only', label: 'Show', multiple: true, options: [['english', 'No other language required'], ['ai', 'Asks for AI'], ['remote', 'Remote or hybrid'], ['pay', 'States the pay']], initial: [] },
        { key: 'search', label: 'Search', search: true, initial: '' }, { key: 'shown', hidden: true, initial: 12 }],
      build(rows, settings) {
        const FILTERS = { english: ad => ad.language_gate_type !== 'hard', ai: asksForAi, remote: ad => ['remote', 'hybrid'].includes(ad.work_arrangement), pay: statesPay };
        const juniors = rows.filter(ad => DERIVED.level(ad) === 'junior'), term = settings.search.trim().toLowerCase();
        const matching = juniors.filter(ad => settings.only.every(key => FILTERS[key](ad)))
          .filter(ad => !term || [ad.company, ad.role, ad.job_location, ...toolsNamed(ad)].join(' ').toLowerCase().includes(term))
          .sort((a, b) => String(b.jd_id).localeCompare(String(a.jd_id)));
        const language = ad => (ad.language_gate_type === 'hard' ? `${(ad.language_gate_languages || []).join(', ')} required` : ad.language_gate_type === 'soft' ? 'another language a plus' : 'English only');
        const card = ad => `<article class="sv-job"><header><b>${escapeHtml(ad.company)}</b><span>${escapeHtml(REGION_NAME[ad.geo_region] || ad.geo_region || '')}</span></header>`
          + `<a href="${escapeHtml(ad.source_url || '#')}" target="_blank" rel="noopener">${escapeHtml(ad.role)}<span class="sr-only"> (opens in a new tab)</span></a><p>${escapeHtml(ad.job_location || '')}</p>`
          + `<div class="sv-chips">${toolsNamed(ad).slice(0, 7).map(tool => `<span>${escapeHtml(tool)}</span>`).join('')}</div>`
          + `<dl><dt>Language</dt><dd>${escapeHtml(language(ad))}</dd><dt>Work</dt><dd>${escapeHtml(DIMENSION.work_arrangement.name[ad.work_arrangement] || '–')}</dd>`
          + `<dt>AI</dt><dd>${escapeHtml(DIMENSION.ai_role.name[ad.ai_role] || '–')}</dd><dt>Pay</dt><dd>${statesPay(ad) ? `${formatCount(ad.salary_min)}–${formatCount(ad.salary_max)} ${escapeHtml(ad.salary_currency || '')}` : 'not stated'}</dd></dl></article>`;
        const remaining = matching.length - settings.shown;
        return {
          stat: `${juniors.length} junior ads. ${percent(juniors.filter(ad => ad.language_gate_type === 'hard').length, juniors.length)}% require a language other than English, ${percent(juniors.filter(asksForAi).length, juniors.length)}% ask for AI, ${percent(juniors.filter(FILTERS.remote).length, juniors.length)}% offer remote or hybrid work and ${percent(juniors.filter(statesPay).length, juniors.length)}% state the pay.`,
          test: countLine(`${matching.length} of ${juniors.length} match the filters; showing ${Math.min(matching.length, settings.shown)}, newest first`),
          takeaway: 'Every junior ad in the snapshot, read one by one. Filter to the ones you could apply to today, and open the original to read it in full.',
          method: 'These are the ads read as junior level. The tools are the ones the ad names; the language, work and AI lines are what the ad says, read by a language model. Search matches the employer, title, place and tools.',
          tips: { seeker: 'Apply to the doors that exist, and lead with a project you built. Ads that state the pay and name no other language are the quickest to judge.', manager: 'Read the junior ads around yours. If they promise more flexibility or the pay, candidates will compare yours with them.' },
          chart: { html: `<div class="sv-jobs">${matching.slice(0, settings.shown).map(card).join('') || note('No junior ads match these filters.')}</div>`
            + (remaining > 0 ? `<button type="button" class="sv-opt sv-more" data-act="more" data-v="12">Show ${Math.min(12, remaining)} more of ${remaining}</button>` : ''), table: null },
        };
      },
      act(settings, action, value) { if (action === 'more') settings.shown += Number(value); },
    },
    {
      id: 'record', tag: 'Snapshot one · what these ads are',
      question: 'Which ads sit behind these numbers, and when were they saved?',
      controls: [{ key: 'by', label: 'Group', options: [['week', 'By week'], ['month', 'By month']], initial: 'month' }, { key: 'split', label: 'Split', options: [['all', 'All ads'], ['level', 'By level']], initial: 'level' }],
      build(rows, settings) {
        const dated = rows.filter(ad => /^\d{4}-\d{2}-\d{2}/.test(ad.jd_id)), dates = dated.map(ad => ad.jd_id.slice(0, 10)).sort();
        const employers = new Set(rows.map(ad => ad.company)).size, mostFromOne = Math.max(0, ...Object.values(tally(rows, ad => ad.company)));
        const english = rows.filter(ad => ad.jd_language === 'en').length, regions = new Set(rows.map(ad => ad.geo_region)).size, languages = new Set(rows.map(ad => ad.jd_language)).size;
        const asDay = text => { const date = new Date(text + 'T00:00:00Z'); return `${date.getUTCDate()} ${MONTH_NAME[date.getUTCMonth()]} ${date.getUTCFullYear()}`; };
        const mondayOf = text => { const date = new Date(text + 'T00:00:00Z'); date.setUTCDate(date.getUTCDate() - ((date.getUTCDay() + 6) % 7)); return date.toISOString().slice(0, 10); };
        const bins = settings.by === 'month' ? monthGroups(rows) : [...new Set(dates.map(mondayOf))].sort().map(monday => ({
          label: `Week of ${asDay(monday)}`, short: `${Number(monday.slice(8))} ${MONTH_NAME[Number(monday.slice(5, 7)) - 1].slice(0, 3)}`, items: dated.filter(ad => mondayOf(ad.jd_id.slice(0, 10)) === monday) }));
        const busiest = bins.slice().sort((a, b) => b.items.length - a.items.length)[0], columns = timeColumns(bins, settings.split === 'level' ? 'level' : null);
        return {
          stat: `${formatCount(rows.length)} ads from ${plural(employers, 'employer')} in ${plural(regions, 'region')}, saved between ${dates.length ? asDay(dates[0]) : '–'} and ${dates.length ? asDay(dates[dates.length - 1]) : '–'}. ${percent(english, rows.length)}% are written in English${languages > 1 ? `; the rest use ${plural(languages - 1, 'other language')}` : ''}. The busiest ${settings.by} was ${busiest ? escapeHtml(busiest.label) : '–'}, with ${busiest ? busiest.items.length : 0} ads.`,
          test: countLine(`no employer has more than ${mostFromOne} ads, so one big hirer cannot tilt a share on its own`),
          takeaway: 'These ads come from one person\'s job search, mostly in English. Read every share as this snapshot\'s habit, not the whole market\'s size.',
          method: 'Each ad was saved from LinkedIn or a company\'s own careers page, then read by a language model against a fixed set of questions: level, team stage, who sets direction, the tools named, the AI ask, what the ad states about pay and work arrangement, and the duties in its list of responsibilities. The search followed one person\'s interests, so senior roles and English-language ads are over-represented, and some regions appear only once a search reached them. Later snapshots can be compared with this one, which is why the dates matter.',
          tips: { seeker: 'Read a share as "what ads I am likely to meet", not as how many jobs exist. Where a region or level has few ads, one posting can swing its numbers.', manager: 'Use these shares to see what candidates are used to reading in ads like yours. They describe habits in ads, not the size of the market.' },
          chart: { html: kpiRow([[formatCount(rows.length), 'ads'], [formatCount(employers), 'employers'], [regions, 'regions'], [languages, 'ad languages'], [`${percent(english, rows.length)}%`, 'written in English']]) + columns.html, table: columns.table },
        };
      },
    },
  ];
  const CARD_BY_ID = Object.fromEntries(CARDS.map(card => [card.id, card]));

  /* ── the four answers: one live line per chapter, so the summary always agrees with the cards below it ── */
  function answers(rows) {
    const atLevel = level => rows.filter(ad => DERIVED.level(ad) === level);
    const juniors = atLevel('junior'), leads = atLevel('lead'), seniorPlus = rows.filter(ad => ['senior', 'lead'].includes(DERIVED.level(ad))).length;
    const titles = Object.keys(tally(rows, ad => cleanTitle(ad.role))).length;
    const users = rows.filter(ad => ad.ai_role === 'ai_user').length, builders = rows.filter(ad => ad.ai_role === 'ai_enabler').length;
    const semanticShare = ads => percent(ads.filter(ad => isTrue(ad.has_semantic_layer)).length, ads.length);
    const sqlByLevel = DIMENSION.level.order.map(level => shareOf(measure(atLevel(level), METRIC_BY_KEY.sql)));
    const withDuties = rows.filter(hasDuties).length, core = view.themeSets ? themeShares(rows).sort((a, b) => b.count - a.count).slice(0, 4) : null;
    const direction = METRIC_BY_KEY.direction, mentor = METRIC_BY_KEY.mentor;
    return [
      { question: 'What is an analytics engineer?',
        answer: `The ads don't agree where the job stops: ${formatCount(titles)} titles remain after cleaning, and one title covers many jobs.${core ? ` They do share a core: four kinds of duty appear in ${percent(core[3].count, withDuties)}% to ${percent(core[0].count, withDuties)}% of ads.` : ''}` },
      { question: 'Do ads keep up with the work?',
        answer: `${percent(users + builders, rows.length)}% ask for AI: ${percent(builders, rows.length)}% to get data ready for it, ${percent(users, rows.length)}% to use AI tools. Much of it is older work under a new name: ads that build for AI name a semantic layer ${semanticShare(rows.filter(ad => ad.ai_role === 'ai_enabler'))}% of the time, against ${semanticShare(rows.filter(ad => !asksForAi(ad)))}% of ads with no AI ask.` },
      { question: 'What do ads leave unsaid?',
        answer: `Most of what a candidate needs: ${percent(rows.filter(statesPay).length, rows.length)}% state the pay and ${percent(rows.filter(ad => ad.interview_stages != null).length, rows.length)}% describe the interview. The path up is unwritten too: setting direction climbs from ${shareOf(measure(juniors, direction))}% of junior ads to ${shareOf(measure(leads, direction))}% of lead ads, while SQL stays between ${Math.min(...sqlByLevel)}% and ${Math.max(...sqlByLevel)}% at every level.` },
      { question: 'Who will be senior next?',
        answer: `${juniors.length ? `For every junior ad there are ${Math.round(seniorPlus / juniors.length)} at senior level or above.` : 'There are no junior ads under this filter.'}${view.themeSets ? ` Mentoring climbs from ${shareOf(measure(juniors, mentor))}% of junior ads to ${shareOf(measure(leads, mentor))}% of lead ads. Who will they mentor?` : ''}` },
    ];
  }

  /* ── rendering ── */
  function controlsHtml(card, settings) {
    return (card.controls || []).filter(control => !control.hidden).map(control => {
      if (control.search) return `<label class="sv-ctl"><span class="sv-ctl-label">${escapeHtml(control.label)}</span><input type="search" class="sv-search" data-ctl="${control.key}" value="${escapeHtml(settings[control.key])}" placeholder="Employer, title, place or tool"></label>`;
      const pressed = value => (control.multiple ? settings[control.key].includes(value) : settings[control.key] === value);
      return `<div class="sv-ctl" role="group" aria-label="${escapeHtml(control.label)}"><span class="sv-ctl-label">${escapeHtml(control.label)}</span>`
        + control.options.map(([value, label]) => `<button type="button" class="sv-opt" data-ctl="${control.key}" data-v="${escapeHtml(value)}" aria-pressed="${pressed(value)}">${escapeHtml(label)}</button>`).join('') + '</div>';
    }).join('');
  }
  function numbersHtml(table) {
    if (!table) return '';
    const head = table.head.map(cell => `<th>${escapeHtml(cell)}</th>`).join('');
    const body = table.rows.map(row => `<tr>${row.map((cell, i) => (i ? `<td>${escapeHtml(cell)}</td>` : `<th scope="row">${escapeHtml(cell)}</th>`)).join('')}</tr>`).join('');
    return `<details class="rel-details" data-keep="numbers"><summary>Show the numbers</summary><div class="rel-details-body"><div class="sv-tablewrap"><table class="sv-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div></div></details>`;
  }
  const settingsFor = card => view.settings[card.id]
    || (view.settings[card.id] = Object.fromEntries((card.controls || []).map(control => [control.key, Array.isArray(control.initial) ? control.initial.slice() : control.initial])));
  function renderCard(step, card) {
    const panel = step.querySelector('.rel-panel'), settings = settingsFor(card), reader = view.mode() === 'manager' ? 'manager' : 'seeker';
    const opened = new Set([...panel.querySelectorAll('details[data-keep]')].filter(details => details.open).map(details => details.dataset.keep));
    const focused = panel.contains(document.activeElement) ? { control: document.activeElement.dataset.ctl, value: document.activeElement.dataset.v, caret: document.activeElement.selectionStart } : null;
    const out = card.build(view.rows(), settings);
    const controls = (card.controls || []).some(control => !control.hidden) ? `<div class="sv-controls">${controlsHtml(card, settings)}</div>` : '';
    panel.innerHTML = panelContent({ tag: escapeHtml(card.tag), question: escapeHtml(card.question), stat: out.stat, test: out.test, takeaway: out.takeaway, method: out.method,
      reader, tip: out.tips && out.tips[reader], wide: card.wide, viz: controls + out.chart.html + numbersHtml(out.chart.table) });
    panel.querySelectorAll('details[data-keep]').forEach(details => { if (opened.has(details.dataset.keep)) details.open = true; });
    if (focused && focused.control) {
      const again = [...panel.querySelectorAll(`[data-ctl="${focused.control}"]`)].find(element => element.tagName === 'INPUT' || element.dataset.v === focused.value);
      if (again) { again.focus(); if (again.tagName === 'INPUT' && focused.caret != null) again.setSelectionRange(focused.caret, focused.caret); }
    }
  }
  function bindCard(step, card) {
    const panel = step.querySelector('.rel-panel'), redraw = () => renderCard(step, card);
    const act = target => { const element = target.closest('[data-act]'); if (element && card.act) { card.act(settingsFor(card), element.dataset.act, element.dataset.v); redraw(); } };
    panel.addEventListener('click', event => {
      const button = event.target.closest('button[data-ctl]');
      if (!button) { act(event.target); return; }
      const control = card.controls.find(item => item.key === button.dataset.ctl), settings = settingsFor(card), value = button.dataset.v;
      if (control.multiple) {
        const list = settings[control.key], at = list.indexOf(value);
        if (at >= 0) list.splice(at, 1); else { list.push(value); if (control.limit && list.length > control.limit) list.shift(); }
      } else settings[control.key] = value;
      const shown = card.controls.find(item => item.key === 'shown');
      if (shown) settings.shown = shown.initial;   // a new filter starts the list again from the top
      redraw();
    });
    panel.addEventListener('keydown', event => { if ((event.key === 'Enter' || event.key === ' ') && event.target.closest('[data-act]') && !event.target.closest('button')) { event.preventDefault(); act(event.target); } });
    panel.addEventListener('input', event => { const input = event.target.closest('input[data-ctl]'); if (input) { settingsFor(card)[input.dataset.ctl] = input.value; redraw(); } });
  }
  function renderSlot(slot) {
    slot.dataset.cards.split(/\s+/).filter(id => CARD_BY_ID[id]).forEach(id => {
      const card = CARD_BY_ID[id];
      let step = slot.querySelector(`:scope > [data-step="${id}"]`);
      if (!step) {
        step = Object.assign(document.createElement('div'), { className: 'sv-step' });
        step.dataset.step = id;
        step.innerHTML = `${card.bridge ? `<p class="sv-bridge">${card.bridge}</p>` : ''}<div class="rel-panel" id="sv-${id}"></div>`;
        slot.append(step);
        bindCard(step, card);
      }
      renderCard(step, card);
    });
  }
  function renderAnswers(slot) {
    const links = (slot.dataset.links || '').split(/\s+/);
    slot.innerHTML = `<ol class="sv-answers">${answers(view.rows()).map((item, i) => `<li><a href="${escapeHtml(links[i] || '#')}">`
      + `<b>${escapeHtml(item.question)}</b><span>${item.answer}</span><em>Read chapter ${i + 1} →</em></a></li>`).join('')}</ol>`;
  }

  /* ── page API ── */
  window.JDViz = {
    init(options) {
      view.rows = options.rows;
      if (options.mode) view.mode = options.mode;
      view.ready = true;
      const useThemes = classification => {
        if (classification && classification.jd_theme_sets) { view.themeSets = classification.jd_theme_sets; view.bulletsByTheme = classification.bullets_by_theme || {}; }
        JDViz.refresh();
      };
      if (options.themes) useThemes(options.themes);
      else if (options.themesUrl) { JDViz.refresh(); fetch(options.themesUrl).then(response => response.json()).then(useThemes).catch(() => {}); }
      else JDViz.refresh();
    },
    refresh() {
      if (!view.ready) return;
      document.querySelectorAll('[data-answers]').forEach(renderAnswers);
      document.querySelectorAll('[data-cards]').forEach(renderSlot);
    },
  };
})();
