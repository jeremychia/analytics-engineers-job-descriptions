# Trace: 2026-07-03_fp-markets_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — FP Markets

**URL:** https://apply.workable.com/fpmarkets/j/A782B1D6F9
**Location:** Limassol, Cyprus
**Date Posted:** 2026-07-03

---

Senior Analytics Engineer

FP Markets Group of Companies is a well-established multi-regulated broker, founded in Australia, offering traders access to CFD trading on Forex, Indices, Commodities, Stocks and Cryptocurrencies.

Overview
As a Senior Analytics Engineer, you will play a key role in building and scaling our new data platform from the ground up. You'll work with a clearly defined modern stack — ClickHouse, dbt, Airflow, Superset — in a self-hosted, on-prem environment, alongside a senior team with direct access to business stakeholders and AI tooling support. The platform direction and priorities are already set, while you still have the authority and ownership to shape the analytics foundation and push production-ready dashboards with confidence.

Reporting to: Head of Data

Responsibilities:
• Own the full delivery cycle for each business request
• Collect requirements directly from business stakeholders — Finance, Risk, Operations, Product, Business Development. Translate vague asks into precise, testable specifications
• Investigate source systems even when documentation is missing or incomplete — read code, query raw tables, talk to system owners
• Specify upstream needs for the Data Engineer when new sources or pipelines are required. Clear, well-formed tickets — not "please get me the trading data."
• Build dbt models from raw / staging into marts. Own the semantic layer, the tests, the documentation, the lineage
• Build Superset dashboards that business users actually use. RLS, RBAC, semantic layer in Superset — all configured by you
• Validate the numbers. Every chart has a known-good ground truth. You can defend any number on any dashboard, with reasoning and reproducible queries
• Document the work in a way that lets the next person continue from where you stopped — knowledge stays inside the team
• Stakeholder acceptance — walk them through, get sign-off, move on
• Use AI-assisted development workflows for SQL generation, documentation, validation, and analytics engineering tasks

Candidate profile:
Technical Skills
• Strong SQL — including complex queries (window functions, CTEs, performance-aware joins, aggregation patterns). You can write a 200-line query and explain every part of it
• dbt — production experience building and maintaining models, tests, documentation, semantic layer
• Superset — or comparable hands-on production experience with Metabase, Looker, Power BI, or Tableau. You understand RLS, RBAC, semantic models, dashboard performance tuning
• Python — read and modify — you can read other people's Python code, understand existing pipelines, make targeted modifications. You don't need to architect Python systems, but you cannot be blocked by Python code in front of you
• ClickHouse — comfortable working directly against ClickHouse, or willing to ramp up fast from PostgreSQL / Snowflake / BigQuery experience (SQL is similar, operational quirks differ)
• AI-first workflow — daily use of advanced AI tools across all stages of work. Not just chat: agentic flows, code generation, validation, documentation. Mandatory

Soft skills
• Clear written communication — process descriptions, ticket specifications, dashboard documentation, stakeholder updates. Bad writing wastes everyone's time.
• End-to-end ownership — you don't hand off and forget. The numbers are yours until the stakeholder signs off.
• Comfort with ambiguity — sources are undocumented, business processes are unclear, requirements arrive in voice messages. You navigate it, you don't complain about it.
• Direct stakeholder interaction — you talk to Finance, Risk, Ops directly. No project manager will translate for you.
• Long-term thinking — this is a permanent role. What you build matters in two years, not just two weeks

Nice to have:
• Fintech domain knowledge — trading pl…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 4 | 5 | 5 | 5 | 100% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | finance | mixed | mixed | mixed | 100% | ✗ |
| autonomy_level | strategic | mixed | strategic | mixed | 33% | ✗ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Validate the numbers. Every chart has a known-good ground truth. You can defend any number on any dashboard, with reasoning and reproducible queries"
> Verified: ✓ found in JD
> Reasoning: The responsibilities heavily emphasize data validation, correctness, testing, and documentation as core expectations, with no velocity-oriented framing.

