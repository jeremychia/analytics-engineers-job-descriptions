# Trace: 2026-06-23_trade-republic_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Trade Republic

**URL:** https://traderepublic.com/en-de/about?gh_jid=6589276003&gh_src=632be8e43us&jobId=6589276003
**Location:** Berlin, Germany

---

## Key Responsibilities

- Working closely with product and business stakeholders to define and build meaningful product metrics
- Developing analytical products such as data models, dashboards, reports and tooling to enable self-serve reporting and analysis for stakeholders
- Improving our architecture (cloud-based and always evolving) based on what brings the most impact to cost reduction and speed, applying software engineering best practices
- Taking ownership of projects from scoping to delivery and adoption, working autonomously

---

## Required Qualifications

- At least 5 years of engineering experience with an analytical mindset
- Solid understanding of architectures, design principles and engineering best practices
- Experience across all stages of the data pipeline: ingestion, transformations, mart creation

---

## Preferred / Bonus Skills

- Experience with our tech stack is a bonus: S3/Snowflake/Airflow/Python/DBT

---

## Benefits

- Opportunity to grow career by collaborating with a team of outstanding talents and state of the art technology
- Culture that rewards ownership, excellence, and high energy
- Mission-driven: closing the pension gap and democratising wealth across 17 countries
- Commitment to DEI and equal opportunity

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | mixed | rigour | rigour | 33% | ✗ |
| domain_risk | high | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 2 | 1 | 1 | 2 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | recruiter | recruiter | recruiter | 100% | ✗ |
| stakeholder_orientation | product | product | mixed | product | 33% | ✓ |
| autonomy_level | mixed | mixed | strategic | strategic | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Improving our architecture (cloud-based and always evolving) based on what brings the most impact to cost reduction and speed, applying software engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly frames both velocity ('always evolving', 'speed') and rigour ('software engineering best practices') as core to the role.

**Run 2:** `rigour` ✗
> Quote: "applying software engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The emphasis on software engineering best practices, architecture, and design principles outweighs the single mention of speed in the context of cost reduction.

**Run 3:** `rigour` ✗
> Quote: "applying software engineering best practices"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize architectural thinking and engineering best practices as the primary orientation, with speed and cost reduction mentioned as secondary outcomes rather than the driving goal.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

⚠ **LLM inconsistency**: runs gave ['mixed', 'rigour', 'rigour']

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "Working closely with product and business stakeholders to define and build meaningful product metrics"
> Verified: ✓ found in JD
> Reasoning: The JD uses generic product analytics language without explicit financial reporting, compliance, or regulatory signals typical of high-risk roles.

**Run 2:** `moderate` ✗
> Quote: "Working closely with product and business stakeholders to define and build meaningful product metrics"
> Verified: ✓ found in JD
> Reasoning: Although fintech implies financial risk, the JD uses generic analytics language with no explicit mention of compliance, audit, or financial reporting requirements.

**Run 3:** `moderate` ✗
> Quote: "Working closely with product and business stakeholders to define and build meaningful product metrics"
> Verified: ✓ found in JD
> Reasoning: While Trade Republic operates in fintech (inherently high-risk sector), the JD focuses on product metrics and stakeholder analytics rather than financial reporting or compliance, placing it in moderate risk territory.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `2`

**Run 1:** `1` ✗
> Quote: "product and business stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only 'product' is an explicitly named function; 'business stakeholders' is too generic to count as a specific partner team.

**Run 2:** `1` ✗
> Quote: "product and business stakeholders"
> Verified: ✓ found in JD
> Reasoning: Only 'product' is a clearly named team; 'business stakeholders' is too generic to count as a distinct named function.

**Run 3:** `2` ✓
> Quote: "product and business stakeholders"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names two distinct partner functions: Product (team/management) and Business (operations/commercial), both mentioned as primary collaborators.

⚠ **Disagreement**: manual=`2` vs LLM majority=`1`

⚠ **LLM inconsistency**: runs gave ['1', '1', '2']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Improving our architecture (cloud-based and always evolving) based on what brings the most impact to cost reduction and speed"
> Verified: ✓ found in JD
> Reasoning: Language indicates existing infrastructure being actively evolved and improved, characteristic of mid-stage teams rather than early-stage greenfield.

**Run 2:** `mid` ✓
> Quote: "Improving our architecture (cloud-based and always evolving) based on what brings the most impact to cost reduction and speed"
> Verified: ✓ found in JD
> Reasoning: The phrasing indicates an existing architecture being improved and optimized, consistent with mid-stage maturity where infrastructure exists but is actively being scaled.

