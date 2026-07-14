# Trace: 2026-04-22_leasingmarkt_principal-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Principal Analytics Engineer (m/f/d) — LeasingMarkt.de (AutoScout24 Group)

**URL:** https://www.linkedin.com/jobs/view/4404307253/
**Location:** Berlin, Germany
**Salary:** Not listed

---

## Key Responsibilities

- Define and evolve the architecture for enterprise analytical models with a strong focus on scalability, clarity and long-term robustness
- Design and maintain advanced semantic layers to unify KPIs and analytical logic across business domains
- Set technical direction and drive adoption of modern modeling practices across the organization
- Lead the definition and implementation of AI-driven analytical capabilities, including text-to-SQL, automated insights, semantic modeling for AI and conversational analytical interfaces
- Develop modeling patterns, documentation standards, and workflows for analytical efficiency
- Partner with data platform, engineering, and analytics teams on high-performance pipelines
- Optimise AWS cloud-native services (Glue, Athena, S3, MWAA) to support scalable analytical and AI workloads
- Enhance modeling patterns, performance, and development processes
- Mentor analytics engineers and analysts on modeling skills and technical standards
- Deliver high-quality semantic assets that fuel self-service analytics, reporting and AI-powered insights

---

## Required Qualifications

- 7+ years in advanced analytics engineering or data engineering roles
- Strong stakeholder influence and architectural alignment abilities
- Leadership experience on complex data initiatives
- Experience with AI-driven analytics (text-to-SQL, automated insights, semantic modeling, conversational BI)
- Extensive hands-on expertise with AWS (Glue, Athena, S3, MWAA) and familiarity with BigQuery
- Expert-level Python and PySpark skills
- Expert-level SQL and dimensional modeling mastery
- Data privacy, security, and compliance knowledge
- Large dataset optimization and performance troubleshooting capabilities

---

## Preferred Qualifications

Not explicitly listed

---

## Benefits

- International work community with 50+ nationalities represented
- Inclusive workplace culture
- Tools, training, and support for flexible work arrangements
- Learning and skill development opportunities

---

## Behavioural Insights (Hiring Manager Priorities)

### Primacy Bias
Opens with **"Define and evolve architecture for enterprise analytical models"** → they need **architectural thinking and systems design**, not operational reporting. Resume must lead with semantic layer design and multi-domain thinking.

### Repetition Signals (Fear & Desire)
| Term | Count | Type | Signal |
|------|-------|------|--------|
| "semantic layers" / "semantic assets" | 3x | Desire | Struggling with fragmented KPI logic; need unified semantic model |
| "AI-driven analytics" / "AI capabilities" | 2x | Desire | Building AI-ready analytics as competitive advantage |
| "scalability" / "performance" / "optimisation" | 3x | Fear | Past scaling pain; need performance-first thinking |
| "robustness" / "high-quality" / "governance" / "standards" | 4x | Loss aversion | Burned by bad data/reliability issues; governance > speed |
| "mentoring" / "adoption" / "leadership" | 3x | Seniority | Autonomous principal IC, not a manager; influence-driven |

### Seniority Level
Language is **directive and autonomous**: "Set technical direction", "Define and evolve", "Lead the definition", "Drive adoption". This is a **principal IC role** — someone who drives change through expertise and influence, not authority.

### Loss Aversion Framing
Multiple governance/reliability signals indicate past incidents. Frame achievements as **risk reduction and reliability wins**, not just speed. €1.6m recovery and 90% risk mitigation are the right narrative.

### What's Absent (Equally Important)
- **No dashboards/BI tools mentioned** → focus on infrastructure and modeling, not visualization
- **No cost optimization** → building new capabilities, not squeezing budgets
- **No project m…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 3 | 3 | 3 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | strategic | 100% | ✓ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Define and evolve the architecture for enterprise analytical models with a strong focus on scalability, clarity and long-term robustness"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize architectural robustness, clarity, and long-term quality over speed or iteration, with no velocity language present.

