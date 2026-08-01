---
name: classify-jd
description: Fetches a job posting URL and produces a structured Layer B classification record (JSON) and a verbatim jd_archive.md. No resume adaptation — classification only. JD data capture and behavioural analysis tool.
allowed-tools: WebFetch Read Write Bash
argument-hint: <job-posting-url>
---

`$ARGUMENTS` is one or more job posting URLs (whitespace- or newline-separated). Produce a structured classification for each JD. No resume adaptation, no cover letter, no tailoring — classification only.

**Batch mode**: process each URL one at a time, completing Steps 1–5 fully before fetching the next. Do not hold multiple JD texts in memory simultaneously — context is finite. If raw-HTML extraction (Step 1) fails to produce the actual JD text — empty response, 403, paywall, bot block, no embedded data payload found for an SPA, or suspiciously short extracted text under ~200 words — stop and ask the user to paste the JD text, then proceed from Step 2 using the pasted text. Never infer or hallucinate JD content from the URL slug or company name alone, and never fall back to a WebFetch summary as a substitute for verbatim text. After all URLs are processed, print a batch summary (see Step 6).

Work through the steps **in order** for each URL.

---

## Step 1 — Fetch and extract the JD

**Never use WebFetch as the source of the archived JD text.** WebFetch pipes page content through a small summarizing model before returning it — it always paraphrases and condenses, even on a full 200-word+ response with no visible red flags. A fetch that "looks fine" (right length, right sections, no error) can still be a rewritten summary, not the posting's actual wording. This was confirmed across a dozen postings (beapplied.com, soapbox.vc, LinkedIn, Greenhouse-embed, Personio) — WebFetch returned plausible, complete-looking prose that was paraphrased throughout, with no visible signal of the problem. Two recurring failure patterns to watch for specifically: (1) **fabrication by omission/rollup** — real, specific numbers (a salary range, a vacation-day count, an office-days split) get dropped, or several distinct numeric details get collapsed into a single invented-sounding figure that isn't actually stated anywhere in the source (e.g. a real "20 statutory + 5 additional + 2 extra + 3.5 vitality" structure flattened into a fabricated "30 vacation days"); (2) **silent translation** — a non-English source gets rendered as English prose with no indication the original language was different (see language-mismatch note below). If you ever find an existing archive record with a trailing note admitting "this is a condensed/paraphrased extraction" — that is a confirmed-bad record; don't just note it, fix it via the raw-extraction path below.

WebFetch may be used only to *locate* a JD (confirm a URL resolves, sanity-check title/company before committing to a scrape) — never as the text that goes into `jd_archive.md` / `jd_text`.

**Default extraction path — raw HTML, every URL, every ATS:**

```bash
curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36" "$URL" -o /tmp/jd_raw.html
```