**Run 2:** `rigour` ✓
> Quote: "Validate the numbers. Every chart has a known-good ground truth. You can defend any number on any dashboard, with reasoning and reproducible queries"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data validation, accuracy, and long-term thinking over delivery speed, with no velocity-oriented framing like 'fast-paced' or 'move fast'.

**Run 3:** `rigour` ✓
> Quote: "Validate the numbers. Every chart has a known-good ground truth. You can defend any number on any dashboard, with reasoning and reproducible queries"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes validation, correctness, and defensibility as primary values with no velocity or speed-to-market language present.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "multi-regulated broker"
> Verified: ✓ found in JD
> Reasoning: This fintech sector role serving Finance and Risk stakeholders explicitly references regulatory frameworks (CySEC, MiFID II, GDPR, DORA) and operates where data errors directly affect regulatory compliance and trading decisions.

**Run 2:** `high` ✓
> Quote: "Collect requirements directly from business stakeholders — Finance, Risk, Operations, Product, Business Development."
> Verified: ✓ found in JD
> Reasoning: The role directly serves Finance and Risk stakeholders in a regulated fintech brokerage, where data errors have direct regulatory and financial reporting consequences.

**Run 3:** `high` ✓
> Quote: "well-established multi-regulated broker"
> Verified: ✓ found in JD
> Reasoning: The company is explicitly regulated and operates in fintech, where data errors directly affect financial reporting and regulatory compliance.

### collaboration_width
**Manual:** `4`

**Run 1:** `5` ✗
> Quote: "Finance, Risk, Operations, Product, Business Development"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names five distinct business functions as direct collaboration partners in the responsibilities section.

**Run 2:** `5` ✗
> Quote: "Finance, Risk, Operations, Product, Business Development"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly lists five distinct named business functions that the role collaborates with directly.

**Run 3:** `5` ✗
> Quote: "Finance, Risk, Operations, Product, Business Development"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names five distinct business functions as direct stakeholder collaborators in the requirements-gathering and delivery process.

⚠ **Disagreement**: manual=`4` vs LLM majority=`5`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "building and scaling our new data platform from the ground up"
> Verified: ✓ found in JD
> Reasoning: The JD names a complete modern tech stack (ClickHouse, dbt, Airflow, Superset) already in place with set direction and separate Data Engineer role, indicating mid-maturity with infrastructure established but growing.

**Run 2:** `mid` ✗
> Quote: "building and scaling our new data platform from the ground up"
> Verified: ✓ found in JD
> Reasoning: The data function has a clear reporting structure (Head of Data), named tools in use (dbt, Superset, ClickHouse, Airflow), and is scaling an existing or new platform initiative.

**Run 3:** `mid` ✗
> Quote: "alongside a senior team with direct access to business stakeholders"
> Verified: ✓ found in JD
> Reasoning: A senior team exists with named tools (ClickHouse, dbt, Airflow, Superset) in production and a defined platform direction, indicating an established function in growth phase rather than early-stage or mature scale.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Build dbt models from raw / staging into marts. Own the semantic layer, the tests, the documentation, the lineage"
> Verified: ✓ found in JD
> Reasoning: The responsibilities include highly specific technical methodology (dbt marts, semantic layer ownership, test frameworks) demonstrating hands-on familiarity with this workflow, not recruiter boilerplate.

**Run 2:** `hiring_manager` ✓
> Quote: "Specify upstream needs for the Data Engineer when new sources or pipelines are required. Clear, well-formed tickets — not "please get me the trading data.""
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific methodologies and real-world frustrations (bad ticket specifications) that reflect hands-on experience with this exact role.

**Run 3:** `hiring_manager` ✓
> Quote: "Own the semantic layer, the tests, the documentation, the lineage"
> Verified: ✓ found in JD
> Reasoning: The specificity about dbt responsibilities, RLS/RBAC configuration, ClickHouse deployment details, and precision about what 'owning tests' means indicates hands-on technical authorship.

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `mixed` ✗
> Quote: "Collect requirements directly from business stakeholders — Finance, Risk, Operations, Product, Business Development"
> Verified: ✓ found in JD
> Reasoning: The role serves five distinct stakeholder functions with equal emphasis and no prioritization in responsibilities, genuinely splitting focus across financial, operational, product, and commercial audiences.