**Run 2:** `rigour` ✓
> Quote: "with a strong focus on scalability, clarity and long-term robustness"
> Verified: ✓ found in JD
> Reasoning: Multiple rigour signals (robustness, standards, governance, compliance) appear throughout with zero velocity signals (no fast-paced, rapid, or MVP language).

**Run 3:** `rigour` ✓
> Quote: "Define and evolve the architecture for enterprise analytical models with a strong focus on scalability, clarity and long-term robustness"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize robustness, scalability, clarity, and quality standards with no velocity language, establishing rigour as the primary orientation.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Data privacy, security, and compliance knowledge"
> Verified: ✓ found in JD
> Reasoning: Compliance is a named requirement and the automotive leasing domain involves financial products, but the role focuses on analytics infrastructure, not regulatory or financial reporting.

**Run 2:** `moderate` ✓
> Quote: "Data privacy, security, and compliance knowledge"
> Verified: ✓ found in JD
> Reasoning: Automotive leasing is a financial services-adjacent domain with compliance requirements, but the JD uses generic compliance language without explicit regulatory, audit, or financial reporting framing.

**Run 3:** `moderate` ✓
> Quote: "Data privacy, security, and compliance knowledge"
> Verified: ✓ found in JD
> Reasoning: Compliance is required but not the primary domain framing; automotive leasing has commercial and privacy considerations but lacks explicit financial/regulatory dominance signals.

### collaboration_width
**Manual:** `4`

**Run 1:** `3` ✗
> Quote: "data platform, engineering, and analytics teams"
> Verified: ✓ found in JD
> Reasoning: Three distinct named teams are explicitly listed as collaboration partners in the requirements.

**Run 2:** `3` ✗
> Quote: "data platform, engineering, and analytics teams"
> Verified: ✓ found in JD
> Reasoning: Three explicitly named teams are listed as collaboration partners in the responsibilities section.

**Run 3:** `3` ✗
> Quote: "Partner with data platform, engineering, and analytics teams on high-performance pipelines"
> Verified: ✓ found in JD
> Reasoning: Three explicitly named teams (data platform, engineering, analytics) are identified as collaboration partners.

⚠ **Disagreement**: manual=`4` vs LLM majority=`3`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Mentor analytics engineers and analysts on modeling skills and technical standards"
> Verified: ✓ found in JD
> Reasoning: The existence of multiple analytics engineers and analysts to mentor indicates an established team, while emphasis on developing standards and defining direction suggests growth and evolution.

**Run 2:** `mid` ✓
> Quote: "Mentor analytics engineers and analysts on modeling skills and technical standards"
> Verified: ✓ found in JD
> Reasoning: Multiple existing analytics engineers and analysts, named sub-teams, and AWS tooling in responsibilities indicate an established data function with growth and evolution, not early-stage or fully mature.

**Run 3:** `mid` ✓
> Quote: "Mentor analytics engineers and analysts on modeling skills and technical standards"
> Verified: ✓ found in JD
> Reasoning: Multiple data roles exist and the team is growing, evidenced by mentorship responsibilities and plural role references; team has moved beyond early-stage but lacks mature specialization indicators.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Optimise AWS cloud-native services (Glue, Athena, S3, MWAA) to support scalable analytical and AI workloads"
> Verified: ✓ found in JD
> Reasoning: The exact AWS service names (Glue, Athena, S3, MWAA) indicate hiring manager authorship with direct hands-on experience, not generic recruiter language.

**Run 2:** `hiring_manager` ✓
> Quote: "text-to-SQL, automated insights, semantic modeling for AI and conversational analytical interfaces"
> Verified: ✓ found in JD
> Reasoning: Specific named AI capabilities, exact AWS services (Glue, Athena, S3, MWAA), and expert-level qualifiers reflect hiring manager technical expertise.

