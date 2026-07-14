# Trace: 2026-04-22_polyteia_analytics-engineering-lead

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineering Lead — Polyteia

**URL:** https://polyteia.jobs.personio.de/job/2478119?display=de&language=de&pid=19b90fa3-5f5f-4cd2-8758-eeb8d18cef2b&it=56Pd1f2QPc9dcLiyVWCwTQ&_ghcid=71e67ea4-f328-4404-ad0c-95e7b0e31743

**Location:** Berlin

**Employment Type:** Full-time, Permanent

**Salary:** €80,000–€90,000 annually

---

## Key Responsibilities

- Guiding public sector clients through multi-month implementations of data products, from initial analysis to operational handover
- Serving as the primary technical and domain expert for complex client questions, collaborating closely with customer success teams
- Developing and maintaining data products across public sector domains including "Gesundheit, Finanzen oder Personal"
- Leading a team of two Analytics Engineers, providing direction and fostering their professional growth
- Actively coding in Python, dbt, and Airflow while coordinating project advancement

---

## Required Qualifications

- Multiple years implementing data projects with proven ability to guide stakeholders through complex implementations
- Strong technical foundation: SQL and Python proficiency; familiarity with dbt and Airflow
- Domain expertise mindset; ability to understand data context and communicate with subject matter experts
- Fluent German (C2 level) and secure English communication

---

## Preferred Skills

- Prior experience in public administration or GovTech sectors

---

## Benefits

- Influence over platform strategy and technical direction
- Modern technology stack with development freedom
- 29 vacation days
- Hybrid arrangement: three office days weekly in Berlin Kreuzberg
- Urban Sports Club membership and additional benefits
- Inclusive workplace culture emphasizing professional development

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 2 | 1 | 1 | 1 | 100% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | recruiter | hiring_manager | mixed | 0% | ✗ |
| stakeholder_orientation | commercial | commercial | commercial | commercial | 100% | ✓ |
| autonomy_level | mixed | mixed | mixed | mixed | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Guiding public sector clients through multi-month implementations of data products, from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: The emphasis on methodical, multi-month implementations with expert guidance frames the work as rigorous and deliberate rather than speed-oriented, with no velocity language present throughout.

**Run 2:** `rigour` ✓
> Quote: "multi-month implementations of data products, from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize structured, complete lifecycle processes with domain expertise and careful client guidance, with no velocity language present.

**Run 3:** `rigour` ✓
> Quote: "Guiding public sector clients through multi-month implementations of data products, from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: Multi-month implementations and operational handover framing emphasize deliberate, thorough work to public sector clients rather than speed or iteration.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Developing and maintaining data products across public sector domains including "Gesundheit, Finanzen oder Personal""
> Verified: ✓ found in JD
> Reasoning: While public sector finance and health domains imply high risk, the JD contains no explicit regulatory, compliance, or audit language, placing it at moderate rather than high risk.

**Run 2:** `moderate` ✗
> Quote: "public sector domains including "Gesundheit, Finanzen oder Personal""
> Verified: ✓ found in JD
> Reasoning: Public sector finance is mentioned but without explicit financial reporting, compliance, or regulatory language; sector hints at governance concerns but JD remains generic about risk implications.

**Run 3:** `moderate` ✗
> Quote: "Developing and maintaining data products across public sector domains including "Gesundheit, Finanzen oder Personal""
> Verified: ✓ found in JD
> Reasoning: Public sector finance and healthcare are inherently regulated sectors, but the JD uses generic language about data products rather than regulatory or compliance language.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `2`

**Run 1:** `1` ✗
> Quote: "customer success teams"
> Verified: ✓ found in JD
> Reasoning: Only one named partner team is explicitly mentioned; internal team leadership and client interactions do not count as distinct collaboration partners.

**Run 2:** `1` ✗
> Quote: "collaborating closely with customer success teams"
> Verified: ✓ found in JD
> Reasoning: Only customer success teams are explicitly named as a partner; the role's own team of two does not count.

**Run 3:** `1` ✗
> Quote: "customer success teams"
> Verified: ✓ found in JD
> Reasoning: Only customer success teams are explicitly named as a collaboration partner; clients are served but not listed as a named collaboration team.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Leading a team of two Analytics Engineers, providing direction and fostering their professional growth"
> Verified: ✓ found in JD
> Reasoning: A small existing team with named tools in use (Python, dbt, Airflow) signals a mid-stage operation that is growing but not yet mature or heavily specialized.

