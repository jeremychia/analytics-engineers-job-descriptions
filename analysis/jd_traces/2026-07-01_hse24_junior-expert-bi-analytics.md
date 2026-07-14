# Trace: 2026-07-01_hse24_junior-expert-bi-analytics

## JD text (fed to classifier, Layer B stripped)

```
# Junior Expert BI & Analytics — HSE24

**URL:** https://karriere-hse24-portal.rexx-systems.com/Junior-Expert-BI-Analytics-mwd-de-j3667.html?sid=724ab8567cdcfb9bb38652d88b99105f
**Location:** Munich, Germany (Hybrid, 2 days on-site)
**Date Posted:** 2026-07-01

---

Junior Expert BI & Analytics (m/w/d) at HSE24 / Home Shopping Europe GmbH

About the Company
Home Shopping Europe GmbH is a leading live commerce provider in Europe, operating as a media platform offering entertainment-focused shopping. They feature curated products across fashion, jewellery, beauty, wellness, household, and home & living categories, engaging audiences through TV, online shop, and social media channels.

Role Summary
The position involves designing, developing, and optimising modern BI and analytics solutions to enable data-driven decision-making.

Key Responsibilities
- Conceptualise and optimise BI solutions and create KPIs, semantic models, reports, and dashboards
- Translate business requirements into analytics deliverables
- Develop automated self-service BI solutions with consistent KPI definitions
- Build and maintain data models with DBT and Snowflake using dimensional modelling
- Apply modern development standards including clean code and test-driven development
- Manage code via Git with structured branching strategies and support CI/CD processes
- Collaborate with data platform teams and business units on optimisation

Required Qualifications
- Relevant degree or comparable qualification with multi-year BI/Analytics experience
- Strong expertise with tools like Power BI, Tableau, or Google Looker Studio
- Very good SQL knowledge, solid Python skills and practical experience with DBT
- Data modelling and reporting technology expertise
- Fluent English; German language skills preferred
- Willingness to work two days weekly on-site at their campus

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 1 | 1 | 1 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | product | 33% | ✓ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | none | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Apply modern development standards including clean code and test-driven development"
> Verified: ✓ found in JD
> Reasoning: Test-driven development and clean code standards as core responsibilities signal quality and correctness emphasis over speed.

**Run 2:** `rigour` ✓
> Quote: "Apply modern development standards including clean code and test-driven development"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes test-driven development, CI/CD processes, structured branching, and clean code as core expectations with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "Apply modern development standards including clean code and test-driven development"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, clean code practices, and structured development standards as core expectations, with no language of speed, iteration, or rapid delivery.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "BI and analytics solutions to enable data-driven decision-making"
> Verified: ✓ found in JD
> Reasoning: E-commerce BI role with no financial reporting, compliance, or regulatory language indicates moderate risk for business operations.

**Run 2:** `moderate` ✓
> Quote: "enabling data-driven decision-making"
> Verified: ⚠ NOT found verbatim
> Reasoning: E-commerce BI role with no financial reporting, compliance, or regulatory signals implies moderate risk — data errors affect business decisions but without immediate financial or regulatory consequences.

**Run 3:** `moderate` ✓
> Quote: "enabling data-driven decision-making"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role enables business decision-making at a retail media company without explicit financial reporting, regulatory, or compliance concerns.

### collaboration_width
**Manual:** `2`

**Run 1:** `1` ✗
> Quote: "data platform teams"
> Verified: ✓ found in JD
> Reasoning: Only 'data platform teams' is a named partner team; 'business units' is too generic and does not count.

**Run 2:** `1` ✗
> Quote: "data platform teams"
> Verified: ✓ found in JD
> Reasoning: Only 'data platform teams' is explicitly named; 'business units' is generic and does not count as a named team.

**Run 3:** `1` ✗
> Quote: "data platform teams"
> Verified: ✓ found in JD
> Reasoning: Only 'data platform teams' is explicitly named as a distinct function; 'business units' is too generic to count as a named partner.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Build and maintain data models with DBT and Snowflake using dimensional modelling"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities with specific methodology signal an established but growing data function.

**Run 2:** `mid` ✓
> Quote: "Build and maintain data models with DBT and Snowflake using dimensional modelling"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities and the existence of a separate data platform team indicate an established function with some specialization, characteristic of mid-stage maturity.

**Run 3:** `mid` ✓
> Quote: "Build and maintain data models with DBT and Snowflake using dimensional modelling"
> Verified: ✓ found in JD
> Reasoning: Named tools (DBT, Snowflake) with specific application context in responsibilities, and reference to data platform teams, indicate an established infrastructure being maintained and optimized.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Build and maintain data models with DBT and Snowflake using dimensional modelling"
> Verified: ✓ found in JD
> Reasoning: Technical specificity with named tools, methodology names, and development practices reflects hands-on role knowledge.

**Run 2:** `hiring_manager` ✓
> Quote: "Build and maintain data models with DBT and Snowflake using dimensional modelling"
> Verified: ✓ found in JD
> Reasoning: The specific tool stack, precise methodology reference (dimensional modelling), and technical application context signal knowledge that only comes from someone who has performed this work.

**Run 3:** `hiring_manager` ✓
> Quote: "Build and maintain data models with DBT and Snowflake using dimensional modelling"
> Verified: ✓ found in JD
> Reasoning: The JD demonstrates technical specificity about tools (DBT, Snowflake), methodologies (dimensional modeling), and practices (TDD, CI/CD) that only a hiring manager doing this work would detail.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Develop automated self-service BI solutions with consistent KPI definitions"
> Verified: ✓ found in JD
> Reasoning: Building self-serve analytics infrastructure and data models for platform consumers indicates internal data infrastructure focus.

**Run 2:** `internal_data` ✓
> Quote: "Develop automated self-service BI solutions with consistent KPI definitions"
> Verified: ✓ found in JD
> Reasoning: The emphasis on building self-serve infrastructure, semantic models, and data platforms indicates the primary mission is supporting the analytics function that other data consumers depend on.

**Run 3:** `product` ✗
> Quote: "enabling data-driven decision-making"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role is framed to support general business decision-making at a retail media platform where the primary BI consumers are typically product and operational decision-makers.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'internal_data', 'product']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Translate business requirements into analytics deliverables"
> Verified: ✓ found in JD
> Reasoning: The role receives requirements and translates them into deliverables rather than defining analytics strategy or direction.

**Run 2:** `execution` ✗
> Quote: "Translate business requirements into analytics deliverables"
> Verified: ✓ found in JD
> Reasoning: This verb phrase indicates receiving scoped business requirements and delivering against them, rather than setting strategic direction or defining priorities.

**Run 3:** `execution` ✗
> Quote: "Translate business requirements into analytics deliverables"
> Verified: ✓ found in JD
> Reasoning: The primary verb structure emphasizes translating existing requirements and delivering solutions rather than defining strategy, owning direction, or leading organizational change.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted workflows, or AI-ready data infrastructure anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-ready data foundations, or GenAI applications anywhere in the JD.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD does not expect the candidate to use AI tools for coding productivity or to build AI-ready data infrastructure; it focuses on standard BI and analytics development.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Apply modern development standards including clean code and test-driven development"
> Verified: ✓ found in JD
> Reasoning: Test-driven development is framed as an applied responsibility, not just a listed tool or optional skill.

**Run 2:** `responsibility` ✗
> Quote: "Apply modern development standards including clean code and test-driven development"
> Verified: ✓ found in JD
> Reasoning: The action verb 'Apply' in the responsibilities section indicates the candidate is expected to implement and own test-driven development practices as part of their role.

**Run 3:** `responsibility` ✗
> Quote: "Apply modern development standards including clean code and test-driven development"
> Verified: ✓ found in JD
> Reasoning: Test-driven development is framed as a development standard the candidate should apply in their work, indicating accountability for testing practices rather than just tool familiarity.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in capability and delivery terms with no risk, compliance, or stakeholder trust language.

**Run 2:** `moderate` ✗
> Quote: "Apply modern development standards including clean code and test-driven development"
> Verified: ✓ found in JD
> Reasoning: Development standards and CI/CD processes signal concern for operational reliability and quality, but without explicit compliance, regulatory, or trust language, the loss aversion is moderate rather than high.

**Run 3:** `moderate` ✗
> Quote: "Apply modern development standards including clean code and test-driven development; Manage code via Git with structured branching strategies and support CI/CD processes"
> Verified: ✓ found in JD
> Reasoning: The emphasis on CI/CD, TDD, and clean code reflects organizational concern for operational reliability and preventing data quality failures, though framed as best practices rather than explicit risk mitigation.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['none', 'moderate', 'moderate']
