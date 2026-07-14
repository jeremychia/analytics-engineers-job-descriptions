# Trace: 2026-06-29_e-frontiers_analytics-engineer-data-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer / Data Engineer — E-Frontiers

**URL:** https://www.aplitrak.com/?adid=YWxmb25zby5tb3JlaXJhcy5jdWVydm8uNTI4MTMuMTU1MEBlZnJvbnRpZXJzdWsuYXBsaXRyYWsuY29t
**Location:** Community of Madrid, Spain
**Date Posted:** 2026-06-29

---

Analytics Engineer / Data Engineer

E-Frontiers is recruiting an Analytics Engineer/Data Engineer for an international financial services company based in Madrid. The company is evolving its data platform to create robust, reliable data products aligned with business.

Responsibilities:
- Colaboración con negocio: Trabajar estrechamente con stakeholders para entender necesidades, definir requerimientos y traducirlos en planes técnicos accionables.
- Liderazgo end-to-end: Gestionar proyectos desde su definición hasta su entrega, incluyendo estrategia de impacto, validación y testing con negocio.
- Visión estratégica y ejecución técnica: Capacidad de alternar entre la definición de roadmaps multi-dominio y la resolución directa de problemas técnicos complejos.
- Gobernanza y fiabilidad: Monitorizar de forma proactiva los productos de datos, diseñando sistemas de alertas que permitan detectar anomalías antes de impactar al negocio.
- Modelado de datos: Desarrollar modelos de datos siguiendo buenas prácticas de ingeniería (control de versiones, testing y CI/CD).
- Trabajo en equipo: Colaborar con otros miembros del equipo para reforzar estándares de calidad y mejores prácticas en la plataforma.
- Orquestación de pipelines: Gestionar workflows de datos mediante Airflow (Cloud Composer).
- Excelencia en desarrollo: Promover buenas prácticas en desarrollo de queries, revisiones de código, documentación y testing.

Requirements:
- 4+ years in similar roles with analytics engineering expertise
- Advanced SQL for complex model optimization
- dbt experience
- Mentalidad de producto (product mindset) understanding reliability and business value
- Financial services knowledge (P&L, FX, reconciliation concepts)
- Interest in Domain-Driven Design
- High English proficiency (Spanish valued)

Offer:
- Permanent employment with client
- Hybrid model in Madrid offices (Community of Madrid, Spain)
- International, technical environment
- Strategic data project participation
- Social benefits and work flexibility

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | moderate | high | 33% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | mixed | mixed | mixed | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | finance | 33% | ✓ |
| autonomy_level | mixed | mixed | mixed | strategic | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Gobernanza y fiabilidad: Monitorizar de forma proactiva los productos de datos, diseñando sistemas de alertas que permitan detectar anomalías antes de impactar al negocio."
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, proactive monitoring, alert systems, and anomaly detection—core rigour signals—with no corresponding velocity language (fast-paced, MVP, rapid delivery).

**Run 2:** `rigour` ✓
> Quote: "Modelado de datos siguiendo buenas prácticas de ingeniería (control de versiones, testing y CI/CD)"
> Verified: ⚠ NOT found verbatim
> Reasoning: The responsibilities section emphasizes testing, code quality, CI/CD, governance, reliability, and quality standards throughout, with zero velocity signals like fast-paced or rapid delivery.

**Run 3:** `rigour` ✓
> Quote: "Modelado de datos: Desarrollar modelos de datos siguiendo buenas prácticas de ingeniería (control de versiones, testing y CI/CD)."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes testing, CI/CD, version control, and engineering best practices across multiple responsibilities rather than speed or iteration pace.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Financial services knowledge (P&L, FX, reconciliation concepts)"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly requires financial services domain knowledge including P&L, which is a direct signal that data errors affect core financial operations.

**Run 2:** `moderate` ✗
> Quote: "an international financial services company"
> Verified: ✓ found in JD
> Reasoning: While the financial services sector defaults to high risk, the JD emphasizes reliability and business value without explicit regulatory, compliance, audit, or financial reporting framing.

**Run 3:** `high` ✓
> Quote: "Financial services knowledge (P&L, FX, reconciliation concepts)"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves a financial services company with stated requirements for P&L, FX, and reconciliation knowledge—core financial reporting and regulatory domains.

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'high']

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "Colaboración con negocio; Trabajo en equipo: Colaborar con otros miembros del equipo"
> Verified: ✓ found in JD
> Reasoning: The JD references 'business' and 'team members' generically but does not name specific partner functions (Finance, Product, Engineering, etc.) that count toward collaboration width.

**Run 2:** `0` ✓
> Quote: "Trabajar estrechamente con stakeholders; Colaboración con negocio"
> Verified: ✓ found in JD
> Reasoning: Collaboration references use generic terms like 'stakeholders' and 'negocio' (business) rather than named functions (Finance, Product, Engineering, etc.), so the count is zero.

**Run 3:** `0` ✓
> Quote: "None identified"
> Verified: ✓ found in JD
> Reasoning: The JD references generic stakeholders and team collaboration without naming specific functions or partner teams.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "The company is evolving its data platform to create robust, reliable data products aligned with business."
> Verified: ✓ found in JD
> Reasoning: The platform already exists and is being evolved, and the role involves named tools (Airflow, dbt) in responsibilities and multi-domain roadmap definition, indicating an established but growing data function.

**Run 2:** `mid` ✓
> Quote: "Orquestación de pipelines: Gestionar workflows de datos mediante Airflow (Cloud Composer)"
> Verified: ✓ found in JD
> Reasoning: The JD references specific deployed tools (Airflow, Cloud Composer, dbt) in responsibilities and describes the role as part of an evolving platform, indicating established but growing infrastructure.

