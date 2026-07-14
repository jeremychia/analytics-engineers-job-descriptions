# Trace: 2026-07-03_riskpoint-group_business-intelligence-bi-developer

## JD text (fed to classifier, Layer B stripped)

```
# Business Intelligence (BI) Developer — The RiskPoint Group

**URL:** https://rpgroup.com/open-positions/business-intelligence-bi-developer/
**Location:** Copenhagen, Denmark
**Date Posted:** 2026-07-03

---

Business Intelligence (BI) Developer

The RiskPoint Group seeks a Business Intelligence Developer to support the company's growth strategy within the Business Intelligence team, which currently has three members across Europe.

Key Responsibilities
• Collaborating with analysts & internal stakeholders to understand data requirements
• Designing and maintaining scalable data platforms for business needs
• Implementing ETL integration solutions
• Ensuring data quality and integrity across platforms
• Monitoring and troubleshooting data issues
• Staying current with industry trends to improve data architecture

Required Qualifications
• Bachelor's degree in Computer Science, IT, or related field
• 5+ years professional BI development experience
• Expert SQL proficiency with platforms like PostgreSQL, Microsoft SQL, Snowflake
• Cloud platform deployment experience (AWS, Azure, Google Cloud)
• Proficiency in Python, Go, or Java
• BI tool experience: Power BI, Terraform, or Tableau
• ETL design and implementation expertise
• Data modeling and database design knowledge
• Strong team collaboration and stakeholder communication skills

Preferred Qualifications
• Large-scale data processing (Hadoop, Spark, Iceberg)
• Modern tools: Trino, dbt
• Terraform infrastructure automation
• DevOps methodologies and CI/CD pipelines

Additional Requirements
• Current Denmark residency with work permits
• Fluent English (spoken and written)
• Basic Danish knowledge preferred

Application Deadline: July 8, 2026

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 1 | 1 | 1 | 100% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | recruiter | recruiter | recruiter | recruiter | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Ensuring data quality and integrity across platforms"
> Verified: ✓ found in JD
> Reasoning: The responsibility section emphasizes data quality and integrity as a core expectation with no velocity language present, signaling a rigour orientation.

**Run 2:** `rigour` ✗
> Quote: "Ensuring data quality and integrity across platforms"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data quality and integrity with zero velocity signals like fast-paced or rapid delivery, clearly prioritizing rigour.

**Run 3:** `rigour` ✗
> Quote: "Ensuring data quality and integrity across platforms"
> Verified: ✓ found in JD
> Reasoning: Emphasis on data quality, integrity, and monitoring indicates rigour focus with no velocity or speed signals present.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "support the company's growth strategy"
> Verified: ✓ found in JD
> Reasoning: Although the company name suggests a risk-oriented business, the JD language lacks explicit financial reporting, compliance, or regulatory signals, defaulting to moderate risk per the tie-breaker rule.

**Run 2:** `moderate` ✓
> Quote: "Ensuring data quality and integrity across platforms"
> Verified: ✓ found in JD
> Reasoning: Although the company name suggests a risk-related sector, the JD language is generic BI infrastructure work with no explicit financial reporting, compliance, or regulatory signals.

**Run 3:** `moderate` ✓
> Quote: "Implementing ETL integration solutions"
> Verified: ✓ found in JD
> Reasoning: Standard BI and ETL work without explicit financial reporting, compliance, or regulatory framing indicates moderate domain risk.

### collaboration_width
**Manual:** `2`

**Run 1:** `1` ✗
> Quote: "analysts"
> Verified: ✓ found in JD
> Reasoning: Only 'analysts' is a named partner team; 'internal stakeholders' is generic boilerplate and does not count.

**Run 2:** `1` ✗
> Quote: "analysts"
> Verified: ✓ found in JD
> Reasoning: Only analysts is explicitly named as a distinct team; internal stakeholders is generic and does not count as a named partner.

**Run 3:** `1` ✗
> Quote: "analysts"
> Verified: ✓ found in JD
> Reasoning: Only analysts are explicitly named as a partner team; internal stakeholders is generic and does not count as a named function.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Business Intelligence team, which currently has three members across Europe"
> Verified: ✓ found in JD
> Reasoning: The team exists with multiple members but is still small without evidence of sub-teams or mature scale, placing it in the mid stage of development.

**Run 2:** `mid` ✗
> Quote: "Business Intelligence team, which currently has three members across Europe"
> Verified: ✓ found in JD
> Reasoning: The team already exists with 3 members and is actively hiring for growth, indicating mid-stage development with emerging infrastructure.

**Run 3:** `mid` ✗
> Quote: "Business Intelligence team, which currently has three members across Europe"
> Verified: ✓ found in JD
> Reasoning: A small but established team with three members indicates early growth stage rather than early-stage or mature data organization.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Collaborating with analysts & internal stakeholders to understand data requirements"
> Verified: ✓ found in JD
> Reasoning: Responsibilities consist entirely of generic boilerplate action verbs without technical specificity about tools, scale, or methodology, indicating recruiter authorship.

**Run 2:** `recruiter` ✓
> Quote: "Implementing ETL integration solutions"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs with no technical specificity about tools, workflows, or actual work done; all named technologies are confined to the requirements list.

**Run 3:** `recruiter` ✓
> Quote: "Implementing ETL integration solutions"
> Verified: ✓ found in JD
> Reasoning: Generic action verb without technical context about specific patterns, tools, or scale indicates recruiter authorship of responsibilities.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Collaborating with analysts & internal stakeholders to understand data requirements"
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is designing and maintaining data platforms for the analytics function itself, making internal data teams and analysts the primary audience.

**Run 2:** `internal_data` ✓
> Quote: "Designing and maintaining scalable data platforms for business needs"
> Verified: ✓ found in JD
> Reasoning: The primary mission is building and maintaining data infrastructure platforms for internal consumption rather than serving a specific business function.

**Run 3:** `internal_data` ✓
> Quote: "Designing and maintaining scalable data platforms for business needs"
> Verified: ✓ found in JD
> Reasoning: Focus on building and maintaining data platforms serving analysts and the BI team indicates primary audience is the data function itself.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Implementing ETL integration solutions"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize execution verbs (implementing, monitoring, troubleshooting) without strategic direction-setting language like 'define', 'establish', or 'architect'.

**Run 2:** `execution` ✓
> Quote: "Collaborating with analysts & internal stakeholders to understand data requirements"
> Verified: ✓ found in JD
> Reasoning: The role is framed as supporting and responding to requirements from others, with no language of defining strategy, owning direction, or shaping how analytics is delivered.

**Run 3:** `execution` ✓
> Quote: "Collaborating with analysts & internal stakeholders to understand data requirements"
> Verified: ✓ found in JD
> Reasoning: The role receives and collaborates to understand requirements from others rather than setting strategic direction.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no signals for AI-assisted coding tools, AI-enabled data infrastructure, or any AI skill expectations of the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD lists general programming languages (Python, Go, Java) but contains no mention of AI coding tools, AI-assisted workflows, or AI-ready data infrastructure.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted coding, AI-ready data infrastructure, or AI product development in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Ensuring data quality and integrity across platforms"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an owned responsibility using the action verb 'ensuring', indicating the candidate is accountable for this practice.

**Run 2:** `responsibility` ✗
> Quote: "Ensuring data quality and integrity across platforms"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a responsibility the candidate owns through the action verb Ensuring, indicating accountability for the outcome rather than tool usage.

**Run 3:** `responsibility` ✗
> Quote: "Ensuring data quality and integrity across platforms"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as a responsibility the candidate owns and ensures operationally, using an active ownership verb.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Ensuring data quality and integrity across platforms"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and data quality are concerns, but the JD lacks compliance, regulatory, or stakeholder-trust framing that would signal high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Monitoring and troubleshooting data issues"
> Verified: ✓ found in JD
> Reasoning: Operational reliability through monitoring and data quality is a stated concern but is framed as a normal responsibility rather than a primary compliance or stakeholder-trust risk.

**Run 3:** `moderate` ✗
> Quote: "Ensuring data quality and integrity across platforms"
> Verified: ✓ found in JD
> Reasoning: Data quality and monitoring are mentioned as operational concerns but secondary to platform design and delivery responsibilities.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
