# LLM Classification Consistency Report

**JDs classified:** 33  
**Runs per JD:** 3  
**Model:** claude-haiku-4-5  
**Method:** claude CLI subprocess  
**Traces:** see `jd_traces/<application_id>.md` for full per-JD evidence  

---

## Inter-run agreement (LLM self-consistency)

1.00 = all three runs identical. Lower = model is uncertain on this dimension.

| Dimension | Mean | Min | Max | Fully consistent (3/3) |
|-----------|------|-----|-----|------------------------|
| velocity_vs_rigour | 0.91 | 0.00 | 1.00 | 29/33 |
| domain_risk | 0.74 | 0.33 | 1.00 | 20/33 |
| collaboration_width | 0.78 | 0.33 | 1.00 | 22/33 |
| data_team_maturity | 0.90 | 0.33 | 1.00 | 28/33 |
| jd_authorship | 0.58 | 0.00 | 1.00 | 14/33 |
| stakeholder_orientation | 0.84 | 0.33 | 1.00 | 25/33 |
| autonomy_level | 0.72 | 0.33 | 1.00 | 19/33 |
| ai_role | 0.94 | 0.33 | 1.00 | 30/33 |
| testing_framing | 0.96 | 0.33 | 1.00 | 31/33 |
| loss_aversion_framing | 0.80 | 0.33 | 1.00 | 23/33 |

## Manual vs LLM majority-vote agreement

How often the LLM majority vote (best of 3) matches the original hand-coded classification.
High agreement → manual classifications are reproducible by the model.
Low agreement → either the codebook is ambiguous or the original call was subjective.

| Dimension | Match rate | n matched | n total |
|-----------|-----------|-----------|---------|
| velocity_vs_rigour | 66.7% | 22 | 33 |
| domain_risk | 54.5% | 18 | 33 |
| collaboration_width | 21.2% | 7 | 33 |
| data_team_maturity | 57.6% | 19 | 33 |
| jd_authorship | 51.5% | 17 | 33 |
| stakeholder_orientation | 93.9% | 31 | 33 |
| autonomy_level | 84.8% | 28 | 33 |
| ai_role | 0.0% | 0 | 33 |
| testing_framing | 0.0% | 0 | 33 |
| loss_aversion_framing | 0.0% | 0 | 33 |

## Evidence quote verification

Checks whether the verbatim quote cited by the LLM actually appears in the JD text.
Failures indicate hallucinated or paraphrased evidence.

| Dimension | Run 1 pass | Run 2 pass | Run 3 pass |
|-----------|-----------|-----------|-----------|
| velocity_vs_rigour | 31/33 | 32/33 | 32/33 |
| domain_risk | 29/33 | 32/33 | 31/33 |
| collaboration_width | 30/33 | 28/33 | 32/33 |
| data_team_maturity | 33/33 | 33/33 | 33/33 |
| jd_authorship | 32/33 | 32/33 | 33/33 |
| stakeholder_orientation | 26/33 | 30/33 | 29/33 |
| autonomy_level | 33/33 | 33/33 | 32/33 |
| ai_role | 32/33 | 33/33 | 33/33 |
| testing_framing | 25/33 | 19/33 | 23/33 |
| loss_aversion_framing | 30/33 | 33/33 | 32/33 |

## Disagreements: manual vs LLM majority vote

Each disagreement is a candidate for codebook revision or reclassification.
See `jd_traces/<application_id>.md` for full reasoning on each case.

### velocity_vs_rigour (11 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_tem_staff-analytics-engineer | mixed | mixed | rigour | rigour | rigour | Balance speed, accuracy, and maintainability in data modeling decisions. |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | mixed | rigour | rigour | rigour | rigour | Code complex business logic (royalties, taxable turnover, margins) |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | mixed | rigour | rigour | rigour | rigour | Code complex business logic (royalties, taxable turnover, margins) |
| 2026-04-22_about-you_senior-data-engineer | mixed | rigour | rigour | rigour | rigour | Strong software engineering fundamentals (CI/CD, testing, design patterns) |
| 2026-04-22_about-you_senior-data-engineer | mixed | rigour | rigour | rigour | rigour | Strong software engineering fundamentals (CI/CD, testing, design patterns) |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | mixed | rigour | rigour | rigour | rigour | Creating and maintaining a 'Finance Single Source of Truth' covering revenue, COGS, logistics costs, and EBITDA |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | mixed | rigour | rigour | rigour | rigour | Creating and maintaining a 'Finance Single Source of Truth' covering revenue, COGS, logistics costs, and EBITDA |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | mixed | rigour | rigour | rigour | rigour | establishing the foundation for all financial reporting |
| 2026-04-22_qasa_analytics-engineer | mixed | rigour | rigour | rigour | rigour | Implement data governance protocols addressing GDPR compliance and access management |
| 2026-04-22_qasa_analytics-engineer | mixed | rigour | rigour | rigour | rigour | Implement data governance protocols addressing GDPR compliance and access management |
| 2026-04-22_qasa_analytics-engineer | mixed | rigour | rigour | rigour | rigour | Implement data governance protocols addressing GDPR compliance and access management |

