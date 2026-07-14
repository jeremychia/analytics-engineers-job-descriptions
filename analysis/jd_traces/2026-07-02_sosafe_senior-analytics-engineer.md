# Trace: 2026-07-02_sosafe_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — SoSafe

**URL:** https://jobs.ashbyhq.com/sosafe/86d983aa-252a-41c6-8ef1-58b40cd6f23a
**Location:** UK/Ireland/Portugal (Remote)
**Date Posted:** 2026-07-02

---

# Senior Analytics Engineer

Company: SoSafe
Location: United Kingdom Remote; Ireland Remote; London; Portugal Remote
Employment Type: Full time
Location Type: Remote
Department: Development

## About SoSafe
SoSafe has the ambition to become the leading human risk management provider in Europe. Our award-winning awareness platform triggers behavioural change by providing effective and engaging training and simulations on cybersecurity and data protection. Cybercrime is costing the world >$10 trillion annually and growing by 15% p.a.

Candidates must have work authorization in UK, Ireland, or Portugal. Office access available in London, Dublin, and Lisbon.

## Here's how you'll make a difference
- Own the transformation layer in dbt - design, build, and maintain modular, well-tested data models that define how data is structured and consumed across the company
- Define and implement core business metrics (e.g. activation, engagement, retention) as reusable, versioned data assets - ensuring consistent definitions across analytics, product, and AI use cases
- Model complex SaaS data by integrating product events, CRM (Salesforce), and support data into clean, well-defined fact and dimension models
- Build and evolve our semantic layer - creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents
- Collaborate with Data Engineers on upstream data contracts and event schemas - ensuring raw data is structured in a way that supports scalable, reliable analytics
- Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle
- Document models, metrics, and lineage clearly - enabling self-service and reducing ambiguity across teams

## What you bring
- 5+ years in analytics engineering or data engineering with a strong focus on data modeling
- Strong proficiency in dbt and SQL - building modular, well-tested models
- Solid understanding of dimensional modeling and metric design
- Experience working with cloud data warehouses (BigQuery, Snowflake, or Redshift)
- Experience with metrics / semantic layers (e.g. dbt metrics, MetricFlow, Cube)
- Strong data quality mindset (testing, validation, monitoring)
- Comfortable working with event-based data and cross-functional teams
- Able to turn ambiguous business questions into clear data models
- Strong business acumen with the ability to challenge metric definitions and ensure they reflect real business outcomes
- Fluent in English

Nice to have:
- Familiarity with how LLMs consume structured data - e.g. semantic layers, metrics registries, YAML-based context - and an interest in building data infrastructure that serves AI agents, not just BI tools
- Experience modeling product usage data (event-based or session-based)

## What we offer
Flexible hours, 33 vacation days. Access to Open Up, corporate discounts. Virtual events, collaborative team activities, local meet-ups. Tech equipment, referral bonuses, dog-friendly HQ.

## About Us
SoSafe is one of the fastest-growing security awareness scale-ups worldwide, leveraging behavioural science and data-driven learning. Backed by leading VCs like Highland Europe and Global Founders Capital, rapidly expanding across the globe.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 2 | 2 | 3 | 33% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | mixed | mixed | 33% | ✗ |
| ai_role |  | ai_enabler | ai_enabler | none | 33% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes testing, documentation, and data quality as core responsibilities throughout, with no velocity or speed-of-delivery language in the work framing.

**Run 2:** `rigour` ✓
> Quote: "Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, documentation, data quality, and best practices throughout, with no velocity or speed-to-market language present.

**Run 3:** `rigour` ✓
> Quote: "Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, quality, documentation, and best practices as core expectations with no competing velocity signals.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Define and implement core business metrics (e.g. activation, engagement, retention) as reusable, versioned data assets"
> Verified: ✓ found in JD
> Reasoning: The role focuses on business metrics and BI rather than financial reporting or regulatory data, indicating moderate risk from data errors.

**Run 2:** `moderate` ✓
> Quote: "Model complex SaaS data by integrating product events, CRM (Salesforce), and support data into clean, well-defined fact and dimension models"
> Verified: ✓ found in JD
> Reasoning: The role focuses on SaaS operational data modeling without explicit financial reporting, regulatory, or compliance responsibilities.

**Run 3:** `moderate` ✓
> Quote: "Model complex SaaS data by integrating product events, CRM (Salesforce), and support data into clean, well-defined fact and dimension models"
> Verified: ✓ found in JD
> Reasoning: The role focuses on internal SaaS analytics and product metrics (activation, engagement, retention) with no mentions of financial reporting, regulatory compliance, or public-facing product impact.

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "Collaborate with Data Engineers on upstream data contracts and event schemas - ensuring consistent definitions across analytics, product, and AI use cases"
> Verified: ⚠ NOT found verbatim
> Reasoning: Data Engineers are explicitly named as collaborators, and Product is explicitly named as a stakeholder requiring consistent metric definitions.

**Run 2:** `2` ✓
> Quote: "Collaborate with Data Engineers on upstream data contracts and event schemas; ensuring consistent definitions across analytics, product, and AI use cases"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams are explicitly mentioned as collaboration partners: Data Engineers and Product.

**Run 3:** `3` ✗
> Quote: "Data Engineers; analytics; product"
> Verified: ✓ found in JD
> Reasoning: The JD names three distinct partner functions: Data Engineers in explicit collaboration, and analytics and product teams as stakeholders requiring metric consistency.

⚠ **LLM inconsistency**: runs gave ['2', '2', '3']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Build and evolve our semantic layer - creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers"
> Verified: ✓ found in JD
> Reasoning: The 'evolve' language indicates existing infrastructure, and references to Data Engineers as a distinct team suggest a maturing function building out its analytics layer.

