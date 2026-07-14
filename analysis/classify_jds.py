"""
LLM-based JD classification — 3 runs per JD across 5 Layer B dimensions.
Uses the claude CLI (already authenticated) rather than the API SDK.
Compares against manual classifications from applications_dataset.csv where available.

Sources (merged, deduplicated by app_id):
  1. resume/applications/<app_id>/jd.md          — application pipeline JDs
  2. ../../data/<app_id>/                         — standalone classify-jd corpus
     reads jd.md if present, falls back to jd_archive.md

Outputs:
  llm_classifications.csv    — full results with all runs and reasoning
  consistency_report.md      — aggregate stats + disagreement analysis
  jd_traces/<app_id>.md      — per-JD trace: JD text, all 3 runs, full reasoning,
                                evidence quote verification

Run:
  python3 classify_jds.py                  # classify all JDs
  python3 classify_jds.py --reset          # delete existing results and restart
  python3 classify_jds.py --trace-only     # regenerate traces from existing CSV
"""

import os
import re
import csv
import sys
import json
import time
import subprocess
from pathlib import Path
from collections import Counter, defaultdict

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
APPLICATIONS_DIR = Path("/Users/jeremychia/Documents/Github/jeremychia/resume/applications")
JD_DATA_DIR = Path(__file__).parent.parent / "data"
DATASET_CSV = Path("/Users/jeremychia/Documents/Github/jeremychia/resume/analysis/applications_dataset.csv")
OUT_DIR = Path(__file__).parent
TRACES_DIR = OUT_DIR / "jd_traces"
def _find_claude_bin() -> str:
    """Locate the claude CLI, tolerating version bumps."""
    base = Path.home() / "Library/Application Support/Claude/claude-code"
    if base.exists():
        candidates = sorted(base.iterdir(), reverse=True)
        for v in candidates:
            p = v / "claude.app/Contents/MacOS/claude"
            if p.exists():
                return str(p)
    raise FileNotFoundError(f"claude binary not found under {base}")

CLAUDE_BIN = _find_claude_bin()

DIMENSIONS = ["velocity_vs_rigour", "domain_risk", "collaboration_width", "data_team_maturity", "jd_authorship", "stakeholder_orientation", "autonomy_level", "ai_role", "testing_framing", "loss_aversion_framing"]
NUM_RUNS = 3

