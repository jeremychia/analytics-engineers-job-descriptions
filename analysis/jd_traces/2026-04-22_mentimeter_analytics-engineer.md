# Trace: 2026-04-22_mentimeter_analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Analytics Engineer — Mentimeter

**URL:** https://job-boards.eu.greenhouse.io/mentimeter/jobs/4839752101?gh_src=3d5665c2teu

**Location:** Stockholm, Sweden (Onsite/Hybrid)

**Visa Sponsorship:** Not available

---

## Key Responsibilities

- Design, own, and evolve core data models and the modelling architecture
- Partner with business and technical stakeholders from problem framing to shipped artefacts
- Build standards, documentation, and data catalogs for the organization
- Contribute strategic input around data modeling, BI tooling, and AI-assisted analytics
- Help the organization interpret data

---

## Required Qualifications

- Roughly 4–7 years of relevant hands-on experience as an Analytics Engineer, Data Analyst, Data Scientist, BI Analyst, or similar role
- Strong SQL proficiency and sound data modeling judgment
- Experience collaborating and translating ambiguous stakeholder needs to clear, maintainable models
- Business acumen covering sales, marketing, and product analytics
- Experience with BI tools and development of BI features
- Git proficiency
- Communication in English with both technical and non-technical audiences
- Experience working with GDPR-sensitive data

---

## Preferred / Bonus Skills

- Hands-on dbt experience
- Experience with a semantic layer or metrics layer
- Experience using AI-assisted coding or coding agents in a disciplined way (reviews, tests, documentation)
- Agile environment experience

---

## Benefits

- Competitive compensation and benefits package, including pension contributions
- Professional development access
- Flexible work-life balance policies

---

## Analysis

### Layer A — Surface Extraction

| Field | Value |
|-------|-------|
| **Company slug** | mentimeter |
| **Job title slug** | analytics-engineer |
| **Experience range** | 4–7 years |
| **Team maturity signal** | Data team maturing; emphasis on standards, architecture, documentation |
| **Compliance context** | GDPR-sensitive data handling required |

---

#
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 4 | 0 | 3 | 0 | 33% | ✗ |
| data_team_maturity | mid | mid | mid | mid | 100% | ✓ |
| jd_authorship | hiring_manager | mixed | recruiter | hiring_manager | 0% | ✗ |
| stakeholder_orientation | internal_data | internal_data | internal_data | internal_data | 100% | ✓ |
| autonomy_level | strategic | mixed | strategic | strategic | 33% | ✓ |
| ai_role |  | ai_user | ai_user | ai_user | 100% | ✗ |
| testing_framing |  | absent | absent | absent | 100% | ✗ |
| loss_aversion_framing |  | none | none | moderate | 33% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize governance, standards, and documentation as core work rather than speed or iteration, signaling a rigour-oriented role.

**Run 2:** `rigour` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize organizational standards, documentation, and architectural governance as core expectations with no velocity or speed-oriented language.

**Run 3:** `rigour` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities emphasise building standards, architecture, documentation, and maintainability rather than speed or iteration velocity.

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Help the organization interpret data"
> Verified: ✓ found in JD
> Reasoning: The role serves broad business decision-making without explicit financial reporting, regulatory, or compliance framing, placing it in moderate risk despite GDPR data handling.

**Run 2:** `moderate` ✓
> Quote: "Business acumen covering sales, marketing, and product analytics"
> Verified: ✓ found in JD
> Reasoning: The role serves business decision-making across go-to-market and product domains, typical of SaaS analytics functions without direct financial or regulatory impact.

**Run 3:** `moderate` ✓
> Quote: "Experience working with GDPR-sensitive data"
> Verified: ✓ found in JD
> Reasoning: While GDPR compliance is explicitly required, the role is fundamentally business analytics rather than regulatory/compliance work, and data errors would affect business decisions more than regulatory exposure.

### collaboration_width
**Manual:** `4`

**Run 1:** `0` ✗
> Quote: "Partner with business and technical stakeholders"
> Verified: ✓ found in JD
> Reasoning: Collaboration partners are mentioned generically without naming specific teams; business acumen areas are listed as knowledge requirements, not as named collaboration partners.

**Run 2:** `3` ✗
> Quote: "sales; marketing; product analytics"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly names three distinct business functions the role must understand and collaborate with.

**Run 3:** `0` ✗
> Quote: "Partner with business and technical stakeholders"
> Verified: ✓ found in JD
> Reasoning: No distinct named partner teams or functions are explicitly identified; 'business and technical stakeholders' is generic language without specificity.

⚠ **Disagreement**: manual=`4` vs LLM majority=`0`

⚠ **LLM inconsistency**: runs gave ['0', '3', '0']

### data_team_maturity
**Manual:** `mid`

**Run 1:** `mid` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The JD references existing models and architecture to evolve, plus building standards and catalogs, indicating an established but growing data function rather than early-stage build-from-scratch.

