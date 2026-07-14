# Trace: 2026-07-02_mr-marvis_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — MR MARVIS

**URL:** https://careers.mrmarvis.com/jobs/7670021-senior-analytics-engineer
**Location:** Amsterdam, Netherlands
**Date Posted:** 2026-07-02

---

# Senior Analytics Engineer at MR MARVIS

Location: Amsterdam HQ Office (Hybrid)
Department: PEDX
Salary: Not stated

## Key Responsibilities
The role involves owning the analytics layer of our data platform and bridging data engineering with business intelligence.

Design & Modeling: Building robust dbt models that translate business logic into scalable solutions while optimizing for performance and cost efficiency

Stakeholder Collaboration: Working with business teams to convert analytical needs into structured data solutions and establishing consistent metric definitions

Self-Serve Analytics: Enabling governed access to trusted data sources and optimizing the platform for AI use cases

Data Quality: Implementing testing, monitoring, and data quality checks while partnering with data engineers

## Essential Requirements
- Significant Analytics Engineering or similar technical data role experience
- Strong SQL and production dbt proficiency
- Data modeling expertise (facts, dimensions, grains, marts, testing)
- BI tool experience (Looker Studio, Tableau, Omni, Power BI, or similar)
- Strong stakeholder communication skills
- Openness to using AI tools for workflow improvement
- Ability to own cross-functional analytics problems end-to-end

## Nice-to-Have Skills
Warehouse optimization knowledge, semantic layer/metric governance experience, Omni familiarity, Python/R skills, and retail/ecommerce/DTC industry background

## Benefits Highlights
25 vacation days plus 5-year sabbatical, hybrid work (~3 days weekly in Amsterdam), monthly wellness budget, free coaching platform and meditation app access, daily office lunch, equipment provided, 20% employee discount on products

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
| jd_authorship | hiring_manager | hiring_manager | mixed | hiring_manager | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | mixed | mixed | 33% | ✗ |
| ai_role |  | ai_enabler | ai_enabler | ai_user | 33% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implementing testing, monitoring, and data quality checks while partnering with data engineers"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes quality, testing, and governance as core expectations without any velocity language.

**Run 2:** `rigour` ✓
> Quote: "Implementing testing, monitoring, and data quality checks while partnering with data engineers"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes testing, monitoring, quality checks, and data governance throughout responsibilities with no corresponding velocity or speed-focused language.

**Run 3:** `rigour` ✓
> Quote: "Implementing testing, monitoring, and data quality checks while partnering with data engineers"
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as core responsibilities, not as secondary concerns, signaling a rigour-oriented role.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Working with business teams to convert analytical needs into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: This is framed as business intelligence and analytics work without explicit financial reporting or regulatory risk language.

**Run 2:** `moderate` ✓
> Quote: "enabling governed access to trusted data sources"
> Verified: ✓ found in JD
> Reasoning: The emphasis on trusted data reflects operational reliability concerns, but without regulatory, compliance, or financial reporting language typical of high-risk domains.

**Run 3:** `moderate` ✓
> Quote: "retail/ecommerce/DTC industry background"
> Verified: ✓ found in JD
> Reasoning: The industry context suggests business decision-making impact without explicit regulatory or financial reporting requirements in the responsibilities.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "data engineers"
> Verified: ✓ found in JD
> Reasoning: Only one named distinct team (data engineers) is explicitly mentioned as a collaboration partner.

**Run 2:** `1` ✓
> Quote: "partnering with data engineers"
> Verified: ✓ found in JD
> Reasoning: Only one explicitly named partner team (data engineers) identified; 'business teams' is generic language that does not count as a named function.

**Run 3:** `1` ✓
> Quote: "partnering with data engineers"
> Verified: ✓ found in JD
> Reasoning: Only one named partner function (data engineers) is explicitly identified in the JD; generic references like 'business teams' do not count as named collaborators.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "owning the analytics layer of our data platform"
> Verified: ✓ found in JD
> Reasoning: The platform and tools already exist with named technology in responsibilities, but the role is about owning a specific layer rather than joining a fully mature, specialized sub-team.

**Run 2:** `mid` ✓
> Quote: "owning the analytics layer of our data platform"
> Verified: ✓ found in JD
> Reasoning: An established analytics platform exists with deployed tools, but the focus on optimization and improvement indicates mid-stage growth rather than mature scale.