# ---------------------------------------------------------------------------
# System prompt — mirrors SKILL.md Layer B decision rules exactly
# ---------------------------------------------------------------------------
SYSTEM_PROMPT = """You are a structured analyst classifying job descriptions (JDs) for analytics engineering and data roles.

You will be given the raw text of a job description. Classify it on five dimensions using ONLY the JD text provided. Do not infer from company name or sector alone — derive classifications from what the text explicitly states or strongly implies.

## Dimension definitions and decision rules

### 1. velocity_vs_rigour
How the JD frames the primary work orientation in the responsibilities section.

- **rigour**: The responsibilities section emphasises correctness, quality, governance, testing, compliance, reliability, or data accuracy as core expectations. Signal phrases: "data quality", "testing", "CI/CD", "data contracts", "observability", "compliance", "thorough", "meticulous", "assertion", "audit", "governance", "data trust", "reliable", "accuracy".
- **velocity**: The responsibilities section emphasises speed, shipping, iteration, or delivery pace as its primary value. Signal phrases: "fast-paced", "move fast", "ship quickly", "MVP", "iteration speed", "high velocity", "scrappy", "startup pace", "rapid delivery".
- **mixed**: Both orientations genuinely present with at least two distinct velocity phrases AND multiple rigour signals. A single "fast-paced" in an otherwise rigour-dominated JD is NOT mixed.
- **Tie-breaker**: If rigour signals outnumber velocity signals 2:1 or more → rigour. Rough parity → mixed. Velocity 2:1 or more → velocity.

### 2. domain_risk
The cost of a data error in this role.

- **high**: Data errors directly affect financial reporting, regulatory compliance, or public-facing products at scale. Sectors that default to high: fintech, banking, insurance, regulated healthcare. JD signals: "financial reporting", "compliance", "audit", "regulatory", "P&L", "revenue attribution", "mission-critical".
- **moderate**: Data errors affect business decisions without immediate regulatory or financial consequences. Most e-commerce, marketplace, SaaS, and media roles. JD signals: "business intelligence", "operational reporting", "stakeholder decisions".
- **low**: Limited, recoverable consequences. Education, internal tooling, non-revenue analytics.
- **Tie-breaker**: Sector implies high risk but JD language is generic → moderate. JD explicitly uses financial/compliance/regulatory language → high.

### 3. collaboration_width
Count distinct named partner teams or functions explicitly listed in the JD.

**Counts as 1 each**: Named functions like "Finance", "Product", "Marketing", "Data Science", "Engineering", "Operations", "Commercial", "Legal", "Customer Success", "Sales", "Analytics", "BI team", "Data Platform team"; named role cohorts ("analysts", "data scientists", "engineers" when referring to a distinct group); named external parties ("clients", "customers" only when explicitly named as a collaboration partner).

**Does NOT count**: "various stakeholders", "the business", "cross-functional teams", "internal teams", "key stakeholders", "colleagues"; the role holder's own team.

Return an integer (0 if no named teams identified).

### 4. data_team_maturity
Inferred stage of the data team.

- **early**: Primary mission is to establish or build the data function. Infrastructure does not yet exist in usable form. Signals: "first data hire", "build from zero", "greenfield", "no existing infrastructure", "wear many hats", "you will define", "establish the foundation".
- **mid**: Data function exists and has produced something but is growing significantly. Signals: existing named tools in responsibilities (not just requirements), multiple data roles implied, "scale existing", "improve and extend", sub-teams beginning to form.
- **mature**: Established, specialised, operating at scale. Signals: multiple named data sub-teams with distinct charters, team size 20+ implied, "join an established team", governance and platform tooling already deployed at scale.
- **Tie-breaker**: Named tools in requirements list only → do not use as maturity signal. Named tools in responsibilities ("you will maintain our dbt models") → push toward mid/mature.

### 5. jd_authorship
Who wrote the responsibilities section.

- **hiring_manager**: Responsibilities contain technical specificity that only comes from someone who has done this job: named tools with precise application context, scale/volume numbers, specific methodology names.
- **recruiter**: Responsibilities are generic — boilerplate action verbs ("collaborate with stakeholders", "drive data quality", "work cross-functionally") that could apply to any data role. Tools listed without specific context.
- **mixed**: Some responsibilities technically precise, others generic. Common in large companies.
- **Tie-breaker**: Could you understand what this person does on a Tuesday morning? Yes → hiring_manager. No → recruiter. Some of both → mixed. Mostly specific with a few generic additions → hiring_manager, not mixed.

### 6. stakeholder_orientation
Who does this role primarily serve? Read the responsibilities and the framing of the role's impact.

- **commercial**: Primary audience is GTM, revenue, sales, customer success, marketing, or partnerships. Signal phrases: "revenue operations", "sales teams", "GTM", "go-to-market", "customer success", "commercial stakeholders", "pipeline", "lead assignment", "win rate", "churn".
- **product**: Primary audience is product, engineering, growth, or experimentation teams. Signal phrases: "product analytics", "experiment", "A/B test", "funnel", "feature adoption", "user behaviour", "growth team", "product teams".
- **internal_data**: Primary audience is the data function itself — data engineers, other analysts, data scientists, or platform consumers. Signal phrases: "data platform", "self-serve analytics", "data consumers", "analytics infrastructure", "data team", "modelling layer".
- **finance**: Primary audience is FP&A, controllership, accounting, audit, or executive reporting. Signal phrases: "financial reporting", "FP&A", "P&L", "board reporting", "forecasting", "controllership", "audit", "budget".
- **mixed**: Two or more of the above with genuinely equal weight. Do not use mixed just because the role is described as cross-functional — assess where the responsibilities section places the emphasis.
- **Tie-breaker**: If named stakeholder teams span categories but responsibilities emphasise one → classify as that category. Use mixed only when emphasis is genuinely split.

### 7. autonomy_level
Does the role define its own direction, or execute direction set by others?

- **strategic**: The role is expected to set direction, define priorities, and shape how analytics is delivered. Signal verbs: "define", "establish", "own", "shape", "lead", "drive", "determine", "architect". Signal phrases: "you will define", "shape how analytics is delivered", "shift from reactive to proactive", "set the strategy", "build the roadmap".
- **execution**: The role receives scoped work and delivers it. Signal verbs: "support", "assist", "deliver", "help", "contribute to", "work with". Signal phrases: "you will support the team", "assist with", "deliver against priorities". Scope is set by others.
- **mixed**: The role genuinely combines both — strategic ownership of a technical domain AND execution in service of a business team. Apply mixed only when the responsibilities section clearly contains both patterns.
- **Tie-breaker**: If strategic verbs appear only in a narrow technical sub-problem while overall role framing is support-oriented → execution. If the role is described as building/defining the analytics function for a domain → strategic.

### 8. ai_role
What AI skill, if any, the role expects the *candidate* to demonstrate. Whether the company builds AI products is irrelevant.

- **none**: No AI skill expected of the candidate. Includes JDs where the company builds AI products but the candidate does standard data work, and stale JDs with no AI mention. Vague phrases ("AI-first mindset", "interest in AI") → none.
- **ai_user**: The candidate is expected to use AI coding tools to accelerate their own work. Signal phrases: "AI-assisted coding", "proven usage of AI tools", "GitHub Copilot", "Claude Code", "Cursor", "coding agents", "agentic workflows" as a personal productivity tool.
- **ai_enabler**: The candidate is expected to build data infrastructure that AI systems consume or run on. Signal phrases: "AI-ready data foundations", "data for AI/ML pipelines", "text-to-SQL", "semantic modelling for AI", "AI data agents", "GenAI applications" in responsibilities.
- **Tie-breaker**: If both signals present → ai_enabler. Company description mentions AI but responsibilities do not → none.

### 9. testing_framing
How data quality, testing, or observability appears in the JD.

- **responsibility**: Testing, data contracts, observability, or data quality frameworks are framed as something the candidate *owns or defines* using action verbs. Signal patterns: "own the quality", "define testing standards", "data contracts" as a named responsibility, "ensure data reliability", "implement data quality frameworks". The candidate is accountable for the practice.
- **tool_listed**: Testing tools or practices appear in requirements or tech stack without ownership framing. Presence of Great Expectations, Soda, or "dbt tests" in a skill list without an ownership verb → tool_listed.
- **absent**: No testing or data quality signal anywhere in the JD.
- **Tie-breaker**: "experience with dbt testing" in a requirements list → tool_listed. "Own data quality through testing" in responsibilities → responsibility.

### 10. loss_aversion_framing
How strongly the JD frames the role around preventing bad outcomes.

- **none**: JD framed in delivery and capability terms with no risk register. Typical of early-stage and velocity-oriented roles.
- **moderate**: Operational reliability is a concern but secondary to delivery. Fear is pipeline outages or data failures, not compliance or stakeholder trust. Signal phrases: "SLOs", "production reliability", "reduce bus factor", "pipeline stability", "first to respond to incidents".
- **high**: Risk, compliance, or stakeholder trust framing dominates. Fear is bad data reaching decision-makers or regulatory exposure. Signal phrases: "regulatory", "compliance", "audit", "prevent bad data reaching stakeholders", "data accuracy has direct business impact", "trustworthiness" as a primary role framing, repeated quality/reliability language throughout.
- **Tie-breaker**: One mention of compliance in a delivery-dominated JD → moderate. Compliance or trust language in the first responsibility or role summary → high.

## Output format

Respond with ONLY a valid JSON object. No explanation, no preamble, no markdown fences.

For EACH dimension, provide:
1. Your classification value
2. A verbatim quote from the JD text that is the single most decisive piece of evidence (copy it exactly — this will be verified against the source text)
3. A one-sentence explanation of why this quote drives the classification

{
  "velocity_vs_rigour": "<rigour|mixed|velocity>",
  "velocity_vs_rigour_quote": "<exact verbatim phrase copied from the JD>",
  "velocity_vs_rigour_reasoning": "<one sentence explaining the classification>",
  "domain_risk": "<high|moderate|low>",
  "domain_risk_quote": "<exact verbatim phrase copied from the JD>",
  "domain_risk_reasoning": "<one sentence explaining the classification>",
  "collaboration_width": <integer>,
  "collaboration_width_quote": "<semicolon-separated list of named teams counted, verbatim from JD>",
  "collaboration_width_reasoning": "<one sentence>",
  "data_team_maturity": "<early|mid|mature>",
  "data_team_maturity_quote": "<exact verbatim phrase copied from the JD>",
  "data_team_maturity_reasoning": "<one sentence explaining the classification>",
  "jd_authorship": "<hiring_manager|mixed|recruiter>",
  "jd_authorship_quote": "<exact verbatim phrase from the responsibilities section copied from the JD>",
  "jd_authorship_reasoning": "<one sentence explaining the classification>",
  "stakeholder_orientation": "<commercial|product|internal_data|finance|mixed>",
  "stakeholder_orientation_quote": "<exact verbatim phrase naming the primary audience>",
  "stakeholder_orientation_reasoning": "<one sentence explaining the classification>",
  "autonomy_level": "<strategic|execution|mixed>",
  "autonomy_level_quote": "<exact verbatim verb phrase driving the classification>",
  "autonomy_level_reasoning": "<one sentence explaining the classification>",
  "ai_role": "<none|ai_user|ai_enabler>",
  "ai_role_quote": "<exact verbatim phrase that placed the classification, or 'No AI skill signal.' if none>",
  "ai_role_reasoning": "<one sentence: what the candidate is expected to do with AI, or why none>",
  "testing_framing": "<responsibility|tool_listed|absent>",
  "testing_framing_quote": "<exact verbatim phrase showing ownership/tool/absence of testing practice>",
  "testing_framing_reasoning": "<one sentence explaining responsibility vs tool_listed vs absent>",
  "loss_aversion_framing": "<none|moderate|high>",
  "loss_aversion_framing_quote": "<exact verbatim phrase anchoring the risk register, or 'No loss aversion framing.' if none>",
  "loss_aversion_framing_reasoning": "<one sentence explaining the level and what fear it reflects>"
}"""


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def strip_layer_b(text: str) -> str:
    """Remove any appended Layer B analysis — classify only the raw JD text."""
    for marker in ["## Layer B", "## Layer B —", "## Layer B—"]:
        idx = text.find(marker)
        if idx != -1:
            return text[:idx].strip()
    return text.strip()


