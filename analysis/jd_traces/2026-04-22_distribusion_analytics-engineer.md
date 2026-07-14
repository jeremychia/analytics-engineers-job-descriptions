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
| velocity_vs_rigour | mixed | velocity | velocity | mixed | 33% | ✗ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 3 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | mixed | recruiter | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | mixed | execution | mixed | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `velocity` ✗
> Quote: "Build new Looker dashboards from scratch within tight deadlines"
> Verified: ✓ found in JD
> Reasoning: Three velocity signals (tight deadlines, faster creation, fast-paced work environment) substantially outweigh the single rigour signal (rigorous verification), establishing velocity as the primary frame.

**Run 2:** `velocity` ✗
> Quote: "Build new Looker dashboards from scratch within tight deadlines"
> Verified: ✓ found in JD
> Reasoning: The JD emphasises rapid delivery through tight deadlines, fast-paced environment, and rapid growth more prominently than data quality assurance across multiple responsibilities.

**Run 3:** `mixed` ✓
> Quote: "within tight deadlines"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes both rapid delivery within tight deadlines and rigorous verification of outputs, establishing a mixed velocity and rigour orientation.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`velocity`

⚠ **LLM inconsistency**: runs gave ['velocity', 'velocity', 'mixed']

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Exposure to major clients like Booking.com and Google Maps"
> Verified: ✓ found in JD
> Reasoning: The role serves a SaaS/travel-tech company with business intelligence focus; no financial reporting, compliance, or regulatory language present.

**Run 2:** `moderate` ✗
> Quote: "Exposure to major clients like Booking.com and Google Maps"
> Verified: ✓ found in JD
> Reasoning: While the role impacts major clients' decision-making, the absence of financial reporting, compliance, or regulatory language indicates moderate rather than high domain risk.

**Run 3:** `moderate` ✗
> Quote: "Identify and propose enhancements to reporting systems for better clarity and faster creation"
> Verified: ✓ found in JD
> Reasoning: The JD focuses on operational reporting and dashboard creation with no explicit financial reporting, compliance, or regulatory language, indicating moderate domain risk typical of B2B SaaS analytics.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `3`

**Run 1:** `0` ✗
> Quote: "Collaborative international team environment"
> Verified: ✓ found in JD
> Reasoning: Generic team language without explicit naming of Finance, Product, Engineering, or other specific partner functions.

**Run 2:** `0` ✗
> Quote: "Collaborative international team environment"
> Verified: ✓ found in JD
> Reasoning: The JD describes team collaboration but does not explicitly name specific internal functions or partner teams like Finance, Product, Marketing, or Data Science.

**Run 3:** `0` ✗
> Quote: "Collaborative international team environment"
> Verified: ✓ found in JD
> Reasoning: The JD contains no explicitly named internal teams or functions; collaboration is mentioned generically without identifying specific partner groups.

⚠ **Disagreement**: manual=`3` vs LLM majority=`0`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Become proficient with the data lake, understanding data sources and processing workflows"
> Verified: ✓ found in JD
> Reasoning: Named tools (BigQuery, Kafka, Airflow, Looker) appear in responsibilities with operational context, indicating established infrastructure in active use.

**Run 2:** `mid` ✗
> Quote: "Identify and propose enhancements to reporting systems for better clarity and faster creation"
> Verified: ✓ found in JD
> Reasoning: The role assumes existing reporting systems and infrastructure (data lake, multiple named tools) are in place and mature enough to enhance, indicating a mid-stage data team.

**Run 3:** `mid` ✗
> Quote: "Become proficient with the data lake, understanding data sources and processing workflows"
> Verified: ✓ found in JD
> Reasoning: The JD references existing infrastructure (data lake, BigQuery, Kafka, Airflow) that the candidate must become proficient with, indicating a mid-stage data team with established tooling.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `mixed` ✗
> Quote: "Become proficient with the data lake, understanding data sources and processing workflows; BigQuery, Kafka, and Airflow"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about actual infrastructure (data lake workflows, named tools in context) shows hiring manager input, but behavioral section contains recruiter boilerplate (direct ownership, fast-paced environment).

**Run 2:** `recruiter` ✓
> Quote: "Identify and propose enhancements to reporting systems for better clarity and faster creation"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs and lack technical specificity about systems, data volumes, or methodologies, indicating a recruiter-written JD.

**Run 3:** `mixed` ✗
> Quote: "Build new Looker dashboards from scratch within tight deadlines"
> Verified: ✓ found in JD
> Reasoning: While the JD mentions specific tools (Looker, BigQuery, Kafka, Airflow) with application context, it also includes generic recruitment language like "direct ownership" and "collaborative environment," suggesting mixed authorship.

⚠ **Disagreement**: manual=`recruiter` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'recruiter', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Identify and propose enhancements to reporting systems for better clarity and faster creation"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building and improving the data and reporting infrastructure itself rather than serving a specific business function.

**Run 2:** `internal_data` ✓
> Quote: "Become proficient with the data lake, understanding data sources and processing workflows"
> Verified: ✓ found in JD
> Reasoning: The role focuses on internal data infrastructure, dashboards, and reporting systems rather than serving commercial, product, finance, or external stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Build new Looker dashboards from scratch"
> Verified: ✓ found in JD
> Reasoning: The role's primary responsibility is building and enhancing analytics and reporting systems for organizational consumption, indicating an internal_data orientation serving analytics infrastructure needs.

### autonomy_level
**Manual:** `execution`

**Run 1:** `mixed` ✗
> Quote: "Direct ownership and measurable company impact from day one"
> Verified: ✓ found in JD
> Reasoning: Strategic signals (direct ownership, independently solve problems, propose enhancements) combine with execution-focused responsibilities (build dashboards to deadline, maintain systems).

**Run 2:** `execution` ✓
> Quote: "Build new Looker dashboards from scratch within tight deadlines"
> Verified: ✓ found in JD
> Reasoning: Primary responsibilities emphasise delivering dashboards under time pressure, with strategic autonomy (proposing enhancements, anticipating challenges) positioned as secondary to execution.

**Run 3:** `mixed` ✗
> Quote: "Identify and propose enhancements to reporting systems"
> Verified: ✓ found in JD
> Reasoning: The role combines execution responsibilities (building dashboards, maintaining accuracy) with strategic thinking (proposing enhancements, anticipating long-term challenges), indicating mixed autonomy.

⚠ **Disagreement**: manual=`execution` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, or building AI-ready infrastructure anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted workflows, GenAI applications, or AI infrastructure expectations for the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted workflows, or AI infrastructure requirements, indicating no AI skill expectation for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to own accuracy maintenance through rigorous verification; this is framed as an active responsibility using ownership language, not a tool in a requirements list.

**Run 2:** `responsibility` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: Data quality assurance is framed as a core owned responsibility using action verbs, not merely listed as a tool skill.

**Run 3:** `responsibility` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: The JD frames accuracy and rigorous verification as an owned responsibility rather than a listed tool, indicating the candidate is accountable for quality practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: Operational accuracy and reliability are clear concerns, but the JD is primarily delivery-focused; there is no compliance, regulatory, or stakeholder-trust register dominating the role.

**Run 2:** `moderate` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: Data quality and verification are framed as operational responsibilities for reliable dashboards without explicit compliance or regulatory language indicating high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Maintain high accuracy through rigorous verification of all outputs"
> Verified: ✓ found in JD
> Reasoning: The JD includes operational reliability concerns (accuracy and verification) but frames them as secondary to core delivery responsibilities, indicating moderate loss aversion focused on data correctness rather than regulatory risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
