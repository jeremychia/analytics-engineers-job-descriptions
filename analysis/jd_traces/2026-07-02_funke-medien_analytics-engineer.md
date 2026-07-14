# Trace: 2026-07-02_funke-medien_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer (m/w/d) — FUNKE Mediengruppe

**URL:** https://jobs.funkemedien.de/job/Berlin-Analytics-Engineer-%28mwd%29/1359070355/
**Location:** Berlin/Hamburg, Germany
**Date Posted:** 2026-07-02

---

# Analytics Engineer (m/w/d)

Company: FUNKE Mediengruppe
Standort: Berlin, DE / Hamburg, DE

## Uber FUNKE
FUNKE gehort zu den fuhrenden Arbeitgebern der Medienbranche. Von Online-Portalen uber Zeitungen und Zeitschriften bis hin zu Radio und Podcast - die Vielfalt der Titel, Marken und Genres ist einzigartig in der deutschen Medienlandschaft. Rund 1.700 Journalist*innen und 2.800 Medienmacher*innen gestalten jeden Tag in ganz Deutschland die Zukunft der Medien mit.

Als Analytics Engineer (m/w/d) tragst Du massgeblich zur Gestaltung datengetriebener Projekte bei und spielst eine Schlusselrolle im Team. Zur Verstarkung des Teams in Berlin oder Hamburg wird ein Analytics Engineer gesucht.

## Deine Aufgaben
- Als Mitglied des Data Subscription Teams bist Du verantwortlich fur alles rund um das Thema Analytics Engineering: Transformation von Rohdaten zur Nutzung im Reporting und der Marketing Automation fur das Zeitungsgeschaft digital und traditionell
- Du arbeitest eng mit den Data Analysts/Scientists/Engineers Deines Teams zusammen und bringst Deine Expertise und kreativen Losungen ein, um datenbasierte Optimierungsstrategien zu entwickeln
- Nach Deiner Einarbeitung wirst Du verantwortlich fur zwei Topics und tragst damit entscheidend zum Geschaftserfolg bei
- Du entwickelst und implementierst eigenstandig Data Pipelines in der Google Cloud Platform und nutzt dbt, SQL, Github und andere Tools
- Als Expert*in im Datawarehouse kummerst Du Dich auch um die Datenpflege, die Struktur der Datenmodelle sowie um die Kostenoptimierungen

## Dein Profil
- Leidenschaft fur Daten und Interesse am Vertriebsgeschaft regionaler Tageszeitungen
- Erfahrung als Analytics Engineer/Data Analyst sowie fortgeschrittene Kenntnisse in SQL, idealerweise Kenntnisse in Python oder weiteren Programmiersprachen
- Begeisterung fur technische Innovationen und Fahigkeit, sich zugig und effektiv in neue technologische Systeme und Tools einzuarbeiten
- Verantwortungsbewusstsein und Ownership
- Fliessendes Deutsch, Offenheit, Kommunikationsstarke und Teamfahigkeit
- Sorgfaltige Arbeitsweise und hohe Eigenmotivation

## Deine Benefits
Innovation trifft Tradition: Mitgestaltung der digitalen Transformation der Mediengruppe. Entwicklung durch FUNKE Akademie (Coachings, Workshops, Online-Trainings). Hybrides Arbeitsmodell fur Work-Life-Balance. Dynamisches Team, offene Feedbackkultur, kurze Kommunikationswege. Corporate Benefits Portal mit Rabatten und Abos. Kooperationen mit Fitnessstudios und individuelle Beratung fur mentale und korperliche Gesundheit.

Bewerbung an Steffen Flach.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 0 | 0 | 0 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | mixed | hiring_manager | 33% | ✗ |
| stakeholder_orientation | commercial | commercial | internal_data | internal_data | 33% | ✗ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Sorgfältige Arbeitsweise und hohe Eigenmotivation"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD emphasizes careful work and data maintenance as core qualities, with no mention of speed, iteration, or rapid delivery.

**Run 2:** `rigour` ✗
> Quote: "Sorgfaltige Arbeitsweise und hohe Eigenmotivation"
> Verified: ✓ found in JD
> Reasoning: The profile explicitly requires 'meticulous working style' as a core attribute with no velocity or speed-oriented language, signaling a rigour-focused orientation to the role.

