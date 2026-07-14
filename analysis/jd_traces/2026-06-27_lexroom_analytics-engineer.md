# Trace: 2026-06-27_lexroom_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Lexroom.ai

**URL:** https://jobs.ashbyhq.com/lexroom/9963d624-22b2-4dde-9fe0-d98dae51ff21
**Location:** Milan, Italy (Hybrid)
**Date Posted:** 2026-06-27
**Salary:** €45,000–€70,000 EUR

---

At Lexroom.ai, we set the bar for legal AI—clear, fast, and built for trust.

In just a few years, what began as an idea has become a reliable platform adopted by thousands of legal professionals across Europe.

Our mission is clear: make the law faster, clearer, and more reliable, giving lawyers, law firms, and companies the time and confidence to focus on what truly matters.

We're scaling rapidly, backed by top-tier investors and a world-class team dedicated to rigor, clarity, and impact.

Today, Lexroom is a trusted partner, shaping the future of legal AI with discipline and purpose.

Why Lexroom.ai?
Shape the Standard: Be part of the team setting the benchmark for legal AI in Europe.

Work with the Best: Collaborate with exceptional colleagues in a culture that values competence, curiosity, and ambition.

Deliver Meaningful Results: Your work will directly influence how legal professionals operate—faster, clearer, and more efficiently.

At Lexroom.ai, we leave buzzwords behind. Here, you'll build something that lasts: a trusted platform, a strong reputation, a new standard for the legal world.

What You'll Do
Own the data transformation layer from raw sources to trusted, documented datasets—designing and maintaining a dbt project on BigQuery with staging, intermediate, and mart layers.

Model product analytics events (user interactions, feature adoption, feedback signals), engineering metrics, and business KPIs into reliable, self-service data models.

Build and maintain the data foundations powering our dashboards, decisions, and team health metrics.

Implement data quality frameworks: tests, freshness checks, anomaly detection, and clear ownership and SLAs on key datasets.

Collaborate with engineers to improve event tracking and data contracts at the source (Pub/Sub, application events).

Create and curate dashboards and semantic layers that Product, CS, and Sales teams can query directly—enabling true self-service analytics.

Partner with the AI & Search Platform team to instrument and measure model performance, feedback loops, and benchmark results.

Support Product teams with ad-hoc analysis: feature impact, user segmentation, satisfaction trends, and power-user behavior.

What You'll Bring
3+ years of experience in analytics engineering, data engineering, or a data analyst role with a strong engineering mindset.

Expert SQL skills and hands-on experience with dbt (dbt Core or dbt Cloud).

Solid experience with BigQuery or comparable cloud data warehouses (Snowflake, Redshift).

Strong understanding of dimensional modeling, data testing, and documentation-as-code practices.

Comfortable working in a Python ecosystem (scripting, basic ETL, notebooks for exploration).

Experience building data models that serve multiple stakeholders (product, engineering, business).

Fluent English; Italian is a strong plus.

Nice to Have

Experience with event-driven architectures (Pub/Sub, Kafka) and streaming data.

Familiarity with Elasticsearch, Pinecone, or vector databases.

Exposure to engineering metrics (DORA, PR analytics) or developer productivity measurement.

Experience with BI/visualization tools (Retool, Looker Studio, Metabase).

Interest in AI/ML model evaluation and LLM output quality measurement.

Previous experience in legal-tech, RegTech, or B2B SaaS.

What Sets Us Apart
An Exceptional Team

At Lexroom.ai, you'll work alongside top talent in tech and legal AI.

Our focused teams operate with purpose and autonomy, so every contribution delivers visible results.

You'll collaborate with people who pair innovation with rigor, curiosity with discipline, ambition with depth.

A Foundational Role

This is our first dedicated analytics hire. You won't inherit a legacy stack or fight bureaucracy—you'll design…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 5 | 5 | 5 | 100% | ✗ |
| data_team_maturity | early | early | early | early | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | product | product | product | internal_data | 33% | ✓ |
| autonomy_level | strategic | strategic | mixed | strategic | 33% | ✓ |
| ai_role |  | ai_enabler | none | none | 33% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | high | high | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Implement data quality frameworks: tests, freshness checks, anomaly detection, and clear ownership and SLAs on key datasets"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data quality frameworks, testing, SLAs, and reliability as core expectations rather than speed or delivery pace.

