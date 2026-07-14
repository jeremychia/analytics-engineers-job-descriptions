# Trace: 2026-06-30_doodle_growth-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Growth Analytics Engineer — Doodle

**URL:** https://careers.doodle.com/jobs/7975504-growth-analytics-engineer
**Location:** Berlin, London (Hybrid)
**Date Posted:** 2026-06-30

---

Growth Analytics Engineer

Doodle | Berlin, London | Hybrid

About Doodle
Founded in 2007, Doodle operates as a B2B SaaS scheduling platform with teams across Zurich, Berlin, Belgrade, and remote locations. The company emphasizes diversity and equal employment opportunities.

The Role
We are looking for a Growth Analytics Engineer to own analytics across Doodle's self serve Product Led Growth business and Enterprise Revenue organisation, connecting product usage with commercial performance.

Key Responsibilities

Growth Analytics
- Own analytics across Doodle's self serve Product Led Growth business and Enterprise Revenue organisation
- Connect product usage with commercial performance

Business Intelligence
- Define KPIs and design dashboards
- Establish trusted business metrics with cross-functional leaders

Data Products
- Build datasets and reporting models to eliminate manual processes
- Improve data accessibility across the organisation

Business Insights & Experimentation
- Conduct analyses on customer cohorts
- Support growth experiments
- Evaluate AI effectiveness

Requirements
- 5+ years in Analytics Engineering, Growth Analytics, or similar SaaS roles
- Advanced SQL proficiency
- Python or R experience
- Familiarity with dbt, Redshift, GA4, HubSpot, Looker, or Tableau
- Understanding of subscription metrics, funnel analysis, KPI frameworks, and experimentation
- Strong communication abilities across technical and non-technical audiences

Hiring Process
- Application review with assessment
- Hiring manager interview
- Technical case study
- Cross-functional interview
- Executive/HR interviews
- Reference checks

Important: We can only consider applicants who have the right to work in Germany or the United Kingdom. We are unable to sponsor visas or support relocation for this position.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 0 | 0 | 1 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | recruiter | recruiter | recruiter | 100% | ✗ |
| stakeholder_orientation | mixed | mixed | commercial | commercial | 33% | ✗ |
| autonomy_level | strategic | mixed | mixed | mixed | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Establish trusted business metrics with cross-functional leaders"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize building reliable, structured systems ('trusted business metrics', 'eliminate manual processes') with no velocity-focused language like 'fast-paced' or 'move quickly'.

**Run 2:** `rigour` ✗
> Quote: "Establish trusted business metrics with cross-functional leaders"
> Verified: ✓ found in JD
> Reasoning: The single rigour signal 'trusted' establishes reliability as a core value, while the JD contains no velocity signals like 'fast-paced' or 'rapid delivery'.

**Run 3:** `rigour` ✗
> Quote: "Establish trusted business metrics with cross-functional leaders"
> Verified: ✓ found in JD
> Reasoning: The emphasis on 'trusted' metrics and 'define KPIs' prioritizes correctness and rigor over speed; there are no velocity signals like 'fast-paced' or 'rapid delivery.'

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Connect product usage with commercial performance"
> Verified: ✓ found in JD
> Reasoning: The role impacts business decisions around revenue and growth but lacks explicit financial reporting, regulatory, or compliance language that would elevate it to high risk.

**Run 2:** `moderate` ✓
> Quote: "Connect product usage with commercial performance"
> Verified: ✓ found in JD
> Reasoning: Data informs commercial and business decisions but the JD contains no signals of regulatory compliance, financial reporting, or audit requirements typical of high-risk roles.

**Run 3:** `moderate` ✓
> Quote: "Connect product usage with commercial performance"
> Verified: ✓ found in JD
> Reasoning: The role tracks commercial/revenue metrics without explicit financial reporting, compliance, or regulatory language, placing it at moderate business decision risk rather than high financial or regulatory risk.

### collaboration_width
**Manual:** `2`

**Run 1:** `0` ✗
> Quote: "No explicit named collaboration partners identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: While the role serves Product Led Growth and Enterprise Revenue domains, no distinct named partner teams are explicitly listed as collaboration partners.

**Run 2:** `0` ✗
> Quote: "No named partner teams explicitly identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD references business units (PLG, Enterprise Revenue) and 'cross-functional leaders' but does not explicitly name specific partner functions like Product, Finance, or Sales teams.

**Run 3:** `1` ✗
> Quote: "Enterprise Revenue organisation"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names the Revenue function as a core stakeholder the role owns analytics for; no other named partner teams are identified.

⚠ **Disagreement**: manual=`2` vs LLM majority=`0`

⚠ **LLM inconsistency**: runs gave ['0', '0', '1']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Build datasets and reporting models to eliminate manual processes"
> Verified: ✓ found in JD
> Reasoning: The responsibility to eliminate existing manual processes and improve data accessibility indicates an established data function that needs scaling rather than a greenfield build.

**Run 2:** `mid` ✓
> Quote: "Build datasets and reporting models to eliminate manual processes; Improve data accessibility across the organisation"
> Verified: ✓ found in JD
> Reasoning: The focus on improving and scaling existing systems, combined with a specialized Growth Analytics Engineer role, indicates an established data function that is expanding rather than building from zero.

