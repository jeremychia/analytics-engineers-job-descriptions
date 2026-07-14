# Trace: 2026-07-01_gemma-analytics_ai-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# AI & Analytics Engineer — Gemma Analytics

**URL:** https://gemma.jobs.personio.de/job/2649089?display=en&language=en&pid=fa3a7aa6-8e14-4a4a-bd96-762640840138&it=26JtXR2RD2OVFVc5EDmXOw&_ghcid=71e67ea4-f328-4404-ad0c-95e7b0e31743
**Location:** Berlin, Germany
**Date Posted:** 2026-07-01
**Salary:** 56,700–69,300 EUR

---

AI & Analytics Engineer at Gemma Analytics

About the Company
Gemma Analytics is a Berlin-based firm founded in 2020 that helps organisations become more data-driven. The company has served over 50 clients and operates profitably without VC backing. Team of 18, growing to 24 in 2026.

Role Summary
This is a mid-level position where engineers work at the intersection of data and AI, building both traditional data pipelines and intelligent, agentic solutions that create real business impact.

Key Responsibilities
- Work with multiple technologies across the modern data stack
- Develop advanced data reporting and visualisations
- Apply data modelling methodologies
- Leverage AI tools including agentic workflows and AI coding assistants

Requirements
Essential:
- SQL and relational database experience
- Native or C2 fluency in German and English
- Understanding of data modelling techniques and data warehousing
- Professional AI tool experience, ideally including coding assistants

Optional:
- Python or other programming languages
- Stakeholder/client management experience

Compensation & Benefits
- €56,700 - €69,300 annually
- Flexible office attendance (2-5 days weekly)
- Profit sharing (minimum 20%)
- Berlin location near Nordbahnhof
- Full-time, permanent employee in Berlin

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 0 | 0 | 1 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | recruiter | mixed | recruiter | 33% | ✓ |
| stakeholder_orientation | commercial | internal_data | internal_data | internal_data | 100% | ✗ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | ai_user | ai_enabler | ai_enabler | 33% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Apply data modelling methodologies"
> Verified: ✓ found in JD
> Reasoning: The emphasis on methodological structure (data modelling methodologies) signals a rigour orientation rather than speed or delivery pace.

**Run 2:** `rigour` ✗
> Quote: "Apply data modelling methodologies"
> Verified: ✓ found in JD
> Reasoning: The only process-oriented signal in the JD emphasizes applying established methodologies, with no velocity language present.

**Run 3:** `rigour` ✗
> Quote: "Apply data modelling methodologies"
> Verified: ✓ found in JD
> Reasoning: The only methodological signal present is data modelling structure, with no velocity language (fast-paced, shipping, iteration speed) appearing anywhere in the JD.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "helps organisations become more data-driven"
> Verified: ✓ found in JD
> Reasoning: The JD describes generic data work for external clients without explicit financial, regulatory, or compliance indicators that would elevate to high risk.

**Run 2:** `moderate` ✓
> Quote: "create real business impact"
> Verified: ✓ found in JD
> Reasoning: The role creates business impact but shows no explicit financial reporting, compliance, or regulatory framing.

**Run 3:** `moderate` ✓
> Quote: "helps organisations become more data-driven"
> Verified: ✓ found in JD
> Reasoning: The role serves general business intelligence and operational reporting for diverse clients with no explicit financial, regulatory, or compliance language indicating high-risk consequences.

### collaboration_width
**Manual:** `1`

**Run 1:** `0` ✗
> Quote: "None"
> Verified: ✓ found in JD
> Reasoning: No named partner teams or functions are explicitly mentioned in the responsibilities section.

**Run 2:** `0` ✗
> Quote: "None"
> Verified: ✓ found in JD
> Reasoning: The JD does not explicitly name any partner teams or functions in the role responsibilities or summary.

**Run 3:** `1` ✓
> Quote: "Stakeholder/client management experience"
> Verified: ✓ found in JD
> Reasoning: Only one explicitly named external collaboration partner (clients) appears in the JD.

⚠ **Disagreement**: manual=`1` vs LLM majority=`0`

⚠ **LLM inconsistency**: runs gave ['0', '0', '1']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Team of 18, growing to 24 in 2026"
> Verified: ✓ found in JD
> Reasoning: The company is established and profitable but remains relatively small, indicating mid-stage maturity without early-stage infrastructure building or mature specialization.

