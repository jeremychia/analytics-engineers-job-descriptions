# Trace: 2026-06-27_yuri-neil_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer (H/F) — YURI & NEIL (client: data agency)

**URL:** https://www.welcometothejungle.com/fr/companies/yuri-neil/jobs/analytics-engineer-h-f_paris_YN_Qx8rQ8Y
**Location:** Montreuil (Télétravail fréquent)
**Date Posted:** 2026-06-27
**Salary:** 48,000–55,000 EUR

---

YURI & NEIL
Analytics Engineer (H/F)

CDI
Montreuil
Télétravail fréquent
Salaire : 48 à 55 €
Expérience : > 4 ans
Éducation : Bac +5 / Master

---

Descriptif du poste

Yuri & Neil Recrutement accompagne aujourd'hui l'un de ses clients, une agence data à taille humaine spécialisée sur toute la chaîne de valeur : Web Analytics & CRO, Data Engineering, Analytics Engineering et Business Intelligence.

Cette structure en forte croissance accompagne des pure players issus de secteurs variés, avec une approche experte, pragmatique et orientée impact business.

Description du poste :

En tant que Analytics Engineer, tu interviendras sur la conception, la structuration et l'activation de stacks data complètes pour différents clients. Ton rôle sera d'accompagner la mise en place d'architectures fiables, exploitables et orientées décisionnel, depuis l'ingestion jusqu'à la valorisation des données.

Tu participeras à des projets variés mêlant engineering, analytics, gouvernance et data products, avec un fort impact sur les enjeux business des clients.

Tes missions

Construction et structuration des stacks data
Concevoir et déployer des architectures data complètes adaptées aux besoins clients.
Mettre en place les flux de collecte, transformation, consolidation et stockage des données.
Structurer les modèles de données pour garantir leur lisibilité, leur performance et leur maintenabilité.

Transformation & valorisation des données
Développer les pipelines de transformation et les modèles analytiques.
Concevoir des dashboards décisionnels clairs et actionnables.
Participer à l'activation des données pour les équipes métiers (marketing, produit, direction…).

Qualité, gouvernance & monitoring
Mettre en place des dispositifs de contrôle de qualité des données et d'alerting.
Structurer la gouvernance data : ownership, accès, documentation, règles d'usage.
Construire des semantic layers facilitant l'exploitation des données par les équipes.

Innovation & data products
Concevoir de petits produits data à forte valeur ajoutée (interfaces, outils internes, automatisations).
Participer à des projets intégrant des briques IA ou d'analyse avancée.
Proposer des améliorations techniques et méthodologiques sur les stacks clients.

---

Profil recherché

Expérience
Minimum 3 ans d'expérience (post-alternance) sur un rôle similaire.
Une alternance en data engineering / analytics engineering / BI est fortement appréciée.

Compétences techniques
Bonne maîtrise de la stack suivante :
SQL et Python
Snowflake
DBT
GitHub
Power BI
AWS

Soft skills
Esprit analytique et rigueur technique.
Capacité à vulgariser des sujets data auprès d'interlocuteurs non techniques.
Curiosité, autonomie et goût pour la résolution de problèmes complexes.
Sens du service et bon relationnel client.

Langues
Anglais : un plus.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 3 | 3 | 3 | 2 | 33% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | recruiter | recruiter | hiring_manager | 33% | ✗ |
| stakeholder_orientation | mixed | mixed | product | internal_data | 0% | ✓ |
| autonomy_level | execution | execution | mixed | execution | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting."
> Verified: ✓ found in JD
> Reasoning: Data quality controls, governance structures, and reliability are emphasized throughout, with no velocity-oriented language about speed or shipping.

**Run 2:** `rigour` ✓
> Quote: "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality control, governance structuring, technical rigor, and data model reliability as core responsibilities, with no velocity-oriented language present.

**Run 3:** `rigour` ✓
> Quote: "Structurer les modèles de données pour garantir leur lisibilité, leur performance et leur maintenabilité"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data structure quality, governance, and reliable architectures with no mention of speed or delivery pace, reflecting a rigour-oriented approach.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "impact sur les enjeux business des clients"
> Verified: ✓ found in JD
> Reasoning: The role serves clients across varied sectors with no explicit financial reporting, compliance, or regulatory language—standard business intelligence domain risk.

**Run 2:** `moderate` ✓
> Quote: "accompagne des pure players issus de secteurs variés, avec une approche experte, pragmatique et orientée impact business"
> Verified: ✓ found in JD
> Reasoning: The JD describes clients from various sectors with business impact focus, but contains no language around financial reporting, compliance, or regulatory requirements that would indicate high risk.

**Run 3:** `moderate` ✓
> Quote: "Ton rôle sera d'accompagner la mise en place d'architectures fiables, exploitables et orientées décisionnel"
> Verified: ✓ found in JD
> Reasoning: The JD describes serving multiple client sectors with no explicit financial reporting, compliance, or regulatory language, indicating moderate business impact risk typical of consultancy work.

### collaboration_width
**Manual:** `3`

**Run 1:** `3` ✓
> Quote: "marketing; produit; direction"
> Verified: ✓ found in JD
> Reasoning: Marketing, product, and management/direction functions are explicitly named as recipients of data activation.

**Run 2:** `3` ✓
> Quote: "marketing; produit; direction"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names three distinct business teams that the role collaborates with: marketing, product, and direction/management.

**Run 3:** `2` ✗
> Quote: "équipes métiers (marketing, produit, direction…)"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names Marketing and Product teams as collaboration partners.