**Run 3:** `mid` ✓
> Quote: "evolving its data platform to create robust, reliable data products aligned with business"
> Verified: ✓ found in JD
> Reasoning: The company has existing data products and infrastructure but is actively evolving and improving them, indicating a growing data function beyond early stage.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Orquestación de pipelines: Gestionar workflows de datos mediante Airflow (Cloud Composer); Modelado de datos: Desarrollar modelos de datos siguiendo buenas prácticas de ingeniería (control de versiones, testing y CI/CD)."
> Verified: ✓ found in JD
> Reasoning: The JD combines technical specificity (Airflow, multi-domain roadmaps, alert systems, data modeling with CI/CD) with generic collaboration language, indicating mixed authorship.

**Run 2:** `mixed` ✓
> Quote: "Modelado de datos siguiendo buenas prácticas de ingeniería (control de versiones, testing y CI/CD)"
> Verified: ⚠ NOT found verbatim
> Reasoning: Technical specificity in data modeling and pipeline orchestration with named tools suggests hiring manager input, but generic collaboration language ('trabajar estrechamente con stakeholders') suggests recruiter input.

**Run 3:** `mixed` ✓
> Quote: "Orquestación de pipelines: Gestionar workflows de datos mediante Airflow (Cloud Composer)."
> Verified: ✓ found in JD
> Reasoning: The JD combines specific technical context (Airflow/Cloud Composer) with generic stakeholder collaboration language typical of recruiter templates.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "The company is evolving its data platform to create robust, reliable data products aligned with business."
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is on building and monitoring data products and platform infrastructure, which serve data consumers and the data function itself internally.

**Run 2:** `internal_data` ✓
> Quote: "evolving its data platform to create robust, reliable data products aligned with business"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building and maintaining the data platform infrastructure for internal business teams to consume, not serving external customers or specific business functions.

**Run 3:** `finance` ✗
> Quote: "Financial services knowledge (P&L, FX, reconciliation concepts)"
> Verified: ✓ found in JD
> Reasoning: The role serves a financial services company with explicit requirements around P&L, FX, and reconciliation—core financial reporting and decision-making domains.

⚠ **LLM inconsistency**: runs gave ['internal_data', 'internal_data', 'finance']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Visión estratégica y ejecución técnica: Capacidad de alternar entre la definición de roadmaps multi-dominio y la resolución directa de problemas técnicos complejos."
> Verified: ✓ found in JD
> Reasoning: The role explicitly combines strategic direction-setting (defining roadmaps, designing alert systems) with direct technical execution and problem-solving.

**Run 2:** `mixed` ✓
> Quote: "Capacidad de alternar entre la definición de roadmaps multi-dominio y la resolución directa de problemas técnicos complejos"
> Verified: ✓ found in JD
> Reasoning: The role explicitly requires both strategic ownership (defining roadmaps) and tactical execution (solving technical problems), with responsibilities emphasizing both equally.

**Run 3:** `strategic` ✗
> Quote: "Capacidad de alternar entre la definición de roadmaps multi-dominio y la resolución directa de problemas técnicos complejos"
> Verified: ✓ found in JD
> Reasoning: The role is expected to define multi-domain technical roadmaps and strategies, not merely execute plans set by others.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI skills expected from the candidate, either for personal productivity tools or building AI-ready infrastructure.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no references to AI coding tools, AI-assisted development, or building AI data infrastructure for candidates.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI skills, tools, or agentic workflows expected of the candidate—focus is purely on data engineering and analytics fundamentals.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Promover buenas prácticas en desarrollo de queries, revisiones de código, documentación y testing."
> Verified: ✓ found in JD
> Reasoning: Testing is framed as a practice the candidate promotes and leads within the team, combined with repeated reliability and governance language, indicating ownership of testing standards.

**Run 2:** `responsibility` ✗
> Quote: "Promover buenas prácticas en desarrollo de queries, revisiones de código, documentación y testing"
> Verified: ✓ found in JD
> Reasoning: Testing is framed as a responsibility the candidate actively promotes and enforces through best practices, not merely a tool listed in a requirements list.

**Run 3:** `responsibility` ✗
> Quote: "Excelencia en desarrollo: Promover buenas prácticas en desarrollo de queries, revisiones de código, documentación y testing."
> Verified: ✓ found in JD
> Reasoning: Testing is framed as a core responsibility to own and promote as part of establishing quality standards, not merely as a tool to use.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "Monitorizar de forma proactiva los productos de datos, diseñando sistemas de alertas que permitan detectar anomalías antes de impactar al negocio."
> Verified: ✓ found in JD
> Reasoning: The role emphasizes proactive monitoring and alert systems explicitly designed to prevent data anomalies from reaching business stakeholders, paired with repeated reliability and governance language and financial services context.

**Run 2:** `moderate` ✗
> Quote: "Monitorizar de forma proactiva los productos de datos, diseñando sistemas de alertas que permitan detectar anomalías antes de impactar al negocio"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes proactive monitoring and operational reliability to prevent data product failures from reaching the business, but lacks explicit compliance or regulatory framing.

**Run 3:** `moderate` ✗
> Quote: "Monitorizar de forma proactiva los productos de datos, diseñando sistemas de alertas que permitan detectar anomalías antes de impactar al negocio"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes proactive monitoring and preventing data anomalies from reaching business stakeholders, reflecting moderate concern with operational reliability rather than compliance-driven risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'moderate']
