# Trace: 2026-07-01_entain_analytics-engineer-bi

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer (BI) — Entain

**URL:** https://jobs.smartrecruiters.com/Entain/744000131097774-analytics-engineer-bi-?trid=2d92f286-613b-4daf-9dfa-6340ffbecf73
**Location:** Not stated in JD
**Date Posted:** 2026-07-01

---

Analytics Engineer (BI) at Entain

Company Description
Sports betting, gaming and interactive entertainment is changing, and we're leading that change. By putting people first. The company emphasises innovation, technology, and people-focused culture.

Role Summary
This position operates within the Data & Analytics department as a full-time role. The Analytics Engineer translates data into actionable insights for business stakeholders through analysis, dashboards, and reporting.

Key Responsibilities
- Extract and analyze large datasets from Snowflake using SQL to generate meaningful insights
- Design and maintain dbt models for the analytics semantic layer
- Build scalable dashboards and reporting solutions
- Translate business questions into structured analysis
- Deliver ad-hoc analysis to support decision-making
- Contribute to self-serve analytics capabilities
- Apply version control practices using Git
- Support team members in dbt and data modeling
- Collaborate with Data Engineering to improve data quality

Essential Requirements
- Degree in Statistics, Economics, Mathematics, Computer Science, or related discipline
- Advanced SQL skills, with the ability to query, optimise, and model large datasets in Snowflake or similar platforms
- Practical experience with dbt, Git workflows, data modeling principles
- Proficiency in Excel

Desired Qualifications
- Experience with BI tools like Looker, Tableau, or Power BI
- Background in sports, iGaming, statistical analysis, or marketing platforms such as Google Analytics

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 2 | 1 | 1 | 1 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | mixed | mixed | internal_data | 33% | ✗ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | none | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Collaborate with Data Engineering to improve data quality"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, dbt models, data modeling principles, and structured methodologies with no velocity-oriented language like 'fast-paced' or 'ship quickly'.

**Run 2:** `rigour` ✓
> Quote: "Collaborate with Data Engineering to improve data quality"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality and version control practices without any velocity language; 3 rigour signals (quality, maintain, version control) vs. 0 velocity signals.

**Run 3:** `rigour` ✓
> Quote: "Collaborate with Data Engineering to improve data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality, version control, scalability, and maintaining structured models dominate the responsibilities, establishing a rigour-oriented foundation with no velocity/shipping language.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Deliver ad-hoc analysis to support decision-making"
> Verified: ✓ found in JD
> Reasoning: The role supports business decision-making without explicit financial reporting, compliance, or regulatory language typical of high-risk domains.

**Run 2:** `moderate` ✗
> Quote: "Translate business questions into structured analysis"
> Verified: ✓ found in JD
> Reasoning: The JD frames standard BI work supporting business decisions without explicit compliance, regulatory, or financial reporting language, indicating moderate risk.

**Run 3:** `moderate` ✗
> Quote: "translates data into actionable insights for business stakeholders"
> Verified: ✓ found in JD
> Reasoning: While sports betting/gaming carries inherent financial exposure, the JD uses generic analytical language without explicit financial reporting, compliance, regulatory, or audit framing.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `2`

**Run 1:** `1` ✗
> Quote: "Collaborate with Data Engineering to improve data quality"
> Verified: ✓ found in JD
> Reasoning: Only Data Engineering is explicitly named as a partner team; 'business stakeholders' is too generic to count as a distinct named team.

**Run 2:** `1` ✗
> Quote: "Data Engineering"
> Verified: ✓ found in JD
> Reasoning: Only one explicitly named partner team is identified in the responsibilities.

**Run 3:** `1` ✗
> Quote: "Data Engineering"
> Verified: ✓ found in JD
> Reasoning: Only Data Engineering is explicitly named as a collaboration partner; 'business stakeholders' and other references are generic.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Design and maintain dbt models for the analytics semantic layer"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (Snowflake, dbt, BI tools) and collaboration with an existing Data Engineering team indicate an established function that is scaling and evolving rather than early-stage or mature at enterprise scale.

**Run 2:** `mid` ✓
> Quote: "Design and maintain dbt models for the analytics semantic layer"
> Verified: ✓ found in JD
> Reasoning: The role maintains existing named tools (Snowflake, dbt, Git) and supports team members, indicating an established mid-stage function rather than early greenfield building.

