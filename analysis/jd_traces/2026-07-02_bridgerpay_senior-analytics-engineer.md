# Trace: 2026-07-02_bridgerpay_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — BridgerPay

**URL:** https://www.linkedin.com/jobs/view/4417929952/
**Location:** Limassol, Cyprus
**Date Posted:** 2026-07-02

---

# Senior Analytics Engineer at BridgerPay

Location: Limassol, Cyprus (Full-time, Onsite)
Salary: Not stated

## Key Responsibilities
Engineering Foundation Phase:
- Optimize batch infrastructure and establish Git version control
- Implement CI/CD practices using fully managed GCP services
- Build and scale data warehouse core and pipelines utilizing BigQuery and managed cloud services
- Prepare data ecosystem for real-time AI modeling

Analytics Engineering Phase:
- Own the semantic layer, writing production-grade LookML
- Build complex data models serving clean data to AI models, routing engines, and BI tools
- Maintain Looker and business intelligence layer with full ownership
- Introduce robust CI/CD frameworks, unit testing, and security protocols
- Ensure PCI-DSS/SOC2 compliance while optimizing costs
- Handle confidential data per organizational security policies

## Requirements
Experience:
- 5+ years in Analytics Engineering, Data Engineering, or BI Development
- Proven track record building data warehouses and semantic layers from scratch

Technical Skills:
- Expert-level SQL and Python
- Deep knowledge of API extractions, data modeling (dbt/Dataform), and Git version control
- Strong GCP experience: BigQuery, Dataform, Looker, Cloud Composer/Airflow
- Proficiency with generative AI coding assistants
- Fluent English required

Soft Skills:
- High resilience and extreme ownership focus
- Strong operational mindset regarding data SLAs and uptime
- Excellent technical communication

## Benefits (Cyprus Office)
Competitive salary, breakfast, lunch allowance, birthday day-off, private medical insurance, ESOP, career growth opportunities, modern Limassol office with pool, snacks, team events, employee referral programme, relocation support to Cyprus, flexible remote start option (3-6 months before onsite transition).

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | early | mid | early | mid | 33% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | high | moderate | high | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Introduce robust CI/CD frameworks, unit testing, and security protocols"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes compliance, testing, security, and production-grade quality as core responsibilities, with no velocity language like 'fast-paced' or 'ship quickly'.

**Run 2:** `rigour` ✓
> Quote: "Introduce robust CI/CD frameworks, unit testing, and security protocols"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing, security protocols, and compliance as core expectations with no velocity-oriented language, indicating a rigour-focused role.

**Run 3:** `rigour` ✓
> Quote: "Introduce robust CI/CD frameworks, unit testing, and security protocols"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (testing, CI/CD, compliance, security protocols) dominate the responsibilities with no velocity language present.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "Ensure PCI-DSS/SOC2 compliance while optimizing costs"
> Verified: ✓ found in JD
> Reasoning: This is a fintech company with explicit regulatory compliance requirements (PCI-DSS/SOC2), meaning data errors directly affect regulatory standing and financial transactions.

**Run 2:** `high` ✓
> Quote: "Ensure PCI-DSS/SOC2 compliance while optimizing costs"
> Verified: ✓ found in JD
> Reasoning: PCI-DSS compliance is explicit regulatory requirement for payment processing, indicating high financial/regulatory risk domain.

**Run 3:** `high` ✓
> Quote: "Ensure PCI-DSS/SOC2 compliance while optimizing costs"
> Verified: ✓ found in JD
> Reasoning: PCI-DSS compliance requirement explicitly signals financial/payment processing domain with direct regulatory risk.

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "Build complex data models serving clean data to AI models, routing engines, and BI tools"
> Verified: ✓ found in JD
> Reasoning: The JD describes the role as building infrastructure that serves systems and tools, but does not name specific cross-functional teams or departments as explicit collaboration partners.

**Run 2:** `0` ✓
> Quote: "No explicitly named partner teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: While the role serves AI models, routing engines, and BI tools, no distinct partner teams are explicitly named (e.g., Finance, Product, Data Science, Engineering).

**Run 3:** `0` ✓
> Quote: "No named teams identified"
> Verified: ⚠ NOT found verbatim
> Reasoning: No explicitly named partner teams or functions (e.g., Finance, Product, Engineering) appear in the JD; technical artifacts like AI models and BI tools do not count as partner teams.

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Build and scale data warehouse core and pipelines utilizing BigQuery and managed cloud services"
> Verified: ✓ found in JD
> Reasoning: The JD references existing tools (BigQuery, Looker) that need to be maintained and optimized, but requires significant building and scaling of core infrastructure, indicating a team in growth phase rather than greenfield or fully mature.

**Run 2:** `early` ✓
> Quote: "Proven track record building data warehouses and semantic layers from scratch"
> Verified: ✓ found in JD
> Reasoning: The requirement to build infrastructure from scratch and the two-phase foundational structure indicate an early-stage data function being established.

**Run 3:** `mid` ✗
> Quote: "Build and scale data warehouse core and pipelines utilizing BigQuery and managed cloud services"
> Verified: ✓ found in JD
> Reasoning: Named tools in responsibilities and 'scale' language signal an existing but growing data function, not early-stage greenfield construction.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

⚠ **LLM inconsistency**: runs gave ['mid', 'early', 'mid']

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Own the semantic layer, writing production-grade LookML; Build complex data models serving clean data to AI models, routing engines, and BI tools"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain specific technical depth about tools (LookML, Looker, BigQuery), methodology (semantic layer, data warehouse), and a two-phase progression that reflects someone who has actually done this work.

