# Trace: 2026-07-02_ijsvogel-retail_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — IJsvogel Retail (Pets Place Boerenbond)

**URL:** https://werkenbij.ijsvogelretail.nl/vacature-hoofdkantoor/analytics-engineer
**Location:** Ede, Netherlands
**Date Posted:** 2026-07-02
**Salary:** 3,800–6,200 EUR

---

# Analytics Engineer

Company: Pets Place Boerenbond (part of IJsvogel Retail)
Job Title: Analytics Engineer
Location: Netherlands (headquarters in Ede)
Salary: EUR 3800 - EUR 6200 per month (fulltime basis)

## Key Responsibilities
The role involves translating business questions into dashboards and data solutions. The engineer designs datamodels in dbt and BigQuery, works with stakeholders on information needs, and monitors data quality and governance including GDPR compliance. The position also includes resolving pipeline issues and promoting data-driven culture across the organization.

## Requirements
Candidates need HBO+ education level and 3-5 years in similar roles. Essential skills include cloud platform experience (Google Cloud Platform/BigQuery preferred), SQL and Python programming, dbt expertise, and BI tools knowledge (preferably Looker). Understanding data architecture, governance, privacy regulations, and retail processes is required, plus interest in advanced analytics and AI applications.

## Additional Information
Contact: Stef van Hoek, Lead Data (06-42997509)
Benefits: 25 vacation days, remote work options (minimum 3 office days), travel reimbursement, 15% employee discount, and Alleo app access
Note: Acquisition approaches discouraged

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | high | moderate | 33% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | recruiter | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | mixed | internal_data | mixed | 33% | ✗ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | responsibility | 33% | ✗ |
| loss_aversion_framing |  | moderate | high | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: Multiple explicit governance, compliance, and data quality signals with no velocity or speed-oriented language indicate a rigour-focused orientation.

**Run 2:** `rigour` ✓
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (data quality, governance, GDPR compliance, monitoring) appear throughout with no velocity signals present.

**Run 3:** `rigour` ✓
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize compliance, governance, and data quality with no velocity signals present (no 'fast-paced', 'rapid', 'MVP', or 'iteration' language).

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: GDPR compliance indicates regulatory concern, but the role is in retail analytics rather than financial reporting, placing it in the moderate-risk category.

**Run 2:** `high` ✗
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: Explicit mention of GDPR compliance signals regulatory/legal risk where data errors have direct compliance consequences.

**Run 3:** `moderate` ✓
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: Retail analytics with privacy compliance concerns (GDPR) but no financial reporting, P&L, or high regulatory risk signals typical of banking or fintech.

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'moderate']

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: ""
> Verified: ✓ found in JD
> Reasoning: The JD does not explicitly name any specific partner teams, functions, or departments; only generic 'stakeholders' are mentioned.

**Run 2:** `0` ✓
> Quote: "works with stakeholders on information needs"
> Verified: ✓ found in JD
> Reasoning: JD mentions generic 'stakeholders' and 'organization' but no explicitly named functions or teams like Finance, Product, Engineering.

**Run 3:** `0` ✓
> Quote: "works with stakeholders on information needs"
> Verified: ✓ found in JD
> Reasoning: No explicitly named partner functions (Finance, Product, Marketing, Engineering, Data Science) are identified; 'stakeholders' is generic and does not count.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "designs datamodels in dbt and BigQuery"
> Verified: ✓ found in JD
> Reasoning: Named tools appearing in responsibilities (not just requirements) suggest existing data infrastructure and an established function in growth phase.

**Run 2:** `mid` ✓
> Quote: "designs datamodels in dbt and BigQuery"
> Verified: ✓ found in JD
> Reasoning: Established tools (dbt, BigQuery, Looker, existing pipelines) appear in responsibilities, indicating an existing data function at growth/improvement stage.

**Run 3:** `mid` ✓
> Quote: "designs datamodels in dbt and BigQuery"
> Verified: ✓ found in JD
> Reasoning: Named tools appear in responsibilities with specific application context (actively designing models), indicating established infrastructure and operational data work, but no indication of specialized sub-teams or massive scale.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "The engineer designs datamodels in dbt and BigQuery, works with stakeholders on information needs, and monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: Combines specific tool names (dbt, BigQuery, Looker) suggesting hiring-manager input with generic responsibility verbs ('works with stakeholders') typical of recruiter-written boilerplate.