**Run 3:** `mid` ✓
> Quote: "Improving our architecture (cloud-based and always evolving)"
> Verified: ✓ found in JD
> Reasoning: The phrasing 'improving' and 'always evolving' signals an existing, operational data architecture being iterated and scaled, not a greenfield build, consistent with a mid-stage data function.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `recruiter` ✗
> Quote: "Developing analytical products such as data models, dashboards, reports and tooling to enable self-serve reporting and analysis for stakeholders"
> Verified: ✓ found in JD
> Reasoning: Uses generic action verbs and boilerplate descriptions without technical specificity about scale, volume, or methodologies that would indicate hiring manager authorship.

**Run 2:** `recruiter` ✗
> Quote: "Developing analytical products such as data models, dashboards, reports and tooling to enable self-serve reporting and analysis for stakeholders"
> Verified: ✓ found in JD
> Reasoning: Generic action verbs and standard deliverables without specific business context, scale, or technical depth indicate recruiter authorship rather than hands-on hiring manager knowledge.

**Run 3:** `recruiter` ✗
> Quote: "Developing analytical products such as data models, dashboards, reports and tooling to enable self-serve reporting and analysis for stakeholders"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic action verbs and product descriptions without specific context about methodologies, scales, volumes, or what actual Tuesday-morning work entails, indicating recruiter-drafted language.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`recruiter`

### stakeholder_orientation
**Manual:** `product`

**Run 1:** `product` ✓
> Quote: "Working closely with product and business stakeholders to define and build meaningful product metrics"
> Verified: ✓ found in JD
> Reasoning: The role's primary focus is defining product metrics and enabling product teams to conduct self-serve analysis.

**Run 2:** `mixed` ✗
> Quote: "Working closely with product and business stakeholders to define and build meaningful product metrics; enable self-serve reporting and analysis for stakeholders"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves both product/business decision-makers (via metrics definition) and internal analytics infrastructure consumers (via self-serve tooling and data models).

**Run 3:** `product` ✓
> Quote: "Working closely with product and business stakeholders to define and build meaningful product metrics"
> Verified: ✓ found in JD
> Reasoning: The emphasis on product metrics and serving product/business stakeholder decision-making needs clearly positions this role as product-focused.

⚠ **LLM inconsistency**: runs gave ['product', 'mixed', 'product']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Taking ownership of projects from scoping to delivery and adoption, working autonomously"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership and autonomous execution ('ownership', 'define', 'autonomously') with responsibilities framed in service of stakeholder-defined priorities.

**Run 2:** `strategic` ✗
> Quote: "Taking ownership of projects from scoping to delivery and adoption, working autonomously"
> Verified: ✓ found in JD
> Reasoning: The explicit framing of 'ownership from scoping to delivery' and 'working autonomously' indicates the role defines its own direction and priorities rather than executing scoped work.

**Run 3:** `strategic` ✗
> Quote: "Taking ownership of projects from scoping to delivery and adoption, working autonomously"
> Verified: ✓ found in JD
> Reasoning: The candidate takes autonomous ownership of project scoping (defining scope) through delivery and adoption, and participates in defining meaningful metrics, indicating strategic autonomy in shaping analytics delivery.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`strategic`

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or building AI infrastructure for any purpose.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no references to AI tools, AI-ready data infrastructure, or AI capabilities expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools for candidate productivity or AI-ready data infrastructure expectations.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal anywhere in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD includes no mention of testing frameworks, data quality, observability, data contracts, or reliability practices.

**Run 2:** `absent` ✗
> Quote: "applying software engineering best practices"
> Verified: ✓ found in JD
> Reasoning: While the JD mentions software engineering best practices, testing, data quality frameworks, or observability are not explicitly addressed as a responsibility or named in the tech stack.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality framework mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: There is no mention of data quality, testing frameworks, data contracts, observability, or similar practices as a candidate responsibility or tool requirement.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around building capabilities and optimizing for speed and cost efficiency, with no mention of compliance, risk, or preventing bad outcomes.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in terms of impact, speed, and cost reduction without emphasizing risk prevention, compliance concerns, or stakeholder trust as primary motivations.

**Run 3:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around delivery capability and impact (cost reduction, speed, adoption) rather than preventing bad outcomes or managing risk.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
