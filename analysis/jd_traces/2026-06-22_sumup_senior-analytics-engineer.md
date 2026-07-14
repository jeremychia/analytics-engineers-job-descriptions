# Trace: 2026-06-22_sumup_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer - Run & Grow — SumUp

**URL:** https://www.sumup.com/careers/positions/berlin-germany/data-analytics/senior-analytics-engineer-run-grow/8529484002/?gh_jid=8529484002&gh_src=1e0ad71d2
**Location:** Berlin, Germany

---

## Key Responsibilities

- Partner with squads across the tribe on event design and data contracts, maintaining staging pipelines, applying modelling conventions, and keeping domain outputs consistent, tested, and discoverable
- Model key business domains, including merchant activity, product adoption, lifecycle events, and risk scoring, building well-documented, quality-assured data products
- Build and maintain the insights layer on top of governed domains, producing reusable KPI models, funnels, cohorts, and segmentations
- Implement technical improvements including incremental processing strategies, performance optimisations, and scalable data architecture
- Contribute to SumUp's broader data domain strategy, helping establish durable ownership, consistent definitions, and a shared catalogue of data products

---

## Required Qualifications

- Strong, proven experience in analytics engineering or data engineering, with a track record of building and maintaining production data systems
- Expert-level SQL skills for complex transformations and query optimisation, with hands-on experience building layered data models in a modern data warehouse or lakehouse
- Ability to think in terms of business domains, not just tables, translating complex business logic into clean, durable, and reusable data models
- Comfort working across squads with Product Managers, Engineers, Analysts, and Data Scientists
- Deep care for data quality, trust, and discoverability, building models others can rely on
- Proficiency with dbt including testing, documentation, and modelling conventions
- Experience with platforms like Snowflake, Iceberg

---

## Preferred / Bonus Skills

Not explicitly listed — technical requirements folded into required qualifications.

---

## Benefits

- Virtual Stock Option programme
- €2000 annual L&D budget
- Pension scheme matching up to 20%
- 28 days paid leave plus public holidays
- Urban Sports Club subsidy
- Kita placement assistance
- Subsidised office lunches
- 1-month sabbatical after 3 years service
- Referral bonus programme

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 4 | 4 | 4 | 4 | 100% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | mixed | execution | mixed | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | tool_listed | responsibility | 33% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "well-documented, quality-assured data products"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes quality assurance, testing, documentation, consistency, and data contracts throughout, with no velocity language like 'fast-paced', 'ship quickly', or 'iteration speed'.

**Run 2:** `rigour` ✓
> Quote: "Deep care for data quality, trust, and discoverability, building models others can rely on"
> Verified: ✓ found in JD
> Reasoning: Multiple explicit signals around testing, documentation, quality assurance, and consistency dominate the JD with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "keeping domain outputs consistent, tested, and discoverable"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes testing, consistency, and discoverability as core expectations with no competing velocity signals.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Model key business domains, including merchant activity, product adoption, lifecycle events, and risk scoring"
> Verified: ✓ found in JD
> Reasoning: These are business analytics domains without explicit financial reporting, compliance, or regulatory framing, despite SumUp's fintech context.

**Run 2:** `moderate` ✗
> Quote: "Model key business domains, including merchant activity, product adoption, lifecycle events, and risk scoring"
> Verified: ✓ found in JD
> Reasoning: While SumUp is a fintech company, the JD emphasizes building business domain models without explicit financial reporting, compliance, or regulatory language.

**Run 3:** `moderate` ✗
> Quote: "Model key business domains, including merchant activity, product adoption, lifecycle events, and risk scoring"
> Verified: ✓ found in JD
> Reasoning: The role includes fintech-sensitive domains like risk scoring, but the JD frames impact in business terms rather than regulatory or compliance language.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `4`

**Run 1:** `4` ✓
> Quote: "Product Managers; Engineers; Analysts; Data Scientists"
> Verified: ✓ found in JD
> Reasoning: Four distinct named functions are explicitly listed as collaboration partners in the required qualifications.

**Run 2:** `4` ✓
> Quote: "Product Managers, Engineers, Analysts, and Data Scientists"
> Verified: ✓ found in JD
> Reasoning: Four distinct named functions are explicitly listed as collaboration partners in the required qualifications.

**Run 3:** `4` ✓
> Quote: "Product Managers, Engineers, Analysts, and Data Scientists"
> Verified: ✓ found in JD
> Reasoning: Four distinct partner functions are explicitly named in the required qualifications section.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "maintaining staging pipelines, applying modelling conventions, and keeping domain outputs consistent, tested, and discoverable"
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt, Snowflake, Iceberg), existing infrastructure, established patterns, and emerging governance language indicate a mid-stage data function with operational maturity but growing governance structure.

**Run 2:** `mid` ✗
> Quote: "Contribute to SumUp's broader data domain strategy, helping establish durable ownership, consistent definitions, and a shared catalogue of data products"
> Verified: ✓ found in JD
> Reasoning: Language about scaling existing strategy and building shared infrastructure indicates an established data function in growth mode, not early-stage.

