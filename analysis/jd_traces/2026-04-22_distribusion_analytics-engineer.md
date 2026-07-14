# Trace: 2026-04-22_distribusion_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer @ Distribusion

**URL:** https://careers.distribusion.com/o/analytics-engineer-all-genders-4

## Key Responsibilities
- Build new Looker dashboards from scratch within tight deadlines
- Become proficient with the data lake, understanding data sources and processing workflows
- Identify and propose enhancements to reporting systems for better clarity and faster creation
- Grasp project context quickly to identify critical needs and gaps
- Maintain high accuracy through rigorous verification of all outputs
- Anticipate future challenges and evaluate long-term impacts of decisions
- Leverage available tools and resources to solve problems independently

## Required Skills & Qualifications
- Strong proficiency in Python and SQL with solid scripting capabilities
- Experience with data visualization platforms, especially Looker, Grafana, and various visualisation libraries
- Familiarity with big data technologies including BigQuery, Kafka, and Airflow
- Project management tool competency (Jira) with reliable timeline estimation ability
- Version control expertise using git/GitLab in cloud environments like Google Cloud Platform

## Behavioural Profile
- Fast-paced work environment with rapid industry growth
- Direct ownership and measurable company impact from day one
- Exposure to major clients like Booking.com and Google Maps
- Collaborative international team environment
- Flexible remote and relocation options

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | mixed | rigour | velocity | 0% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 3 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Build new Looker dashboards from scratch within tight deadlines; Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly pairs tight deadlines and fast-paced environment signals with rigorous verification and high accuracy expectations, demonstrating genuine balance between both orientations.

**Run 2:** `rigour` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: While 'tight deadlines' signals velocity, multiple rigour signals—'rigorous verification', 'high accuracy', and 'anticipate future challenges'—outweigh velocity concerns by roughly 2:1.

**Run 3:** `velocity` ✗
> Quote: "Build new Looker dashboards from scratch within tight deadlines"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes speed and delivery pace ('tight deadlines', 'fast-paced work environment with rapid industry growth') with multiple velocity signals, while rigour language ('rigorous verification') appears only once.

⚠ **LLM inconsistency**: runs gave ['mixed', 'rigour', 'velocity']

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Exposure to major clients like Booking.com and Google Maps"
> Verified: ✓ found in JD
> Reasoning: The role serves major client needs through dashboards and reporting without explicit financial reporting, compliance, or regulatory language, indicating business decision impact at moderate risk.

**Run 2:** `moderate` ✗
> Quote: "Direct ownership and measurable company impact from day one"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes business impact but lacks explicit financial reporting, compliance, or regulatory language that would indicate high risk.

**Run 3:** `moderate` ✗
> Quote: "Exposure to major clients like Booking.com and Google Maps"
> Verified: ✓ found in JD
> Reasoning: The JD involves reporting systems for significant clients but contains no explicit financial reporting, compliance, or regulatory language that would elevate this to high risk.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `3`

**Run 1:** `0` ✗
> Quote: "No named partner teams explicitly identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD describes a collaborative environment but does not name specific functions or teams (Finance, Product, Engineering, etc.) as collaboration partners.

**Run 2:** `0` ✗
> Quote: "Collaborative international team environment"
> Verified: ✓ found in JD
> Reasoning: While collaboration is mentioned in the behavioral profile, the JD does not name specific internal teams or functions as collaboration partners in the responsibilities section.

**Run 3:** `0` ✗
> Quote: "Collaborative international team environment"
> Verified: ✓ found in JD
> Reasoning: The JD mentions collaboration but provides no named functions, teams, or stakeholder groups to count; 'Collaborative international team environment' is too generic to satisfy the definition.

⚠ **Disagreement**: manual=`3` vs LLM majority=`0`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Become proficient with the data lake, understanding data sources and processing workflows; Familiarity with big data technologies including BigQuery, Kafka, and Airflow"
> Verified: ✓ found in JD
> Reasoning: Named infrastructure (data lake) and established tools (BigQuery, Airflow, Kafka) are already in place and in use, indicating an existing data function being maintained and enhanced rather than built from scratch.

**Run 2:** `mid` ✗
> Quote: "Become proficient with the data lake, understanding data sources and processing workflows"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure (data lake, Looker, processing workflows) is already in place and operational, and the role involves mastering and extending it, indicating mid-stage maturity.

