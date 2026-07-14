# Trace: 2026-07-01_deloitte_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Deloitte

**URL:** https://empleo.es.deloitte.com/job/Madrid-Analytics-Engineer/1275887201/
**Location:** Madrid, Spain (Hybrid)
**Date Posted:** 2026-07-01

---

Analytics Engineer at Deloitte Spain

Location: Madrid
Position Type: Profesionales con experiencia (Experienced Professionals)
Service Line: SRT (Strategy, Risk & Transactions)
Req ID: 45442

About the Company
Deloitte is committed to generating impact on society, clients, and employees. The firm works with leading international organisations across their entire value chain.

Role Summary
The Analytics Engineer role combines technical expertise with strategic vision. This professional will design the pipelines and architectures of data that form the foundation for AI solutions, advanced dashboards, and interactive tools. The role involves direct client contact to understand challenges and translate needs into data solutions that drive business impact.

Key Responsibilities
- Co-create Data Products with business stakeholders for strategic decision-making
- Design reliable, scalable, efficient data pipelines from internal and external sources
- Design data models facilitating analysis and business objectives
- Develop and optimise procedures to productionize models with monitoring capabilities
- Implement visualisation solutions for intuitive data comprehension
- Stay current with best practices for development and continuous integration

Requirements
Education & Language:
- Degree in Engineering, Mathematics, Physics, or similar
- C1 English proficiency (spoken and written)

Technical Skills:
- Experience with ETL, SQL, and Python in local, Cloud, and Big Data environments
- Knowledge of modern data processing technologies: dbt, Spark, BigQuery, Snowflake, Databricks
- Data storage knowledge (files, relational, columnar, documents, key-value)
- Machine Learning and MLOps experience
- Data visualisation with BI tools (Tableau, Power BI) or web development
- Data modelling comprehension and reporting capabilities

Soft Skills:
- Adaptable, communicative, client-oriented
- Initiative and dynamism
- Collaborative teamwork abilities
- Complex information analysis and synthesis

Work Environment
Hybrid-flexible arrangements, team-building activities, wellness programs, volunteer opportunities, continuous learning culture, and comprehensive benefits packages.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 1 | 0 | 0 | 1 | 33% | ✗ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | mixed | mixed | recruiter | 33% | ✓ |
| stakeholder_orientation | commercial | internal_data | internal_data | internal_data | 100% | ✗ |
| autonomy_level | mixed | execution | strategic | mixed | 0% | ✗ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | absent | responsibility | absent | 33% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Design reliable, scalable, efficient data pipelines from internal and external sources"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (reliable, scalable, efficient, monitoring) present with zero velocity signals define the role.

**Run 2:** `rigour` ✓
> Quote: "Design reliable, scalable, efficient data pipelines from internal and external sources"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize reliability, scalability, best practices, and monitoring without any velocity or delivery speed language.

**Run 3:** `rigour` ✓
> Quote: "Design reliable, scalable, efficient data pipelines from internal and external sources"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize reliability, scalability, and best practices in development and continuous integration, with no velocity or speed signals present.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "translate needs into data solutions that drive business impact"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes business objectives and impact without regulatory, compliance, or financial reporting language despite Deloitte's SRT service line context.

**Run 2:** `moderate` ✗
> Quote: "Co-create Data Products with business stakeholders for strategic decision-making"
> Verified: ✓ found in JD
> Reasoning: While the role impacts business decisions, the JD lacks explicit financial, compliance, or regulatory language that would signal high domain risk.

**Run 3:** `moderate` ✗
> Quote: "translate needs into data solutions that drive business impact"
> Verified: ✓ found in JD
> Reasoning: The role affects business decision-making without explicit financial reporting, compliance, or regulatory language, suggesting moderate rather than high risk.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `1`

**Run 1:** `0` ✗
> Quote: "None"
> Verified: ✓ found in JD
> Reasoning: No explicitly named internal partner teams or functions identified; 'business stakeholders' is too generic per the rules.

**Run 2:** `0` ✗
> Quote: "No named internal partner teams explicitly identified in responsibilities"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD mentions generic 'business stakeholders' and external 'direct client contact' but does not name specific internal functions or teams.

**Run 3:** `1` ✓
> Quote: "direct client contact to understand challenges and translate needs into data solutions"
> Verified: ✓ found in JD
> Reasoning: Only clients are explicitly named as a collaboration partner; no distinct internal teams like Product, Finance, Engineering, or Data Science are mentioned.

⚠ **Disagreement**: manual=`1` vs LLM majority=`0`

⚠ **LLM inconsistency**: runs gave ['0', '0', '1']

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Develop and optimise procedures to productionize models with monitoring capabilities"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize designing and productionizing solutions with existing tools (BigQuery, Snowflake, dbt) in requirements, indicating an established but expanding data practice.

**Run 2:** `mid` ✗
> Quote: "Develop and optimise procedures to productionize models with monitoring capabilities"
> Verified: ✓ found in JD
> Reasoning: The mention of productionizing models with monitoring and optimization suggests existing infrastructure being refined, indicating a mid-stage data function.

