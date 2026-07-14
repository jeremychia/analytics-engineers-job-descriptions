# Trace: 2026-07-03_decathlon-digital_senior-bi-analytics-engineer-circularity

## JD text (fed to classifier, Layer B stripped)

```
# Senior BI & Analytics Engineer - Circularity — Decathlon Digital FR

**URL:** https://job-boards.eu.greenhouse.io/decathlontechnology/jobs/4917685101?gh_src=cb30d7c2teu
**Location:** Paris, France; Villeneuve-d'Ascq (Lille), France
**Date Posted:** 2026-07-03

---

Senior BI & Analytics Engineer - Circularity

Decathlon Digital FR seeks a Senior BI & Analytics Engineer to structure data infrastructure and design robust BI solutions for the second-hand business model.

Key Responsibilities
• Collaborate closely with business teams to define KPIs
• Design optimized datasets and ensure dashboard performance
• Monitor production data integrity and resolve incidents
• Create documentation to help users work independently
• Lead proof-of-concept projects with generative AI tools

Required Qualifications
• Minimum 5 years as BI Engineer, Analytics Engineer, or Data Analyst with strong data modeling focus
• SQL mastery, data modeling expertise, Tableau proficiency
• Ideally dbt, Databricks, Git, and Airflow knowledge
• Soft skills: Teamwork, critical thinking, organizational rigor, "you build it, you run it" mentality
• Fluent English (oral and written)
• Commitment to sustainable innovation (Tech4Good)

Technical Stack
Databricks, AWS S3, dbt, SQL, Airflow, Tableau, Git, GitHub Actions, Confluence

Benefits
Hybrid work, equipment provision, international career opportunities, skills development, employee stock options, performance bonuses

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | mixed | mixed | 100% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | mixed | mixed | mixed | 100% | ✗ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data integrity monitoring, incident resolution, and documentation for reliability, with no velocity-oriented language like shipping speed or iteration pace.

**Run 2:** `rigour` ✓
> Quote: "Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize operational reliability, data integrity monitoring, and incident resolution rather than speed or iteration.

**Run 3:** `rigour` ✓
> Quote: "organizational rigor"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data integrity, dashboard performance, and organizational rigor as core expectations without any velocity-oriented language like 'fast-paced' or 'iterate quickly'.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Collaborate closely with business teams to define KPIs"
> Verified: ✓ found in JD
> Reasoning: The role supports operational business intelligence for a circular commerce business unit without financial reporting, compliance, or regulatory signals, indicating data errors affect business decisions but not financial or regulatory exposure.

**Run 2:** `moderate` ✓
> Quote: "design robust BI solutions for the second-hand business model"
> Verified: ✓ found in JD
> Reasoning: Data errors affect business decisions in an e-commerce context but lack explicit compliance, regulatory, or financial reporting language.

**Run 3:** `moderate` ✓
> Quote: "structure data infrastructure and design robust BI solutions for the second-hand business model"
> Verified: ✓ found in JD
> Reasoning: The role involves business intelligence and operational reporting for an e-commerce business unit without explicit financial reporting, compliance, or regulatory risk language.

### collaboration_width
**Manual:** `1`

**Run 1:** `0` ✗
> Quote: "None - generic 'business teams' mentioned without named functions"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD mentions collaboration with 'business teams' but does not name specific functions like Finance, Product, Marketing, or Engineering.

**Run 2:** `0` ✗
> Quote: "Collaborate closely with business teams"
> Verified: ✓ found in JD
> Reasoning: Only generic reference to 'business teams' without any named partner functions or specific teams.

**Run 3:** `0` ✗
> Quote: "Collaborate closely with business teams to define KPIs"
> Verified: ✓ found in JD
> Reasoning: Although the JD mentions collaboration with business teams, 'business teams' is generic stakeholder language and does not count as a named function or team per the classification rules.

⚠ **Disagreement**: manual=`1` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "structure data infrastructure and design robust BI solutions"
> Verified: ✓ found in JD
> Reasoning: The use of 'structure' and 'design' alongside a specific technical stack (Databricks, dbt, Airflow) indicates an existing data function that needs organization and optimization rather than creation from scratch.

**Run 2:** `mid` ✓
> Quote: "structure data infrastructure and design robust BI solutions"
> Verified: ✓ found in JD
> Reasoning: Active building and structuring of infrastructure indicates a growing data function with existing production systems that need scaling or redesign.

**Run 3:** `mid` ✓
> Quote: "structure data infrastructure and design robust BI solutions for the second-hand business model"
> Verified: ✓ found in JD
> Reasoning: The specified technical stack (Databricks, AWS S3, dbt, Airflow, Tableau) indicates existing infrastructure in place, and the framing emphasizes structuring/optimizing rather than building from zero, suggesting a data team in growth phase.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Monitor production data integrity and resolve incidents; Create documentation to help users work independently"
> Verified: ✓ found in JD
> Reasoning: Some responsibilities show technical specificity (production monitoring, data integrity) reflecting actual job experience, while others use generic collaboration language suggesting template boilerplate.

**Run 2:** `mixed` ✗
> Quote: "Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: Contains specific operational context but lacks technical depth like volume numbers or methodology specifics, combined with generic boilerplate phrases.

**Run 3:** `mixed` ✗
> Quote: "Design optimized datasets and ensure dashboard performance; Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: The JD mixes technical specificity (optimized datasets, production monitoring, incident resolution) with generic boilerplate (collaborate with stakeholders, create documentation).

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Create documentation to help users work independently; Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: The role's emphasis on infrastructure, documentation for self-serve analytics, and production reliability indicates primary service to data platform consumers and internal analytics users rather than external stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "structure data infrastructure and design robust BI solutions"
> Verified: ✓ found in JD
> Reasoning: Primary focus is building analytics infrastructure, designing datasets, ensuring platform performance, and enabling self-serve user independence.

**Run 3:** `internal_data` ✓
> Quote: "structure data infrastructure and design robust BI solutions for the second-hand business model"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building data infrastructure and BI solutions as a platform, with business teams as downstream platform consumers rather than as primary decision-makers.

### autonomy_level
**Manual:** `execution`

**Run 1:** `mixed` ✗
> Quote: "Design optimized datasets; Define KPIs; Lead proof-of-concept projects"
> Verified: ✓ found in JD
> Reasoning: The responsibilities combine strategic verbs (design, define, lead) suggesting autonomy in architecture decisions, alongside operational execution (monitor, resolve, document) in service of predetermined business needs.

**Run 2:** `mixed` ✗
> Quote: "Design optimized datasets; Lead proof-of-concept projects with generative AI tools; Monitor production data integrity"
> Verified: ✓ found in JD
> Reasoning: Role combines strategic ownership (design, lead PoCs) with execution (monitor, resolve incidents), representing both direction-setting and operational delivery.

**Run 3:** `mixed` ✗
> Quote: "Design optimized datasets and ensure dashboard performance; Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: The role includes strategic responsibilities (defining KPIs, designing datasets, leading PoCs) balanced with operational execution (monitoring data integrity, creating documentation).

⚠ **Disagreement**: manual=`execution` vs LLM majority=`mixed`

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Lead proof-of-concept projects with generative AI tools"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to lead exploratory projects using GenAI tools to enhance analytics work, indicating hands-on use of AI tools to accelerate their own productivity rather than building AI infrastructure.

**Run 2:** `ai_user` ✗
> Quote: "Lead proof-of-concept projects with generative AI tools"
> Verified: ✓ found in JD
> Reasoning: Candidate is expected to explore and lead projects using generative AI tools in their analytics work, not build AI-ready data infrastructure.

**Run 3:** `ai_user` ✗
> Quote: "Lead proof-of-concept projects with generative AI tools"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to lead exploration and proof-of-concept work with generative AI tools, requiring comfort using AI tools as part of their analytics work.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: The candidate owns monitoring and maintaining data integrity in production, framed as a core responsibility, though specific testing frameworks or data quality tools are not named.

**Run 2:** `responsibility` ✗
> Quote: "Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: Candidate owns data integrity monitoring and incident response, demonstrating responsibility for observability and quality assurance.

**Run 3:** `responsibility` ✗
> Quote: "Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: The candidate owns responsibility for monitoring and resolving data integrity issues, making them accountable for data quality outcomes.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and incident response to prevent bad data from reaching users, reflecting moderate risk aversion focused on pipeline stability rather than compliance or regulatory concerns.

**Run 2:** `moderate` ✗
> Quote: "Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: Operational reliability is a concern but secondary; framing centers on pipeline integrity and incident response rather than compliance or stakeholder trust.

**Run 3:** `moderate` ✗
> Quote: "Monitor production data integrity and resolve incidents"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes production reliability and incident response as secondary operational concerns rather than as primary drivers of the role framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
