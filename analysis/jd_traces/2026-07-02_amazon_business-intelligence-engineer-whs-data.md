# Trace: 2026-07-02_amazon_business-intelligence-engineer-whs-data

## JD text (fed to classifier, Layer B stripped)

```
# Business Intelligence Engineer, WHS Data — Amazon EU Sarl

**URL:** https://www.amazon.jobs/en/jobs/10463343/business-intelligence-engineer-whs-data?cmpid=SPLICX0248M&ss=paid
**Location:** Luxembourg
**Date Posted:** 2026-07-02

---

# Business Intelligence Engineer, WHS Data

Company: Amazon EU Sarl
Job ID: 10463343
Location: Luxembourg (LUX)
Salary: Not stated

## Key Responsibilities
- Contributing to the design, implementation, and delivery of BI solutions for complex and ambiguous problems
- Conducting analytical deep dives and formulating recommendations for leadership
- Identifying opportunities to drive analytical reporting and business strategy
- Creating written insights for stakeholders on metric development
- Automating reporting, audits, and other data-driven activities
- Partnering with Data Engineering teams to enhance data infrastructure
- Developing best practices in data integrity and documentation
- Learning new technologies to support innovation

## Requirements
Basic Qualifications:
- Bachelor's degree in BI, finance, engineering, statistics, computer science, mathematics, or equivalent quantitative field
- 3+ years analyzing/interpreting data with Redshift, Oracle, NoSQL
- Data modeling, warehousing, and ETL pipeline experience
- Data visualization experience (Tableau, Quicksight, or similar)

Preferred Qualifications:
- Master's degree in related quantitative field
- 5+ years data analysis experience
- AWS solutions expertise (EC2, DynamoDB, S3, Redshift)
- Data mining experience with large-scale, complex datasets

Team & Culture: The team emphasizes work-life balance, inclusive culture, and mentorship with career growth opportunities.

Interview Process & Tools: Not specified in posting.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 1 | 1 | 1 | 1 | 100% | ✓ |
| data_team_maturity | mature | mid | mid | mid | 100% | ✗ |
| jd_authorship | mixed | recruiter | recruiter | recruiter | 100% | ✗ |
| stakeholder_orientation | internal_data | finance | finance | internal_data | 33% | ✗ |
| autonomy_level | mixed | execution | execution | execution | 100% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | none | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Developing best practices in data integrity and documentation"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes data integrity and documentation practices as core responsibilities; no velocity-oriented language (fast-paced, ship quickly, iteration) appears.

**Run 2:** `rigour` ✓
> Quote: "Developing best practices in data integrity and documentation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes data integrity and documentation quality as core practices without any speed, iteration, or delivery velocity language.

**Run 3:** `rigour` ✓
> Quote: "Developing best practices in data integrity and documentation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize data integrity, best practices, and documentation with no countervailing velocity language, indicating a rigour orientation.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Contributing to the design, implementation, and delivery of BI solutions for complex and ambiguous problems"
> Verified: ✓ found in JD
> Reasoning: The role focuses on operational warehouse BI; errors affect business decisions but there is no explicit mention of financial reporting, regulatory compliance, or public-facing impact that would elevate risk to high.

**Run 2:** `moderate` ✓
> Quote: "Identifying opportunities to drive analytical reporting and business strategy"
> Verified: ✓ found in JD
> Reasoning: The role affects business strategy decisions but lacks explicit regulatory, compliance, or financial reporting language that would elevate risk to high.

**Run 3:** `moderate` ✓
> Quote: "audits, and other data-driven activities"
> Verified: ✓ found in JD
> Reasoning: The JD mentions audits suggesting operational reliability concerns, but lacks explicit financial reporting or regulatory compliance framing typical of high-risk roles.

### collaboration_width
**Manual:** `1`

**Run 1:** `1` ✓
> Quote: "Partnering with Data Engineering teams to enhance data infrastructure"
> Verified: ✓ found in JD
> Reasoning: Only Data Engineering teams are explicitly named as a collaboration partner; generic references to leadership and stakeholders do not count as distinct named teams.

**Run 2:** `1` ✓
> Quote: "Partnering with Data Engineering teams to enhance data infrastructure"
> Verified: ✓ found in JD
> Reasoning: Only Data Engineering teams are explicitly named as a collaboration partner; leadership and stakeholders are mentioned generically.

**Run 3:** `1` ✓
> Quote: "Data Engineering teams"
> Verified: ✓ found in JD
> Reasoning: Only one explicitly named partner function is identified in the responsibilities section.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Partnering with Data Engineering teams to enhance data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The JD implies existing data infrastructure and multiple specialized teams (Data Engineering) but frames the role around enhancing and contributing to existing solutions rather than establishing from zero or operating at massive enterprise scale.

**Run 2:** `mid` ✗
> Quote: "Partnering with Data Engineering teams to enhance data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The existence of a named Data Engineering team and language around enhancing existing infrastructure indicates an established data function growing beyond early stage.

**Run 3:** `mid` ✗
> Quote: "Partnering with Data Engineering teams to enhance data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The presence of established Data Engineering teams and existing infrastructure to enhance indicates an existing but growing data function, not early-stage.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `mixed`

**Run 1:** `recruiter` ✗
> Quote: "Contributing to the design, implementation, and delivery of BI solutions for complex and ambiguous problems"
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic action verbs (contributing, designing, implementing) without specific technical context about actual problems, scale, or methodologies the candidate would encounter on a typical day.

**Run 2:** `recruiter` ✗
> Quote: "Creating written insights for stakeholders on metric development"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain only generic boilerplate action verbs lacking specific context about workflows, methodologies, or technical challenges unique to this BI role.

**Run 3:** `recruiter` ✗
> Quote: "Contributing to the design, implementation, and delivery of BI solutions for complex and ambiguous problems"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic boilerplate action verbs without technical specificity, scale context, or methodology names that only a hiring manager would know.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`recruiter`

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `finance` ✗
> Quote: "Conducting analytical deep dives and formulating recommendations for leadership"
> Verified: ✓ found in JD
> Reasoning: The primary output is analytical recommendations to leadership for business strategy decisions, which aligns with executive reporting and finance-oriented stakeholder orientation.

**Run 2:** `finance` ✗
> Quote: "Conducting analytical deep dives and formulating recommendations for leadership"
> Verified: ✓ found in JD
> Reasoning: The role serves leadership for strategic and executive-level decision-making, which maps to executive reporting even without explicit FP&A language.

**Run 3:** `internal_data` ✓
> Quote: "Partnering with Data Engineering teams to enhance data infrastructure"
> Verified: ✓ found in JD
> Reasoning: The explicit focus on partnering with Data Engineering and enhancing infrastructure positions the role as serving the data platform itself and its consumers.

⚠ **Disagreement**: manual=`internal_data` vs LLM majority=`finance`

⚠ **LLM inconsistency**: runs gave ['finance', 'finance', 'internal_data']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `execution` ✗
> Quote: "Contributing to the design, implementation, and delivery of BI solutions"
> Verified: ✓ found in JD
> Reasoning: The lead verb is "contributing" and responsibilities center on executing defined BI deliverables rather than strategic verbs like "define", "establish", or "own" that would indicate setting direction.

**Run 2:** `execution` ✗
> Quote: "Contributing to the design, implementation, and delivery of BI solutions"
> Verified: ✓ found in JD
> Reasoning: The framing of 'contributing to' rather than owning, defining, or leading indicates the role executes direction set by others.

**Run 3:** `execution` ✗
> Quote: "formulating recommendations for leadership"
> Verified: ✓ found in JD
> Reasoning: The role formulates recommendations for others' decisions rather than setting direction, indicating execution-focused accountability within a defined scope.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`execution`

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no explicit AI skill expectations for the candidate; the vague phrase "learning new technologies to support innovation" does not constitute a measurable AI requirement.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no expectations for candidate AI skills, coding tools, or AI-assisted work; 'learning new technologies' is vague and generic.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI-assisted coding tools, AI-ready infrastructure, or AI capability expectations for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Developing best practices in data integrity and documentation"
> Verified: ✓ found in JD
> Reasoning: Data integrity is framed as a responsibility the candidate owns through developing practices, not merely listed as a tool or skill in a requirements section.

**Run 2:** `responsibility` ✗
> Quote: "Developing best practices in data integrity and documentation"
> Verified: ✓ found in JD
> Reasoning: Data integrity is framed as something the candidate develops practices for, indicating ownership of quality standards rather than tool usage.

**Run 3:** `responsibility` ✗
> Quote: "Developing best practices in data integrity and documentation"
> Verified: ✓ found in JD
> Reasoning: The role is accountable for developing (defining) best practices in data integrity, indicating ownership of quality standards rather than just tool usage.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Developing best practices in data integrity and documentation"
> Verified: ✓ found in JD
> Reasoning: Data integrity and best practices suggest concern for operational reliability and preventing data failures, but there is no regulatory, compliance, or stakeholder-trust language that would indicate high loss aversion.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes analytical delivery and capability without risk, compliance, regulatory, or reliability prevention language.

**Run 3:** `moderate` ✗
> Quote: "audits, and other data-driven activities"
> Verified: ✓ found in JD
> Reasoning: Audits and integrity practices indicate operational reliability concerns, but they are secondary to the primary delivery-focused framing of the role.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'none', 'moderate']