⚠ **LLM inconsistency**: runs gave ['3', '3', '2']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Cette structure en forte croissance accompagne des pure players issus de secteurs variés"
> Verified: ✓ found in JD
> Reasoning: The agency is described as small but in strong growth, with named tools appearing in responsibilities (not just requirements), indicating an established but expanding function.

**Run 2:** `mid` ✓
> Quote: "agence data à taille humaine spécialisée sur toute la chaîne de valeur : Web Analytics & CRO, Data Engineering, Analytics Engineering et Business Intelligence"
> Verified: ✓ found in JD
> Reasoning: The agency has defined specializations and sub-functions across the data value chain and is experiencing rapid growth, indicating a mid-stage organization with established practice areas.

**Run 3:** `mid` ✓
> Quote: "une agence data à taille humaine spécialisée sur toute la chaîne de valeur"
> Verified: ✓ found in JD
> Reasoning: An established boutique data agency with multiple specializations (Web Analytics, Data Engineering, Analytics Engineering, BI) in strong growth indicates mid-stage maturity, neither greenfield nor enterprise-scale.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `recruiter` ✗
> Quote: "Concevoir et déployer des architectures data complètes adaptées aux besoins clients."
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic verbs and boilerplate language without specific technical context, scale numbers, or methodology precision that only a practitioner would include.

**Run 2:** `recruiter` ✗
> Quote: "Concevoir et déployer des architectures data complètes adaptées aux besoins clients"
> Verified: ✓ found in JD
> Reasoning: Responsibilities rely on generic action verbs and broad descriptions without specific scale, client problems, or application context that would indicate direct hiring manager authorship.

**Run 3:** `hiring_manager` ✓
> Quote: "Structurer la gouvernance data : ownership, accès, documentation, règles d'usage"
> Verified: ✓ found in JD
> Reasoning: The specific breakdown of governance components (ownership, access, documentation, usage rules) reflects hands-on experience with data governance implementation rather than generic recruiter language.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`recruiter`

⚠ **LLM inconsistency**: runs gave ['recruiter', 'recruiter', 'hiring_manager']

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Participer à l'activation des données pour les équipes métiers (marketing, produit, direction…)"
> Verified: ✓ found in JD
> Reasoning: The role activates data for multiple distinct business functions (marketing, product, management) with equal emphasis, creating genuinely split stakeholder orientation.

**Run 2:** `product` ✗
> Quote: "Participer à l'activation des données pour les équipes métiers (marketing, produit, direction…)"
> Verified: ✓ found in JD
> Reasoning: The primary emphasis is on enabling product and business teams to use data for decision-making, with product explicitly named as a key audience alongside marketing and management.

**Run 3:** `internal_data` ✗
> Quote: "Construire des semantic layers facilitant l'exploitation des données par les équipes"
> Verified: ✓ found in JD
> Reasoning: The emphasis on building semantic layers and data products for data consumption indicates the role primarily serves data infrastructure needs and data consumers, not external business functions.

⚠ **LLM inconsistency**: runs gave ['mixed', 'product', 'internal_data']

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "tu participeras à des projets variés mêlant engineering, analytics, gouvernance et data products"
> Verified: ✓ found in JD
> Reasoning: The role frames itself as participation in scoped client projects with technical delivery responsibilities, not as setting strategic direction for how analytics is delivered.

**Run 2:** `mixed` ✗
> Quote: "Concevoir et déployer des architectures data complètes adaptées aux besoins clients"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic design and structuring of data architectures with execution within client-led agency projects.

**Run 3:** `execution` ✓
> Quote: "Tu participeras à des projets variés mêlant engineering, analytics, gouvernance et data products"
> Verified: ✓ found in JD
> Reasoning: The framing emphasizes participation in client projects and implementation rather than defining direction or owning strategic outcomes.

⚠ **LLM inconsistency**: runs gave ['execution', 'mixed', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions projects involving AI components but does not require candidates to demonstrate AI skills or use AI tools for their own work.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD mentions participation in projects with AI components but does not expect the candidate to possess or demonstrate AI skills.

**Run 3:** `none` ✗
> Quote: "Participer à des projets intégrant des briques IA ou d'analyse avancée"
> Verified: ✓ found in JD
> Reasoning: While AI is mentioned, the JD does not specify what AI skill the candidate must demonstrate; participation in AI-integrated projects does not indicate required AI expertise.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting."
> Verified: ✓ found in JD
> Reasoning: Data quality controls and alerting are framed as implementation responsibilities using 'mettre en place', indicating ownership over the practice rather than tool-listing.

**Run 2:** `responsibility` ✗
> Quote: "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting"
> Verified: ✓ found in JD
> Reasoning: Data quality control and alerting are framed as explicit responsibilities owned by the candidate using the action verb 'mettre en place'.

**Run 3:** `responsibility` ✗
> Quote: "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting"
> Verified: ✓ found in JD
> Reasoning: The action verb 'mettre en place' (put in place) indicates the candidate owns implementing and defining data quality control systems and alerting.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting."
> Verified: ✓ found in JD
> Reasoning: Reliability and quality controls are emphasized as operational capabilities to build, not as risk prevention or compliance-driven concerns.

**Run 2:** `moderate` ✗
> Quote: "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting"
> Verified: ✓ found in JD
> Reasoning: Operational reliability through quality control and monitoring is emphasized, but without compliance, regulatory, or trust-focused language that would indicate high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Mettre en place des dispositifs de contrôle de qualité des données et d'alerting"
> Verified: ✓ found in JD
> Reasoning: The expectation to implement quality control and alerting reflects operational reliability concerns, but the absence of compliance, regulatory, or risk language indicates moderate rather than high loss aversion framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
