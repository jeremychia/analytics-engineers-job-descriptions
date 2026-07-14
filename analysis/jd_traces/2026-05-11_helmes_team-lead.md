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
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | low | moderate | moderate | moderate | 100% | ✗ |
| collaboration_width | 2 | 2 | 2 | 2 | 100% | ✓ |
| data_team_maturity | early | mid | early | early | 33% | ✓ |
| jd_authorship | recruiter | recruiter | recruiter | recruiter | 100% | ✓ |
| stakeholder_orientation | commercial | commercial | commercial | commercial | 100% | ✓ |
| autonomy_level | mixed | mixed | strategic | execution | 0% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | none | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Monitor performance and continuously improve work methods"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes continuous improvement and monitoring as core management responsibilities with no explicit velocity signals like "fast-paced" or rapid delivery.

**Run 2:** `rigour` ✓
> Quote: "Monitor performance and continuously improve work methods"
> Verified: ✓ found in JD
> Reasoning: The emphasis on continuous improvement and performance monitoring reflects an operational quality and reliability focus rather than delivery speed.

**Run 3:** `rigour` ✓
> Quote: "Monitor performance and continuously improve work methods"
> Verified: ✓ found in JD
> Reasoning: The emphasis on continuous improvement of work methods signals a quality/process-oriented approach rather than speed-focused delivery.

### domain_risk
**Manual:** `low`

**Run 1:** `moderate` ✗
> Quote: "Manage finances (billing, reporting)"
> Verified: ✓ found in JD
> Reasoning: The role involves financial responsibility and client-facing software development work, indicating moderate business impact without explicit regulatory or high-risk sector signals.

**Run 2:** `moderate` ✗
> Quote: "Manage finances (billing, reporting)"
> Verified: ✓ found in JD
> Reasoning: Unit-level financial responsibility creates moderate business risk, but this is not a regulated, financial, or high-consequence domain.

**Run 3:** `moderate` ✗
> Quote: "Develop client relationships and seek new opportunities; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: Bad decisions affect client satisfaction and revenue outcomes, but without explicit regulatory or compliance concerns, this reflects moderate business risk rather than high-stakes financial or regulatory exposure.

⚠ **Disagreement**: manual=`low` vs LLM majority=`moderate`

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "clients; sales"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names two distinct collaboration partners: clients (primary contact and relationship development) and sales (client acquisition support).

**Run 2:** `2` ✓
> Quote: "Serve as primary contact for both clients and team; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: Two distinct named collaborators are explicitly identified: clients (external party) and sales (named function).

**Run 3:** `2` ✓
> Quote: "Serve as primary contact for both clients and team; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: Two named partner functions: Clients (external parties explicitly named as collaboration partners) and Sales (named organizational function).

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Contribute to process and tool development"
> Verified: ✓ found in JD
> Reasoning: The organization has established teams and operations across multiple offices but actively develops processes and tools, indicating ongoing infrastructure work typical of mid-stage teams.

**Run 2:** `early` ✓
> Quote: "Contribute to process and tool development"
> Verified: ✓ found in JD
> Reasoning: No established data infrastructure or team is mentioned; this is a general software development leadership role with no data-specific signals.

**Run 3:** `early` ✓
> Quote: "Contribute to process and tool development"
> Verified: ✓ found in JD
> Reasoning: The minimal infrastructure and process language combined with no data-specific mention suggests a small software company in early organizational maturity stages.

⚠ **LLM inconsistency**: runs gave ['mid', 'early', 'early']

### jd_authorship
**Manual:** `recruiter`

**Run 1:** `recruiter` ✓
> Quote: "Lead software development teams and projects; Inspire and develop team members; Provide resources (technology, skills, capacity) for success"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic, boilerplate action verbs with no technical specificity, tool names with context, or scale details that would indicate someone with direct experience writing this role.

**Run 2:** `recruiter` ✓
> Quote: "Lead software development teams and projects; Inspire and develop team members"
> Verified: ✓ found in JD
> Reasoning: Generic boilerplate action verbs with no technical specificity, tool context, scale, or domain-specific detail indicate recruiter authorship.

**Run 3:** `recruiter` ✓
> Quote: "Lead software development teams and projects; Inspire and develop team members; Provide resources (technology, skills, capacity) for success"
> Verified: ✓ found in JD
> Reasoning: Responsibilities rely entirely on generic boilerplate action verbs and lack the technical specificity (named tools, scale metrics, or precise methodologies) that would indicate a hiring manager wrote this.

### stakeholder_orientation
**Manual:** `commercial`

**Run 1:** `commercial` ✓
> Quote: "Develop client relationships and seek new opportunities; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: The primary orientation is toward clients and sales support, which are clearly commercial/GTM-focused audiences.

**Run 2:** `commercial` ✓
> Quote: "Develop client relationships and seek new opportunities; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: The role's primary responsibilities focus on client relationships, business development, and supporting sales/commercial functions.

**Run 3:** `commercial` ✓
> Quote: "Develop client relationships and seek new opportunities; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: The role is positioned as a bridge to clients and sales, with explicit emphasis on client relationship development and sales support, reflecting commercial stakeholder orientation.

### autonomy_level
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "Lead software development teams and projects; Support sales and client acquisition"
> Verified: ✓ found in JD
> Reasoning: The role genuinely combines strategic leadership verbs (lead, develop relationships, seek opportunities) with execution verbs (support, manage, serve), indicating both direction-setting and execution responsibilities.

**Run 2:** `strategic` ✗
> Quote: "Develop client relationships and seek new opportunities; Monitor performance and continuously improve work methods"
> Verified: ✓ found in JD
> Reasoning: The role expects the person to set direction (define improvements, identify opportunities) rather than execute predetermined work.

**Run 3:** `execution` ✗
> Quote: "Support sales and client acquisition; Serve as primary contact for both clients and team"
> Verified: ✓ found in JD
> Reasoning: Support and service-oriented language frames this as execution of a defined role within organizational structures rather than strategic direction-setting.

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'execution']

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI tools, AI-assisted coding, or AI infrastructure expectations for the candidate.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: There is no mention of AI tools, coding assistance frameworks, or AI-powered data infrastructure anywhere in the job description.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of AI coding tools, AI-assisted workflows, or AI infrastructure expectations for the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or quality framework is mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: The JD contains no reference to testing, data quality, observability, or quality frameworks in either responsibilities or requirements.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal mentioned."
> Verified: ⚠ NOT found verbatim
> Reasoning: This management role contains no mention of testing, data quality, observability, or quality assurance frameworks.

**Run 3:** `absent` ✗
> Quote: "No testing, data quality, or observability signal appears in the JD."
> Verified: ⚠ NOT found verbatim
> Reasoning: Testing, data quality frameworks, and reliability practices are completely absent from both responsibilities and requirements sections.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed around delivery, team management, and client relationships with no language around risk, compliance, or preventing bad outcomes.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role in leadership and capability terms without explicit emphasis on preventing bad outcomes, compliance, risk, or stakeholder trust.

**Run 3:** `none` ✗
> Quote: "Caring work environment, where you can grow, take responsibility and have real impact"
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely in capability and growth terms with no risk register, compliance concerns, or stakeholder-trust-oriented language.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`