### domain_risk (15 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_tem_staff-analytics-engineer | high | moderate | moderate | moderate | moderate | Design and maintain core dbt models representing business areas like customers, revenue, and operations. |
| 2026-04-09_ai-futures_data-team-lead | high | moderate | moderate | high | moderate | AI-driven pricing, payments, and financial decisioning across connected vehicle ecosystems |
| 2026-04-09_nkg_sustainability-data-analyst | high | moderate | high | moderate | moderate | Develop and implement a unified sustainability data platform integrating multiple sources |
| 2026-04-09_nkg_sustainability-data-analyst | high | high | moderate | moderate | moderate | Experience with EUDR compliance systems (e.g., osapiens) |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | moderate | high | moderate | high | high | Code complex business logic (royalties, taxable turnover, margins) |
| 2026-04-22_about-you_senior-data-engineer | high | moderate | high | moderate | moderate | Own the most important company reports that inform executive decisions and serve other departments. |
| 2026-04-22_distribusion_analytics-engineer | high | moderate | moderate | moderate | moderate | Build new Looker dashboards from scratch |
| 2026-04-22_distribusion_analytics-engineer | high | moderate | moderate | moderate | moderate | Exposure to major clients like Booking.com and Google Maps |
| 2026-04-22_polyteia_analytics-engineering-lead | high | moderate | high | moderate | moderate | data products across public sector domains including "Gesundheit, Finanzen oder Personal" |
| 2026-04-22_polyteia_analytics-engineering-lead | high | moderate | high | moderate | moderate | Developing and maintaining data products across public sector domains including "Gesundheit, Finanzen oder Personal" |
| 2026-04-22_qasa_analytics-engineer | moderate | high | high | moderate | high | Implement data governance protocols addressing GDPR compliance and access management |
| 2026-04-22_qasa_analytics-engineer | moderate | moderate | high | high | high | Transform complex data into compelling narratives informing product strategy and financial planning |
| 2026-04-22_statista_analytics-engineer-reporting-platform | low | moderate | moderate | moderate | moderate | By providing reliable and easy-to-use data as well as various data analytics products and services, we empower people wo… |
| 2026-04-22_statista_analytics-engineer-reporting-platform | low | moderate | moderate | moderate | moderate | Support documentation and governance efforts to improve maintainability and trust in reporting assets |
| 2026-04-22_statista_analytics-engineer-reporting-platform | low | moderate | moderate | moderate | moderate | empower people worldwide to make fact-based decisions |

