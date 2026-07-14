# Trace: 2026-06-25_adsquare_staff-data-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
Staff Data Analytics Engineer (m/f/d)
Company: Adsquare GmbH
Location: Berlin
Employment Type: Full-time, Permanent
Salary: €90,000 - €100,000 annually
Start Date: ASAP
Work Model: Hybrid

About Adsquare:
Adsquare is the global audience & location intelligence company with eight international offices. They are pioneers in data-driven advertising, emphasizing innovation, reliability, and transparent client partnerships.

Core Responsibilities:
- Design horizontally scalable, cost-efficient, production-grade data solutions handling terabyte-scale datasets
- Act as principal architect for the squad, championing test-driven development practices and engineering excellence
- Cross-squad collaboration solving architectural challenges spanning multiple teams while maintaining technical alignment
- Build domain expertise in location intelligence and audience attributes
- Build data observability frameworks for multi-terabyte data streams
- Communicate complex architectural trade-offs for non-technical stakeholders

Required Qualifications:
- 7+ years in Data Engineering, Analytics Engineering, or Backend Development specializing in massive data systems
- Geo-spatial and time-series data expertise
- Advanced Python proficiency with strong object-oriented design and TDD experience
- Architectural vision for scalable data warehouses (Snowflake, Redshift, Athena)
- Mastery of SQL, dbt, Apache Spark/PySpark
- AWS cloud services (Lambda, Batch, Glue, StepFunctions)
- Leadership abilities enabling communication of complex architectural trade-offs for non-technical stakeholders

Benefits:
- €1,200 annual professional development budget
- 30 vacation days yearly
- Urban Sports Club membership
- Company pension scheme
- Flexible/remote work options
- Team and company events
- Latest hardware and equipment

Recruitment Process:
Five-stage evaluation: 30-minute take-home technical quiz, 30-minute values interview, 1.5-hour technical deep-dive, practical data challenge, and team meet-and-greet.

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
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | mixed | 33% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes TDD, engineering excellence, and production-grade quality as core expectations with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "Act as principal architect for the squad, championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes test-driven development, engineering excellence, data observability, and production-grade quality with no velocity or speed signals present.

**Run 3:** `rigour` ✓
> Quote: "championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: The responsibilities section emphasizes TDD practices and engineering excellence rather than speed or iteration, with no velocity-oriented language present.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Design horizontally scalable, cost-efficient, production-grade data solutions handling terabyte-scale datasets"
> Verified: ✓ found in JD
> Reasoning: The adtech/location intelligence domain and scale are significant but the JD contains no language about financial reporting, regulatory compliance, or audit risk that would elevate this to high.

**Run 2:** `moderate` ✓
> Quote: "Build domain expertise in location intelligence and audience attributes"
> Verified: ✓ found in JD
> Reasoning: The role focuses on advertising and location intelligence data serving client decision-making, which carries operational importance but lacks explicit financial reporting or regulatory compliance language that would indicate high risk.

**Run 3:** `moderate` ✓
> Quote: "Build data observability frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: While operational reliability matters significantly, the JD lacks financial reporting, compliance, or regulatory language that would signal high risk; this is a B2B data product company, not a regulated financial institution.

### collaboration_width
**Manual:** `0`

**Run 1:** `0` ✓
> Quote: "multiple teams"
> Verified: ✓ found in JD
> Reasoning: While the JD mentions cross-squad collaboration and non-technical stakeholders, no named functions or teams (Finance, Product, Engineering, etc.) are explicitly identified.

**Run 2:** `0` ✓
> Quote: "Cross-squad collaboration solving architectural challenges spanning multiple teams"
> Verified: ✓ found in JD
> Reasoning: The JD mentions working across squads and multiple teams but does not name any specific functions or partner teams by name.

**Run 3:** `0` ✓
> Quote: "Cross-squad collaboration solving architectural challenges spanning multiple teams"
> Verified: ✓ found in JD
> Reasoning: The JD references collaboration across multiple teams but does not explicitly name any specific functions, departments, or partner teams.

### data_team_maturity
**Manual:** `mature`

**Run 1:** `mid` ✗
> Quote: "Build data observability frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: The role involves building/scaling existing infrastructure at significant scale with multiple squads in place, indicating a growing team beyond early stage but not yet fully mature.