**Run 3:** `mid` ✓
> Quote: "owning the analytics layer of our data platform and bridging data engineering with business intelligence"
> Verified: ✓ found in JD
> Reasoning: The existence of a named data platform with established roles (data engineers) and established tools (dbt) indicates a mid-stage team scaling existing capabilities.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Building robust dbt models that translate business logic into scalable solutions while optimizing for performance and cost efficiency"
> Verified: ✓ found in JD
> Reasoning: The responsibilities show technical specificity about dbt, performance optimization, and cost efficiency that indicates domain expertise rather than boilerplate.

**Run 2:** `mixed` ✗
> Quote: "Building robust dbt models that translate business logic into scalable solutions while optimizing for performance and cost efficiency"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about dbt production context and performance optimization is present alongside generic collaboration language like 'working with business teams'.

**Run 3:** `hiring_manager` ✓
> Quote: "Building robust dbt models that translate business logic into scalable solutions while optimizing for performance and cost efficiency"
> Verified: ✓ found in JD
> Reasoning: The specific mention of dbt modeling, dimensional concepts (facts, dimensions, grains, marts), and performance optimization indicates technical specificity from hands-on experience.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "owning the analytics layer of our data platform"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes enabling the data platform and analytics infrastructure for internal consumers, not serving commercial, product, or finance teams primarily.

**Run 2:** `internal_data` ✓
> Quote: "Enabling governed access to trusted data sources and optimizing the platform for AI use cases"
> Verified: ✓ found in JD
> Reasoning: The role is primarily about enabling internal analytics platform consumers and serving internal data infrastructure needs, not commercial, product, or finance stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "owning the analytics layer of our data platform and bridging data engineering with business intelligence"
> Verified: ✓ found in JD
> Reasoning: The primary emphasis is on building and maintaining the analytics platform infrastructure that serves internal data consumers, with business collaboration as the means to that end.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "owning the analytics layer of our data platform"
> Verified: ✓ found in JD
> Reasoning: The use of 'owning' indicates strategic accountability for defining and directing this function rather than executing direction set by others.

**Run 2:** `mixed` ✗
> Quote: "owning the analytics layer of our data platform"
> Verified: ✓ found in JD
> Reasoning: The role owns the analytics platform domain strategically but also converts analytical needs from business teams, combining strategic ownership with execution-oriented responsibilities.

**Run 3:** `mixed` ✗
> Quote: "owning the analytics layer of our data platform; Working with business teams to convert analytical needs into structured data solutions"
> Verified: ✓ found in JD
> Reasoning: The role owns the analytics infrastructure and platform direction while also responding to business analytical needs, combining strategic platform ownership with execution in service of stated priorities.

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "optimizing the platform for AI use cases"
> Verified: ✓ found in JD
> Reasoning: The role expects the candidate to build data infrastructure that AI systems will consume or run on, not just use AI tools personally.

**Run 2:** `ai_enabler` ✗
> Quote: "optimizing the platform for AI use cases"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to prepare data infrastructure for AI systems to consume; while 'openness to using AI tools' suggests ai_user signal, the ai_enabler framing takes precedence per decision rules.

**Run 3:** `ai_user` ✗
> Quote: "Openness to using AI tools for workflow improvement"
> Verified: ✓ found in JD
> Reasoning: The requirement for openness to AI tools for personal workflow improvement indicates the candidate is expected to use AI to accelerate their own work.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

⚠ **LLM inconsistency**: runs gave ['ai_enabler', 'ai_enabler', 'ai_user']

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implementing testing, monitoring, and data quality checks while partnering with data engineers"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as something the candidate will implement as a primary responsibility using action verbs, not as a listed tool requirement.

**Run 2:** `responsibility` ✗
> Quote: "Implementing testing, monitoring, and data quality checks while partnering with data engineers"
> Verified: ✓ found in JD
> Reasoning: Testing and quality checks are owned responsibilities using the action verb 'implementing,' indicating the candidate defines and executes these practices.

**Run 3:** `responsibility` ✗
> Quote: "Implementing testing, monitoring, and data quality checks while partnering with data engineers"
> Verified: ✓ found in JD
> Reasoning: Testing is explicitly framed as an implementation responsibility owned by the candidate, not merely a tool to use.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Implementing testing, monitoring, and data quality checks while partnering with data engineers"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are clear concerns, but there is no regulatory, compliance, or board-level risk language that would indicate high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "trusted data sources"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are genuine concerns, but the JD is primarily delivery-focused without regulatory, compliance, or risk-prevention language typical of high loss-aversion framing.

**Run 3:** `moderate` ✗
> Quote: "Enabling governed access to trusted data sources"
> Verified: ✓ found in JD
> Reasoning: The emphasis on trusted data and data quality checks suggests concern for operational reliability, but without explicit compliance or regulatory risk language.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
