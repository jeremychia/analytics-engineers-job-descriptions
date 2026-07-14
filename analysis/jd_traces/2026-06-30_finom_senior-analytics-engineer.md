# Trace: 2026-06-30_finom_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Finom

**URL:** https://jobs.eu.lever.co/pnlfin/512862cb-695e-4fee-9b44-d95793739f68
**Location:** Spain / Poland / Serbia / Slovenia (Remote)
**Date Posted:** 2026-06-30

---

Senior Analytics Engineer at Finom

Location: Spain / Poland / Serbia / Slovenia (Remote)
Employment Type: Full Time

About Finom:
Finom is an Amsterdam-based fintech startup that recently closed €115 million Series C funding, bringing total capital to approximately $346 million. Their mission focuses on creating integrated financial management solutions for entrepreneurs.

About the Role:
Finom seeks a Senior Analytics Engineer to join their newly formed Data Team building a Data Delivery Platform on Databricks. The role offers significant autonomy in developing data products from scratch in a remote setting across European locations.

Key Responsibilities:
- Developing data warehouse core models that transform Kafka topics into documented, easy-to-use data products
- Collaborating with data engineers on streaming ETL framework development
- Contributing to OpenMetadata data catalog features and maintenance
- Implementing data quality and governance processes
- Supporting data consumers (ML engineers, analysts, stakeholders) with requirements translation — partner with data consumers across the business, supporting their daily data needs and turning requirements into reliable, well-documented data products
- Addressing platform-building challenges from inception

Requirements:
- Analytics engineering or analyst experience with data platform projects
- Excellent SQL writing capabilities for analytical work
- Python and PySpark proficiency
- Git and ETL tool expertise (dbt preferred)
- Experience building data products or DWH models on modern platforms like Databricks
- Understanding of streaming pipeline mechanics
- Ability to gather stakeholder requirements and convert to technical solutions
- High autonomy and self-direction
- Banking/fintech background (preferred)

Benefits:
- Stock options available to all employees
- Remote work flexibility across Europe
- Work & Swim Program offering one month in a comfortable corporate apartment in enchanting Cyprus
- Professional development opportunities
- Inclusive workplace culture

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 3 | 3 | 3 | 3 | 100% | ✓ |
| data_team_maturity | early | early | mid | early | 33% | ✓ |
| jd_authorship | mixed | hiring_manager | mixed | hiring_manager | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | mixed | mixed | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implementing data quality and governance processes"
> Verified: ✓ found in JD
> Reasoning: The JD emphasises data governance and quality as core responsibilities alongside documented, reliable data products, with no velocity language.

**Run 2:** `rigour` ✓
> Quote: "Implementing data quality and governance processes"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (data quality, governance, documented products) with zero velocity language.

**Run 3:** `rigour` ✓
> Quote: "Implementing data quality and governance processes"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, governance, and documentation as core expectations, with no velocity-framing language present.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Supporting data consumers (ML engineers, analysts, stakeholders) with requirements translation"
> Verified: ✓ found in JD
> Reasoning: Despite fintech sector, the JD frames the role around internal data product delivery rather than financial reporting, compliance, or regulatory concerns.

**Run 2:** `moderate` ✗
> Quote: "Building a Data Delivery Platform on Databricks"
> Verified: ✓ found in JD
> Reasoning: While Finom is fintech (high-risk sector), the JD focuses on technical infrastructure with no financial reporting, compliance, or regulatory language.

**Run 3:** `moderate` ✗
> Quote: "Supporting data consumers (ML engineers, analysts, stakeholders) with requirements translation"
> Verified: ✓ found in JD
> Reasoning: While Finom is a fintech company, the JD frames the role in generic data platform terms without explicit financial reporting, compliance, or regulatory language.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "data engineers; ML engineers; analysts"
> Verified: ✓ found in JD
> Reasoning: Three distinct named functions identified as collaboration partners or data consumers across platform and analytics functions.

**Run 2:** `3` ✓
> Quote: "Collaborating with data engineers; Supporting data consumers (ML engineers, analysts, stakeholders)"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams: data engineers, ML engineers, and analysts (stakeholders excluded as too generic).

**Run 3:** `3` ✓
> Quote: "Collaborating with data engineers on streaming ETL framework development; Supporting data consumers (ML engineers, analysts, stakeholders)"
> Verified: ✓ found in JD
> Reasoning: Three distinct named partner functions identified: data engineers, ML engineers, and analysts.

### data_team_maturity
**Manual:** `early`

**Run 1:** `early` ✓
> Quote: "newly formed Data Team building a Data Delivery Platform on Databricks"
> Verified: ✓ found in JD
> Reasoning: Explicit signal of a newly formed team building platform infrastructure from scratch, indicating early-stage maturity despite some existing infrastructure.