**Run 2:** `rigour` ✓
> Quote: "Implement data quality frameworks: tests, freshness checks, anomaly detection, and clear ownership and SLAs on key datasets."
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data quality, testing, documentation, and SLAs rather than speed or shipping, with multiple rigour signals and no velocity language.

**Run 3:** `rigour` ✓
> Quote: "Implement data quality frameworks: tests, freshness checks, anomaly detection, and clear ownership and SLAs on key datasets."
> Verified: ✓ found in JD
> Reasoning: The responsibilities consistently emphasize testing, data quality, documentation, and SLAs with no corresponding velocity or speed-focused language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Build and maintain the data foundations powering our dashboards, decisions, and team health metrics"
> Verified: ✓ found in JD
> Reasoning: While legal tech is a regulated sector, the JD responsibilities focus on product analytics and dashboarding rather than financial reporting, compliance, or regulatory obligations.

**Run 2:** `moderate` ✓
> Quote: "Build and maintain the data foundations powering our dashboards, decisions, and team health metrics."
> Verified: ✓ found in JD
> Reasoning: The role affects business-critical decisions but lacks explicit regulatory, compliance, or financial reporting language typical of high-risk domains.

**Run 3:** `moderate` ✓
> Quote: "Model product analytics events (user interactions, feature adoption, feedback signals), engineering metrics, and business KPIs"
> Verified: ✓ found in JD
> Reasoning: The role supports business intelligence and product decisions without explicit regulatory, compliance, or financial reporting language.

### collaboration_width
**Manual:** `4`

**Run 1:** `5` ✗
> Quote: "Collaborate with engineers to improve event tracking and data contracts at the source; Create and curate dashboards and semantic layers that Product, CS, and Sales teams can query directly; Partner with the AI & Search Platform team to instrument and measure model performance"
> Verified: ✓ found in JD
> Reasoning: Five distinct named teams are explicitly listed: Engineering, Product, Customer Success, Sales, and AI & Search Platform team.

**Run 2:** `5` ✗
> Quote: "engineers; Product, CS, and Sales teams; AI & Search Platform team"
> Verified: ✓ found in JD
> Reasoning: The JD names five distinct partner teams: engineers, Product, Customer Success, Sales, and the AI & Search Platform team.

**Run 3:** `5` ✗
> Quote: "engineers; Product, CS, and Sales teams; AI & Search Platform team"
> Verified: ✓ found in JD
> Reasoning: Five distinct named partner teams are explicitly mentioned: engineers, Product, Customer Success, Sales, and AI & Search Platform.

⚠ **Disagreement**: manual=`4` vs LLM majority=`5`

### data_team_maturity
**Manual:** `early`

**Run 1:** `early` ✓
> Quote: "This is our first dedicated analytics hire. You won't inherit a legacy stack or fight bureaucracy—you'll design the analytics function from scratch with direct executive sponsorship"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly identifies this as the first analytics hire and states the candidate will design the analytics function from scratch, indicating early-stage team building.

**Run 2:** `early` ✓
> Quote: "This is our first dedicated analytics hire. You won't inherit a legacy stack or fight bureaucracy—you'll design the analytics function from scratch"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly identifies this as the first dedicated analytics hire with a mandate to design the analytics function from the ground up, indicating early-stage maturity.

**Run 3:** `early` ✓
> Quote: "This is our first dedicated analytics hire. You won't inherit a legacy stack or fight bureaucracy—you'll design the analytics function from scratch"
> Verified: ✓ found in JD
> Reasoning: The phrase 'first dedicated analytics hire' combined with 'design the analytics function from scratch' is a definitive early-stage signal.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "designing and maintaining a dbt project on BigQuery with staging, intermediate, and mart layers"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical knowledge of dbt architecture (staging/intermediate/mart layers), data contracts, and Pub/Sub event tracking that signals direct experience from someone who has performed this work.

**Run 2:** `hiring_manager` ✓
> Quote: "Own the data transformation layer from raw sources to trusted, documented datasets—designing and maintaining a dbt project on BigQuery with staging, intermediate, and mart layers."
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical methodology (staging/intermediate/mart layers), named tools (dbt, BigQuery), and precise practices (data contracts, semantic layers) that indicate hands-on domain expertise rather than recruiter boilerplate.

**Run 3:** `hiring_manager` ✓
> Quote: "dbt project on BigQuery with staging, intermediate, and mart layers"
> Verified: ✓ found in JD
> Reasoning: The specific architectural pattern (staging/intermediate/mart layers) and precise named tool context (dbt on BigQuery) indicates technical expertise in the writer.