### collaboration_width (26 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_lego_senior-analytics-engineer | 8 | 6 | 5 | 5 | 5 | Analytics Interface; Commercial Analytics; Markets & Channels; Analytics Innovation & Automation; Data Office product te… |
| 2026-04-09_ai-futures_data-team-lead | 2 | 0 | 1 | 1 | 1 | No named partner teams identified |
| 2026-04-09_nkg_sustainability-data-analyst | 2 | 0 | 0 | 0 | 0 | Strong cross-functional collaboration abilities |
| 2026-04-09_nkg_sustainability-data-analyst | 2 | 0 | 0 | 0 | 0 | Strong cross-functional collaboration abilities |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | 4 | 1 | 1 | 1 | 1 | Support franchise partners' decisions regarding stock, supply chain, and pricing |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | 4 | 1 | 1 | 1 | 1 | franchise partners |
| 2026-04-22_about-you_senior-data-engineer | 3 | 0 | 0 | 0 | 0 | No named partner teams identified. |
| 2026-04-22_about-you_senior-data-engineer | 3 | 1 | 1 | 1 | 1 | other data teams |
| 2026-04-22_distribusion_analytics-engineer | 3 | 0 | 0 | 0 | 0 | Collaborative international team environment |
| 2026-04-22_distribusion_analytics-engineer | 3 | 0 | 0 | 0 | 0 | No named partner teams explicitly identified |
| 2026-04-22_leasingmarkt_principal-analytics-engineer | 4 | 3 | 3 | 3 | 3 | Partner with data platform, engineering, and analytics teams on high-performance pipelines |
| 2026-04-22_leasingmarkt_principal-analytics-engineer | 4 | 3 | 3 | 3 | 3 | data platform, engineering, and analytics teams |
| 2026-04-22_mentimeter_analytics-engineer | 4 | 3 | 0 | 0 | 0 | Business acumen covering sales, marketing, and product analytics |
| 2026-04-22_mentimeter_analytics-engineer | 4 | 3 | 3 | 3 | 3 | sales; marketing; product analytics |
| 2026-04-22_mentimeter_analytics-engineer | 4 | 3 | 0 | 0 | 0 | sales; marketing; product analytics |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | 3 | 3 | 2 | 2 | 2 | Collaborating with finance, operations, and leadership teams to align on metrics and embed data in decision-making |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | 3 | 3 | 2 | 2 | 2 | finance; operations; leadership |
| 2026-04-22_polyteia_analytics-engineering-lead | 2 | 1 | 1 | 1 | 1 | customer success teams |
| 2026-04-22_polyteia_analytics-engineering-lead | 2 | 1 | 2 | 1 | 1 | collaborating closely with customer success teams |
| 2026-04-22_polyteia_analytics-engineering-lead | 2 | 2 | 1 | 1 | 1 | customer success teams; public sector clients |
| 2026-04-22_qasa_analytics-engineer | 5 | 6 | 6 | 6 | 6 | Product; Marketing; Finance; Support; Country Management teams; engineering |
| 2026-04-22_qasa_analytics-engineer | 5 | 6 | 6 | 6 | 6 | Product; Marketing; Finance; Support; Country Management; engineering |
| 2026-04-22_qasa_analytics-engineer | 5 | 6 | 6 | 6 | 6 | Product, Marketing, Finance, Support, and Country Management teams; engineering |
| 2026-04-22_statista_analytics-engineer-reporting-platform | 4 | 0 | 0 | 0 | 0 | Be the first point of contact for administration topics around the reporting platform, e.g. architecture questions, perm… |
| 2026-04-22_statista_analytics-engineer-reporting-platform | 4 | 0 | 0 | 0 | 0 | Be the first point of contact for administration topics around the reporting platform |
| 2026-04-22_statista_analytics-engineer-reporting-platform | 4 | 0 | 0 | 0 | 0 | Analyze reporting usage and help identify opportunities for optimization and cleanup. |

### data_team_maturity (14 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_riverty_data-engineering-lead | mature | mid | mid | mid | mid | shared core data platform |
| 2026-04-08_tem_staff-analytics-engineer | early | mid | mid | mid | mid | This hands-on, individual contributor position focuses on building the analytics foundation. |
| 2026-04-09_ai-futures_data-team-lead | early | mid | mid | mid | mid | Growing and mentoring a data engineering team and contributing to hiring decisions |
| 2026-04-09_lovable_analytics-engineer-finance | early | mid | mid | mid | mid | Establish foundational tables for monthly/annual recurring revenue, churn analysis, and revenue patterns |
| 2026-04-09_nkg_sustainability-data-analyst | early | mid | mid | mid | mid | Design and operate scalable data pipelines within Microsoft Fabric; Create Power BI dashboards and reports |
| 2026-04-09_nkg_sustainability-data-analyst | early | mid | mid | mid | mid | Design and operate scalable data pipelines within Microsoft Fabric |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | early | early | mid | mid | mid | Early-stage opportunity to build and structure analytics capabilities |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | early | mid | mid | early | mid | Build data marts and business layers using dbt on Databricks |
| 2026-04-22_distribusion_analytics-engineer | early | mid | mid | mid | mid | Become proficient with the data lake, understanding data sources and processing workflows |
| 2026-04-22_distribusion_analytics-engineer | early | mid | mid | mid | mid | Become proficient with the data lake, understanding data sources and processing workflows; Familiarity with big data tec… |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | early | mid | mid | mid | mid | Comfort navigating uncertainty and bringing structure to developing systems |
| 2026-04-22_qasa_analytics-engineer | early | mid | mid | mid | mid | Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams; Design… |
| 2026-04-22_qasa_analytics-engineer | early | mid | mid | mid | mid | Design and construct data models serving as the bridge between raw data and business insights |
| 2026-04-22_qasa_analytics-engineer | early | early | mid | mid | mid | Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams |

