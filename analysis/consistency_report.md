# LLM Classification Consistency Report

**JDs classified:** 17  
**Runs per JD:** 3  
**Model:** claude-haiku-4-5  
**Method:** claude CLI subprocess  
**Traces:** see `jd_traces/<application_id>.md` for full per-JD evidence  

---

## Inter-run agreement (LLM self-consistency)

1.00 = all three runs identical. Lower = model is uncertain on this dimension.

| Dimension | Mean | Min | Max | Fully consistent (3/3) |
|-----------|------|-----|-----|------------------------|
| velocity_vs_rigour | 0.96 | 0.33 | 1.00 | 16/17 |
| domain_risk | 0.80 | 0.33 | 1.00 | 12/17 |
| collaboration_width | 0.71 | 0.00 | 1.00 | 10/17 |
| data_team_maturity | 0.92 | 0.33 | 1.00 | 15/17 |
| jd_authorship | 0.43 | 0.00 | 1.00 | 4/17 |
| stakeholder_orientation | 0.80 | 0.33 | 1.00 | 12/17 |
| autonomy_level | 0.65 | 0.33 | 1.00 | 8/17 |
| ai_role | 0.96 | 0.33 | 1.00 | 16/17 |
| testing_framing | 0.96 | 0.33 | 1.00 | 16/17 |
| loss_aversion_framing | 0.73 | 0.33 | 1.00 | 10/17 |

## Manual vs LLM majority-vote agreement

How often the LLM majority vote (best of 3) matches the original hand-coded classification.
High agreement → manual classifications are reproducible by the model.
Low agreement → either the codebook is ambiguous or the original call was subjective.

| Dimension | Match rate | n matched | n total |
|-----------|-----------|-----------|---------|
| velocity_vs_rigour | 52.9% | 9 | 17 |
| domain_risk | 70.6% | 12 | 17 |
| collaboration_width | 23.5% | 4 | 17 |
| data_team_maturity | 47.1% | 8 | 17 |
| jd_authorship | 52.9% | 9 | 17 |
| stakeholder_orientation | 100.0% | 17 | 17 |
| autonomy_level | 76.5% | 13 | 17 |
| ai_role | 0.0% | 0 | 17 |
| testing_framing | 0.0% | 0 | 17 |
| loss_aversion_framing | 0.0% | 0 | 17 |

## Evidence quote verification

Checks whether the verbatim quote cited by the LLM actually appears in the JD text.
Failures indicate hallucinated or paraphrased evidence.

| Dimension | Run 1 pass | Run 2 pass | Run 3 pass |
|-----------|-----------|-----------|-----------|
| velocity_vs_rigour | 17/17 | 17/17 | 16/17 |
| domain_risk | 17/17 | 15/17 | 17/17 |
| collaboration_width | 16/17 | 15/17 | 16/17 |
| data_team_maturity | 17/17 | 17/17 | 16/17 |
| jd_authorship | 17/17 | 17/17 | 15/17 |
| stakeholder_orientation | 15/17 | 15/17 | 15/17 |
| autonomy_level | 17/17 | 17/17 | 16/17 |
| ai_role | 17/17 | 16/17 | 15/17 |
| testing_framing | 14/17 | 12/17 | 13/17 |
| loss_aversion_framing | 16/17 | 17/17 | 16/17 |

## Disagreements: manual vs LLM majority vote

Each disagreement is a candidate for codebook revision or reclassification.
See `jd_traces/<application_id>.md` for full reasoning on each case.

### velocity_vs_rigour (8 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_tem_staff-analytics-engineer | mixed | rigour | rigour | rigour | rigour | Establish data quality standards using tests, CI/CD, and documentation. |
| 2026-04-09_ai-futures_data-team-lead | velocity | rigour | rigour | rigour | rigour | Designing and building a modern data platform for "high-volume, real-time vehicle and transaction data" |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | mixed | rigour | rigour | rigour | rigour | Document KPI definitions and business rules |
| 2026-04-22_about-you_senior-data-engineer | mixed | rigour | rigour | rigour | rigour | Strong software engineering fundamentals (CI/CD, testing, design patterns) |
| 2026-04-22_distribusion_analytics-engineer | mixed | velocity | velocity | mixed | velocity | Build new Looker dashboards from scratch within tight deadlines |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | mixed | rigour | rigour | rigour | rigour | establishing the foundation for all financial reporting |
| 2026-04-22_qasa_analytics-engineer | mixed | rigour | rigour | rigour | rigour | Implement data governance protocols addressing GDPR compliance and access management |
| 2026-04-24_getsafe_analytics-engineer | mixed | rigour | rigour | rigour | rigour | Design clean, reliable, and well-documented data models as a single source of truth |

