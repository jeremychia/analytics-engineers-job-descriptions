# Trace: 2026-06-30_hilo-by-aktiia_bi-strategic-analytics-lead

## JD text (fed to classifier, Layer B stripped)

```
# BI & Strategic Analytics Lead (m/f/d) — Hilo by Aktiia

**URL:** https://www.linkedin.com/jobs/view/4434494671/
**Location:** Germany (Berlin)
**Date Posted:** 2026-06-30

---

BI & Strategic Analytics Lead (m/f/d) - Hilo by Aktiia

Company: Hilo by Aktiia
Location: Germany (Berlin)
Employment Type: Full-time
Seniority Level: Mid-Senior level
Job Function: Finance
Industry: IT Services and IT Consulting

Position Summary
The role focuses on defining and executing Hilo's Business Intelligence strategy. The successful candidate will translate complex business challenges into scalable analytics solutions and serve as a strategic partner to multiple departments.

Core Responsibilities

Analytics & Reporting:
- Design and develop dashboards, KPI frameworks, and self-service analytics capabilities
- Deliver actionable insights supporting operational and strategic decisions
- Collaborate with business leaders on analytical opportunities
- Drive adoption of reporting tools across the organization

BI Strategy & Leadership:
- Define and execute the BI roadmap aligned with company objectives
- Own and evolve Hilo's Metabase platform as the central reporting source
- Establish governance frameworks and best practices
- Champion data-driven culture across the organization
- Act as analytics partner to Finance, Product, Commercial, Clinical, and Leadership teams

Business Performance & Strategic Analytics:
- Analyze customer acquisition, engagement, retention, and monetization
- Deliver insights informing commercial strategy and resource allocation
- Support leadership with forecasting and scenario modeling

Data Management & Governance:
- Maintain high standards for data quality and consistency
- Define business metrics and KPI definitions
- Partner with Data Engineering on data architecture

Stakeholder Management:
- Lead BI initiatives end-to-end from requirements to deployment
- Present insights through clear data storytelling to senior leadership

Requirements

Qualifications:
- Proven experience leading BI/Analytics initiatives in fast-paced environments
- Bachelor's degree in Data Analytics, Computer Science, Statistics, or related field
- Experience building solutions using Metabase, Power BI, Tableau, or similar platforms
- Proficiency in SQL and data modeling
- Experience with cloud data warehouses (Snowflake, BigQuery, Redshift, Azure Synapse)
- Understanding of ETL/ELT processes
- Strong communication and stakeholder management skills

Preferred Qualifications:
- Master's degree in relevant field
- Modern data stack technology experience
- Python or R proficiency
- Agile project management experience
- Relevant certifications (Metabase, Power BI, Tableau, Snowflake, etc.)

Success Metrics:
- High adoption of BI solutions across the organization
- Trusted, accurate, consistent reporting
- Increased self-service analytics
- Strong stakeholder satisfaction
- Timely BI initiative delivery with measurable business impact

Company Background:
Hilo by Aktiia addresses high blood pressure, which causes 18M deaths each year. The venture-backed company has raised over $96M and operates as a hybrid/remote-first organization headquartered in Neuchatel, Switzerland, with operations across 12 countries.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 5 | 6 | 6 | 5 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | recruiter | mixed | mixed | 33% | ✓ |
| stakeholder_orientation | mixed | commercial | mixed | mixed | 33% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Maintain high standards for data quality and consistency"
> Verified: ✓ found in JD
> Reasoning: Rigour signals (quality, governance, consistency, standards) substantially outweigh the single mention of 'fast-paced environments' in requirements.

**Run 2:** `rigour` ✓
> Quote: "Establish governance frameworks and best practices"
> Verified: ✓ found in JD
> Reasoning: The core responsibilities emphasize governance, quality standards, and consistency frameworks rather than speed or iteration.

**Run 3:** `rigour` ✓
> Quote: "Maintain high standards for data quality and consistency"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance frameworks, quality standards, and best practices with no velocity language, indicating a rigour-oriented role.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Deliver insights informing commercial strategy and resource allocation"
> Verified: ✓ found in JD
> Reasoning: Healthcare company context implies higher baseline risk, but JD lacks explicit compliance, regulatory, or financial reporting language, focusing instead on business intelligence.

**Run 2:** `moderate` ✗
> Quote: "Analyze customer acquisition, engagement, retention, and monetization"
> Verified: ✓ found in JD
> Reasoning: The role focuses on commercial and operational analytics rather than financial reporting, compliance, or regulatory requirements.

**Run 3:** `moderate` ✗
> Quote: "Analyze customer acquisition, engagement, retention, and monetization"
> Verified: ✓ found in JD
> Reasoning: While the healthcare sector might imply high risk, this JD focuses on commercial analytics and business metrics rather than regulatory, compliance, or financial reporting work.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `5`

**Run 1:** `6` ✗
> Quote: "Finance; Product; Commercial; Clinical; Leadership; Data Engineering"
> Verified: ✓ found in JD
> Reasoning: JD explicitly names six distinct partner functions across responsibilities and collaboration statements.

**Run 2:** `6` ✗
> Quote: "Finance; Product; Commercial; Clinical; Leadership; Data Engineering"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names six distinct partner functions in the responsibilities section.

**Run 3:** `5` ✓
> Quote: "Finance, Product, Commercial, Clinical, and Leadership teams"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names five distinct partner teams/functions that the role will serve as an analytics partner to.

⚠ **Disagreement**: manual=`5` vs LLM majority=`6`

⚠ **LLM inconsistency**: runs gave ['6', '6', '5']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Own and evolve Hilo's Metabase platform as the central reporting source"
> Verified: ✓ found in JD
> Reasoning: Existing named tool and platform suggest established function being evolved and scaled, not greenfield, but no indication of multiple specialized sub-teams.

**Run 2:** `mid` ✓
> Quote: "Own and evolve Hilo's Metabase platform as the central reporting source"
> Verified: ✓ found in JD
> Reasoning: The JD references an existing named BI platform to be evolved, indicating established data infrastructure rather than greenfield work.

**Run 3:** `mid` ✓
> Quote: "Own and evolve Hilo's Metabase platform as the central reporting source"
> Verified: ✓ found in JD
> Reasoning: The existing Metabase deployment, partnership with data engineering, and focus on scaling adoption indicate an established but growing data function.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `recruiter` ✗
> Quote: "Define and execute the BI roadmap aligned with company objectives"
> Verified: ✓ found in JD
> Reasoning: Generic action verbs and absence of specific operational context (scale, constraints, implementation challenges) despite named tools in requirements list.

**Run 2:** `mixed` ✓
> Quote: "Own and evolve Hilo's Metabase platform as the central reporting source"
> Verified: ✓ found in JD
> Reasoning: While most responsibilities use generic action verbs, the specific mention of maintaining an existing named platform suggests some hiring manager input, though generic boilerplate is also present.

**Run 3:** `mixed` ✓
> Quote: "Own and evolve Hilo's Metabase platform as the central reporting source; Define and execute the BI roadmap aligned with company objectives"
> Verified: ✓ found in JD
> Reasoning: The JD contains specific platform and strategy ownership responsibilities alongside generic collaboration verbs like 'collaborate with business leaders' and 'champion data-driven culture'.

⚠ **LLM inconsistency**: runs gave ['recruiter', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `commercial` ✗
> Quote: "Analyze customer acquisition, engagement, retention, and monetization"
> Verified: ✓ found in JD
> Reasoning: Primary responsibilities emphasize customer and revenue analytics over financial reporting or internal data platform work.

**Run 2:** `mixed` ✓
> Quote: "Act as analytics partner to Finance, Product, Commercial, Clinical, and Leadership teams"
> Verified: ✓ found in JD
> Reasoning: The role is positioned equally as a strategic partner to multiple business functions with no dominant stakeholder orientation.

**Run 3:** `mixed` ✓
> Quote: "Act as analytics partner to Finance, Product, Commercial, Clinical, and Leadership teams"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves multiple distinct stakeholder categories (finance, commercial, product, clinical, strategic leadership) with responsibilities split across forecasting, customer analytics, and platform ownership.

⚠ **LLM inconsistency**: runs gave ['commercial', 'mixed', 'mixed']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Define and execute the BI roadmap aligned with company objectives"
> Verified: ✓ found in JD
> Reasoning: Role is framed around setting direction and shaping the analytics function through strategic verbs: define, own, establish, champion.

**Run 2:** `strategic` ✓
> Quote: "Define and execute the BI roadmap aligned with company objectives"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes defining strategy and owning the BI function roadmap rather than executing work scoped by others.

**Run 3:** `strategic` ✓
> Quote: "Define and execute the BI roadmap aligned with company objectives"
> Verified: ✓ found in JD
> Reasoning: The role is framed around defining analytics strategy, establishing governance, owning platform evolution, and championing culture—all strategic direction-setting verbs.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI/ML pipelines, or AI-assisted development anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectation for the candidate to use or build AI infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding assistants, ML capabilities, or AI-ready infrastructure expected from the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Maintain high standards for data quality and consistency"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a core responsibility the candidate owns, though specific testing frameworks or data contracts are not explicitly named.

**Run 2:** `responsibility` ✗
> Quote: "Maintain high standards for data quality and consistency"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a core responsibility to maintain, though without explicit testing tool implementation details.

**Run 3:** `responsibility` ✗
> Quote: "Maintain high standards for data quality and consistency"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an owned responsibility through action verbs ('maintain', 'establish') in the core responsibilities section, not as a tool listed in requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Trusted, accurate, consistent reporting"
> Verified: ✓ found in JD
> Reasoning: Accuracy and stakeholder trust are important concerns, but secondary to primary framing of delivering insights and defining strategy; no compliance or regulatory risk language present.

**Run 2:** `moderate` ✗
> Quote: "Trusted, accurate, consistent reporting"
> Verified: ✓ found in JD
> Reasoning: Data quality and stakeholder trust are emphasized as central concerns, indicating moderate loss-aversion around operational reliability rather than regulatory compliance.

**Run 3:** `moderate` ✗
> Quote: "Trusted, accurate, consistent reporting"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and organizational trust in reporting are emphasized as success metrics, reflecting concern about bad data reaching decision-makers, but without regulatory or compliance risk language.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
