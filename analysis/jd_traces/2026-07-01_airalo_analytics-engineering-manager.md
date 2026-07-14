# Trace: 2026-07-01_airalo_analytics-engineering-manager

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineering Manager — Airalo

**URL:** https://jobs.lever.co/airalo/3dd4a880-d804-4099-8d69-df0833a30838
**Location:** Remote (Spain / United Kingdom)
**Date Posted:** 2026-07-01
**Salary:** 110,000–140,000 GBP

---

Analytics Engineering Manager at Airalo

Location: Spain / United Kingdom (Remote-first)
Employment Type: Full-time / Employee
Salary: UK: £110,000 to £140,000 | Spain: €100,000 - €125,000

About Airalo
Airalo is the world's first eSIM store that helps people connect in over 200+ countries and regions across the globe. We are building the next digital service that revolutionises the telecom industry. We are a travel-tech company and an equal-opportunity environment. Our team is spread across 50+ countries and six continents.

About the Role
We're looking for an Analytics Engineering Manager to lead our self-service analytics infrastructure and data modelling practice at Airalo. You'll own the foundations that make analytics possible at scale: the semantic layer, core data models, dashboards, and the self-service platform (Lightdash) that enables teams across the business to answer their own questions. This is a building role — you'll establish how we model data, how we govern metrics, and how we roll out self-service capabilities across a 20M+ user business operating in 190+ countries.

You'll report to the Director of Data and partner closely with analytics teams and stakeholders across the business, translating their analytical needs into scalable, production-quality data models. Success looks like business users confidently answering their own questions, a governed semantic layer that analytics teams trust, and a self-service platform that replaces our patchwork of legacy reporting tools and robust data models that scale without use cases.

What you'll Do:
- Lead and grow a team of analytics engineers (currently 2, scaling to 4 this year), building a culture of craft, documentation, and user empathy
- Drive the rollout and adoption of Lightdash as our single source of truth for business reporting, based on a unified KPI framework currently in progress
- Own all dashboard development initially — from executive reporting to operational views, with support from analysts — then fully transition the ownership to analysts as self-service matures, building the templates and processes that enable this shift
- Partner with stakeholders to translate reporting needs into well-designed, maintainable data products
- Design and deliver training and enablement programs for business users across all functions
- Own and evolve our core dbt models and semantic layer to support key analytical use cases: customer LTV, acquisition effectiveness, retention, funnel performance, and financial reporting
- Establish governance and standards: metric definitions, dashboard design patterns, modelling practices, testing frameworks, and documentation
- Partner with analysts to translate their needs into scalable data assets, and with Data Engineering on pipeline reliability and data quality
- Partner with Data Engineering on pipeline reliability, data quality, and infrastructure decisions
- Balance rigour with delivery speed — we're still building foundations while the business moves fast

Must have:
- 5+ years in analytics engineering, data engineering, or technical analytics roles, with 2+ years of people management experience — ideally building or scaling a team
- You're a hands-on leader who partners with senior leadership on strategy and priorities while owning execution and day-to-day team decisions
- Deep proficiency in dbt — you've built and scaled dbt projects, not just contributed to them
- Strong SQL and experience with at least one programming language (Python preferred)
- Experience implementing or heavily using a semantic layer / metrics layer (Lightdash, Looker, MetricFlow, or similar)
- Track record of driving self-service analytics adoption — training programs, documentation, stakeholder enablement
- Familiarity …[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | mixed | mixed | mixed | 100% | ✓ |
| domain_risk | moderate | high | moderate | moderate | 33% | ✓ |
| collaboration_width | 3 | 2 | 2 | 2 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Balance rigour with delivery speed — we're still building foundations while the business moves fast"
> Verified: ✓ found in JD
> Reasoning: The JD establishes governance standards and testing frameworks (rigour signals) while explicitly stating the need to balance with the fast-moving business (velocity signal).

**Run 2:** `mixed` ✓
> Quote: "Balance rigour with delivery speed — we're still building foundations while the business moves fast"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly frames the role as balancing both rigour (governance, testing frameworks, production-quality) and velocity (move fast, building phase), with both orientations genuinely present.

**Run 3:** `mixed` ✓
> Quote: "Balance rigour with delivery speed — we're still building foundations while the business moves fast"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly acknowledges both orientations: rigour signals throughout (governance, standards, testing frameworks, production-quality, data quality, pipeline reliability) are genuinely balanced against velocity signals (the business moves fast, building role), making this mixed.

### domain_risk
**Manual:** `moderate`

**Run 1:** `high` ✗
> Quote: "Own and evolve our core dbt models and semantic layer to support key analytical use cases: customer LTV, acquisition effectiveness, retention, funnel performance, and financial reporting"
> Verified: ✓ found in JD
> Reasoning: Financial reporting is explicitly named as a key analytical use case, indicating a high-risk domain where data errors directly impact financial statements and decision-making.

**Run 2:** `moderate` ✓
> Quote: "customer LTV, acquisition effectiveness, retention, funnel performance, and financial reporting"
> Verified: ✓ found in JD
> Reasoning: The JD mentions financial reporting as a use case but frames the role around business analytics and self-serve infrastructure without regulatory or compliance language.

**Run 3:** `moderate` ✓
> Quote: "customer LTV, acquisition effectiveness, retention, funnel performance, and financial reporting"
> Verified: ✓ found in JD
> Reasoning: Financial reporting is explicitly named as an analytical use case, but the sector is travel-tech SaaS (not fintech/banking/insurance) and risk is framed operationally rather than as regulatory or compliance concern.

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'moderate']

