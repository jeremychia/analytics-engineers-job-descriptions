# Trace: 2026-07-02_sii-poland_data-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Data Analytics Engineer (f/m/x) — Sii Poland

**URL:** https://sii.pl/en/job-ads/id/37337/?sii_source=10#apply-contact-form
**Location:** Poland (Remote/Hybrid/Office)
**Date Posted:** 2026-07-02

---

# Data Analytics Engineer (f/m/x) - Senior Level

Company: Sii Poland
Location: Multiple locations in Poland (Remote, Hybrid, or Office options available)
Salary: Not stated

## Overview
Sii is recruiting an Analytics Engineer for a strategic fintech project based in Copenhagen. The role involves building and scaling critical data models that support decision-making across credit, payments, and fraud/AML domains.

## Key Responsibilities
- Build and maintain core data models using dbt for critical reporting
- Partner with stakeholders, Data Engineers, and Analysts on requirements
- Work collaboratively across technical and non-technical teams
- Contribute to the semantic layer (LookML) for consistent reporting
- Ensure data quality through testing, monitoring, and documentation
- Support reliable data workflows using orchestration tools like Airflow
- Uphold analytics engineering practices including code reviews
- Balance work across multiple data domains with adaptability

## Requirements
Must-Have:
- Min. 5 years of hands-on experience with dbt and modern cloud data warehouses (BigQuery)
- SQL proficiency and experience with layered model architecture
- Ability to translate unclear business requirements into clean solutions
- Git-based workflows and CI/CD familiarity
- Strong ownership mindset for business-critical data
- Comfort in high engineering/governance standard environments
- English language proficiency
- Fluent Polish required and residence in Poland mandatory

Nice-to-Have:
- Apache Airflow experience
- AML domain knowledge

## Tech Stack
Required: dbt, SQL, Git, BigQuery, LookML, Looker, Data Governance, Data Modeling
Optional: Apache Airflow, AML

Job no. JOB-22E63

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 3 | 2 | 2 | 2 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | finance | internal_data | finance | 33% | ✗ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | high | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensure data quality through testing, monitoring, and documentation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance practices, code reviews, testing, and documentation with no velocity signals present.

**Run 2:** `rigour` ✓
> Quote: "Ensure data quality through testing, monitoring, and documentation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data quality, testing, documentation, analytics engineering practices, and governance standards rather than speed or velocity.

**Run 3:** `rigour` ✓
> Quote: "Ensure data quality through testing, monitoring, and documentation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, testing, governance, and reliability with no velocity signals, placing this firmly in the rigour category.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "critical data models that support decision-making across credit, payments, and fraud/AML domains"
> Verified: ✓ found in JD
> Reasoning: Credit decisions and fraud/AML compliance are high-risk financial and regulatory domains where data errors have direct compliance and financial consequences.

**Run 2:** `high` ✓
> Quote: "building and scaling critical data models that support decision-making across credit, payments, and fraud/AML domains"
> Verified: ✓ found in JD
> Reasoning: Fintech sector combined with explicitly mentioned credit, payments, and AML (regulatory) domains and repeated use of 'critical' establishes high financial and regulatory risk.

**Run 3:** `high` ✓
> Quote: "building and scaling critical data models that support decision-making across credit, payments, and fraud/AML domains"
> Verified: ✓ found in JD
> Reasoning: Fintech with explicit credit, payments, and fraud/AML domains represents high financial and regulatory risk.

### collaboration_width
**Manual:** `3`

**Run 1:** `2` ✗
> Quote: "Data Engineers; Analysts"
> Verified: ✓ found in JD
> Reasoning: Only two named functions are explicitly listed as collaboration partners; other mentions are generic terms like 'stakeholders' or 'teams'.

**Run 2:** `2` ✗
> Quote: "Data Engineers; Analysts"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams identified: Data Engineers and Analysts are both named as distinct groups the role will partner with; 'stakeholders' is generic and does not count.

**Run 3:** `2` ✗
> Quote: "Data Engineers, and Analysts"
> Verified: ✓ found in JD
> Reasoning: Two distinct named functions are identified: Data Engineers and Analysts; stakeholders is too generic to count.

⚠ **Disagreement**: manual=`3` vs LLM majority=`2`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Build and maintain core data models using dbt for critical reporting"
> Verified: ✓ found in JD
> Reasoning: Named tools like dbt, LookML, and Airflow appear as operational responsibilities rather than greenfield infrastructure, indicating an existing team scaling beyond startup stage.

**Run 2:** `mid` ✓
> Quote: "Build and maintain core data models using dbt for critical reporting"
> Verified: ✓ found in JD
> Reasoning: The presence of established tooling (dbt, BigQuery, LookML, Looker, Airflow) referenced in responsibilities combined with multiple named data roles indicates an existing data function with infrastructure growing rather than starting from zero.

