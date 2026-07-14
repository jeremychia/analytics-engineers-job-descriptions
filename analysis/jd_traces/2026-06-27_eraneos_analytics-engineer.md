# Trace: 2026-06-27_eraneos_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer (all genders) — Eraneos

**URL:** https://eraneos.jobs.personio.de/job/2567559?language=de&src=LinkedIn
**Location:** Hamburg, München, Düsseldorf, remote
**Date Posted:** 2026-06-27

---

Eraneos ist ein technisches, umsetzungsorientiertes Spin-Off einer global agierenden Managementberatung. Wir begleiten unsere Kunden – vorwiegend DAX- und Fortune-500-Unternehmen – auf ihrem Weg der analytischen und KI-gestützten Transformation. Im Mittelpunkt steht dabei die Umsetzung: von der Strategie über die Architektur bis zur Implementierung.

**Responsibilities:**

- Konzeption und Implementierung von Datenmodellen in modernen Data Warehouses und Lakehouses
- Aufbau und Pflege von Datentransformations-Pipelines mit dbt
- Entwicklung dimensionaler Datenmodelle (Star Schema, Snowflake Schema, Data Vault)
- Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden
- Implementierung von Datenqualitätsprüfungen und -tests
- Optimierung der Datenbankperformance durch den Einsatz moderner Tabellenformate (z. B. Iceberg, Delta)
- Enge Zusammenarbeit mit Analytics- und Data-Science-Teams
- Übernahme von Projektverantwortung und Steuerung von Teilprojekten
- Kommunikation und Abstimmung mit Stakeholdern auf verschiedenen Ebenen

**Requirements:**

- Fundierte Erfahrung in der Datenmodellierung in Data-Platform-Umgebungen
- Praktische dbt-Erfahrung (mindestens 6 Monate)
- Kenntnisse in dimensionalen Datenmodellierungsansätzen (Star Schema, Snowflake Schema, Data Vault)
- Solide SQL-Kenntnisse und idealerweise Python-Programmierkenntnisse
- Erfahrung mit Data Lakehouses wie Snowflake oder Databricks
- Idealerweise Erfahrung mit Data-Quality-Tools (z. B. Great Expectations, Soda)
- Deutschkenntnisse auf mindestens B1-Niveau und sehr gute Englischkenntnisse
- Reisebereitschaft (gelegentlich)
- Teamfähigkeit und strukturierte Arbeitsweise

**Benefits:**

- Flexible Arbeitszeiten und Home-Office-Möglichkeiten
- Flache Hierarchien und kurze Entscheidungswege
- Trainings- und Weiterbildungsmöglichkeiten
- JobRad (Company Bike Program)
- EGYM Wellpass (Fitness-Mitgliedschaft)
- Zentrale Bürolagen mit guter Verkehrsanbindung
- Täglich frisches Obst, Kaffee, Snacks und Getränke

Contact: Ekaterina Korolkova – career.de@eraneos.com – +49 40 809 081-172

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 2 | 2 | 2 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | hiring_manager | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | mixed | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize reliability, performance, quality checks, and testing with no mention of speed, iteration, or fast-paced delivery.

**Run 2:** `rigour` ✓
> Quote: "Implementierung von Datenqualitätsprüfungen und -tests"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, testing, and reliability as core expectations with no velocity or rapid delivery language.

**Run 3:** `rigour` ✓
> Quote: "Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize reliability, quality checks, and performance as core expectations with no velocity language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden"
> Verified: ✓ found in JD
> Reasoning: While serving Fortune 500 and DAX companies implies high-risk clients, the JD uses generic analytics language without explicit financial reporting, compliance, or regulatory framing.

**Run 2:** `moderate` ✓
> Quote: "Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden"
> Verified: ✓ found in JD
> Reasoning: While working with Fortune-500 companies, the JD uses generic data quality language without explicit financial reporting, compliance, or regulatory framing.

**Run 3:** `moderate` ✓
> Quote: "Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden"
> Verified: ✓ found in JD
> Reasoning: The role supports analytics decisions at Fortune 500 companies but lacks explicit financial reporting, compliance, or regulatory language that would signal high risk.

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "Analytics- und Data-Science-Teams"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams are explicitly identified in the responsibilities: Analytics team and Data Science team.

**Run 2:** `2` ✓
> Quote: "Analytics- und Data-Science-Teams"
> Verified: ✓ found in JD
> Reasoning: Two named partner teams are explicitly mentioned: Analytics teams and Data Science teams.

**Run 3:** `2` ✓
> Quote: "Analytics- und Data-Science-Teams"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams are explicitly listed as collaboration partners.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Aufbau und Pflege von Datentransformations-Pipelines mit dbt"
> Verified: ✓ found in JD
> Reasoning: Named tools appear in responsibilities, multiple data roles already exist, and existing infrastructure is being maintained rather than created from scratch.

