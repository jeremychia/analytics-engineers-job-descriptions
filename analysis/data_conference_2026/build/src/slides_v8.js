/* The senior-room talk, revised (jd_deck_v8.html, script in talk_v8_for_the_people.md): v7 with the similarity measured against a data-engineer baseline, the semantic layer without Power BI, and the junior door as the main point. Runs after slides_v2.js. */
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
    { id: 'alike', name: 'No consensus', kick: 'One · What is an analytics engineer?', title: 'Same title. <em>No closer than a data-engineer ad.</em>', build: buildAlike,
      foot: `Similarity = TF-IDF cosine similarity of each ad’s responsibility bullets, ${D.sim.duties_only.pop.toLocaleString('en-US')} English ads with at least ${D.sim.duties_only.min_words} words of them. Job read from the title, combined titles such as “Analytics & Data Engineer” left out: ${D.sim.duties_only.ads['analytics engineer']} analytics-engineer ads, ${D.sim.duties_only.ads['data engineer']} data-engineer ads.` },
    { id: 'job', name: 'The core', kick: 'One · What do the ads agree on?', title: 'The core is shared. <em>The rest is local.</em>',
      build: st => buildJob(st, { core: true, groups: true, noun: 'job descriptions', captions: [[['about three in four: '], ['model the data, test it, report on it, work with people', 1]],
        [[`SQL in ${Math.round(100 * D.job.tools.core[0][1] / D.corpus_n)}%. `, 1], ['Then it splits: the top warehouse and the top BI tool are each in under half.']]] }),
      foot: 'Duties read from each ad’s list of responsibilities, grouped into 16 themes. Tools named anywhere in the ad.' },
    { id: 'lag', name: 'Lagging', kick: 'Two · Do ads see what is coming?', title: 'Ads look back. <em>The work has moved on.</em>', build: st => buildLag(st, { link: true, story: false, vague: false }),
      foot: 'Counts are phrase matches across all ads; “semantic model”, Power BI’s name for a dataset, is left out. FastAPI story, said only: its creator’s post of 11 July 2020.' },
    { ...by.missing, name: 'Asymmetry', kick: 'Three · What do ads leave unsaid?', title: 'The ad asks. <em>It rarely tells.</em>', build: buildDisclose,
      foot: `All ${A} ads. Read from each ad, checked by hand on 60. Europe = the seven European regions together.` },
    { id: 'rung', name: 'Moving up', kick: 'Three · What does it take to move up?', title: 'SQL stays the same. <em>You stop supporting and start leading.</em>', build: buildVerbs,
      foot: 'English job descriptions with a level. Each line is a phrase match in the duties and requirements. The rises in lead, roadmap, define standards and mentor hold from mid to senior (Holm p < 0.001); support falls from junior to mid. SQL does not change.' },
    { id: 'future', name: 'Juniors', kick: 'Four · Who will be senior next?', title: 'Few juniors today. <em>Few seniors tomorrow.</em>', build: buildFuture,
      foot: 'Level read by an AI model. Collected during one job search, so they lean senior. South Korea: people by five-year age band, 2025, UN World Population Prospects 2024; under-20s in coral.' },
    { id: 'close', name: 'Close', kick: 'Where that leaves us', title: 'No one knows exactly. <em>The job description is still ours to write.</em>', build: st => buildClose(st, { noun: 'job description' }), foot: '' },
    { id: 'askme', name: 'Ask me', kick: 'For questions', title: 'These findings held up <em>when tested.</em>', build: st => buildAskMe(st, { layer: true, connect: true }),
      foot: 'Each finding is beyond chance (p < 0.001). The benefits finding is corrected for testing 28 types (q < 0.01).' });
}
