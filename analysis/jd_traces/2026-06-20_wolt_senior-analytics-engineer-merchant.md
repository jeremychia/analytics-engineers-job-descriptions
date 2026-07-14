# Trace: 2026-06-20_wolt_senior-analytics-engineer-merchant

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer, Merchant — Wolt

**URL:** https://job-boards.greenhouse.io/wolt/jobs/8006892
**Location:** Berlin, Germany; Helsinki, Finland; Stockholm, Sweden
**Salary:** Not listed

---

## Key Responsibilities

- Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data
- Working on centrally maintained data integrations and data pipelines
- Design and implement complex data pipelines with dependency control and orchestration
- Develop a self-service data modelling strategy
- Increase data literacy across the domain through training and documentation
- Lead, mentor, and guide more junior team members
- Managing data integrations, pipelines, models, and dashboards using modern tools (Snowflake, SQL, Looker, Airflow, Dagster, GitHub)

---

## Required Qualifications

- 5+ years of experience as an Analytics Engineer or BI Developer
- Strong hands-on experience with data integrations, data pipelines, data models, metric development, and dashboards
- Proficiency in Snowflake, SQL, Airflow, DBT, and visualization tools (Looker, Tableau, or Power BI)
- Advanced SQL skills and ability to write optimized queries for large data sets
- Strong business acumen and product-oriented thinking

---

## Preferred / Bonus Skills

- Experience with orchestration tools (Airflow, Dagster)
- Familiarity with in-house ETL systems
- Exposure to complex geolocational and temporal data challenges

---

## Benefits

- Hybrid, at the office, or remote within the location (Berlin, Helsinki, or Stockholm)
- Exposure to complex geolocational and temporal data challenges
- Opportunity to create significant impact
- Collaborative team environment with mentorship opportunities
- Inclusive company culture emphasising ownership and continuous learning

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | mixed | mixed | mixed | strategic | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Enhancing reporting and metrics quality as a whole"
> Verified: ✓ found in JD
> Reasoning: The headline responsibility emphasizes quality and metrics excellence, with supporting responsibilities focused on pipelines, models, and governance infrastructure rather than speed or iteration.

**Run 2:** `rigour` ✓
> Quote: "Design and implement complex data pipelines with dependency control and orchestration"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, dependency control, and orchestration as core values with no velocity language.

**Run 3:** `rigour` ✓
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes quality, architectural precision (dependency control, orchestration), and sustainable strategy over speed, with no velocity language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making for a delivery/marketplace platform but lacks explicit financial reporting, regulatory, or compliance language that would indicate high risk.

**Run 2:** `moderate` ✓
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: This is a merchant/marketplace analytics role supporting business decisions without explicit financial reporting, regulatory, or compliance implications.

**Run 3:** `moderate` ✓
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: Merchant analytics affects business decisions and operations, but the JD lacks financial reporting, regulatory, or compliance language that would signal high risk.

### collaboration_width
**Manual:** `3`

**Run 1:** `0` ✗
> Quote: "None"
> Verified: ✓ found in JD
> Reasoning: The JD contains no explicit naming of partner teams (Finance, Product, Engineering, etc.) despite clear cross-functional support expectations.

**Run 2:** `0` ✗
> Quote: "No named partner teams identified in JD"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD mentions collaboration and understanding business needs but does not explicitly name any specific partner teams or functions like Finance, Product, Engineering, etc.

**Run 3:** `0` ✗
> Quote: "No explicitly named partner teams or functions"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD focuses internally on data infrastructure and team mentorship with no named collaborating functions (Finance, Product, Sales, etc.) or partner teams.

⚠ **Disagreement**: manual=`3` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Working on centrally maintained data integrations and data pipelines; Lead, mentor, and guide more junior team members"
> Verified: ✓ found in JD
> Reasoning: The existence of centrally maintained infrastructure and junior team members to mentor indicates an established data function in a growth phase, not early-stage or fully mature.

