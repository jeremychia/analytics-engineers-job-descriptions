# Trace: 2026-06-30_avalanche-studios_senior-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior Analytics Engineer — Avalanche Studios Group

**URL:** https://avalanchestudios.com/jobs/557484be-0668-4a31-a06b-84a52edbdd51
**Location:** Stockholm, Sweden (hybrid)
**Date Posted:** 2026-06-30

---

Senior Analytics Engineer - Avalanche Studios Group

Company: Avalanche Studios Group
Job Title: Senior Analytics Engineer
Location: Stockholm (Södermalm office)
Salary: Not specified

Key Responsibilities

The role focuses on data architecture development. Candidates will 'extract, clean, and transform data from various sources' and collaborate with data scientists to provide reliable datasets. They must design data models capturing gaming KPIs and user profiles while ensuring 'accuracy, compliance, scalability, and long-term usability.'

Additional duties include maintaining documentation, monitoring pipelines for 'high availability and performance,' conducting code reviews, and staying current with industry trends.

Required Qualifications

Candidates need a Bachelor's or Master's degree in Computer Science or related field with 5+ years as an Analytics Engineer or similar role. Essential skills include:
- Strong SQL proficiency and experience with 'large data sets across multiple teams'
- ETL/ELT tools (DBT preferred)
- Cloud platforms (GCP preferred)
- 'Infrastructure as Code' experience

Culture Notes

The company emphasizes that underrepresented groups shouldn't hesitate to apply if they lack every requirement. Avalanche values 'drive to learn and interest in tackling challenges' over perfect credentials. The hybrid model requires office presence Mondays, Tuesdays, and Thursdays.

Application: Submit CV in English via their careers portal. No relocation assistance available.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 1 | 1 | 1 | 100% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | recruiter | recruiter | mixed | recruiter | 33% | ✓ |
| stakeholder_orientation | product | internal_data | internal_data | internal_data | 100% | ✗ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | responsibility | absent | 33% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "ensuring 'accuracy, compliance, scalability, and long-term usability.'"
> Verified: ✓ found in JD
> Reasoning: Responsibilities emphasize data accuracy, compliance, reliability, code reviews, and performance monitoring with no counterbalancing velocity signals.

**Run 2:** `rigour` ✓
> Quote: "ensuring accuracy, compliance, scalability, and long-term usability"
> Verified: ⚠ NOT found verbatim
> Reasoning: Multiple rigour signals (accuracy, compliance, scalability, high availability, code reviews) in responsibilities with no velocity language anywhere in the JD.

**Run 3:** `rigour` ✓
> Quote: "ensuring 'accuracy, compliance, scalability, and long-term usability.'"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (accuracy, compliance, monitoring for performance, code reviews) dominate with no velocity language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "ensuring 'accuracy, compliance, scalability, and long-term usability.'"
> Verified: ✓ found in JD
> Reasoning: Gaming analytics affects business decisions and involves compliance concerns (likely GDPR for user profiles) but lacks the financial reporting or regulatory risk of high-risk sectors.

**Run 2:** `moderate` ✓
> Quote: "design data models capturing gaming KPIs and user profiles"
> Verified: ✓ found in JD
> Reasoning: Gaming analytics role without financial reporting, regulatory, or compliance language suggests data errors affect business decisions but not regulatory or financial reporting.

**Run 3:** `moderate` ✓
> Quote: "accuracy, compliance, scalability, and long-term usability"
> Verified: ✓ found in JD
> Reasoning: Gaming analytics affects business decisions about player behavior and monetization but not financial reporting or regulatory compliance; compliance here refers to data governance, not regulatory exposure.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "data scientists"
> Verified: ✓ found in JD
> Reasoning: Only data scientists are explicitly named as a collaboration partner in the responsibilities section.

**Run 2:** `1` ✓
> Quote: "collaborate with data scientists"
> Verified: ✓ found in JD
> Reasoning: Only 'data scientists' is explicitly named as a partner function; no other named teams, departments, or functions mentioned.

**Run 3:** `1` ✓
> Quote: "collaborate with data scientists"
> Verified: ✓ found in JD
> Reasoning: Only one named partner function explicitly identified in the responsibilities.

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "monitoring pipelines for 'high availability and performance,' conducting code reviews"
> Verified: ✓ found in JD
> Reasoning: The team has operational infrastructure with active maintenance and governance (code reviews, documentation) but no signals of multiple specialized sub-teams or extreme scale.

**Run 2:** `mid` ✓
> Quote: "The role focuses on data architecture development"
> Verified: ✓ found in JD
> Reasoning: Responsibilities reference existing infrastructure (monitoring pipelines, maintaining documentation) and named tools (DBT, GCP) in use, suggesting evolution of an established function rather than greenfield build.