**Run 3:** `mid` ✓
> Quote: "Design and maintain dbt models for the analytics semantic layer"
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt, Snowflake) are already in use with established application context (semantic layer), and the role extends/improves existing infrastructure rather than building from zero.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Design and maintain dbt models for the analytics semantic layer"
> Verified: ✓ found in JD
> Reasoning: The JD contains specific technical context (dbt models, semantic layer, Snowflake, SQL optimization) alongside generic action verbs ('translate,' 'deliver,' 'contribute'), indicating mixed recruiter and hiring-manager input.

**Run 2:** `mixed` ✗
> Quote: "Extract and analyze large datasets from Snowflake using SQL to generate meaningful insights; Design and maintain dbt models for the analytics semantic layer"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about Snowflake, SQL, and dbt semantic layer suggests hiring manager knowledge, but other responsibilities use generic verbs like 'support' and 'contribute to' typical of recruiter writing.

**Run 3:** `mixed` ✗
> Quote: "Design and maintain dbt models for the analytics semantic layer"
> Verified: ✓ found in JD
> Reasoning: Specific technical context (dbt semantic layer, self-serve analytics) indicates hiring manager input, but numerous generic verbs ('support,' 'contribute,' 'deliver,' 'collaborate') suggest recruiter boilerplate.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `mixed` ✗
> Quote: "translates data into actionable insights for business stakeholders through analysis, dashboards, and reporting"
> Verified: ✓ found in JD
> Reasoning: The role balances external stakeholder service (translating questions, delivering analysis, building dashboards) with internal data function support (designing dbt models, self-serve analytics infrastructure, team support).

**Run 2:** `mixed` ✗
> Quote: "translates data into actionable insights for business stakeholders through analysis, dashboards, and reporting; Contribute to self-serve analytics capabilities"
> Verified: ✓ found in JD
> Reasoning: Responsibilities split between external business stakeholder support (dashboards, analysis) and internal data team support (dbt modeling, self-serve analytics, team support).

**Run 3:** `internal_data` ✓
> Quote: "Contribute to self-serve analytics capabilities"
> Verified: ✓ found in JD
> Reasoning: The primary work is building analytics infrastructure and data platform capabilities for internal analytics consumers, not serving commercial, product, or finance stakeholders externally.

⚠ **Disagreement**: manual=`internal_data` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Deliver ad-hoc analysis to support decision-making"
> Verified: ✓ found in JD
> Reasoning: All key responsibilities use execution verbs ('deliver,' 'support,' 'contribute,' 'build') with no strategic framing around defining direction or shaping analytics strategy.

**Run 2:** `execution` ✗
> Quote: "Deliver ad-hoc analysis to support decision-making"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use execution verbs throughout (deliver, extract, build, support, contribute) with no strategic verbs like 'define,' 'own,' or 'shape' that indicate autonomous direction-setting.

**Run 3:** `execution` ✗
> Quote: "Support team members in dbt and data modeling"
> Verified: ✓ found in JD
> Reasoning: Action verbs throughout are execution-focused ('support,' 'deliver,' 'contribute,' 'translate,' 'apply') with no strategic direction-setting, ownership, or define/establish language.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, coding agents, agentic workflows, or AI-ready data infrastructure as candidate expectations.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI-ready data infrastructure expected from the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, AI-ready data infrastructure, or GenAI applications anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Collaborate with Data Engineering to improve data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality is mentioned in passing during collaboration with Data Engineering, but no testing frameworks, data contracts, observability tools, or ownership-based quality practices are outlined.

**Run 2:** `absent` ✗
> Quote: "Collaborate with Data Engineering to improve data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality is mentioned as a collaborative goal but without explicit ownership, testing frameworks, or data contract responsibilities assigned to this role.

**Run 3:** `absent` ✗
> Quote: "Collaborate with Data Engineering to improve data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality is mentioned as a collaborative aspiration but without testing frameworks, data contracts, observability practices, or testing tools (Great Expectations, Soda, dbt tests) specified.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Collaborate with Data Engineering to improve data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality improvement is explicitly named as a shared responsibility, suggesting operational reliability and prevention of data failures matter, though without compliance or regulatory risk language.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD contains no language about compliance, regulatory risk, preventing bad data reaching stakeholders, or trust; it is framed entirely in capability and delivery terms.

**Run 3:** `moderate` ✗
> Quote: "Collaborate with Data Engineering to improve data quality"
> Verified: ✓ found in JD
> Reasoning: Data quality improvement is mentioned as a secondary operational concern alongside primary delivery work, but with no compliance, regulatory, audit, or stakeholder trust framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'moderate']