**Run 2:** `mid` ✗
> Quote: "newly formed Data Team building a Data Delivery Platform on Databricks"
> Verified: ✓ found in JD
> Reasoning: Newly formed suggests early stage, but presence of named platforms and supporting multiple specialized roles (data engineers, ML engineers, analysts) indicates mid-stage maturity.

**Run 3:** `early` ✓
> Quote: "newly formed Data Team building a Data Delivery Platform on Databricks"
> Verified: ✓ found in JD
> Reasoning: The explicitly 'newly formed' team building 'from inception' signals an early-stage data function establishing its core platform and processes.

⚠ **LLM inconsistency**: runs gave ['early', 'mid', 'early']

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Developing data warehouse core models that transform Kafka topics into documented, easy-to-use data products"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain technical specificity about named tools, technologies, and precise application context that indicates hands-on experience writing this role.

**Run 2:** `mixed` ✓
> Quote: "Developing data warehouse core models that transform Kafka topics into documented, easy-to-use data products; Collaborating with data engineers on streaming ETL framework development"
> Verified: ✓ found in JD
> Reasoning: Technical specificity (Kafka, streaming ETL, data warehouse models, OpenMetadata) mixed with generic collaboration and support language.

**Run 3:** `hiring_manager` ✗
> Quote: "Developing data warehouse core models that transform Kafka topics into documented, easy-to-use data products"
> Verified: ✓ found in JD
> Reasoning: This demonstrates specific technical application context (Kafka, DWH models on a specific platform) rather than generic boilerplate language.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Supporting data consumers (ML engineers, analysts, stakeholders) with requirements translation — partner with data consumers across the business"
> Verified: ✓ found in JD
> Reasoning: The primary audience is internal data consumers within the analytics and ML functions, not GTM, product, or finance teams.

**Run 2:** `internal_data` ✓
> Quote: "partner with data consumers across the business, supporting their daily data needs and turning requirements into reliable, well-documented data products"
> Verified: ✓ found in JD
> Reasoning: The role centers on building and maintaining data infrastructure (Databricks platform, data catalog, core models) for internal technical teams and analysts.

**Run 3:** `internal_data` ✓
> Quote: "partner with data consumers across the business, supporting their daily data needs and turning requirements into reliable, well-documented data products"
> Verified: ✓ found in JD
> Reasoning: The role's core mission is building data infrastructure and platforms that serve internal data consumers and other data engineers, not external GTM or financial reporting.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "significant autonomy in developing data products from scratch"
> Verified: ✓ found in JD
> Reasoning: The role is explicitly described as having significant autonomy to develop data products from inception, with strategic ownership over platform architecture.

**Run 2:** `mixed` ✗
> Quote: "significant autonomy in developing data products from scratch; Supporting data consumers across the business, supporting their daily data needs"
> Verified: ⚠ NOT found verbatim
> Reasoning: Strategic autonomy in platform building and addressing challenges from inception combined with execution responsibilities supporting data consumers.

**Run 3:** `mixed` ✗
> Quote: "significant autonomy in developing data products from scratch; Supporting data consumers (ML engineers, analysts, stakeholders) with requirements translation"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic autonomy in building the platform from inception with execution-oriented responsibilities in serving data consumer requirements.

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectation for the candidate to use AI coding tools or build AI infrastructure, despite ML engineers being named as data consumers.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI capabilities, tools, or expectations anywhere in the JD.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no signals that the candidate should demonstrate AI skills, either for personal productivity or for building AI-ready infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implementing data quality and governance processes"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a named responsibility with an action verb showing ownership rather than as a tool in a skill list.

**Run 2:** `responsibility` ✗
> Quote: "Implementing data quality and governance processes"
> Verified: ✓ found in JD
> Reasoning: Data quality and governance are direct responsibilities with an ownership verb (implementing), not tools listed in requirements.

**Run 3:** `responsibility` ✗
> Quote: "Implementing data quality and governance processes"
> Verified: ✓ found in JD
> Reasoning: Data quality and governance practices are framed as something the candidate implements (ownership verb) in the responsibilities section.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implementing data quality and governance processes"
> Verified: ✓ found in JD
> Reasoning: Data quality and governance are named operational concerns indicating reliability matters, but the JD lacks compliance/regulatory/stakeholder-trust language that would signal high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "reliable, well-documented data products"
> Verified: ✓ found in JD
> Reasoning: Reliability and quality are valued outcomes but the JD emphasizes technical excellence over risk prevention, compliance, or stakeholder trust concerns.

**Run 3:** `moderate` ✗
> Quote: "Implementing data quality and governance processes; reliable, well-documented data products"
> Verified: ✓ found in JD
> Reasoning: Data quality and reliability are core concerns, but framed operationally rather than around regulatory compliance or preventing bad data reaching critical decision-makers.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