### domain_risk (5 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-09_nkg_sustainability-data-analyst | high | moderate | high | moderate | moderate | Experience with EUDR compliance systems (e.g., osapiens) |
| 2026-04-22_distribusion_analytics-engineer | high | moderate | moderate | moderate | moderate | Exposure to major clients like Booking.com and Google Maps |
| 2026-04-22_polyteia_analytics-engineering-lead | high | moderate | moderate | moderate | moderate | Developing and maintaining data products across public sector domains including "Gesundheit, Finanzen oder Personal" |
| 2026-04-22_statista_analytics-engineer-reporting-platform | low | moderate | moderate | moderate | moderate | Increase transparency around data sources, KPI definitions, and report ownership. |
| 2026-04-24_getsafe_analytics-engineer | high | moderate | moderate | moderate | moderate | Own and evolve core business metrics - from definition to tracking and operationalisation |

### collaboration_width (13 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_lego_senior-analytics-engineer | 8 | 5 | 9 | 5 | 5 | Analytics Interface; Commercial Analytics; Analytics Innovation & Automation; Data Office; Shopper & Partner (D2C & B2B)… |
| 2026-04-08_riverty_data-engineering-lead | 9 | 10 | 9 | 8 | 10 | product owners; BI; data analysis; data science; data platform; tech teams; Platform Engineering teams; Business IT team… |
| 2026-04-09_ai-futures_data-team-lead | 2 | 1 | 0 | 1 | 1 | OEM partners |
| 2026-04-09_nkg_sustainability-data-analyst | 2 | 0 | 0 | 0 | 0 | Strong cross-functional collaboration abilities |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | 4 | 1 | 0 | 1 | 1 | franchisees; franchise partners |
| 2026-04-22_about-you_senior-data-engineer | 3 | 0 | 1 | 1 | 1 | None |
| 2026-04-22_distribusion_analytics-engineer | 3 | 0 | 0 | 0 | 0 | Collaborative international team environment |
| 2026-04-22_leasingmarkt_principal-analytics-engineer | 4 | 3 | 3 | 3 | 3 | Partner with data platform, engineering, and analytics teams |
| 2026-04-22_mentimeter_analytics-engineer | 4 | 0 | 3 | 0 | 0 | Partner with business and technical stakeholders |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | 3 | 3 | 2 | 2 | 2 | finance; operations; leadership teams |
| 2026-04-22_polyteia_analytics-engineering-lead | 2 | 1 | 1 | 1 | 1 | customer success teams |
| 2026-04-22_qasa_analytics-engineer | 5 | 6 | 6 | 6 | 6 | Product; Marketing; Finance; Support; Country Management; engineering |
| 2026-04-22_statista_analytics-engineer-reporting-platform | 4 | 0 | 0 | 0 | 0 | No named partner teams identified |

### data_team_maturity (9 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_riverty_data-engineering-lead | mature | mid | mid | mid | mid | Establish and continuously improve the operating model for data engineers within agile data product teams, ensuring clea… |
| 2026-04-08_tem_staff-analytics-engineer | early | mid | mid | mid | mid | This hands-on, individual contributor position focuses on building the analytics foundation. |
| 2026-04-09_ai-futures_data-team-lead | early | mid | mid | mid | mid | Growing and mentoring a data engineering team |
| 2026-04-09_lovable_analytics-engineer-finance | early | mid | mid | mid | mid | Establish foundational tables for monthly/annual recurring revenue, churn analysis, and revenue patterns |
| 2026-04-09_nkg_sustainability-data-analyst | early | mid | mid | mid | mid | Develop and implement a unified sustainability data platform integrating multiple sources |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | early | mid | early | mid | mid | Adapt existing dashboards from other business domains |
| 2026-04-22_distribusion_analytics-engineer | early | mid | mid | mid | mid | Become proficient with the data lake, understanding data sources and processing workflows |
| 2026-04-22_qasa_analytics-engineer | early | mid | mid | mid | mid | Establish unified KPIs and terminology across Product, Marketing, Finance, Support, and Country Management teams |
| 2026-04-24_getsafe_analytics-engineer | early | mid | mid | mid | mid | Build and maintain scalable data pipelines and data marts using modern tooling |

