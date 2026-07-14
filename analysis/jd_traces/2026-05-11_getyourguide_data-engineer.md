# Trace: 2026-05-11_getyourguide_data-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Data Engineer, Traveler Data Engineering — GetYourGuide

**URL:** https://www.linkedin.com/jobs/view/data-engineer-traveler-data-engineering-at-getyourguide-4383493346/
**Location:** Berlin, Berlin, Germany
**Seniority Level:** Associate
**Employment Type:** Full-time

---

## Key Responsibilities

- Build end-to-end data solutions independently: Deliver reliable, high-quality datasets/pipelines
- Serve as a thought partner with Product and Data teams to translate business requirements
- Apply best practices in code quality, data modeling, testing, and monitoring
- Improve what's already in production: Pragmatically refactor and simplify existing pipelines
- Contribute to team planning, code reviews, and knowledge sharing
- Maintain balance between operational responsibilities and new development using team SLOs

---

## Required Qualifications

- 3+ years in a relevant data role with hands-on data engineering experience
- Expertise in SQL & Python, building robust data pipelines and data models
- Experience operating data at scale in warehouses/lakes (Delta, Snowflake, PostgreSQL/MySQL)
- Strong dbt proficiency and Spark familiarity
- Solid understanding of data visualization tools like Looker/Tableau
- Excellent English communication skills (written and verbal)
- Ability to prioritize effectively and manage stakeholders
- Proactive ownership mindset with customer orientation

---

## Preferred / Bonus Skills

- Experience delivering data solutions for marketplace platforms
- Customer journey and metric definition expertise
- Software engineering fundamentals (Java/Scala comfort level)
- AI-first mindset: Uses modern AI tools to boost productivity

---

## Benefits

- Annual personal growth budget and mentorship programs
- Remote work flexibility (30 days annually)
- Hybrid arrangement: three in-office days (Mon, Tue, Thur), two optional remote days
- Quarterly team events and yearly company-wide gatherings
- Monthly transportation and fitness budget
- GetYourGuide activity discounts
- Language reimbursement program
- Health and wellness benefits

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 2 | 2 | 2 | 100% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | product | internal_data | 33% | ✓ |
| autonomy_level | execution | mixed | execution | execution | 33% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | tool_listed | tool_listed | responsibility | 33% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Apply best practices in code quality, data modeling, testing, and monitoring"
> Verified: ✓ found in JD
> Reasoning: Multiple explicit rigour signals (testing, monitoring, best practices, reliability) dominate the responsibilities with no velocity language.

**Run 2:** `rigour` ✓
> Quote: "Apply best practices in code quality, data modeling, testing, and monitoring"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes best practices, testing, monitoring, and SLOs as core expectations, with no velocity or speed-focused language.

**Run 3:** `rigour` ✓
> Quote: "Apply best practices in code quality, data modeling, testing, and monitoring"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (code quality, testing, monitoring) with no velocity framing present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Serve as a thought partner with Product and Data teams to translate business requirements"
> Verified: ✓ found in JD
> Reasoning: Travel marketplace/SaaS domain with no regulatory, compliance, or financial reporting language suggests moderate business risk.

**Run 2:** `moderate` ✓
> Quote: "Serve as a thought partner with Product and Data teams to translate business requirements"
> Verified: ✓ found in JD
> Reasoning: The role supports product and operational decisions in a marketplace platform without financial reporting, compliance, or regulatory framing.

**Run 3:** `moderate` ✓
> Quote: "Serve as a thought partner with Product and Data teams to translate business requirements"
> Verified: ✓ found in JD
> Reasoning: Marketplace role with operational data impact but no explicit financial reporting, compliance, or regulatory language.

### collaboration_width
**Manual:** `3`

**Run 1:** `2` ✗
> Quote: "Product and Data teams"
> Verified: ✓ found in JD
> Reasoning: Two named collaboration partners: Product teams and Data teams.

**Run 2:** `2` ✗
> Quote: "Product and Data teams"
> Verified: ✓ found in JD
> Reasoning: Two explicitly named partner functions (Product and Data teams) are identified as primary collaborators in translating business requirements.

**Run 3:** `2` ✗
> Quote: "Product; Data teams"
> Verified: ✓ found in JD
> Reasoning: Two named functions identified as collaboration partners in responsibilities.

⚠ **Disagreement**: manual=`3` vs LLM majority=`2`

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Improve what's already in production: Pragmatically refactor and simplify existing pipelines"
> Verified: ✓ found in JD
> Reasoning: Production infrastructure with named tools (dbt, Spark, Snowflake) and operational responsibilities (SLOs) exist and are actively maintained.

**Run 2:** `mid` ✗
> Quote: "Maintain balance between operational responsibilities and new development using team SLOs"
> Verified: ✓ found in JD
> Reasoning: The team has operational maturity (SLOs), existing production systems to improve, and established tooling (dbt, Spark, Snowflake), indicating a functioning mid-stage data organization.

