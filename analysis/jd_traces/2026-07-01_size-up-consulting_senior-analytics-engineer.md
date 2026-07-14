# Trace: 2026-07-01_size-up-consulting_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Size Up Consulting

**URL:** https://www.linkedin.com/jobs/view/4431933660/
**Location:** Paris, Île-de-France, France
**Date Posted:** 2026-07-01

---

Senior Analytics Engineer at Size Up Consulting

Location: Paris, Île-de-France, France
Seniority Level: Mid-Senior level
Employment Type: Full-time
Job Function: Production, Distribution, and Engineering
Industries: Software Development and IT Services and IT Consulting

About Size Up Consulting
Size Up Consulting, est plus qu'une simple société de conseil — the company positions itself as a partner committed to client and employee success, guided by four core values: proximity, excellence, fulfilment, and commitment. The firm specialises in data, DevOps, and user support, with 200 IT experts and an average employee tenure of 5 years.

Role Overview
The position seeks an Analytics Engineer to structure, model, and leverage data used by business teams, serving as a central bridge between Data Engineering, Data Analytics, and end users to ensure reliable, consistent, and accessible data.

Key Responsibilities
- Design and maintain data models for analytical purposes
- Develop and optimise data transformations using ELT tools
- Ensure data quality, consistency, and documentation
- Build business indicators and semantic models for activity management
- Collaborate with Product, Data Engineering, and Business teams
- Optimise data model and analytical query performance
- Participate in data governance and best practice improvements
- Support teams in data and decision-making tool utilisation

Technical Environment
SQL, dbt, Snowflake, BigQuery, Databricks, Python, Looker, Tableau, Power BI, Git, Airflow, Docker, AWS, Azure, or GCP

Required Profile
- Minimum 4 years in Analytics Engineering, Business Intelligence, or Data Engineering
- Strong SQL and data modelling expertise
- Experience with dbt or equivalent ELT tool
- Understanding of business and analytical challenges
- Ability to work in agile environments collaborating with technical and functional teams

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 2 | 3 | 2 | 33% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | recruiter | mixed | recruiter | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | none | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensure data quality, consistency, and documentation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, consistency, documentation, and governance as core expectations with no velocity or speed-focused language.

**Run 2:** `rigour` ✓
> Quote: "Ensure data quality, consistency, and documentation"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes correctness, quality, governance, and reliability throughout with no velocity language about shipping pace or iteration speed.

**Run 3:** `rigour` ✓
> Quote: "Ensure data quality, consistency, and documentation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, consistency, documentation, and governance with no velocity language, placing the role firmly in rigour-oriented delivery.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "serve as a central bridge between Data Engineering, Data Analytics, and end users to ensure reliable, consistent, and accessible data"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role supports business decision-making through analytics without explicit financial reporting, regulatory, or compliance language that would signal high risk.

**Run 2:** `moderate` ✓
> Quote: "Build business indicators and semantic models for activity management"
> Verified: ✓ found in JD
> Reasoning: The role affects business decision-making but lacks financial reporting, compliance, or regulatory language indicating high-risk impact.

**Run 3:** `moderate` ✓
> Quote: "serving as a central bridge between Data Engineering, Data Analytics, and end users to ensure reliable, consistent, and accessible data"
> Verified: ✓ found in JD
> Reasoning: A consulting firm doing general analytics work shows operational reliability concerns typical of moderate-risk roles, with no signals of financial reporting or regulatory compliance.

### collaboration_width
**Manual:** `3`

**Run 1:** `2` ✗
> Quote: "Collaborate with Product, Data Engineering, and Business teams"
> Verified: ✓ found in JD
> Reasoning: Product and Data Engineering are named functions; 'Business teams' is too generic to count as a distinct collaboration partner.

**Run 2:** `3` ✓
> Quote: "Product; Data Engineering; Data Analytics"
> Verified: ✓ found in JD
> Reasoning: Product, Data Engineering, and Data Analytics are explicitly named as distinct teams; 'Business teams' is generic and does not count.

**Run 3:** `2` ✗
> Quote: "Collaborate with Product, Data Engineering, and Business teams"
> Verified: ✓ found in JD
> Reasoning: Product and Data Engineering are explicitly named functions; 'Business teams' is generic and does not count as a distinct named team.

⚠ **Disagreement**: manual=`3` vs LLM majority=`2`

