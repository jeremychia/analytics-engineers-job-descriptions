# Trace: 2026-07-01_finanz-informatik_bi-engineer

## JD text (fed to classifier, Layer B stripped)

```
# BI Engineer — Finanz Informatik

**URL:** https://www.f-i.de/karriere/offene-stellen/muenster/bi-engineer-m-w-d
**Location:** Hannover, Münster, or Frankfurt, Germany
**Date Posted:** 2026-07-01

---

BI Engineer (m/w/d) at Finanz Informatik

Location: Hannover, Münster, or Frankfurt
Organisational Unit: BI-Kennzahlen (BI Metrics)
Reference Number: 417/B

About the Company
Finanz Informatik is one of Europe's largest banking IT service providers and digitalisation partners operating within the Sparkassen financial group. The company employs over 5,000 staff across 3 locations and offers diverse roles spanning app development, network technologies, consulting, and support.

Role Summary
The team transforms data into actionable insights by developing metrics that enable the Sparkassen group to transparently manage processes and optimise customer journeys.

Key Responsibilities
- Conceptualise and implement new data flows
- Develop usage metrics and operational benchmarks for customers
- Evaluate new metrics requirements collaboratively with stakeholders
- Plan and coordinate work packages for metrics development
- Manage planning, testing, acceptance, and documentation of applications

Requirements
- Completed relevant degree or equivalent professional training
- 2-3 years of relevant professional experience
- Strong analytical capabilities
- Background in data engineering or process/data analysis
- Database management system knowledge and/or programming skills (e.g., Python)
- Ideally project planning and coordination experience
- Enjoyment working with numbers and data evaluation

Benefits
Flexible work hours, subsidised transit passes, remote work options, professional development, cafeteria services, retirement provisions, family services, and fitness support.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | high | 33% | ✗ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | recruiter | recruiter | recruiter | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | none | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Manage planning, testing, acceptance, and documentation of applications"
> Verified: ✓ found in JD
> Reasoning: Testing, acceptance, and documentation are explicitly named rigour signals with no velocity framing.

**Run 2:** `rigour` ✓
> Quote: "Manage planning, testing, acceptance, and documentation of applications"
> Verified: ✓ found in JD
> Reasoning: The responsibilities include explicit mention of testing, acceptance, and documentation, signaling an orientation toward process rigor and quality gates, with no velocity signals present.

**Run 3:** `rigour` ✓
> Quote: "Manage planning, testing, acceptance, and documentation of applications"
> Verified: ✓ found in JD
> Reasoning: The responsibilities explicitly list testing, acceptance, and documentation as core requirements, with no velocity or iteration signals present.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Develop usage metrics and operational benchmarks for customers"
> Verified: ✓ found in JD
> Reasoning: Operational metrics and benchmarks are emphasized rather than financial reporting or regulatory compliance, despite banking sector context.

**Run 2:** `moderate` ✗
> Quote: "Develop usage metrics and operational benchmarks for customers"
> Verified: ✓ found in JD
> Reasoning: Though the company operates in banking (which defaults to high risk), the JD's language focuses on operational and usage metrics without explicit financial reporting, compliance, or regulatory framing.

**Run 3:** `high` ✓
> Quote: "Finanz Informatik is one of Europe's largest banking IT service providers and digitalisation partners operating within the Sparkassen financial group"
> Verified: ✓ found in JD
> Reasoning: The role operates within a regulated banking group where metrics directly support financial operations and compliance, placing it in the high-risk fintech sector.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'high']

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "collaboratively with stakeholders"
> Verified: ✓ found in JD
> Reasoning: No named teams or functions are explicitly identified; only generic 'stakeholders' is mentioned.

**Run 2:** `0` ✓
> Quote: "Evaluate new metrics requirements collaboratively with stakeholders"
> Verified: ✓ found in JD
> Reasoning: While the JD mentions collaborating with stakeholders and customers, these are not named specific functions or teams (e.g., Finance, Product, Engineering).

**Run 3:** `0` ✓
> Quote: "Evaluate new metrics requirements collaboratively with stakeholders"
> Verified: ✓ found in JD
> Reasoning: No named partner teams or functions are explicitly identified; only generic 'stakeholders' is referenced without specificity.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Conceptualise and implement new data flows"
> Verified: ✓ found in JD
> Reasoning: New data flow development indicates an existing data function that is actively expanding, not early-stage or fully mature.

**Run 2:** `mid` ✗
> Quote: "The team transforms data into actionable insights by developing metrics that enable the Sparkassen group to transparently manage processes and optimise customer journeys"
> Verified: ✓ found in JD
> Reasoning: The team is described as having a defined mission within an established 5,000+ person organization, with coordination around metric development, suggesting an established (not early-stage) function.

**Run 3:** `mid` ✗
> Quote: "The team transforms data into actionable insights by developing metrics"
> Verified: ✓ found in JD
> Reasoning: The JD describes an existing team producing metrics for the organisation, indicating an established function beyond early stage but without signals of large-scale specialisation.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Conceptualise and implement new data flows; Develop usage metrics and operational benchmarks for customers"
> Verified: ✓ found in JD
> Reasoning: Boilerplate action verbs with no technical specificity, tool context, or domain details that would indicate hiring manager authorship.

**Run 2:** `recruiter` ✓
> Quote: "Evaluate new metrics requirements collaboratively with stakeholders"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section uses generic boilerplate language (collaborate with stakeholders, plan and coordinate) with no technical specificity, tool context, scale numbers, or methodology names that would indicate hands-on experience.

**Run 3:** `recruiter` ✓
> Quote: "Conceptualise and implement new data flows"
> Verified: ✓ found in JD
> Reasoning: All responsibilities use generic action verbs with no technical specificity, named tools, scale context, or concrete examples of actual work.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "transforms data into actionable insights by developing metrics that enable the Sparkassen group to transparently manage processes"
> Verified: ✓ found in JD
> Reasoning: The role develops metrics for internal organizational use to manage processes, characteristic of internal data infrastructure rather than external commercial or product-facing analytics.

**Run 2:** `internal_data` ✓
> Quote: "develop metrics that enable the Sparkassen group to transparently manage processes and optimise customer journeys"
> Verified: ⚠ NOT found verbatim
> Reasoning: The primary purpose is building metrics infrastructure for the organization to manage itself, rather than serving a specific commercial, product, or finance team.

**Run 3:** `internal_data` ✓
> Quote: "enable the Sparkassen group to transparently manage processes and optimise customer journeys"
> Verified: ✓ found in JD
> Reasoning: The role serves the internal organisation's operational decision-making and metrics infrastructure, not external commercial or dedicated finance/product teams.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Evaluate new metrics requirements collaboratively with stakeholders"
> Verified: ✓ found in JD
> Reasoning: While the role has agency in implementation approach, requirements and priorities come from stakeholders, with the role executing within that collaborative frame.

**Run 2:** `execution` ✗
> Quote: "Plan and coordinate work packages for metrics development"
> Verified: ✓ found in JD
> Reasoning: The responsibilities focus on delivering solutions to evaluate requirements and coordinate delivery, with no language about setting strategy, defining priorities, or shaping the analytics function.

**Run 3:** `execution` ✗
> Quote: "Plan and coordinate work packages for metrics development"
> Verified: ✓ found in JD
> Reasoning: The responsibilities focus on executing planned work and managing process steps rather than setting strategic direction or defining overall analytics approach.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI, machine learning, or AI-related tools anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding assistants, ML pipelines, or any AI-related skills expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted work, or AI infrastructure requirements for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Manage planning, testing, acceptance, and documentation of applications"
> Verified: ✓ found in JD
> Reasoning: Testing is assigned as a role responsibility that the candidate manages, not merely listed as a tool in requirements.

**Run 2:** `responsibility` ✗
> Quote: "Manage planning, testing, acceptance, and documentation of applications"
> Verified: ✓ found in JD
> Reasoning: Testing is explicitly listed in the responsibilities section as something the candidate will manage, indicating testing accountability in their project delivery work.

**Run 3:** `responsibility` ✗
> Quote: "Manage planning, testing, acceptance, and documentation of applications"
> Verified: ✓ found in JD
> Reasoning: Testing is listed as an explicit responsibility the role manages, indicating accountability for the testing process as part of metrics development delivery.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Manage planning, testing, acceptance, and documentation of applications"
> Verified: ✓ found in JD
> Reasoning: Testing and acceptance management indicate operational reliability concerns, though no explicit risk or compliance framing is present.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around delivery and capability without any risk register, compliance concerns, regulatory requirements, or loss-prevention language.

**Run 3:** `moderate` ✗
> Quote: "Manage planning, testing, acceptance, and documentation of applications"
> Verified: ✓ found in JD
> Reasoning: Testing and documentation support operational reliability in a regulated banking context, but the JD frames the role around metrics delivery rather than risk prevention.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'moderate']
