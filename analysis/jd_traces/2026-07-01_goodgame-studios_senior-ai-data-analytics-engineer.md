# Trace: 2026-07-01_goodgame-studios_senior-ai-data-analytics-engineer

## JD text (fed to classifier, Layer B stripped)

```
# Senior AI Data & Analytics Engineer — Goodgame Studios

**URL:** https://goodgamestudios.teamtailor.com/jobs/7936415-senior-ai-data-analytics-engineer?promotion=2077806-trackable-share-link-senior-ai-data-analytics-engineer
**Location:** Not stated in JD
**Date Posted:** 2026-07-01

---

Senior AI Data & Analytics Engineer at Goodgame Studios

Role Summary
This position focuses on building analytics infrastructure for a new mobile game using AI-native workflows. The role emphasises hands-on experience with agentic AI tools and the judgment to oversee AI-generated analytics work.

Key Responsibilities

Data Foundation: Design end-to-end gameplay analytics architecture covering tracking, storage, processing, and reporting. Own data correctness and investigate quality anomalies.

AI-Native Analytics: Build semantic layers translating raw data into validated concepts. Develop AI-driven reporting and insight workflows. Review AI-generated code on critical paths before production deployment.

Product Intelligence: Identify opportunities and risks in gameplay data. Support product and design teams with actionable recommendations derived from complex datasets.

Agentic Standards: Help establish organisational adoption patterns for AI-assisted engineering, including review processes and quality gates.

Required Experience
- Several years building production analytics systems, preferably gaming/mobile
- Demonstrated expertise using LLMs and agentic workflows in production
- Concrete experience structuring prompts, managing multi-agent workflows, and reviewing AI-generated outputs
- Strong Python and SQL skills with ability to verify results independently
- Experience designing scalable data architectures and pipelines
- Cloud-based data platform familiarity
- Strong analytical decomposition skills and the ability to translate ambiguous business questions into precise analytical problems
- Independent initiative ownership and excellent English communication

Nice-to-Have Skills
Gaming/mobile analytics experience, event-driven architectures, real-time telemetry systems, published work on agentic workflows.

Interview Approach
Candidates should demonstrate actual agentic workflows they've built, including specifications, failure points, and oversight mechanisms.

---
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | mixed | rigour | rigour | rigour | 100% | ✗ |
| domain_risk | moderate | moderate | moderate | moderate | 100% | ✓ |
| collaboration_width | 2 | 2 | 2 | 2 | 100% | ✓ |
| data_team_maturity | early | mid | mid | early | 33% | ✗ |
| jd_authorship | hiring_manager | mixed | hiring_manager | hiring_manager | 33% | ✓ |
| stakeholder_orientation | product | product | product | product | 100% | ✓ |
| autonomy_level | strategic | strategic | strategic | mixed | 33% | ✓ |
| ai_role |  | ai_enabler | ai_enabler | ai_enabler | 100% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `mixed`

**Run 1:** `rigour` ✗
> Quote: "Own data correctness and investigate quality anomalies."
> Verified: ✓ found in JD
> Reasoning: The role explicitly emphasizes data correctness, quality anomaly investigation, and review/quality gates with no velocity signals like 'fast-paced' or 'move quickly'.

**Run 2:** `rigour` ✗
> Quote: "Review AI-generated code on critical paths before production deployment"
> Verified: ✓ found in JD
> Reasoning: Multiple governance and quality control signals (data correctness ownership, anomaly investigation, review processes, quality gates) without any velocity or speed emphasis.

**Run 3:** `rigour` ✗
> Quote: "Review AI-generated code on critical paths before production deployment"
> Verified: ✓ found in JD
> Reasoning: Quality assurance, oversight, validation, and review processes dominate the responsibilities, with no speed or delivery velocity language present.

⚠ **Disagreement**: manual=`mixed` vs LLM majority=`rigour`

### domain_risk
**Manual:** `moderate`

**Run 1:** `moderate` ✓
> Quote: "Identify opportunities and risks in gameplay data."
> Verified: ✓ found in JD
> Reasoning: Gaming analytics affects business decisions about product design without direct regulatory, financial reporting, or compliance consequences.

**Run 2:** `moderate` ✓
> Quote: "analytics infrastructure for a new mobile game"
> Verified: ✓ found in JD
> Reasoning: Gaming analytics affects business decisions and gameplay insights, but lacks financial reporting, compliance, or regulatory signals typical of high-risk domains.

**Run 3:** `moderate` ✓
> Quote: "Identify opportunities and risks in gameplay data. Support product and design teams with actionable recommendations"
> Verified: ✓ found in JD
> Reasoning: Gameplay analytics affect product decisions but carry no regulatory, financial reporting, or compliance consequences.

### collaboration_width
**Manual:** `2`

**Run 1:** `2` ✓
> Quote: "product and design teams"
> Verified: ✓ found in JD
> Reasoning: Product and design are the two explicitly named teams this role collaborates with.

**Run 2:** `2` ✓
> Quote: "Support product and design teams with actionable recommendations"
> Verified: ✓ found in JD
> Reasoning: Only Product and Design teams are explicitly named as collaboration partners.

**Run 3:** `2` ✓
> Quote: "product and design teams"
> Verified: ✓ found in JD
> Reasoning: Product and Design are explicitly named as distinct partner functions requiring collaboration.

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Design end-to-end gameplay analytics architecture covering tracking, storage, processing, and reporting."
> Verified: ✓ found in JD
> Reasoning: The role is designing new analytics infrastructure for a specific product, suggesting a team ramping up its data capabilities rather than building from complete zero or maintaining established scale.

**Run 2:** `mid` ✗
> Quote: "Help establish organisational adoption patterns for AI-assisted engineering"
> Verified: ✓ found in JD
> Reasoning: The organization has existing structure (implied by 'organisational adoption') but is building new analytics infrastructure for a new game product, placing this at mid-stage maturity.

**Run 3:** `early` ✓
> Quote: "building analytics infrastructure for a new mobile game using AI-native workflows"
> Verified: ✓ found in JD
> Reasoning: The language emphasizes building analytics infrastructure from scratch for a new game, with no mention of existing tools, established teams, or scaling.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

⚠ **LLM inconsistency**: runs gave ['mid', 'mid', 'early']

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `mixed` ✗
> Quote: "Review AI-generated code on critical paths before production deployment; Help establish organisational adoption patterns for AI-assisted engineering, including review processes and quality gates."
> Verified: ✓ found in JD
> Reasoning: The JD combines specific technical practices (agentic workflows, critical paths, review processes) suggesting hiring manager input with generic responsibility phrasing that suggests recruiter involvement.

**Run 2:** `hiring_manager` ✓
> Quote: "Concrete experience structuring prompts, managing multi-agent workflows, and reviewing AI-generated outputs"
> Verified: ✓ found in JD
> Reasoning: Responsibilities contain specific technical requirements and interview guidance that only come from someone who has worked with agentic systems in production.

**Run 3:** `hiring_manager` ✓
> Quote: "Demonstrated expertise using LLMs and agentic workflows in production"
> Verified: ✓ found in JD
> Reasoning: Specific technical requirements (LLMs, agentic workflows, prompt structuring, multi-agent workflow management, AI-generated code review) show expertise from someone who has built or managed these systems.

⚠ **LLM inconsistency**: runs gave ['mixed', 'hiring_manager', 'hiring_manager']

### stakeholder_orientation
**Manual:** `product`

**Run 1:** `product` ✓
> Quote: "Support product and design teams with actionable recommendations derived from complex datasets."
> Verified: ✓ found in JD
> Reasoning: The role explicitly supports product and design teams as primary stakeholders, with responsibilities oriented around identifying gameplay opportunities and risks for their decisions.

**Run 2:** `product` ✓
> Quote: "Support product and design teams with actionable recommendations derived from complex datasets"
> Verified: ✓ found in JD
> Reasoning: The primary audience for analytics intelligence is explicitly the product and design teams, not finance, commercial, or internal data consumers.

**Run 3:** `product` ✓
> Quote: "Product Intelligence: Identify opportunities and risks in gameplay data. Support product and design teams with actionable recommendations derived from complex datasets."
> Verified: ✓ found in JD
> Reasoning: Primary responsibilities focus explicitly on product intelligence and serving product/design teams, not commercial, finance, or internal data infrastructure.

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "Design end-to-end gameplay analytics architecture covering tracking, storage, processing, and reporting. Own data correctness and investigate quality anomalies."
> Verified: ✓ found in JD
> Reasoning: The role is expected to design architecture, own technical practices, and establish organizational adoption patterns—strategic verbs indicating direction-setting rather than execution against externally set priorities.

**Run 2:** `strategic` ✓
> Quote: "Design end-to-end gameplay analytics architecture covering tracking, storage, processing, and reporting"
> Verified: ✓ found in JD
> Reasoning: The role is framed around designing and owning the analytics architecture and data quality standards, not executing direction set by others.

**Run 3:** `mixed` ✗
> Quote: "Independent initiative ownership"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic design and ownership of analytics architecture and AI standards with execution in support of product teams, creating both directive and service responsibilities.

⚠ **LLM inconsistency**: runs gave ['strategic', 'strategic', 'mixed']

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Develop AI-driven reporting and insight workflows."
> Verified: ✓ found in JD
> Reasoning: The role expects the candidate to build systems and workflows that incorporate AI, manage AI-generated code, and develop AI-driven capabilities—requiring enablement of AI infrastructure, not just personal AI tool usage.

**Run 2:** `ai_enabler` ✗
> Quote: "Develop AI-driven reporting and insight workflows"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build data infrastructure and semantic layers for AI systems to consume and operate on, not just use AI tools for personal productivity.

**Run 3:** `ai_enabler` ✗
> Quote: "Build semantic layers translating raw data into validated concepts. Develop AI-driven reporting and insight workflows."
> Verified: ✓ found in JD
> Reasoning: The candidate must build data infrastructure and semantic models that AI systems consume and operate on, not simply use AI as a personal coding tool.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "Own data correctness and investigate quality anomalies; Help establish organisational adoption patterns for AI-assisted engineering, including review processes and quality gates."
> Verified: ✓ found in JD
> Reasoning: Data correctness, quality anomalies, and quality gates are framed as responsibilities the candidate owns and establishes, not as tools or practices to apply.

**Run 2:** `responsibility` ✗
> Quote: "Own data correctness and investigate quality anomalies"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an owned responsibility with active investigation, not listed as a tool requirement.

**Run 3:** `responsibility` ✗
> Quote: "Own data correctness and investigate quality anomalies"
> Verified: ✓ found in JD
> Reasoning: Data correctness is framed as an owned accountability with explicit responsibility for quality investigation, not merely as a tool listed in skills.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Own data correctness and investigate quality anomalies; Review AI-generated code on critical paths before production deployment."
> Verified: ✓ found in JD
> Reasoning: Data correctness and operational reliability (critical path reviews) are concerns, but without the compliance or decision-maker trust framing that would indicate high loss aversion.

**Run 2:** `moderate` ✗
> Quote: "Review AI-generated code on critical paths before production deployment"
> Verified: ✓ found in JD
> Reasoning: The JD emphasizes operational reliability and preventing technical failures (bad AI code, data errors), but lacks compliance or stakeholder trust language.

**Run 3:** `moderate` ✗
> Quote: "Review AI-generated code on critical paths before production deployment"
> Verified: ✓ found in JD
> Reasoning: Emphasis on preventing operational failures and maintaining reliability through review and quality gates, but no regulatory, compliance, or stakeholder-trust language.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