**Run 2:** `mid` ✓
> Quote: "This is a mid-level position where engineers work at the intersection of data and AI, building both traditional data pipelines and intelligent, agentic solutions"
> Verified: ✓ found in JD
> Reasoning: The company is established (not greenfield) and describes a mid-level role, suggesting a functioning data operation, but the small team size (18 total) precludes a mature classification.

**Run 3:** `mid` ✓
> Quote: "Team of 18, growing to 24 in 2026"
> Verified: ✓ found in JD
> Reasoning: The company has established infrastructure (modern data stack, existing technologies), multiple role levels (mid-level position), and documented clients, indicating a functioning but still-growing data operation.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Work with multiple technologies across the modern data stack"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic boilerplate action verbs without specific technical context, scale numbers, or tool application details that would indicate hiring manager authorship.

**Run 2:** `mixed` ✗
> Quote: "Leverage AI tools including agentic workflows and AI coding assistants"
> Verified: ✓ found in JD
> Reasoning: The specificity of 'agentic workflows' terminology suggests hiring manager input, but the absence of other technical details (named tools, scale, specific context) indicates recruiter contribution overall.

**Run 3:** `recruiter` ✓
> Quote: "Work with multiple technologies across the modern data stack"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use boilerplate generic action verbs and concepts without technical specificity about methodology, scale, or how work actually gets done.

⚠ **LLM inconsistency**: runs gave ['recruiter', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `internal_data` ✗
> Quote: "Develop advanced data reporting and visualisations"
> Verified: ✓ found in JD
> Reasoning: The emphasis is on building data capabilities and infrastructure rather than serving specific commercial, product, or financial stakeholder outcomes.

**Run 2:** `internal_data` ✗
> Quote: "building both traditional data pipelines and intelligent, agentic solutions that create real business impact"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building data infrastructure and solutions without naming a specific business audience, suggesting primary service to the data function and its consumers.

**Run 3:** `internal_data` ✗
> Quote: "Work with multiple technologies across the modern data stack"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes building infrastructure and platforms (data pipelines, modern data stack) rather than serving specific commercial, product, or finance stakeholders.

⚠ **Disagreement**: manual=`commercial` vs LLM majority=`internal_data`

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Apply data modelling methodologies"
> Verified: ✓ found in JD
> Reasoning: The verb 'apply' indicates implementing established methodologies rather than defining or shaping data strategy.

**Run 2:** `execution` ✗
> Quote: "Develop advanced data reporting and visualisations"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use delivery verbs (develop, apply, leverage) without strategic/directional language like define, establish, or own.

**Run 3:** `execution` ✗
> Quote: "Develop advanced data reporting and visualisations"
> Verified: ✓ found in JD
> Reasoning: All responsibility verbs (work, develop, apply, leverage) are execution-oriented delivery tasks; the mid-level position framing indicates no strategic direction-setting authority.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Professional AI tool experience, ideally including coding assistants"
> Verified: ✓ found in JD
> Reasoning: The requirement explicitly expects the candidate to use AI tools, specifically coding assistants, in their own work as a core skill.

**Run 2:** `ai_enabler` ✗
> Quote: "building both traditional data pipelines and intelligent, agentic solutions that create real business impact"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to architect and build agentic solutions, indicating ai_enabler role rather than just using coding assistants.

**Run 3:** `ai_enabler` ✗
> Quote: "building both traditional data pipelines and intelligent, agentic solutions"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data solutions with agentic components embedded as part of the core deliverable, not just use AI tools for personal productivity.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

⚠ **LLM inconsistency**: runs gave ['ai_user', 'ai_enabler', 'ai_enabler']

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Work with multiple technologies across the modern data stack; Develop advanced data reporting and visualisations; Apply data modelling methodologies; Leverage AI tools including agentic workflows and AI coding assistants"
> Verified: ✓ found in JD
> Reasoning: No testing, data quality, data contracts, or observability language appears anywhere in the responsibilities or requirements sections.

**Run 2:** `absent` ✗
> Quote: "No testing signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no mention of testing, data quality frameworks, data contracts, or observability as a responsibility or requirement.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of testing, data quality, data contracts, observability, or reliability frameworks.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "engineers work at the intersection of data and AI, building both traditional data pipelines and intelligent, agentic solutions that create real business impact"
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in terms of capability delivery and impact creation with no risk, compliance, or trust prevention language.

**Run 2:** `none` ✗
> Quote: "No loss aversion signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD frames the role in capability and delivery terms ('creating real business impact') with no risk, compliance, reliability, or trust-related language.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely in capability and delivery terms with no risk register, compliance, regulatory, or reliability concerns mentioned.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