### jd_authorship (8 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_riverty_data-engineering-lead | hiring_manager | mixed | hiring_manager | mixed | mixed | Define and monitor data SLAs and SLOs, ensuring that product teams deliver data that meets business needs in terms of ti… |
| 2026-04-08_tem_staff-analytics-engineer | hiring_manager | hiring_manager | mixed | mixed | mixed | production dbt experience including incremental models at scale (~1B rows daily), custom macros, optimization, and archi… |
| 2026-04-09_lovable_analytics-engineer-finance | mixed | hiring_manager | hiring_manager | mixed | hiring_manager | Develop and sustain dimensional models using SQLMesh for revenue recognition and subscription metrics |
| 2026-04-22_distribusion_analytics-engineer | recruiter | mixed | recruiter | mixed | mixed | Become proficient with the data lake, understanding data sources and processing workflows; BigQuery, Kafka, and Airflow |
| 2026-04-22_mentimeter_analytics-engineer | hiring_manager | mixed | recruiter | hiring_manager | mixed | Design, own, and evolve core data models and the modelling architecture; Help the organization interpret data |
| 2026-04-22_polyteia_analytics-engineering-lead | mixed | recruiter | hiring_manager | mixed | recruiter | Actively coding in Python, dbt, and Airflow while coordinating project advancement |
| 2026-04-22_statista_analytics-engineer-reporting-platform | mixed | hiring_manager | mixed | recruiter | hiring_manager | Be the first point of contact for administration topics around the reporting platform, e.g. architecture questions, perm… |
| 2026-04-24_getsafe_analytics-engineer | hiring_manager | mixed | recruiter | recruiter | recruiter | Build and maintain scalable data pipelines and data marts using modern tooling |

### stakeholder_orientation — no disagreements ✓

### autonomy_level (4 disagreements)

| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |
|----------------|--------|------|------|------|----------|---------------------|
| 2026-04-08_lego_senior-analytics-engineer | strategic | mixed | mixed | mixed | mixed | Drive Unity Catalog governance (schemas, access, metadata tagging) to improve data accessibility; turn business requirem… |
| 2026-04-22_distribusion_analytics-engineer | execution | mixed | execution | mixed | mixed | Direct ownership and measurable company impact from day one |
| 2026-04-22_statista_analytics-engineer-reporting-platform | mixed | execution | execution | execution | execution | Support documentation and governance efforts to improve maintainability and trust in reporting assets. |
| 2026-04-24_getsafe_analytics-engineer | strategic | mixed | strategic | mixed | mixed | Own and evolve core business metrics - from definition to tracking and operationalisation |

### ai_role — no disagreements ✓

### testing_framing — no disagreements ✓

### loss_aversion_framing — no disagreements ✓

## LLM internal inconsistencies (runs disagree with each other)

These are cases where the same prompt produced different answers across 3 runs.
High inconsistency → borderline case or ambiguous JD language.

### velocity_vs_rigour (1 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-22_distribusion_analytics-engineer | velocity | velocity | mixed | mixed |

### domain_risk (5 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_tem_staff-analytics-engineer | high | high | moderate | high |
| 2026-04-09_ai-futures_data-team-lead | high | moderate | high | high |
| 2026-04-09_nkg_sustainability-data-analyst | moderate | high | moderate | high |
| 2026-04-22_about-you_senior-data-engineer | moderate | high | high | high |
| 2026-04-22_qasa_analytics-engineer | high | moderate | moderate | moderate |

