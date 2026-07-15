# Trace: 2026-05-01_aviv-group_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — AVIV Group

**URL:** https://www.linkedin.com/jobs/view/4378126108/
**Location:** Berlin, Germany
**Salary:** Extremely competitive comp + equity

---

## Key Responsibilities

- Developing and maintaining dbt models transforming raw data into analytics-ready datasets in Snowflake
- Defining data contracts, metrics, and semantic models across business domains
- Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery
- Applying testing, documentation, and version control best practices
- Contributing to data platform architecture including "bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring"

---

## Required Qualifications

- 5+ years in analytics engineering, data modeling, or advanced analytics
- Strong SQL and dbt skills including "modeling, testing, and macro development"
- Hands-on experience with Snowflake or comparable cloud data warehouse
- Understanding of data modeling principles, ELT workflows, and modern data stack tools
- Strong communication and collaboration abilities across teams

---

## Preferred / Bonus Skills

- Data contracts and semantic modeling expertise
- Bronze/silver/gold layer architecture
- CI/CD pipeline design for data workflows
- Data governance and monitoring practices
- Modern data stack tools and integrations

---

## Additional Information

**Seniority Level:** Mid-Senior
**Employment Type:** Full-time
**Posted:** 10 hours ago with 68 applicants
**Recruiter Contact:** Ben Johnson, Principal Talent Partner

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 2 | 2 | 2 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | mixed | mixed | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | mixed | execution | mixed | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, documentation, and governance as core expectations with no velocity language like fast-paced or rapid delivery.

**Run 2:** `rigour` ✓
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (testing, documentation, version control, data contracts, governance, monitoring) dominate the responsibilities with no velocity framing, indicating a quality-and-reliability-focused role.

**Run 3:** `rigour` ✓
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, documentation, data contracts, governance, and monitoring—core rigour signals—with no offsetting velocity language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: Emphasis on reliable data delivery for business decisions indicates moderate risk without explicit financial reporting or regulatory compliance signals.

**Run 2:** `moderate` ✓
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes operational reliability and data governance but lacks explicit financial, regulatory, or compliance language that would indicate high domain risk.

**Run 3:** `moderate` ✓
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: The emphasis is on reliable analytics infrastructure and data quality, not compliance, financial reporting, or regulatory requirements.

### collaboration_width
**Manual:** `4`

**Run 1:** `2` ✗
> Quote: "analysts; data scientists"
> Verified: ✓ found in JD
> Reasoning: Two distinct named function groups (analysts and data scientists) are explicitly listed as collaboration partners.

**Run 2:** `2` ✗
> Quote: "analysts; data scientists"
> Verified: ✓ found in JD
> Reasoning: Two named teams explicitly listed: analysts and data scientists; business stakeholders are too generic to count.

**Run 3:** `2` ✗
> Quote: "analysts; data scientists"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams—analysts and data scientists—are explicitly listed as collaboration partners.

⚠ **Disagreement**: manual=`4` vs LLM majority=`2`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Contributing to data platform architecture including "bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring""
> Verified: ✓ found in JD
> Reasoning: Named architectural patterns and tools in responsibilities indicate an established data platform being extended rather than built from zero.

**Run 2:** `mid` ✓
> Quote: "Contributing to data platform architecture including "bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring""
> Verified: ✓ found in JD
> Reasoning: Named tools and practices appear in responsibilities (dbt, Snowflake, bronze/silver/gold, CI/CD), and the role involves defining new practices (data contracts), indicating an established but still-growing data function.

**Run 3:** `mid` ✓
> Quote: "Developing and maintaining dbt models transforming raw data into analytics-ready datasets in Snowflake"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibility context (dbt, Snowflake) and references to platform architecture (bronze/silver/gold, CI/CD) indicate existing infrastructure being scaled, not built from scratch.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Strong SQL and dbt skills including "modeling, testing, and macro development""
> Verified: ✓ found in JD
> Reasoning: Specificity about dbt macro development and precision around modeling/testing practices indicate technical authorship from someone with direct experience.

**Run 2:** `mixed` ✓
> Quote: "Developing and maintaining dbt models transforming raw data into analytics-ready datasets in Snowflake"
> Verified: ✓ found in JD
> Reasoning: The JD contains specific technical details (dbt, Snowflake, bronze/silver/gold architecture) alongside generic collaboration verbs, suggesting input from both a hiring manager and a recruiter.

**Run 3:** `mixed` ✓
> Quote: "Defining data contracts, metrics, and semantic models across business domains"
> Verified: ✓ found in JD
> Reasoning: Technical specificity appears in tool context (dbt/Snowflake) and methodologies (data contracts, semantic models), but generic language like 'collaborating' and 'applying best practices' is also present.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Contributing to data platform architecture including "bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring""
> Verified: ✓ found in JD
> Reasoning: The role's core mission is building and maintaining data platform infrastructure and architecture for internal consumption by analytics and data science teams.

**Run 2:** `internal_data` ✓
> Quote: "Contributing to data platform architecture including "bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring""
> Verified: ✓ found in JD
> Reasoning: The role primarily serves the data function itself—building infrastructure and platforms for analysts and data scientists to consume, not serving business, product, finance, or commercial teams.

**Run 3:** `internal_data` ✓
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: Primary collaborators are analysts and data scientists, signaling that the role serves the data function and platform consumers rather than commercial, product, or finance teams.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Defining data contracts, metrics, and semantic models across business domains"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic definition of data modeling approaches with execution on maintaining models and applying standards.

**Run 2:** `execution` ✗
> Quote: "Contributing to data platform architecture including "bronze/silver/gold layers, CI/CD pipelines, data governance, and monitoring""
> Verified: ✓ found in JD
> Reasoning: The language emphasizes contribution to defined architecture and execution of established practices rather than setting direction for the analytics function.

**Run 3:** `mixed` ✓
> Quote: "Defining data contracts, metrics, and semantic models across business domains"
> Verified: ✓ found in JD
> Reasoning: The role has strategic elements (defining contracts and models) alongside execution responsibilities (contributing to architecture, maintaining models), indicating a mixed orientation.

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectations for the candidate to use or build AI systems; it focuses on standard analytics engineering practices.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding assistants, AI-ready data foundations, or GenAI applications; no AI skill is expected of candidates.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, ML pipelines, coding agents, or AI-ready infrastructure appears in the responsibilities or requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Defining data contracts, metrics, and semantic models across business domains"
> Verified: ✓ found in JD
> Reasoning: Data contracts are explicitly owned by the candidate as a named responsibility, indicating accountability for testing and quality standards.

**Run 2:** `responsibility` ✗
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: Testing appears as an owned responsibility the candidate applies and owns across data workflows, not merely as a tool listed in a skillset.

**Run 3:** `responsibility` ✗
> Quote: "Applying testing, documentation, and version control best practices"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as an active responsibility the candidate owns and applies, not merely a skill requirement listed in a tool stack.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: The emphasis on reliable data delivery signals concern for operational reliability and data failures without compliance or regulatory risk framing.

**Run 2:** `moderate` ✗
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: Reliability and data governance are present concerns, but secondary to the primary framing of building and maintaining data infrastructure, indicating moderate loss aversion rather than a compliance-or-trust-dominated register.

**Run 3:** `moderate` ✗
> Quote: "Collaborating with analysts, data scientists, and business stakeholders on reliable data delivery"
> Verified: ✓ found in JD
> Reasoning: Emphasis on operational reliability and data governance suggests risk management around data quality and pipeline stability, not compliance or regulatory exposure.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
