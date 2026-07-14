# Trace: 2026-06-25_dashlane_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Dashlane

**Company:** Dashlane
**Location:** Lisbon, Portugal (Hybrid) — in-office Mondays, Tuesdays, Thursdays; remote Wednesdays and Fridays
**Salary:** Not stated
**URL:** https://job-boards.greenhouse.io/dashlane/jobs/7988501
**ATS:** greenhouse
**Job ID:** 7988501

---

## Full JD

Analytics Engineer
Company: Dashlane
Location: Lisbon, Portugal (Hybrid) — in-office Mondays, Tuesdays, Thursdays; remote Wednesdays and Fridays

About Dashlane:
Dashlane focuses on credential security for businesses and employees. The organization serves millions of consumers and over 25,000 brands globally, including Michelin, Air France, and Forrester. Founded in Paris, the company operates offices in New York and Lisbon with more than 300 employees worldwide.

Role Overview:
This position involves joining the Data & Analytics team as a strategic partner between technical modeling and business decisions. The Analytics Engineer will shift the team from reactive support toward proactive strategy, addressing complex data architecture while enabling organizational self-service capabilities.

Key Responsibilities:
- Design, build, test, and maintain end-to-end data models within dbt-powered systems
- Transform messy datasets into clean, intuitive models serving as single sources of truth
- Partner consultatively with Product, Go-to-Market, and business teams on data-driven insights
- Guide stakeholders toward scalable self-serve solutions rather than ad-hoc requests
- Implement AI data agents and automation for reporting and alerting systems
- Establish data governance, quality testing, and mentoring for junior team members

Requirements:
- 3+ years in Analytics Engineering or equivalent roles
- Expert-level SQL and dbt proficiency with production experience
- Strong B2B SaaS business knowledge (ARR, NRR, churn, product-led growth)
- Consultative stakeholder management abilities
- Fluent with AI coding platforms such as Claude Code
- Autonomous working style with curiosity for complex data challenges
- Fluent English (verbal and written)

Tech Stack:
dbt, SQL, Python, AWS (Redshift, S3, Lambda, Kinesis, Glue), Omni, Airflow, GitLab, Claude Code

Benefits:
- Flex Benefits allocation
- Health insurance coverage
- 5 additional vacation days annually plus birthday off
- Quarterly well-being days
- Up to 20 weeks paid parental leave
- Mental health services through Spring Health
- Team events and social activities

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 2 | 2 | 2 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | mixed | mixed | mixed | 100% | ✓ |
| stakeholder_orientation | internal_data | mixed | mixed | mixed | 100% | ✗ |
| autonomy_level | mixed | strategic | strategic | strategic | 100% | ✗ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Establish data governance, quality testing, and mentoring for junior team members"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, governance, and quality as core expectations with no velocity or speed-focused language present.

**Run 2:** `rigour` ✓
> Quote: "Establish data governance, quality testing, and mentoring for junior team members"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals dominate (governance, quality testing, mentoring) with no velocity language, indicating delivery of reliable systems is the primary value orientation.

**Run 3:** `rigour` ✓
> Quote: "Establish data governance, quality testing, and mentoring for junior team members"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, testing, and clean data architecture with no velocity signals such as 'fast-paced' or 'rapid delivery'.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Partner consultatively with Product, Go-to-Market, and business teams on data-driven insights"
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around supporting business decisions for a B2B SaaS company without explicit regulatory, compliance, or financial reporting language.

**Run 2:** `moderate` ✓
> Quote: "Partner consultatively with Product, Go-to-Market, and business teams on data-driven insights"
> Verified: ✓ found in JD
> Reasoning: The role delivers business analytics for a B2B SaaS company with typical revenue metrics, not financial reporting or regulatory compliance, placing it at moderate risk.

**Run 3:** `moderate` ✓
> Quote: "Strong B2B SaaS business knowledge (ARR, NRR, churn, product-led growth)"
> Verified: ✓ found in JD
> Reasoning: The JD frames context as SaaS business metrics without explicit financial reporting, regulatory compliance, or audit language despite the security sector.

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "Product; Go-to-Market"
> Verified: ✓ found in JD
> Reasoning: Two named teams explicitly identified as primary partners in the responsibilities section.

**Run 2:** `2` ✓
> Quote: "Product; Go-to-Market"
> Verified: ✓ found in JD
> Reasoning: Two distinct named partner functions are explicitly listed as collaborators; generic terms like 'business teams' do not count as named teams.

**Run 3:** `2` ✓
> Quote: "Product, Go-to-Market"
> Verified: ✓ found in JD
> Reasoning: Two distinct named partner functions explicitly listed in the responsibilities section as collaboration targets.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "shift the team from reactive support toward proactive strategy"
> Verified: ✓ found in JD
> Reasoning: The team exists with established infrastructure and mentoring responsibilities, but is actively transitioning from reactive to proactive operations.

**Run 2:** `mid` ✓
> Quote: "mentoring for junior team members"
> Verified: ✓ found in JD
> Reasoning: The mention of mentoring junior team members indicates an established team in growth phase with infrastructure already in place, not early-stage or fully mature.