**Run 3:** `mid` ✓
> Quote: "Improve data accessibility across the organisation"
> Verified: ✓ found in JD
> Reasoning: The emphasis on improving existing accessibility and eliminating manual processes signals a data function that exists but is growing and refining its delivery.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `recruiter` ✗
> Quote: "Define KPIs and design dashboards"
> Verified: ✓ found in JD
> Reasoning: The responsibilities rely on generic action verbs without technical specificity that someone doing this job would include, typical of recruiter-written JDs.

**Run 2:** `recruiter` ✗
> Quote: "Familiarity with dbt, Redshift, GA4, HubSpot, Looker, or Tableau"
> Verified: ✓ found in JD
> Reasoning: Tools are listed without specific application context or integration patterns, and responsibilities use generic action verbs typical of recruitment templates rather than insider technical depth.

**Run 3:** `recruiter` ✗
> Quote: "Build datasets and reporting models to eliminate manual processes; Improve data accessibility across the organisation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic action verbs and operational framing without the specific technical context, workflow details, or scale/volume information that indicates hiring manager authorship.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`recruiter`

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Own analytics across Doodle's self serve Product Led Growth business and Enterprise Revenue organisation, connecting product usage with commercial performance"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves both product/growth teams (PLG business, experiments) and commercial/revenue teams (Enterprise Revenue, commercial performance) with roughly equal emphasis.

**Run 2:** `commercial` ✗
> Quote: "Own analytics across Doodle's self serve Product Led Growth business and Enterprise Revenue organisation"
> Verified: ✓ found in JD
> Reasoning: The two explicitly named stakeholder organizations (PLG and Enterprise Revenue) are both revenue and go-to-market focused, with commercial performance as the primary output frame.

**Run 3:** `commercial` ✗
> Quote: "Enterprise Revenue organisation"
> Verified: ✓ found in JD
> Reasoning: The role explicitly owns analytics for the Enterprise Revenue organisation, positioning commercial performance and revenue growth as the primary stakeholder focus.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`commercial`

⚠ **LLM inconsistency**: runs gave ['mixed', 'commercial', 'commercial']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `mixed` ✗
> Quote: "Own analytics across Doodle's self serve Product Led Growth business"
> Verified: ✓ found in JD
> Reasoning: The role opens with 'own analytics' signaling strategic direction-setting, but many responsibilities use execution-oriented language like 'support growth experiments' and 'conduct analyses'.

**Run 2:** `mixed` ✗
> Quote: "Own analytics across Doodle's self serve Product Led Growth business and Enterprise Revenue organisation"
> Verified: ✓ found in JD
> Reasoning: Strategic verbs like 'Own' and 'Define' indicate domain ownership, but execution verbs like 'Support' and 'Conduct' in subsequent responsibilities indicate executing direction set by others.

**Run 3:** `mixed` ✗
> Quote: "Own analytics across Doodle's self serve Product Led Growth business and Enterprise Revenue organisation"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of analytics direction ('Own analytics', 'Define KPIs', 'Establish metrics') with execution work ('Conduct analyses', 'Support growth experiments').

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`mixed`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: 'Evaluate AI effectiveness' refers to assessing product features in experiments, not an expectation that the candidate demonstrate AI skills like coding agents or AI infrastructure building.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: 'Evaluate AI effectiveness' refers to assessing product AI capability rather than expecting the candidate to use AI tools for their work or build AI infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: 'Evaluate AI effectiveness' is a measurement task, not a requirement for the candidate to possess AI coding, GenAI infrastructure, or ML development skills.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: While 'trusted business metrics' implies quality, there is no mention of testing frameworks, data contracts, observability, or data quality practices.

**Run 2:** `absent` ✗
> Quote: "Establish trusted business metrics with cross-functional leaders"
> Verified: ✓ found in JD
> Reasoning: While trustworthiness is valued in the metrics, no testing practices, data quality frameworks, data contracts, or observability tools are explicitly named or owned as a responsibility.

**Run 3:** `absent` ✗
> Quote: "Build datasets and reporting models to eliminate manual processes"
> Verified: ✓ found in JD
> Reasoning: No testing, data quality frameworks, data contracts, or observability practices are mentioned in the responsibilities.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed in capability and delivery terms with no risk register, compliance language, or fear-based motivation for role design.

**Run 2:** `moderate` ✗
> Quote: "Establish trusted business metrics with cross-functional leaders"
> Verified: ✓ found in JD
> Reasoning: Trust and reliability are valued concerns but are secondary to delivery and impact, typical of moderate loss aversion in a delivery-oriented analytics role rather than a compliance or risk-dominated framing.

**Run 3:** `moderate` ✗
> Quote: "Establish trusted business metrics with cross-functional leaders"
> Verified: ✓ found in JD
> Reasoning: The mention of 'trusted' metrics signals concern for reliability and preventing bad decisions, but without explicit compliance, audit, or systematic risk-prevention language indicating high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['none', 'moderate', 'moderate']
