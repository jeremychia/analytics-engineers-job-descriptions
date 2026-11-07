/* The senior-room talk, a new angle (jd_deck_v7.html, brief in talk_v7_for_the_people.md): job ads as a record of what we expect from each other, and five things this snapshot shows. Runs after slides_v2.js. */
{
  const by = Object.fromEntries(SLIDES.map(S => [S.id, S])), A = D.corpus_n.toLocaleString('en-US');
  document.head.append(Object.assign(document.createElement('style'), { textContent: '.vtag { display: none }' }));   // the talk never explains the verdict tags, so the words on each slide carry how sure it is
  // the room sees only the visual; titles, footers and navigation are for rehearsal, shown with the n key
  const bare = ['.slide>.kick', '.slide>h1', '.slide>.foot', '#tabs', '#navbtns', '#stepdots', '#shortmode'].map(x => `body:not(.notes) ${x}`).join(',');
  document.head.append(Object.assign(document.createElement('style'), { textContent: `${bare}{display:none!important} body:not(.notes) .slide{padding:6vh 6vw}` }));
  addEventListener('keydown', e => { if (e.key === 'n') { document.body.classList.toggle('notes'); fitStage($$('section.slide')[DECK.cur].querySelector('.stage')); } });
  // with the titles gone, grow a column of text and pictures to fill the stage, not only shrink it; charts drawn in SVG already fill it
  fitStage = stage => {
    if (stage.fit) stage.fit.disconnect();
    const col = stage.firstElementChild; if (!col || col instanceof SVGElement) return;
    const fit = () => { col.style.transform = ''; const up = document.body.classList.contains('notes') ? 1 : 1.5;
      const k = Math.min(up, .94 * stage.clientHeight / col.offsetHeight, .96 * stage.clientWidth / col.offsetWidth); col.style.transform = Math.abs(k - 1) > .01 ? `scale(${k})` : ''; };
    stage.fit = new ResizeObserver(fit); stage.fit.observe(col); stage.fit.observe(stage); fit();
  };
  SLIDES.splice(0, SLIDES.length,
    { id: 'record', name: 'The record', kick: 'Why read job ads?', title: 'Job ads capture <em>what we expect from each other.</em>', build: buildRecord,
      foot: `${A} ads for analytics engineers and close variants, April to November 2026, from one person’s searches.` },
    { ...by.barcode, name: 'No consensus', kick: 'One · What is an analytics engineer?', title: `${D.titles.n_titles} titles. <em>Almost no two ads alike.</em>`, build: st => buildBarcode(st, true),
      foot: `${D.titles.n.toLocaleString('en-US')} ads titled analytics engineer. Alike = shared wording in duties and requirements, ${D.sim.pop.toLocaleString('en-US')} English ads; the square shows ${D.sim.n}.` },
    { id: 'lag', name: 'Lagging', kick: 'Two · Do ads see what is coming?', title: 'Ads look back. <em>The work has moved on.</em>', build: buildLag,
      foot: 'FastAPI story: its creator’s posts of 11 July 2020 and, on Bluesky, 6 July 2026, verbatim. Counts are phrase matches across all ads; the AI ask is read by an AI model.' },
    { ...by.missing, name: 'Asymmetry', kick: 'Three · What do ads leave unsaid?', title: 'The ad asks. <em>It rarely tells.</em>', build: buildDisclose,
      foot: `All ${A} ads. Read from each ad, checked by hand on 60. Europe = the seven European regions together.` },
    { ...by.pipeline || { id: 'doors' }, id: 'doors', name: 'Juniors', kick: 'Four · Is there a way in?', title: `1 junior ad. <em>${Math.round((D.seniority_n.senior + D.seniority_n.lead + D.seniority_n.staff + D.seniority_n.manager) / D.seniority_n.junior)} senior or above.</em>`, build: buildDoors,
      foot: 'Level read by an AI model. Collected during one job search, so they lean senior. Mentoring: 50 senior ads read by hand.' },
    { ...by.juniors, name: 'What we ask', kick: 'Four · What do we ask of juniors?', title: 'Junior ads ask for a degree <em>more than any other level.</em>', build: st => pick(buildJuniors(st, 'years', { degreeWords: true }), [7]),
      foot: 'Junior ads levelled by an AI model. A degree counts with or without “or equivalent” (tested, p < 0.001). Other routes read by hand.' },
    { id: 'rung', name: 'Moving up', kick: 'Five · How do you move up?', title: 'Same skills at every level. <em>The business is unwritten.</em>',
      build: st => buildRung(st, { voices: false, line: ['The higher you go, the closer to the business. ', 'Two in three ads don’t say so.'] }),
      foot: 'English ads with a level. The business = a phrase match, a first pass.' },
    { id: 'close', name: 'Close', kick: 'Where that leaves us', title: 'No one knows exactly. <em>The ad is still ours to write.</em>', build: buildClose, foot: '' },
    { id: 'askme', name: 'Ask me', kick: 'For questions', title: 'These findings held up <em>when tested.</em>', build: buildAskMe,
      foot: 'Each finding is beyond chance (p < 0.001). The benefits finding is corrected for testing 28 types (q < 0.01).' });
}