**Run 2:** `mixed` ✗
> Quote: "Collect requirements directly from business stakeholders — Finance, Risk, Operations, Product, Business Development."
> Verified: ✓ found in JD
> Reasoning: The role serves multiple stakeholder groups across finance, risk, operations, and product with genuinely equal emphasis in responsibilities.

**Run 3:** `mixed` ✗
> Quote: "Finance, Risk, Operations, Product, Business Development"
> Verified: ✓ found in JD
> Reasoning: The role serves five distinct stakeholder categories (finance, risk, operations, product, commercial) with equal emphasis and no clear primary audience.

⚠ **Disagreement**: manual=`finance` vs LLM majority=`mixed`

### autonomy_level
**Manual:** `strategic`

**Run 1:** `mixed` ✗
> Quote: "you still have the authority and ownership to shape the analytics foundation"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic authority to define the analytics implementation approach while executing against business priorities and requests that are externally set.

**Run 2:** `strategic` ✓
> Quote: "you still have the authority and ownership to shape the analytics foundation"
> Verified: ✓ found in JD
> Reasoning: The role is explicitly framed around setting direction ('shape the analytics foundation', 'own the full delivery cycle'), not executing pre-set priorities.

**Run 3:** `mixed` ✗
> Quote: "you still have the authority and ownership to shape the analytics foundation"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly states direction is set by others while the candidate has authority to shape implementation, combining execution within defined boundaries with strategic ownership of technical design.

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Use AI-assisted development workflows for SQL generation, documentation, validation, and analytics engineering tasks"
> Verified: ✓ found in JD
> Reasoning: The candidate must use AI tools (specifically named agentic workflows, not just chat) to accelerate their own analytics work including code generation and validation.

**Run 2:** `ai_user` ✗
> Quote: "AI-first workflow — daily use of advanced AI tools across all stages of work. Not just chat: agentic flows, code generation, validation, documentation. Mandatory"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI tools for personal productivity (code generation, validation, documentation), not to build AI infrastructure.

**Run 3:** `ai_user` ✗
> Quote: "Use AI-assisted development workflows for SQL generation, documentation, validation, and analytics engineering tasks"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI tools daily across all stages of work, including agentic flows and code generation, to accelerate their own analytics engineering productivity.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Own the semantic layer, the tests, the documentation, the lineage"
> Verified: ✓ found in JD
> Reasoning: Testing appears as an owned responsibility using the verb 'Own', indicating the candidate defines and maintains testing practices, not merely uses existing tools.

**Run 2:** `responsibility` ✗
> Quote: "Own the semantic layer, the tests, the documentation, the lineage"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as owned responsibility within the broader ownership of building dbt models and data validation.

**Run 3:** `responsibility` ✗
> Quote: "Own the semantic layer, the tests, the documentation, the lineage"
> Verified: ✓ found in JD
> Reasoning: The candidate owns testing practices as an explicit accountability within their dbt work, not as a tool they use but as a core responsibility they carry.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Validate the numbers. Every chart has a known-good ground truth. You can defend any number on any dashboard, with reasoning and reproducible queries"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes operational correctness and reliability in a regulated fintech context, preventing data failures reaching decision-makers, but frames this as delivery capability rather than explicit compliance or risk prevention.

**Run 2:** `moderate` ✗
> Quote: "Validate the numbers. Every chart has a known-good ground truth. You can defend any number on any dashboard, with reasoning and reproducible queries"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and data accuracy, but not regulatory compliance or risk prevention as primary concerns.

**Run 3:** `moderate` ✗
> Quote: "Validate the numbers. Every chart has a known-good ground truth. You can defend any number on any dashboard, with reasoning and reproducible queries"
> Verified: ✓ found in JD
> Reasoning: The fintech domain carries high regulatory risk, and the emphasis on validation and correctness reflects concern for data reliability, but the JD frames this as quality excellence rather than explicit compliance or risk prevention.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
