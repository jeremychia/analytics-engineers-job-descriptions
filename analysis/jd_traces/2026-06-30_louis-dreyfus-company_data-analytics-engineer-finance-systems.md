# Trace: 2026-06-30_louis-dreyfus-company_data-analytics-engineer-finance-systems

## JD text (fed to classifier, Layer B stripped)

```
# Data & Analytics Engineer - Finance Systems — Louis Dreyfus Company

**URL:** https://www.ldc.com/careers/join-ldc/job-details/?id=ef073889-b345-48c9-afcc-b596cdeafbfa&trid=2d92f286-613b-4daf-9dfa-6340ffbecf73
**Location:** Sofia, Bulgaria
**Date Posted:** 2026-06-30

---

Data & Analytics Engineer - Finance Systems
Sofia, Bulgaria
Job Reference JR0096116
Professional Areas: Information Technology
Function: Information Technology
Contract Type: Permanent
Years of Work Experience: 0-3
Start date: 2026-06-01

Company Description
Louis Dreyfus Company is a leading merchant and processor of agricultural goods. Our activities span the entire value chain from farm to fork, across a broad range of business lines, we leverage our global reach and extensive asset network to serve our customers and consumers around the world. Structured as a matrix organization of six geographical regions and ten platforms, Louis Dreyfus Company is active in over 100 countries and employs approximately 18,000 people globally.

This role will have an impactful contribution to supporting and enhancing Louis Dreyfus Company's OneStream Enterprise Performance Management (EPM) platform, contributing to the delivery of accurate, reliable, and scalable financial planning, reporting, and performance management processes. Partnering with Finance, Data & Analytics teams, Business Process Owners, and external implementation partners, you will develop expertise in Enterprise Performance Management technologies while contributing to platform performance, data quality, governance, and operational stability.

Job Description
Brief:
Support LDC's OneStream-based Enterprise Performance Management platform from Sofia as a core technical engineer, delivering deep configuration, performance optimization, rule development, troubleshooting, and technical platform stability.
This role contributes directly to building the Enterprise Performance Management Center of Excellence, enabling scalable operations, technical autonomy, and long-term value creation across Daily P&L, Actuals, Forecasting, Group Reporting and future Enterprise performance management roadmap components.

The resource will join at a key moment (platform ramp-up and CoE build), work closely with experienced internal and external experts, and quickly take ownership of meaningful technical components that directly impact Finance performance and operational efficiency.

Main Responsibilities:
- Develop and enhance business rules, calculations, workflows, and data transformation processes.
- Support financial reporting, forecasting, planning, and performance management solutions.
- Troubleshoot platform issues and investigate data quality or integration challenges.
- Work with Finance teams to understand business requirements and translate them into technical solutions.
- Optimize system performance and improve reliability of financial processes.
- Participate in testing, releases, and deployments across development and production environments.
- Create technical documentation, support guides, and reusable development standards.
- Collaborate with global stakeholders, implementation partners, and internal technology teams.
- Contribute to the growth of the Enterprise Performance Management Center of Excellence and help build future best practices.

What Makes This Opportunity Different
- Join a newly established Center of Excellence and help shape its future.
- Gain expertise in a highly specialized and sought-after technology domain.
- Work directly with international Finance and Data teams.
- Receive mentorship from experienced OneStream consultants and platform experts.
- Exposure to large-scale global financial processes and enterprise systems.
- Opportunity to grow into senior engineering, architecture, or product ownership roles.

Experience
What We're Looking For

Education
Bachelor's or Master's degree in Computer Science, Information Systems, Engineering, Mathematics, Economics, Finance Technology, or …[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | high | high | high | 100% | ✓ |
| collaboration_width | 3 | 4 | 3 | 3 | 33% | ✓ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | recruiter | mixed | 33% | ✗ |
| stakeholder_orientation | finance | finance | finance | finance | 100% | ✓ |
| autonomy_level | execution | execution | execution | execution | 100% | ✓ |
| ai_role |  | none | none | none | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Troubleshoot platform issues and investigate data quality or integration challenges."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes accuracy, reliability, data quality, governance, and operational stability as core values, with no velocity signals like fast-paced iteration or rapid delivery.

**Run 2:** `rigour` ✓
> Quote: "Optimize system performance and improve reliability of financial processes."
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes reliability, data quality, governance, and operational stability throughout with no velocity or speed-focused language present.

**Run 3:** `rigour` ✓
> Quote: "Optimize system performance and improve reliability of financial processes."
> Verified: ✓ found in JD
> Reasoning: The role emphasizes reliability, stability, testing, and documentation over speed or iteration, with no signals of velocity orientation.

### domain_risk
**Manual:** `high`

**Run 1:** `high` ✓
> Quote: "contributing to the delivery of accurate, reliable, and scalable financial planning, reporting, and performance management processes"
> Verified: ✓ found in JD
> Reasoning: Financial reporting, Daily P&L, and forecasting directly impact financial governance and executive decision-making for a major global trading company.

**Run 2:** `high` ✓
> Quote: "Daily P&L, Actuals, Forecasting, Group Reporting and future Enterprise performance management roadmap components."
> Verified: ✓ found in JD
> Reasoning: Data errors in P&L, financial reporting, and forecasting directly affect financial accuracy and regulatory compliance in a global financial organization.

**Run 3:** `high` ✓
> Quote: "contributing to the delivery of accurate, reliable, and scalable financial planning, reporting, and performance management processes."
> Verified: ✓ found in JD
> Reasoning: This is a financial systems role supporting P&L, forecasting, and group reporting where data errors directly affect financial reporting accuracy.

### collaboration_width
**Manual:** `3`

**Run 1:** `4` ✗
> Quote: "Partnering with Finance, Data & Analytics teams, Business Process Owners, and external implementation partners"
> Verified: ✓ found in JD
> Reasoning: Four distinct named teams explicitly listed: Finance, Data & Analytics, Business Process Owners, and external implementation partners.

**Run 2:** `3` ✓
> Quote: "Partnering with Finance, Data & Analytics teams, Business Process Owners, and external implementation partners"
> Verified: ✓ found in JD
> Reasoning: Three named partner functions are explicitly listed: Finance teams, Data & Analytics teams, and Business Process Owners.

**Run 3:** `3` ✓
> Quote: "Finance, Data & Analytics teams, Business Process Owners"
> Verified: ✓ found in JD
> Reasoning: The JD names three distinct partner functions: Finance, Data & Analytics teams, and Business Process Owners.

⚠ **LLM inconsistency**: runs gave ['4', '3', '3']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "The resource will join at a key moment (platform ramp-up and CoE build), work closely with experienced internal and external experts"
> Verified: ✓ found in JD
> Reasoning: OneStream platform is deployed and operational, but the Center of Excellence is newly established; the team is growing with mentorship available from experts.

**Run 2:** `mid` ✓
> Quote: "Join a newly established Center of Excellence and help shape its future."
> Verified: ✓ found in JD
> Reasoning: The OneStream EPM platform infrastructure exists with established processes, but the Center of Excellence is newly built and growing, indicating a mid-stage function.

**Run 3:** `mid` ✓
> Quote: "The resource will join at a key moment (platform ramp-up and CoE build), work closely with experienced internal and external experts, and quickly take ownership of meaningful technical components."
> Verified: ⚠ NOT found verbatim
> Reasoning: The OneStream EPM platform and team already exist with internal/external experts, but the Center of Excellence is newly established and ramping up—indicating a maturing data function, not early or fully mature.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Develop and enhance business rules, calculations, workflows, and data transformation processes."
> Verified: ✓ found in JD
> Reasoning: OneStream-specific terminology (rule development, Daily P&L/Actuals modules, Center of Excellence) suggests platform domain knowledge, but responsibilities are described with generic action verbs without specific methodologies or scale.

**Run 2:** `recruiter` ✗
> Quote: "Support financial reporting, forecasting, planning, and performance management solutions."
> Verified: ✓ found in JD
> Reasoning: Responsibilities use generic boilerplate action verbs (support, work with, collaborate) without technical specificity about day-to-day work despite naming the OneStream platform.

**Run 3:** `mixed` ✗
> Quote: "Develop and enhance business rules, calculations, workflows, and data transformation processes."
> Verified: ✓ found in JD
> Reasoning: The role shows specific knowledge of EPM systems and OneStream platform context, but most responsibilities are written in generic boilerplate language like 'collaborate with stakeholders' and 'participate in testing'.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'recruiter', 'mixed']

### stakeholder_orientation
**Manual:** `finance`

**Run 1:** `finance` ✓
> Quote: "Work with Finance teams to understand business requirements and translate them into technical solutions."
> Verified: ✓ found in JD
> Reasoning: Primary audience throughout is Finance; the role's impact is framed as directly supporting Finance performance and financial reporting processes.

**Run 2:** `finance` ✓
> Quote: "Work with Finance teams to understand business requirements and translate them into technical solutions."
> Verified: ✓ found in JD
> Reasoning: The entire role is framed around supporting Finance functions—financial reporting, P&L, forecasting, and FP&A processes.

**Run 3:** `finance` ✓
> Quote: "Work with Finance teams to understand business requirements and translate them into technical solutions."
> Verified: ✓ found in JD
> Reasoning: The role explicitly partners with Finance teams to support financial reporting, forecasting, planning, and performance management—clear finance/FP&A orientation.

### autonomy_level
**Manual:** `execution`

**Run 1:** `execution` ✓
> Quote: "Work with Finance teams to understand business requirements and translate them into technical solutions."
> Verified: ✓ found in JD
> Reasoning: Requirements are defined by Finance; this role executes by translating those requirements into platform configurations within an established system and defined CoE scope.

**Run 2:** `execution` ✓
> Quote: "The resource will join at a key moment (platform ramp-up and CoE build), work closely with experienced internal and external experts, and quickly take ownership of meaningful technical components"
> Verified: ✓ found in JD
> Reasoning: The role is execution-oriented, working under mentorship from experienced experts on scoped platform components in an early-career position (0-3 years).

**Run 3:** `execution` ✓
> Quote: "work closely with experienced internal and external experts, and quickly take ownership of meaningful technical components"
> Verified: ✓ found in JD
> Reasoning: The role takes ownership of technical implementation within OneStream EPM platform, but operates under scoped work mentorship from experienced experts, not setting strategic direction.

### ai_role
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: No AI tools, coding assistants, or AI skill expectations are mentioned; interest in machine learning is listed only as a nice-to-have, not a candidate requirement.

**Run 2:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: Machine learning appears only as a nice-to-have interest in Python analytics; no AI coding tools, AI-assisted development, or AI infrastructure expectations are present.

**Run 3:** `none` ✗
> Quote: "No AI skill signal."
> Verified: ✓ found in JD
> Reasoning: The JD lists 'interest in Python-based analytics, machine learning, or process automation' as a nice-to-have, but expects no AI tool usage or AI data infrastructure building from the candidate.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "Participate in testing, releases, and deployments across development and production environments."
> Verified: ✓ found in JD
> Reasoning: Testing is mentioned only as participation in a process; no testing frameworks, data quality standards, or testing ownership appear as a defined candidate responsibility.

**Run 2:** `absent` ✗
> Quote: "Troubleshoot platform issues and investigate data quality or integration challenges."
> Verified: ✓ found in JD
> Reasoning: Data quality appears only in a troubleshooting context, not as an owned framework or responsibility, with no testing tools or practices listed.

**Run 3:** `absent` ✗
> Quote: "Participate in testing, releases, and deployments across development and production environments."
> Verified: ✓ found in JD
> Reasoning: Testing and data quality are mentioned as activities to participate in and troubleshoot, but the role does not own or define testing practices, frameworks, or data quality standards.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Optimize system performance and improve reliability of financial processes."
> Verified: ✓ found in JD
> Reasoning: Operational reliability, data quality, and platform stability are emphasized, but there is no explicit regulatory, compliance, or risk-register framing typical of high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "accurate, reliable, and scalable financial planning, reporting, and performance management processes."
> Verified: ✓ found in JD
> Reasoning: Reliability and accuracy are emphasized throughout, but framed as operational excellence and capability rather than compliance or regulatory risk.

**Run 3:** `moderate` ✗
> Quote: "contributing to the delivery of accurate, reliable, and scalable financial planning, reporting, and performance management processes."
> Verified: ✓ found in JD
> Reasoning: Reliability and accuracy are emphasized as operational concerns for financial processes, but without explicit compliance, regulatory, or audit framing—indicating moderate risk mitigation focus.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
