# Trace: 2026-06-30_fyld_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Fyld

**URL:** https://www.linkedin.com/jobs/view/4431082635/
**Location:** Lisbon Metropolitan Area, Portugal
**Date Posted:** 2026-06-30

---

Analytics Engineer at Fyld

Company: Fyld
Position: Analytics Engineer
Location: Lisbon Metropolitan Area
Employment Type: Full-time
Seniority Level: Mid-Senior
Posted: 22 hours ago

Job Description

Fyld is a Portuguese consulting company specializing in IT services that brings professionals into various tech domains. The organization follows sports management principles to foster peak performance among consultants, emphasizing training and excellence.

Key Requirements

Education & Experience:
- Bachelor's degree in Computer Science, IT, Engineering, or related field
- 3+ years in Analytics Engineering, Data Engineering, or BI roles

Technical Skills:
- Advanced SQL proficiency including CTEs, window functions, and query optimization
- Data modeling expertise with dimensional schemas, star schemas, and SCD patterns
- Hands-on experience with Spark and Delta Lake for transformations
- Microsoft Fabric including Lakehouse and Warehouse optimization
- Power BI semantic model knowledge
- Data quality, validation, monitoring, and observability skills
- Secure data access patterns including Row-Level Security
- Azure Data Factory or Microsoft Fabric pipelines
- Python for scripting and automation
- Git and CI/CD pipeline experience
- dbt familiarity is advantageous
- Fluent English (mandatory)

What They Offer
- Continuous learning opportunities
- Access to modern technology projects
- Collaborative team environment

Application: Candidates should send CVs to: sofia.neves@fyld.pt

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 0 | 0 | 0 | 0 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | recruiter | recruiter | recruiter | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | tool_listed | tool_listed | tool_listed | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Data quality, validation, monitoring, and observability skills"
> Verified: ✓ found in JD
> Reasoning: The only activity-oriented language emphasizes quality practices without any velocity signals like fast-paced, iteration, or shipping speed.

**Run 2:** `rigour` ✓
> Quote: "Data quality, validation, monitoring, and observability skills"
> Verified: ✓ found in JD
> Reasoning: The emphasis on quality, validation, monitoring, and observability in core technical requirements indicates rigour is the primary orientation.

**Run 3:** `rigour` ✓
> Quote: "Data quality, validation, monitoring, and observability skills"
> Verified: ✓ found in JD
> Reasoning: Quality, validation, and monitoring are core rigour signals; no velocity language like 'fast-paced' or 'move fast' appears.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Portuguese consulting company specializing in IT services"
> Verified: ✓ found in JD
> Reasoning: General IT consulting without financial reporting, regulatory, compliance, or audit language indicates moderate domain risk typical of business decision-support roles.

**Run 2:** `moderate` ✓
> Quote: "Fyld is a Portuguese consulting company specializing in IT services that brings professionals into various tech domains"
> Verified: ✓ found in JD
> Reasoning: The JD provides no explicit financial, compliance, or regulatory risk signals, and consulting placement across generic tech domains suggests moderate risk typical of standard analytics roles.

**Run 3:** `moderate` ✓
> Quote: "a Portuguese consulting company specializing in IT services"
> Verified: ✓ found in JD
> Reasoning: IT consulting serves business needs but lacks high-risk signals (financial reporting, regulatory compliance, healthcare).

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "None"
> Verified: ✓ found in JD
> Reasoning: The JD uses generic terms like 'collaborative team environment' but names no specific teams, functions, or partner groups.

**Run 2:** `0` ✓
> Quote: "Collaborative team environment"
> Verified: ✓ found in JD
> Reasoning: While collaboration is mentioned, no specific named teams or functions are explicitly identified as collaboration partners.

**Run 3:** `0` ✓
> Quote: "Collaborative team environment"
> Verified: ✓ found in JD
> Reasoning: No specific named teams, functions, or partner groups are identified in the JD.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Hands-on experience with Spark and Delta Lake for transformations"
> Verified: ✓ found in JD
> Reasoning: The expectation to work hands-on with established enterprise tools indicates infrastructure already exists and the team is operating at scale.

**Run 2:** `mid` ✓
> Quote: "3+ years in Analytics Engineering, Data Engineering, or BI roles"
> Verified: ✓ found in JD
> Reasoning: The requirement for 3+ years of specialized experience suggests a company with established data practices rather than a greenfield situation or first-hire scenario.