### collaboration_width
**Manual:** `3`

**Run 1:** `2` ✗
> Quote: "analytics teams; Data Engineering"
> Verified: ✓ found in JD
> Reasoning: Two distinct named partner functions are explicitly mentioned: Analytics (referred to as 'analytics teams' and 'analysts') and Data Engineering; references to 'stakeholders' and 'all functions' are too generic to count.

**Run 2:** `2` ✗
> Quote: "Partner with analysts to translate their needs into scalable data assets, and with Data Engineering on pipeline reliability"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names two distinct collaboration functions: analysts and Data Engineering.

**Run 3:** `2` ✗
> Quote: "analytics teams; Data Engineering"
> Verified: ✓ found in JD
> Reasoning: Two distinct named partner functions are explicitly mentioned: analytics teams/analysts as a collaborating group, and Data Engineering as a partner on pipeline and infrastructure work.

⚠ **Disagreement**: manual=`3` vs LLM majority=`2`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Lead and grow a team of analytics engineers (currently 2, scaling to 4 this year)"
> Verified: ✓ found in JD
> Reasoning: The analytics engineering team already exists and is actively growing with named tools (dbt, Lightdash, Fivetran) in use, indicating a mid-stage function building on existing infrastructure rather than establishing from zero.

**Run 2:** `mid` ✓
> Quote: "Own and evolve our core dbt models and semantic layer to support key analytical use cases"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (dbt models, semantic layer) combined with a 2-person team scaling to 4 indicates established infrastructure being grown rather than built from scratch.

**Run 3:** `mid` ✓
> Quote: "This is a building role — you'll establish how we model data, how we govern metrics, and how we roll out self-service capabilities"
> Verified: ✓ found in JD
> Reasoning: A team exists with real tools deployed (dbt, Lightdash, BigQuery, Fivetran) and a reporting structure (Director of Data), but the framing is explicitly about building and establishing foundations rather than maintaining mature operations.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Own and evolve our core dbt models and semantic layer to support key analytical use cases: customer LTV, acquisition effectiveness, retention, funnel performance, and financial reporting"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about named methodologies (dbt, semantic layer), specific use cases (LTV, attribution, funnel), and contextual knowledge of their current state ('patchwork of legacy reporting tools', '20M+ user business') demonstrates hiring manager-level domain expertise.

**Run 2:** `hiring_manager` ✓
> Quote: "Own all dashboard development initially — from executive reporting to operational views, with support from analysts — then fully transition the ownership to analysts as self-service matures, building the templates and processes that enable this shift"
> Verified: ✓ found in JD
> Reasoning: This responsibility contains precise methodology and workflow specificity reflecting hands-on experience building analytics infrastructure, not generic boilerplate.

