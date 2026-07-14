# Trace: 2026-06-27_dashlane_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Dashlane

**URL:** https://job-boards.greenhouse.io/dashlane/jobs/7988501
**Location:** Lisbon, Portugal (Hybrid)
**Date Posted:** 2026-06-27

---

Analytics Engineer

Dashlane — Lisbon, Portugal (Hybrid)

About Dashlane

Dashlane is a credential security company serving millions of consumers and 25,000+ brands across the globe. With 300+ employees across offices in Paris, New York, and Lisbon, Dashlane's mission is to make credential security effortless for everyone.

About the Role

As an Analytics Engineer at Dashlane, you will play a pivotal role in transforming raw data into strategic business value. You'll work at the intersection of data engineering and business intelligence, owning the data models that power decision-making across the company. This is an opportunity to work on meaningful problems, partnering directly with product and go-to-market teams, and driving self-service analytics adoption across the organisation.

Responsibilities

Data Modeling: Design, build, test, and own end-to-end data models within our dbt-powered "Unified Data Model." You will ensure models are reliable, well-documented, and aligned with business logic.

Business Partnership: Act as a consultant to product and go-to-market teams, moving from reactive data support to proactive strategic insights. You will help teams understand and leverage data effectively.

Self-Service Analytics: Drive adoption of self-serve solutions in Omni while mentoring stakeholders to become more data-literate and independent in their analytics workflows.

AI & Automation: Implement AI data agents and the necessary underlying foundations to automate reporting and alerting, pushing the frontier of what analytics engineering looks like in an AI-first world.

Data Governance: Establish quality tests and governance practices while mentoring junior engineers in analytics engineering best practices.

Requirements

- 3+ years of experience in Analytics Engineering or an equivalent role
- Expert-level SQL and dbt proficiency with production experience
- Strong understanding of B2B SaaS metrics: ARR, NRR, churn, PLG
- Consultative stakeholder management abilities — you know how to translate business questions into data solutions
- You are fluent with AI coding platforms such as Claude Code
- Autonomous work style with curiosity for complex data challenges
- Fluent English (verbal and written)

Tech Stack

dbt, SQL, Python, AWS (Redshift, S3, Lambda, Kinesis, Glue), Omni, Airflow, GitLab, Claude Code

Benefits

- Flex benefits (monthly allowance to spend on what matters to you)
- Full health insurance coverage
- Extra vacation days
- Enhanced parental leave: 20 weeks fully paid for all parents
- Mental health support through Spring Health
- Donation matching for charitable contributions
- Quarterly company wellness days
- Team events and offsites

Work Arrangement

Hybrid schedule: in-office on Mondays, Tuesdays, and Thursdays. Flexible Wednesdays and Fridays for focused work.

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
| jd_authorship | hiring_manager | mixed | hiring_manager | hiring_manager | 33% | ✓ |
| stakeholder_orientation | mixed | mixed | mixed | mixed | 100% | ✓ |
| autonomy_level | mixed | strategic | strategic | strategic | 100% | ✗ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "You will ensure models are reliable, well-documented, and aligned with business logic."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, documentation, reliability, and governance as core expectations with no opposing velocity signals.

**Run 2:** `rigour` ✓
> Quote: "Design, build, test, and own end-to-end data models within our dbt-powered "Unified Data Model." You will ensure models are reliable, well-documented, and aligned with business logic."
> Verified: ✓ found in JD
> Reasoning: The responsibilities repeatedly emphasize testing, reliability, documentation, and governance practices as core expectations rather than speed or iteration.

**Run 3:** `rigour` ✓
> Quote: "You will ensure models are reliable, well-documented, and aligned with business logic."
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (reliable, well-documented, testing, governance, quality tests) dominate the responsibilities with zero velocity language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "owning the data models that power decision-making across the company"
> Verified: ✓ found in JD
> Reasoning: Data errors would affect business decisions but there is no explicit mention of financial reporting, regulatory compliance, audit, or revenue attribution.

**Run 2:** `moderate` ✓
> Quote: "owning the data models that power decision-making across the company"
> Verified: ✓ found in JD
> Reasoning: Data errors affect business decisions but the role has no explicit financial reporting, regulatory compliance, or public-facing product impact.

**Run 3:** `moderate` ✓
> Quote: "owning the data models that power decision-making across the company"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making in B2B SaaS without explicit financial reporting, compliance, or regulatory framing, indicating moderate risk.

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "product and go-to-market teams"
> Verified: ✓ found in JD
> Reasoning: Two distinct named partner functions are explicitly identified: product teams and go-to-market teams.

**Run 2:** `2` ✓
> Quote: "product and go-to-market teams"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names two distinct partner team categories: product and go-to-market.

**Run 3:** `2` ✓
> Quote: "product and go-to-market teams"
> Verified: ✓ found in JD
> Reasoning: Only two distinct named collaborative teams are explicitly identified in the responsibilities section.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "mentoring junior engineers in analytics engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The presence of junior engineers being mentored indicates an existing team that is scaling, with established infrastructure (dbt, Omni) already in place.

**Run 2:** `mid` ✓
> Quote: "within our dbt-powered "Unified Data Model." ... mentoring junior engineers in analytics engineering best practices"
> Verified: ⚠ NOT found verbatim
> Reasoning: Named tools in responsibilities (dbt, Omni, Airflow) with specific application context and a team structure including junior engineers indicate a growing but established data function.