**Run 2:** `mid` ✓
> Quote: "Actively coding in Python, dbt, and Airflow while coordinating project advancement"
> Verified: ✓ found in JD
> Reasoning: Named tools are deployed and in active use in responsibilities, and a small team exists to lead, indicating a function beyond early stage but not yet at scale.

**Run 3:** `mid` ✓
> Quote: "Leading a team of two Analytics Engineers, providing direction and fostering their professional growth"
> Verified: ✓ found in JD
> Reasoning: An existing Analytics Engineering team with multiple members and a lead indicates mid-stage maturity—past greenfield but not yet a large established function.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `recruiter` ✗
> Quote: "Actively coding in Python, dbt, and Airflow while coordinating project advancement"
> Verified: ✓ found in JD
> Reasoning: Tools are named but without specific technical context, scale, or methodology; responsibilities rely on generic action verbs (guiding, serving, developing, leading) characteristic of recruiter-written JDs.

**Run 2:** `hiring_manager` ✗
> Quote: "Guiding public sector clients through multi-month implementations of data products, from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain specific domain context, process lifecycle, client problem types, and tool application that only come from someone performing this work.

**Run 3:** `mixed` ✓
> Quote: "Actively coding in Python, dbt, and Airflow while coordinating project advancement"
> Verified: ✓ found in JD
> Reasoning: Specific technical context (named tools, public sector domain) and team size suggest hiring manager input, but generic action verbs like 'coordinating' suggest recruiter influence.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`recruiter`

⚠ **LLM inconsistency**: runs gave ['recruiter', 'hiring_manager', 'mixed']

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `commercial` ✓
> Quote: "Serving as the primary technical and domain expert for complex client questions, collaborating closely with customer success teams"
> Verified: ✓ found in JD
> Reasoning: The role is fundamentally client-facing and customer success-aligned, supporting GTM and customer retention through technical guidance and product delivery.

**Run 2:** `commercial` ✓
> Quote: "Serving as the primary technical and domain expert for complex client questions, collaborating closely with customer success teams"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is serving external clients through data implementations with explicit collaboration on customer success, a commercial orientation.

**Run 3:** `commercial` ✓
> Quote: "Serving as the primary technical and domain expert for complex client questions, collaborating closely with customer success teams"
> Verified: ✓ found in JD
> Reasoning: Primary responsibilities emphasize client-facing delivery and customer success collaboration rather than internal analytics infrastructure or finance reporting.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Leading a team of two Analytics Engineers, providing direction and fostering their professional growth"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic direction-setting (leading the team, influence over platform strategy) with execution (actively coding, maintaining products), creating genuine strategic and execution hybrid.

**Run 2:** `mixed` ✓
> Quote: "Leading a team of two Analytics Engineers, providing direction and fostering their professional growth"
> Verified: ✓ found in JD
> Reasoning: Role combines strategic elements (team leadership, platform strategy influence) with execution elements (active coding, project coordination).

**Run 3:** `mixed` ✓
> Quote: "Leading a team of two Analytics Engineers, providing direction and fostering their professional growth; Actively coding in Python, dbt, and Airflow"
> Verified: ✓ found in JD
> Reasoning: Role combines strategic leadership (leading team, providing direction) with hands-on execution (actively coding and project coordination).

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, agentic workflows, AI-ready infrastructure, or AI skill expectations anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI-assisted tools, GenAI applications, or AI-ready data infrastructure as candidate skills or responsibilities.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted coding, AI pipelines, or AI-ready data infrastructure anywhere in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: Testing, data quality, data contracts, observability, or quality frameworks are not mentioned anywhere in the responsibilities or requirements.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: Data quality, testing frameworks, observability, or data contracts are not mentioned anywhere in the JD.

**Run 3:** `absent` ✗
> Quote: "No testing, data quality, or observability mentioned in JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: Testing frameworks, data quality practices, observability, or data contracts are absent from responsibilities, requirements, and benefits sections.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely in capability and opportunity terms (influence, development freedom, growth) with no compliance, reliability, risk, or trust-protection language.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: No emphasis on regulatory compliance, reliability, audit, or prevention of bad outcomes; the JD frames the role in delivery and capability terms.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: JD emphasizes delivery and capability (guiding implementations, leading team, coding) with no risk prevention, compliance, or stakeholder trust language.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
