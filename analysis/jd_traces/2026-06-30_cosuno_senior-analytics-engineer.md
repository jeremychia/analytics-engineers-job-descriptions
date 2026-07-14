# Trace: 2026-06-30_cosuno_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Cosuno

**URL:** https://jobs.ashbyhq.com/cosuno/b1935448-d3ea-40fb-a011-2a3a98ba3160
**Location:** Berlin/Remote
**Date Posted:** 2026-06-30
**Salary:** 80,000–100,000 EUR

---

Senior Analytics Engineer
Location
Berlin/Remote

Employment Type
Full time

Location Type
Remote

Department
Tech
Business Intelligence

Compensation
€80K – €100K

Overview

Your mission
As a member of our Data team, you'll take full ownership of the systems that turn raw data into decisions—for our product, our internal teams, our customers, and our investors. You won't just maintain dashboards; you'll own the pipeline end to end, from ingestion to the numbers people actually act on.

In your first few months, you might:

Take ownership of our dbt pipeline, improving our data models so they're reliable, well-tested, and easy to build on.

Maintain and extend our Looker setup, and ship new dashboards and reports that customers and other stakeholders depend on.

Strengthen our data pipeline from Postgres to BigQuery, and build custom Python scripts to automate the flows that keep our warehouse fresh.

Integrate our data warehouse with external tools like Salesforce or ActiveCampaign, so the right data reaches the teams that need it.

How We Build: Our Engineering Culture
We believe in a calm, collaborative, and productive engineering environment. We trust our people and give them the autonomy to do their best work. Our approach includes:

Ownership Over Handoffs: On a small data team, you own your work from ingestion to dashboard. We trust you to make decisions and run with them.

Quality by Default: We treat our data models like production code—tested, version-controlled, and documented—so the numbers we serve are ones we can stand behind.

DevOps Mindset: We automate the boring parts. Pipelines, syncs, and checks are powered by third-party tools or GitHub Actions so the team can focus on the work that needs a human.

Collaboration & Transparency: We value open discussion, constructive reviews, and a culture where the best idea wins, regardless of who it comes from.

AI-Native by Default: We work heavily with Claude Code and other AI tools, and they're a core part of how we build—from writing models and scripts to debugging pipelines and exploring data. We expect everyone on the team to use them fluently and keep getting better at it.

Your profile
We're looking for an experienced data practitioner who likes owning the full stack of an analytics platform. You'll be a great fit if you have:

Significant professional experience building and maintaining data models with dbt and writing advanced SQL.

Solid Python skills for data syncing, automation, and general scripting.

Hands-on experience with a cloud data warehouse such as BigQuery, and comfort working with source databases like Postgres.

Experience building dashboards and serving data to non-technical stakeholders (a strong command of Looker is a big plus).

Strong, hands-on familiarity with AI coding tools—especially Claude Code—and a habit of using them as part of your daily workflow.

A pragmatic approach to problem-solving and a high sense of ownership, feeling comfortable driving projects independently.

Excellent communication skills in English.

Bonus Points For (Nice-to-Haves):
Experience with reverse ETL or integrating a data warehouse with tools like ActiveCampaign or Salesforce.

Experience building and maintaining CI/CD or automation pipelines (e.g. GitHub Actions).

Experience preparing data and reporting for external audiences such as customers or investors.

An interest in data engineering best practices, pipeline reliability, and infrastructure-as-code.

Why us?
Competitive Compensation: A competitive salary above the market average.

Work-Life Balance: Choose to work 100% remotely or from our modern office in Berlin. We offer flexible working hours to fit your life.

Top-Notch Equipment: A new MacBook Pro to ensure you have the best tools for the job…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 2 | 2 | 0 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | hiring_manager | hiring_manager | 33% | ✓ |
| stakeholder_orientation | mixed | internal_data | internal_data | mixed | 33% | ✗ |
| autonomy_level | strategic | strategic | strategic | mixed | 33% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Quality by Default: We treat our data models like production code—tested, version-controlled, and documented—so the numbers we serve are ones we can stand behind."
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (testing, documentation, reliability, production-grade standards) with no velocity language; quality and correctness are framed as core expectations.

**Run 2:** `rigour` ✓
> Quote: "We treat our data models like production code—tested, version-controlled, and documented—so the numbers we serve are ones we can stand behind."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, quality, reliability, and documentation as core expectations with no language about speed, iteration, or rapid delivery.

