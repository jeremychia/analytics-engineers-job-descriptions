# Trace: 2026-07-03_telenet_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Telenet

**URL:** https://ebza.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/nl/sites/CX_1001/job/5617
**Location:** Mechelen, Belgium
**Date Posted:** 2026-07-03

---

Analytics Engineer

Telenet Group Data Acceleration Tribe is evolving toward a data-driven world. We see data and AI as the fuel and engine that propels our entire organization forward. Within the Data Foundations teams, we work in a large-scale data environment where we structure, model, and integrate data throughout the entire organization, ensuring reliable, high-quality data as the foundation for every data and AI product.

As Analytics Engineer, you play a crucial role in connecting business with technology. You translate data requirements into robust and scalable solution designs and data models, and guide external Data Engineers toward successful delivery. You also actively experiment and work with Agentic AI to strengthen analytical capabilities.

Your responsibilities
• Collaborate with Data Product Managers, Analytics Engineers and stakeholders to understand requirements and assess impact correctly
• Translate requirements into solution designs and end-to-end data flows
• Present and review Solution Designs with Data Architects and Tech Leads
• Perform Source-to-target analyses (S2T), identify gaps in source data and document required transformations using Agentic AI
• Ensure solutions are scalable, robust and cost efficient, with quality as the basic principle
• Explore, build and maintain Agentic AI solutions
• Define and maintain data quality checks of clear, reusable documentation
• Collaborate with Data Engineers during delivery: transfer solution designs to external Data Engineers

Our ideal Analytics Engineer
• Has a strong background in data (computer science or equivalent education/experience) within large-scale cloud environments
• Has hands-on experience with AWS, Snowflake, dbt and Dagster (Spark is a plus)
• Has deep SQL knowledge (Scala is a strong plus) and experience with data modelling (conceptual & logical)
• Is familiar with, or strongly interested in, AI Agents and their application in data workflows
• Has experience translating business processes into data requirements
• Can interpret complex data relationships and identify gaps or inconsistencies
• Has strong communication skills to clearly present insights and recommendations to (business) stakeholders
• Is structured, analytical, solution-oriented and proactive, and dares to challenge stakeholders
• Feels comfortable in agile teams and works comfortably with external partners (offshore)
• Fluent in English or Dutch

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 4 | 3 | 4 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | execution | mixed | mixed | 33% | ✗ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensure solutions are scalable, robust and cost efficient, with quality as the basic principle"
> Verified: ✓ found in JD
> Reasoning: Quality is framed as 'the basic principle' with repeated emphasis on robust, reliable, and scalable solutions—no velocity or delivery-pace language present.

**Run 2:** `rigour` ✓
> Quote: "Ensure solutions are scalable, robust and cost efficient, with quality as the basic principle"
> Verified: ✓ found in JD
> Reasoning: The phrase "quality as the basic principle" and repeated emphasis on robustness signal rigour orientation with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "Ensure solutions are scalable, robust and cost efficient, with quality as the basic principle"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes quality as a foundational principle with explicit data quality checks and documentation responsibilities, while containing no velocity-oriented language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "ensuring reliable, high-quality data as the foundation for every data and AI product"
> Verified: ✓ found in JD
> Reasoning: The role supports operational data quality and AI products without explicit signals of financial reporting, regulatory compliance, or audit risk.

**Run 2:** `moderate` ✓
> Quote: "ensuring reliable, high-quality data as the foundation for every data and AI product"
> Verified: ✓ found in JD
> Reasoning: The focus is on reliable data infrastructure without explicit financial reporting, regulatory compliance, or audit language that would indicate high-risk domain.

**Run 3:** `moderate` ✓
> Quote: "ensuring reliable, high-quality data as the foundation for every data and AI product"
> Verified: ✓ found in JD
> Reasoning: The role supports organizational data infrastructure and products but lacks explicit financial reporting, compliance, or regulatory language that would indicate high risk.

### collaboration_width
**Manual:** `3`

**Run 1:** `4` ✗
> Quote: "Data Product Managers; Data Architects; Tech Leads; Data Engineers"
> Verified: ✓ found in JD
> Reasoning: Four distinct named functions are explicitly listed as collaboration partners in the responsibilities.