**Run 3:** `mid` ✓
> Quote: "Contribute to the semantic layer (LookML) for consistent reporting"
> Verified: ✓ found in JD
> Reasoning: The role involves contributing to existing infrastructure (semantic layer, multiple domains) with named roles, indicating an established team that is growing.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Build and maintain core data models using dbt for critical reporting; Contribute to the semantic layer (LookML) for consistent reporting; Support reliable data workflows using orchestration tools like Airflow"
> Verified: ✓ found in JD
> Reasoning: Technical specificity on named tools with precise application context is mixed with generic collaboration language and boilerplate verbs.

**Run 2:** `hiring_manager` ✓
> Quote: "Build and maintain core data models using dbt for critical reporting"
> Verified: ✓ found in JD
> Reasoning: The responsibilities demonstrate technical specificity about tools and their application context (dbt for building core models) that indicates hiring manager authorship rather than generic recruiter language.

**Run 3:** `mixed` ✗
> Quote: "Contribute to the semantic layer (LookML) for consistent reporting"
> Verified: ✓ found in JD
> Reasoning: Specific tool usage and domain knowledge suggest technical input, but generic collaboration language elsewhere suggests recruiter involvement.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `finance` ✗
> Quote: "critical data models that support decision-making across credit, payments, and fraud/AML domains"
> Verified: ✓ found in JD
> Reasoning: The primary audience is business teams making credit risk, payment operations, and compliance decisions—all financial and regulatory decision domains.

**Run 2:** `internal_data` ✓
> Quote: "Contribute to the semantic layer (LookML) for consistent reporting"
> Verified: ✓ found in JD
> Reasoning: The role is explicitly building analytics infrastructure (dbt models, semantic layer) for internal analytics consumers (Analysts, Data Engineers) rather than serving business domains directly.

**Run 3:** `finance` ✗
> Quote: "building and scaling critical data models that support decision-making across credit, payments, and fraud/AML domains"
> Verified: ✓ found in JD
> Reasoning: Credit and payment decisions in fintech are fundamentally financial decisions; AML is regulatory/compliance-driven, placing this in the finance category.

⚠ **Disagreement**: manual=`internal_data` vs LLM majority=`finance`

⚠ **LLM inconsistency**: runs gave ['finance', 'internal_data', 'finance']

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Partner with stakeholders, Data Engineers, and Analysts on requirements"
> Verified: ✓ found in JD
> Reasoning: Requirements are set by stakeholders and partners; the role executes within defined domains rather than setting strategic direction.

**Run 2:** `execution` ✓
> Quote: "Support reliable data workflows using orchestration tools like Airflow"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use execution-oriented verbs ('support', 'contribute', 'partner with', 'uphold') without evidence of strategic direction-setting or priority definition.

**Run 3:** `execution` ✓
> Quote: "Partner with stakeholders, Data Engineers, and Analysts on requirements"
> Verified: ✓ found in JD
> Reasoning: Requirements are set by external partners, and the role is framed around delivering scoped work rather than defining direction.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, AI data infrastructure, or AI skill expectations anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI, machine learning, GenAI, or candidate expectation to use or build AI-assisted tools.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted development, or data infrastructure for AI systems.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Ensure data quality through testing, monitoring, and documentation"
> Verified: ✓ found in JD
> Reasoning: The candidate owns data quality through testing using the action verb 'ensure,' establishing testing as a core responsibility rather than a listed tool.

**Run 2:** `responsibility` ✗
> Quote: "Ensure data quality through testing, monitoring, and documentation"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as a core responsibility the candidate owns using the action verb 'ensure', not merely as a tool listed in requirements.

**Run 3:** `responsibility` ✗
> Quote: "Ensure data quality through testing, monitoring, and documentation"
> Verified: ✓ found in JD
> Reasoning: The action verb 'ensure' indicates the candidate is accountable for data quality and owns testing as the practice to achieve it.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "Comfort in high engineering/governance standard environments"
> Verified: ✓ found in JD
> Reasoning: The emphasis on governance standards combined with high-risk domains (credit, fraud/AML compliance) indicates the role's primary concern is preventing regulatory violations and bad data reaching decision-makers.

**Run 2:** `high` ✗
> Quote: "Strong ownership mindset for business-critical data"
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around preventing data errors in high-stakes domains (fintech, AML, credit, payments) through emphasis on 'business-critical', 'strong ownership', and 'governance standards', reflecting fear of regulatory and decision-making impact.

**Run 3:** `moderate` ✗
> Quote: "Comfort in high engineering/governance standard environments"
> Verified: ✓ found in JD
> Reasoning: Governance standards and quality emphasis indicate operational loss-aversion, but the framing focuses on quality and reliability rather than compliance or regulatory prevention.

⚠ **Disagreement**: manual=`` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['high', 'high', 'moderate']