def strip_url_for_classifier(text: str) -> str:
    """Remove **URL:** line before sending to classifier — prevents WebFetch attempts."""
    return re.sub(r"\*\*URL:\*\*[^\n]*\n?", "", text).strip()


NO_SIGNAL_SENTINELS = {
    "no ai skill signal.", "no testing or data quality signal.",
    "no loss aversion framing.", "not stated in jd", "n/a", "none identified",
    "(none identified)", "none",
}


def quote_present_in_jd(quote: str, jd_text: str) -> bool:
    """Check whether the verbatim quote appears (loosely) in the JD text.

    Some dimensions (collaboration_width, jd_authorship, stakeholder_orientation)
    legitimately cite evidence spanning multiple non-adjacent bullets — the model
    joins these with '; ' rather than fabricating a single contiguous span. Treat
    a semicolon-joined quote as verified if every individual segment appears in
    the JD text, even though the joined string itself does not.
    """
    norm = lambda s: re.sub(r"\s+", " ", s).lower().strip()
    if not quote or norm(quote) in NO_SIGNAL_SENTINELS:
        return True  # no quote to verify, or an expected "no signal" sentinel
    jd_norm = norm(jd_text)
    if norm(quote) in jd_norm:
        return True
    if ";" in quote:
        segments = [s.strip() for s in quote.split(";") if s.strip()]
        if segments and all(norm(seg) in jd_norm for seg in segments):
            return True
    return False