**Run 2:** `mid` ✓
> Quote: "Managing data integrations, pipelines, models, and dashboards using modern tools (Snowflake, SQL, Looker, Airflow, Dagster, GitHub)"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities with specific application context, combined with mentoring junior team members, signal an established data function with existing infrastructure.

**Run 3:** `mid` ✓
> Quote: "Lead, mentor, and guide more junior team members"
> Verified: ✓ found in JD
> Reasoning: Existence of junior team members, centrally maintained pipelines, and strategic initiatives (self-serve modelling, data literacy programs) indicate a growing data function with operational maturity, not early-stage greenfield.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Design and implement complex data pipelines with dependency control and orchestration; Develop a self-service data modelling strategy"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical concepts (dependency control, self-serve strategy) suggesting hiring manager input, but also generic boilerplate (lead, mentor) typical of recruiter text.

**Run 2:** `hiring_manager` ✓
> Quote: "Design and implement complex data pipelines with dependency control and orchestration"
> Verified: ✓ found in JD
> Reasoning: The technical specificity—dependency control, orchestration, and reference to complex geolocational and temporal data challenges—reflects someone familiar with the actual work, not generic recruiter language.

**Run 3:** `mixed` ✗
> Quote: "Design and implement complex data pipelines with dependency control and orchestration"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about orchestration, dependency control, and self-serve strategy design is precise, but some responsibilities like 'enhancing quality' and 'working on pipelines' are more generic.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Develop a self-service data modelling strategy; Increase data literacy across the domain through training and documentation"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities emphasize building internal data infrastructure and self-serve analytics capabilities for internal consumers, not external commercial, product, or finance teams.

**Run 2:** `internal_data` ✓
> Quote: "Develop a self-service data modelling strategy"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building internal data infrastructure and self-serve analytics capabilities for data consumers, not external commercial, product, or financial audiences.

**Run 3:** `internal_data` ✓
> Quote: "Develop a self-serve data modelling strategy"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role's primary impact is on data infrastructure and internal data consumers, not commercial, product, or finance stakeholders.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Develop a self-service data modelling strategy; Design and implement complex data pipelines"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic direction-setting (developing strategy, leading team) with hands-on execution (designing and implementing pipelines, managing systems).

**Run 2:** `mixed` ✓
> Quote: "Develop a self-service data modelling strategy; Lead, mentor, and guide more junior team members"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic direction-setting (develop strategy, lead mentoring) with execution responsibilities (managing pipelines, working on integrations).

**Run 3:** `strategic` ✗
> Quote: "Develop a self-serve data modelling strategy"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role defines direction through strategy development, architectural design, and mentoring junior team members rather than executing priorities set by others.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI-assisted coding, coding agents, AI infrastructure, or any AI capabilities expected of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or building data infrastructure for AI systems.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No AI, machine learning, or coding assistant tools are mentioned anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Enhancing reporting and metrics quality as a whole"
> Verified: ✓ found in JD
> Reasoning: While quality outcomes are mentioned, the JD contains no explicit responsibility for testing, data contracts, quality frameworks, or data quality tools.

**Run 2:** `absent` ✗
> Quote: "Enhancing reporting and metrics quality as a whole"
> Verified: ✓ found in JD
> Reasoning: While quality is valued as an outcome, no testing frameworks, data contracts, or quality infrastructure practices are explicitly mentioned as an owned responsibility.

**Run 3:** `absent` ✗
> Quote: "Enhancing reporting and metrics quality as a whole, from understanding the needs of the business to providing easily understandable and actionable data"
> Verified: ✓ found in JD
> Reasoning: Quality is framed as an outcome responsibility, but testing frameworks, data contracts, observability practices, or data quality tools are not mentioned in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in capability and quality enhancement terms, not around preventing bad outcomes, risk management, or compliance concerns.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around delivering excellent analytics and building data capabilities, not preventing bad outcomes or managing compliance and reliability risk.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around building infrastructure and enabling self-serve analytics with no language around compliance, regulatory risk, reliability SLOs, or preventing bad data.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
