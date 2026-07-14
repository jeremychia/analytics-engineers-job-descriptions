# Trace: 2026-06-29_onem-smals_senior-data-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Data Analytics Engineer — ONEM / Smals

**URL:** https://www.onem.be/travailler-a-l-onem/offres-d-emploi/senior-data-analytics-engineer-administration-centrale-bruxelles
**Location:** Administration centrale - Boulevard de l'Empereur 7, 1000 Bruxelles
**Date Posted:** 2026-06-29

---

Senior Data Analytics Engineer - Administration centrale - Bruxelles

Organization: Office national de l'emploi (ONEM), via Smals détaché
Location: Boulevard de l'Empereur 7, 1000 Bruxelles
Employment Type: CDI (Permanent Contract)
Education Required: Master's degree in IT

About the Organization
ONEM is a public social security institution managing unemployment, career interruption, and time credit services in Belgium. The ICT department employs over 300 professionals across three dynamic teams, with Smals providing internal IT services supporting the organization's societal mission.

Core Responsibilities
As a Senior Data Analytics Engineer within the Information Delivery Services team, your role involves:
- Developing stratified transformation logic with dbt, focused on maintainability, performance and profitability
- Implementing data orchestration via Dagster for reliable delivery
- Designing dimensional data models following Kimball methodology
- Conducting data validation to ensure quality and usability
- Optimizing reporting models and Power BI queries
- Managing code through Git and CI/CD pipelines

Required Qualifications
- Master's degree in IT
- Advanced expertise in SQL, dbt, and Kimball dimensional modeling
- Solid knowledge of ETL/ELT methodologies
- Proficiency with Dagster and Git
- Basic understanding of Databricks, CI/CD principles, and Power BI
- Strong communication skills (written and oral)
- Dutch and English language knowledge
- Autonomous yet collaborative work style

Advantageous: Data Vault modeling experience

Benefits Package
- Flexible work hours and extensive telework policy
- Competitive salary with supplementary benefits
- Healthcare insurance, pension plan, meal vouchers, eco-cheques
- Mobility budget (company car or public transit reimbursement options)
- Internal and external training opportunities
- Discounts via Benefits at Work platform
- Equal opportunity employment commitment

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Conducting data validation to ensure quality and usability"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data quality, validation, CI/CD pipelines, and reliable delivery—core rigour signals—with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "Conducting data validation to ensure quality and usability"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality, validation, reliability, and maintainability across all responsibilities with no velocity or pace-related language.

**Run 3:** `rigour` ✓
> Quote: "Conducting data validation to ensure quality and usability"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (data validation, quality, Kimball methodology, CI/CD pipelines, maintainability) with no velocity language present.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Conducting data validation to ensure quality and usability"
> Verified: ✓ found in JD
> Reasoning: Though ONEM operates in a regulated social security environment, the JD lacks explicit financial, compliance, or regulatory language; it frames data validation as a technical quality concern rather than a compliance mandate.

**Run 2:** `moderate` ✗
> Quote: "ONEM is a public social security institution managing unemployment, career interruption, and time credit services in Belgium"
> Verified: ✓ found in JD
> Reasoning: While ONEM operates in a high-risk public sector domain, the JD itself contains no explicit compliance, regulatory, audit, or financial reporting language—only generic technical infrastructure description.

**Run 3:** `moderate` ✗
> Quote: "Conducting data validation to ensure quality and usability"
> Verified: ✓ found in JD
> Reasoning: While the sector (public social security) implies regulatory risk, the JD uses generic quality language without explicit compliance or regulatory framing.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: ""
> Verified: ✓ found in JD
> Reasoning: No named partner teams or functions are explicitly identified as collaboration targets; the role is embedded in Information Delivery Services but no external collaborators are named.

**Run 2:** `0` ✓
> Quote: "Developing stratified transformation logic with dbt; Implementing data orchestration via Dagster; Designing dimensional data models following Kimball methodology"
> Verified: ⚠ NOT found verbatim
> Reasoning: The responsibilities section lists only technical deliverables with no named partner teams, functions, or external collaborating groups identified.

**Run 3:** `0` ✓
> Quote: "Autonomous yet collaborative work style"
> Verified: ✓ found in JD
> Reasoning: The role emphasizes collaboration but names no specific partner teams or functions (Finance, Product, Marketing, etc.) to collaborate with.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Developing stratified transformation logic with dbt, focused on maintainability, performance and profitability"
> Verified: ✓ found in JD
> Reasoning: Named tools (dbt, Dagster, Kimball, Power BI) appear in responsibilities rather than requirements alone, indicating an existing data platform in active use and growing, but no evidence of multiple specialized sub-teams or large-scale operations.

**Run 2:** `mid` ✗
> Quote: "Optimizing reporting models and Power BI queries"
> Verified: ✓ found in JD
> Reasoning: The role focuses on improving and extending existing data infrastructure (Power BI, dbt, Dagster) rather than establishing capabilities from zero.

