# Trace: 2026-07-02_photowall_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Photowall

**URL:** https://career.photowall.com/jobs/7750533-analytics-engineer
**Location:** Stockholm, Hybrid
**Date Posted:** 2026-07-02

---

# Analytics Engineer - Photowall

Company: Photowall
Location: Stockholm, Hybrid (3 days office, 2 days remote)
Salary: Not stated

## Responsibilities
Data Infrastructure & Pipelines
- Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation
- Integrate data from GA4, Klaviyo, marketing platforms, and backend systems into a centralized warehouse
- Build and maintain scalable data models serving both marketing and product use cases
- Establish monitoring and documentation protocols for data reliability

Analytics & Dashboards
- Design and maintain dashboards for Growth, Marketing, and Product teams
- Conduct ad-hoc analysis and executive reporting
- Support A/B testing and experimentation workflows

Event Tracking & Digital Analytics
- Implement event tracking via Google Tag Manager (GTM) and GA4
- Manage funnel analysis and cross-web tracking quality assurance

First-Party Data & Marketing Measurement
- Build and maintain the data infrastructure that feeds CRM (Klaviyo) and paid media channels
- Support attribution modeling and channel performance analysis

## Requirements
- 4-6 years in data analytics, analytics engineering, or hybrid role in e-commerce
- Strong SQL and BigQuery expertise; experience with dbt, Dataform, or similar transformation tools
- Proficiency with Looker (or a similar BI tool) and Funnel
- Strong communication skills - comfortable explaining technical concepts to non-technical stakeholders
- Fluent English

Nice to have: GA4, GTM experience; CRM and paid media platform familiarity

Interview Process & Team Structure: Not specified in posting

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 3 | 3 | 3 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | commercial | mixed | product | mixed | 33% | ✗ |
| autonomy_level | mixed | strategic | execution | mixed | 0% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Establish monitoring and documentation protocols for data reliability"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes establishing governance frameworks and data quality validation as core responsibilities, with no velocity language present.

**Run 2:** `rigour` ✗
> Quote: "Establish monitoring and documentation protocols for data reliability"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality validation, monitoring, and reliability as core expectations, with no velocity-oriented language present.

**Run 3:** `rigour` ✗
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, monitoring, and reliability as core expectations rather than speed or iteration pace.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Support attribution modeling and channel performance analysis"
> Verified: ✓ found in JD
> Reasoning: The role directly influences marketing and revenue operations decisions in an e-commerce context, but contains no financial reporting, compliance, or regulatory language typical of high-risk domains.

**Run 2:** `moderate` ✓
> Quote: "Build and maintain the data infrastructure that feeds CRM (Klaviyo) and paid media channels"
> Verified: ✓ found in JD
> Reasoning: E-commerce marketing analytics where data errors affect business decisions and marketing spend but lack financial reporting or regulatory compliance consequences.

**Run 3:** `moderate` ✓
> Quote: "Design and maintain dashboards for Growth, Marketing, and Product teams"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves business intelligence and operational reporting for marketing and product teams without explicit financial reporting or regulatory compliance requirements.

### collaboration_width
**Manual:** `2`

**Run 1:** `3` ✗
> Quote: "Growth; Marketing; Product teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams are explicitly listed as primary collaboration partners in the responsibilities section.

**Run 2:** `3` ✗
> Quote: "Design and maintain dashboards for Growth, Marketing, and Product teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams explicitly identified as primary stakeholders.

**Run 3:** `3` ✗
> Quote: "Design and maintain dashboards for Growth, Marketing, and Product teams"
> Verified: ✓ found in JD
> Reasoning: Growth, Marketing, and Product are three distinct named functions explicitly identified as collaboration partners.

⚠ **Disagreement**: manual=`2` vs LLM majority=`3`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation"
> Verified: ✓ found in JD
> Reasoning: The JD references specific, already-deployed tools (BigQuery) in maintenance and scaling contexts rather than building foundational infrastructure from zero.

**Run 2:** `mid` ✓
> Quote: "Build and maintain scalable data models serving both marketing and product use cases"
> Verified: ✓ found in JD
> Reasoning: Data function exists with named tools (BigQuery, dbt, Looker) already deployed; responsibilities focus on scaling and extending existing infrastructure rather than building from zero.