Then extract the verbatim text from the raw HTML:
- **Server-rendered pages** (plain HTML with the JD text present in the markup): strip tags directly from the relevant `<div>`/`<section>` with a script, or read the file and pull the text between the recognizable heading and footer markers. Do not paraphrase while extracting — copy the text nodes exactly, just with tags stripped and whitespace collapsed. **Never grab the JD div with a naive `raw.find('</div>')`** — the content div almost always contains nested `<div>`s (formatting wrappers, spans-as-divs, etc.) and the first `</div>` found closes one of those, truncating the real content early. Depth-count instead: walk forward from the opening tag, incrementing on every `<div` and decrementing on every `</div>`, and take the text up to the point depth returns to 0. This single bug caused truncated/incomplete extractions on Bluecode, Ebury, Colliers, SmartRecruiters (Canva/Jetstar), Similarweb, and Sony during one audit pass — always use the depth-counted version.
- **Client-rendered / SPA pages** (React, Vue, etc. — visible page text isn't in the raw HTML, only a JS bundle and maybe a JSON blob): search the raw HTML for an embedded state/data payload (`window.__appData`, `__NEXT_DATA__`, `__INITIAL_STATE__`, a `<script type="application/json">` blob, or similar) and pull the description field out of that JSON. This is the only reliable path for SPA-rendered ATS platforms — the JD text is almost always present verbatim inside one of these payloads even when the rendered DOM (and thus WebFetch) shows nothing useful.

**Ashby postings (jobs.ashbyhq.com)** are the known SPA case — the payload is `window.__appData`, extract with:

```bash
curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36" "$URL" -o /tmp/ashby.html
python3 -c "
import re, json
html = open('/tmp/ashby.html').read()
m = re.search(r'window\.__appData\s*=\s*(\{.*?\});', html, re.DOTALL)
data = json.loads(m.group(1))
def find_desc(obj):
    if isinstance(obj, dict):
        if 'descriptionHtml' in obj:
            return obj
        for v in obj.values():
            r = find_desc(v)
            if r: return r
    elif isinstance(obj, list):
        for v in obj:
            r = find_desc(v)
            if r: return r
    return None
posting = find_desc(data)
text = re.sub(r'<[^>]+>', '\n', posting['descriptionHtml'])
text = re.sub(r'\n\s*\n+', '\n\n', text).strip()
print('TITLE:', posting.get('title'))
print('LOCATION:', posting.get('locationName') or posting.get('location'))
print('---BODY---')
print(text)
"
```

The `window.__appData` payload contains a `.posting` object (or nested under it) with `descriptionHtml`, `title`, `locationName`/`location`, `employmentType`, and `compensationTierSummary` fields — strip HTML tags from `descriptionHtml` to get the plain JD text. Only fall back to asking the user for pasted text if this extraction also fails (e.g. `window.__appData` not present, or JSON parse fails).

**Other known SPA/embed cases — use the platform's public API directly, don't scrape the DOM:**

- **Workday** (`*.myworkdayjobs.com`): raw HTML is an empty client-rendered shell (`<div id="root">`, no title) — curl-on-HTML will find nothing and must not be mistaken for a fetch failure requiring user-pasted text. Hit the Workday CXS API instead:
  ```bash
  curl -s -A "Mozilla/5.0 ..." "https://{tenant}.wd{N}.myworkdayjobs.com/wday/cxs/{tenant}/{site}/job/{location}/{title}_{reqId}" -o /tmp/wd.json
  ```
  Parse `jobPostingInfo.jobDescription` (HTML string) from the JSON, strip tags. The `{location}/{title}_{reqId}` path segment matches the tail of the original job URL — reuse it as-is when building the API URL.
- **Lever** (`jobs.lever.co`): also client-rendered (Next.js) — raw HTML has no JD text. Use the public API:
  ```bash
  curl -s "https://api.lever.co/v0/postings/{company}/{posting-id}?mode=json"
  ```
  Use `descriptionPlain`/`descriptionBodyPlain`/`lists[]`/`additionalPlain` fields directly — this is Lever's own canonical plain-text, no tag-stripping needed.
- **Greenhouse embedded as a widget on a custom domain** (e.g. `careers.{company}.com` loading `boards.greenhouse.io/embed/job_board/js?for=...`): the custom-domain page is just a JS wrapper with no JD text in its own HTML. Extract the `gh_jid` from the URL query string and hit the Greenhouse public API directly:
  ```bash
  curl -s "https://boards-api.greenhouse.io/v1/boards/{company}/jobs/{gh_jid}"
  ```
  The `content` field is the true JD HTML — strip tags. (Direct `job-boards.greenhouse.io/{company}/jobs/{id}` URLs are usually server-rendered already and don't need this — check raw HTML first before assuming the API is needed.)
- **LinkedIn** (`linkedin.com/jobs/view/...`): despite being a major platform, the public (unauthenticated) job-view page is reliably server-rendered — plain curl + browser UA returns the full JD text directly in `<div class="description__text description__text--rich">...<section class="show-more-less-html">`. No login wall was hit across dozens of postings checked. Try plain curl first; only ask the user to paste text if that div is empty or a login redirect occurs.
- **SmartRecruiters** (`jobs.smartrecruiters.com`): server-rendered with the JD text directly in HTML inside `<div itemprop="description">` (schema.org microdata, not JSON-LD). Depth-count matching `<div>` tags to find the true closing tag — a naive `raw.find('</div>')` will truncate at the first nested close.
- **Nuxt/Nuxt Content sites** (raw HTML shows a Nuxt app shell with `__NUXT_DATA__`): the shell often only prerenders a shallow snippet; the full content lives in a separate `_payload.json` fetched by the client. Look for `data-src="/path/_payload.json?{hash}"` in the raw HTML and curl that URL directly — it returns a flat deduplicated array where each JSON value is either a literal or an integer index into the same array (Nuxt's "devalue"-style serialization). For Nuxt Content specifically, the article body is a minimark AST (`[tag, attrs, ...childIndices]` tuples) requiring a small recursive renderer — walk the tree resolving integer refs back into the array, mapping `p`→paragraph break, `h1`-`h4`→heading, `li`→bullet, `ul`/`ol`→pass-through. Companion snippets (e.g. a separate "benefits" block) may live as sibling top-level entries in the same payload — check the page's other named routes/snippets in the array for additional sections.
- **Next.js sites** (raw HTML shows `__NEXT_DATA__` script tag, e.g. `lego.com/.../careers/job/...`): unlike Nuxt, Next.js usually inlines the full page-props JSON directly in the initial HTML — no separate payload fetch needed. `grep` for `<script id="__NEXT_DATA__" type="application/json">`, parse it, and walk `props.pageProps` for a `description` (or similarly named) field containing the JD HTML string. Much simpler than the Nuxt case since there's no ref-resolution needed — it's a plain nested JSON object, not a flat deduplicated array.
- **A job ID from an older archive may 404 if the listing was reposted.** Company ATS boards sometimes take down and recreate a posting for the same role under a new job ID (observed on Greenhouse: same team, same responsibilities, new numeric ID). Before concluding a posting is gone for good, search the company's current careers page or the ATS's board-listing endpoint (e.g. `boards-api.greenhouse.io/v1/boards/{company}/jobs` and grep the job list for a title match) for a live repost — only fall back to "posting removed, cannot re-verify" once that search comes up empty too.
- **Oracle Cloud HCM recruiting** (`*.fa.ca2.oraclecloud.com/hcmUI/CandidateExperience/...`): the direct page URL is client-rendered and mostly empty. Use the sibling REST API instead — extract the numeric requisition ID from the URL path and call `https://{tenant}.fa.ca2.oraclecloud.com/hcmRestApi/resources/latest/recruitingCEJobRequisitionDetails/{id}`; the JSON's `ExternalDescriptionStr` field holds the full HTML job description, strip tags as usual.
- **Gem ATS** (`jobs.gem.com/...`) and other fully client-rendered boards with no embedded JSON and an auth-gated API (redirects to `/login` on direct query): there is no curl-only path here. Flag as "could not verify via curl" rather than guessing, and say so explicitly in the batch summary — don't silently fall back to WebFetch's paraphrase as a substitute.
- **Cloudflare-protected pages** (curl returns a JS challenge/interstitial instead of content, common on some corporate career sites e.g. `careers.intuitive.com`): plain curl cannot get past the challenge. This is a genuine "could not verify by the tools available" case, not a signal to fall back to WebFetch — note the gate explicitly and move on; don't fabricate or silently accept a WebFetch paraphrase as if it were verified.
- **BambooHR careers pages** (`{company}.bamboohr.com/careers/{id}`): raw HTML is a fully client-rendered app shell (`window.BambooHR`, `window.__resManifest`) with zero JD text and no embedded JSON payload. Don't stop there — BambooHR exposes a public detail API at `https://{company}.bamboohr.com/careers/{id}/detail` (note: **not** the page URL itself, append `/detail`) that returns JSON directly, no auth needed: `curl -s "https://{company}.bamboohr.com/careers/{id}/detail"`. Parse `result.jobOpening.description` (HTML string) and strip tags; `jobOpeningName`, `location`, `departmentLabel`, `employmentStatusLabel` give the header fields.
- **Accenture** (`www.accenture.com/{locale}/careers/jobdetails?id=...`): looks like a client-rendered SPA at first glance (initial raw HTML near the job block is just site-nav chrome and a `dataLayer`/`jobMetadata` script with only structured fields — title, location, org unit — no body text). It is actually server-rendered (Adobe AEM) — the JD body is further down the same HTML, inside `<div id="jobdetail-{hash}">` → `<div class="rad-job-details__wrapper">`, well past the nav shell. Don't stop at the first few KB — depth-count from `<div class="jobdetail">` (or the `id="jobdetail-*"` div) to find the true closing tag and extract the full section; the "Descrição"/"Job Summary"/"Requisitos"/"Responsibilities" text is verbatim in there. Only fall back to asking for pasted text if that div is genuinely absent or empty after depth-counted extraction — don't give up after just checking for `__NEXT_DATA__`/`__appData__`-style payloads, which Accenture doesn't use.

**User preference (2026-08-01): try harder before asking for pasted text.** When a URL doesn't match a known pattern in this skill, don't stop at the first failed heuristic (no obvious JSON payload, nav-shell-only text near the top of the page). Keep digging in the raw HTML — search for job-detail-specific container IDs/classes, depth-count divs further into the document, check for `dataLayer`/metadata scripts that hint at where the real content block lives — before concluding extraction failed. Only ask the user to paste JD text after a genuine multi-angle attempt comes up empty, and when you do ask, include the direct link so they can copy it easily.

**Language mismatch is a silent failure mode, not just a content one.** If a URL's query string or the raw HTML's `<html lang="...">` / visible body text indicates a non-English source (e.g. `?language=de`, German/French/Dutch prose in the DOM), the archived `jd_text` must preserve that original language verbatim — do not translate it into English and present it as the archive. A translated-and-summarized archive is doubly wrong: wrong language AND wrong (paraphrased) content. If you need to work in English for classification purposes, do the classification reasoning in English but keep `jd_text` in the source language.

- **Company name** (slug: lowercase, hyphens, no punctuation)
- **Job title** (slug form)
- **Location** (as stated in JD header)
- **Salary** (min, max, currency, period — or null). **Extract only, never infer or estimate.** `salary_min`/`salary_max` must come from a number that literally appears in the archived `jd_text` — grep the exact figures back against the text you're about to write before finalizing them. If the JD states only a ceiling ("up to $X"), a single figure, or no number at all, leave `salary_min`/`salary_max`/`salary_currency`/`salary_period` as `null` — do not invent a floor, do not average a market rate, do not backfill from a similar-looking posting for the same company (confirmed failure mode: two near-duplicate postings for the same company got their salary fields cross-contaminated — one had real salary text, the other didn't, and the classifier copied the numbers across anyway). This was audited on 2026-08-01: 4 of 73 salary-bearing records in the corpus had no salary text anywhere in their own archive — fabricated, not extracted. If you can't point to the literal sentence, the field is `null`.
- **salary_period**: `annual` | `monthly` | `daily` | `hourly` — extract from the JD's own wording (e.g. "per year"/"annually"/"p.a." → `annual`; "per month"/"gross monthly"/German "pro Monat"/Dutch "per maand"/French "par mois" → `monthly`; "per day"/"day rate" → `daily`; "per hour"/"hourly" → `hourly`). **Do not infer period from the magnitude of the numbers** — a monthly figure in one market (e.g. Dutch/German roles quoting €3,000–€6,500/month) can look superficially similar to an annual figure in another (e.g. a junior role quoting $30,000–$50,000/year); the only reliable signal is the JD's own period wording. If the JD gives a bare number with no period stated at all (rare — most state it), leave `salary_period` null rather than guessing from scale.
- **Date** (today's date, YYYY-MM-DD)
- **Role type**: `analytics_engineering_bi` | `data_engineering` | `team_lead` | `other`
- **Seniority**: `junior` | `mid` | `senior` | `staff` | `lead` | `manager`

Base name: `YYYY-MM-DD_company-slug_job-title-slug`

---

## Step 1.5 — Duplicate check (mandatory, before writing anything)

The corpus has been re-scraped the same live posting under different dates, different tracking query strings, different job-board mirrors, and even different company labels (agency vs. hiring company) — a company+role-slug check misses most of that. Run:

```bash
python3 scripts/check_duplicate_jd.py "{source_url}"
```

- **Exit 0, "NO MATCH"** — proceed to Step 2.
- **Exit 1, "DUPLICATE OF: {jd_id}"** — do not write a new record. Skip this URL, note it in the batch summary as `{url} — duplicate of {jd_id}`, and move to the next URL. If the existing record's archive looks thinner than what you just fetched (e.g. a truncated/condensed scrape vs. a full one), say so in the summary and let the user decide whether to replace it manually — don't overwrite automatically.

This check is URL-based, not perfect — it won't catch a genuinely re-posted listing with a brand-new URL for what is otherwise the same role. If something about the JD text feels like a near-duplicate of one you *just* classified in this batch (same company, same responsibilities, different URL), flag it in the summary rather than silently proceeding — the classification will just come out as another near-identical record.

---

## Step 2 — Layer B classification

Assign values to all seven dimensions from JD language alone — not sector assumptions.

### velocity_vs_rigour
`rigour` | `mixed` | `velocity`

- **rigour**: responsibilities emphasise correctness, quality, governance, testing, compliance, reliability. Signal phrases: "data quality", "testing", "CI/CD", "data contracts", "observability", "compliance", "meticulous", "assertion", "audit", "governance", "reliable", "accuracy".
- **velocity**: responsibilities emphasise speed, shipping, iteration as primary value. Signal phrases: "fast-paced", "move fast", "ship quickly", "MVP", "high velocity", "scrappy", "rapid delivery".
- **mixed**: at least two distinct velocity phrases alongside rigour signals. One "fast-paced" in a rigour-dominated JD → `rigour`.
- Tie-breaker: rigour signals ≥2× velocity → `rigour`. Parity → `mixed`. Velocity ≥2× → `velocity`.

Quote the single most decisive phrase in evidence.

### domain_risk
`high` | `moderate` | `low`

- **high**: errors affect financial reporting, regulatory compliance, or public-facing products at scale. Default-high sectors: fintech, banking, insurance, regulated healthcare. Override signals: "financial reporting", "compliance", "audit", "regulatory", "P&L", "revenue attribution", "mission-critical".
- **moderate**: errors affect business decisions without regulatory/financial consequence. Most e-commerce, SaaS, marketplace, media.
- **low**: limited, recoverable consequences. Education, internal tooling, non-revenue analytics.
- Tie-breaker: sector implies high but JD language is generic → `moderate`. Explicit financial/compliance/regulatory language → `high`.

### collaboration_width
Integer count of distinctly named partner teams/functions.

**Counts**: named functions (Finance, Product, Marketing, Data Science, Engineering, Operations, Legal, Customer Success, Sales, BI team, Data Platform team); named role cohorts ("analysts", "data scientists", "engineers" when a distinct group); named external parties ("clients", "customers" only when explicit collaboration partners).

**Does not count**: "various stakeholders", "the business", "cross-functional teams", "key stakeholders", "colleagues", "non-technical partners"; the role holder's own team.

List each named team verbatim in evidence, semicolon-separated.

### data_team_maturity
`early` | `mid` | `mature`

- **early**: primary mission is to establish the data function; infrastructure does not yet exist. Signals: "first data hire", "build from zero", "greenfield", "wear many hats", "you will define", "establish the foundation".
- **mid**: data function exists and is growing. Signals: named tools in responsibilities (not just requirements), multiple data roles implied, "scale existing", "improve and extend", sub-teams forming.
- **mature**: established, specialised, operating at scale. Signals: multiple named data sub-teams with distinct charters, team size 20+ implied, "join an established team", governance tooling deployed at scale.
- Tie-breaker: tools in requirements only → not a maturity signal. Tools in responsibilities ("maintain our dbt models") → push toward mid/mature.

### jd_authorship
`hiring_manager` | `mixed` | `recruiter`

Focus on the **responsibilities section only**.

- **hiring_manager**: named tools with precise application context, scale/volume numbers, specific methodology names. Reader learns what the job actually involves.
- **recruiter**: generic boilerplate ("collaborate with stakeholders", "drive data quality", "work cross-functionally"). Could apply to any data role.
- **mixed**: some technically precise bullets, some generic. Common in larger companies.
- Tie-breaker: "Could I understand what this person does on a Tuesday morning?" Yes → `hiring_manager`. Mostly specific with a few generic additions → `hiring_manager`, not `mixed`.

### stakeholder_orientation
`commercial` | `product` | `internal_data` | `finance` | `mixed`

- **commercial**: GTM, revenue, sales, customer success, marketing, partnerships. Phrases: "revenue operations", "GTM", "customer success", "pipeline", "win rate", "churn".
- **product**: product, engineering, growth, experimentation. Phrases: "product analytics", "A/B test", "funnel", "feature adoption", "user behaviour", "growth team".
- **internal_data**: data function itself — engineers, analysts, platform consumers. Phrases: "data platform", "self-serve analytics", "data consumers", "modelling layer".
- **finance**: FP&A, controllership, audit, executive reporting. Phrases: "financial reporting", "FP&A", "P&L", "board reporting", "controllership", "audit".
- **mixed**: two or more with genuinely equal weight. Cross-functional framing alone is not enough — assess where responsibilities place the emphasis.

### autonomy_level
`strategic` | `execution` | `mixed`

- **strategic**: role sets direction, defines priorities. Verbs: "define", "establish", "own", "shape", "lead", "drive", "architect". Phrases: "you will define", "shift from reactive to proactive", "set the strategy", "build the roadmap".
- **execution**: role receives scoped work and delivers it. Verbs: "support", "assist", "deliver", "help", "contribute to". Phrases: "you will support the team", "deliver against priorities".
- **mixed**: strategic ownership of a technical domain AND execution in service of a business team.
- Tie-breaker: strategic verbs only in a narrow technical sub-problem while overall framing is support-oriented → `execution`.

### ai_role
`none` | `ai_user` | `ai_enabler`

The question is what AI skill, if any, the role expects the *candidate* to demonstrate. Whether the company builds AI products is irrelevant.

- **none**: no AI skill expected of the candidate. Includes JDs where the company builds AI products but the AE does standard modelling work, and stale JDs with no AI mention. Vague phrases ("AI-first mindset", "interest in AI") → `none`.
- **ai_user**: the candidate is expected to use AI coding tools to accelerate their own work. The AI is the candidate's tool. Signal phrases: "AI-assisted coding", "proven usage of AI tools", "GitHub Copilot", "Claude Code", "Cursor", "coding agents in a disciplined way".
- **ai_enabler**: the candidate is expected to build data infrastructure that AI systems consume or run on. The AI is downstream of the candidate's output. Signal phrases: "AI-ready data foundations", "data for AI/ML pipelines", "text-to-SQL", "semantic modelling for AI", "AI data agents", "GenAI applications" in responsibilities (not company description).
- Tie-breaker: if both signals present → `ai_enabler`. Company description mentions AI but responsibilities do not → `none`.

Quote the single phrase that most clearly placed the classification.

### testing_framing
`responsibility` | `tool_listed` | `absent`

- **responsibility**: testing, data contracts, observability, or data quality frameworks are framed as something the candidate *owns or defines*, using action verbs. Signal patterns: "own the quality", "you will define testing standards", "data contracts" as a named responsibility, "ensure data reliability", "implement data quality frameworks". The candidate is accountable for the practice, not just familiar with the tool.
- **tool_listed**: testing tools or practices appear in requirements or tech stack without ownership framing. Presence of Great Expectations, Soda, or "dbt tests" in a skill list without an ownership verb → `tool_listed`.
- **absent**: no testing or data quality signal anywhere in the JD.
- Tie-breaker: "experience with dbt testing" in a requirements list → `tool_listed`. "Own data quality through testing" in responsibilities → `responsibility`.

### work_arrangement
`remote` | `hybrid` | `onsite` | `not_stated`

- **remote**: JD states the role is fully/100% remote, remote-first, or "work from anywhere/home" with no required office days. Signal phrases: "fully remote", "100% remote", "remote-first", "work from home", "telecommute".
- **hybrid**: JD specifies a mix of office and remote days, or uses the word "hybrid" (with or without a day count), or offers remote as an option alongside an office base. Signal phrases: "hybrid", "X days in the office", "X days onsite / Y days remote", "remote option available" when paired with an office location.
- **onsite**: JD states the role requires full-time office presence with no remote allowance. Signal phrases: "on-site", "onsite required", explicit absence of remote/hybrid language paired with a single physical office location and no flexibility mentioned.
- **not_stated**: no work-location-model language anywhere in the JD (location may still be given as a city/country with no hybrid/remote/onsite qualifier).
- Tie-breaker: "hybrid" and a specific remote day count both present → `hybrid` (day count is evidence, not a separate class). A location string like "Berlin, Germany" alone with no qualifier → `not_stated`, not `onsite`.

Quote the verbatim phrase (from the location line or benefits/work-model section) that drove the classification. If `not_stated`, use the literal string `"Not stated in JD."`.

### loss_aversion_framing
`none` | `moderate` | `high`

- **none**: JD framed in delivery and capability terms with no risk register. Typical of early-stage and velocity-oriented roles.
- **moderate**: operational reliability is a concern but secondary to delivery. Fear is pipeline outages or data failures, not compliance or stakeholder trust. Signal phrases: "first to respond to incidents", "SLOs", "production reliability", "reduce bus factor", "pipeline stability".
- **high**: risk, compliance, or stakeholder trust framing dominates. Fear is bad data reaching decision-makers or regulatory exposure. Signal phrases: "regulatory", "compliance", "audit", "prevent bad data reaching stakeholders", "data accuracy has direct business impact", "data contracts" as a risk-control measure, "trustworthiness" as a primary role framing, repeated quality/reliability language throughout.
- Tie-breaker: one mention of compliance in a delivery-dominated JD → `moderate`. Compliance or trust language in the first responsibility or role summary → `high`.

---

## Step 3 — Tool and stack extraction

Set `true` if mentioned anywhere in JD (required or preferred), `false` if not.

`has_dbt`, `has_dbt_cloud`, `has_spark`, `has_python`, `has_sql`, `has_airflow`, `has_dagster`, `has_prefect`, `has_snowflake`, `has_databricks`, `has_bigquery`, `has_redshift`, `has_duckdb`, `has_fabric_synapse`, `has_postgres`, `has_fivetran`, `has_airbyte`, `has_glue`, `has_kafka`, `has_terraform`, `has_looker`, `has_tableau`, `has_power_bi`, `has_metabase`, `has_great_expectations`, `has_soda`

`has_dbt_cloud` is distinct from `has_dbt` — set `true` only if "dbt Cloud" is named specifically (not just "dbt"). `has_fabric_synapse` covers Microsoft Fabric or Azure Synapse. `has_postgres` covers Postgres/PostgreSQL. `has_glue` covers AWS Glue.

**Known limitation, deliberately not fixed by the fields below:** the `has_*` flags collapse required and preferred/nice-to-have into a single boolean, and are a closed 26-item vocabulary with no catch-all for tools outside it (Trino, ClickHouse, Mode, Hex, Sigma, etc. are silently dropped). Both are consumed as strict booleans in `scripts/regenerate_report.py`, `analysis/responsibility_taxonomy.py`'s correlation engine, and client-side JS in `analysis/full-analysis.html` (`String(d.has_dbt).toLowerCase() === 'true'` and similar) — do not change the type or meaning of an existing `has_*` field, and do not rename or remove one, or that arithmetic silently breaks across ~395 existing records with no error. `required_tools`/`preferred_tools` below are additive and exist alongside `has_*`, not instead of it.

Also populate (additive, does not replace `has_*`):
- **required_tools**: array of tool names (from the `has_*` vocabulary above, e.g. `"dbt"`, `"Python"`, `"Snowflake"` — strip the `has_` prefix, keep normal capitalization) named in a requirements/qualifications context with hard language ("required", "must have", "X+ years of experience with", listed under "Requirements"/"Must have" headers with no hedging). Empty list if the JD doesn't distinguish required from preferred at all (e.g. a single flat skills list with no qualifying language) — don't force a required/preferred split where the JD doesn't make one.
- **preferred_tools**: array of tool names named with soft/hedged language ("nice to have", "a plus", "bonus points for", "preferred", "ideally", listed under "Nice to have"/"Bonus"/"Preferred" headers). Empty list if none.
- A tool can appear in at most one of `required_tools` / `preferred_tools` per JD — if a JD both requires and separately praises deeper expertise in the same tool, use the stronger (required) framing only. A tool mentioned only in a generic "tech stack" list with no required/preferred framing anywhere in the JD goes into neither array (it's still captured by the corresponding `has_*` flag).

Also extract:
- **urgency**: `urgent` if JD validity ≤30 days, "immediately", "ASAP", "critical hire", or re-post signal. Otherwise `standard`.
- **greenfield_vs_fix**: `greenfield` | `fix_scale` | `mixed` — dominant verb signal across infrastructure tasks.
- **language_gate_type**: `none` | `soft` | `hard` (`hard` = "required"/"fluent"/"C1/C2"/"must speak"; `soft` = "plus"/"nice to have"/"advantage")
- **language_gate_languages**: list of non-English languages named (empty list if none)
- **interview_stages**: integer if stated, null if not
- **ats_platform**: match URL in order — `greenhouse` (greenhouse.io), `lever` (lever.co), `workday` (myworkdayjobs.com), `ashby` (ashbyhq.com), `smartrecruiters` (smartrecruiters.com), `icims` (icims.com), `jobvite` (jobvite.com), `linkedin` (linkedin.com/jobs), `welcometothejungle` (welcometothejungle.com), `workable` (workable.com), `personio` (personio.de / personio.com), `teamtailor` (teamtailor.com), `jobleads` (jobleads.com), `recruiterflow` (recruiterflow.com), else `unknown`
- **ats_job_id**: platform-specific job ID from URL (greenhouse: trailing numeric; lever/ashby: UUID; workday: requisition ref after `/job/`; linkedin: numeric; others: most specific path segment or null)

---

## Step 4 — Write output files

Produce a single JSON object and pipe it to `write_jd.py`. The script writes both output files (`jd_archive.md`, `{base-name}.json`) in one shot. `jd_archive.md` is prefixed with a `**URL:** {source_url}` line for traceability back to the original posting.

**Important: When user provides pasted JD text**, store the FULL VERBATIM text in jd_archive.md — do NOT rewrite, summarize, or hallucinate. If JD text was pasted by user or appears in conversation (not fetched), copy it exactly as provided into jd_archive.md after the URL line, preserving original formatting and language. This is a historical record and must be faithful to source.

```bash
python3 scripts/write_jd.py <<'EOF'
{
  "jd_id": "{base-name}",
  "jd_text": "{full verbatim JD text}",
  "source_url": "{URL}",
  "company": "{Company name as in JD}",
  "role": "{Job title as in JD}",
  "job_location": "{location}",
  "seniority": "{value}",
  "role_type": "{value}",
  "salary_min": {int or null — must be a figure literally present in jd_text, never inferred or estimated},
  "salary_max": {int or null — same rule},
  "salary_currency": "{EUR|GBP|USD|SGD|AUD|JPY|HKD|INR|VND|null}",
  "salary_period": "{annual|monthly|daily|hourly|null — from the JD's own wording, never inferred from number magnitude}",
  "jd_authorship": "{value}",
  "stakeholder_orientation": "{value}",
  "autonomy_level": "{value}",
  "ai_role": "{none|ai_user|ai_enabler}",
  "testing_framing": "{responsibility|tool_listed|absent}",
  "loss_aversion_framing": "{none|moderate|high}",
  "greenfield_vs_fix": "{value}",
  "velocity_vs_rigour": "{value}",
  "domain_risk": "{value}",
  "collaboration_width": {int},
  "data_team_maturity": "{value}",
  "urgency": "{value}",
  "work_arrangement": "{remote|hybrid|onsite|not_stated}",
  "language_gate_type": "{value}",
  "language_gate_languages": [],
  "interview_stages": {int or null},
  "ats_platform": "{value}",
  "ats_job_id": "{string or null}",
  "has_dbt": true,
  "has_dbt_cloud": false,
  "has_spark": false,
  "has_python": true,
  "has_sql": true,
  "has_airflow": false,
  "has_dagster": false,
  "has_prefect": false,
  "has_snowflake": false,
  "has_databricks": false,
  "has_bigquery": false,
  "has_redshift": false,
  "has_duckdb": false,
  "has_fabric_synapse": false,
  "has_postgres": false,
  "has_fivetran": false,
  "has_airbyte": false,
  "has_glue": false,
  "has_kafka": false,
  "has_terraform": false,
  "has_looker": false,
  "has_tableau": false,
  "has_power_bi": false,
  "has_metabase": false,
  "has_great_expectations": false,
  "has_soda": false,
  "required_tools": [],
  "preferred_tools": [],
  "evidence": {
    "velocity_vs_rigour": "{verbatim quote driving the classification}",
    "velocity_vs_rigour_explanation": "{one sentence explaining the classification, quoting the decisive phrase}",
    "domain_risk": "{verbatim quote driving the classification}",
    "domain_risk_explanation": "{one sentence explaining the classification, quoting the decisive phrase}",
    "collaboration_width": "{semicolon-separated named teams verbatim from JD}",
    "data_team_maturity": "{verbatim quote driving the classification}",
    "data_team_maturity_explanation": "{one sentence explaining the classification, quoting the decisive phrase}",
    "jd_authorship": "{verbatim quote from responsibilities section}",
    "jd_authorship_explanation": "{one sentence explaining the classification, quoting the decisive phrase}",
    "stakeholder_orientation": "{verbatim quote naming primary audience}",
    "stakeholder_orientation_explanation": "{one sentence naming the primary audience, quoting the decisive phrase}",
    "autonomy_level": "{verbatim verb phrase driving the classification}",
    "autonomy_level_explanation": "{one sentence explaining the classification, quoting the decisive verb phrase}",
    "ai_role": "{verbatim phrase that placed the classification — or 'No AI skill signal.' if none}",
    "ai_role_explanation": "{one sentence: what the candidate is expected to do with AI, or why none}",
    "testing_framing": "{verbatim phrase showing ownership/tool/absence of testing practice}",
    "testing_framing_explanation": "{one sentence explaining responsibility vs tool_listed vs absent}",
    "loss_aversion_framing": "{verbatim phrase anchoring the risk register — or 'No loss aversion framing.' if none}",
    "loss_aversion_framing_explanation": "{one sentence explaining the level and what fear it reflects}",
    "greenfield_vs_fix": "{verbatim quote driving the classification}",
    "greenfield_vs_fix_explanation": "{one sentence}",
    "language_gate": "{verbatim language requirement or 'Not stated in JD'}",
    "urgency": "{verbatim urgency signal — use exact string 'No urgency signals present.' if none}",
    "work_arrangement": "{verbatim phrase driving the classification — use exact string 'Not stated in JD.' if none}",
    "loss_aversion": "{risk-reduction framing quote with context sentence, or 'No loss aversion framing detected.'}",
    "ats_keywords": ["{8–12 distinctive verbatim phrases likely used as ATS filters}"]
  }
}
EOF
```

---

## Step 5 — Output summary

For each JD (printed immediately after Steps 1–4 complete for that URL):

```
**{Company} — {Job Title}**
Location: {location} | Seniority: {seniority} | Role type: {role_type}

Layer B:
- velocity_vs_rigour: {value} ("{decisive quote}")
- domain_risk: {value} ("{decisive quote}")
- collaboration_width: {int} ({named teams})
- data_team_maturity: {value} ("{decisive quote}")
- jd_authorship: {value} ("{decisive quote}")
- stakeholder_orientation: {value} ("{decisive quote}")
- autonomy_level: {value} ("{decisive quote}")
- ai_role: {value} ("{decisive quote}")
- testing_framing: {value} ("{decisive quote}")
- loss_aversion_framing: {value} ("{decisive quote}")
- work_arrangement: {value} ("{decisive quote}")

Stack: {comma-separated true has_* fields}

Files written to data/{base-name}/
```

If processing more than one URL, print a batch summary after all are complete:

```
Batch complete: {n} processed, {n} skipped
Skipped: {url} — {reason}   ← one line per skipped URL, omit section if none
```

---

## Notes

- Classification only — not an application tool. Use `adapt-resume` if applying.
- If raw-HTML extraction is inaccessible or yields suspiciously short content (<200 words), stop and ask for pasted JD text before proceeding — do not classify from the URL slug or company name alone, and do not substitute a WebFetch summary for the verbatim text.
- WebFetch summarizes/paraphrases by design (it runs page content through a small model) — it is never an acceptable source for `jd_archive.md`/`jd_text`, even when the response looks complete and well-formed. Always extract from raw HTML (Step 1).
- **A posting can go stale between archiving and re-verification** — the role gets filled/removed and the URL now 404s, redirects to a generic "job not found" page, or (for Ashby) the GraphQL/API query returns `null` for that job ID even though the board itself is still live. This is a different failure mode from a scrape bug: there is no current source to diff against. Do not attempt to reconstruct or guess the original content, and do not check the Wayback Machine unless the user asks for it — report "posting removed/filled since archiving, cannot re-verify" and leave the existing archive as the historical record, flagged as unverifiable rather than confirmed-bad.
- For non-standard roles (freelance, internship), complete the classification with best-fit mapping and note anomalies in the evidence field.
- **Never fabricate `salary_min`/`salary_max`/`salary_currency`/`salary_period`.** These are extraction fields, not estimates — a number goes in one of them only if it is literally present in the archived `jd_text`. A 2026-08-01 audit of the corpus found 4 records (out of 73 with salary data) had salary numbers with no supporting text anywhere in their own archive: one case looked like the classifier invented a plausible-sounding floor for a JD that only stated a ceiling ("up to RM12k" → recorded as `8000–12000`, with `8000` fabricated); another looked like salary figures got cross-contaminated from a *different*, similarly-named posting for the same company (one had real salary text, a near-duplicate posting for the same role didn't, and the real numbers ended up copied onto the wrong record). Before finalizing a salary field, grep the exact figure back against `jd_text` — if you can't point to the literal sentence it came from, the field is `null`, full stop. This applies even when a nearby/duplicate posting for the same company clearly has a similar or identical range — each JD's salary fields must come from *that JD's own text*, never inferred, backfilled, or estimated from a sibling posting.
- **`salary_period` must come from the JD's own period wording** ("per year"/"annually"/German "pro Monat"/Dutch "per maand"/French "par mois"/etc.), **never inferred from the size of the numbers.** A monthly figure in one market (e.g. €3,000–€6,500/month, common in Dutch/German postings) is numerically similar to an annual figure elsewhere (e.g. $30,000–$50,000/year) — magnitude alone is not a reliable signal, and guessing from it will silently mix monthly and annual figures into the same field with no way to tell them apart downstream. If the JD gives a bare number with genuinely no period stated, leave `salary_period` null.