**Run 3:** `rigour` ✗
> Quote: "Sorgfaltige Arbeitsweise und hohe Eigenmotivation"
> Verified: ✓ found in JD
> Reasoning: The profile emphasizes careful working style as a core requirement, indicating a rigour-oriented approach rather than velocity-focused delivery.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Transformation von Rohdaten zur Nutzung im Reporting und der Marketing Automation für das Zeitungsgeschäft"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role supports business operations through reporting and marketing automation without explicit financial, compliance, or regulatory risk signals.

**Run 2:** `moderate` ✓
> Quote: "Reporting und der Marketing Automation fur das Zeitungsgeschaft digital und traditionell"
> Verified: ✓ found in JD
> Reasoning: The data supports business reporting and marketing operations but lacks explicit financial reporting, compliance, or regulatory language that would indicate high-risk sector classification.

**Run 3:** `moderate` ✓
> Quote: "Transformation von Rohdaten zur Nutzung im Reporting und der Marketing Automation fur das Zeitungsgeschaft digital und traditionell"
> Verified: ✓ found in JD
> Reasoning: The role supports operational reporting and marketing automation for newspaper subscriptions, affecting business decisions without explicit regulatory or financial reporting requirements.

### collaboration_width
**Manual:** `1`

**Run 1:** `0` ✗
> Quote: "Du arbeitest eng mit den Data Analysts/Scientists/Engineers Deines Teams zusammen"
> Verified: ✓ found in JD
> Reasoning: The only named collaborators are members of the role's own team, which does not count per decision rules; no external collaboration partners are explicitly named.

**Run 2:** `0` ✗
> Quote: "Du arbeitest eng mit den Data Analysts/Scientists/Engineers Deines Teams zusammen"
> Verified: ✓ found in JD
> Reasoning: While internal collaboration with data team members is described, no externally named partner teams (Finance, Product, Marketing, Sales, etc.) are explicitly identified as collaboration stakeholders.

**Run 3:** `0` ✗
> Quote: "Du arbeitest eng mit den Data Analysts/Scientists/Engineers Deines Teams zusammen"
> Verified: ✓ found in JD
> Reasoning: The JD mentions working with data team members but does not explicitly name external partner functions or teams like Product, Finance, Marketing, or Sales as collaboration partners.

⚠ **Disagreement**: manual=`1` vs LLM majority=`0`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Du entwickelst und implementierst eigenständig Data Pipelines in der Google Cloud Platform und nutzt dbt, SQL, Github und andere Tools"
> Verified: ⚠ NOT found verbatim
> Reasoning: Specific named tools in responsibilities (GCP, dbt, SQL, Github) and an established warehouse indicate an existing, operating infrastructure rather than greenfield.

**Run 2:** `mid` ✓
> Quote: "Du entwickelst und implementierst eigenstandig Data Pipelines in der Google Cloud Platform und nutzt dbt, SQL, Github und andere Tools"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (dbt, GCP, SQL) combined with reference to established infrastructure maintenance and multiple data roles indicate a team in mid-stage growth.

**Run 3:** `mid` ✓
> Quote: "Du entwickelst und implementierst eigenstandig Data Pipelines in der Google Cloud Platform und nutzt dbt, SQL, Github und andere Tools"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities (GCP, dbt, SQL, Github) and reference to multiple specialized data roles indicate an established, growing data function rather than early-stage or fully mature infrastructure.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Du entwickelst und implementierst eigenständig Data Pipelines in der Google Cloud Platform und nutzt dbt, SQL, Github und andere Tools"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD combines specific technical context (GCP, dbt, SQL) with generic responsibility language like developing optimization strategies.

**Run 2:** `mixed` ✗
> Quote: "Du arbeitest eng mit den Data Analysts/Scientists/Engineers Deines Teams zusammen und bringst Deine Expertise und kreativen Losungen ein, um datenbasierte Optimierungsstrategien zu entwickeln"
> Verified: ✓ found in JD
> Reasoning: The JD combines generic boilerplate action verbs ('collaborate', 'bring expertise', 'develop strategies') with specific technical details (named tools, data warehouse expertise, pipeline implementation), suggesting both recruiter and hiring manager input.