**Run 2:** `mid` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The responsibility to evolve existing models and architecture suggests established data infrastructure being improved and standardized, rather than greenfield build or a large mature organization.

**Run 3:** `mid` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The organization has existing data infrastructure (BI tools, dbt) but is still standardizing and building governance structures, indicating a maturing data team.

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Design, own, and evolve core data models and the modelling architecture; Help the organization interpret data"
> Verified: ✓ found in JD
> Reasoning: Technical specificity appears in modeling responsibilities and qualification details, but generic action verbs like 'help' and 'partner' indicate mixed authorship.

**Run 2:** `recruiter` ✗
> Quote: "Partner with business and technical stakeholders from problem framing to shipped artefacts"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use generic boilerplate verbs and phrases without technical specificity or context that would only come from someone executing this role.

**Run 3:** `hiring_manager` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The core responsibilities contain technical specificity about data modeling architecture that suggests someone with hands-on experience wrote this rather than a recruiter using boilerplate.

⚠ **Disagreement**: manual=`hiring_manager` vs LLM majority=`mixed`

⚠ **LLM inconsistency**: runs gave ['mixed', 'recruiter', 'hiring_manager']

### stakeholder_orientation
**Manual:** `internal_data`

**Run 1:** `internal_data` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The role's primary mission is building data infrastructure and governance, serving the data platform and downstream analytics consumers rather than external commercial or financial stakeholders.

**Run 2:** `internal_data` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The core responsibilities center on building and evolving the internal analytics platform and data modeling infrastructure, which is the primary audience for deliverables.

**Run 3:** `internal_data` ✓
> Quote: "Build standards, documentation, and data catalogs for the organization"
> Verified: ✓ found in JD
> Reasoning: The primary responsibilities focus on building data infrastructure, standards, and platforms that serve the organization's data consumers, not any specific commercial or product team.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `mixed` ✗
> Quote: "Design, own, and evolve core data models and the modelling architecture; Partner with business and technical stakeholders from problem framing to shipped artefacts"
> Verified: ✓ found in JD
> Reasoning: The role owns the data modeling domain but executes in partnership with stakeholders across the problem-to-delivery lifecycle, indicating shared ownership rather than pure autonomy.

**Run 2:** `strategic` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The responsibilities use strategic ownership verbs (Design, own, evolve) indicating the role defines direction and shapes the analytics infrastructure rather than executing defined priorities.

**Run 3:** `strategic` ✓
> Quote: "Design, own, and evolve core data models and the modelling architecture"
> Verified: ✓ found in JD
> Reasoning: The use of 'design' and 'own' for core data models indicates the role has autonomy to set direction for the organization's data architecture, not just execute against pre-set priorities.

⚠ **LLM inconsistency**: runs gave ['mixed', 'strategic', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `ai_user` ✗
> Quote: "Experience using AI-assisted coding or coding agents in a disciplined way (reviews, tests, documentation)"
> Verified: ✓ found in JD
> Reasoning: The preferred skills explicitly list AI-assisted coding tools as a valued candidate capability for personal productivity acceleration.

**Run 2:** `ai_user` ✗
> Quote: "Experience using AI-assisted coding or coding agents in a disciplined way (reviews, tests, documentation)"
> Verified: ✓ found in JD
> Reasoning: The JD explicitly expects the candidate to have experience using AI-assisted coding tools and coding agents as part of disciplined development practice.

**Run 3:** `ai_user` ✗
> Quote: "Experience using AI-assisted coding or coding agents in a disciplined way (reviews, tests, documentation)"
> Verified: ✓ found in JD
> Reasoning: The preferred qualifications explicitly expect candidates to use AI coding tools and agents to accelerate their own work with proper documentation and review practices.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_user`

### testing_framing
**Manual:** ``

**Run 1:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: The JD makes no mention of testing frameworks, data quality practices, data contracts, or observability, despite emphasizing data modeling and standards.

**Run 2:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of data quality, testing, data contracts, observability, or related practices in any section.

**Run 3:** `absent` ✗
> Quote: "No testing or data quality signal."
> Verified: ✓ found in JD
> Reasoning: The JD contains no mention of testing frameworks, data quality ownership, observability, or data contracts in the responsibilities or requirements.

⚠ **Disagreement**: manual=`` vs LLM majority=`absent`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD frames the role around delivery and capability building without language about preventing failures, compliance, or organizational risk.

**Run 2:** `none` ✗
> Quote: "No loss aversion framing."
> Verified: ✓ found in JD
> Reasoning: The JD is framed entirely in design and ownership capabilities with no language around risk prevention, compliance, reliability, or trust as organizing principles.

**Run 3:** `moderate` ✗
> Quote: "Experience working with GDPR-sensitive data"
> Verified: ✓ found in JD
> Reasoning: While GDPR compliance is explicitly required, the dominant role framing emphasizes design and architecture rather than preventing regulatory or compliance failures.

⚠ **Disagreement**: manual=`` vs LLM majority=`none`

⚠ **LLM inconsistency**: runs gave ['none', 'none', 'moderate']
