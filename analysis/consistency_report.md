# LLM Classification Consistency Report

**JDs classified:** 0  
**Runs per JD:** 3  
**Model:** claude-haiku-4-5  
**Method:** claude CLI subprocess  
**Traces:** see `jd_traces/<application_id>.md` for full per-JD evidence  

---

## Inter-run agreement (LLM self-consistency)

1.00 = all three runs identical. Lower = model is uncertain on this dimension.

| Dimension | Mean | Min | Max | Fully consistent (3/3) |
|-----------|------|-----|-----|------------------------|

## Manual vs LLM majority-vote agreement

How often the LLM majority vote (best of 3) matches the original hand-coded classification.
High agreement → manual classifications are reproducible by the model.
Low agreement → either the codebook is ambiguous or the original call was subjective.

| Dimension | Match rate | n matched | n total |
|-----------|-----------|-----------|---------|

## Evidence quote verification

Checks whether the verbatim quote cited by the LLM actually appears in the JD text.
Failures indicate hallucinated or paraphrased evidence.

| Dimension | Run 1 pass | Run 2 pass | Run 3 pass |
|-----------|-----------|-----------|-----------|
| velocity_vs_rigour | — | — | — |
| domain_risk | — | — | — |
| collaboration_width | — | — | — |
| data_team_maturity | — | — | — |
| jd_authorship | — | — | — |
| stakeholder_orientation | — | — | — |
| autonomy_level | — | — | — |
| ai_role | — | — | — |
| testing_framing | — | — | — |
| loss_aversion_framing | — | — | — |

## Disagreements: manual vs LLM majority vote

Each disagreement is a candidate for codebook revision or reclassification.
See `jd_traces/<application_id>.md` for full reasoning on each case.

### velocity_vs_rigour — no disagreements ✓

### domain_risk — no disagreements ✓

### collaboration_width — no disagreements ✓

### data_team_maturity — no disagreements ✓

### jd_authorship — no disagreements ✓

### stakeholder_orientation — no disagreements ✓

### autonomy_level — no disagreements ✓

### ai_role — no disagreements ✓

### testing_framing — no disagreements ✓

### loss_aversion_framing — no disagreements ✓

## LLM internal inconsistencies (runs disagree with each other)

These are cases where the same prompt produced different answers across 3 runs.
High inconsistency → borderline case or ambiguous JD language.

### velocity_vs_rigour — fully consistent across all JDs ✓

### domain_risk — fully consistent across all JDs ✓

### collaboration_width — fully consistent across all JDs ✓

### data_team_maturity — fully consistent across all JDs ✓

### jd_authorship — fully consistent across all JDs ✓

### stakeholder_orientation — fully consistent across all JDs ✓

### autonomy_level — fully consistent across all JDs ✓

### ai_role — fully consistent across all JDs ✓

### testing_framing — fully consistent across all JDs ✓

### loss_aversion_framing — fully consistent across all JDs ✓