**Run 3:** `mid` ✓
> Quote: "3+ years in Analytics Engineering, Data Engineering, or BI roles"
> Verified: ✓ found in JD
> Reasoning: Hiring for a mid-senior person with existing technical tools (Spark, Delta Lake, Fabric) implies an established team, not greenfield.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Collaborative team environment"
> Verified: ✓ found in JD
> Reasoning: Generic benefits language combined with a skills checklist and complete absence of contextual responsibilities suggests recruiter template rather than hiring manager specificity.

**Run 2:** `recruiter` ✓
> Quote: "Advanced SQL proficiency including CTEs, window functions, and query optimization; Data modeling expertise with dimensional schemas, star schemas, and SCD patterns; Hands-on experience with Spark and Delta Lake for transformations"
> Verified: ✓ found in JD
> Reasoning: The skills are listed with technical specificity but lack contextual application details about actual work problems or how these tools apply to the company's specific needs.

**Run 3:** `recruiter` ✓
> Quote: "Collaborative team environment"
> Verified: ✓ found in JD
> Reasoning: No responsibilities section exists; the JD is pure requirements listing with no technical context about what the role actually does on a typical day.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Microsoft Fabric including Lakehouse and Warehouse optimization"
> Verified: ✓ found in JD
> Reasoning: The emphasis on data infrastructure, platform tools, ETL pipelines, and data modeling indicates service to the data function itself rather than external business stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Hands-on experience with Spark and Delta Lake for transformations; Microsoft Fabric including Lakehouse and Warehouse optimization"
> Verified: ✓ found in JD
> Reasoning: The emphasis on transformation infrastructure, data platform tools, and observability suggests the role primarily serves internal data consumers and platform infrastructure.

**Run 3:** `internal_data` ✓
> Quote: "Data quality, validation, monitoring, and observability skills"
> Verified: ✓ found in JD
> Reasoning: Infrastructure and data quality focus with no mention of revenue, products, or finance stakeholders points to internal data platform work.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Collaborative team environment"
> Verified: ✓ found in JD
> Reasoning: The absence of strategic ownership language and the consulting/staffing context indicate this role executes scoped work rather than sets direction.

**Run 2:** `execution` ✓
> Quote: "Hands-on experience with Spark and Delta Lake for transformations; Azure Data Factory or Microsoft Fabric pipelines"
> Verified: ✓ found in JD
> Reasoning: The focus on hands-on technical execution with specific transformation and pipeline tools suggests an execution-oriented role rather than strategic ownership.

**Run 3:** `execution` ✓
> Quote: "Collaborative team environment"
> Verified: ✓ found in JD
> Reasoning: No verbs like 'define', 'establish', or 'own' appear; the role is framed as collaborative execution rather than strategic direction-setting.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No AI tools, practices, or candidate capabilities related to AI are mentioned anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI, ML, machine learning, or AI-assisted coding tools expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, GenAI applications, ML pipelines, or AI-related candidate expectations appears anywhere.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `tool_listed` ✗
> Quote: "Data quality, validation, monitoring, and observability skills"
> Verified: ✓ found in JD
> Reasoning: Data quality practices appear as required skills in a checklist without ownership verbs or specific responsibility framing.

**Run 2:** `tool_listed` ✗
> Quote: "Data quality, validation, monitoring, and observability skills"
> Verified: ✓ found in JD
> Reasoning: Data quality and observability practices are listed as required technical skills rather than framed as an ownership responsibility the role defines.

**Run 3:** `tool_listed` ✗
> Quote: "Data quality, validation, monitoring, and observability skills"
> Verified: ✓ found in JD
> Reasoning: Quality and monitoring appear as required skills in the technical stack, not as responsibilities the candidate owns or frameworks they define.

⚠ **Disagreement**: manual=`` vs LLM majority=`tool_listed`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Data quality, validation, monitoring, and observability skills"
> Verified: ✓ found in JD
> Reasoning: Emphasis on data quality and observability reflects concern for operational reliability and pipeline stability without compliance or stakeholder-trust language.

**Run 2:** `moderate` ✗
> Quote: "Data quality, validation, monitoring, and observability skills; Secure data access patterns including Row-Level Security"
> Verified: ✓ found in JD
> Reasoning: Emphasis on operational reliability, observability, and secure access suggests moderate concern for production stability and data governance rather than high-risk compliance framing.

**Run 3:** `moderate` ✗
> Quote: "Data quality, validation, monitoring, and observability skills"
> Verified: ✓ found in JD
> Reasoning: Emphasis on quality and observability signals concern for operational reliability, but lacks dominant risk/compliance framing.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