**Run 2:** `recruiter` ✗
> Quote: "translating business questions into dashboards and data solutions"
> Verified: ✓ found in JD
> Reasoning: Generic action verbs and tool names without technical specificity, scale numbers, or detailed context characteristic of recruiter templates.

**Run 3:** `mixed` ✗
> Quote: "designs datamodels in dbt and BigQuery, monitors data quality and governance including GDPR compliance"
> Verified: ⚠ NOT found verbatim
> Reasoning: Blends technical specificity from an operator ('designs datamodels in dbt', GDPR compliance context) with generic boilerplate ('translating business questions', 'promoting data-driven culture').

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'recruiter', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `mixed` ✗
> Quote: "translating business questions into dashboards and data solutions; designs datamodels in dbt and BigQuery; monitors data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Responsibilities equally emphasize serving business stakeholders through dashboards and serving the data platform through modeling and governance work.

**Run 2:** `internal_data` ✓
> Quote: "promoting data-driven culture across the organization"
> Verified: ✓ found in JD
> Reasoning: Emphasis on data platform/infrastructure (dbt, BigQuery, BI tools), governance, and promoting internal data adoption indicates primary focus on data platform and internal consumers.

**Run 3:** `mixed` ✗
> Quote: "translating business questions into dashboards and data solutions; monitors data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Responsibilities split between serving business stakeholders through dashboards and insights, and serving the data function itself through quality and governance work.

⚠ **Disagreement**: manual=`internal_data` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'internal_data', 'mixed']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "works with stakeholders on information needs, and monitors data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Action verbs focus on supporting others and maintaining systems rather than defining direction, indicating execution-oriented work.

**Run 2:** `execution` ✗
> Quote: "translating business questions into dashboards and data solutions"
> Verified: ✓ found in JD
> Reasoning: Responsibilities framed around delivering solutions and supporting stakeholders' needs rather than defining strategy or direction.

**Run 3:** `execution` ✗
> Quote: "translating business questions into dashboards and data solutions"
> Verified: ✓ found in JD
> Reasoning: The role receives scoped business questions and delivers solutions to stakeholder-defined needs, with minimal indication of strategic direction-setting.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "interest in advanced analytics and AI applications"
> Verified: ✓ found in JD
> Reasoning: The phrase 'interest in advanced analytics' is vague preference language with no expectation that the candidate use or build AI tools.

**Run 2:** `none` ✗
> Quote: "interest in advanced analytics and AI applications"
> Verified: ✓ found in JD
> Reasoning: Vague interest statement without expectation of AI capability or core skill requirement for the candidate.

**Run 3:** `none` ✗
> Quote: "interest in advanced analytics and AI applications"
> Verified: ✓ found in JD
> Reasoning: The phrase 'interest in' is a vague preference signal per the framework rules; no concrete AI skill (coding tools, enablement, or agentic workflows) is expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "monitors data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Data quality is mentioned only as a passive monitoring responsibility with no testing frameworks, data contracts, or quality ownership practices named.

**Run 2:** `absent` ✗
> Quote: "No testing practices, data contracts, or testing frameworks mentioned in JD"
> Verified: ⚠ NOT found verbatim
> Reasoning: JD mentions data quality monitoring and governance but not testing frameworks, dbt tests, data contracts, or quality assurance practices.

**Run 3:** `responsibility` ✗
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: The candidate is assigned responsibility for monitoring and maintaining data quality standards through governance oversight, framing it as an accountability owned by the role.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

⚠ **LLM inconsistency**: runs gave ['absent', 'absent', 'responsibility']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: GDPR compliance and data governance elevate concern above purely delivery-focused roles, but the primary framing emphasizes dashboards and models over preventing bad outcomes.

**Run 2:** `high` ✗
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: Emphasis on GDPR compliance, data quality governance, and preventing regulatory/compliance failures indicates strong loss-aversion framing around regulatory risk.

**Run 3:** `moderate` ✗
> Quote: "monitors data quality and governance including GDPR compliance"
> Verified: ✓ found in JD
> Reasoning: Compliance (GDPR) and quality concerns are present but mentioned once in a single responsibility, secondary to the primary framing of delivering dashboards and solutions.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'moderate']
