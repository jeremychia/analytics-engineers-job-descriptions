# Trace: 2026-07-02_fullenrich_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — FullEnrich

**URL:** https://www.linkedin.com/jobs/view/analytics-engineer-at-fullenrich-4404764125/
**Location:** Paris, France
**Date Posted:** 2026-07-02

---

# Analytics Engineer at FullEnrich

Location: Paris, Ile-de-France, France
Salary: Not stated
Seniority Level: Entry level (as listed on LinkedIn, though role is described as a senior first data hire)
Employment Type: Full-time

## Company Overview
FullEnrich aggregates 20+ data providers into a single waterfall system to deliver contact enrichment services. The company serves 3,500+ customers including major firms like AWS and Shopify, and operates profitably.

## Role Summary
This is FullEnrich's inaugural dedicated data hire. The position bridges data infrastructure and business operations, with the successful candidate reporting directly to Simon (RevOps). The role involves owning the data layer end-to-end while building foundational systems for organizational growth.

## Key Responsibilities
- Maintain and enhance the existing dbt/BigQuery data stack
- Design data models ensuring reliable access to the metrics across Finance, Marketing, RevOps, Sales, and Support teams
- Create self-serve dashboards using Basedash for metric consumption
- Conduct analytical work addressing business problems including provider cost/margin analysis, activation scoring, credit consumption pattern analysis
- Implement reverse ETL pipelines pushing operational data to systems like Intercom and HubSpot
- Write tests and maintain documentation standards

## Required Experience & Skills
- 4+ years in analytics engineering, data engineering, or senior data analysis
- Proven ability conducting end-to-end analyses for demanding stakeholders
- Strong SQL proficiency in BigQuery or equivalent platforms
- Active use of AI tools (Cursor, Claude) for work augmentation
- Solid understanding of SaaS metrics (ARR, churn, activation, unit economics)
- Builder mindset preferring automation over repetition
- Comfort with ambiguity and rigorous data quality standards

## Bonus Qualifications
- BigQuery-specific expertise (materialized views, partitioning, clustering)
- Segment platform familiarity as data source and reverse ETL tool
- Experience in fast-moving startup environments

## Technology Stack
Data Warehouse: BigQuery
Transformation: dbt Cloud
Ingestion: Fivetran and Airbyte
Reverse ETL: Segment
BI Tool: Basedash (LLM-native)
Development: Cursor or Claude Code with AI assistance

## Hiring Process
1. Initial call (45 minutes) with Simon
2. Technical case study (1 hour)
3. Founders' interview

Culture: high-ownership, entrepreneurial approach with rapid execution, business-focused outcomes, and autonomous decision-making with full scope ownership.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 5 | 5 | 5 | 5 | 100% | ✓ |
| data_team_maturity | early | early | early | early | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | hiring_manager | hiring_manager | 33% | ✓ |
| stakeholder_orientation | mixed | commercial | commercial | commercial | 100% | ✗ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Comfort with ambiguity and rigorous data quality standards"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes reliable access to metrics, testing requirements, and rigorous data quality standards, outweighing secondary references to fast-moving startup environments in the bonus section.

**Run 2:** `rigour` ✗
> Quote: "Write tests and maintain documentation standards"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes testing, documentation, and rigorous data quality standards in core responsibilities, with velocity signals appearing only in bonus qualifications and culture description.

**Run 3:** `rigour` ✗
> Quote: "Write tests and maintain documentation standards"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes testing, documentation standards, and rigorous data quality standards as core expectations, without corresponding velocity or shipping language in the main responsibilities.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Conduct analytical work addressing business problems including provider cost/margin analysis, activation scoring, credit consumption pattern analysis"
> Verified: ✓ found in JD
> Reasoning: Data errors affect business operations and revenue metrics but lack explicit regulatory, compliance, or financial reporting language.

**Run 2:** `moderate` ✓
> Quote: "Design data models ensuring reliable access to the metrics across Finance, Marketing, RevOps, Sales, and Support teams"
> Verified: ✓ found in JD
> Reasoning: Data errors would affect multiple business operations and decisions but without regulatory exposure or direct financial reporting consequences.

**Run 3:** `moderate` ✓
> Quote: "Design data models ensuring reliable access to the metrics across Finance, Marketing, RevOps, Sales, and Support teams"
> Verified: ✓ found in JD
> Reasoning: The role serves multiple business teams for operational and commercial reporting without explicit financial reporting, compliance, or regulatory language that would indicate high risk.

### collaboration_width
**Manual:** `5`

**Run 1:** `5` ✓
> Quote: "Finance; Marketing; RevOps; Sales; Support"
> Verified: ✓ found in JD
> Reasoning: Five named teams are explicitly listed as stakeholders in the metrics design responsibility.

**Run 2:** `5` ✓
> Quote: "Finance; Marketing; RevOps; Sales; Support"
> Verified: ✓ found in JD
> Reasoning: Five distinct business functions are explicitly named as primary collaborators and metric consumers in the responsibilities section.

**Run 3:** `5` ✓
> Quote: "Finance; Marketing; RevOps; Sales; Support"
> Verified: ✓ found in JD
> Reasoning: Five distinct teams are explicitly named as primary audiences for the data models and analytical work.

### data_team_maturity
**Manual:** `early`

**Run 1:** `early` ✓
> Quote: "This is FullEnrich's inaugural dedicated data hire."
> Verified: ✓ found in JD
> Reasoning: The company is establishing its data function for the first time, despite having existing dbt/BigQuery infrastructure already in place.