**Run 2:** `mid` ✗
> Quote: "Act as principal architect for the squad, championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: The principal architect role within an existing squad structure, combined with responsibilities to build observability frameworks on established platforms, indicates a growing data function rather than greenfield or highly mature scale.

**Run 3:** `mid` ✗
> Quote: "Act as principal architect for the squad, championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: Multiple established squads exist with cross-squad collaboration patterns, and infrastructure (Snowflake, dbt) is already in place, but there is no indication of a massive mature team or greenfield startup.

⚠ **Disagreement**: manual=`mature` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Design horizontally scalable, cost-efficient, production-grade data solutions handling terabyte-scale datasets"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain highly specific technical detail about architectural patterns, scale metrics, and methodology (TDD) that only someone actively doing this work would articulate.

**Run 2:** `hiring_manager` ✓
> Quote: "Design horizontally scalable, cost-efficient, production-grade data solutions handling terabyte-scale datasets"
> Verified: ✓ found in JD
> Reasoning: The specific focus on terabyte-scale constraints, cost-efficiency optimization, and precise AWS service names (Lambda, Batch, Glue, StepFunctions) demonstrates technical depth that only someone in the role could articulate.

**Run 3:** `mixed` ✗
> Quote: "Design horizontally scalable, cost-efficient, production-grade data solutions handling terabyte-scale datasets"
> Verified: ✓ found in JD
> Reasoning: Technical specificity about scale (terabyte), architecture patterns, and methodologies is present alongside generic collaboration and stakeholder communication language.

⚠ **LLM inconsistency**: runs gave ['hiring_manager', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build data observability frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities focus on building data infrastructure, architectural excellence, and internal cross-squad technical alignment rather than serving external commercial or product stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Act as principal architect for the squad, championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: The responsibilities center on architectural leadership, data observability, and engineering practices that serve the data platform and engineering teams internally rather than commercial, product, or finance stakeholders.

**Run 3:** `internal_data` ✓
> Quote: "Build data observability frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: The core responsibilities focus on building data infrastructure and solving architectural challenges within engineering and data teams, with primary orientation toward data platform consumers.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Act as principal architect for the squad, championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: The role is framed as a principal architect who champions practices and solves architectural challenges across teams, indicating responsibility for setting technical direction rather than executing scoped work.

**Run 2:** `strategic` ✓
> Quote: "Act as principal architect for the squad, championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: The principal architect title and verbs like 'champion', 'design', and 'build' establish responsibility for setting technical direction and shaping organizational practices rather than executing scoped work.

**Run 3:** `strategic` ✓
> Quote: "Act as principal architect for the squad, championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: The role is expected to architect solutions, champion practices, and maintain technical alignment across multiple teams—clearly setting direction rather than executing defined work.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-ready data infrastructure, or AI skill expectations for the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no reference to AI coding tools, AI-assisted workflows, or AI infrastructure for the candidate to build.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted development, or AI-ready data infrastructure; candidate is expected to use traditional data engineering and analytics engineering skills.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: Test-driven development is framed as something the role champion owns and drives across the squad, establishing it as a core responsibility rather than a listed tool.

**Run 2:** `responsibility` ✗
> Quote: "championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: Test-driven development appears as an owned practice the candidate will champion as principal architect, establishing responsibility ownership rather than merely listing testing as a tool.

**Run 3:** `responsibility` ✗
> Quote: "championing test-driven development practices and engineering excellence"
> Verified: ✓ found in JD
> Reasoning: TDD is explicitly framed as something the candidate will champion as part of their role, indicating ownership of the testing practice, not merely listing it as a tool requirement.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Build data observability frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and production visibility are emphasized through data observability and engineering excellence, suggesting concern with system reliability rather than compliance or preventing stakeholder harm.

**Run 2:** `moderate` ✗
> Quote: "Build data observability frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: Building observability frameworks indicates concern for operational reliability and preventing data failures, but the absence of compliance, audit, or regulatory language prevents this from rising to high loss aversion.

**Run 3:** `moderate` ✗
> Quote: "Build data observability frameworks for multi-terabyte data streams"
> Verified: ✓ found in JD
> Reasoning: Operational reliability and production-grade solutions are important concerns, but the JD is primarily framed around technical excellence and architecture rather than preventing bad outcomes or regulatory compliance.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
