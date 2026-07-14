# Trace: 2026-07-01_bitpanda_analytics-engineer-dbt-business-intelligence

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer, dbt (Business Intelligence) — Bitpanda

**URL:** https://job-boards.eu.greenhouse.io/bitpanda/jobs/4538199101?gh_src=f816fea2teu
**Location:** Vienna, Vienna, Austria
**Date Posted:** 2026-07-01

---

Analytics Engineer, dbt (Business Intelligence) at Bitpanda

About the Company
Bitpanda, founded in 2014 in Vienna, Austria, aims to simplify wealth creation and help people build financial freedom. The company operates a trade-everything platform serving over 7 million customers across Europe, offering investments in cryptocurrencies, stocks, precious metals, and commodities. Their team is described as fast-moving, talented professionals working across multiple cultures and time zones.

Role Summary
The position focuses on driving data driven decision making at Bitpanda by assisting various teams in collecting and analyzing metrics that support growth.

Key Responsibilities
- Contributing to the ongoing design of our core data model
- Unifying business intelligence, data engineering, and business stakeholders
- Collaborating with Finance and Operations on reporting needs
- Ensuring high data quality of the core data layer with dbt models
- Enabling analysts and streamlining dashboard creation

Requirements
- Advanced experience with SQL, dbt and Python
- Strong communication and cross-functional collaboration skills
- Solid experience with data-modelling and data quality frameworks
- Approximately three years of analytics engineering or business intelligence experience
- Bachelor's or Master's degree in relevant fields
- Hands-on experience with Airflow and BI Tools (Metabase, Tableau or similar) is considered a plus

Benefits
Hybrid flexibility with 25 additional work-from-abroad days, competitive compensation with stock options, mental health support, 3 extra vacation days, unlimited Udemy access, 8 weeks parental leave, and onsite dining at certain locations.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 5 | 3 | 5 | 5 | 33% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | mixed | mixed | mixed | 100% | ✓ |
| stakeholder_orientation | mixed | internal_data | internal_data | internal_data | 100% | ✗ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: The core responsibility emphasizes data quality assurance and reliability over speed or iteration pace.

**Run 2:** `rigour` ✓
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data quality and correctness as core expectations, with explicit quality assurance framing in dbt governance.

**Run 3:** `rigour` ✓
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality and correctness as core expectations, with no velocity or speed language in the role description.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Collaborating with Finance and Operations on reporting needs"
> Verified: ✓ found in JD
> Reasoning: Bitpanda is a fintech platform with 7 million customers managing customer wealth; Finance involvement in reporting indicates financial reporting risk.

**Run 2:** `high` ✓
> Quote: "Collaborating with Finance and Operations on reporting needs"
> Verified: ✓ found in JD
> Reasoning: Explicit Finance collaboration in a fintech sector indicates financial reporting is a core concern, making data errors directly relevant to financial accuracy.

**Run 3:** `high` ✓
> Quote: "trade-everything platform serving over 7 million customers across Europe"
> Verified: ✓ found in JD
> Reasoning: Fintech platform with 7 million customers handling financial transactions where data errors directly affect financial operations and regulatory compliance at scale.

### collaboration_width
**Manual:** `5`

**Run 1:** `3` ✗
> Quote: "Finance and Operations; data engineering"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams are explicitly identified as collaboration partners: Finance, Operations, and data engineering.

**Run 2:** `5` ✓
> Quote: "Finance and Operations; business intelligence, data engineering; analysts"
> Verified: ✓ found in JD
> Reasoning: The JD names five distinct teams: Finance, Operations, Business Intelligence, Data Engineering, and Analysts as collaboration partners.

**Run 3:** `5` ✓
> Quote: "business intelligence; data engineering; Finance; Operations; analysts"
> Verified: ✓ found in JD
> Reasoning: Five distinct named teams/functions are referenced in responsibilities: BI, data engineering, Finance, Operations, and analysts as a role cohort.