### stakeholder_orientation
**Manual:** `product`

**Run 1:** `product` ✓
> Quote: "Model product analytics events (user interactions, feature adoption, feedback signals), engineering metrics, and business KPIs into reliable, self-service data models"
> Verified: ✓ found in JD
> Reasoning: The primary emphasis in responsibilities is on product analytics (feature adoption, user interactions, feature impact) and supporting product teams with self-service analytics.

**Run 2:** `product` ✓
> Quote: "Model product analytics events (user interactions, feature adoption, feedback signals), engineering metrics, and business KPIs into reliable, self-service data models."
> Verified: ✓ found in JD
> Reasoning: The primary emphasis is on product analytics (feature adoption, user behavior) and enabling Product teams with self-service analytics, centered on product decision-making.

**Run 3:** `internal_data` ✗
> Quote: "Own the data transformation layer from raw sources to trusted, documented datasets—designing and maintaining a dbt project on BigQuery with staging, intermediate, and mart layers."
> Verified: ✓ found in JD
> Reasoning: The primary emphasis is on building and maintaining data infrastructure (transformation layer, data foundations, quality frameworks) that internal teams consume.

⚠ **LLM inconsistency**: runs gave ['product', 'product', 'internal_data']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "you'll design the analytics function from scratch with direct executive sponsorship"
> Verified: ✓ found in JD
> Reasoning: The role is framed around designing and building the analytics function with executive backing, emphasizing strategic ownership rather than execution within an existing structure.

**Run 2:** `mixed` ✗
> Quote: "This is our first dedicated analytics hire. You won't inherit a legacy stack or fight bureaucracy—you'll design the analytics function from scratch"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic direction-setting (designing analytics from scratch, owning the data transformation layer) with execution work (supporting product teams, implementing frameworks).

**Run 3:** `strategic` ✓
> Quote: "you'll design the analytics function from scratch with direct executive sponsorship"
> Verified: ✓ found in JD
> Reasoning: The role is explicitly framed around designing and establishing the analytics function, not executing against predefined priorities.

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Partner with the AI & Search Platform team to instrument and measure model performance, feedback loops, and benchmark results"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build observability and measurement infrastructure (feedback loops, performance monitoring, benchmarking systems) that AI systems consume and operate on.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The candidate is not expected to use AI tools, build AI infrastructure, or have AI expertise; the company operates in legal AI but the role is standard analytics engineering.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: While the company builds legal AI products, the JD expects no AI skills from the candidate; AI/ML evaluation is listed only as nice-to-have.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['ai_enabler', 'none', 'none']

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implement data quality frameworks: tests, freshness checks, anomaly detection, and clear ownership and SLAs on key datasets"
> Verified: ✓ found in JD
> Reasoning: The candidate owns implementing data quality frameworks and testing practices with accountability through SLAs, not just using tools listed in requirements.

**Run 2:** `responsibility` ✗
> Quote: "Implement data quality frameworks: tests, freshness checks, anomaly detection, and clear ownership and SLAs on key datasets."
> Verified: ✓ found in JD
> Reasoning: The action verb 'Implement' combined with ownership framing ('clear ownership and SLAs') indicates the candidate owns data quality frameworks as a core responsibility.

**Run 3:** `responsibility` ✗
> Quote: "Implement data quality frameworks: tests, freshness checks, anomaly detection, and clear ownership and SLAs on key datasets."
> Verified: ✓ found in JD
> Reasoning: The verb 'Implement' frames data quality and testing as the candidate's primary responsibility, not a tool they'll use.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "at Lexroom is a trusted partner, shaping the future of legal AI with discipline and purpose"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD emphasizes trust and operational reliability as core values but frames risk around platform trustworthiness and user confidence rather than regulatory compliance or audit concerns.

**Run 2:** `high` ✗
> Quote: "set the bar for legal AI—clear, fast, and built for trust"
> Verified: ✓ found in JD
> Reasoning: Stakeholder trust is explicitly emphasized in the role summary and reinforced through multiple reliability/quality signals in the first responsibility ('trusted, documented datasets'), indicating trust is a primary concern dominating the role framing.

**Run 3:** `high` ✗
> Quote: "we set the bar for legal AI—clear, fast, and built for trust"
> Verified: ✓ found in JD
> Reasoning: Stakeholder trust (thousands of legal professionals relying on a trusted platform) is central to the company's positioning and the role's quality/reliability emphasis.

⚠ **Disagreement**: manual=`` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'high']