⚠ **LLM inconsistency**: runs gave ['2', '3', '2']

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "serve as a central bridge between Data Engineering, Data Analytics, and end users"
> Verified: ⚠ NOT found verbatim
> Reasoning: The existence of separate data engineering and analytics teams with a dedicated bridge role indicates an established but still-developing data function.

**Run 2:** `mid` ✗
> Quote: "Develop and optimise data transformations using ELT tools"
> Verified: ✓ found in JD
> Reasoning: The JD describes maintaining and optimizing existing infrastructure with named tools, indicating an established function with room for growth rather than greenfield or mature scale.

**Run 3:** `mid` ✗
> Quote: "Participate in data governance and best practice improvements"
> Verified: ✓ found in JD
> Reasoning: Existing governance structures and named tools indicate a functioning data function, but the absence of large-team language suggests mid-maturity rather than fully mature.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Participate in data governance and best practice improvements"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic boilerplate action verbs without specific technical context, tool application details, or scale information that would indicate hiring manager authorship.

**Run 2:** `mixed` ✗
> Quote: "Build business indicators and semantic models for activity management"
> Verified: ✓ found in JD
> Reasoning: Some technical specificity about semantic models and activity management present, but lacks the context depth and scale details a hiring manager would include.

**Run 3:** `recruiter` ✓
> Quote: "Collaborate with Product, Data Engineering, and Business teams"
> Verified: ✓ found in JD
> Reasoning: Generic boilerplate action verbs without context-specific details, scale numbers, or named methodologies suggest recruiter authorship.

⚠ **LLM inconsistency**: runs gave ['recruiter', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "serve as a central bridge between Data Engineering, Data Analytics, and end users to ensure reliable, consistent, and accessible data"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary role framing emphasizes the data infrastructure layer and supporting the data function itself, not external commercial, product, or financial stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "serving as a central bridge between Data Engineering, Data Analytics, and end users to ensure reliable, consistent, and accessible data"
> Verified: ✓ found in JD
> Reasoning: The role is primarily focused on building and maintaining the data platform itself rather than serving commercial, product, or finance teams.

**Run 3:** `internal_data` ✓
> Quote: "serving as a central bridge between Data Engineering, Data Analytics, and end users to ensure reliable, consistent, and accessible data"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes building data infrastructure (models, transformations, semantics) primarily to serve the data function and internal analytics consumers.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Support teams in data and decision-making tool utilisation"
> Verified: ✓ found in JD
> Reasoning: The role is framed as supporting and collaborating on direction set by Product and Business teams, not defining strategic direction.

**Run 2:** `execution` ✗
> Quote: "Support teams in data and decision-making tool utilisation"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes support and collaboration over strategic direction-setting, with technical autonomy scoped within a defined charter.

**Run 3:** `execution` ✗
> Quote: "Support teams in data and decision-making tool utilisation"
> Verified: ✓ found in JD
> Reasoning: The role is explicitly framed as supporting teams in tool utilization and participating in existing governance, rather than defining direction or strategy.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, coding assistance, or AI data infrastructure anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, GenAI, machine learning, coding assistants, or AI skill expectations anywhere in the JD.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-ready infrastructure, or GenAI applications expected from the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Ensure data quality, consistency, and documentation"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a direct responsibility the candidate will own and ensure, consistent with responsibility-level framing.

**Run 2:** `responsibility` ✗
> Quote: "Ensure data quality, consistency, and documentation"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an explicit candidate responsibility with an ownership verb, not just a tool or awareness.

**Run 3:** `responsibility` ✗
> Quote: "Ensure data quality, consistency, and documentation"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an owned responsibility with the action verb 'Ensure', even though specific testing tools or frameworks are not named.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed in delivery and capability terms without explicit risk registers, compliance fears, or loss prevention language.

**Run 2:** `moderate` ✗
> Quote: "Ensure data quality, consistency, and documentation"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality and reliability as core responsibilities affecting business decisions, but without SLOs, incident response, or compliance risk framing.

**Run 3:** `moderate` ✗
> Quote: "ensure reliable, consistent, and accessible data"
> Verified: ✓ found in JD
> Reasoning: Emphasis on reliability, quality, and governance reflects operational concerns about pipeline stability and data failures, not regulatory or compliance risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['none', 'moderate', 'moderate']