### jd_authorship (16 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_lego_senior-analytics-engineer | hiring_manager | mixed | mixed | mixed | mixed | Build and maintain semantic layer infrastructure including metric view pipelines, materialization and optimization. |
| 2026-04-09_ai-futures_data-team-lead | mixed | hiring_manager | mixed | hiring_manager | hiring_manager | Owning ETL and ELT pipeline development using Python and low-code platforms such as RapidMiner |
| 2026-04-09_lovable_analytics-engineer-finance | mixed | mixed | hiring_manager | hiring_manager | hiring_manager | Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics |
| 2026-04-09_nkg_sustainability-data-analyst | recruiter | mixed | mixed | recruiter | mixed | Design and operate scalable data pipelines within Microsoft Fabric; Gather requirements and translate them into effectiv… |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | mixed | hiring_manager | mixed | hiring_manager | hiring_manager | Code complex business logic (royalties, taxable turnover, margins) |
| 2026-04-22_distribusion_analytics-engineer | recruiter | mixed | recruiter | mixed | mixed | Build new Looker dashboards from scratch within tight deadlines |
| 2026-04-22_distribusion_analytics-engineer | recruiter | mixed | mixed | mixed | mixed | Build new Looker dashboards from scratch within tight deadlines; Grasp project context quickly to identify critical need… |
| 2026-04-22_mentimeter_analytics-engineer | hiring_manager | mixed | mixed | mixed | mixed | Design, own, and evolve core data models and the modelling architecture |
| 2026-04-22_mentimeter_analytics-engineer | hiring_manager | mixed | mixed | mixed | mixed | Design, own, and evolve core data models and the modelling architecture; Partner with business and technical stakeholder… |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | hiring_manager | hiring_manager | mixed | mixed | mixed | Leading ERP data integration into the data warehouse and establishing the foundation for all financial reporting |
| 2026-04-22_polyteia_analytics-engineering-lead | mixed | hiring_manager | hiring_manager | hiring_manager | hiring_manager | Actively coding in Python, dbt, and Airflow while coordinating project advancement |
| 2026-04-22_qasa_analytics-engineer | recruiter | recruiter | mixed | mixed | mixed | Transform complex data into compelling narratives informing product strategy and financial planning |
| 2026-04-22_shine_senior-analytics-engineer | hiring_manager | mixed | mixed | mixed | mixed | Drive AI-assisted workflows, including GitHub Copilot integration |
| 2026-04-22_shine_senior-analytics-engineer | hiring_manager | recruiter | mixed | hiring_manager | recruiter | Collaborate with Data Engineering and Analytics teams on pipelines and requirements |
| 2026-04-22_shine_senior-analytics-engineer | hiring_manager | mixed | mixed | hiring_manager | mixed | Define SQL styling standards and peer review processes |
| 2026-04-22_statista_analytics-engineer-reporting-platform | mixed | hiring_manager | recruiter | mixed | hiring_manager | Analyze reporting usage and help identify opportunities for optimization and cleanup. Increase transparency around data … |

### stakeholder_orientation (2 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-22_qasa_analytics-engineer | internal_data | mixed | mixed | internal_data | mixed | Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams |
| 2026-04-22_qasa_analytics-engineer | internal_data | mixed | internal_data | mixed | mixed | Transform complex data into compelling narratives informing product strategy and financial planning |

### autonomy_level (5 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_lego_senior-analytics-engineer | strategic | mixed | mixed | mixed | mixed | Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility in highly controlled co… |
| 2026-04-09_nkg_sustainability-data-analyst | execution | mixed | mixed | execution | mixed | Develop and implement a unified sustainability data platform; Gather requirements and translate them into effective repo… |
| 2026-04-22_statista_analytics-engineer-reporting-platform | mixed | execution | execution | execution | execution | Support the ongoing modernization of the BI stack, including evaluating and testing alternative analytics and visualizat… |
| 2026-04-22_statista_analytics-engineer-reporting-platform | mixed | execution | execution | execution | execution | Support the ongoing modernization of the BI stack, including evaluating and testing alternative analytics and visualizat… |
| 2026-04-22_statista_analytics-engineer-reporting-platform | mixed | execution | execution | execution | execution | Support documentation and governance efforts to improve maintainability and trust in reporting assets. |