**Run 3:** `mid` ✗
> Quote: "Develop and optimise procedures to productionize models with monitoring capabilities"
> Verified: ✓ found in JD
> Reasoning: The focus on productionization procedures and monitoring suggests a data function beyond greenfield but not at massive enterprise scale.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Develop and optimise procedures to productionize models with monitoring capabilities"
> Verified: ✓ found in JD
> Reasoning: Technical vocabulary and understanding (productionize, monitoring) mixed with generic stakeholder language (client-oriented, collaborate with business stakeholders).

**Run 2:** `mixed` ✓
> Quote: "Develop and optimise procedures to productionize models with monitoring capabilities"
> Verified: ✓ found in JD
> Reasoning: Some responsibilities show technical specificity (productionize, monitoring) while others are generic boilerplate (co-create, implement visualisation solutions).

**Run 3:** `recruiter` ✗
> Quote: "Co-create Data Products with business stakeholders for strategic decision-making; Design data models facilitating analysis and business objectives"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic action verbs and lack specific context about implementation, scale, or methodologies that would indicate hiring manager authorship.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `internal_data` ✗
> Quote: "design the pipelines and architectures of data that form the foundation for AI solutions, advanced dashboards, and interactive tools"
> Verified: ✓ found in JD
> Reasoning: Core responsibilities are designing and building data infrastructure (pipelines, models, visualizations) serving business consumers, not commercial/product/finance operations directly.

**Run 2:** `internal_data` ✗
> Quote: "design the pipelines and architectures of data that form the foundation for AI solutions, advanced dashboards, and interactive tools"
> Verified: ✓ found in JD
> Reasoning: The role is framed around building data platform infrastructure that internal teams consume, which is the core signal for internal_data orientation.

**Run 3:** `internal_data` ✗
> Quote: "design the pipelines and architectures of data that form the foundation for AI solutions, advanced dashboards, and interactive tools"
> Verified: ✓ found in JD
> Reasoning: The role is framed around building data infrastructure and foundations that others (AI systems, dashboard users) consume rather than directly serving commercial or product teams.

⚠ **Disagreement**: manual=`commercial` vs LLM majority=`internal_data`

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "understand challenges and translate needs into data solutions that drive business impact"
> Verified: ✓ found in JD
> Reasoning: The role reacts to stakeholder-defined challenges and objectives rather than setting the data strategy or defining what problems to solve.

**Run 2:** `strategic` ✗
> Quote: "This professional will design the pipelines and architectures of data that form the foundation for AI solutions, advanced dashboards, and interactive tools"
> Verified: ✓ found in JD
> Reasoning: The role is expected to design and architect the data infrastructure, requiring autonomous decision-making about technical direction.

**Run 3:** `mixed` ✓
> Quote: "design the pipelines and architectures of data that form the foundation for AI solutions; Co-create Data Products with business stakeholders"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of data architecture and modeling with collaborative execution in service of client and stakeholder needs.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

⚠ **LLM inconsistency**: runs gave ['execution', 'strategic', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "design the pipelines and architectures of data that form the foundation for AI solutions, advanced dashboards, and interactive tools"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure (pipelines and architectures) that AI systems consume and run on.

**Run 2:** `ai_enabler` ✗
> Quote: "design the pipelines and architectures of data that form the foundation for AI solutions"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure that AI systems consume, making them an ai_enabler rather than a direct AI tool user.

**Run 3:** `ai_enabler` ✗
> Quote: "design the pipelines and architectures of data that form the foundation for AI solutions"
> Verified: ✓ found in JD
> Reasoning: The role's primary responsibility is designing data infrastructure and pipelines that serve as the foundation for AI solutions, requiring the candidate to enable AI/ML systems through data architecture.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Develop and optimise procedures to productionize models with monitoring capabilities"
> Verified: ✓ found in JD
> Reasoning: Monitoring is mentioned incidentally during productionization, but testing, data quality frameworks, or observability as owned responsibilities are not framed.

**Run 2:** `responsibility` ✗
> Quote: "Develop and optimise procedures to productionize models with monitoring capabilities"
> Verified: ✓ found in JD
> Reasoning: The candidate owns developing and optimizing procedures that include monitoring and observability, indicating accountability for reliability practices.

**Run 3:** `absent` ✗
> Quote: "Design reliable, scalable, efficient data pipelines from internal and external sources; Develop and optimise procedures to productionize models with monitoring capabilities"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes reliability and monitoring but does not explicitly own testing frameworks, data quality standards, or data contract responsibilities.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

⚠ **LLM inconsistency**: runs gave ['absent', 'responsibility', 'absent']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Design reliable, scalable, efficient data pipelines from internal and external sources"
> Verified: ✓ found in JD
> Reasoning: Operational reliability (prevent pipeline failures) is a concern signaled by 'reliable,' but the overall role is framed around capability delivery and business impact, not compliance or risk prevention.

**Run 2:** `moderate` ✗
> Quote: "Design reliable, scalable, efficient data pipelines from internal and external sources"
> Verified: ✓ found in JD
> Reasoning: Reliability and operational monitoring are framed as technical requirements without compliance, regulatory, or stakeholder trust language.

**Run 3:** `moderate` ✗
> Quote: "Develop and optimise procedures to productionize models with monitoring capabilities"
> Verified: ✓ found in JD
> Reasoning: Monitoring and productionization procedures suggest operational reliability is a concern, but the JD lacks compliance or trustworthiness language indicating high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