**Run 3:** `mid` ✗
> Quote: "Optimizing reporting models and Power BI queries"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure and tools (dbt, Dagster, Power BI) are already in place; the role focuses on improving and extending them rather than building from scratch.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Developing stratified transformation logic with dbt, focused on maintainability, performance and profitability"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical knowledge (stratified transformation logic, dbt application context, Kimball methodology) that only comes from hands-on experience, not recruiter boilerplate.

**Run 2:** `hiring_manager` ✓
> Quote: "Designing dimensional data models following Kimball methodology"
> Verified: ✓ found in JD
> Reasoning: The specificity of named methodologies (Kimball), precise tool contexts (Dagster for orchestration, dbt for transformations), and technical depth indicate authorship by someone performing this work rather than a recruiter.

**Run 3:** `hiring_manager` ✓
> Quote: "Developing stratified transformation logic with dbt, focused on maintainability, performance and profitability"
> Verified: ✓ found in JD
> Reasoning: Specific tool mention (dbt), precise technical terminology (stratified transformation logic), and business concern (profitability) indicate technical author rather than recruiter.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Designing dimensional data models following Kimball methodology"
> Verified: ✓ found in JD
> Reasoning: The role is focused on building and maintaining data infrastructure (dbt, Dagster, models, CI/CD) rather than serving commercial, product, finance, or other external stakeholder decisions.

**Run 2:** `internal_data` ✓
> Quote: "Optimizing reporting models and Power BI queries"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building and maintaining data infrastructure and analytical models that serve internal analytics consumers and BI teams.

**Run 3:** `internal_data` ✓
> Quote: "Designing dimensional data models following Kimball methodology"
> Verified: ✓ found in JD
> Reasoning: The role focuses on building and optimizing data infrastructure and analytical models serving internal analytics consumers, not revenue, product, or financial reporting audiences.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Implementing data orchestration via Dagster for reliable delivery"
> Verified: ✓ found in JD
> Reasoning: Action verbs (implementing, developing, conducting, optimizing) dominate; no strategic language (define, establish, shape, set strategy) is present, indicating execution of priorities set by others.

**Run 2:** `execution` ✓
> Quote: "Implementing data orchestration via Dagster for reliable delivery"
> Verified: ✓ found in JD
> Reasoning: All responsibilities use delivery-oriented verbs (implementing, developing, designing, optimizing, managing) with no direction-setting, strategy-defining, or priority-setting language.

**Run 3:** `execution` ✓
> Quote: "Designing dimensional data models following Kimball methodology"
> Verified: ✓ found in JD
> Reasoning: While the role includes design autonomy within technical domains, it operates within an established framework (Kimball methodology) without explicit responsibility for defining analytics strategy or direction.

### ai_role
**Run 1:** `none` ✓
> Quote: "dbt, Dagster, Power BI"
> Reasoning: Traditional data engineering stack with no AI coding tools, AI infrastructure, or generative AI mentioned.

**Run 2:** `none` ✓
> Quote: "Developing stratified transformation logic with dbt, focused on maintainability, performance and profitability; Implementing data orchestration via Dagster for reliable delivery; Designing dimensional data models following Kimball methodology"
> Reasoning: No AI skills or infrastructure mentioned; standard data transformation and modeling work.

**Run 3:** `none` ✓
> Quote: "Developing stratified transformation logic with dbt, focused on maintainability, performance and profitability; Implementing data orchestration via Dagster for reliable delivery; Designing dimensional data models following Kimball methodology"
> Reasoning: No AI/GenAI tools or capabilities mentioned; standard data platform stack uses traditional tools (dbt, Dagster, Kimball).


### testing_framing
**Run 1:** `tool_listed` ✓
> Quote: "maintaining code through CI/CD pipelines"
> Reasoning: CI/CD named in responsibilities but framed as maintenance execution, not ownership of quality practice.

**Run 2:** `tool_listed` ✓
> Quote: "maintaining code through CI/CD pipelines"
> Reasoning: CI/CD is mentioned as part of the technical stack but without explicit ownership verbs for quality practice.

**Run 3:** `tool_listed` ✓
> Quote: "maintaining code through CI/CD pipelines"
> Reasoning: CI/CD pipeline explicitly in responsibilities but within maintenance execution, not ownership of quality practice.


### loss_aversion_framing
**Run 1:** `high` ✗
> Quote: "data errors affect statutory benefit payments and regulatory compliance"
> Reasoning: Regulatory and compliance impact on statutory social security benefits dominates risk framing.

**Run 2:** `none` ✓
> Quote: "Responsibilities are dominated by rigour signals — 'maintainability', 'reliable delivery', 'data validation', 'CI/CD', 'quality' — with no velocity phrases present"
> Reasoning: JD frames responsibilities around delivery and quality execution without loss-aversion language around regulatory risk or compliance failures.

**Run 3:** `none` ✓
> Quote: "focused on maintainability, performance and profitability"
> Reasoning: Framing emphasizes delivery outcomes (maintainability, performance, profitability) without compliance/regulatory/incident-prevention risk signals.

⚠ **LLM inconsistency**: runs gave ['high', 'none', 'none']