**Run 3:** `mid` ✓
> Quote: "shift the team from reactive support toward proactive strategy"
> Verified: ✓ found in JD
> Reasoning: The team exists with operational tools (dbt, Airflow, Redshift) and multiple members but is evolving from reactive to proactive capability.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Design, build, test, and maintain end-to-end data models within dbt-powered systems"
> Verified: ✓ found in JD
> Reasoning: Mix of specific technical context (dbt systems, named tools, AI data agents) alongside generic collaborative language like 'partner consultatively'.

**Run 2:** `mixed` ✓
> Quote: "shift the team from reactive support toward proactive strategy, addressing complex data architecture while enabling organizational self-service capabilities"
> Verified: ✓ found in JD
> Reasoning: The JD combines technically specific insights about moving from reactive to proactive and building self-serve systems with some generic boilerplate language, indicating input from both hiring manager and recruiter.

**Run 3:** `mixed` ✓
> Quote: "Design, build, test, and maintain end-to-end data models within dbt-powered systems"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about dbt model design contrasts with generic partnership and stakeholder guidance language elsewhere in responsibilities.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `mixed` ✗
> Quote: "Partner consultatively with Product, Go-to-Market, and business teams on data-driven insights"
> Verified: ✓ found in JD
> Reasoning: The role equally emphasizes serving commercial and product teams while building internal data infrastructure through self-serve solutions and governance.

**Run 2:** `mixed` ✗
> Quote: "Partner consultatively with Product, Go-to-Market, and business teams on data-driven insights"
> Verified: ✓ found in JD
> Reasoning: The role equally serves Product (product category) and Go-to-Market (commercial category) stakeholders, with responsibilities and requirements balanced between both audiences.

**Run 3:** `mixed` ✗
> Quote: "Partner consultatively with Product, Go-to-Market, and business teams on data-driven insights"
> Verified: ✓ found in JD
> Reasoning: Responsibilities explicitly emphasize equal partnership with both Product (product audience) and Go-to-Market (commercial/GTM audience).

⚠ **Disagreement**: manual=`internal_data` vs LLM majority=`mixed`

### autonomy_level
**Manual:** `mixed`

**Run 1:** `strategic` ✗
> Quote: "shift the team from reactive support toward proactive strategy"
> Verified: ✓ found in JD
> Reasoning: The role is framed as a 'strategic partner' setting direction for the team with verbs like 'establish' and 'guide' indicating ownership of strategy.

**Run 2:** `strategic` ✗
> Quote: "shift the team from reactive support toward proactive strategy, addressing complex data architecture while enabling organizational self-service capabilities"
> Verified: ✓ found in JD
> Reasoning: The role is expected to define strategy, establish governance practices, and architect solutions rather than execute direction set by others.

**Run 3:** `strategic` ✗
> Quote: "shift the team from reactive support toward proactive strategy"
> Verified: ✓ found in JD
> Reasoning: Strategic verbs like 'shift', 'design', and 'establish' frame the role as setting direction for data strategy and team capability.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`strategic`

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Implement AI data agents and automation for reporting and alerting systems"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build AI data infrastructure and agents, with both responsibility for implementation and requirement to be fluent with Claude Code.

**Run 2:** `ai_enabler` ✗
> Quote: "Implement AI data agents and automation for reporting and alerting systems"
> Verified: ✓ found in JD
> Reasoning: The candidate must build data infrastructure for AI systems to consume, making this ai_enabler; the requirement to be fluent with AI coding platforms adds ai_user dimension, but ai_enabler dominates.

**Run 3:** `ai_enabler` ✗
> Quote: "Implement AI data agents and automation for reporting and alerting systems"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build AI agents as infrastructure that runs autonomously, with Claude Code fluency as a supporting personal productivity skill.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Establish data governance, quality testing, and mentoring for junior team members"
> Verified: ✓ found in JD
> Reasoning: Testing and quality are framed as core responsibilities the candidate owns and establishes, not just tools listed in a skills requirement.

**Run 2:** `responsibility` ✗
> Quote: "Establish data governance, quality testing, and mentoring for junior team members"
> Verified: ✓ found in JD
> Reasoning: Quality testing is framed as a responsibility to establish and own using an action verb, not merely a tool to use, placing it at responsibility level.

**Run 3:** `responsibility` ✗
> Quote: "Establish data governance, quality testing, and mentoring for junior team members"
> Verified: ✓ found in JD
> Reasoning: The action verb 'Establish' before 'quality testing' indicates the candidate owns defining and implementing testing practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Transform messy datasets into clean, intuitive models serving as single sources of truth"
> Verified: ✓ found in JD
> Reasoning: Data reliability and quality are clearly valued primary concerns, but the framing emphasizes enabling good decisions rather than preventing regulatory or compliance risk.

**Run 2:** `moderate` ✗
> Quote: "Transform messy datasets into clean, intuitive models serving as single sources of truth"
> Verified: ✓ found in JD
> Reasoning: Data accuracy and reliability are emphasized, but framed as operational excellence rather than compliance risk or preventing catastrophic stakeholder failures.

**Run 3:** `moderate` ✗
> Quote: "Establish data governance, quality testing, and mentoring for junior team members"
> Verified: ✓ found in JD
> Reasoning: Operational reliability through governance and testing is emphasized but not framed as preventing regulatory exposure or stakeholder trust loss.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