**Run 3:** `mid` ✗
> Quote: "Improve what's already in production: Pragmatically refactor and simplify existing pipelines"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure with established code review and planning practices, but no multi-team structure or massive scale signals.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Maintain balance between operational responsibilities and new development using team SLOs"
> Verified: ✓ found in JD
> Reasoning: SLO-specific operational framing suggests hiring manager input, but generic phrases like "translate business requirements" and "apply best practices" are recruiter boilerplate.

**Run 2:** `mixed` ✗
> Quote: "Maintain balance between operational responsibilities and new development using team SLOs"
> Verified: ✓ found in JD
> Reasoning: The JD includes specific operational context (SLOs, managing production pipelines) but also generic collaboration verbs elsewhere, indicating a mix of hiring manager insight and recruiter template.

**Run 3:** `mixed` ✗
> Quote: "Maintain balance between operational responsibilities and new development using team SLOs"
> Verified: ✓ found in JD
> Reasoning: Mostly generic responsibility verbs mixed with some operational specificity (SLO framing and operational/dev balance distinction).

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Serve as a thought partner with Product and Data teams to translate business requirements"
> Verified: ✓ found in JD
> Reasoning: While Product is a collaboration partner, the core responsibilities focus on building data infrastructure and operational reliability for internal data consumers.

**Run 2:** `product` ✗
> Quote: "Serve as a thought partner with Product and Data teams to translate business requirements"
> Verified: ✓ found in JD
> Reasoning: The role explicitly positions itself as serving Product teams by translating business requirements into data solutions.

**Run 3:** `internal_data` ✓
> Quote: "Maintain balance between operational responsibilities and new development using team SLOs"
> Verified: ✓ found in JD
> Reasoning: Role emphasizes data platform reliability and operations (SLOs, code reviews, infrastructure) despite Product partnership.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'product', 'internal_data']

### autonomy_level
**Manual:** `execution`

**Run 1:** `mixed` ✗
> Quote: "Build end-to-end data solutions independently"
> Verified: ✓ found in JD
> Reasoning: Strong autonomy in building data solutions independently is balanced against execution-oriented verbs (Serve, Contribute, Apply) that frame the role as supporting defined priorities.

**Run 2:** `execution` ✓
> Quote: "Improve what's already in production: Pragmatically refactor and simplify existing pipelines"
> Verified: ✓ found in JD
> Reasoning: The primary framing is delivering and maintaining existing systems rather than defining direction or strategy.

**Run 3:** `execution` ✓
> Quote: "Serve as a thought partner with Product and Data teams to translate business requirements"
> Verified: ✓ found in JD
> Reasoning: Technical execution is independent but strategic direction and priorities are set by team leadership and Product.

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Uses modern AI tools to boost productivity"
> Verified: ✓ found in JD
> Reasoning: Candidate is expected to use AI tools to accelerate their own work as a preferred qualification.

**Run 2:** `ai_user` ✗
> Quote: "AI-first mindset: Uses modern AI tools to boost productivity"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use modern AI tools to accelerate their own work productivity.

**Run 3:** `ai_user` ✗
> Quote: "AI-first mindset: Uses modern AI tools to boost productivity"
> Verified: ✓ found in JD
> Reasoning: Candidate is expected to use modern AI tools to accelerate their own work productivity.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `tool_listed` ✗
> Quote: "Apply best practices in code quality, data modeling, testing, and monitoring"
> Verified: ✓ found in JD
> Reasoning: Testing is mentioned as a practice to apply but without ownership language like "own" or "define"—it's a requirement to follow existing practices.

**Run 2:** `tool_listed` ✗
> Quote: "Apply best practices in code quality, data modeling, testing, and monitoring"
> Verified: ✓ found in JD
> Reasoning: Testing is mentioned as part of best practices to apply, not as an owned responsibility or framework to define.

**Run 3:** `responsibility` ✗
> Quote: "Apply best practices in code quality, data modeling, testing, and monitoring"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as a practice the candidate applies and owns, not just a tool listed in requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`tool_listed`

⚠ **LLM inconsistency**: runs gave ['tool_listed', 'tool_listed', 'responsibility']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Maintain balance between operational responsibilities and new development using team SLOs"
> Verified: ✓ found in JD
> Reasoning: SLOs and emphasis on reliability and monitoring signal operational reliability concerns, but there is no regulatory, compliance, or stakeholder-trust language.

**Run 2:** `moderate` ✗
> Quote: "Maintain balance between operational responsibilities and new development using team SLOs"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability through SLOs but frames this as infrastructure concern rather than preventing regulatory or trust risk.

**Run 3:** `moderate` ✗
> Quote: "Maintain balance between operational responsibilities and new development using team SLOs"
> Verified: ✓ found in JD
> Reasoning: Risk framing centers on operational reliability and SLO compliance rather than compliance or stakeholder trust.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
