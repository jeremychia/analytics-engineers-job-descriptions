# Trace: 2026-06-27_sosafe_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — SoSafe

**URL:** https://jobs.ashbyhq.com/sosafe/86d983aa-252a-41c6-8ef1-58b40cd6f23a
**Location:** United Kingdom Remote (also Portugal Remote, Ireland Remote, London)
**Date Posted:** 2026-04-21

---

SoSafe has the ambition to become the leading human risk management provider in Europe. Our award-winning awareness platform triggers behavioural change by providing effective and engaging training and simulations on cybersecurity and data protection. Cybercrime is costing the world >$10 trillion annually and growing by 15% p.a. - we invite you to be part of the solution!"

Location:

UK, Ireland, or Portugal (remote). Candidates must have work authorization in one of these countries. Office access available in London, Dublin, and Lisbon.


Here's how you'll make a difference:

 - Own the transformation layer in dbt- design, build, and maintain modular, well-tested data models that define how data is structured and consumed across the company.

 - Define and implement core business metrics (e.g. activation, engagement, retention) as reusable, versioned data assets- ensuring consistent definitions across analytics, product, and AI use cases.

 - Model complex SaaS data by integrating product events, CRM (Salesforce), and support data into clean, well-defined fact and dimension models.

 - Build and evolve our semantic layer- creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents.

 - Collaborate with Data Engineers on upstream data contracts and event schemas- ensuring raw data is structured in a way that supports scalable, reliable analytics.

 - Establish and enforce best practices in testing, documentation, and data quality- making these part of the standard development lifecycle.

 - Document models, metrics, and lineage clearly- enabling self-service and reducing ambiguity across teams.



What you bring:

 - 5+ years in analytics engineering or data engineering with a strong focus on data modeling

 - Strong proficiency in dbt and SQL- building modular, well-tested models

 - Solid understanding of dimensional modeling and metric design

 - Experience working with cloud data warehouses (BigQuery, Snowflake, or Redshift)

 - Experience with metrics / semantic layers (e.g. dbt metrics, MetricFlow, Cube)

 - Strong data quality mindset (testing, validation, monitoring)

 - Comfortable working with event-based data and cross-functional teams

 - Able to turn ambiguous business questions into clear data models

 - Strong business acumen with the ability to challenge metric definitions and ensure they reflect real business outcomes

 - Fluent in English.



Nice to have:

 - Familiarity with how LLMs consume structured data- e.g. semantic layers, metrics registries, YAML-based context- and an interest in building data infrastructure that serves AI agents, not just BI tools.

 - Experience modeling product usage data (event-based or session-based).



What we offer*

 - Work/Life balance: Flexible hours, 33 vacation days

 - Wellbeing and financial support: Access to Open Up, corporate discounts

 - Connection & community: Virtual events, collaborative team activities, and opportunities for local meet-ups

 - And the list goes on: Tech equipment, referral bonuses, dog-friendly HQ

*Perks and benefits listed above are for full-time employees and may vary slightly by office location. These are just a sample- you'll learn more during the interview process.

About Us

At SoSafe, we're on a mission to make the digital world safer by addressing the human factor in cybersecurity. As one of the fastest-growing security awareness scale-ups worldwide, we leverage behavioural science and data-driven learning to empower people against cyber threats. Our Human Risk Management approach helps organisations turn their employees into their strongest line of defence.

Backed by leading VCs like Highland Europe and Gl…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 2 | 3 | 3 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Establish and enforce best practices in testing, documentation, and data quality- making these part of the standard development lifecycle."
> Verified: ✓ found in JD
> Reasoning: The role centers on establishing quality practices, testing discipline, and data contracts as core responsibilities with no counterbalancing velocity language like speed, iteration, or shipping fast.

**Run 2:** `rigour` ✓
> Quote: "Establish and enforce best practices in testing, documentation, and data quality- making these part of the standard development lifecycle."
> Verified: ✓ found in JD
> Reasoning: Multiple testing, quality, and governance signals dominate the responsibilities, with no velocity-oriented language like 'fast-paced' or 'ship quickly'.

