# Trace: 2026-06-27_n26_senior-risk-data-and-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# (Senior) Risk Data & Analytics Engineer — N26

**URL:** https://n26.com/en-eu/careers/positions/8018102
**Location:** Berlin
**Date Posted:** 2026-06-27

---

# (Senior) Risk Data & Analytics Engineer at N26

**Department:** Risk
**Location:** Berlin

## About the Opportunity

N26 seeks a technically skilled Risk Controlling professional to bridge methodology and implementation. The ICAAP Methodology & Analytics team role focuses on translating regulatory requirements into "robust, scalable, and audit-proof technical solutions." You'll implement risk methodologies in Python, enhance internal tooling, and drive automation across processes while collaborating with methodology teams and data engineers.

## Key Responsibilities

- Implement risk models (ICAAP, capital ratios) into production Python solutions
- Enhance and maintain internal risk controlling tools
- Translate regulatory requirements into automated, documented processes
- Support regulatory changes and new products
- Establish reliable data pipelines with quality assurance
- Develop automated risk reporting infrastructure
- Ensure model traceability and audit readiness
- Improve development standards within Risk Controlling (testing, versioning, documentation)
- Interface between risk, data, and technology teams

## Requirements

**Background:** Degree in Computer Science, Data Engineering, Mathematics, or equivalent; experience building data-driven Python applications; familiarity with data quality and robustness standards.

**Skills:** Strong Python proficiency; solid SQL and complex dataset experience; data pipeline design expertise; automation focus; software engineering best practices (version control, testing, CI/CD); problem-solving with attention to detail. Financial risk exposure is beneficial but not required.

**Preferred:**
- Interest in financial risk management and regulatory topics
- Prior banking, fintech, or regulatory exposure
- Understanding of risk metrics, reporting, or controls

## Benefits

Competitive personal development budget, work-from-home allowance, fitness memberships, language apps, public transit discounts, Premium N26 account access, additional annual leave per service year, and relocation support.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 3 | 3 | 3 | 3 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | mixed | hiring_manager | mixed | 33% | ✓ |
| stakeholder_orientation | finance | finance | internal_data | finance | 33% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | high | high | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "robust, scalable, and audit-proof technical solutions"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes correctness, audit readiness, and governance throughout with no velocity language; audit-proof and reliable are core to the role framing.

**Run 2:** `rigour` ✓
> Quote: "robust, scalable, and audit-proof technical solutions"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes audit-readiness, reliability, quality assurance, model traceability, and governance—with no velocity signals like speed, iteration pace, or shipping quickly.

**Run 3:** `rigour` ✓
> Quote: "robust, scalable, and audit-proof technical solutions"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize audit readiness, reliability, quality assurance, model traceability, and development standards rather than speed or iteration velocity.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Implement risk models (ICAAP, capital ratios) into production Python solutions"
> Verified: ✓ found in JD
> Reasoning: ICAAP and capital ratios are explicit financial reporting and regulatory compliance frameworks where data errors have direct financial and regulatory consequences.

**Run 2:** `high` ✓
> Quote: "Translate regulatory requirements into automated, documented processes"
> Verified: ✓ found in JD
> Reasoning: N26 is a regulated fintech; the role sits in Risk and manages ICAAP and capital adequacy models with audit-proof solutions, meaning data errors have direct regulatory and financial reporting consequences.

**Run 3:** `high` ✓
> Quote: "Translate regulatory requirements into automated, documented processes"
> Verified: ✓ found in JD
> Reasoning: This fintech banking role is explicitly focused on regulatory compliance, ICAAP implementation, and audit readiness with direct impact on regulatory reporting and financial controls.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "methodology teams; data engineers; technology teams"
> Verified: ✓ found in JD
> Reasoning: The JD names three distinct collaborative partners: methodology teams, data engineers, and technology teams in the responsibilities and role description.

**Run 2:** `3` ✓
> Quote: "methodology teams; data engineers; technology teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named partner teams are explicitly listed: methodology teams, data engineers, and technology teams.

**Run 3:** `3` ✓
> Quote: "Interface between risk, data, and technology teams"
> Verified: ✓ found in JD
> Reasoning: The role explicitly names three distinct named functions: risk, data, and technology teams.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Improve development standards within Risk Controlling (testing, versioning, documentation)"
> Verified: ✓ found in JD
> Reasoning: The JD references existing tools and processes that need enhancement and improvement, signaling an established function growing and maturing rather than a greenfield startup.

**Run 2:** `mid` ✓
> Quote: "Enhance and maintain internal risk controlling tools"
> Verified: ✓ found in JD
> Reasoning: Existing tools and infrastructure are mentioned as things to maintain and improve, and development standards are being enhanced, indicating a maturing function with multiple roles.

