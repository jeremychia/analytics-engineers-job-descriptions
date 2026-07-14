# Trace: 2026-07-03_block-labs_business-intelligence-analyst

## JD text (fed to classifier, Layer B stripped)

```
# Business Intelligence Analyst — Block Labs

**URL:** https://jobs.ashbyhq.com/block-labs/06e721f0-df84-4eab-a4f3-be0c1614d458/application
**Location:** Remote
**Date Posted:** 2026-07-03

---

Business Intelligence Analyst

Block Labs is a premier technology studio operating at the bleeding edge of Web3, Artificial Intelligence, and iGaming. We don't just ship features; we engineer high-scale, production-grade platforms that power the next generation of digital products.

About The Role
We're looking for a data-obsessed BI Analyst to turn blockchain and product data into crisp insights that drive growth, retention, and risk controls across our crypto-enabled iGaming products. You'll own the end-to-end analytics stack for wallet funnels, wagering behavior, lifecycle marketing, and compliance—using SQL, DBT, Python, Amplitude and Tableau as your primary tools.

Key Responsibilities
• Drive the business forward through proactive analytics - spot anomalies, frame the right question yourself, and bring actionable recommendations to Product / CRM / Risk before they have to ask.
• Build, maintain, and iterate dashboards surfacing KPIs (GGR/NGR, ARPU, LTV, churn, deposit→wager conversion, fraud loss rate).
• Write production-grade SQL (CTEs, window functions, incremental models) to model clean datasets from Clickhouse and on-chain tables.
• Build and maintain AI-agent workflows that automate recurring analytics - anomaly investigation, root-cause loops etc.
• Use Python (pandas, seaborn, sklearn, scipy) for analysis, data quality checks, lightweight ETL/backfills, API pulls (e.g., blockchain providers), and automation.
• Work with on-chain data: parse EVM logs, token transfers (ERC-20/721), join labeled address datasets, analyze exchange/bridge flows, gas/fee dynamics, and wallet clustering.
• Partner with Product, Marketing/CRM, Risk/Compliance, and Engineering to define event schemas and tracking plans; ensure data quality, lineage, and documentation.
• Design and analyze experiments, cohort analyses, and attribution within iGaming and regional compliance constraints.
• Investigate anomalies (bonus abuse, botting, arbitrage, suspicious wallet rings) and recommend mitigations.
• Automate recurring reporting and alerting for KPI movements.

Must-haves
• 2+ years in BI or Data Analytics; crypto or iGaming exposure preferred.
• Ambitions about building great analytics infrastructure.
• Good SQL: complex joins, window functions, query optimization, and dimensional modeling.
• Solid AI-collaboration craft — prompt & context engineering, spec-driven task framing, and eval-driven iteration.
• BI Versatility: Expert knowledge of Tableau (LODs, parameters, performance tuning) combined with strong interest or experience in modern, open-source BI tools like Metabase or Apache Superset.
• Proficient Python for analytics & data engineering: pandas, modular scripts/notebooks, API integrations, scheduling small jobs, and writing maintainable code.
• Solid statistics and probability fundamentals for experimentation - hypothesis testing, sample size and power, confidence intervals, and the discipline to distinguish real signal from noise.
• Practical understanding of crypto wallets and transaction flows.

Nice-to-haves
• dbt, Great Expectations/Monte Carlo for data quality; orchestration with Airflow/Prefect.
• Built or contributed to production AI agents for analytics — ReAct loops, RAG over a knowledge base , MCP servers for data sources, multi-agent orchestration.
• Ability to produce on-chain analytics (Dune/Flipside/Goldsky/Nansen tables or self-indexed data; contract ABIs; entity labeling).
• Warehouse ecosystems knowledge Clickhouse, AWS, S3 buckets.
• Data governance & privacy (GDPR, data minimization, retention policies).
• Understanding of iGaming economics & KPIs: deposits, wagers, hold, GGR/NGR, RTP, bonus efficiency, RG metrics, and common fraud/AML patterns.
• Experience with product analytics services like Amplitude, Mixpanel, Google…[truncated]
```

---

## Classification results

| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |
|-----------|--------|-------|-------|-------|-----------|--------|
| velocity_vs_rigour | rigour | rigour | rigour | rigour | 100% | ✓ |
| domain_risk | high | moderate | moderate | high | 33% | ✗ |
| collaboration_width | 3 | 6 | 4 | 4 | 33% | ✗ |
| data_team_maturity | early | mid | mid | mid | 100% | ✗ |
| jd_authorship | hiring_manager | hiring_manager | hiring_manager | hiring_manager | 100% | ✓ |
| stakeholder_orientation | mixed | mixed | mixed | commercial | 33% | ✓ |
| autonomy_level | strategic | strategic | mixed | strategic | 33% | ✓ |
| ai_role |  | ai_enabler | ai_user | ai_enabler | 33% | ✗ |
| testing_framing |  | responsibility | responsibility | responsibility | 100% | ✗ |
| loss_aversion_framing |  | moderate | moderate | moderate | 100% | ✗ |

---

## Evidence per dimension

### velocity_vs_rigour
**Manual:** `rigour`

**Run 1:** `rigour` ✓
> Quote: "Write production-grade SQL (CTEs, window functions, incremental models)"
> Verified: ✓ found in JD
> Reasoning: The explicit framing of 'production-grade' paired with specific technical methodology signals quality and correctness as core expectations throughout the JD.

**Run 2:** `rigour` ✓
> Quote: "Write production-grade SQL (CTEs, window functions, incremental models) to model clean datasets from Clickhouse and on-chain tables."
> Verified: ✓ found in JD
> Reasoning: The JD emphasises production-grade work, data quality, compliance, and governance throughout, without velocity-oriented language like 'fast-paced' or 'ship quickly'.

**Run 3:** `rigour` ✓
> Quote: "ensure data quality, lineage, and documentation"
> Verified: ✓ found in JD
> Reasoning: The responsibilities emphasize testing frameworks, production-grade code, data quality checks, and governance at a 6:1 ratio to velocity signals, with Great Expectations and formal data practices framing the work orientation.

### domain_risk
**Manual:** `high`

**Run 1:** `moderate` ✗
> Quote: "risk controls across our crypto-enabled iGaming products"
> Verified: ✓ found in JD
> Reasoning: Explicit mention of risk controls in a regulated gaming domain with fraud detection and compliance responsibilities indicates moderate data risk, secondary to primary growth analytics focus.

**Run 2:** `moderate` ✗
> Quote: "Design and analyze experiments, cohort analyses, and attribution within iGaming and regional compliance constraints."
> Verified: ✓ found in JD
> Reasoning: The role has regulatory and compliance concerns (regional constraints, AML, fraud) but is primarily business analytics (growth, retention), not financial reporting or audit functions.

**Run 3:** `high` ✓
> Quote: "risk controls across our crypto-enabled iGaming products"
> Verified: ✓ found in JD
> Reasoning: The role operates in a heavily regulated iGaming sector with explicit responsibilities for fraud/AML investigation and compliance constraints, combined with financial KPIs (fraud loss rate, GGR/NGR) where data errors have direct business and regulatory impact.

⚠ **Disagreement**: manual=`high` vs LLM majority=`moderate`

⚠ **LLM inconsistency**: runs gave ['moderate', 'moderate', 'high']

### collaboration_width
**Manual:** `3`

**Run 1:** `6` ✗
> Quote: "Product / CRM / Risk; Product, Marketing/CRM, Risk/Compliance, and Engineering"
> Verified: ✓ found in JD
> Reasoning: Six distinct named partner teams are explicitly listed: Product, CRM, Risk, Marketing, Compliance, and Engineering.

**Run 2:** `4` ✗
> Quote: "Partner with Product, Marketing/CRM, Risk/Compliance, and Engineering to define event schemas and tracking plans"
> Verified: ✓ found in JD
> Reasoning: Four distinct named collaborator functions: Product, Marketing/CRM, Risk/Compliance, and Engineering.

**Run 3:** `4` ✗
> Quote: "Partner with Product, Marketing/CRM, Risk/Compliance, and Engineering"
> Verified: ✓ found in JD
> Reasoning: Four distinct named teams are explicitly listed as collaboration partners in the responsibilities section.

⚠ **Disagreement**: manual=`3` vs LLM majority=`4`

⚠ **LLM inconsistency**: runs gave ['6', '4', '4']

### data_team_maturity
**Manual:** `early`