**Run 3:** `mid` ✓
> Quote: "Design, build, test, and own end-to-end data models within our dbt-powered "Unified Data Model.""
> Verified: ✓ found in JD
> Reasoning: Named infrastructure (dbt, Unified Data Model, Omni) already in place with mentoring of junior engineers present, indicating an established but growing data function.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Implement AI data agents and the necessary underlying foundations to automate reporting and alerting, pushing the frontier of what analytics engineering looks like in an AI-first world."
> Verified: ✓ found in JD
> Reasoning: The JD combines specific technical methodology (AI data agents, reporting automation) with aspirational framing language, blending hiring manager specificity and recruiter genericism.

**Run 2:** `hiring_manager` ✓
> Quote: "Design, build, test, and own end-to-end data models within our dbt-powered "Unified Data Model." Implement AI data agents and the necessary underlying foundations to automate reporting and alerting"
> Verified: ⚠ NOT found verbatim
> Reasoning: Specific technical details (dbt, Unified Data Model, Omni, AI data agents with underlying foundations) indicate this was written by someone who understands the actual work.

**Run 3:** `hiring_manager` ✓
> Quote: "Design, build, test, and own end-to-end data models within our dbt-powered "Unified Data Model.""
> Verified: ✓ found in JD
> Reasoning: Specific technical context about internal infrastructure (dbt, Unified Data Model) and precise responsibilities indicate someone doing this work wrote this section.

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'hiring_manager']

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "partnering directly with product and go-to-market teams"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves both product and go-to-market (commercial) audiences with equal emphasis, with infrastructure building enabling both.

**Run 2:** `mixed` ✓
> Quote: "Act as a consultant to product and go-to-market teams, moving from reactive data support to proactive strategic insights. Drive adoption of self-serve solutions in Omni while mentoring stakeholders to become more data-literate"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role explicitly balances external stakeholder consultation (product, go-to-market teams) with internal platform building and enablement (self-serve analytics), with equal responsibility weight.

**Run 3:** `mixed` ✓
> Quote: "Act as a consultant to product and go-to-market teams, moving from reactive data support to proactive strategic insights."
> Verified: ✓ found in JD
> Reasoning: The role explicitly names both product and commercial (GTM) stakeholders as primary partners, while other responsibilities emphasize internal data infrastructure equally.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `strategic` ✗
> Quote: "owning the data models that power decision-making across the company"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes ownership of models, establishing governance practices, and mentoring junior engineers—setting direction rather than executing direction set by others.

**Run 2:** `strategic` ✗
> Quote: "Design, build, test, and own end-to-end data models ... Establish quality tests and governance practices"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role emphasizes ownership and establishment of practices and direction rather than execution of work set by others.

**Run 3:** `strategic` ✗
> Quote: "Design, build, test, and own end-to-end data models"
> Verified: ✓ found in JD
> Reasoning: The use of 'own' combined with 'drive adoption' and 'establish' governance practices indicates strategic ownership of key analytics functions, not execution of scoped work.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`strategic`

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Implement AI data agents and the necessary underlying foundations to automate reporting and alerting"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure for AI systems to operate on, with Claude Code fluency as a supporting requirement for the work.

**Run 2:** `ai_enabler` ✗
> Quote: "Implement AI data agents and the necessary underlying foundations to automate reporting and alerting, pushing the frontier of what analytics engineering looks like in an AI-first world."
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build AI data infrastructure and enable AI systems, not just use AI tools for personal productivity.

**Run 3:** `ai_enabler` ✗
> Quote: "Implement AI data agents and the necessary underlying foundations to automate reporting and alerting, pushing the frontier of what analytics engineering looks like in an AI-first world."
> Verified: ✓ found in JD
> Reasoning: Both ai_user (fluency with Claude Code required) and ai_enabler signals are present; the responsibility to build AI data agent infrastructure indicates the higher-level expectation.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Establish quality tests and governance practices while mentoring junior engineers"
> Verified: ✓ found in JD
> Reasoning: Testing and governance are framed as core owned responsibilities using action verbs, not as tools listed in a skill matrix.

**Run 2:** `responsibility` ✗
> Quote: "Establish quality tests and governance practices while mentoring junior engineers in analytics engineering best practices."
> Verified: ✓ found in JD
> Reasoning: Testing and quality governance are framed as practices the candidate owns, establishes, and teaches rather than tools they use.

**Run 3:** `responsibility` ✗
> Quote: "Design, build, test, and own end-to-end data models... Establish quality tests and governance practices"
> Verified: ⚠ NOT found verbatim
> Reasoning: Testing and quality frameworks are framed as core owned responsibilities with 'own' and 'establish' verbs, not merely tools in a requirements list.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "You will ensure models are reliable, well-documented, and aligned with business logic."
> Verified: ✓ found in JD
> Reasoning: Operational reliability is emphasized through testing, documentation, and governance, but there is no compliance, regulatory, or audit framing that would indicate high risk aversion.

**Run 2:** `moderate` ✗
> Quote: "ensure models are reliable, well-documented, and aligned with business logic. Establish quality tests and governance practices."
> Verified: ⚠ NOT found verbatim
> Reasoning: Operational reliability and quality are clear concerns but secondary to the primary mission of delivering strategic business value, with no compliance or regulatory risk framing.

**Run 3:** `moderate` ✗
> Quote: "You will ensure models are reliable, well-documented, and aligned with business logic."
> Verified: ✓ found in JD
> Reasoning: Operational reliability (reliable models, quality tests) is expected but secondary to delivery and adoption themes, indicating moderate concern without compliance or regulatory framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
