# Trace: 2026-06-30_plain-concepts_bi-specialist

## JD text (fed to classifier, Layer B stripped)

```
# BI Specialist — Plain Concepts

**URL:** https://www.linkedin.com/jobs/view/4431592813/
**Location:** Portugal (remote/hybrid not specified)
**Date Posted:** 2026-06-30

---

BI Specialist at Plain Concepts

Company: Plain Concepts
Position: BI Specialist
Location: Portugal
Employment Type: Full-time
Seniority Level: Mid-Senior
Posted: 1 hour ago

Job Overview

Plain Concepts seeks a professional who understands 'data as a product' rather than simply building reports. The role focuses on designing analytical layers where 'metrics depend on well-modeled, reliable data.'

Key Responsibilities

- Design and maintain BI solutions including reports, dashboards, and data models for decision-making
- Convert business needs into scalable data models and visualizations
- Build and optimize ETL/ELT processes for data availability
- Collaborate with Data Engineers on quality and performance
- Define KPIs with business stakeholders
- Enhance reporting solutions focusing on usability and performance
- Support data governance and documentation

Requirements

- Bachelor's degree in Computer Science, Information Systems, or related field
- 3+ years as BI Developer, Data Analyst, or Analytics Engineer
- Strong SQL and relational database skills
- Dashboard experience with Power BI, Tableau, or Looker
- Data modeling knowledge (star schema, snowflake schema)
- ETL/ELT pipeline design experience
- Cloud platform familiarity (Azure, AWS, Google Cloud) preferred
- Data warehousing principles knowledge
- Git version control experience valued
- Agile environment experience preferred
- Fluent English (written and spoken)

Industry: IT Services and IT Consulting

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 1 | 1 | 1 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | recruiter | mixed | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | mixed | internal_data | 33% | ✓ |
| autonomy_level | mixed | mixed | execution | execution | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "metrics depend on well-modeled, reliable data"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, governance, and reliable modeling as core expectations, with no velocity-oriented language about speed or rapid iteration.

**Run 2:** `rigour` ✓
> Quote: "metrics depend on well-modeled, reliable data"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes reliability, quality, and governance throughout with no velocity or speed language present.

**Run 3:** `rigour` ✓
> Quote: "Collaborate with Data Engineers on quality and performance"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes quality, governance, performance, and reliability ('metrics depend on well-modeled, reliable data') with no velocity signals like 'fast-paced' or 'move quickly'.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Design and maintain BI solutions including reports, dashboards, and data models for decision-making"
> Verified: ✓ found in JD
> Reasoning: This is standard business intelligence and operational reporting without financial reporting, regulatory, or compliance signals that would indicate high risk.

**Run 2:** `moderate` ✓
> Quote: "Define KPIs with business stakeholders"
> Verified: ✓ found in JD
> Reasoning: The role affects business decisions without explicit financial reporting, compliance, regulatory, or audit language that would indicate high risk.

**Run 3:** `moderate` ✓
> Quote: "Design and maintain BI solutions including reports, dashboards, and data models for decision-making"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making without explicit financial reporting, compliance, or regulatory signals typical of high-risk domains.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "Data Engineers"
> Verified: ✓ found in JD
> Reasoning: Only Data Engineers are explicitly named as a partner team; business stakeholders are mentioned but not as a named collaborative function.

**Run 2:** `1` ✓
> Quote: "Data Engineers"
> Verified: ✓ found in JD
> Reasoning: Only one named team partner is explicitly identified: Data Engineers; business stakeholders and colleagues are mentioned generically.

**Run 3:** `1` ✓
> Quote: "Collaborate with Data Engineers on quality and performance"
> Verified: ✓ found in JD
> Reasoning: Only one named team explicitly identified: Data Engineers; 'business stakeholders' is generic language and does not count as a specific function.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Build and optimize ETL/ELT processes for data availability"
> Verified: ✓ found in JD
> Reasoning: The JD references existing infrastructure (ETL/ELT processes, named BI tools) that needs optimization and enhancement, indicating an established but growing data function rather than greenfield work.

**Run 2:** `mid` ✓
> Quote: "Collaborate with Data Engineers on quality and performance"
> Verified: ✓ found in JD
> Reasoning: The existence of a distinct Data Engineering team and references to maintaining existing BI tools and processes indicates an established but still-growing data function.

**Run 3:** `mid` ✓
> Quote: "Collaborate with Data Engineers on quality and performance"
> Verified: ✓ found in JD
> Reasoning: The existence of a separate Data Engineering team, named tools in responsibilities (ETL/ELT), and optimization language indicate an established but growing data function.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Define KPIs with business stakeholders"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs without technical specificity about methodology, scale, or actual work context, indicating recruiter-authored boilerplate.

**Run 2:** `mixed` ✗
> Quote: "Build and optimize ETL/ELT processes for data availability; Collaborate with Data Engineers on quality and performance"
> Verified: ✓ found in JD
> Reasoning: Contains specific technical details (ETL/ELT processes, data models, star/snowflake schemas in requirements) alongside generic collaboration and support language.

**Run 3:** `mixed` ✗
> Quote: "Build and optimize ETL/ELT processes for data availability"
> Verified: ✓ found in JD
> Reasoning: Responsibilities show technical specificity in process design and tooling alongside generic collaboration language, indicating mixed hiring manager and recruiter input.

⚠ **Disagreement**: manual=`recruiter` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['recruiter', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "data as a product rather than simply building reports"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role emphasizes designing and maintaining analytical infrastructure, data models, and governance for the organization's decision-making capability, positioning data/analytics infrastructure as the primary product.

**Run 2:** `mixed` ✗
> Quote: "Define KPIs with business stakeholders"
> Verified: ✓ found in JD
> Reasoning: The role serves business stakeholders broadly for decision-making without clear specialization to a specific function (commercial, finance, product, or operations).

**Run 3:** `internal_data` ✓
> Quote: "understanding 'data as a product' rather than simply building reports"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role is framed around designing analytical infrastructure and data models as a product for self-serve consumption by business decision-makers.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'mixed', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Define KPIs with business stakeholders"
> Verified: ✓ found in JD
> Reasoning: Strategic verbs like 'design' and 'define' appear for BI solutions and KPIs, but are tempered by collaboration language ('with business stakeholders', 'with Data Engineers') indicating co-ownership rather than sole direction-setting.

**Run 2:** `execution` ✗
> Quote: "Convert business needs into scalable data models and visualizations"
> Verified: ✓ found in JD
> Reasoning: The role is framed as responding to and implementing business needs rather than setting analytics direction or defining strategy.

**Run 3:** `execution` ✗
> Quote: "Convert business needs into scalable data models and visualizations"
> Verified: ✓ found in JD
> Reasoning: The role executes technical design within direction set by external business needs rather than defining strategic priorities for the analytics function.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-ready data foundations, or AI system requirements.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, GenAI applications, AI-ready data infrastructure, or any AI skill expectation for the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted coding, AI-ready data infrastructure, or AI product development anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Collaborate with Data Engineers on quality and performance"
> Verified: ✓ found in JD
> Reasoning: Data quality is mentioned as a collaborative concern with Data Engineers but is not framed as an owned responsibility, and no testing tools or practices are specified.

**Run 2:** `absent` ✗
> Quote: "Collaborate with Data Engineers on quality and performance"
> Verified: ✓ found in JD
> Reasoning: Quality is mentioned collaboratively but not framed as a testing practice, data contract, or observability framework that the BI Specialist owns or implements.

**Run 3:** `absent` ✗
> Quote: "Collaborate with Data Engineers on quality and performance"
> Verified: ✓ found in JD
> Reasoning: While quality is mentioned, it is framed as a collaborative concern with Data Engineers, not as owned testing responsibility or data quality framework ownership.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "metrics depend on well-modeled, reliable data"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes reliability and data governance as foundational concerns, but these are secondary to the primary framing of designing and maintaining BI solutions, with no regulatory or compliance risk register.

**Run 2:** `moderate` ✗
> Quote: "metrics depend on well-modeled, reliable data"
> Verified: ✓ found in JD
> Reasoning: Reliability and data quality are emphasized as important but are secondary to the primary framing of building and maintaining BI solutions.

**Run 3:** `none` ✗
> Quote: "metrics depend on well-modeled, reliable data"
> Verified: ✓ found in JD
> Reasoning: The JD frames reliability and quality as product properties, not as preventing bad outcomes, compliance risks, or stakeholder trust issues.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'none']
