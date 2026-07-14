# Trace: 2026-06-29_mts-globe_finance-bi-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Finance BI Analyst — MTS Globe

**URL:** https://mts-careers.talentclue.com/es/node/126087591/66909823
**Location:** Palma, Spain
**Date Posted:** 2026-06-29

---

Finance BI Analyst

Company: MTS Globe
Location: Palma, Spain
Contract: Permanent (Indefinido)
Schedule: Full-time
Work Mode: Hybrid (2 days remote/week)
Sector: Hospitality, leisure, and tourism
Vacancies: 1
Discipline: Innovation

About MTS Globe:
MTS Globe is the biggest independently owned incoming company in Europe with 66 destination offices across 22 countries. The company serves over 10 million customers annually with 1,300 employees from 45 nationalities.

Key Responsibilities:
- Develop and maintain high quality reporting solutions to complex problems within the company.
- Provide trainings and support to the business community to ensure a good adoption and usage of our tools.
- Be in constant contact with the business to understand their analytical needs and translate them into technical requirements.
- Collaborating closely with financial teams to support them in their reporting processes and daily operations.
- Participate on business trips to meet the teams on the regional offices as needed.

Requirements:
- Degree in, Business Administration, Information Technologies, or related careers.
- Previous experience in financial or accounting roles.
- High level of English, spoken and written.
- Advanced knowledge of Microsoft Excel.
- Good communication skills and comfortable doing presentations.
- Customer care oriented and keen on finding solutions to other people's problems.
- Availability to travel (occasionally).

Valued Skills:
- Experience in the Tourism industry.
- High level of Spanish, spoken and written.
- Knowledge of Microsoft Power BI.
- Knowledge of T-SQL.
- Knowledge of Azure Data tools.

Benefits:
- Wellness program with mental health support
- Remote work flexibility (2 days weekly)
- Language training and Microsoft certifications
- E-learning platform access
- Sports communities
- Special health insurance rates

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 1 | 1 | 1 | 1 | 100% | ✓ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | recruiter | recruiter | recruiter | 100% | ✓ |
| stakeholder_orientation | finance | finance | finance | finance | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company."
> Verified: ✓ found in JD
> Reasoning: The explicit emphasis on 'high quality' and handling 'complex problems' signals rigour orientation with no countervailing velocity language.

**Run 2:** `rigour` ✓
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company."
> Verified: ✓ found in JD
> Reasoning: The explicit emphasis on "high quality reporting" signals correctness and reliability as core expectations, with no counterbalancing velocity or speed language present.

**Run 3:** `rigour` ✓
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes 'high quality' as a primary expectation in core responsibilities, which is a rigour signal, and contains no velocity language.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Collaborating closely with financial teams to support them in their reporting processes and daily operations."
> Verified: ✓ found in JD
> Reasoning: Financial reporting context indicates moderate risk, but the absence of regulatory/compliance language and hospitality sector context prevents a high-risk classification.

**Run 2:** `moderate` ✗
> Quote: "Collaborating closely with financial teams to support them in their reporting processes and daily operations."
> Verified: ✓ found in JD
> Reasoning: While finance-related, the focus on internal "reporting processes and daily operations" indicates business intelligence reporting rather than regulatory compliance or financial reporting at scale that would trigger high risk.

**Run 3:** `moderate` ✗
> Quote: "Collaborating closely with financial teams to support them in their reporting processes and daily operations."
> Verified: ✓ found in JD
> Reasoning: The role supports financial operations and reporting but lacks regulatory, compliance, or direct P&L impact signals, indicating moderate domain risk.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "financial teams"
> Verified: ✓ found in JD
> Reasoning: Only 'financial teams' is explicitly named as a distinct partner function; other references like 'business community' and 'regional offices' are generic.

**Run 2:** `1` ✓
> Quote: "financial teams"
> Verified: ✓ found in JD
> Reasoning: Only one distinct named partner team (financial teams) is explicitly identified across the responsibilities section.

**Run 3:** `1` ✓
> Quote: "financial teams"
> Verified: ✓ found in JD
> Reasoning: Only Finance is explicitly named as a distinct team/function; other references like 'business community' and 'regional offices' are too generic to count.

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Provide trainings and support to the business community to ensure a good adoption and usage of our tools."
> Verified: ✓ found in JD
> Reasoning: The mention of existing tools and the need for training and adoption support indicates an established data function beyond greenfield stage, but without signals of specialized multi-team maturity.

