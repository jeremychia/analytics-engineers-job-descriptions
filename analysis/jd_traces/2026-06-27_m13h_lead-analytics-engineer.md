# Trace: 2026-06-27_m13h_lead-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Lead Analytics Engineer (H/F) — M13h

**URL:** https://www.welcometothejungle.com/fr/companies/m13h/jobs/lead-analytics-engineer-h-f_lyon
**Location:** Lyon, France
**Date Posted:** 2026-06-27
**Salary:** 60,000–70,000 EUR

---

En tant qu'Analytics Engineer, basé dans notre bureau de Lyon, tu interviens sur des problématiques à la croisée de la data science, de la data analyse et de la data ingénierie et ton rôle est de mettre en place pour nos clients ou nos besoins internes des datasets pertinents : bien modélisés, documentés, fiables en termes de qualité et de disponibilité, répondant aux besoins des usages ultérieurs.

En tant que lead, tu portes une expertise et la fait rayonner au sein du cabinet et à l'extérieur et participe à la formalisation d'offres sur la base de ton expertise.

Pour cela, tu interviens à différents stades des projets :

Analyse des besoins d'accès aux données, en collaboration avec les utilisateurs business, data analysts et dataviz engineers

Mise en place des flux et modèles de données, en se basant sur des stacks data modernes (SQL, DBT, outils ELTs, GCP/Azure/AWS/Snowflake, …)

Exposition des données dans les outils BI & visualisation

Maintenance des pipelines et mise en place d'alertes & tests de qualité de données

Quelques exemples de missions à titre d'illustration :

Construction d'une Customer Data Platform pour un grand retailer (8 marques / 30+ pays)

Migration d'une large infrastructure de dashboards basés sur un stack Supermetrics vers un stack Adverity+BigQuery

Mise en place d'outils de pilotage de bout en bout pour plusieurs startups en forte croissance

Packaging d'outils internes sur l'attribution custom

Polyvalent·e, tu as à cœur de comprendre les besoins de tes interlocuteurs pour les traduire en structures de données exploitables et de bonne qualité. Tu sais travailler en autonomie sur tes missions et tu as le souhait d'accompagner et faire progresser des consultant·e·s plus jeunes sur ton expertise et sur les stacks data modernes.

**Profil recherché**

Issu·e d'une grande école de commerce, d'ingénieurs ou équivalent, tu disposes d'au moins 5 années d'expérience professionnelle.

Tu maîtrises les technologies/outils/environnements suivants:

- GCP / Microsoft Azure / AWS
- Snowflake
- Python & SQL
- Airflow / DBT
- Git

Tu as de bonnes capacités d'analyse et sais gérer un projet analytique de bout en bout en faisant preuve d'autonomie et de rigueur. Tu as déjà été amené à travailler/ tu souhaites travailler sur des problématiques de data marketing et tu as déjà eu des expériences/ tu souhaites travailler dans le monde du conseil.

Langues parlées: Français/Anglais

**Informations supplémentaires**

Processus de recrutement en 3 étapes incluant une étude de cas

Le groupe Cosmo5 inscrit la diversité et la mixité durant tout son processus de recrutement afin de garantir un environnement de travail accessible à toutes et tous.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 2 | 3 | 2 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | mixed | hiring_manager | hiring_manager | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | commercial | internal_data | 33% | ✓ |
| autonomy_level | mixed | mixed | execution | mixed | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "bien modélisés, documentés, fiables en termes de qualité et de disponibilité"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes data quality, reliability, documentation, and testing as core expectations with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "bien modélisés, documentés, fiables en termes de qualité et de disponibilité"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, reliability, documentation, and testing with no velocity language—this is a rigour-focused role.