**Run 3:** `mid` ✗
> Quote: "Become proficient with the data lake, understanding data sources and processing workflows"
> Verified: ✓ found in JD
> Reasoning: The JD assumes existing infrastructure (data lake, BigQuery, Kafka, Airflow) and named tools in context of current operations, indicating an established data function growing and being enhanced.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `mixed` ✗
> Quote: "Build new Looker dashboards from scratch within tight deadlines; Grasp project context quickly to identify critical needs and gaps"
> Verified: ✓ found in JD
> Reasoning: Specific technical context (Looker dashboards, data lake architecture, named tools) combines with generic action verbs (grasp, identify, maintain), suggesting both hiring manager and recruiter input.

**Run 2:** `mixed` ✗
> Quote: "Build new Looker dashboards from scratch within tight deadlines; Anticipate future challenges and evaluate long-term impacts of decisions"
> Verified: ✓ found in JD
> Reasoning: The responsibilities mix specific technical context (named tool Looker, specific constraint 'tight deadlines', data lake reference) with generic boilerplate (anticipate, evaluate, grasp context quickly).

**Run 3:** `mixed` ✗
> Quote: "Build new Looker dashboards from scratch within tight deadlines; Anticipate future challenges and evaluate long-term impacts of decisions"
> Verified: ✓ found in JD
> Reasoning: The JD mixes specific technical context (Looker, data lake workflows) with generic action verbs ('anticipate', 'evaluate'), suggesting input from both a hiring manager and recruiter.

⚠ **Disagreement**: manual=`recruiter` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build new Looker dashboards from scratch; Identify and propose enhancements to reporting systems"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building and maintaining analytics infrastructure (dashboards, reporting systems) for internal or platform users rather than serving commercial GTM, product experimentation, or financial stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Identify and propose enhancements to reporting systems for better clarity and faster creation"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes building and improving the reporting infrastructure itself rather than serving a specific business function like sales, product, or finance.

**Run 3:** `internal_data` ✓
> Quote: "Build new Looker dashboards from scratch; Identify and propose enhancements to reporting systems"
> Verified: ✓ found in JD
> Reasoning: The role is framed around building reporting infrastructure and dashboards without explicit mention of commercial, product, or finance audiences, making internal analytics infrastructure the primary orientation.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Leverage available tools and resources to solve problems independently"
> Verified: ✓ found in JD
> Reasoning: While the role has tactical autonomy to solve problems independently, the overall framing emphasizes executing scoped work (building dashboards, maintaining accuracy) on direction set by project context and client needs.

**Run 2:** `execution` ✓
> Quote: "Build new Looker dashboards from scratch within tight deadlines"
> Verified: ✓ found in JD
> Reasoning: The primary framing is delivery-focused; while forward-thinking elements appear, the candidate receives scoped work to execute rather than setting analytics strategy.

**Run 3:** `execution` ✓
> Quote: "Build new Looker dashboards from scratch within tight deadlines"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize delivering dashboards and supporting existing systems rather than defining strategy or establishing new directions, despite the 'direct ownership' framing.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no signals expecting the candidate to use AI coding tools or build AI/ML capabilities; it focuses on traditional BI and analytics engineering work.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted workflows, or AI-ready data infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD requires Python and SQL but does not mention AI coding tools, AI-assisted work, or building AI data infrastructure.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: The ownership verb 'maintain' combined with 'rigorous verification' explicitly assigns accountability for the data quality practice rather than merely listing a tool.

**Run 2:** `responsibility` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: The candidate owns data quality and accuracy through rigorous verification, framing it as an active responsibility rather than a listed tool.

**Run 3:** `responsibility` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to own quality and accuracy through verification (active verb: maintain, verify), not merely use listed tools.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs; Anticipate future challenges and evaluate long-term impacts of decisions"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and avoiding data errors, but lacks explicit regulatory, compliance, or stakeholder-trust language that would indicate high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes accuracy maintenance and anticipating challenges, reflecting concern for operational reliability, but lacks compliance or stakeholder trust framing.

**Run 3:** `moderate` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: Operational accuracy is a stated concern but not the dominant framing; the JD emphasizes delivery pace and impact more than preventing risk or regulatory exposure.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