⚠ **LLM inconsistency**: runs gave ['3', '5', '5']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Contributing to the ongoing design of our core data model"
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt) in responsibilities and multiple data roles implied (BI, data engineering, analysts) signal an established but still-growing data function.

**Run 2:** `mid` ✓
> Quote: "Contributing to the ongoing design of our core data model"
> Verified: ✓ found in JD
> Reasoning: References to an existing core data model, dbt infrastructure, and multiple teams indicate an established data function that is evolving and growing rather than nascent.

**Run 3:** `mid` ✓
> Quote: "Contributing to the ongoing design of our core data model"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (dbt) and multiple data roles (BI, data eng, analysts) indicate an established function being actively improved, not greenfield or mature scale.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: One specific responsibility names dbt with technical context, but most other responsibilities use generic collaboration verbs without technical detail.

**Run 2:** `mixed` ✓
> Quote: "Ensuring high data quality of the core data layer with dbt models; Unifying business intelligence, data engineering, and business stakeholders"
> Verified: ✓ found in JD
> Reasoning: The JD contains technical specificity about dbt's application in data quality alongside generic framing like 'Unifying' teams that lacks implementation context.

**Run 3:** `mixed` ✓
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: Technically specific language (dbt, core data layer, data quality frameworks) is mixed with generic collaboration verbs like 'collaborate' and 'unify'.

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `internal_data` ✗
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: The core responsibility is building and maintaining the data infrastructure that other teams (analysts, Finance, Operations) consume, making internal data infrastructure the primary orientation.

**Run 2:** `internal_data` ✗
> Quote: "Enabling analysts and streamlining dashboard creation"
> Verified: ✓ found in JD
> Reasoning: Four of five responsibilities focus on data platform and infrastructure work serving analytics consumers; Finance collaboration is secondary to platform-building.

**Run 3:** `internal_data` ✗
> Quote: "Enabling analysts and streamlining dashboard creation"
> Verified: ✓ found in JD
> Reasoning: The role's primary responsibilities are building and maintaining data infrastructure that analysts and BI teams consume, not serving commercial, product, or finance stakeholders.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`internal_data`

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Contributing to the ongoing design of our core data model"
> Verified: ✓ found in JD
> Reasoning: The role uses "contributing" and "collaborating" rather than owning or leading strategy, with emphasis on enabling and supporting other teams.

**Run 2:** `execution` ✗
> Quote: "Contributing to the ongoing design of our core data model"
> Verified: ✓ found in JD
> Reasoning: The use of 'Contributing to' and 'ongoing design' indicates executing within an established framework rather than defining strategic direction.

**Run 3:** `execution` ✗
> Quote: "Contributing to the ongoing design of our core data model"
> Verified: ✓ found in JD
> Reasoning: The role contributes to an existing design rather than defining or shaping overall analytics direction; the summary emphasizes 'assisting various teams'.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-ready data infrastructure, or AI/ML capabilities in the responsibilities or requirements.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools or AI-ready infrastructure that the candidate should demonstrate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted development, or expectations for building AI-ready data infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a responsibility the candidate owns and delivers through dbt, with an ownership verb ("ensuring") rather than as a tool requirement.

**Run 2:** `responsibility` ✗
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: The ownership verb 'Ensuring' frames data quality as a responsibility the candidate owns, not merely a tool to know.

**Run 3:** `responsibility` ✗
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a responsibility the candidate owns and ensures, with dbt as the tool for implementing quality standards.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: Operational reliability through data quality is clearly important, but the JD does not explicitly invoke compliance, regulatory, or stakeholder-trust language that would elevate this to high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an operational concern and responsibility, but the overall JD emphasizes delivery and enablement rather than risk or compliance prevention.

**Run 3:** `moderate` ✗
> Quote: "Ensuring high data quality of the core data layer with dbt models"
> Verified: ✓ found in JD
> Reasoning: Operational reliability of the data layer is a core concern, but without explicit compliance, regulatory, or stakeholder trust risk language throughout the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
