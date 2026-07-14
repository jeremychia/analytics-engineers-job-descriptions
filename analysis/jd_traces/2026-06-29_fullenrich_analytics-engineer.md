# Trace: 2026-06-29_fullenrich_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — FullEnrich

**URL:** https://recruiterflow.com/licornesociety/jobs/16966?source=linkedin_basic&location=1
**Location:** Paris
**Date Posted:** 2026-06-29

---

Analytics Engineer
Full time
Paris

🏢 Le Contexte & La Vision

Nous accompagnons une start-up internationale (US, France, UK) en hyper-croissance, spécialisée dans l'enrichissement de données B2B à destination des équipes commerciales.

Pourquoi les rejoindre ?
Là où les concurrents s'appuient sur une base unique, ils ont développé un système d'enrichissement "en cascade" (waterfall) agrégeant plus de 20 bases de données.

Des KPIs qui parlent d'eux-mêmes : Une levée de fonds de 2 millions d'euros et une équipe qui passe de 20 à 40 collaborateurs.
Culture "AI-Native" : Une équipe internationale (12 nationalités), ultra-performante, qui utilise massivement l'IA au quotidien pour décupler sa productivité.


Le Défi : Être le premier recrutement Data (Zéro chaos, que de l'impact) 🎯

Jusqu'à présent, la stack de données a été bâtie et choyée par le CPO et l'équipe RevOps. Vous n'arrivez pas pour réparer un chaos ou repartir de zéro : les fondations sont ultra-propres, documentées et testées.

En tant que premier(e) Data engagé(e) à plein temps, vous ne rejoignez pas une équipe data : vous la créez. Vous serez rattaché(e) directement à Simon (Head of RevOps) et collaborerez avec les fondateurs. Votre rôle sera hybride, à la frontière entre l'infrastructure technique et la stratégie business.

Votre mission se déroulera en deux temps :

Piloter et scaler la stack (les 6 premiers mois) : Structurer les couches de données, pousser plus loin les modèles dbt et automatiser pour que chaque équipe (Sales, Marketing, Finance, Product) soit en autonomie complète via Basedash.
Devenir un(e) partenaire hautement stratégique : Aller au-delà des tableaux de bord pour mener des analyses complexes qui feront pivoter le business (calcul de l'économie unitaire/marges par fournisseur de données, scoring d'activation produit, prédiction du churn).

La Stack Technique 🛠️

Data Warehouse & Modélisation : BigQuery, dbt Cloud
Ingestion & Reverse ETL : Fivetran, Airbyte, Segment
BI / Restitution : Basedash (outil de BI natif de l'IA)
Méthodologie : AI-Native. L'équipe code l'intégralité du projet dbt dans Cursor / Claude Code avec du développement assisté par IA.

Votre Profil ✅

Expérience : Vous justifiez de 4 ans minimum d'expérience en Analytics Engineering, Data Engineering ou en tant que Senior Data Analyst avec une expertise majeure en modélisation.
Hard Skills : SQL n'a aucun secret pour vous (idéalement sur BigQuery). Vous maîtrisez impérativement dbt.
Business & SaaS Mindset : Vous comprenez parfaitement les métriques SaaS (ARR, churn, unit economics, activation). Vous aimez que la data serve directement à générer du chiffre d'affaires.
AI Tooling : Vous utilisez déjà au quotidien des outils comme Cursor ou Claude pour démultiplier votre vitesse d'exécution.
État d'esprit : Autonome, rigoureux(se) sur la qualité des données, avec un fort esprit de "bâtisseur" (buy, don't build).

Les plus de l'offre 🤝

L'opportunité unique d'être le/la pionnier(e) de la Data dans un SaaS à forte traction.
Une culture d'équipe basée sur l'exécution rapide, l'autonomie totale et la confiance.
Un environnement de travail flexible (télétravail très ouvert, bureaux à Paris).

Le Processus de Recrutement (Rapide & Humain) 🔍

Premier échange (30 min) avec Licorne Society pour faire connaissance.
Entretien (45 min) avec Simon (RevOps) chez FullEnrich – validation du fit réciproque.
Cas technique (1h) – un problème Data/Ops concret du monde réel.
Entretien final avec les Fondateurs – alignement vision et culture.

---
```

---

## Classification results

| Dimension | Run 1 | Run 2 | Run 3 | Agreement |
|-----------|-------|-------|-------|-----------|
| velocity_vs_rigour | rigour | mixed | mixed | 33% |
| domain_risk | moderate | moderate | moderate | 100% |
| collaboration_width | 4 | 5 | 5 | 33% |
| data_team_maturity | early | early | early | 100% |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | 100% |
| stakeholder_orientation | internal_data | internal_data | mixed | 33% |
| autonomy_level | strategic | strategic | strategic | 100% |

---

## Evidence per dimension

### velocity_vs_rigour

**Run 1:** `rigour`
> Quote: "les fondations sont ultra-propres, documentées et testées"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes documentation, testing, and clean data quality foundations as core expectations, with faster execution mentioned only as team culture rather than primary job orientation.

**Run 2:** `mixed`
> Quote: "Autonome, rigoureux(se) sur la qualité des données, avec un fort esprit de 'bâtisseur'"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role demands both rapid execution (builder mentality, hyper-growth context, execution speed) and rigorous data quality standards, reflecting equal emphasis on velocity and rigour.

**Run 3:** `mixed`
> Quote: "Autonome, rigoureux(se) sur la qualité des données, avec un fort esprit de 'bâtisseur'"
> Verified: ⚠ NOT found verbatim
> Reasoning: Required mindset explicitly pairs autonomy and builder spirit (velocity signals) with rigorous data quality (rigour signal), indicating balanced orientation.

⚠ **LLM inconsistency**: runs gave ['rigour', 'mixed', 'mixed']

### domain_risk

**Run 1:** `moderate`
> Quote: "Vous aimez que la data serve directement à générer du chiffre d'affaires"
> Verified: ✓ found in JD
> Reasoning: Data errors would significantly affect business decisions and commercial outcomes, but the SaaS context does not involve regulatory compliance or financial reporting consequences typical of high-risk domains.

**Run 2:** `moderate`
> Quote: "enrichissement de données B2B à destination des équipes commerciales"
> Verified: ✓ found in JD
> Reasoning: While supporting business decision-making for sales and revenue teams, the JD contains no financial reporting, regulatory, or compliance language, indicating moderate rather than high risk.

**Run 3:** `moderate`
> Quote: "que la data serve directement à générer du chiffre d'affaires"
> Verified: ✓ found in JD
> Reasoning: Data errors affect business intelligence and revenue operations, but JD lacks explicit signals of financial reporting, compliance, or regulatory risk.

### collaboration_width

**Run 1:** `4`
> Quote: "Sales; Marketing; Finance; Product"
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD explicitly names four distinct functional teams that the role must enable autonomy for via self-serve dashboards.

**Run 2:** `5`
> Quote: "Sales, Marketing, Finance, Product; Head of RevOps"
> Verified: ⚠ NOT found verbatim
> Reasoning: Five distinct teams are explicitly named: Sales, Marketing, Finance, and Product are listed as collaborators; RevOps is the direct manager's function.

**Run 3:** `5`
> Quote: "Sales; Marketing; Finance; Product; Head of RevOps"
> Verified: ⚠ NOT found verbatim
> Reasoning: Five distinct named teams explicitly identified: four primary customer teams listed in responsibilities, plus RevOps as direct reporting line.

⚠ **LLM inconsistency**: runs gave ['4', '5', '5']

### data_team_maturity

**Run 1:** `early`
> Quote: "vous ne rejoignez pas une équipe data : vous la créez"
> Verified: ✓ found in JD
> Reasoning: This is the first full-time data hire and the role is explicitly framed as building the data function from scratch, despite solid existing infrastructure built by non-data personnel.

**Run 2:** `early`
> Quote: "En tant que premier(e) Data engagé(e) à plein temps, vous ne rejoignez pas une équipe data : vous la créez."
> Verified: ✓ found in JD
> Reasoning: This is explicitly the first full-time data hire with no existing data team, indicating early-stage data function despite infrastructure being maintained by RevOps.

**Run 3:** `early`
> Quote: "vous ne rejoignez pas une équipe data : vous la créez"
> Verified: ✓ found in JD
> Reasoning: First full-time data hire creating the data function from scratch, despite existing clean technical infrastructure built by non-data roles.

### jd_authorship

**Run 1:** `hiring_manager`
> Quote: "calcul de l'économie unitaire/marges par fournisseur de données, scoring d'activation produit, prédiction du churn"
> Verified: ✓ found in JD
> Reasoning: The responsibilities specify concrete business metrics (unit economics, activation scoring, churn prediction) and technical tools (BigQuery, dbt, Fivetran, Basedash) in precise application contexts that only someone executing this work would include.

**Run 2:** `hiring_manager`
> Quote: "L'équipe code l'intégralité du projet dbt dans Cursor / Claude Code avec du développement assisté par IA"
> Verified: ✓ found in JD
> Reasoning: The specific technical detail about AI-assisted dbt development in specific tools (Cursor/Claude Code) indicates hands-on authorship by someone familiar with this exact workflow.

**Run 3:** `hiring_manager`
> Quote: "Structurer les couches de données, pousser plus loin les modèles dbt et automatiser"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain technical specificity and tool context (dbt, Basedash, BigQuery) with named analytical use cases (unit economics by source, activation scoring) that only come from someone operating this role.

### stakeholder_orientation

**Run 1:** `internal_data`
> Quote: "Structurer les couches de données, pousser plus loin les modèles dbt et automatiser pour que chaque équipe (Sales, Marketing, Finance, Product) soit en autonomie complète via Basedash"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building and scaling the data platform infrastructure so that other teams can self-serve analytics, rather than delivering analyses to specific downstream functions.

**Run 2:** `internal_data`
> Quote: "que chaque équipe (Sales, Marketing, Finance, Product) soit en autonomie complète via Basedash"
> Verified: ✓ found in JD
> Reasoning: The primary deliverable is building self-serve analytics infrastructure (Basedash platform) for internal data consumers across multiple business teams.

**Run 3:** `mixed`
> Quote: "chaque équipe (Sales, Marketing, Finance, Product) soit en autonomie complète"
> Verified: ✓ found in JD
> Reasoning: Role genuinely serves four distinct audiences with balanced responsibility—infrastructure for all teams in first phase, then analyses spanning finance (unit economics, churn) and product (activation scoring).

⚠ **LLM inconsistency**: runs gave ['internal_data', 'internal_data', 'mixed']

### autonomy_level

**Run 1:** `strategic`
> Quote: "vous ne rejoignez pas une équipe data : vous la créez"
> Verified: ✓ found in JD
> Reasoning: The role is framed as creating and owning the data function, defining how analytics is delivered to the organization, rather than executing work scoped by others.

**Run 2:** `strategic`
> Quote: "vous ne rejoignez pas une équipe data : vous la créez"
> Verified: ✓ found in JD
> Reasoning: The role explicitly owns creation of the data function from scratch and is framed as becoming a strategic partner that shapes business direction through analysis, not executing existing plans.

**Run 3:** `strategic`
> Quote: "Piloter et scaler la stack"
> Verified: ✓ found in JD
> Reasoning: Role is expected to steer direction, create the data function, conduct business-pivoting analyses, and define how analytics is delivered—not execute pre-set direction.

### ai_role
**Run 1:** `ai_user` ✓
> Quote: "Cursor/Claude Code listed among responsibilities and tools (dbt Cloud, BigQuery, Basedash)"
> Reasoning: JD explicitly names Claude Code and Cursor as tools for analytics automation.

**Run 2:** `ai_user` ✓
> Quote: "pousser plus loin les modèles dbt et automatiser pour que chaque équipe (Sales, Marketing, Finance, Product) soit en autonomie complète via Basedash"
> Reasoning: Candidate will use AI tools (Cursor/Claude Code) to automate analytics development and accelerate delivery.


### testing_framing
**Run 1:** `responsibility` ✓
> Quote: "rigoureux(se) sur la qualité des données, les fondations sont ultra-propres, documentées et testées"
> Reasoning: Candidate must maintain rigorous data quality standards and clean, documented, tested foundations.

**Run 2:** `responsibility` ✓
> Quote: "les fondations sont ultra-propres, documentées et testées"
> Reasoning: Candidate owns building and maintaining tested, documented data foundations as a core responsibility.


### loss_aversion_framing
**Run 1:** `moderate` ✓
> Quote: "calcul de l'économie unitaire/marges par fournisseur de données; générer du chiffre d'affaires, ARR, churn"
> Reasoning: Revenue and unit economics analysis drive business decisions without compliance/regulatory dominance.

**Run 2:** `moderate` ✓
> Quote: "calcul de l'économie unitaire/marges par fournisseur de données"
> Reasoning: Business economics and revenue metrics drive framing; operational reliability concerns outweigh regulatory risk.