**Run 3:** `rigour` ✓
> Quote: "Establish and enforce best practices in testing, documentation, and data quality- making these part of the standard development lifecycle."
> Verified: ✓ found in JD
> Reasoning: Testing, data quality, and best practices dominate the responsibilities section with no countervailing velocity language, establishing a rigour-focused orientation.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Model complex SaaS data by integrating product events, CRM (Salesforce), and support data into clean, well-defined fact and dimension models."
> Verified: ✓ found in JD
> Reasoning: This is operational analytics and BI for a SaaS product with no regulatory, compliance, or financial reporting consequences mentioned—typical business intelligence role with moderate stakes.

**Run 2:** `moderate` ✓
> Quote: "Model complex SaaS data by integrating product events, CRM (Salesforce), and support data into clean, well-defined fact and dimension models."
> Verified: ✓ found in JD
> Reasoning: The role is SaaS analytics with emphasis on reliability and consistency, but lacks explicit financial reporting, compliance, or regulatory risk language.

**Run 3:** `moderate` ✓
> Quote: "Model complex SaaS data by integrating product events, CRM (Salesforce), and support data into clean, well-defined fact and dimension models."
> Verified: ✓ found in JD
> Reasoning: Data errors affect business analytics and product decisions rather than financial reporting or regulatory compliance, placing this in the moderate-risk category typical of SaaS platforms.

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "Data Engineers; product"
> Verified: ✓ found in JD
> Reasoning: Two named teams explicitly listed: Data Engineers as a collaboration partner on data contracts, and product teams as stakeholders requiring consistent metric definitions.

**Run 2:** `3` ✗
> Quote: "Collaborate with Data Engineers on upstream data contracts and event schemas; ensuring consistent definitions across analytics, product, and AI use cases."
> Verified: ✓ found in JD
> Reasoning: Named distinct teams are Data Engineers, Analytics, and Product; AI is mentioned as a use case, not a team.

**Run 3:** `3` ✗
> Quote: "Collaborate with Data Engineers on upstream data contracts and event schemas- ensuring consistent definitions across analytics, product, and AI use cases."
> Verified: ⚠ NOT found verbatim
> Reasoning: Three distinct named functions are explicitly listed: Data Engineers, Analytics, and Product teams.

⚠ **Disagreement**: manual=`2` vs LLM majority=`3`

⚠ **LLM inconsistency**: runs gave ['2', '3', '3']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Build and evolve our semantic layer- creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents."
> Verified: ✓ found in JD
> Reasoning: The use of 'evolve' rather than 'build' signals an existing data function with infrastructure in place (dbt, warehouse, semantic layer) that is growing and scaling.

**Run 2:** `mid` ✓
> Quote: "Build and evolve our semantic layer- creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents."
> Verified: ✓ found in JD
> Reasoning: Named tools and infrastructure already exist (dbt, Salesforce, semantic layer) and the role involves scaling and formalizing practices rather than building from zero.

**Run 3:** `mid` ✓
> Quote: "Build and evolve our semantic layer- creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents."
> Verified: ✓ found in JD
> Reasoning: Named tools and systems (dbt, semantic layer, data contracts) appear in responsibilities with specific application context, and implied existing infrastructure suggests a growing mid-stage data function.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Model complex SaaS data by integrating product events, CRM (Salesforce), and support data into clean, well-defined fact and dimension models."
> Verified: ✓ found in JD
> Reasoning: The responsibilities demonstrate technical specificity only a practitioner would know: data contracts, event schemas, semantic layer design, specific metrics (activation, engagement, retention), and dimensional modeling.

**Run 2:** `hiring_manager` ✓
> Quote: "Model complex SaaS data by integrating product events, CRM (Salesforce), and support data into clean, well-defined fact and dimension models."
> Verified: ✓ found in JD
> Reasoning: Responsibilities include specific tool contexts (dbt, Salesforce), named data sources, dimensional modeling approach, and technical practices (data contracts, event schemas) that indicate technical authorship.

