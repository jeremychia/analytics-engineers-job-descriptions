# Trace: 2026-06-29_chefs-culinar-west_business-intelligence-specialist

## JD text (fed to classifier, Layer B stripped)

```
# Business Intelligence Specialist (m/w/d) — CHEFS CULINAR West GmbH & Co. KG

**URL:** https://www.meine-karriere-im-handel.de/stellenangebot/6010
**Location:** Weeze, Germany
**Date Posted:** 2026-06-29

---

Business Intelligence Specialist (m/w/d) - CHEFS CULINAR West GmbH & Co. KG

Location: Weeze, Germany

Company: CHEFS CULINAR, a 100+ year old supplier to hospitality and catering sectors. CHEFS CULINAR West GmbH & Co. KG, Holtumsweg 26, 47652 Weeze.

Key Responsibilities:
- Implementing and optimising ETL/ELT processes for integrating various data sources (ETL-/ELT-Prozesse zur Integration verschiedener Datenquellen)
- Designing data models
- Developing high-performance dashboards and reports with Power BI (leistungsfähige Dashboards und Reports mit Power BI)
- Ensuring data quality and governance
- Supporting business departments (Fachbereiche) with analytics requirements
- Advancing the organisation's data architecture

Required Qualifications:
- Formal education in IT or equivalent credentials/experience in data engineering or analytics
- Practical experience in data engineering or analytics
- Understanding of ETL/ELT processes
- SQL proficiency
- Familiarity with BI tools including Power BI and IBM Cognos Analytics
- Knowledge of modern data platforms, preferably Microsoft Fabric
- Analytical thinking, structured work habits, team collaboration
- Fluency in German and English (Deutsch und Englisch)

Benefits:
- Flexible scheduling
- Remote work options (two days weekly)
- Modern equipment
- Comprehensive training
- 30 vacation days
- Fitness subsidies
- Bike leasing support
- Access to employee benefits portal
- Pension contributions
- Company restaurant access
- Complimentary water, tea, coffee and fruit (Kostenfreies Wasser, Tee, Kaffee und Obst)

Application: bewerbung-weeze@chefsculinar.de
Source: https://www.meine-karriere-im-handel.de/stellenangebot/6010

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | recruiter | recruiter | recruiter | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensuring data quality and governance"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality and governance as core expectations with no mention of speed, shipping, iteration, or delivery pace.

**Run 2:** `rigour` ✓
> Quote: "Ensuring data quality and governance"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality and governance as core expectations, with no counterbalancing velocity signals like 'fast-paced' or 'rapid delivery'.

**Run 3:** `rigour` ✓
> Quote: "Ensuring data quality and governance"
> Verified: ✓ found in JD
> Reasoning: The explicit mention of data quality and governance as a core responsibility signals a rigour-oriented approach, with no counterbalancing velocity language about shipping speed or iteration pace.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Supporting business departments (Fachbereiche) with analytics requirements"
> Verified: ✓ found in JD
> Reasoning: Data errors would affect business decisions without immediate regulatory or financial reporting consequences, typical of operational analytics.

**Run 2:** `moderate` ✓
> Quote: "Supporting business departments with analytics requirements"
> Verified: ⚠ NOT found verbatim
> Reasoning: This is operational B2B analytics for a hospitality supplier with no explicit financial reporting, regulatory, or compliance framing, making data errors material to business decisions but not regulatory or financial exposure.

**Run 3:** `moderate` ✓
> Quote: "Supporting business departments with analytics requirements"
> Verified: ⚠ NOT found verbatim
> Reasoning: A B2B supply company serving hospitality and catering has moderate data risk—business operations depend on data accuracy but there is no financial reporting, compliance, or regulatory exposure indicated.

### collaboration_width
**Manual:** `1`

**Run 1:** `0` ✗
> Quote: "Supporting business departments (Fachbereiche) with analytics requirements"
> Verified: ✓ found in JD
> Reasoning: Business departments is a generic term; no explicitly named functions like Finance, Product, Engineering, or specific data team roles are identified.

**Run 2:** `0` ✗
> Quote: "Supporting business departments"
> Verified: ✓ found in JD
> Reasoning: While 'business departments' is mentioned as a stakeholder audience, this is too generic to count as a named partner function; specific team names (Finance, Product, Marketing, etc.) are not identified.

**Run 3:** `0` ✗
> Quote: "Supporting business departments"
> Verified: ✓ found in JD
> Reasoning: The JD does not explicitly name specific partner teams or functions—'business departments' is a generic collective phrase that does not count as distinct named collaborators.

⚠ **Disagreement**: manual=`1` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Advancing the organisation's data architecture"
> Verified: ✓ found in JD
> Reasoning: Named tools in requirements (Power BI, Microsoft Fabric) combined with advancing/optimising language indicates existing infrastructure being grown and improved.

**Run 2:** `mid` ✓
> Quote: "Implementing and optimising ETL/ELT processes"
> Verified: ✓ found in JD
> Reasoning: The language 'implementing and optimising' signals existing infrastructure being improved rather than greenfield build, indicating a data function that has moved beyond initial establishment.

**Run 3:** `mid` ✓
> Quote: "Advancing the organisation's data architecture"
> Verified: ✓ found in JD
> Reasoning: The responsibility to advance existing architecture combined with named platforms already deployed (Power BI, IBM Cognos, Microsoft Fabric) indicates an established data function actively scaling rather than early-stage or fully mature.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `recruiter` ✗
> Quote: "Developing high-performance dashboards and reports with Power BI"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs and tool names without specific context, scale, volume, or methodology that would indicate hands-on authorship.

**Run 2:** `recruiter` ✗
> Quote: "Supporting business departments with analytics requirements"
> Verified: ⚠ NOT found verbatim
> Reasoning: The responsibilities use generic action verbs ('supporting', 'developing', 'ensuring') and lack the technical depth or scale context that would come from someone performing this work daily.

**Run 3:** `recruiter` ✗
> Quote: "Developing high-performance dashboards and reports with Power BI"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic action verbs without technical specificity, scale context, or precision about what these dashboards actually track or optimize, indicating recruiter-created boilerplate.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`recruiter`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Advancing the organisation's data architecture"
> Verified: ✓ found in JD
> Reasoning: The primary work emphasis is building and maintaining data infrastructure and models that internal business consumers rely on, not serving a specific business function.

**Run 2:** `internal_data` ✓
> Quote: "Supporting business departments with analytics requirements"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role is framed around building and maintaining analytics infrastructure (ETL, data models, dashboards) that internal business departments consume as platform users.

**Run 3:** `internal_data` ✓
> Quote: "Advancing the organisation's data architecture"
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building and improving data infrastructure and platforms that serve the broader organization, not targeting commercial, product, or finance stakeholders specifically.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Supporting business departments (Fachbereiche) with analytics requirements"
> Verified: ✓ found in JD
> Reasoning: The role is framed around delivering analytics outputs to address requirements defined by others, not setting strategic direction or defining how analytics is delivered.

**Run 2:** `execution` ✓
> Quote: "Supporting business departments with analytics requirements"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role uses support-oriented language and is framed as delivering against business department needs rather than setting strategy or defining direction.

**Run 3:** `execution` ✓
> Quote: "Supporting business departments with analytics requirements"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role is framed as delivering against needs set by business departments rather than defining strategy or shaping how the analytics function operates.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: There is no mention of AI tools, machine learning, AI-assisted coding, or any AI skill expectations anywhere in the job description.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, GenAI applications, or AI infrastructure expectations for the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, GenAI applications, or AI-ready data infrastructure anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Ensuring data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a responsibility the candidate owns through an accountability verb, not listed as a tool or framework to learn.

**Run 2:** `responsibility` ✗
> Quote: "Ensuring data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an owned responsibility using an action verb, though without specification of testing tools or frameworks.

**Run 3:** `responsibility` ✗
> Quote: "Ensuring data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Data quality is explicitly listed as a responsibility with the ownership verb 'ensuring,' making it a core accountability rather than a listed tool or absent entirely.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensuring data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are concerns but framed as standard responsibilities rather than risk prevention, compliance, or stakeholder trust issues.

**Run 2:** `moderate` ✗
> Quote: "Ensuring data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Governance language signals operational risk awareness and control concerns, but lacks explicit regulatory, compliance, or audit framing that would indicate high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Ensuring data quality and governance"
> Verified: ✓ found in JD
> Reasoning: Operational data quality is a stated concern, but the JD lacks compliance, regulatory, or trust-centric language that would indicate high loss-aversion framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