**Run 3:** `hiring_manager` ✓
> Quote: "customer LTV, acquisition effectiveness, retention, funnel performance, and financial reporting"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section contains specific use cases, named tools with application context (Lightdash, dbt models, semantic layer), scale numbers (20M+ users, team scaling from 2 to 4), and detailed methodologies (dimensional modelling, data warehouse design patterns) that indicate deep technical knowledge from someone who has done this work.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "You'll own the foundations that make analytics possible at scale: the semantic layer, core data models, dashboards, and the self-service platform (Lightdash) that enables teams across the business to answer their own questions."
> Verified: ✓ found in JD
> Reasoning: The role is primarily focused on building and evolving the data infrastructure (semantic layer, dbt models, self-serve platform) that serves the data function itself and enables downstream analytics consumers.

**Run 2:** `internal_data` ✓
> Quote: "Success looks like business users confidently answering their own questions, a governed semantic layer that analytics teams trust, and a self-service platform that replaces our patchwork of legacy reporting tools"
> Verified: ✓ found in JD
> Reasoning: The role's primary audience is the analytics function itself and business users consuming self-serve infrastructure, not a specific business team like commercial, product, or finance.

**Run 3:** `internal_data` ✓
> Quote: "the semantic layer, core data models, dashboards, and the self-service platform (Lightdash) that enables teams across the business to answer their own questions"
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building internal data infrastructure and platforms that other analysts, data engineers, and business users consume, rather than serving a specific business function like commercial, product, or finance.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "you'll establish how we model data, how we govern metrics, and how we roll out self-service capabilities across a 20M+ user business"
> Verified: ✓ found in JD
> Reasoning: The role is expected to establish direction and define practices for data modeling and governance rather than execute direction set by others.

**Run 2:** `strategic` ✓
> Quote: "you'll establish how we model data, how we govern metrics, and how we roll out self-service capabilities across a 20M+ user business"
> Verified: ✓ found in JD
> Reasoning: The role is framed around establishing and defining the analytics engineering practice and direction, not executing against existing strategy.

**Run 3:** `strategic` ✓
> Quote: "you'll establish how we model data, how we govern metrics, and how we roll out self-service capabilities"
> Verified: ✓ found in JD
> Reasoning: The role uses consistent strategic ownership verbs (establish, own, lead, drive, shape) and is positioned as defining how analytics functions work for the organization, not executing against externally set priorities.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding assistants, or AI-enabled data capabilities; no AI skill is expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, agentic workflows, or AI-powered systems that the candidate would be expected to use or build.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted workflows, GenAI applications, or AI-enabled data infrastructure — only standard analytics engineering work.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Establish governance and standards: metric definitions, dashboard design patterns, modelling practices, testing frameworks, and documentation"
> Verified: ✓ found in JD
> Reasoning: Testing frameworks are explicitly listed as part of the candidate's governance ownership using the action verb 'establish', making this a responsibility the candidate is expected to own and define.

**Run 2:** `responsibility` ✗
> Quote: "Establish governance and standards: metric definitions, dashboard design patterns, modelling practices, testing frameworks, and documentation"
> Verified: ✓ found in JD
> Reasoning: Testing frameworks are framed as something the candidate will establish and own as a core responsibility, not merely a tool listed in requirements.

**Run 3:** `responsibility` ✗
> Quote: "Establish governance and standards: metric definitions, dashboard design patterns, modelling practices, testing frameworks, and documentation"
> Verified: ✓ found in JD
> Reasoning: Testing frameworks are explicitly listed as something the candidate will establish and own as part of governance responsibilities, not merely a tool they should be familiar with.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Partner with Data Engineering on pipeline reliability and data quality"
> Verified: ⚠ NOT found verbatim
> Reasoning: Data quality and pipeline reliability are mentioned as secondary concerns alongside the primary framing of building and enabling self-service analytics infrastructure, indicating moderate rather than high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Partner with Data Engineering on pipeline reliability, data quality, and infrastructure decisions"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes operational reliability and data quality as concerns, but lacks regulatory, compliance, or strategic stakeholder trust language that would indicate high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "a governed semantic layer that analytics teams trust"
> Verified: ✓ found in JD
> Reasoning: The JD shows operational reliability and quality concerns (pipeline reliability, data quality, governance) but frames these as infrastructure-building priorities rather than loss-aversion or compliance risk prevention.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