**Run 3:** `hiring_manager` ✓
> Quote: "Own the transformation layer in dbt- design, build, and maintain modular, well-tested data models that define how data is structured and consumed across the company."
> Verified: ✓ found in JD
> Reasoning: Specific technical context throughout—named tools (dbt, Salesforce), dimensional modeling, semantic layers, data contracts, and concrete metric examples (activation, engagement, retention)—reflects hands-on domain knowledge.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build and evolve our semantic layer- creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents."
> Verified: ✓ found in JD
> Reasoning: The primary purpose is building data infrastructure (semantic layer, metrics registry) that internal consumers—analytics teams, product teams, and AI systems—rely on; this is infrastructure-centric, not commercial or product experimentation.

**Run 2:** `internal_data` ✓
> Quote: "Build and evolve our semantic layer- creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents."
> Verified: ✓ found in JD
> Reasoning: The role builds data infrastructure and platform components for data engineers, other analysts, and AI systems to consume, not for commercial or business stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Build and evolve our semantic layer- creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents."
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building data infrastructure (transformation layer, semantic layer, metrics platform) that serves the internal analytics and data organization, not direct commercial or finance audiences.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Own the transformation layer in dbt- design, build, and maintain modular, well-tested data models that define how data is structured and consumed across the company."
> Verified: ✓ found in JD
> Reasoning: The role owns a major technical layer and defines how data is structured organization-wide, with responsibility to establish best practices and evolve the semantic layer—not executing pre-scoped work.

**Run 2:** `strategic` ✓
> Quote: "Own the transformation layer in dbt- design, build, and maintain modular, well-tested data models that define how data is structured and consumed across the company."
> Verified: ✓ found in JD
> Reasoning: Strategic verbs (own, design, define, establish, build, evolve) throughout frame the role as setting direction on data modeling and architecture, not executing direction set by others.

**Run 3:** `strategic` ✓
> Quote: "Own the transformation layer in dbt- design, build, and maintain modular, well-tested data models that define how data is structured and consumed across the company."
> Verified: ✓ found in JD
> Reasoning: The role is expected to own and define core data architecture decisions (transformation layer, business metrics, semantic layer, best practices) rather than execute direction set by others.

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "an interest in building data infrastructure that serves AI agents, not just BI tools."
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure—semantic layers, metrics registries—designed for LLM-based analytics agents to consume, making this enablement of AI systems rather than personal AI tool use.

**Run 2:** `ai_enabler` ✗
> Quote: "supports downstream consumers, including LLM-based analytics agents"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure (semantic layers, metrics, data models) that AI systems consume, not to use AI tools personally.

**Run 3:** `ai_enabler` ✗
> Quote: "Build and evolve our semantic layer- creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents."
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure that explicitly supports LLM-based analytics agents as downstream consumers, positioning them as an enabler of AI systems.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality- making these part of the standard development lifecycle."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as core responsibilities the candidate owns and enforces across the organization, not as tools they use or skills they apply to existing work.

**Run 2:** `responsibility` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality- making these part of the standard development lifecycle."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as owned responsibilities with 'establish and enforce' action verbs, making them part of the standard process.

**Run 3:** `responsibility` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality- making these part of the standard development lifecycle."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as owned responsibilities using action verbs 'establish and enforce,' indicating accountability for defining and maintaining these practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Strong data quality mindset (testing, validation, monitoring)"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and consistency matter (well-tested models, strong quality mindset), but the JD is framed in delivery and capability terms (Own, Build, Design) rather than preventing compliance risk or stakeholder trust failures.

**Run 2:** `moderate` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality- making these part of the standard development lifecycle."
> Verified: ✓ found in JD
> Reasoning: Operational reliability through testing and quality is emphasized as a core concern, but framed as best practices rather than compliance or risk mitigation.

**Run 3:** `moderate` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality- making these part of the standard development lifecycle."
> Verified: ✓ found in JD
> Reasoning: Repeated emphasis on data quality, testing, and reliability reflects concern for operational integrity and decision accuracy, but lacks explicit compliance or regulatory language that would indicate high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