### collaboration_width (7 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_lego_senior-analytics-engineer | 5 | 9 | 5 | 8 |
| 2026-04-08_riverty_data-engineering-lead | 10 | 9 | 8 | 9 |
| 2026-04-09_ai-futures_data-team-lead | 1 | 0 | 1 | 2 |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | 1 | 0 | 1 | 4 |
| 2026-04-22_about-you_senior-data-engineer | 0 | 1 | 1 | 3 |
| 2026-04-22_mentimeter_analytics-engineer | 0 | 3 | 0 | 4 |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | 3 | 2 | 2 | 3 |

### data_team_maturity (2 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | mid | early | mid | early |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | early | mid | early | early |

### jd_authorship (13 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_lego_senior-analytics-engineer | hiring_manager | mixed | hiring_manager | hiring_manager |
| 2026-04-08_riverty_data-engineering-lead | mixed | hiring_manager | mixed | hiring_manager |
| 2026-04-08_tem_staff-analytics-engineer | hiring_manager | mixed | mixed | hiring_manager |
| 2026-04-09_ai-futures_data-team-lead | mixed | mixed | hiring_manager | mixed |
| 2026-04-09_lovable_analytics-engineer-finance | hiring_manager | hiring_manager | mixed | mixed |
| 2026-04-09_nkg_sustainability-data-analyst | recruiter | mixed | recruiter | recruiter |
| 2026-04-22_distribusion_analytics-engineer | mixed | recruiter | mixed | recruiter |
| 2026-04-22_mentimeter_analytics-engineer | mixed | recruiter | hiring_manager | hiring_manager |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | hiring_manager | hiring_manager | mixed | hiring_manager |
| 2026-04-22_polyteia_analytics-engineering-lead | recruiter | hiring_manager | mixed | mixed |
| 2026-04-22_qasa_analytics-engineer | recruiter | mixed | recruiter | recruiter |
| 2026-04-22_statista_analytics-engineer-reporting-platform | hiring_manager | mixed | recruiter | mixed |
| 2026-04-24_getsafe_analytics-engineer | mixed | recruiter | recruiter | hiring_manager |

### stakeholder_orientation (5 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_lego_senior-analytics-engineer | commercial | internal_data | commercial | commercial |
| 2026-04-08_tem_staff-analytics-engineer | internal_data | mixed | internal_data | internal_data |
| 2026-04-22_about-you_senior-data-engineer | internal_data | mixed | internal_data | internal_data |
| 2026-04-22_qasa_analytics-engineer | internal_data | internal_data | mixed | internal_data |
| 2026-04-24_getsafe_analytics-engineer | mixed | mixed | internal_data | mixed |

### autonomy_level (9 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-08_tem_staff-analytics-engineer | strategic | mixed | strategic | strategic |
| 2026-04-09_lovable_analytics-engineer-finance | execution | execution | mixed | execution |
| 2026-04-09_nkg_sustainability-data-analyst | execution | mixed | execution | execution |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | execution | mixed | execution | execution |
| 2026-04-22_about-you_senior-data-engineer | strategic | execution | strategic | strategic |
| 2026-04-22_distribusion_analytics-engineer | mixed | execution | mixed | execution |
| 2026-04-22_mentimeter_analytics-engineer | mixed | strategic | strategic | strategic |
| 2026-04-22_qasa_analytics-engineer | strategic | strategic | mixed | strategic |
| 2026-04-24_getsafe_analytics-engineer | mixed | strategic | mixed | strategic |

### ai_role (1 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-09_ai-futures_data-team-lead | ai_enabler | none | ai_enabler |  |

### testing_framing (1 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-09_ai-futures_data-team-lead | tool_listed | absent | absent |  |

### loss_aversion_framing (7 inconsistent JDs)

| application_id | run1 | run2 | run3 | manual |
|----------------|------|------|------|--------|
| 2026-04-09_ai-futures_data-team-lead | moderate | none | moderate |  |
| 2026-04-09_lovable_analytics-engineer-finance | moderate | high | moderate |  |
| 2026-04-09_nkg_sustainability-data-analyst | none | moderate | none |  |
| 2026-04-10_decathlon_senior-data-analyst-analytics-engineer | none | moderate | none |  |
| 2026-04-22_mentimeter_analytics-engineer | none | none | moderate |  |
| 2026-04-22_pergolux_senior-analytics-engineer-finance-operations | high | moderate | moderate |  |
| 2026-04-24_getsafe_analytics-engineer | moderate | none | none |  |