**Run 2:** `early` ✓
> Quote: "This is FullEnrich's inaugural dedicated data hire"
> Verified: ✓ found in JD
> Reasoning: The explicit designation as the first dedicated data hire is the definitive early-stage signal despite existing infrastructure from prior ad-hoc setup.

**Run 3:** `early` ✓
> Quote: "This is FullEnrich's inaugural dedicated data hire"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly identifies this as the first dedicated data role tasked with building foundational systems, despite existing technology infrastructure.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Maintain and enhance the existing dbt/BigQuery data stack; Conduct analytical work addressing business problems including provider cost/margin analysis, activation scoring, credit consumption pattern analysis"
> Verified: ✓ found in JD
> Reasoning: The JD combines technical specificity around named tools and analytical domains with generic action verbs like design and conduct.

**Run 2:** `hiring_manager` ✓
> Quote: "provider cost/margin analysis, activation scoring, credit consumption pattern analysis"
> Verified: ✓ found in JD
> Reasoning: The specific analytical domains and methodologies named show the hiring manager knows exactly what analytical work will be performed on a Tuesday, not generic boilerplate responsibilities.

**Run 3:** `hiring_manager` ✓
> Quote: "Conduct analytical work addressing business problems including provider cost/margin analysis, activation scoring, credit consumption pattern analysis"
> Verified: ✓ found in JD
> Reasoning: The responsibilities include specific named analyses and SaaS metrics (ARR, churn, activation, unit economics) that reflect someone familiar with the actual work, alongside detailed technical context.

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'hiring_manager']

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `commercial` ✗
> Quote: "reporting directly to Simon (RevOps)"
> Verified: ✓ found in JD
> Reasoning: The role reports to RevOps with reverse ETL pipelines to commercial systems (Intercom, HubSpot), indicating primary service to revenue operations and customer-facing functions.

**Run 2:** `commercial` ✗
> Quote: "Design data models ensuring reliable access to the metrics across Finance, Marketing, RevOps, Sales, and Support teams"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves revenue operations (RevOps, Sales, Marketing) with reverse ETL to customer-facing systems (Intercom, HubSpot), indicating commercial GTM orientation rather than FP&A or product focus.

**Run 3:** `commercial` ✗
> Quote: "Implement reverse ETL pipelines pushing operational data to systems like Intercom and HubSpot"
> Verified: ✓ found in JD
> Reasoning: The primary stakeholders and output targets are commercial and revenue operations functions, with reverse ETL routing to sales (HubSpot) and customer success (Intercom) platforms.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`commercial`

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "autonomous decision-making with full scope ownership"
> Verified: ✓ found in JD
> Reasoning: The role is framed as owning the data layer end-to-end and building foundational systems with explicit emphasis on autonomous decision-making and full scope ownership.

**Run 2:** `strategic` ✓
> Quote: "owning the data layer end-to-end while building foundational systems for organizational growth"
> Verified: ✓ found in JD
> Reasoning: Responsibility for owning the entire data layer and establishing foundational systems, combined with cultural emphasis on autonomous full-scope ownership, demonstrates strategic autonomy over execution.

**Run 3:** `strategic` ✓
> Quote: "owning the data layer end-to-end while building foundational systems for organizational growth"
> Verified: ✓ found in JD
> Reasoning: The role is framed as owning and building the data function for the organization, not executing against predefined priorities, with direct reporting to a business leader.

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Active use of AI tools (Cursor, Claude) for work augmentation"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to actively use AI coding tools like Cursor and Claude to accelerate their own development work, not build AI infrastructure.

**Run 2:** `ai_user` ✗
> Quote: "Active use of AI tools (Cursor, Claude) for work augmentation"
> Verified: ✓ found in JD
> Reasoning: The candidate is explicitly required to use AI coding tools to accelerate their own development work, a personal productivity enhancement rather than building AI-ready data infrastructure.

**Run 3:** `ai_user` ✗
> Quote: "Active use of AI tools (Cursor, Claude) for work augmentation"
> Verified: ✓ found in JD
> Reasoning: The candidate is explicitly expected to use AI coding tools to accelerate their own development work.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Write tests and maintain documentation standards"
> Verified: ✓ found in JD
> Reasoning: Testing is listed as an explicit responsibility the candidate owns in the key responsibilities section, framed as an action verb.

**Run 2:** `responsibility` ✗
> Quote: "Write tests and maintain documentation standards"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as an owned responsibility with an action verb in the core responsibilities section, not merely listed as a tool in a skill requirement.

**Run 3:** `responsibility` ✗
> Quote: "Write tests and maintain documentation standards"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as an owned responsibility of the candidate with an action verb, not merely listed as a tool or skill.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Comfort with ambiguity and rigorous data quality standards"
> Verified: ✓ found in JD
> Reasoning: Data quality and reliability are emphasized as operational standards to maintain, but without regulatory, compliance, or high-consequence risk language.

**Run 2:** `moderate` ✗
> Quote: "ensuring reliable access to the metrics"
> Verified: ✓ found in JD
> Reasoning: Operational reliability is explicitly framed as a requirement, suggesting fear of pipeline outages or data failures, but without compliance or stakeholder trust language that would indicate high-level risk framing.

**Run 3:** `moderate` ✗
> Quote: "rigorous data quality standards"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are concerns for operational reliability, but the JD lacks compliance, regulatory, or stakeholder-trust language that would indicate high loss aversion framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