**Run 3:** `mid` ✓
> Quote: "Build and maintain scalable data models serving both marketing and product use cases"
> Verified: ✓ found in JD
> Reasoning: The JD references named tools (BigQuery, dbt) in responsibilities and implies existing infrastructure being scaled and improved rather than built from zero.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation"
> Verified: ✓ found in JD
> Reasoning: The JD contains technically precise specifications (named tools, explicit processes like scheduling/monitoring/validation) alongside generic recruiter language ('Conduct ad-hoc analysis', 'Support A/B testing') in the same section.

**Run 2:** `hiring_manager` ✓
> Quote: "Implement event tracking via Google Tag Manager (GTM) and GA4"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain specific technical context showing hands-on understanding of the GA4+GTM+BigQuery integration workflow.

**Run 3:** `mixed` ✗
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation; Implement event tracking via Google Tag Manager (GTM) and GA4"
> Verified: ✓ found in JD
> Reasoning: Responsibilities include technical specificity with named tools and context (BigQuery pipelines, GTM implementation, GA4) mixed with generic execution language like 'conduct ad-hoc analysis' and 'support A/B testing'.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `mixed` ✗
> Quote: "Design and maintain dashboards for Growth, Marketing, and Product teams; Build and maintain the data infrastructure that feeds CRM (Klaviyo) and paid media channels"
> Verified: ✓ found in JD
> Reasoning: The role equally emphasizes product analytics (A/B testing, experimentation, event tracking) and commercial measurement (CRM, paid media, attribution), with roughly balanced responsibility distribution.

**Run 2:** `product` ✗
> Quote: "Support A/B testing and experimentation workflows"
> Verified: ✓ found in JD
> Reasoning: The core technical work (event tracking, experimentation, funnel analysis) serves product analytics with commercial elements (attribution, paid media) in supporting roles.

**Run 3:** `mixed` ✗
> Quote: "Design and maintain dashboards for Growth, Marketing, and Product teams; Build and maintain the data infrastructure that feeds CRM (Klaviyo) and paid media channels"
> Verified: ✓ found in JD
> Reasoning: The role equally serves product-focused teams (Growth, Product, A/B testing) and commercial-focused teams (Marketing, attribution, paid media, CRM) with roughly equivalent responsibility weight.

⚠ **Disagreement**: manual=`commercial` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'product', 'mixed']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `strategic` ✗
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes ownership and establishment of core data systems and reliability standards, indicating strategic responsibility for infrastructure rather than execution of requests set by others.

**Run 2:** `execution` ✗
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation"
> Verified: ✓ found in JD
> Reasoning: The role owns execution of defined technical systems within boundaries set by Growth, Marketing, and Product teams rather than setting analytics strategy.

**Run 3:** `mixed` ✓
> Quote: "Own and maintain BigQuery data pipelines; Establish monitoring and documentation protocols; Design and maintain dashboards; Support A/B testing and experimentation workflows"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of data infrastructure (own, establish, design, build) with execution-oriented support for stakeholder analytics (support, conduct).

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`strategic`

⚠ **LLM inconsistency**: runs gave ['strategic', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI skills, LLMs, coding agents, or AI-assisted tools as candidate expectations.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted development, or AI data infrastructure expectations.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, AI-ready infrastructure, or AI system development expected of the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation"
> Verified: ✓ found in JD
> Reasoning: Data quality validation is explicitly framed as an owned responsibility within pipeline ownership, making the candidate accountable for defining and maintaining quality practices.

**Run 2:** `responsibility` ✗
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation"
> Verified: ✓ found in JD
> Reasoning: Data quality validation is framed as an owned responsibility with the action verb 'own', not merely a tool listed in requirements.

**Run 3:** `responsibility` ✗
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation; Establish monitoring and documentation protocols for data reliability"
> Verified: ✓ found in JD
> Reasoning: Data quality and monitoring are framed as owned responsibilities using ownership verbs (own, establish) rather than as tools listed in requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Establish monitoring and documentation protocols for data reliability"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data reliability and quality validation as core responsibilities, indicating concern about preventing operational data failures, though without compliance or regulatory framing.

**Run 2:** `moderate` ✗
> Quote: "Establish monitoring and documentation protocols for data reliability"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes operational reliability and preventing pipeline failures, but lacks regulatory, compliance, or stakeholder-trust-based risk framing.

**Run 3:** `moderate` ✗
> Quote: "Own and maintain BigQuery data pipelines, including scheduling, monitoring, and data quality validation; Establish monitoring and documentation protocols for data reliability"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and data quality monitoring as core concerns, indicating moderate loss aversion around pipeline stability and data accuracy rather than high-stakes compliance or stakeholder trust risks.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
