# Trace: 2026-07-01_aptrack_senior-bi-architect

## JD text (fed to classifier, Layer B stripped)

```
# Senior BI Architect — Aptrack (client undisclosed)

**URL:** https://www.aptrack.co/uap/AAAGoQAPZp8B8uZs/
**Location:** Dublin 8, Ireland (Hybrid)
**Date Posted:** 2026-07-01

---

Senior Business Intelligence Architect (EBT8141) via Aptrack

Location: Dublin 8, Ireland
Employment Type: 12-month rolling contract
Work Model: Hybrid (3 days onsite per week)
Sector: IT

Role Summary
The organisation seeks an experienced professional to design and deliver a modern Microsoft Fabric-based analytics platform. This role encompasses comprehensive BI architecture covering data ingestion, modelling, storage, and reporting on Azure infrastructure.

Key Responsibilities
- Design and implement end-to-end BI architecture using Microsoft Fabric and Azure
- Define lakehouse, data warehouse, and semantic modelling structures
- Build and manage Azure Data Factory pipelines and ETL/ELT processes
- Develop Power BI datasets, dashboards, and reporting solutions
- Create reusable data models and curated data products
- Ensure data quality, governance, and security standards
- Translate business requirements into BI solutions and analytics outputs
- Define BI architecture standards, principles and best practices
- Ensure scalability, performance and enterprise alignment
- Collaborate with stakeholders on requirements and insights delivery

Required Experience
- 7+ years in BI, Data Architecture, or Analytics roles
- Strong Azure data platform and Microsoft Fabric experience
- Data warehousing, data lakes, and enterprise data modelling expertise
- Hands-on Power BI, Azure Data Factory, and SQL proficiency
- PySpark or Fabric notebooks experience
- Data governance and quality practices knowledge
- Stakeholder collaboration experience

Key Skills
Microsoft Fabric/Azure Synapse, Azure Data Factory, Azure Data Lake, Power BI, SQL, PySpark, data modelling, ETL/ELT, Azure DevOps, data governance and security.

Work Authorization
Candidates must possess appropriate Irish work rights or valid long-term work visa documentation.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | mixed | recruiter | mixed | 33% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | mixed | strategic | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | none | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Ensure data quality, governance, and security standards"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize quality, governance, and enterprise standards with no velocity or speed signals present.

**Run 2:** `rigour` ✓
> Quote: "Ensure data quality, governance, and security standards"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize correctness, governance, quality, and standards rather than speed or iteration.

**Run 3:** `rigour` ✓
> Quote: "Ensure data quality, governance, and security standards"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, standards, best practices, and data quality with no counterbalancing velocity language.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Ensure data quality, governance, and security standards"
> Verified: ✓ found in JD
> Reasoning: While governance is emphasized, there is no explicit financial reporting, regulatory, or compliance language, indicating operational reliability concerns rather than regulatory risk.

**Run 2:** `moderate` ✓
> Quote: "Translate business requirements into BI solutions and analytics outputs"
> Verified: ✓ found in JD
> Reasoning: The role affects business decisions through analytics but lacks explicit regulatory, compliance, or financial reporting signals.

**Run 3:** `moderate` ✓
> Quote: "Ensure data quality, governance, and security standards"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes governance and quality for business decision-making without explicit financial reporting, regulatory compliance, or public-facing product risk signals.

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "Collaborate with stakeholders on requirements and insights delivery"
> Verified: ✓ found in JD
> Reasoning: Only generic 'stakeholders' are mentioned; no named teams, functions, or partner groups are identified.

**Run 2:** `0` ✓
> Quote: "Collaborate with stakeholders on requirements and insights delivery"
> Verified: ✓ found in JD
> Reasoning: No named partner teams are identified; collaboration is only mentioned generically as 'stakeholders'.

**Run 3:** `0` ✓
> Quote: "Collaborate with stakeholders on requirements and insights delivery"
> Verified: ✓ found in JD
> Reasoning: The JD mentions collaboration with stakeholders generically without naming specific partner teams or functions.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Design and implement end-to-end BI architecture using Microsoft Fabric and Azure; Define BI architecture standards, principles and best practices"
> Verified: ✓ found in JD
> Reasoning: The role combines design and implementation of infrastructure with definition of standards, indicating an evolving platform rather than greenfield or fully mature.

**Run 2:** `mid` ✗
> Quote: "Design and deliver a modern Microsoft Fabric-based analytics platform"
> Verified: ✓ found in JD
> Reasoning: The focus on modernization with existing named tools in responsibilities (Fabric, Azure Data Factory, Power BI) suggests building on established infrastructure rather than starting from zero.

**Run 3:** `mid` ✗
> Quote: "Design and deliver a modern Microsoft Fabric-based analytics platform"
> Verified: ✓ found in JD
> Reasoning: The focus on designing and delivering a modern platform suggests a significant modernization or scaling effort rather than establishment from zero or mature operations.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Design and implement end-to-end BI architecture using Microsoft Fabric and Azure; Build and manage Azure Data Factory pipelines and ETL/ELT processes; Translate business requirements into BI solutions and analytics outputs"
> Verified: ✓ found in JD
> Reasoning: Specific technical responsibilities with named tools and architectural concepts appear alongside generic boilerplate like 'translate business requirements'.

**Run 2:** `recruiter` ✗
> Quote: "Translate business requirements into BI solutions and analytics outputs"
> Verified: ✓ found in JD
> Reasoning: While specific tools are mentioned, the responsibilities rely on generic boilerplate verbs and lack contextual depth about scale, specific problems, or methodologies.

**Run 3:** `mixed` ✗
> Quote: "Design and implement end-to-end BI architecture using Microsoft Fabric and Azure"
> Verified: ✓ found in JD
> Reasoning: The JD contains specific tool naming (Microsoft Fabric, Azure) alongside generic action verbs without scale or methodology context, suggesting both hiring manager and recruiter input.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'recruiter', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Define BI architecture standards, principles and best practices; Create reusable data models and curated data products"
> Verified: ✓ found in JD
> Reasoning: The core responsibilities focus on building platform infrastructure and reusable data products for internal consumption rather than serving specific business functions.

**Run 2:** `internal_data` ✓
> Quote: "Create reusable data models and curated data products"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building the analytics platform and standards for data consumers within the organization, not serving commercial, product, or finance stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Create reusable data models and curated data products"
> Verified: ✓ found in JD
> Reasoning: The emphasis on building reusable infrastructure and data products indicates the primary audience is the internal BI/data consumer base.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Define BI architecture standards, principles and best practices; Design and implement end-to-end BI architecture using Microsoft Fabric and Azure"
> Verified: ✓ found in JD
> Reasoning: The repeated use of 'define' and 'design' indicates strategic ownership of the BI architecture direction and standards for the organization.

**Run 2:** `mixed` ✗
> Quote: "Define BI architecture standards, principles and best practices"
> Verified: ✓ found in JD
> Reasoning: The role owns the technical direction of the platform (strategic) while executing in service of translated business requirements (execution).

**Run 3:** `strategic` ✓
> Quote: "Define BI architecture standards, principles and best practices"
> Verified: ✓ found in JD
> Reasoning: Multiple uses of 'define' indicate the role sets direction for architectural decisions and standards rather than executing direction set by others.

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No AI, machine learning, or AI tool usage is mentioned anywhere in the JD; the role focuses purely on traditional BI architecture.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: There are no expectations for the candidate to use AI tools, build AI infrastructure, or work with GenAI applications.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD does not expect the candidate to demonstrate AI skills; PySpark is listed for data engineering work, not AI development.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Ensure data quality, governance, and security standards"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an explicit responsibility to ensure, using an action verb at the role level.

**Run 2:** `responsibility` ✗
> Quote: "Ensure data quality, governance, and security standards"
> Verified: ✓ found in JD
> Reasoning: Data quality is explicitly framed as a responsibility the candidate ensures, though without specifying particular testing tools or frameworks.

**Run 3:** `responsibility` ✗
> Quote: "Ensure data quality, governance, and security standards"
> Verified: ✓ found in JD
> Reasoning: The use of 'Ensure' in the responsibilities section indicates the candidate owns data quality and governance practices, though no specific testing framework is named.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensure data quality, governance, and security standards; Ensure scalability, performance and enterprise alignment"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and quality are emphasized, but without regulatory or compliance framing, indicating fear of pipeline failures rather than compliance risk.

**Run 2:** `moderate` ✗
> Quote: "Ensure data quality, governance, and security standards"
> Verified: ✓ found in JD
> Reasoning: Operational reliability concerns (data quality, governance, security) are present throughout but secondary to architectural delivery rather than framed as preventing business or regulatory risk.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around capability delivery and architectural standards without language emphasizing risk prevention, compliance, or protecting against bad outcomes.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'none']