**Run 2:** `3` ✓
> Quote: "Data Product Managers; Data Architects; Data Engineers"
> Verified: ✓ found in JD
> Reasoning: Three distinct named functions explicitly listed as collaboration partners (excluding the role holder's own analytics engineering team).

**Run 3:** `4` ✗
> Quote: "Data Product Managers; Data Architects; Tech Leads; Data Engineers"
> Verified: ✓ found in JD
> Reasoning: Four distinct named teams are explicitly mentioned as collaboration partners in the responsibilities section.

⚠ **Disagreement**: manual=`3` vs LLM majority=`4`

⚠ **LLM inconsistency**: runs gave ['4', '3', '4']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Within the Data Foundations teams, we work in a large-scale data environment"
> Verified: ✓ found in JD
> Reasoning: Multiple specialized data sub-teams, established infrastructure with named tools (dbt, Dagster), and external Data Engineers suggest a growing mid-stage function.

**Run 2:** `mid` ✓
> Quote: "Within the Data Foundations teams, we work in a large-scale data environment where we structure, model, and integrate data throughout the entire organization"
> Verified: ✓ found in JD
> Reasoning: Multiple named data roles, large-scale operations, and infrastructure already in place indicate established mid-stage function with active growth and experimentation.

**Run 3:** `mid` ✓
> Quote: "work in a large-scale data environment where we structure, model, and integrate data throughout the entire organization"
> Verified: ✓ found in JD
> Reasoning: The JD describes an existing, large-scale data operation with established processes and multiple specialized teams actively scaling new capabilities like Agentic AI.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Perform Source-to-target analyses (S2T), identify gaps in source data and document required transformations using Agentic AI"
> Verified: ✓ found in JD
> Reasoning: Specific methodologies (S2T) and tool context (Agentic AI) indicate hiring manager input, but generic collaboration verbs elsewhere suggest recruiter involvement.

**Run 2:** `mixed` ✗
> Quote: "Perform Source-to-target analyses (S2T), identify gaps in source data and document required transformations using Agentic AI"
> Verified: ✓ found in JD
> Reasoning: Technical specificity (S2T methodology name, Agentic AI application) suggests hands-on domain expertise, but generic collaboration language throughout indicates recruiter input.

**Run 3:** `mixed` ✗
> Quote: "Perform Source-to-target analyses (S2T), identify gaps in source data and document required transformations using Agentic AI"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain technical domain knowledge (S2T methodology, Agentic AI) alongside generic boilerplate like stakeholder collaboration.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "within the Data Foundations teams, we work in a large-scale data environment where we structure, model, and integrate data throughout the entire organization"
> Verified: ✓ found in JD
> Reasoning: Primary focus is building the internal data platform and infrastructure that others consume, not serving GTM, product, or finance functions directly.

**Run 2:** `internal_data` ✓
> Quote: "guide external Data Engineers toward successful delivery"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves the data engineering team and data infrastructure function, not commercial, product, finance, or external stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "work in a large-scale data environment where we structure, model, and integrate data throughout the entire organization, ensuring reliable, high-quality data as the foundation"
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building reliable data infrastructure for organizational use through Data Foundations teams and internal technical partners.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `execution` ✗
> Quote: "You translate data requirements into robust and scalable solution designs and data models, and guide external Data Engineers toward successful delivery"
> Verified: ✓ found in JD
> Reasoning: The role translates and implements requirements set by others rather than defining overall analytics strategy or direction.

**Run 2:** `mixed` ✗
> Quote: "Define and maintain data quality checks; guide external Data Engineers"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of data quality practices and solution design with execution of requirements defined by Data Product Managers.

**Run 3:** `mixed` ✗
> Quote: "Define and maintain data quality checks; guide external Data Engineers toward successful delivery"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of specific technical domains with execution-oriented collaboration and delivery against requirements set by Data Product Managers and reviewed by Data Architects.

⚠ **Disagreement**: manual=`strategic` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Explore, build and maintain Agentic AI solutions"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build and maintain AI data infrastructure for others to use, not just apply AI coding tools to their own work.

**Run 2:** `ai_enabler` ✗
> Quote: "Explore, build and maintain Agentic AI solutions"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build and maintain Agentic AI systems as core responsibilities, not use AI tools for personal code generation.

**Run 3:** `ai_enabler` ✗
> Quote: "Explore, build and maintain Agentic AI solutions"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build and maintain AI infrastructure and solutions for the organization rather than using AI tools for personal productivity.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Define and maintain data quality checks of clear, reusable documentation"
> Verified: ✓ found in JD
> Reasoning: Data quality checks are framed as a core owned responsibility using the ownership verb 'define.'

**Run 2:** `responsibility` ✗
> Quote: "Define and maintain data quality checks of clear, reusable documentation"
> Verified: ✓ found in JD
> Reasoning: The ownership verbs "define" and "maintain" indicate the candidate owns the data quality checking practice, not just uses existing tools.

**Run 3:** `responsibility` ✗
> Quote: "Define and maintain data quality checks of clear, reusable documentation"
> Verified: ✓ found in JD
> Reasoning: Data quality checks are framed as something the candidate owns and defines with explicit accountability, not merely a tool in their skill list.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensure solutions are scalable, robust and cost efficient, with quality as the basic principle"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and quality are foundational concerns, but without explicit compliance, audit, or risk-prevention language.

**Run 2:** `moderate` ✗
> Quote: "ensuring reliable, high-quality data as the foundation for every data and AI product"
> Verified: ✓ found in JD
> Reasoning: The emphasis on reliability and quality reflects operational concerns rather than regulatory compliance or prevention of catastrophic stakeholder impact.

**Run 3:** `moderate` ✗
> Quote: "quality as the basic principle"
> Verified: ✓ found in JD
> Reasoning: Data quality and reliability are central operational principles but the JD lacks explicit compliance, regulatory, or risk-prevention language that would indicate high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
