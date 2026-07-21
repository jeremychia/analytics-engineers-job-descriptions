---
name: classify-jd
description: Fetches a job posting URL and produces a structured Layer B classification record (JSON) and a jd.md file. No resume adaptation — classification only. JD data capture and behavioural analysis tool.
allowed-tools: WebFetch Read Write Bash
argument-hint: <job-posting-url>
---

`$ARGUMENTS` is one or more job posting URLs (whitespace- or newline-separated). Produce a structured classification for each JD. No resume adaptation, no cover letter, no tailoring — classification only.

**Batch mode**: process each URL one at a time, completing Steps 1–5 fully before fetching the next. Do not hold multiple JD texts in memory simultaneously — context is finite. If a URL cannot be fetched (empty response, 403, paywall, bot block, or suspiciously short content under ~200 words), stop and ask the user to paste the JD text, then proceed from Step 2 using the pasted text. Never infer or hallucinate JD content from the URL slug or company name alone. After all URLs are processed, print a batch summary (see Step 6).

Work through the steps **in order** for each URL.

---

## Step 1 — Fetch and extract the JD

Fetch `$ARGUMENTS` with WebFetch. Extract:

**Ashby postings (jobs.ashbyhq.com) render client-side — WebFetch alone typically returns only the title.** If WebFetch returns suspiciously short content for an Ashby URL, fall back to curl + embedded JSON extraction before asking the user to paste text:

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

- **Company name** (slug: lowercase, hyphens, no punctuation)
- **Job title** (slug form)
- **Location** (as stated in JD header)
- **Salary** (min, max, currency — or null)
- **Date** (today's date, YYYY-MM-DD)
- **Role type**: `analytics_engineering_bi` | `data_engineering` | `team_lead` | `other`
- **Seniority**: `junior` | `mid` | `senior` | `staff` | `lead` | `manager`

Base name: `YYYY-MM-DD_company-slug_job-title-slug`

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

`has_dbt`, `has_spark`, `has_python`, `has_sql`, `has_airflow`, `has_dagster`, `has_prefect`, `has_snowflake`, `has_databricks`, `has_bigquery`, `has_redshift`, `has_duckdb`, `has_kafka`, `has_terraform`, `has_looker`, `has_tableau`, `has_power_bi`, `has_great_expectations`, `has_soda`

Also extract:
- **urgency**: `urgent` if JD validity ≤30 days, "immediately", "ASAP", "critical hire", or re-post signal. Otherwise `standard`.
- **greenfield_vs_fix**: `greenfield` | `fix_scale` | `mixed` — dominant verb signal across infrastructure tasks.
- **language_gate_type**: `none` | `soft` | `hard` (`hard` = "required"/"fluent"/"C1/C2"/"must speak"; `soft` = "plus"/"nice to have"/"advantage")
- **language_gate_languages**: list of non-English languages named (empty list if none)
- **interview_stages**: integer if stated, null if not
- **ats_platform**: match URL in order — `greenhouse` (greenhouse.io), `lever` (lever.co), `workday` (myworkdayjobs.com), `ashby` (ashbyhq.com), `smartrecruiters` (smartrecruiters.com), `icims` (icims.com), `jobvite` (jobvite.com), `linkedin` (linkedin.com/jobs), `welcometothejungle` (welcometothejungle.com), else `unknown`
- **ats_job_id**: platform-specific job ID from URL (greenhouse: trailing numeric; lever/ashby: UUID; workday: requisition ref after `/job/`; linkedin: numeric; others: most specific path segment or null)

---

## Step 4 — Write output files

Produce a single JSON object and pipe it to `write_jd.py`. The script writes all three output files (`jd_archive.md`, `jd.md`, `{base-name}.json`) in one shot. `jd_archive.md` is prefixed with a `**URL:** {source_url}` line for traceability back to the original posting.

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
  "salary_min": {int or null},
  "salary_max": {int or null},
  "salary_currency": "{EUR|GBP|USD|null}",
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
  "has_kafka": false,
  "has_terraform": false,
  "has_looker": false,
  "has_tableau": false,
  "has_power_bi": false,
  "has_great_expectations": false,
  "has_soda": false,
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
- If a URL is inaccessible or returns suspiciously short content (<200 words), stop and ask for pasted JD text before proceeding — do not classify from the URL slug or company name alone.
- For non-standard roles (freelance, internship), complete the classification with best-fit mapping and note anomalies in the evidence field.
