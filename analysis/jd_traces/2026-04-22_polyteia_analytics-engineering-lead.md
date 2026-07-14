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
| domain_risk | high | moderate | high | moderate | 33% | ✗ |
| collaboration_width | 2 | 2 | 1 | 1 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | mixed | hiring_manager | hiring_manager | hiring_manager | 100% | ✗ |
| stakeholder_orientation | commercial | commercial | commercial | commercial | 100% | ✓ |
| autonomy_level | mixed | mixed | mixed | strategic | 33% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | moderate | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Guiding public sector clients through multi-month implementations of data products, from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: The emphasis on careful, multi-month guided implementations for complex stakeholders reflects a rigorous orientation rather than speed-to-market.

**Run 2:** `rigour` ✓
> Quote: "Guiding public sector clients through multi-month implementations of data products, from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: The multi-month implementation timeline and emphasis on careful stakeholder guidance in a regulated public sector domain signal a methodical, rigour-oriented approach rather than fast-paced delivery.

**Run 3:** `rigour` ✓
> Quote: "Guiding public sector clients through multi-month implementations of data products, from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize methodical guidance through complex, multi-month implementations with careful handover, with no velocity or speed-focused language present.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Developing and maintaining data products across public sector domains including "Gesundheit, Finanzen oder Personal""
> Verified: ✓ found in JD
> Reasoning: While Finance in public sector implies elevated risk, the lack of explicit compliance or regulatory language in the responsibilities keeps it moderate rather than high.

**Run 2:** `high` ✓
> Quote: "developing and maintaining data products across public sector domains including "Gesundheit, Finanzen oder Personal""
> Verified: ✓ found in JD
> Reasoning: Finance and health data in public sector contexts are heavily regulated and directly impact financial reporting and compliance.

**Run 3:** `moderate` ✗
> Quote: "Developing and maintaining data products across public sector domains including 'Gesundheit, Finanzen oder Personal'"
> Verified: ⚠ NOT found verbatim
> Reasoning: While public sector finance is typically regulated, the JD lacks explicit compliance or regulatory language, framing the work as data product delivery rather than compliance-critical.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'high', 'moderate']

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "customer success teams; public sector clients"
> Verified: ✓ found in JD
> Reasoning: Customer Success (internal team) and clients (external parties explicitly named as collaboration partners) are both identified.

**Run 2:** `1` ✗
> Quote: "customer success teams"
> Verified: ✓ found in JD
> Reasoning: Only one named internal function is explicitly listed as a collaboration partner.

**Run 3:** `1` ✗
> Quote: "collaborating closely with customer success teams"
> Verified: ✓ found in JD
> Reasoning: Only customer success teams is named as a distinct partner function; leadership of their own 2-person team does not count toward collaboration width.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

⚠ **LLM inconsistency**: runs gave ['2', '1', '1']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Leading a team of two Analytics Engineers, providing direction and fostering their professional growth; Actively coding in Python, dbt, and Airflow while coordinating project advancement"
> Verified: ✓ found in JD
> Reasoning: Named tools used in active responsibilities and an existing small team indicate mid-stage data function with established practices but limited scale.

**Run 2:** `mid` ✓
> Quote: "Leading a team of two Analytics Engineers, providing direction and fostering their professional growth"
> Verified: ✓ found in JD
> Reasoning: The presence of existing named tools (Python, dbt, Airflow) in responsibilities and an established team structure indicate a mid-stage function with existing products rather than early-stage build.

**Run 3:** `mid` ✓
> Quote: "Leading a team of two Analytics Engineers, providing direction and fostering their professional growth"
> Verified: ✓ found in JD
> Reasoning: The existence of an established team structure with defined products and active tools indicates mid-stage maturity—beyond early-stage greenfield but not yet a large-scale mature organization.

### jd_authorship
**Manual:** `mixed`

**Run 1:** `hiring_manager` ✗
> Quote: "Actively coding in Python, dbt, and Airflow while coordinating project advancement"
> Verified: ✓ found in JD
> Reasoning: The specific tools and workflow description demonstrates hands-on understanding of the actual work done on this role, typical of a hiring manager's framing.

**Run 2:** `hiring_manager` ✗
> Quote: "Actively coding in Python, dbt, and Airflow while coordinating project advancement"
> Verified: ✓ found in JD
> Reasoning: The specific technology stack combined with the precise description of how technical work integrates with project coordination shows technical specificity only someone doing this job would include.

**Run 3:** `hiring_manager` ✗
> Quote: "Actively coding in Python, dbt, and Airflow while coordinating project advancement"
> Verified: ✓ found in JD
> Reasoning: The responsibilities include specific tools with implementation context, named domains (Gesundheit, Finanzen, Personal), team size, and concrete process (initial analysis to operational handover), indicating author familiarity with the actual job.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`hiring_manager`

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `commercial` ✓
> Quote: "Guiding public sector clients through multi-month implementations of data products, from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: Client guidance and implementation success are established as the primary mission, reflecting a client-facing commercial orientation.

**Run 2:** `commercial` ✓
> Quote: "Serving as the primary technical and domain expert for complex client questions, collaborating closely with customer success teams"
> Verified: ✓ found in JD
> Reasoning: The role is explicitly client-facing and works with customer success teams to ensure successful external client relationships and outcomes.

**Run 3:** `commercial` ✓
> Quote: "Guiding public sector clients through multi-month implementations of data products, from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: The primary audience is external clients and internal customer success teams; the role is framed around serving clients through implementations.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Leading a team of two Analytics Engineers, providing direction and fostering their professional growth; Actively coding in Python, dbt, and Airflow while coordinating project advancement"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic team leadership and direction-setting with hands-on execution of client implementations and technical work.

**Run 2:** `mixed` ✓
> Quote: "Influence over platform strategy and technical direction"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership (setting platform direction, leading the team) with execution responsibilities (actively coding, guiding client implementations).

**Run 3:** `strategic` ✗
> Quote: "Influence over platform strategy and technical direction"
> Verified: ✓ found in JD
> Reasoning: The role combines team leadership with strategic influence over platform decisions, placing it at the strategic end of the spectrum despite including hands-on coding.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, AI-assisted workflows, or AI infrastructure expectations anywhere in the JD.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI coding tools, GenAI applications, or machine learning pipelines appears anywhere in the job description.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No AI tools, coding assistants, or AI/ML-specific responsibilities are mentioned; this is a standard analytics engineering role.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality language identified in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no mention of testing, data quality frameworks, or observability practices.

**Run 2:** `absent` ✗
> Quote: "No mention of testing, data quality, or observability frameworks."
> Verified: ⚠ NOT found verbatim
> Reasoning: Testing, data quality, data contracts, and observability are not mentioned anywhere in the responsibilities or requirements sections.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: Testing, data quality, observability, or data contracts are not mentioned anywhere in the responsibilities or requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around implementation guidance, technical expertise, and team leadership with no language around preventing failure, compliance risk, or trust/reliability concerns.

**Run 2:** `moderate` ✗
> Quote: "across public sector domains including "Gesundheit, Finanzen oder Personal""
> Verified: ✓ found in JD
> Reasoning: The public sector finance and health domain context creates implicit operational reliability and regulatory concerns, but the role is framed around implementation and leadership rather than explicitly preventing bad outcomes or managing compliance risk.

**Run 3:** `moderate` ✗
> Quote: "from initial analysis to operational handover"
> Verified: ✓ found in JD
> Reasoning: Operational reliability is implicit in the handover and maintenance responsibilities, but the framing is delivery-oriented rather than risk or compliance-focused.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['none', 'moderate', 'moderate']