def classify_with_cli(jd_text: str) -> dict:
    """Call the claude CLI and parse JSON response."""
    prompt = f"{SYSTEM_PROMPT}\n\nClassify this job description:\n\n{strip_url_for_classifier(jd_text)}"
    result = subprocess.run(
        [CLAUDE_BIN, "--print", "--model", "claude-haiku-4-5-20251001", prompt],
        capture_output=True,
        text=True,
        timeout=240,
    )
    if result.returncode != 0:
        raise RuntimeError(f"CLI error: {result.stderr[:300]}")
    raw = result.stdout.strip()
    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)
    match = re.search(r"\{.*\}", raw, re.DOTALL)
    if not match:
        raise ValueError(f"No JSON found in output: {raw[:300]}")
    return json.loads(match.group())


def load_manual_classifications() -> dict:
    manual = {}
    with open(DATASET_CSV) as f:
        reader = csv.DictReader(f)
        for row in reader:
            aid = row["application_id"]
            manual[aid] = {d: row.get(d, "") for d in DIMENSIONS}
    return manual


def agreement_rate(values: list) -> float:
    if len(values) < 2:
        return 1.0
    pairs = [(values[i], values[j]) for i in range(len(values)) for j in range(i + 1, len(values))]
    return sum(1 for a, b in pairs if str(a) == str(b)) / len(pairs)


# ---------------------------------------------------------------------------
# CSV schema
# ---------------------------------------------------------------------------
def build_fieldnames():
    fields = ["application_id"]
    for d in DIMENSIONS:
        fields.append(f"manual_{d}")
    for i in range(NUM_RUNS):
        for d in DIMENSIONS:
            fields.append(f"run{i+1}_{d}")
            fields.append(f"run{i+1}_{d}_quote")
            fields.append(f"run{i+1}_{d}_quote_verified")
            fields.append(f"run{i+1}_{d}_reasoning")
    for d in DIMENSIONS:
        fields.append(f"llm_agreement_{d}")
        fields.append(f"majority_vote_{d}")
        fields.append(f"manual_llm_match_{d}")
    return fields

FIELDNAMES = build_fieldnames()