**Run 3:** `mid` ✓
> Quote: "monitoring pipelines for 'high availability and performance,'"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure (pipelines, DBT tools) is established and being maintained; the role involves extending and operating existing systems rather than building from zero or managing a mature large-scale team.

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "extract, clean, and transform data from various sources"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs ('extract, clean, transform', 'maintaining', 'monitoring') without specific technical context about actual systems, data models, or problems.

**Run 2:** `mixed` ✗
> Quote: "design data models capturing gaming KPIs and user profiles while ensuring accuracy, compliance, scalability, and long-term usability"
> Verified: ⚠ NOT found verbatim
> Reasoning: Combines specific technical context (gaming domain, data modeling) with generic phrasing typical of recruiter templates (extract/clean/transform boilerplate).

**Run 3:** `recruiter` ✓
> Quote: "maintaining documentation, monitoring pipelines for 'high availability and performance,' conducting code reviews, and staying current with industry trends."
> Verified: ✓ found in JD
> Reasoning: Responsibilities are predominantly generic action verbs (maintain, monitor, conduct, staying current) with minimal technical specificity about how the work is done.

⚠ **LLM inconsistency**: runs gave ['recruiter', 'mixed', 'recruiter']

### stakeholder_orientation
**Manual:** `product`

**Run 1:** `internal_data` ✗
> Quote: "collaborate with data scientists to provide reliable datasets"
> Verified: ✓ found in JD
> Reasoning: The role primarily serves the data platform and data consumers (data scientists, analytics infrastructure) rather than commercial, product, or finance stakeholders.

**Run 2:** `internal_data` ✗
> Quote: "collaborate with data scientists to provide reliable datasets"
> Verified: ✓ found in JD
> Reasoning: Role serves the data team and downstream analytics consumers through infrastructure and modeling work, not directly serving commercial, product, or finance functions.

**Run 3:** `internal_data` ✗
> Quote: "collaborate with data scientists to provide reliable datasets"
> Verified: ✓ found in JD
> Reasoning: The primary audience is the internal data function (data scientists and analysts) who consume the data models and infrastructure built by this role.

⚠ **Disagreement**: manual=`product` vs LLM majority=`internal_data`

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "extract, clean, and transform data from various sources"
> Verified: ✓ found in JD
> Reasoning: Responsibilities are framed around delivery of defined work (extract, transform, maintain, monitor) within an existing data function rather than setting strategy or direction.

**Run 2:** `execution` ✓
> Quote: "extract, clean, and transform data from various sources"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use execution-oriented verbs (extract, transform, maintain, monitor) with no strategic direction-setting language or ownership of defining the analytics function.

**Run 3:** `execution` ✓
> Quote: "collaborate with data scientists to provide reliable datasets"
> Verified: ✓ found in JD
> Reasoning: The role is framed as supporting and delivering for data scientists with bounded design work on models, rather than setting analytics direction or strategy.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted coding tools, GenAI data infrastructure, or AI-enabled workflows; generic interest in challenges does not count.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI coding assistance, or building AI-ready infrastructure anywhere in the JD.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, AI-assisted development, or building data infrastructure for AI systems.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "ensuring 'accuracy, compliance, scalability, and long-term usability.'"
> Verified: ✓ found in JD
> Reasoning: While data quality outcomes are valued, no testing framework, data quality tools, observability practice, or explicit testing responsibility is mentioned.

**Run 2:** `responsibility` ✗
> Quote: "ensuring accuracy, compliance, scalability, and long-term usability"
> Verified: ⚠ NOT found verbatim
> Reasoning: Data quality (accuracy) is explicitly framed as a responsibility the candidate must own through the action verb 'ensuring', though no specific testing frameworks are named.

**Run 3:** `absent` ✗
> Quote: "ensuring 'accuracy, compliance, scalability, and long-term usability.'"
> Verified: ✓ found in JD
> Reasoning: Quality is framed as a design principle and goal, not as an owned testing/data quality framework responsibility; no testing tools or practices are named.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

⚠ **LLM inconsistency**: runs gave ['absent', 'responsibility', 'absent']

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "ensuring 'accuracy, compliance, scalability, and long-term usability.'"
> Verified: ✓ found in JD
> Reasoning: Compliance and reliability are concerns but secondary to delivery framing; the role is not primarily organized around preventing regulatory failures or stakeholder trust breaches.

**Run 2:** `moderate` ✗
> Quote: "monitoring pipelines for high availability and performance"
> Verified: ⚠ NOT found verbatim
> Reasoning: Operational reliability and data accuracy are concerns secondary to capability delivery, with no compliance or stakeholder-trust dominance to indicate high risk framing.

**Run 3:** `moderate` ✗
> Quote: "monitoring pipelines for 'high availability and performance,'"
> Verified: ✓ found in JD
> Reasoning: Operational reliability is a concern (preventing pipeline outages and performance issues) but compliance and risk mitigation are secondary to delivery; the fear is infrastructure failure, not regulatory/compliance exposure.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