### ai_role — no disagreements ✓

### testing_framing — no disagreements ✓

### loss_aversion_framing — no disagreements ✓

## LLM internal inconsistencies (runs disagree with each other)

These are cases where the same prompt produced different answers across 3 runs.
High inconsistency → borderline case or ambiguous JD language.

### velocity_vs_rigour (4 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_tem_staff-analytics-engineer | mixed | rigour | rigour | mixed |
| 2026-04-09_ai-futures_data-team-lead | velocity | velocity | rigour | velocity |
| 2026-04-22_distribusion_analytics-engineer | mixed | rigour | velocity | mixed |
| 2026-04-22_polyteia_analytics-engineering-lead | rigour | mixed | rigour | rigour |

### domain_risk (13 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-09_ai-futures_data-team-lead | moderate | moderate | high | high |
| 2026-04-09_nkg_sustainability-data-analyst | moderate | high | moderate | high |
| 2026-04-09_nkg_sustainability-data-analyst | high | moderate | moderate | high |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | high | moderate | high | moderate |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | high | moderate | moderate | moderate |
| 2026-04-22_about-you_senior-data-engineer | moderate | high | moderate | high |
| 2026-04-22_about-you_senior-data-engineer | high | high | moderate | high |
| 2026-04-22_polyteia_analytics-engineering-lead | high | high | moderate | high |
| 2026-04-22_polyteia_analytics-engineering-lead | moderate | high | moderate | high |
| 2026-04-22_polyteia_analytics-engineering-lead | moderate | high | moderate | high |
| 2026-04-22_qasa_analytics-engineer | high | high | moderate | moderate |
| 2026-04-22_qasa_analytics-engineer | moderate | moderate | high | moderate |
| 2026-04-22_qasa_analytics-engineer | moderate | high | high | moderate |

### collaboration_width (11 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_lego_senior-analytics-engineer | 6 | 5 | 5 | 8 |
| 2026-04-08_riverty_data-engineering-lead | 9 | 9 | 10 | 9 |
| 2026-04-09_ai-futures_data-team-lead | 0 | 1 | 1 | 2 |
| 2026-04-22_mentimeter_analytics-engineer | 3 | 0 | 0 | 4 |
| 2026-04-22_mentimeter_analytics-engineer | 3 | 0 | 0 | 4 |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | 3 | 2 | 2 | 3 |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | 3 | 2 | 2 | 3 |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | 3 | 3 | 2 | 3 |
| 2026-04-22_polyteia_analytics-engineering-lead | 1 | 2 | 1 | 2 |
| 2026-04-22_polyteia_analytics-engineering-lead | 2 | 1 | 1 | 2 |
| 2026-04-22_shine_senior-analytics-engineer | 3 | 2 | 2 | 2 |

### data_team_maturity (5 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | early | mid | mid | early |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | mid | mid | early | early |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | mid | early | early | early |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | early | mid | early | early |
| 2026-04-22_qasa_analytics-engineer | early | mid | mid | early |