**Run 3:** `hiring_manager` ✓
> Quote: "Lead the definition and implementation of AI-driven analytical capabilities, including text-to-SQL, automated insights, semantic modeling for AI and conversational analytical interfaces"
> Verified: ✓ found in JD
> Reasoning: Specific AI practitioner concepts and exact AWS service names (Glue, Athena, S3, MWAA) indicate technical depth only a hiring manager would specify.

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Deliver high-quality semantic assets that fuel self-serve analytics, reporting and AI-powered insights"
> Verified: ⚠ NOT found verbatim
> Reasoning: The role primarily serves internal data infrastructure and analytics consumers through modeling standards and platform development, not external commercial, product, or finance stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Mentor analytics engineers and analysts on modeling skills and technical standards"
> Verified: ✓ found in JD
> Reasoning: Primary responsibilities focus on building semantic architecture, developing modeling standards, and mentoring the analytics team, making the data function itself the primary audience.

**Run 3:** `internal_data` ✓
> Quote: "Deliver high-quality semantic assets that fuel self-service analytics, reporting and AI-powered insights"
> Verified: ✓ found in JD
> Reasoning: The role is framed around building semantic infrastructure and modeling patterns for the analytics function itself, not serving commercial or product teams.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Set technical direction and drive adoption of modern modeling practices"
> Verified: ✓ found in JD
> Reasoning: Strategic action verbs (Set, drive) indicate the role is expected to set direction and shape the analytics function, not execute direction set by others.

**Run 2:** `strategic` ✓
> Quote: "Set technical direction and drive adoption of modern modeling practices across the organization"
> Verified: ✓ found in JD
> Reasoning: Multiple direction-setting verbs (Define, Set direction, Lead, Drive adoption) position this as a principal IC role that shapes organizational direction through technical influence.

**Run 3:** `strategic` ✓
> Quote: "Set technical direction and drive adoption of modern modeling practices across the organization"
> Verified: ✓ found in JD
> Reasoning: The role explicitly owns technical direction-setting and organizational adoption, positioning it as a principal IC defining how analytics is delivered.

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Lead the definition and implementation of AI-driven analytical capabilities, including text-to-SQL, automated insights, semantic modeling for AI and conversational analytical interfaces"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to define and build AI-driven analytics infrastructure that AI systems consume, not use AI tools for personal coding productivity.

**Run 2:** `ai_enabler` ✗
> Quote: "Lead the definition and implementation of AI-driven analytical capabilities, including text-to-SQL, automated insights, semantic modeling for AI and conversational analytical interfaces"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build semantic modeling and AI-driven analytical infrastructure for AI systems to consume, not use AI tools for personal coding.

**Run 3:** `ai_enabler` ✗
> Quote: "Lead the definition and implementation of AI-driven analytical capabilities, including text-to-SQL, automated insights, semantic modeling for AI and conversational analytical interfaces"
> Verified: ✓ found in JD
> Reasoning: The candidate must build data infrastructure and semantic models that AI systems consume, not use AI tools for personal productivity.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: No signals for data contracts, testing practices, quality frameworks, or observability appear anywhere in the JD.

**Run 2:** `absent` ✗
> Quote: "Deliver high-quality semantic assets that fuel self-serve analytics, reporting and AI-powered insights"
> Verified: ⚠ NOT found verbatim
> Reasoning: Quality is framed as an outcome of delivering semantic assets, with no testing practices, data quality frameworks, or observability practices mentioned in the JD.

**Run 3:** `absent` ✗
> Quote: "No testing framework signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: While robustness and quality are emphasized as outcomes, no testing tools, frameworks, or quality practices are named in the responsibilities.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "with a strong focus on scalability, clarity and long-term robustness"
> Verified: ✓ found in JD
> Reasoning: Multiple quality and robustness signals indicate operational reliability is a concern, but the primary framing is architectural capability-building rather than risk or regulatory prevention.

**Run 2:** `moderate` ✗
> Quote: "with a strong focus on scalability, clarity and long-term robustness"
> Verified: ✓ found in JD
> Reasoning: Robustness and reliability are core concerns from the first responsibility, but the primary framing is architectural innovation and evolution rather than compliance or risk mitigation.

**Run 3:** `moderate` ✗
> Quote: "Define and evolve the architecture for enterprise analytical models with a strong focus on scalability, clarity and long-term robustness"
> Verified: ✓ found in JD
> Reasoning: Robustness and compliance are concerns, but the framing is capability-building and operational reliability rather than fear-driven risk prevention.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