**Run 1:** `mid` ✗
> Quote: "Build and maintain AI-agent workflows that automate recurring analytics - anomaly investigation, root-cause loops etc."
> Verified: ✓ found in JD
> Reasoning: Existing named platforms (Clickhouse, Tableau, Amplitude, DBT) combined with responsibility to build new automation systems indicate infrastructure exists but is actively growing.

**Run 2:** `mid` ✗
> Quote: "model clean datasets from Clickhouse and on-chain tables"
> Verified: ✓ found in JD
> Reasoning: Existing infrastructure and tools (Clickhouse, dbt, Tableau, Amplitude) are deployed and in use; the role builds/maintains/iterates on established systems rather than establishing them from zero.

**Run 3:** `mid` ✗
> Quote: "own the end-to-end analytics stack for wallet funnels, wagering behavior, lifecycle marketing, and compliance"
> Verified: ✓ found in JD
> Reasoning: Named production tools (SQL, DBT, Clickhouse, Amplitude, Tableau) and multi-domain responsibilities indicate existing infrastructure being iterated upon, not built from zero, suggesting a team that has established foundational data capabilities.

⚠ **Disagreement**: manual=`early` vs LLM majority=`mid`

### jd_authorship
**Manual:** `hiring_manager`

**Run 1:** `hiring_manager` ✓
> Quote: "Work with on-chain data: parse EVM logs, token transfers (ERC-20/721), join labeled address datasets, analyze exchange/bridge flows, gas/fee dynamics, and wallet clustering."
> Verified: ✓ found in JD
> Reasoning: The specific blockchain domain knowledge (EVM, ERC-20/721, labeled addresses, bridge flows, wallet clustering, gas dynamics) demonstrates hands-on experience only someone who has done this work possesses.

**Run 2:** `hiring_manager` ✓
> Quote: "Solid AI-collaboration craft — prompt & context engineering, spec-driven task framing, and eval-driven iteration."
> Verified: ✓ found in JD
> Reasoning: The must-have section specifies highly technical, job-specific skills (prompt engineering, Tableau LODs, CTEs, on-chain data patterns) that only someone doing this work daily would write.

**Run 3:** `hiring_manager` ✓
> Quote: "parse EVM logs, token transfers (ERC-20/721), join labeled address datasets, analyze exchange/bridge flows, gas/fee dynamics, and wallet clustering"
> Verified: ✓ found in JD
> Reasoning: The responsibilities contain technical specificity that requires deep domain expertise—specific blockchain transaction types, anomaly patterns (bonus abuse, wallet rings), and on-chain analysis techniques that only someone actively working in crypto analytics would articulate.

### stakeholder_orientation
**Manual:** `mixed`

**Run 1:** `mixed` ✓
> Quote: "turn blockchain and product data into crisp insights that drive growth, retention, and risk controls across our crypto-enabled iGaming products"
> Verified: ✓ found in JD
> Reasoning: The role explicitly serves three equally weighted audiences: product teams (growth, experiments), commercial/CRM teams (retention, lifecycle marketing), and risk/finance teams (compliance, fraud detection).

**Run 2:** `mixed` ✓
> Quote: "turn blockchain and product data into crisp insights that drive growth, retention, and risk controls"
> Verified: ✓ found in JD
> Reasoning: The role genuinely serves Product (experiments, funnels, deposit→wager conversion) and Commercial/Marketing (lifecycle marketing, ARPU, LTV, churn) with equal emphasis in responsibilities.

**Run 3:** `commercial` ✗
> Quote: "Build, maintain, and iterate dashboards surfacing KPIs (GGR/NGR, ARPU, LTV, churn, deposit→wager conversion, fraud loss rate)"
> Verified: ✓ found in JD
> Reasoning: The primary KPIs are revenue and customer value metrics (GGR/NGR, ARPU, LTV) that serve commercial and finance functions, while Product and Risk are secondary partners; the role is optimized for growth and retention economics.

⚠ **LLM inconsistency**: runs gave ['mixed', 'mixed', 'commercial']

### autonomy_level
**Manual:** `strategic`

**Run 1:** `strategic` ✓
> Quote: "You'll own the end-to-end analytics stack for wallet funnels, wagering behavior, lifecycle marketing, and compliance"
> Verified: ✓ found in JD
> Reasoning: Explicit ownership language combined with responsibility to define event schemas, design experiments, and proactively frame questions demonstrates strategic direction-setting.