def load_existing_results(out_csv: Path) -> set:
    if not out_csv.exists():
        return set()
    with open(out_csv) as f:
        reader = csv.DictReader(f)
        return {row["application_id"] for row in reader}


def append_row(out_csv: Path, row: dict):
    write_header = not out_csv.exists()
    with open(out_csv, "a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES, extrasaction="ignore")
        if write_header:
            writer.writeheader()
        writer.writerow(row)


# ---------------------------------------------------------------------------
# Per-JD trace file
# ---------------------------------------------------------------------------

def write_trace(app_id: str, jd_text: str, runs: list[dict], manual: dict, out_dir: Path):
    """Write a detailed markdown trace for one JD showing all runs side by side.

    manual may be empty ({}) for jd_data-only entries with no CSV row — in that
    case the Manual column and match comparisons are omitted from the output.
    """
    has_manual = bool(manual)
    out_dir.mkdir(exist_ok=True)
    lines = [
        f"# Trace: {app_id}",
        "",
        "## JD text (fed to classifier, Layer B stripped)",
        "",
        "```",
        jd_text[:4000] + ("…[truncated]" if len(jd_text) > 4000 else ""),
        "```",
        "",
        "---",
        "",
        "## Classification results",
        "",
    ]

    if has_manual:
        lines += [
            "| Dimension | Manual | Run 1 | Run 2 | Run 3 | Agreement | Match? |",
            "|-----------|--------|-------|-------|-------|-----------|--------|",
        ]
    else:
        lines += [
            "| Dimension | Run 1 | Run 2 | Run 3 | Agreement |",
            "|-----------|-------|-------|-------|-----------|",
        ]

    for d in DIMENSIONS:
        vals = [str(r.get(d, "")) for r in runs]
        agree = agreement_rate(vals)
        agree_str = f"{agree:.0%}"
        if has_manual:
            manual_val = manual.get(d, "")
            majority = Counter(vals).most_common(1)[0][0]
            match = "✓" if majority == str(manual_val) else "✗"
            lines.append(
                f"| {d} | {manual_val} | {vals[0]} | {vals[1]} | {vals[2]} | {agree_str} | {match} |"
            )
        else:
            lines.append(
                f"| {d} | {vals[0]} | {vals[1]} | {vals[2]} | {agree_str} |"
            )

    lines += ["", "---", "", "## Evidence per dimension", ""]

    for d in DIMENSIONS:
        lines.append(f"### {d}")
        if has_manual:
            manual_val = manual.get(d, "")
            lines.append(f"**Manual:** `{manual_val}`")
        lines.append("")
        for i, run in enumerate(runs):
            val = run.get(d, "")
            quote = run.get(f"{d}_quote", "")
            reasoning = run.get(f"{d}_reasoning", "")
            verified = quote_present_in_jd(quote, jd_text)
            verified_tag = "✓ found in JD" if verified else "⚠ NOT found verbatim"
            if has_manual:
                manual_val = manual.get(d, "")
                match_tag = "✓" if str(val) == str(manual_val) else "✗"
                lines.append(f"**Run {i+1}:** `{val}` {match_tag}")
            else:
                lines.append(f"**Run {i+1}:** `{val}`")
            lines.append(f"> Quote: \"{quote}\"")
            lines.append(f"> Verified: {verified_tag}")
            lines.append(f"> Reasoning: {reasoning}")
            lines.append("")

        vals = [str(r.get(d, "")) for r in runs]
        majority = Counter(vals).most_common(1)[0][0]
        if has_manual and majority != str(manual.get(d, "")):
            lines.append(f"⚠ **Disagreement**: manual=`{manual.get(d, '')}` vs LLM majority=`{majority}`")
            lines.append("")
        if len(set(vals)) > 1:
            lines.append(f"⚠ **LLM inconsistency**: runs gave {vals}")
            lines.append("")

    path = out_dir / f"{app_id}.md"
    path.write_text("\n".join(lines))
    return path


# ---------------------------------------------------------------------------
# Consistency report
# ---------------------------------------------------------------------------

def write_report(all_rows: list[dict], out_path: Path):
    lines = [
        "# LLM Classification Consistency Report",
        "",
        f"**JDs classified:** {len(all_rows)}  ",
        f"**Runs per JD:** {NUM_RUNS}  ",
        f"**Model:** claude-haiku-4-5  ",
        f"**Method:** claude CLI subprocess  ",
        f"**Traces:** see `jd_traces/<application_id>.md` for full per-JD evidence  ",
        "",
        "---",
        "",
        "## Inter-run agreement (LLM self-consistency)",
        "",
        "1.00 = all three runs identical. Lower = model is uncertain on this dimension.",
        "",
        "| Dimension | Mean | Min | Max | Fully consistent (3/3) |",
        "|-----------|------|-----|-----|------------------------|",
    ]

    llm_agree = defaultdict(list)
    manual_match = defaultdict(list)
    for row in all_rows:
        for d in DIMENSIONS:
            try:
                llm_agree[d].append(float(row[f"llm_agreement_{d}"]))
                match_val = row[f"manual_llm_match_{d}"]
                manual_match[d].append(1 if match_val in (True, "True") else 0)
            except (KeyError, ValueError):
                pass

    for d in DIMENSIONS:
        vals = llm_agree[d]
        if not vals:
            continue
        fully = sum(1 for v in vals if v == 1.0)
        lines.append(f"| {d} | {sum(vals)/len(vals):.2f} | {min(vals):.2f} | {max(vals):.2f} | {fully}/{len(vals)} |")

    lines += [
        "",
        "## Manual vs LLM majority-vote agreement",
        "",
        "How often the LLM majority vote (best of 3) matches the original hand-coded classification.",
        "High agreement → manual classifications are reproducible by the model.",
        "Low agreement → either the codebook is ambiguous or the original call was subjective.",
        "",
        "| Dimension | Match rate | n matched | n total |",
        "|-----------|-----------|-----------|---------|",
    ]

    for d in DIMENSIONS:
        vals = manual_match[d]
        if not vals:
            continue
        lines.append(f"| {d} | {sum(vals)/len(vals):.1%} | {sum(vals)} | {len(vals)} |")

    # Evidence verification summary
    lines += [
        "",
        "## Evidence quote verification",
        "",
        "Checks whether the verbatim quote cited by the LLM actually appears in the JD text.",
        "Failures indicate hallucinated or paraphrased evidence.",
        "",
        "| Dimension | Run 1 pass | Run 2 pass | Run 3 pass |",
        "|-----------|-----------|-----------|-----------|",
    ]
    for d in DIMENSIONS:
        run_pass = []
        for i in range(NUM_RUNS):
            col = f"run{i+1}_{d}_quote_verified"
            vals = [r.get(col, "") for r in all_rows if col in r]
            n_pass = sum(1 for v in vals if v in (True, "True"))
            n_total = len(vals)
            run_pass.append(f"{n_pass}/{n_total}" if n_total else "—")
        lines.append(f"| {d} | {run_pass[0]} | {run_pass[1]} | {run_pass[2]} |")

    # Disagreements: manual vs LLM
    lines += [
        "",
        "## Disagreements: manual vs LLM majority vote",
        "",
        "Each disagreement is a candidate for codebook revision or reclassification.",
        "See `jd_traces/<application_id>.md` for full reasoning on each case.",
        "",
    ]
    for d in DIMENSIONS:
        mismatches = [r for r in all_rows if r.get(f"manual_llm_match_{d}") in (False, "False")]
        if not mismatches:
            lines.append(f"### {d} — no disagreements ✓")
            lines.append("")
            continue
        lines.append(f"### {d} ({len(mismatches)} disagreements)")
        lines.append("")
        lines.append("| application_id | manual | run1 | run2 | run3 | majority | run1 evidence quote |")
        lines.append("|----------------|--------|------|------|------|----------|---------------------|")
        for r in mismatches:
            quote = r.get(f"run1_{d}_quote", "").replace("|", "/").replace("\n", " ")
            # Show up to 120 chars of the quote — enough to be meaningful
            quote_display = quote[:120] + ("…" if len(quote) > 120 else "")
            lines.append(
                f"| {r['application_id']} "
                f"| {r.get(f'manual_{d}', '')} "
                f"| {r.get(f'run1_{d}', '')} "
                f"| {r.get(f'run2_{d}', '')} "
                f"| {r.get(f'run3_{d}', '')} "
                f"| {r.get(f'majority_vote_{d}', '')} "
                f"| {quote_display} |"
            )
        lines.append("")

    # LLM internal disagreements
    lines += [
        "## LLM internal inconsistencies (runs disagree with each other)",
        "",
        "These are cases where the same prompt produced different answers across 3 runs.",
        "High inconsistency → borderline case or ambiguous JD language.",
        "",
    ]
    for d in DIMENSIONS:
        inconsistent = []
        for r in all_rows:
            vals = [r.get(f"run{i+1}_{d}", "") for i in range(NUM_RUNS)]
            if len(set(vals)) > 1:
                inconsistent.append((r["application_id"], vals))
        if not inconsistent:
            lines.append(f"### {d} — fully consistent across all JDs ✓")
            lines.append("")
            continue
        lines.append(f"### {d} ({len(inconsistent)} inconsistent JDs)")
        lines.append("")
        lines.append("| application_id | run1 | run2 | run3 | manual |")
        lines.append("|----------------|------|------|------|--------|")
        for app_id, vals in inconsistent:
            manual_val = next((r.get(f"manual_{d}", "") for r in all_rows if r["application_id"] == app_id), "")
            lines.append(f"| {app_id} | {vals[0]} | {vals[1]} | {vals[2]} | {manual_val} |")
        lines.append("")

    out_path.write_text("\n".join(lines))


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    args = set(sys.argv[1:])
    reset = "--reset" in args
    trace_only = "--trace-only" in args

    out_csv = OUT_DIR / "llm_classifications.csv"

    if reset and out_csv.exists():
        out_csv.unlink()
        print("Reset: deleted existing llm_classifications.csv")

    TRACES_DIR.mkdir(exist_ok=True)
    manual = load_manual_classifications()
    print(f"Loaded {len(manual)} manual classifications from CSV")

    # Collect JD paths — applications/ first, then jd_data/ (no duplicates)
    seen_ids: set = set()
    jd_paths: list = []

    for p in sorted(APPLICATIONS_DIR.rglob("jd.md")):
        app_id = p.relative_to(APPLICATIONS_DIR).parts[0]
        if app_id not in seen_ids:
            seen_ids.add(app_id)
            jd_paths.append((app_id, p))
    print(f"Found {len(jd_paths)} JDs in {APPLICATIONS_DIR}")

    n_before = len(jd_paths)
    if JD_DATA_DIR.exists():
        for folder in sorted(JD_DATA_DIR.iterdir()):
            if not folder.is_dir():
                continue
            app_id = folder.name
            if app_id in seen_ids:
                continue
            # prefer jd.md, fall back to jd_archive.md
            jd_md = folder / "jd.md"
            jd_archive = folder / "jd_archive.md"
            p = jd_md if jd_md.exists() else (jd_archive if jd_archive.exists() else None)
            if p:
                seen_ids.add(app_id)
                jd_paths.append((app_id, p))
        print(f"Found {len(jd_paths) - n_before} additional JDs in {JD_DATA_DIR}")

    if trace_only:
        # Regenerate traces from existing CSV without re-classifying
        if not out_csv.exists():
            print("No llm_classifications.csv found — run without --trace-only first.")
            return
        all_rows = list(csv.DictReader(open(out_csv)))
        print(f"Regenerating traces for {len(all_rows)} JDs from existing CSV...")
        for row in all_rows:
            app_id = row["application_id"]
            jd_path = next((p for aid, p in jd_paths if aid == app_id), None)
            if not jd_path:
                print(f"  JD text not found for {app_id} — skipping trace")
                continue
            jd_text = strip_layer_b(jd_path.read_text())
            runs = []
            for i in range(NUM_RUNS):
                r = {d: row.get(f"run{i+1}_{d}", "") for d in DIMENSIONS}
                for d in DIMENSIONS:
                    r[f"{d}_quote"] = row.get(f"run{i+1}_{d}_quote", "")
                    r[f"{d}_reasoning"] = row.get(f"run{i+1}_{d}_reasoning", "")
                runs.append(r)
            write_trace(app_id, jd_text, runs, manual.get(app_id, {}), TRACES_DIR)
            print(f"  trace written: {app_id}")
        print("Done.")
        return

    already_done = load_existing_results(out_csv)
    todo = [
        (app_id, p) for app_id, p in jd_paths
        if app_id not in already_done
    ]
    total = len(jd_paths)
    n_done_before = len(already_done)
    n_todo = len(todo)

    print(f"\n{'─'*60}")
    print(f"  Total JDs found:      {total}")
    print(f"  Already classified:   {n_done_before}")
    print(f"  To classify now:      {n_todo}")
    print(f"  Not in CSV (skip):    {total - n_done_before - n_todo}")
    print(f"{'─'*60}\n")

    if n_todo == 0:
        print("Nothing to do. Use --reset to reclassify everything.")

    skipped = []
    n_classified = 0

    for idx, (app_id, jd_path) in enumerate(todo, 1):
        jd_text = strip_layer_b(jd_path.read_text())
        if len(jd_text) < 100:
            skipped.append(f"{app_id} — JD text too short ({len(jd_text)} chars)")
            print(f"[{idx:2}/{n_todo}] SKIP  {app_id} — too short")
            continue

        # Short company+role label for readability
        label = app_id[11:]  # strip date prefix
        print(f"[{idx:2}/{n_todo}] ── {label}  ({len(jd_text):,} chars)")

        runs = []
        run_failed = False
        for i in range(NUM_RUNS):
            try:
                result = classify_with_cli(jd_text)
                runs.append(result)
                # Compact per-run line: value + evidence verified flag
                parts = []
                for d in DIMENSIONS:
                    val = result.get(d, "?")
                    # Abbreviate long values for alignment
                    short = {"hiring_manager": "hm", "recruiter": "rec", "mixed": "mix",
                             "rigour": "rig", "velocity": "vel",
                             "moderate": "mod", "high": "hi", "low": "lo",
                             "early": "ear", "mature": "mat"}.get(str(val), str(val))
                    quote = result.get(f"{d}_quote", "")
                    ev = "✓" if quote_present_in_jd(quote, jd_text) else "⚠"
                    parts.append(f"{short}{ev}")
                print(f"         run {i+1}: {' | '.join(parts)}")
                time.sleep(0.5)
            except Exception as e:
                print(f"         run {i+1}: FAILED — {e}")
                skipped.append(f"{app_id} — run {i+1} failed: {e}")
                run_failed = True
                break

        if run_failed or len(runs) < NUM_RUNS:
            continue

        # Agreement summary across runs
        agree_flags = []
        for d in DIMENSIONS:
            vals = [str(r.get(d, "")) for r in runs]
            agree_flags.append("✓" if len(set(vals)) == 1 else "~")
        manual_entry = manual.get(app_id, {})
        if manual_entry:
            match_flags = []
            for d in DIMENSIONS:
                vals = [str(r.get(d, "")) for r in runs]
                majority = Counter(vals).most_common(1)[0][0]
                match_flags.append("✓" if majority == str(manual_entry[d]) else "✗")
            print(f"         agree: {''.join(agree_flags)}  vs manual: {''.join(match_flags)}"
                  f"  ({sum(f=='✓' for f in match_flags)}/{len(match_flags)} match)")
        else:
            print(f"         agree: {''.join(agree_flags)}  (no manual classification)")

        # Build CSV row
        row = {"application_id": app_id}
        manual_entry = manual.get(app_id, {})
        for d in DIMENSIONS:
            row[f"manual_{d}"] = manual_entry.get(d, "")
        for i, run in enumerate(runs):
            for d in DIMENSIONS:
                val = run.get(d, "")
                quote = run.get(f"{d}_quote", "")
                reasoning = run.get(f"{d}_reasoning", "")
                verified = quote_present_in_jd(quote, jd_text)
                row[f"run{i+1}_{d}"] = val
                row[f"run{i+1}_{d}_quote"] = quote
                row[f"run{i+1}_{d}_quote_verified"] = verified
                row[f"run{i+1}_{d}_reasoning"] = reasoning
        for d in DIMENSIONS:
            vals = [str(runs[i].get(d, "")) for i in range(NUM_RUNS)]
            majority = Counter(vals).most_common(1)[0][0]
            row[f"llm_agreement_{d}"] = round(agreement_rate(vals), 3)
            row[f"majority_vote_{d}"] = majority
            manual_val = manual.get(app_id, {}).get(d, "")
            row[f"manual_llm_match_{d}"] = str(manual_val) == majority if manual_val else ""

        append_row(out_csv, row)
        n_classified += 1

        write_trace(app_id, jd_text, runs, manual.get(app_id, {}), TRACES_DIR)
        print(f"         → saved  [{n_classified + n_done_before}/{total}]")

    # Final report
    all_rows = []
    if out_csv.exists():
        with open(out_csv) as f:
            all_rows = list(csv.DictReader(f))

    report_path = OUT_DIR / "consistency_report.md"
    write_report(all_rows, report_path)

    n_ev_fails = sum(
        1 for row in all_rows for d in DIMENSIONS
        if row.get(f"run1_{d}_quote_verified") in (False, "False")
    )

    print(f"\n{'═'*60}")
    print(f"  Classified this run:     {n_classified}")
    print(f"  Total in CSV:            {len(all_rows)}")
    print(f"  Evidence verify fails:   {n_ev_fails}  (quotes not found verbatim in JD)")
    print(f"  Skipped:                 {len(skipped)}")
    print(f"  Output CSV:              {out_csv}")
    print(f"  Consistency report:      {report_path}")
    print(f"  Per-JD traces:           {TRACES_DIR}/  ({len(list(TRACES_DIR.glob('*.md')))} files)")
    print(f"{'═'*60}")
    if skipped:
        print(f"\nSkipped details:")
        for s in skipped:
            print(f"  · {s}")


if __name__ == "__main__":
    main()