**Run 3:** `rigour` ✓
> Quote: "Quality by Default: We treat our data models like production code—tested, version-controlled, and documented—so the numbers we serve are ones we can stand behind."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes quality, testing, and reliability throughout ("reliable, well-tested", "production code", "stand behind") with no velocity signals, establishing rigour as the primary orientation.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "for our product, our internal teams, our customers, and our investors"
> Verified: ✓ found in JD
> Reasoning: Data affects business decisions and customer reporting but no regulatory, compliance, or financial reporting language that would indicate high risk.

**Run 2:** `moderate` ✓
> Quote: "turn raw data into decisions—for our product, our internal teams, our customers, and our investors"
> Verified: ✓ found in JD
> Reasoning: The data serves business decisions and customer-facing SaaS operations without explicit financial reporting, regulatory compliance, or P&L language typical of high-risk roles.

**Run 3:** `moderate` ✓
> Quote: "artificial intelligence is the key to our solution: it analyzes millions of price data points and helps construction companies create precise and efficient bids."
> Verified: ✓ found in JD
> Reasoning: Data errors impact customer business decisions and product quality, but the JD contains no language about financial reporting, regulatory compliance, or audit—typical of moderate-risk roles.

### collaboration_width
**Manual:** `3`

**Run 1:** `2` ✗
> Quote: "customers and other stakeholders depend on; investors"
> Verified: ✓ found in JD
> Reasoning: Two explicitly named external collaborators: customers (receive dashboards and reports) and investors (receive data); product and internal teams are too generic.

**Run 2:** `2` ✗
> Quote: "customers and our investors"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD explicitly names two external collaboration partners; internal teams and other stakeholders are mentioned generically without naming specific functions.

**Run 3:** `0` ✗
> Quote: "No named partner teams explicitly identified as collaboration partners"
> Verified: ⚠ NOT found verbatim
> Reasoning: While the role serves customers and investors, these are framed as audiences for dashboards and reports, not as named collaboration partners; internal teams are mentioned generically without specific function names.

⚠ **Disagreement**: manual=`3` vs LLM majority=`2`

⚠ **LLM inconsistency**: runs gave ['2', '2', '0']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Maintain and extend our Looker setup, and ship new dashboards and reports that customers and other stakeholders depend on."
> Verified: ✓ found in JD
> Reasoning: Existing named tools (dbt, Looker, BigQuery, Postgres) in production use with responsibilities framed as maintaining and extending; team described as small but established.

**Run 2:** `mid` ✓
> Quote: "On a small data team, you own your work from ingestion to dashboard."
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (dbt, Looker, BigQuery, Postgres) and existing infrastructure indicate an established but small data function in growth phase.

**Run 3:** `mid` ✓
> Quote: "On a small data team, you own your work from ingestion to dashboard."
> Verified: ✓ found in JD
> Reasoning: Named tools exist in responsibilities (dbt, Looker, BigQuery, Postgres) and the role focuses on improving and extending infrastructure, signaling a team past greenfield but not yet established at scale.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Take ownership of our dbt pipeline, improving our data models so they're reliable, well-tested, and easy to build on."
> Verified: ✓ found in JD
> Reasoning: Specific technical responsibilities with named tools and precise application context combined with significant cultural framing sections.

**Run 2:** `hiring_manager` ✓
> Quote: "Take ownership of our dbt pipeline, improving our data models so they're reliable, well-tested, and easy to build on. Maintain and extend our Looker setup, and ship new dashboards and reports that customers and other stakeholders depend on. Strengthen our data pipeline from Postgres to BigQuery, and build custom Python scripts to automate the flows that keep our warehouse fresh."
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific tool names, infrastructure context, and concrete workflows that someone actively doing this job would describe.

**Run 3:** `hiring_manager` ✓
> Quote: "Strengthen our data pipeline from Postgres to BigQuery, and build custom Python scripts to automate the flows that keep our warehouse fresh."
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain technical specificity (exact tools like dbt, Looker, BigQuery, Postgres; specific integrations with Salesforce/ActiveCampaign) that reflects hands-on domain knowledge.

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'hiring_manager']

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `internal_data` ✗
> Quote: "own the pipeline end to end, from ingestion to the numbers people actually act on"
> Verified: ✓ found in JD
> Reasoning: Role emphasizes infrastructure and platform ownership that serves multiple audiences rather than serving a specific business function.