**Run 2:** `mid` ✓
> Quote: "Enge Zusammenarbeit mit Analytics- und Data-Science-Teams"
> Verified: ✓ found in JD
> Reasoning: Multiple established data roles and collaboration patterns indicate an existing, growing data function rather than early-stage or fully mature.

**Run 3:** `mid` ✓
> Quote: "Aufbau und Pflege von Datentransformations-Pipelines mit dbt"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (dbt, Iceberg, Delta) and the existence of multiple established teams signal a functioning, growing data function.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Entwicklung dimensionaler Datenmodelle (Star Schema, Snowflake Schema, Data Vault)"
> Verified: ✓ found in JD
> Reasoning: The responsibilities specify exact dimensional modelling approaches by name, precise tools with context (dbt, Iceberg, Delta), and technical depth that only someone doing this work would include.

**Run 2:** `hiring_manager` ✗
> Quote: "Entwicklung dimensionaler Datenmodelle (Star Schema, Snowflake Schema, Data Vault)"
> Verified: ✓ found in JD
> Reasoning: Specific technical methodology names and tool contexts (Star Schema, Snowflake Schema, Data Vault) demonstrate hands-on subject matter expertise.

**Run 3:** `mixed` ✓
> Quote: "Optimierung der Datenbankperformance durch den Einsatz moderner Tabellenformate (z. B. Iceberg, Delta)"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about table formats reflects hands-on knowledge, but generic phrases like 'Übernahme von Projektverantwortung' indicate recruiter contributions.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Enge Zusammenarbeit mit Analytics- und Data-Science-Teams"
> Verified: ✓ found in JD
> Reasoning: The primary audience is the Analytics and Data Science teams; the role's core mission is building data infrastructure for internal analytics consumers.

**Run 2:** `internal_data` ✓
> Quote: "Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden"
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building reliable data infrastructure for internal analytics and data science teams, not serving commercial, product, or finance stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Enge Zusammenarbeit mit Analytics- und Data-Science-Teams"
> Verified: ✓ found in JD
> Reasoning: The role's primary audience is the internal data function itself; focus is building reliable infrastructure for analysts and data scientists.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Aufbau und Pflege von Datentransformations-Pipelines mit dbt"
> Verified: ✓ found in JD
> Reasoning: While design elements appear, dominant verbs emphasize building and maintaining infrastructure within defined modelling frameworks, with execution as the primary orientation.

**Run 2:** `execution` ✓
> Quote: "Übernahme von Projektverantwortung und Steuerung von Teilprojekten"
> Verified: ✓ found in JD
> Reasoning: While the role includes project ownership within defined scopes, the majority of responsibilities focus on implementation and execution rather than setting strategic direction.

**Run 3:** `mixed` ✗
> Quote: "Konzeption und Implementierung von Datenmodellen"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic elements (conceiving approaches, steering projects) with execution (implementing and maintaining).

⚠ **LLM inconsistency**: runs gave ['execution', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions the company delivers AI-supported transformation but makes no expectations of the candidate to use AI tools, build AI infrastructure, or enable AI systems.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Although the company works on AI-driven transformation, the candidate is not expected to demonstrate AI skills or build AI infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The company mentions AI-supported transformation, but no AI skill is required of the candidate in responsibilities or requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Implementierung von Datenqualitätsprüfungen und -tests"
> Verified: ✓ found in JD
> Reasoning: Data quality testing is framed as an active responsibility the candidate will implement and own using the action verb Implementierung.

**Run 2:** `responsibility` ✗
> Quote: "Implementierung von Datenqualitätsprüfungen und -tests"
> Verified: ✓ found in JD
> Reasoning: Data quality testing is framed as an ownership responsibility using the action verb 'Implementierung' (implementation), not merely listed as a tool requirement.

**Run 3:** `responsibility` ✗
> Quote: "Implementierung von Datenqualitätsprüfungen und -tests"
> Verified: ✓ found in JD
> Reasoning: Data quality testing is framed as a responsibility the candidate will implement and own, not merely a tool listed.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden"
> Verified: ✓ found in JD
> Reasoning: Reliability and performance are emphasized as operational concerns, but without regulatory, compliance, or stakeholder-trust language that would indicate high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are concerns but the framing emphasizes delivery capability rather than regulatory or stakeholder trust risk.

**Run 3:** `moderate` ✗
> Quote: "Sicherstellung, dass analytische Daten zuverlässig und performant bereitgestellt werden"
> Verified: ✓ found in JD
> Reasoning: Reliability is a core operational concern but framed without regulatory, compliance, or trust-preservation language.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