### jd_authorship (19 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_riverty_data-engineering-lead | hiring_manager | mixed | hiring_manager | hiring_manager |
| 2026-04-08_tem_staff-analytics-engineer | hiring_manager | mixed | hiring_manager | hiring_manager |
| 2026-04-09_ai-futures_data-team-lead | hiring_manager | mixed | hiring_manager | mixed |
| 2026-04-09_lovable_analytics-engineer-finance | mixed | hiring_manager | hiring_manager | mixed |
| 2026-04-09_nkg_sustainability-data-analyst | mixed | mixed | recruiter | recruiter |
| 2026-04-09_nkg_sustainability-data-analyst | mixed | recruiter | recruiter | recruiter |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | hiring_manager | mixed | hiring_manager | mixed |
| 2026-04-22_distribusion_analytics-engineer | mixed | recruiter | mixed | recruiter |
| 2026-04-22_mentimeter_analytics-engineer | hiring_manager | mixed | hiring_manager | hiring_manager |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | hiring_manager | hiring_manager | mixed | hiring_manager |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | hiring_manager | mixed | mixed | hiring_manager |
| 2026-04-22_polyteia_analytics-engineering-lead | mixed | mixed | hiring_manager | mixed |
| 2026-04-22_qasa_analytics-engineer | recruiter | mixed | mixed | recruiter |
| 2026-04-22_qasa_analytics-engineer | recruiter | hiring_manager | mixed | recruiter |
| 2026-04-22_shine_senior-analytics-engineer | recruiter | mixed | hiring_manager | hiring_manager |
| 2026-04-22_shine_senior-analytics-engineer | mixed | mixed | hiring_manager | hiring_manager |
| 2026-04-22_statista_analytics-engineer-reporting-platform | hiring_manager | recruiter | mixed | mixed |
| 2026-04-22_statista_analytics-engineer-reporting-platform | mixed | mixed | recruiter | mixed |
| 2026-04-22_statista_analytics-engineer-reporting-platform | mixed | recruiter | hiring_manager | mixed |

### stakeholder_orientation (8 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_lego_senior-analytics-engineer | commercial | internal_data | commercial | commercial |
| 2026-04-09_ai-futures_data-team-lead | commercial | internal_data | internal_data | internal_data |
| 2026-04-22_about-you_senior-data-engineer | finance | internal_data | internal_data | internal_data |
| 2026-04-22_distribusion_analytics-engineer | internal_data | commercial | internal_data | internal_data |
| 2026-04-22_polyteia_analytics-engineering-lead | mixed | commercial | commercial | commercial |
| 2026-04-22_qasa_analytics-engineer | internal_data | mixed | internal_data | internal_data |
| 2026-04-22_qasa_analytics-engineer | mixed | mixed | internal_data | internal_data |
| 2026-04-22_qasa_analytics-engineer | mixed | internal_data | mixed | internal_data |

### autonomy_level (14 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-09_ai-futures_data-team-lead | mixed | strategic | strategic | strategic |
| 2026-04-09_lovable_analytics-engineer-finance | execution | mixed | execution | execution |
| 2026-04-09_nkg_sustainability-data-analyst | mixed | mixed | execution | execution |
| 2026-04-09_nkg_sustainability-data-analyst | execution | mixed | execution | execution |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | execution | mixed | execution | execution |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | execution | execution | mixed | execution |
| 2026-04-22_about-you_senior-data-engineer | strategic | strategic | mixed | strategic |
| 2026-04-22_distribusion_analytics-engineer | execution | execution | mixed | execution |
| 2026-04-22_mentimeter_analytics-engineer | strategic | mixed | strategic | strategic |
| 2026-04-22_polyteia_analytics-engineering-lead | mixed | mixed | strategic | mixed |
| 2026-04-22_qasa_analytics-engineer | mixed | strategic | strategic | strategic |
| 2026-04-22_qasa_analytics-engineer | strategic | mixed | strategic | strategic |
| 2026-04-22_shine_senior-analytics-engineer | mixed | mixed | strategic | mixed |
| 2026-04-22_shine_senior-analytics-engineer | mixed | mixed | execution | mixed |

### ai_role (3 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_lego_senior-analytics-engineer | none | ai_enabler | ai_enabler |  |
| 2026-04-08_riverty_data-engineering-lead | ai_enabler | none | none |  |
| 2026-04-09_ai-futures_data-team-lead | ai_enabler | none | none |  |

### testing_framing (2 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-22_mentimeter_analytics-engineer | tool_listed | absent | absent |  |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | absent | absent | tool_listed |  |

### loss_aversion_framing (10 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_riverty_data-engineering-lead | high | moderate | high |  |
| 2026-04-09_lovable_analytics-engineer-finance | high | moderate | high |  |
| 2026-04-09_nkg_sustainability-data-analyst | none | moderate | moderate |  |
| 2026-04-09_nkg_sustainability-data-analyst | moderate | none | none |  |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | moderate | none | none |  |
| 2026-04-22_mentimeter_analytics-engineer | moderate | moderate | none |  |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | moderate | moderate | none |  |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | moderate | moderate | none |  |
| 2026-04-22_polyteia_analytics-engineering-lead | moderate | moderate | none |  |
| 2026-04-22_polyteia_analytics-engineering-lead | none | moderate | moderate |  |