**Run 3:** `rigour` ✓
> Quote: "bien modélisés, documentés, fiables en termes de qualité et de disponibilité"
> Verified: ✓ found in JD
> Reasoning: Multiple explicit signals emphasizing quality, documentation, reliability, and testing with no velocity language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "datasets pertinents : bien modélisés, documentés, fiables en termes de qualité et de disponibilité, répondant aux besoins des usages ultérieurs"
> Verified: ✓ found in JD
> Reasoning: The role focuses on business intelligence and operational analytics for retail and SaaS clients without explicit financial reporting or regulatory compliance signals.

**Run 2:** `moderate` ✓
> Quote: "Construction d'une Customer Data Platform pour un grand retailer (8 marques / 30+ pays)"
> Verified: ✓ found in JD
> Reasoning: The role involves business analytics projects without explicit financial reporting, compliance, or regulatory language—data errors affect business decisions but not regulatory/financial risk.

**Run 3:** `moderate` ✓
> Quote: "datasets pertinents : bien modélisés, documentés, fiables en termes de qualité et de disponibilité, répondant aux besoins des usages ultérieurs"
> Verified: ✓ found in JD
> Reasoning: The role involves business intelligence and operational dashboards that affect business decisions but lacks explicit financial reporting, regulatory, or compliance language indicating high risk.

### collaboration_width
**Manual:** `3`

**Run 1:** `2` ✗
> Quote: "data analysts et dataviz engineers"
> Verified: ✓ found in JD
> Reasoning: Two distinct named role cohorts (data analysts and dataviz engineers) are identified as collaboration partners in the responsibilities.

**Run 2:** `3` ✓
> Quote: "utilisateurs business; data analysts; dataviz engineers"
> Verified: ✓ found in JD
> Reasoning: Three distinct named partner functions are explicitly listed as collaboration partners in the responsibilities section.

**Run 3:** `2` ✗
> Quote: "data analysts; dataviz engineers"
> Verified: ✓ found in JD
> Reasoning: Two distinct named teams are explicitly mentioned as collaboration partners: data analysts and dataviz engineers.

⚠ **Disagreement**: manual=`3` vs LLM majority=`2`

⚠ **LLM inconsistency**: runs gave ['2', '3', '2']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Mise en place des flux et modèles de données, en se basant sur des stacks data modernes (SQL, DBT, outils ELTs, GCP/Azure/AWS/Snowflake, …)"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities with specific application context, evidence of established infrastructure through completed large-scale projects, and mentoring responsibilities indicate a mid-stage team.

**Run 2:** `mid` ✓
> Quote: "Packaging d'outils internes sur l'attribution custom"
> Verified: ✓ found in JD
> Reasoning: The reference to packaging internal tools, multiple named tools in active use (DBT, Airflow, Snowflake), and the mentoring of junior consultants indicate an established, functioning data practice that is scaling.

**Run 3:** `mid` ✓
> Quote: "Maintenance des pipelines et mise en place d'alertes & tests de qualité de données"
> Verified: ✓ found in JD
> Reasoning: Named tools appear in responsibilities and projects show established scale, but the consulting firm structure with project-based work suggests mid rather than mature enterprise platform maturity.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Mise en place des flux et modèles de données, en se basant sur des stacks data modernes (SQL, DBT, outils ELTs, GCP/Azure/AWS/Snowflake, …)"
> Verified: ✓ found in JD
> Reasoning: Technical specificity with named tools, scale examples, and concrete project work suggests hiring manager input, but generic collaboration language and abstract leadership framing indicate recruiter contributions.

**Run 2:** `hiring_manager` ✗
> Quote: "Migration d'une large infrastructure de dashboards basés sur un stack Supermetrics vers un stack Adverity+BigQuery"
> Verified: ✓ found in JD
> Reasoning: The specificity of the Supermetrics-to-Adverity+BigQuery migration, precise scale metrics (8 brands / 30+ countries), and context-rich tool usage indicate someone with hands-on project experience wrote this.