**Run 3:** `mid` ✗
> Quote: "Partner with squads across the tribe on event design and data contracts, maintaining staging pipelines, applying modelling conventions, and keeping domain outputs consistent, tested, and discoverable"
> Verified: ✓ found in JD
> Reasoning: Established infrastructure, named tools in responsibilities, and governance practices indicate a functioning data team that is growing and formalizing.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Partner with squads across the tribe on event design and data contracts, maintaining staging pipelines, applying modelling conventions, and keeping domain outputs consistent, tested, and discoverable"
> Verified: ✓ found in JD
> Reasoning: The technical specificity of event design, data contracts, staging pipelines, modelling conventions, incremental processing, and domain thinking demonstrates hands-on experience that only someone doing this work would articulate.

**Run 2:** `hiring_manager` ✓
> Quote: "Model key business domains, including merchant activity, product adoption, lifecycle events, and risk scoring, building well-documented, quality-assured data products"
> Verified: ✓ found in JD
> Reasoning: Specific domain context and named technical methodologies (data contracts, incremental processing, dbt modelling conventions) indicate hiring manager authorship rather than recruiter boilerplate.

**Run 3:** `hiring_manager` ✓
> Quote: "maintaining staging pipelines, applying modelling conventions, and keeping domain outputs consistent, tested, and discoverable"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use technical specificity (data contracts, modelling conventions, staging pipelines, tested outputs) that suggests hands-on familiarity with the actual work.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build and maintain the insights layer on top of governed domains, producing reusable KPI models, funnels, cohorts, and segmentations"
> Verified: ✓ found in JD
> Reasoning: The primary emphasis is on building reusable analytics infrastructure and a shared catalogue of data products for internal consumption, not serving a specific commercial, product, or finance function.

**Run 2:** `internal_data` ✓
> Quote: "Build and maintain the insights layer on top of governed domains, producing reusable KPI models, funnels, cohorts, and segmentations"
> Verified: ✓ found in JD
> Reasoning: The emphasis on building reusable infrastructure and data products for other data consumers indicates the role primarily serves the data function itself.

**Run 3:** `internal_data` ✓
> Quote: "Build and maintain the insights layer on top of governed domains, producing reusable KPI models, funnels, cohorts, and segmentations"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building internal data infrastructure and reusable analytics products that enable other teams, not directly serving commercial or product teams.

### autonomy_level
**Manual:** `execution`

**Run 1:** `mixed` ✗
> Quote: "Partner with squads across the tribe on event design and data contracts, maintaining staging pipelines, applying modelling conventions, and keeping domain outputs consistent, tested, and discoverable"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic elements (partnering on event design, data contracts, modelling domains, establishing ownership) with execution elements (maintaining pipelines, applying established conventions).

**Run 2:** `execution` ✓
> Quote: "Partner with squads across the tribe on event design and data contracts, maintaining staging pipelines, applying modelling conventions, and keeping domain outputs consistent, tested, and discoverable"
> Verified: ✓ found in JD
> Reasoning: The core responsibilities centre on maintaining, applying, and ensuring quality of existing systems rather than defining overall direction.

**Run 3:** `mixed` ✗
> Quote: "Contribute to SumUp's broader data domain strategy, helping establish durable ownership, consistent definitions, and a shared catalogue of data products"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic input on data domain strategy and ownership of the modeling layer with execution-oriented responsibilities for maintaining infrastructure and producing models.

⚠ **Disagreement**: manual=`execution` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI/ML pipelines, GenAI applications, or AI skills appears anywhere in the job description.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-enabled workflows, or AI data infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, systems, or capabilities that the candidate should demonstrate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "keeping domain outputs consistent, tested, and discoverable"
> Verified: ✓ found in JD
> Reasoning: 'Tested' is framed as a characteristic of the outputs the role maintains (alongside 'consistent' and 'discoverable'), indicating ownership of ensuring test coverage rather than tool-listing.

**Run 2:** `tool_listed` ✗
> Quote: "Proficiency with dbt including testing, documentation, and modelling conventions"
> Verified: ✓ found in JD
> Reasoning: Testing appears in the skill requirements without framing as a defined practice the candidate owns or establishes.

**Run 3:** `responsibility` ✗
> Quote: "keeping domain outputs consistent, tested, and discoverable"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as an owned responsibility (what the role keeps/maintains), not just a tool in the skill list.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

⚠ **LLM inconsistency**: runs gave ['responsibility', 'tool_listed', 'responsibility']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Deep care for data quality, trust, and discoverability, building models others can rely on"
> Verified: ✓ found in JD
> Reasoning: Quality and trust language appears throughout (quality-assured, tested, reliable), signaling operational reliability as a concern, but without explicit regulatory, compliance, or audit framing that would indicate high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Deep care for data quality, trust, and discoverability, building models others can rely on"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes trustworthiness and reliability as core values, but without explicit compliance or regulatory framing.

**Run 3:** `moderate` ✗
> Quote: "Deep care for data quality, trust, and discoverability, building models others can rely on"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and stakeholder trust as important but without explicit compliance or regulatory risk framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
