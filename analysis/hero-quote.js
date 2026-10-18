// Sentences copied verbatim from classified postings. Each one shows how a verb sets the scope of a role.
const HERO_QUOTES = [
  { mark: 'Set the long-term technical direction', rest: ' for analytics engineering across the Revenue, Purchase, and Orders domains.',
    company: 'Vinted', role: 'Area Lead Analytics Engineer', scope: 'strategic' },
  { mark: 'Own data products end to end', rest: ' — from requirements through modeling, implementation, validation, and production operation',
    company: 'Remitly', role: 'Analytics Engineer II', scope: 'strategic' },
  { mark: 'Define', rest: ' governance, security, modeling, and deployment standards',
    company: 'Quickbase', role: 'Sr Analytics Engineer', scope: 'strategic' },
  { mark: 'Assist in', rest: ' building and maintaining datasets, transformation logic, and curated reporting tables',
    company: 'SHI International Corp.', role: 'Associate Analytics Engineer - Data & Visualization', scope: 'execution' },
  { mark: 'Assist senior members', rest: ' of the data team with ad hoc analysis and broader data initiatives.',
    company: 'The Phoenix Group®', role: 'Business Intelligence Engineer', scope: 'execution' },
  { mark: 'Support', rest: ' platform initiatives including migrations, model refactoring, governance improvements, and technical debt reduction.',
    company: 'Compare the Market', role: 'Analytics Engineer', scope: 'execution' },
];
const HERO_VERDICT = {
  strategic: 'The verb says you decide. This role sets direction.',
  execution: 'The verb says you deliver. Someone else owns the plan.',
};

function renderHeroQuote(root) {
  let i = Math.floor(Math.random() * HERO_QUOTES.length);
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  function show() {
    const q = HERO_QUOTES[i];
    root.innerHTML = `
      <figure class="hero-quote" aria-live="polite">
        <blockquote><p><mark>${esc(q.mark)}</mark>${esc(q.rest)}</p></blockquote>
        <figcaption>${esc(q.role)}, ${esc(q.company)}</figcaption>
        <p class="hero-quote-verdict">${HERO_VERDICT[q.scope]}</p>
        <button type="button" class="hero-quote-next">Show another sentence</button>
      </figure>`;
    root.querySelector('.hero-quote-next').addEventListener('click', () => {
      i = (i + 1) % HERO_QUOTES.length;
      show();
      root.querySelector('.hero-quote-next').focus();
    });
  }
  show();
}