**Run 2:** `hiring_manager` ✓
> Quote: "Own the semantic layer, writing production-grade LookML"
> Verified: ✓ found in JD
> Reasoning: The specific technical responsibilities (LookML, BigQuery, Dataform, semantic layer ownership) demonstrate domain knowledge that only a hiring manager would possess.

**Run 3:** `hiring_manager` ✓
> Quote: "Own the semantic layer, writing production-grade LookML"
> Verified: ✓ found in JD
> Reasoning: Specific tool names (LookML, Dataform, BigQuery), precise compliance standards (PCI-DSS/SOC2), and detailed technical context indicate direct experience from a hiring manager.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build complex data models serving clean data to AI models, routing engines, and BI tools"
> Verified: ✓ found in JD
> Reasoning: The primary output is building the data platform and semantic layer that internal systems (AI models, routing engines, BI tools) consume, not directly serving commercial, product, or finance stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Build complex data models serving clean data to AI models, routing engines, and BI tools"
> Verified: ✓ found in JD
> Reasoning: The role is focused on building data infrastructure and semantic layers that internal data consumers (AI models, BI tools) rely on, rather than serving commercial or finance teams directly.

**Run 3:** `internal_data` ✓
> Quote: "Maintain Looker and business intelligence layer with full ownership"
> Verified: ✓ found in JD
> Reasoning: All primary responsibilities focus on building and maintaining the data platform infrastructure itself (warehouse, semantic layer, BI layer) that internal systems and users consume.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Own the semantic layer; Introduce robust CI/CD frameworks, unit testing, and security protocols"
> Verified: ✓ found in JD
> Reasoning: The role is expected to own and establish key technical practices and infrastructure layers within defined domains, not merely execute work set by others.

**Run 2:** `strategic` ✓
> Quote: "Own the semantic layer, writing production-grade LookML"
> Verified: ✓ found in JD
> Reasoning: The use of 'own' indicates the candidate is expected to set direction and define how the semantic layer is built, not execute direction set by others.

**Run 3:** `strategic` ✓
> Quote: "Introduce robust CI/CD frameworks, unit testing, and security protocols"
> Verified: ✓ found in JD
> Reasoning: The verb 'introduce' (not 'implement' or 'adopt') and scope across multiple platform domains signal the role defines practices and direction rather than executing predetermined plans.

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Prepare data ecosystem for real-time AI modeling; Build complex data models serving clean data to AI models"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure that AI systems consume, preparing the ecosystem and models specifically for AI use; the requirement for generative AI coding assistant proficiency is secondary to this core enabler function.

**Run 2:** `ai_enabler` ✗
> Quote: "Prepare data ecosystem for real-time AI modeling"
> Verified: ✓ found in JD
> Reasoning: Both ai_user (proficiency with generative AI coding assistants) and ai_enabler (prepare data infrastructure for AI systems) signals are present; ai_enabler classification takes precedence.

**Run 3:** `ai_enabler` ✗
> Quote: "Prepare data ecosystem for real-time AI modeling"
> Verified: ✓ found in JD
> Reasoning: The role requires proficiency with AI coding assistants (ai_user signal) but prioritizes building data infrastructure that AI systems consume (ai_enabler responsibility).

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Introduce robust CI/CD frameworks, unit testing, and security protocols"
> Verified: ✓ found in JD
> Reasoning: Unit testing is framed as something the candidate will introduce and own as part of establishing CI/CD frameworks, not merely a tool skill requirement.

**Run 2:** `responsibility` ✗
> Quote: "Introduce robust CI/CD frameworks, unit testing, and security protocols"
> Verified: ✓ found in JD
> Reasoning: Testing and CI/CD are framed as responsibilities the candidate will 'introduce' and establish, indicating ownership rather than just tool usage.

**Run 3:** `responsibility` ✗
> Quote: "Introduce robust CI/CD frameworks, unit testing, and security protocols"
> Verified: ✓ found in JD
> Reasoning: The verb 'introduce' frames unit testing as a responsibility the candidate owns and defines as a new practice, not as a tool they will use.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `high` ✗
> Quote: "Ensure PCI-DSS/SOC2 compliance while optimizing costs"
> Verified: ✓ found in JD
> Reasoning: Regulatory compliance (PCI-DSS/SOC2) is framed as a core responsibility with an ownership verb ('Ensure'), not just operational reliability, reflecting fear of regulatory exposure and data trust violations inherent to fintech.

**Run 2:** `moderate` ✗
> Quote: "Ensure PCI-DSS/SOC2 compliance while optimizing costs"
> Verified: ✓ found in JD
> Reasoning: Compliance and operational reliability are material concerns but the primary role framing is building data infrastructure, not preventing regulatory or financial catastrophe.

**Run 3:** `high` ✗
> Quote: "Ensure PCI-DSS/SOC2 compliance while optimizing costs"
> Verified: ✓ found in JD
> Reasoning: Explicit regulatory compliance (PCI-DSS/SOC2) and repeated operational reliability framing (SLAs, uptime, security protocols) throughout indicate high risk aversion around regulatory and data security failure.

⚠ **Disagreement**: manual=`` vs LLM majority=`high`

⚠ **LLM inconsistency**: runs gave ['high', 'moderate', 'high']
