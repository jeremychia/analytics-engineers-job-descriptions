# Trace: 2026-06-29_experis-uk_analytics-engineer-data-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer/Data Analyst — Experis UK

**URL:** https://www.experis.co.uk/job/analytics-engineer-slash-data-analyst-5941346?source=linkedin.com
**Location:** London (Hybrid, 2 days/week)
**Date Posted:** 2026-06-29

---

Analytics Engineer/Data Analyst
Hybrid: 2 days per week in the office (London)
Permanent

Paying up to £65k + bonus

We are currently working with a leading organisation who are investing heavily in their data and analytics capability.

They are looking to hire a Data Analyst to join a growing team and play a key role in delivering modern, production-grade analytics solutions across the business.

The Role

You will work closely with business and technology teams to:

- Build and maintain high-quality, reusable datasets
- Analyse complex data using SQL and Python
- Deliver automated reporting and dashboards
- Support the development of scalable data products

This is a hands-on role focused on moving beyond ad-hoc analysis to building robust, repeatable analytics solutions.

Key Responsibilities

- Partner with stakeholders to understand business problems and define data requirements
- Manipulate, link and analyse datasets to generate insights
- Improve data quality and consistency across systems
- Build automated reporting, dashboards and data pipelines
- Turn recurring analysis into reusable components and templates
- Apply validation and quality checks to ensure accuracy

Key Skills & Experience

- Strong SQL and Python experience
- Experience working with cloud-based data platforms (e.g. Snowflake, Azure, AWS)
- Data visualisation experience (e.g. Power BI)
- Experience building production-ready data outputs
- Strong stakeholder engagement and communication skills
- Experience using AI coding tools (Copilot, Claude, etc.) is highly desirable

Why Apply?

- Join a growing data function within an established organisation
- Work with modern tools and technologies
- Opportunity to build data products, not just reports
- Strong exposure to business stakeholders and real-world impact

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | recruiter | mixed | recruiter | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | mixed | 33% | ✓ |
| autonomy_level | execution | mixed | execution | execution | 33% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Build and maintain high-quality, reusable datasets; Analyse complex data using SQL and Python; Apply validation and quality checks to ensure accuracy"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes production-grade analytics, data quality, validation, robust solutions, and accuracy throughout, with no velocity or fast-paced language present.

**Run 2:** `rigour` ✓
> Quote: "Apply validation and quality checks to ensure accuracy"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (quality, validation, accuracy, production-grade, robust) with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "Apply validation and quality checks to ensure accuracy"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes production-readiness, robustness, quality, and accuracy as core expectations with no velocity or speed language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Partner with stakeholders to understand business problems"
> Verified: ✓ found in JD
> Reasoning: The role is framed as general business analytics without signals of financial reporting, regulatory compliance, or high-stakes consequences.

**Run 2:** `moderate` ✓
> Quote: "join a growing data function within an established organisation"
> Verified: ✓ found in JD
> Reasoning: Generic business analytics context with no regulatory, compliance, or financial risk indicators.

**Run 3:** `moderate` ✓
> Quote: "Deliver automated reporting and dashboards"
> Verified: ✓ found in JD
> Reasoning: Standard business analytics and BI work with no explicit financial, compliance, or regulatory language indicating high-risk consequences.

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "You will work closely with business and technology teams"
> Verified: ✓ found in JD
> Reasoning: The JD uses generic categorical terms ('business and technology teams', 'stakeholders') rather than naming specific functions like Finance, Product, or Engineering.

**Run 2:** `0` ✓
> Quote: "work closely with business and technology teams"
> Verified: ✓ found in JD
> Reasoning: Generic team references used instead of explicitly named functions like Finance, Product, or Engineering.

**Run 3:** `0` ✓
> Quote: "work closely with business and technology teams"
> Verified: ✓ found in JD
> Reasoning: No specifically named partner functions or teams beyond generic references to 'business' and 'technology' teams.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Join a growing data function within an established organisation"
> Verified: ✓ found in JD
> Reasoning: The team is expanding with existing modern infrastructure and named tools (Snowflake, Azure, AWS) but is still described as 'growing' rather than established or mature.

**Run 2:** `mid` ✓
> Quote: "join a growing data function within an established organisation"
> Verified: ✓ found in JD
> Reasoning: The data function exists and is actively growing with infrastructure in place, indicating mid-stage development.