**Run 2:** `mixed` ✗
> Quote: "own the end-to-end analytics stack for wallet funnels, wagering behavior, lifecycle marketing, and compliance"
> Verified: ✓ found in JD
> Reasoning: The role combines strategic ownership ('own', 'define event schemas', 'design experiments', 'frame the right question yourself') with execution responsibilities ('write SQL', 'build dashboards', 'use Python').

**Run 3:** `strategic` ✓
> Quote: "own the end-to-end analytics stack"
> Verified: ✓ found in JD
> Reasoning: The role is framed as owning how analytics is delivered across multiple domains and is expected to frame questions independently before stakeholders ask, indicating strategic ownership of the analytics function rather than execution of assigned tasks.

⚠ **LLM inconsistency**: runs gave ['strategic', 'mixed', 'strategic']

### ai_role
**Manual:** ``

**Run 1:** `ai_enabler` ✗
> Quote: "Build and maintain AI-agent workflows that automate recurring analytics"
> Verified: ✓ found in JD
> Reasoning: The candidate is expected to build and operate AI agent systems for analytics automation (ReAct loops, RAG, MCP servers mentioned in nice-to-haves), not just use AI tools for personal productivity.

**Run 2:** `ai_user` ✗
> Quote: "Solid AI-collaboration craft — prompt & context engineering, spec-driven task framing, and eval-driven iteration."
> Verified: ✓ found in JD
> Reasoning: The must-have requirement expects the candidate to demonstrate skills in using AI tools effectively (prompt engineering, evaluation), signaling they should use AI agents to automate their own analytics work.

**Run 3:** `ai_enabler` ✗
> Quote: "Build and maintain AI-agent workflows that automate recurring analytics - anomaly investigation, root-cause loops etc."
> Verified: ✓ found in JD
> Reasoning: The candidate must build and deploy AI-agent infrastructure that runs analytics automation as a named responsibility, going beyond using AI tools personally to building infrastructure that AI systems operate within.

⚠ **Disagreement**: manual=`` vs LLM majority=`ai_enabler`

⚠ **LLM inconsistency**: runs gave ['ai_enabler', 'ai_user', 'ai_enabler']

### testing_framing
**Manual:** ``

**Run 1:** `responsibility` ✗
> Quote: "ensure data quality, lineage, and documentation"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as something the candidate must ensure as part of their responsibilities in the context of event schema definition, indicating ownership rather than tool experience.

**Run 2:** `responsibility` ✗
> Quote: "ensure data quality, lineage, and documentation"
> Verified: ✓ found in JD
> Reasoning: Data quality and lineage assurance are listed as explicit responsibilities in the event schema work, framing them as candidate accountability rather than optional tooling.

**Run 3:** `responsibility` ✗
> Quote: "ensure data quality, lineage, and documentation"
> Verified: ✓ found in JD
> Reasoning: Data quality is framed as an owned responsibility ("ensure") in partnership with engineering, not as tool experience in a requirements list.

⚠ **Disagreement**: manual=`` vs LLM majority=`responsibility`

### loss_aversion_framing
**Manual:** ``

**Run 1:** `moderate` ✗
> Quote: "Investigate anomalies (bonus abuse, botting, arbitrage, suspicious wallet rings) and recommend mitigations"
> Verified: ✓ found in JD
> Reasoning: Fraud detection, compliance, and risk controls are present responsibilities, but the role framing emphasizes delivery of growth and retention analytics equally, making loss aversion secondary rather than dominant.

**Run 2:** `moderate` ✗
> Quote: "Investigate anomalies (bonus abuse, botting, arbitrage, suspicious wallet rings) and recommend mitigations."
> Verified: ✓ found in JD
> Reasoning: Risk and compliance concerns are integrated (fraud investigation, compliance constraints, compliance partners) but the role is primarily framed as driving business growth and delivering insights, not preventing bad outcomes.

**Run 3:** `moderate` ✗
> Quote: "Investigate anomalies (bonus abuse, botting, arbitrage, suspicious wallet rings) and recommend mitigations"
> Verified: ✓ found in JD
> Reasoning: Fraud and operational anomaly investigation are significant responsibilities, but the primary role framing emphasizes growth and retention; regulatory compliance is a constraint on work, not the dominant mission.

⚠ **Disagreement**: manual=`` vs LLM majority=`moderate`
