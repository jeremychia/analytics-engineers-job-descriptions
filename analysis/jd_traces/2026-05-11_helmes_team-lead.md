# Trace: 2026-05-11_helmes_team-lead

## JD text (fed to classifier, Layer B stripped)

```
# Team Lead — Helmes

**URL:** https://www.helmes.com/position/team-lead-12/
**Location:** Estonia (offices in Tallinn and Tartu)
**Application Deadline:** 22.05.2026

---

## Key Responsibilities

- Lead software development teams and projects
- Inspire and develop team members
- Provide resources (technology, skills, capacity) for success
- Monitor performance and continuously improve work methods
- Manage finances (billing, reporting)
- Serve as primary contact for both clients and team
- Develop client relationships and seek new opportunities
- Support sales and client acquisition
- Contribute to process and tool development

---

## Required Qualifications

- Minimum 3 years of project management experience in software development
- Experience managing teams, including ability to motivate people
- Good communication skills
- Willingness to take responsibility and follow through on obligations
- Experience with financial and budget management at unit level
- Very good Estonian and English language skills both in speech and writing
- Knowledge and ability to manage Scrum processes

---

## Preferred / Bonus Skills

None listed.

---

## Benefits

- Caring work environment, where you can grow, take responsibility and have real impact
- Supportive mentor for professional development
- Freedom, trust, and responsibility in work
- Flexible hybrid work and work-life balance
- Modern offices in Tallinn and Tartu
- Additional health insurance and sports activity support
- Caring culture with regular team events and community activities

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | velocity | velocity | rigour | 33% | ✗ |
| domain_risk | low | moderate | moderate | low | 33% | ✗ |
| collaboration_width | 2 | 2 | 2 | 2 | 100% | ✓ |
| data_team_maturity | early | mid | mature | mid | 33% | ✗ |
| jd_authorship | recruiter | recruiter | recruiter | recruiter | 100% | ✓ |
| stakeholder_orientation | commercial | mixed | commercial | commercial | 33% | ✓ |
| autonomy_level | mixed | mixed | strategic | strategic | 33% | ✗ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `velocity` ✗
> Quote: "Develop client relationships and seek new opportunities; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes business development, client acquisition, and sales support as core responsibilities, signaling a commercially-driven, opportunity-capture orientation rather than governance or quality emphasis.

**Run 2:** `velocity` ✗
> Quote: "Develop client relationships and seek new opportunities"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize client acquisition, business growth, and sales support over data quality, testing, or governance frameworks.

**Run 3:** `rigour` ✓
> Quote: "Monitor performance and continuously improve work methods"
> Verified: ✓ found in JD
> Reasoning: The JD contains no velocity signals but emphasizes continuous improvement and accurate financial management, suggesting a quality/correctness orientation.

⚠ **Disagreement**: manual=`rigour` vs LLM majority=`velocity`

⚠ **LLM inconsistency**: runs gave ['velocity', 'velocity', 'rigour']

### domain_risk
**Manual:** `low`

**Run 1:** `moderate` ✗
> Quote: "Manage finances (billing, reporting)"
> Verified: ✓ found in JD
> Reasoning: The role involves financial management and client relationships but does not reference regulatory compliance, financial reporting, or mission-critical systems that would elevate risk to high.

**Run 2:** `moderate` ✗
> Quote: "Serve as primary contact for both clients and team"
> Verified: ✓ found in JD
> Reasoning: Client deliverables and team management affect business outcomes but lack explicit financial reporting, regulatory, or compliance risk language.

**Run 3:** `low` ✓
> Quote: "Lead software development teams and projects"
> Verified: ✓ found in JD
> Reasoning: This role is general software development team management with no signals of financial reporting impact, regulatory compliance, or mission-critical data consequences.

⚠ **Disagreement**: manual=`low` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'low']

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "Serve as primary contact for both clients and team; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: Clients are explicitly named as an external collaboration partner, and sales is referenced as a distinct function the role supports.

**Run 2:** `2` ✓
> Quote: "Serve as primary contact for both clients and team; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: Named collaborators are clients (external parties) and sales (internal function).

**Run 3:** `2` ✓
> Quote: "clients; sales"
> Verified: ✓ found in JD
> Reasoning: Two named collaboration partners explicitly identified: clients and sales.

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Lead software development teams and projects"
> Verified: ✓ found in JD
> Reasoning: The role assumes an existing team structure and process framework rather than building from zero or operating at massive scale, suggesting a mid-stage organization.

**Run 2:** `mature` ✗
> Quote: "Modern offices in Tallinn and Tartu"
> Verified: ✓ found in JD
> Reasoning: Multiple established operational sites indicate a mature, scaled organization, though this is a software development team rather than a data team.

**Run 3:** `mid` ✗
> Quote: "Contribute to process and tool development"
> Verified: ✓ found in JD
> Reasoning: The mention of contributing to process and tool development signals existing infrastructure being actively enhanced, characteristic of mid-stage organizations.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

⚠ **LLM inconsistency**: runs gave ['mid', 'mature', 'mid']

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Inspire and develop team members; Provide resources (technology, skills, capacity) for success"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain generic action verbs and boilerplate language with no named tools, specific context, or domain-specific methodology beyond generic team leadership.

**Run 2:** `recruiter` ✓
> Quote: "Lead software development teams and projects; Inspire and develop team members; Monitor performance and continuously improve work methods"
> Verified: ✓ found in JD
> Reasoning: Responsibilities consist of generic leadership action verbs without technical specificity about the domain, tools, methodologies, or unique challenges of the role.

**Run 3:** `recruiter` ✓
> Quote: "Lead software development teams and projects"
> Verified: ✓ found in JD
> Reasoning: Responsibilities rely almost entirely on generic action verbs with minimal technical context, scope specificity, or methodology detail.

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `mixed` ✗
> Quote: "Serve as primary contact for both clients and team; Develop client relationships and seek new opportunities; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: The role genuinely balances commercial stakeholders (clients, sales support) with internal product/engineering team development with roughly equal emphasis.

**Run 2:** `commercial` ✓
> Quote: "Develop client relationships and seek new opportunities; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: The role's primary emphasis is on client relationships, business development, and sales support aligned with commercial and GTM functions.

**Run 3:** `commercial` ✓
> Quote: "Develop client relationships and seek new opportunities; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: Primary emphasis is on external client relationships, sales support, and business development, indicating a commercial GTM orientation.

⚠ **LLM inconsistency**: runs gave ['mixed', 'commercial', 'commercial']

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Lead software development teams and projects; Monitor performance and continuously improve work methods; Develop client relationships and seek new opportunities"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic elements (leading teams, developing client relationships, improving methods) with execution elements (managing finances, serving as contact, supporting sales).

**Run 2:** `strategic` ✗
> Quote: "Lead software development teams and projects"
> Verified: ✓ found in JD
> Reasoning: The role is expected to lead teams, inspire members, define improvements, and shape processes, indicating strategic autonomy rather than execution.

**Run 3:** `strategic` ✗
> Quote: "Lead software development teams and projects"
> Verified: ✓ found in JD
> Reasoning: Core verbs are strategic (lead, manage, develop) with only peripheral execution elements, and the role title indicates strategic team leadership autonomy.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`strategic`

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI infrastructure expectations for the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, GenAI products, or AI-assisted development expected of the candidate.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No mention of AI tools, coding assistance, AI-enabled data infrastructure, or any AI capability expectation appears in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing, data quality, or observability signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD does not reference testing practices, data quality frameworks, or observability tools anywhere in the responsibilities or requirements.

**Run 2:** `absent` ✗
> Quote: "No testing signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: There is no mention of testing frameworks, data quality practices, observability, or quality assurance approaches.

**Run 3:** `absent` ✗
> Quote: "No testing responsibility signal."
> Verified: ⚠ NOT found verbatim
> Reasoning: No mention of testing practices, data quality frameworks, observability, or quality assurance responsibilities appears in the JD.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in delivery and team development terms with no mention of risk, compliance, reliability, or prevention of adverse outcomes.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around leadership, client relationships, and business growth rather than risk prevention, compliance, or trustworthiness.

**Run 3:** `none` ✗
> Quote: "Inspire and develop team members; Provide resources (technology, skills, capacity) for success"
> Verified: ✓ found in JD
> Reasoning: JD is framed entirely in positive delivery and capability terms with no risk, compliance, reliability, or loss-prevention language.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