**Run 3:** `mid` ✓
> Quote: "Enhance and maintain internal risk controlling tools"
> Verified: ✓ found in JD
> Reasoning: Existing tools and infrastructure are being enhanced and improved, indicating an established function scaling and maturing rather than greenfield startup.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Implement risk models (ICAAP, capital ratios) into production Python solutions"
> Verified: ✓ found in JD
> Reasoning: The specific naming of ICAAP and capital ratios shows technical hiring manager knowledge, while most other responsibilities use generic boilerplate verbs common to recruiter templates.

**Run 2:** `hiring_manager` ✗
> Quote: "Implement risk models (ICAAP, capital ratios) into production Python solutions"
> Verified: ✓ found in JD
> Reasoning: The JD uses specific technical context (ICAAP models, capital ratio implementation, Python production work) that only someone actively doing this job would know.

**Run 3:** `mixed` ✓
> Quote: "Implement risk models (ICAAP, capital ratios) into production Python solutions"
> Verified: ✓ found in JD
> Reasoning: The JD contains domain-specific knowledge (ICAAP, capital ratios, model traceability, audit readiness) written by someone in banking risk, mixed with some generic boilerplate like 'support regulatory changes'.

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `finance` ✓
> Quote: "Ensure model traceability and audit readiness"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is on financial reporting, regulatory compliance, and audit readiness—core finance and regulatory stakeholder concerns.

**Run 2:** `internal_data` ✗
> Quote: "Develop automated risk reporting infrastructure; Interface between risk, data, and technology teams"
> Verified: ✓ found in JD
> Reasoning: The role primarily builds data pipelines, tools, and infrastructure for internal consumption by risk management, data engineering, and technology teams.

**Run 3:** `finance` ✓
> Quote: "Ensure model traceability and audit readiness"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves regulatory reporting and financial control functions through explicit focus on audit compliance and regulatory requirements.

⚠ **LLM inconsistency**: runs gave ['finance', 'internal_data', 'finance']

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Translate regulatory requirements into automated, documented processes"
> Verified: ✓ found in JD
> Reasoning: The role is primarily about translating and implementing externally-set regulatory requirements rather than defining strategic direction.

**Run 2:** `execution` ✓
> Quote: "Translate regulatory requirements into automated, documented processes"
> Verified: ✓ found in JD
> Reasoning: The role executes solutions to defined problems (regulatory requirements, tool maintenance, pipeline improvements) rather than setting the overall direction for risk analytics.

**Run 3:** `execution` ✓
> Quote: "Translate regulatory requirements into automated, documented processes"
> Verified: ✓ found in JD
> Reasoning: The role translates and implements requirements set by regulatory frameworks and existing risk infrastructure rather than defining strategy and direction independently.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI infrastructure expectations for the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, or AI-enabled data infrastructure anywhere in the JD.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI skills, tools, or applications expected of the candidate; it focuses on traditional data engineering and risk engineering expertise.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Improve development standards within Risk Controlling (testing, versioning, documentation)"
> Verified: ✓ found in JD
> Reasoning: Testing is named as an explicit responsibility to improve as part of development standards, indicating the role owns establishing better testing practices.

**Run 2:** `responsibility` ✗
> Quote: "Improve development standards within Risk Controlling (testing, versioning, documentation)"
> Verified: ✓ found in JD
> Reasoning: Testing is listed as a development standard the role is explicitly expected to improve, indicating ownership of testing practices and standards.

**Run 3:** `responsibility` ✗
> Quote: "Improve development standards within Risk Controlling (testing, versioning, documentation)"
> Verified: ✓ found in JD
> Reasoning: Testing is explicitly framed as part of development standards that the role will improve, indicating ownership of testing practices rather than mere tool usage.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "Ensure model traceability and audit readiness"
> Verified: ✓ found in JD
> Reasoning: The role is fundamentally about preventing regulatory and audit failures, with risk, compliance, and audit language permeating the entire job description.

**Run 2:** `high` ✗
> Quote: "robust, scalable, and audit-proof technical solutions"
> Verified: ✓ found in JD
> Reasoning: The JD is heavily framed around regulatory compliance, audit readiness, model traceability, and reliability—reflecting acute fear of regulatory failure and loss of stakeholder/regulator trust.

**Run 3:** `high` ✗
> Quote: "Ensure model traceability and audit readiness"
> Verified: ✓ found in JD
> Reasoning: The role is dominated by language about audit readiness, regulatory compliance, and preventing undetected model errors, reflecting fear of audit failures and regulatory violations.

⚠ **Disagreement**: manual=`` vs LLM majority=`high`
