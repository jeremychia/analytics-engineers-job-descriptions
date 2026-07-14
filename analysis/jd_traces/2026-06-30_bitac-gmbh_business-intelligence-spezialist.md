# Trace: 2026-06-30_bitac-gmbh_business-intelligence-spezialist

## JD text (fed to classifier, Layer B stripped)

```
# Business Intelligence Spezialist (gn) — Bitac GmbH

**URL:** https://join.com/companies/bitac-consulting/16347826-business-intelligence-spezialist-gn?pid=e65242534431eadcb0c9
**Location:** Remote (Deutschland)
**Date Posted:** 2026-06-30

---

Business Intelligence Spezialist (gn)

Company: Bitac GmbH
Location: Remote (Deutschland)
Employment Type: Angestellte/r
Categories: Datenbankentwicklung, Data Warehouse

Company Description

"We Bring Structure To Your Data" – mit dem Leitsatz begann die Reise in die Data-Driven World.

Die Bitac wurde im Jahre 2014 gegründet und hat sich auf Business Intelligence Lösungen im Microsoft Umfeld spezialisiert.

Mit unserem Team unterstützen wir namhafte Unternehmen in unterschiedlichsten Branchen. Uns liegt es dementsprechend am Herzen, dass unsere Kunden stets zufrieden sind mit der entwickelten Lösung.

Die zwischenmenschliche Komponente wird bei uns GROßGESCHRIEBEN, sodass unsere Kollegen langfristig und vor allem gerne bei der Bitac tätig sind.

Aufgaben

Du bist als Business Intelligence Spezialist für die Aufbereitung und Analyse von Daten zuständig. Du erarbeitest zusammen mit den Fachbereichen und der IT-Datenextraktion Szenarien aus und setzt diese um. Des Weiteren bist du dafür verantwortlich, die verschiedenen Datenquellen anzubinden, aufzubereiten und für die Visualisierung vorzubereiten oder auch zu visualisieren.

Im besten Falle bringst du sehr gute Kenntnisse im Microsoft BI-Stack mit und hast auch schon erste Erfahrung in Cloud Technologien machen können.

Qualifikation

Abgeschlossenes Studium der Informatik, Wirtschaftsinformatik, alternativ eine abgeschlossene Ausbildung mit Erfahrung und entsprechenden Zertifikaten im Bereich ETL / Business Intelligence.

Skills:
▪ MS SQL-Server (SSIS/SSAS/SSRS)
▪ ETL
▪ Modern Data Warehouse
▪ MS Fabric
▪ Power BI (DAX, Power Query)

Nice to have:
▪ Power Apps
▪ Power Automate
▪ Snowflake
▪ Data Vault
▪ Python, R

Benefits
▪ Flexible Arbeitszeiten
▪ Flexible Arbeitsorte
▪ Home-Office Möglichkeit
▪ Firmen Notebook
▪ Firmenhandy mit Flatrates
▪ Jobrad
▪ Flache Hierarchien
▪ Sehr gutes Arbeitsklima

Wenn du dich angesprochen fühlst, sende uns doch direkt deine Unterlagen zu.

Wir freuen uns auf dich!

Alle personenbezogenen Formulierungen in dieser Stellenanzeige sind geschlechtsneutral zu betrachten

Job ID: 16347826
Posted: vor 4 Minuten (27.06.2024)
Contact: Cem Yücel, Manager

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 1 | 1 | 1 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | recruiter | recruiter | recruiter | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Des Weiteren bist du dafür verantwortlich, die verschiedenen Datenquellen anzubinden, aufzubereiten und für die Visualisierung vorzubereiten oder auch zu visualisieren"
> Verified: ✓ found in JD
> Reasoning: The emphasis on careful data source connection, preparation, and multi-step visualization over speed indicators suggests a quality-focused approach rather than rapid iteration.

**Run 2:** `rigour` ✗
> Quote: "Du bist als Business Intelligence Spezialist für die Aufbereitung und Analyse von Daten zuständig"
> Verified: ✓ found in JD
> Reasoning: The role focuses on data preparation and analysis, which are inherently rigour-oriented activities, without any velocity signals.

**Run 3:** `rigour` ✗
> Quote: "für die Aufbereitung und Analyse von Daten zuständig"
> Verified: ✓ found in JD
> Reasoning: Data preparation and ETL work inherently emphasize precision and correctness, despite no explicit quality language in the responsibilities.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Du erarbeitest zusammen mit den Fachbereichen und der IT-Datenextraktion Szenarien aus und setzt diese um"
> Verified: ✓ found in JD
> Reasoning: The role supports business scenario analysis and decision-making without explicit financial reporting, compliance, or regulatory language, indicating moderate domain risk.

**Run 2:** `moderate` ✓
> Quote: "Du erarbeitest zusammen mit den Fachbereichen und der IT-Datenextraktion Szenarien aus und setzt diese um"
> Verified: ✓ found in JD
> Reasoning: The JD describes business intelligence work for unspecified sectors and clients without explicit financial, compliance, or regulatory framing, typical of moderate-risk analytics.

**Run 3:** `moderate` ✓
> Quote: "namhafte Unternehmen in unterschiedlichsten Branchen"
> Verified: ✓ found in JD
> Reasoning: Standard business intelligence work for enterprise clients without specified sectors or explicit compliance, regulatory, or financial reporting signals.

### collaboration_width
**Manual:** `2`

**Run 1:** `1` ✗
> Quote: "IT-Datenextraktion"
> Verified: ✓ found in JD
> Reasoning: Only one specifically named partner team (IT Data Extraction) is explicitly identified; business units are referenced generically as 'Fachbereichen' without specific naming.

**Run 2:** `1` ✗
> Quote: "IT-Datenextraktion"
> Verified: ✓ found in JD
> Reasoning: Only the IT data extraction team is explicitly named as a collaboration partner in the responsibilities section.

**Run 3:** `1` ✗
> Quote: "IT-Datenextraktion"
> Verified: ✓ found in JD
> Reasoning: Only the IT data extraction team is named as a distinct partner; business departments are referenced generically.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "MS SQL-Server (SSIS/SSAS/SSRS); ETL; Modern Data Warehouse; MS Fabric; Power BI (DAX, Power Query)"
> Verified: ✓ found in JD
> Reasoning: The presence of multiple named Microsoft BI tools suggests established infrastructure beyond early-stage, and the role is positioned as a standard specialist within an existing practice.

**Run 2:** `mid` ✓
> Quote: "Die Bitac wurde im Jahre 2014 gegründet und hat sich auf Business Intelligence Lösungen im Microsoft Umfeld spezialisiert"
> Verified: ✓ found in JD
> Reasoning: The established company with 12 years of history and developed client base suggests a mid-stage data operation rather than early-stage, without signals of large-scale specialization.

**Run 3:** `mid` ✓
> Quote: "Mit unserem Team unterstützen wir namhafte Unternehmen in unterschiedlichsten Branchen"
> Verified: ✓ found in JD
> Reasoning: Established company (founded 2014) serving multiple enterprise clients indicates a developed BI function that is scaling but not yet highly specialized.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Du erarbeitest zusammen mit den Fachbereichen und der IT-Datenextraktion Szenarien aus und setzt diese um"
> Verified: ✓ found in JD
> Reasoning: Generic boilerplate language about working with business units and developing scenarios lacks the technical specificity and application context that would indicate hiring manager authorship.

**Run 2:** `recruiter` ✓
> Quote: "Du erarbeitest zusammen mit den Fachbereichen und der IT-Datenextraktion Szenarien aus und setzt diese um"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic action verbs and lack technical specificity, scale numbers, or tool-specific context that would indicate hiring manager authorship.

**Run 3:** `recruiter` ✓
> Quote: "Du bist als Business Intelligence Spezialist für die Aufbereitung und Analyse von Daten zuständig."
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs and boilerplate descriptions without specific context about scale, methodology, or business impact.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Du erarbeitest zusammen mit den Fachbereichen... Szenarien aus und setzt diese um"
> Verified: ⚠ NOT found verbatim
> Reasoning: The focus on data preparation, integration, and visualization infrastructure as core responsibilities suggests the role is oriented toward providing data infrastructure and analytics capability to organizational stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "verschiedenen Datenquellen anzubinden, aufzubereiten und für die Visualisierung vorzubereiten"
> Verified: ✓ found in JD
> Reasoning: The role focuses on data infrastructure work (connecting sources, preparing data for consumption) rather than serving a specific external business stakeholder group.

**Run 3:** `internal_data` ✓
> Quote: "zusammen mit den Fachbereichen und der IT-Datenextraktion Szenarien aus und setzt diese um"
> Verified: ✓ found in JD
> Reasoning: The role primarily prepares data and develops analytical scenarios to serve internal business departments' data needs.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Du bist als Business Intelligence Spezialist für die Aufbereitung und Analyse von Daten zuständig"
> Verified: ✓ found in JD
> Reasoning: The role is framed through specific execution responsibilities for data tasks rather than strategic ownership, with no indication of defining analytics strategy or shaping the data function.

**Run 2:** `execution` ✓
> Quote: "Du erarbeitest zusammen mit den Fachbereichen und der IT-Datenextraktion Szenarien aus und setzt diese um"
> Verified: ✓ found in JD
> Reasoning: The role is framed as executing scenarios in collaboration with others, using 'work together' language rather than independent direction-setting verbs.

**Run 3:** `execution` ✓
> Quote: "setzt diese um"
> Verified: ✓ found in JD
> Reasoning: The role implements scenarios and develops within frameworks set by business departments rather than defining strategy or direction.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, techniques, or infrastructure, focusing instead entirely on traditional Microsoft BI stack tools and practices.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI skills, tools, or capabilities expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted development, or AI data infrastructure anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "MS SQL-Server (SSIS/SSAS/SSRS); ETL; Modern Data Warehouse; MS Fabric; Power BI (DAX, Power Query)"
> Verified: ✓ found in JD
> Reasoning: The skills list emphasizes BI and ETL tools without mentioning testing frameworks, data quality practices, data contracts, or observability.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of testing, data quality frameworks, observability, or related practices.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: No mention of testing, data quality, data contracts, observability, reliability frameworks, or quality assurance anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes technical responsibilities and general client satisfaction but contains no explicit risk, compliance, reliability, or trust language framing the role around preventing bad outcomes.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely around work activities and capabilities with no emphasis on risk, reliability, compliance, or data trust.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around delivery capability and customer satisfaction with data solutions, not around preventing bad outcomes or managing compliance risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