**Run 3:** `hiring_manager` ✗
> Quote: "Construction d'une Customer Data Platform pour un grand retailer (8 marques / 30+ pays); Migration d'une large infrastructure de dashboards basés sur un stack Supermetrics vers un stack Adverity+BigQuery"
> Verified: ✓ found in JD
> Reasoning: Specific project examples with real technical details and business context demonstrate hiring-manager knowledge of actual work done rather than recruiter boilerplate.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "en collaboration avec les utilisateurs business, data analysts et dataviz engineers"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves the data function and internal data consumers by building infrastructure and datasets rather than serving commercial, product, or finance stakeholders directly.

**Run 2:** `commercial` ✗
> Quote: "Construction d'une Customer Data Platform pour un grand retailer (8 marques / 30+ pays)"
> Verified: ✓ found in JD
> Reasoning: The example projects (Customer Data Platforms, attribution tools, steering metrics) are all commercial/marketing use cases, and the role explicitly collaborates with business users to translate their needs into data structures.

**Run 3:** `internal_data` ✓
> Quote: "datasets pertinents : bien modélisés, documentés, fiables en termes de qualité et de disponibilité, répondant aux besoins des usages ultérieurs"
> Verified: ✓ found in JD
> Reasoning: The primary focus is building and maintaining data infrastructure for downstream consumers rather than serving commercial, product, or finance functions directly.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'commercial', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "tu portes une expertise et la fait rayonner au sein du cabinet et à l'extérieur et participe à la formalisation d'offres sur la base de ton expertise"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership of technical expertise and offering development with execution-oriented delivery of client and internal data projects.

**Run 2:** `execution` ✗
> Quote: "tu sais travailler en autonomie sur tes missions et tu as le souhait d'accompagner et faire progresser des consultant·e·s plus jeunes"
> Verified: ✓ found in JD
> Reasoning: While the role includes mentoring and autonomy in project execution, the core framing is about delivering scoped consulting engagements, not defining the direction of analytics strategy.

**Run 3:** `mixed` ✓
> Quote: "tu sais travailler en autonomie sur tes missions et tu as le souhait d'accompagner et faire progresser des consultant·e·s plus jeunes"
> Verified: ✓ found in JD
> Reasoning: The role combines execution responsibilities (implementing, maintaining pipelines) with strategic elements (leading through mentoring and participating in service offering decisions).

⚠ **LLM inconsistency**: runs gave ['mixed', 'execution', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted work, or AI infrastructure; it focuses on traditional data engineering and analytics infrastructure.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, GenAI, coding agents, or AI-assisted workflows expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: There is no mention of AI tools, machine learning pipelines, or AI-enabled work expected from the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Maintenance des pipelines et mise en place d'alertes & tests de qualité de données"
> Verified: ✓ found in JD
> Reasoning: The action verb 'mise en place' (implementation) indicates the candidate owns setting up data quality tests and alerts as a core responsibility.

**Run 2:** `responsibility` ✗
> Quote: "mise en place d'alertes & tests de qualité de données"
> Verified: ✓ found in JD
> Reasoning: Data quality testing and alerts are framed as a responsibility the candidate implements and owns, not merely a tool to use.

**Run 3:** `responsibility` ✗
> Quote: "mise en place d'alertes & tests de qualité de données"
> Verified: ✓ found in JD
> Reasoning: Data quality testing is framed as an owned responsibility to implement rather than just a listed tool or skill.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "fiables en termes de qualité et de disponibilité, répondant aux besoins des usages ultérieurs"
> Verified: ✓ found in JD
> Reasoning: Data reliability and quality are emphasized as operational standards for ongoing pipeline maintenance and availability, reflecting moderate concern about operational failures rather than regulatory or stakeholder-trust risk.

**Run 2:** `moderate` ✗
> Quote: "fiables en termes de qualité et de disponibilité"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and quality are concerns, but framed as professional standards and pipeline stability rather than regulatory, compliance, or stakeholder-trust risk.

**Run 3:** `moderate` ✗
> Quote: "fiables en termes de qualité et de disponibilité"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and quality are concerns but are not framed around compliance, regulatory risk, or stakeholder trust that would indicate high loss aversion.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