**Run 3:** `hiring_manager` ✓
> Quote: "Du entwickelst und implementierst eigenstandig Data Pipelines in der Google Cloud Platform und nutzt dbt, SQL, Github und andere Tools"
> Verified: ✓ found in JD
> Reasoning: The specific combination of named platform (GCP), specific tools (dbt, SQL, Github), and technical depth about data warehouse concerns (maintenance, structure, cost optimization) indicates hands-on experience in this role.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'hiring_manager']

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `commercial` ✓
> Quote: "Transformation von Rohdaten zur Nutzung im Reporting und der Marketing Automation für das Zeitungsgeschäft"
> Verified: ⚠ NOT found verbatim
> Reasoning: Marketing Automation is explicitly named as a primary use case, indicating the role primarily serves commercial and marketing functions.

**Run 2:** `internal_data` ✗
> Quote: "Du arbeitest eng mit den Data Analysts/Scientists/Engineers Deines Teams zusammen"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is building and maintaining data infrastructure (pipelines, warehouse, data models) that serves the internal data platform and its direct consumers (analysts, scientists, engineers).

**Run 3:** `internal_data` ✗
> Quote: "Datenpflege, die Struktur der Datenmodelle sowie um die Kostenoptimierungen"
> Verified: ✓ found in JD
> Reasoning: The role's core responsibilities center on building and maintaining data infrastructure (pipelines, models, cost optimization) that data consumers depend on, rather than directly serving external business stakeholders.

⚠ **Disagreement**: manual=`commercial` vs LLM majority=`internal_data`

⚠ **LLM inconsistency**: runs gave ['commercial', 'internal_data', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Nach Deiner Einarbeitung wirst Du verantwortlich für zwei Topics"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role is responsible for delivering against assigned topics rather than setting analytics direction or strategy.

**Run 2:** `execution` ✗
> Quote: "Nach Deiner Einarbeitung wirst Du verantwortlich fur zwei Topics"
> Verified: ✓ found in JD
> Reasoning: The role has clearly scoped responsibilities (two defined topics, pipeline development, warehouse stewardship) and executes with ownership within pre-defined boundaries rather than setting strategic direction.

**Run 3:** `execution` ✗
> Quote: "Nach Deiner Einarbeitung wirst Du verantwortlich fur zwei Topics und tragst damit entscheidend zum Geschaftserfolg bei"
> Verified: ✓ found in JD
> Reasoning: While the role involves taking ownership of two specific topic areas with significant autonomy in delivery, the framing remains one of team membership and execution against defined business goals rather than setting broader direction for analytics.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, or AI infrastructure expectations anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted development, or building AI data infrastructure; the generic reference to 'technical innovation enthusiasm' does not constitute an AI capability requirement.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD does not mention AI tools, AI coding assistants, or expectations around building AI/ML infrastructure for candidates.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality framework mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD emphasizes data maintenance and careful work but contains no mention of testing practices, data quality frameworks, or observability tools.

**Run 2:** `absent` ✗
> Quote: "Du entwickelst und implementierst eigenstandig Data Pipelines in der Google Cloud Platform"
> Verified: ✓ found in JD
> Reasoning: Pipeline development is mentioned but testing practices, data quality frameworks, data contracts, or observability are not addressed anywhere in the JD.

**Run 3:** `absent` ✗
> Quote: "Datenpflege, die Struktur der Datenmodelle sowie um die Kostenoptimierungen"
> Verified: ✓ found in JD
> Reasoning: While data maintenance is mentioned, there are no explicit signals around testing frameworks, data quality ownership, or observability practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around building and delivering analytics infrastructure rather than preventing bad outcomes or managing regulatory/compliance risk.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around delivery capability and infrastructure work with emphasis on responsibility and careful craftsmanship, but contains no risk register, reliability concerns, or compliance language.

**Run 3:** `moderate` ✗
> Quote: "Sorgfaltige Arbeitsweise und hohe Eigenmotivation"
> Verified: ✓ found in JD
> Reasoning: The emphasis on careful working style and data maintenance suggests concern with operational reliability and quality, but without explicit risk language around compliance or stakeholder trust.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['none', 'none', 'moderate']