**Run 2:** `mid` ✗
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company."
> Verified: ✓ found in JD
> Reasoning: The expectation to "maintain" existing reporting solutions implies established infrastructure and tooling already in place, indicating a mid-stage team rather than early-stage greenfield build.

**Run 3:** `mid` ✗
> Quote: "Provide trainings and support to the business community to ensure a good adoption and usage of our tools."
> Verified: ✓ found in JD
> Reasoning: The reference to existing tools in deployment and need for adoption support suggests an established but growing data function, not early-stage or mature.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company."
> Verified: ✓ found in JD
> Reasoning: The responsibility lacks technical specificity about tools, methodologies, or concrete problems, using generic action verbs typical of recruiter-written job descriptions.

**Run 2:** `recruiter` ✓
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company."
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic action verbs and collaboration language without specific tool application contexts, scale metrics, or methodology details that would indicate a hiring manager's technical input.

**Run 3:** `recruiter` ✓
> Quote: "Collaborating closely with financial teams to support them in their reporting processes and daily operations."
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic boilerplate action verbs and stakeholder management language without technical specificity about problems, methods, or scale.

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `finance` ✓
> Quote: "Collaborating closely with financial teams to support them in their reporting processes and daily operations."
> Verified: ✓ found in JD
> Reasoning: The role is explicitly framed around supporting financial teams' reporting and operational needs, making finance the primary stakeholder.

**Run 2:** `finance` ✓
> Quote: "Collaborating closely with financial teams to support them in their reporting processes and daily operations."
> Verified: ✓ found in JD
> Reasoning: The role is explicitly scoped to support financial teams' reporting and operations, making finance the clear primary audience.

**Run 3:** `finance` ✓
> Quote: "Collaborating closely with financial teams to support them in their reporting processes and daily operations."
> Verified: ✓ found in JD
> Reasoning: The role explicitly names Finance as the primary partner team and focuses on supporting their reporting processes and operations.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Be in constant contact with the business to understand their analytical needs and translate them into technical requirements."
> Verified: ✓ found in JD
> Reasoning: The emphasis on understanding needs set by others and translating them into solutions rather than shaping analytics direction indicates execution-level autonomy.

**Run 2:** `execution` ✓
> Quote: "Provide trainings and support to the business community to ensure a good adoption and usage of our tools."
> Verified: ✓ found in JD
> Reasoning: The consistent framing around "support," "collaborating," and enabling adoption of existing tools indicates execution of priorities set by the business rather than strategic direction-setting.

**Run 3:** `execution` ✓
> Quote: "Be in constant contact with the business to understand their analytical needs and translate them into technical requirements."
> Verified: ✓ found in JD
> Reasoning: The role is framed as translating business-defined analytical needs into technical solutions, indicating execution of direction set by others rather than strategic direction-setting.

### ai_role
**Run 1:** `none` ✓
> Quote: ""
> Reasoning: No AI-related responsibilities, tools, or capabilities mentioned in the JD

**Run 2:** `none` ✓
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company."
> Reasoning: No AI tools, capabilities, or infrastructure mentioned in the role's responsibilities.

**Run 3:** `none` ✓
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company"
> Reasoning: No AI tooling, GenAI infrastructure, or AI-first signals in responsibilities or required skills.


### testing_framing
**Run 1:** `responsibility` ✗
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company"
> Reasoning: Candidate owns responsibility for quality and correctness in reporting solutions

**Run 2:** `absent` ✓
> Quote: "Develop and maintain high quality reporting solutions to complex problems within the company."
> Reasoning: The phrase emphasizes quality outputs but lacks ownership verbs or testing methodology.

**Run 3:** `absent` ✓
> Quote: "Develop and maintain high quality reporting solutions"
> Reasoning: Quality is an outcome descriptor but no explicit ownership of testing practices; no testing tools named.

⚠ **LLM inconsistency**: runs gave ['responsibility', 'absent', 'absent']

### loss_aversion_framing
**Run 1:** `none` ✓
> Quote: "Collaborating closely with financial teams to support them in their reporting processes and daily operations"
> Reasoning: Framing emphasizes operational support and delivery rather than compliance, regulatory, or trust concerns

**Run 2:** `none` ✓
> Quote: "No loss aversion framing detected."
> Reasoning: Only delivery framing present; no compliance, regulatory, or operational reliability concerns mentioned.

**Run 3:** `none` ✓
> Quote: "support them in their reporting processes and daily operations"
> Reasoning: Framing centers on business support and execution, not operational risk, compliance, or trust concerns.