**Run 3:** `mid` ✓
> Quote: "Join a growing data function within an established organisation"
> Verified: ✓ found in JD
> Reasoning: The data function exists with modern tools and is expanding, indicating an established team in growth mode rather than early-stage or mature.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Partner with stakeholders to understand business problems and define data requirements; Manipulate, link and analyse datasets to generate insights"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic boilerplate action verbs ('partner', 'collaborate', 'support') without technical specificity about scale, actual tool usage context, or methodology that would indicate hiring manager authorship.

**Run 2:** `mixed` ✗
> Quote: "Build automated reporting, dashboards and data pipelines"
> Verified: ✓ found in JD
> Reasoning: Mix of technical specificity (SQL, Python, cloud platforms, data pipelines) and generic boilerplate responsibility language.

**Run 3:** `recruiter` ✓
> Quote: "Turn recurring analysis into reusable components and templates"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use boilerplate action verbs and generic analytics language without specific application context, scale numbers, or technical methodology details.

⚠ **LLM inconsistency**: runs gave ['recruiter', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Opportunity to build data products, not just reports"
> Verified: ✓ found in JD
> Reasoning: The emphasis on building reusable data products and infrastructure components suggests this role primarily serves the data function and internal analytics consumers rather than specific external or departmental stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Turn recurring analysis into reusable components and templates"
> Verified: ✓ found in JD
> Reasoning: Emphasis on building reusable analytics infrastructure and data products for internal consumption.

**Run 3:** `mixed` ✗
> Quote: "Deliver automated reporting and dashboards; Turn recurring analysis into reusable components and templates"
> Verified: ✓ found in JD
> Reasoning: The role genuinely balances business stakeholder service (dashboards, reports, insights) with internal data infrastructure service (pipelines, reusable components).

⚠ **LLM inconsistency**: runs gave ['internal_data', 'internal_data', 'mixed']

### autonomy_level
**Manual:** `execution`

**Run 1:** `mixed` ✗
> Quote: "hands-on role focused on moving beyond ad-hoc analysis to building robust, repeatable analytics solutions"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic transformation (defining requirements, building new solutions, moving beyond ad-hoc) with hands-on execution (support, deliver, apply), demonstrating both direction-setting and implementation responsibilities.

**Run 2:** `execution` ✓
> Quote: "Support the development of scalable data products"
> Verified: ✓ found in JD
> Reasoning: The support verb and framing of delivering against business-defined requirements indicates execution rather than strategic direction-setting.

**Run 3:** `execution` ✓
> Quote: "hands-on role focused on moving beyond ad-hoc analysis to building robust, repeatable analytics solutions"
> Verified: ✓ found in JD
> Reasoning: The role executes a predetermined strategic direction set by others rather than setting overall analytics direction or strategy.

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Experience using AI coding tools (Copilot, Claude, etc.) is highly desirable"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI coding tools like Copilot and Claude as a personal productivity skill to accelerate their own work.

**Run 2:** `ai_user` ✗
> Quote: "Experience using AI coding tools (Copilot, Claude, etc.) is highly desirable"
> Verified: ✓ found in JD
> Reasoning: Candidate is expected to use AI coding tools to accelerate their personal development work.

**Run 3:** `ai_user` ✗
> Quote: "Experience using AI coding tools (Copilot, Claude, etc.) is highly desirable"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI coding tools to accelerate their own development work.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Apply validation and quality checks to ensure accuracy"
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as active responsibilities the candidate owns and applies with action verbs, not merely tools listed in requirements.

**Run 2:** `responsibility` ✗
> Quote: "Apply validation and quality checks to ensure accuracy"
> Verified: ✓ found in JD
> Reasoning: Data quality and validation appear as owned responsibilities with action verbs, not listed as tools.

**Run 3:** `responsibility` ✗
> Quote: "Apply validation and quality checks to ensure accuracy"
> Verified: ✓ found in JD
> Reasoning: Testing and validation are listed as a Key Responsibility the candidate will own and apply.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Apply validation and quality checks to ensure accuracy"
> Verified: ✓ found in JD
> Reasoning: Data quality and production-readiness matter (robust, high-quality, accurate), signaling concern for operational reliability, but without regulatory, compliance, or stakeholder-trust framing that would indicate high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Improve data quality and consistency across systems"
> Verified: ✓ found in JD
> Reasoning: Quality and reliability are concerns but not framed around regulatory risk or stakeholder trust as the primary driver.

**Run 3:** `moderate` ✗
> Quote: "Apply validation and quality checks to ensure accuracy"
> Verified: ✓ found in JD
> Reasoning: Data quality and accuracy are emphasized throughout but framed as building good solutions rather than preventing catastrophic outcomes or regulatory failure.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