**Run 2:** `mid` ✓
> Quote: "Build and evolve our semantic layer - creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents"
> Verified: ✓ found in JD
> Reasoning: The team has existing infrastructure (dbt, semantic layer, data contracts, Data Engineers team) and is actively scaling rather than building from zero.

**Run 3:** `mid` ✓
> Quote: "Build and evolve our semantic layer - creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers"
> Verified: ✓ found in JD
> Reasoning: The JD shows existing infrastructure (dbt, semantic layer, data consumers) being evolved with named engineering roles, indicating a team beyond early stage but not yet mature platform scale.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Own the transformation layer in dbt - design, build, and maintain modular, well-tested data models that define how data is structured and consumed across the company"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical details (dbt transformation layers, dimensional modeling, data contracts, specific metric examples) that reflect domain knowledge only someone doing this job would possess.

**Run 2:** `hiring_manager` ✓
> Quote: "Own the transformation layer in dbt - design, build, and maintain modular, well-tested data models that define how data is structured and consumed across the company"
> Verified: ✓ found in JD
> Reasoning: The specificity of dbt architecture, dimensional modeling, named SaaS metrics (activation, engagement, retention), and semantic layer concepts indicates technical writing from hands-on experience.

**Run 3:** `hiring_manager` ✓
> Quote: "Own the transformation layer in dbt - design, build, and maintain modular, well-tested data models that define how data is structured and consumed across the company"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical patterns (dimensional modeling, dbt versioned metrics, semantic layers, data contracts) that only come from someone who has performed this work.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build and evolve our semantic layer - creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents"
> Verified: ✓ found in JD
> Reasoning: The primary framing emphasizes building internal data infrastructure (semantic layer, reusable metrics, self-serve) that serves multiple downstream consumers rather than directly supporting a single external stakeholder.

**Run 2:** `internal_data` ✓
> Quote: "Build and evolve our semantic layer - creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building reusable data infrastructure (semantic layer, metrics, models) that serves the analytics ecosystem and AI systems rather than specific business stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Build and evolve our semantic layer - creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building data infrastructure (transformation layer, semantic layer, metrics) that serves analytics function and internal systems rather than commercial, product, or finance stakeholders directly.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Own the transformation layer in dbt - design, build, and maintain modular, well-tested data models"
> Verified: ✓ found in JD
> Reasoning: The use of ownership and design verbs throughout (own, define, design, build, evolve, establish) indicates the role has autonomy to shape how the analytics function operates.

**Run 2:** `mixed` ✗
> Quote: "Own the transformation layer in dbt; Define and implement core business metrics; Establish and enforce best practices in testing, documentation, and data quality"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of the transformation layer and metrics definition with execution in service of product, analytics, and data engineering teams.

**Run 3:** `mixed` ✗
> Quote: "Define and implement core business metrics (e.g. activation, engagement, retention) as reusable, versioned data assets - ensuring consistent definitions across analytics, product, and AI use cases"
> Verified: ✓ found in JD
> Reasoning: The role has strategic ownership of the technical domain (defining metrics, establishing practices, owning transformation layer) while executing within a scope where key metrics and stakeholders are already specified.

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Familiarity with how LLMs consume structured data - e.g. semantic layers, metrics registries, YAML-based context - and an interest in building data infrastructure that serves AI agents, not just BI tools"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly seeks familiarity with how LLMs consume structured data and emphasizes building data infrastructure for AI agents, indicating an ai_enabler role.

**Run 2:** `ai_enabler` ✗
> Quote: "Build and evolve our semantic layer - creating a reliable abstraction over our data that enables consistent KPI definitions and supports downstream consumers, including LLM-based analytics agents; Familiarity with how LLMs consume structured data and an interest in building data infrastructure that serves AI agents, not just BI tools"
> Verified: ⚠ NOT found verbatim
> Reasoning: The candidate is expected to build semantic layers and metrics infrastructure that enable LLM-based analytics agents to consume structured data.

**Run 3:** `none` ✗
> Quote: "Nice to have: Familiarity with how LLMs consume structured data - e.g. semantic layers, metrics registries, YAML-based context - and an interest in building data infrastructure that serves AI agents, not just BI tools"
> Verified: ⚠ NOT found verbatim
> Reasoning: AI knowledge appears only in the nice-to-have section, not in core expected skills or responsibilities, indicating the candidate is not required to demonstrate AI competency.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

⚠ **LLM inconsistency**: runs gave ['ai_enabler', 'ai_enabler', 'none']

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle"
> Verified: ✓ found in JD
> Reasoning: The use of 'establish and enforce' language makes testing and data quality practices something the candidate owns and defines as standards, not just uses as a tool.

**Run 2:** `responsibility` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle"
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are framed as responsibilities the candidate owns and establishes as standard practice, not as tools listed in requirements.

**Run 3:** `responsibility` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to own and establish testing practices as an accountability, not simply use existing tools.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle"
> Verified: ✓ found in JD
> Reasoning: Quality and testing are emphasized as operational practices for decision-making reliability rather than as loss-aversion against regulatory or stakeholder trust risks.

**Run 2:** `moderate` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle"
> Verified: ✓ found in JD
> Reasoning: Data quality and operational reliability are core responsibilities, but framed as development standards rather than regulatory compliance or high-stakes risk prevention.

**Run 3:** `moderate` ✗
> Quote: "Establish and enforce best practices in testing, documentation, and data quality - making these part of the standard development lifecycle"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are clear concerns but framed in terms of delivery and maintainability rather than preventing compliance failures or catastrophic stakeholder trust issues.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