**Run 2:** `internal_data` ✗
> Quote: "you'll own the pipeline end to end, from ingestion to the numbers people actually act on"
> Verified: ✓ found in JD
> Reasoning: The role is primarily about building and maintaining data infrastructure and the modeling layer, even though outputs serve various audiences.

**Run 3:** `mixed` ✓
> Quote: "turn raw data into decisions—for our product, our internal teams, our customers, and our investors."
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves four distinct audiences (product teams, internal operations, commercial customers, and finance/investors) with genuinely equal framing rather than emphasis on one.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`internal_data`

⚠ **LLM inconsistency**: runs gave ['internal_data', 'internal_data', 'mixed']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "take full ownership of the systems that turn raw data into decisions"
> Verified: ✓ found in JD
> Reasoning: Emphasis on ownership, making independent decisions, and driving projects; role is framed around defining and shaping data systems rather than executing defined work.

**Run 2:** `strategic` ✓
> Quote: "We trust you to make decisions and run with them."
> Verified: ✓ found in JD
> Reasoning: The role emphasizes ownership authority, decision-making autonomy, and independent project driving throughout, not execution of pre-scoped work.

**Run 3:** `mixed` ✗
> Quote: "take full ownership of the systems that turn raw data into decisions—for our product, our internal teams, our customers, and our investors."
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of the technical data platform ("take full ownership", "We trust you to make decisions") with execution in service of business teams' priorities (product, customer, investor needs).

⚠ **LLM inconsistency**: runs gave ['strategic', 'strategic', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Strong, hands-on familiarity with AI coding tools—especially Claude Code—and a habit of using them as part of your daily workflow."
> Verified: ✓ found in JD
> Reasoning: Candidate expected to use AI tools to accelerate personal work (writing models, scripts, debugging) as a productivity tool, not to build AI-consuming data infrastructure.

**Run 2:** `ai_user` ✗
> Quote: "We work heavily with Claude Code and other AI tools, and they're a core part of how we build—from writing models and scripts to debugging pipelines and exploring data."
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to use AI coding tools fluently as a core part of daily workflow to accelerate writing, debugging, and data work.

**Run 3:** `ai_user` ✗
> Quote: "Strong, hands-on familiarity with AI coding tools—especially Claude Code—and a habit of using them as part of your daily workflow."
> Verified: ✓ found in JD
> Reasoning: The JD expects the candidate to use AI tools (Claude Code, others) as a core part of daily work to accelerate their own coding and debugging, not to build AI infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "We treat our data models like production code—tested, version-controlled, and documented—so the numbers we serve are ones we can stand behind."
> Verified: ✓ found in JD
> Reasoning: Testing, quality, and documentation are framed as core responsibilities the candidate owns and defines, not listed as tool requirements.

**Run 2:** `responsibility` ✗
> Quote: "improving our data models so they're reliable, well-tested, and easy to build on"
> Verified: ✓ found in JD
> Reasoning: Data quality and testing are framed as an expected outcome the role is accountable for owning, not just a tool listed in requirements.

**Run 3:** `responsibility` ✗
> Quote: "improving our data models so they're reliable, well-tested, and easy to build on."
> Verified: ✓ found in JD
> Reasoning: The candidate owns ensuring models are well-tested as part of their core responsibility, framed with action verbs that establish quality as their accountability.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "the numbers we serve are ones we can stand behind"
> Verified: ✓ found in JD
> Reasoning: Emphasis on reliability, trustworthiness, and data quality reflects operational concerns about delivering reliable systems rather than regulatory or compliance risk.

**Run 2:** `moderate` ✗
> Quote: "the numbers we serve are ones we can stand behind"
> Verified: ✓ found in JD
> Reasoning: The emphasis is on operational reliability and quality (production code, testing, documentation) rather than regulatory compliance or high-stakes stakeholder trust.

**Run 3:** `moderate` ✗
> Quote: "the numbers we serve are ones we can stand behind."
> Verified: ✓ found in JD
> Reasoning: Quality and reliability are framed as building stakeholder trust and operational dependability, reflecting moderate loss aversion around pipeline stability rather than high-stakes compliance or regulatory risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
