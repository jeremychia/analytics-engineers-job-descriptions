"""
Canonical definitions for Layer B behavioural dimensions added via backfill.

Each entry in DIMENSIONS defines:
  name        — full field name written to JSON records
  short_key   — abbreviated output key the LLM returns
  valid       — set of accepted values for majority-vote validation
  quote_key   — short key the LLM uses for the verbatim quote
  reasoning_key — short key for the one-sentence reasoning
"""

DIMENSIONS = [
    {
        "name": "ai_role",
        "short_key": "ar",
        "valid": {"none", "ai_user", "ai_enabler"},
        "quote_key": "ar_q",
        "reasoning_key": "ar_e",
    },
    {
        "name": "testing_framing",
        "short_key": "tf",
        "valid": {"responsibility", "tool_listed", "absent"},
        "quote_key": "tf_q",
        "reasoning_key": "tf_e",
    },
    {
        "name": "loss_aversion_framing",
        "short_key": "laf",
        "valid": {"none", "moderate", "high"},
        "quote_key": "laf_q",
        "reasoning_key": "laf_e",
    },
]

# Convenience: just the canonical field names
DIM_NAMES = [d["name"] for d in DIMENSIONS]

# Map short LLM output keys → full field names
KEY_MAP = {}
for _d in DIMENSIONS:
    KEY_MAP[_d["short_key"]] = _d["name"]
    KEY_MAP[_d["quote_key"]] = f"{_d['name']}_quote"
    KEY_MAP[_d["reasoning_key"]] = f"{_d['name']}_reasoning"

# Map short key → valid value set (for _run_once validation)
VALID_VALUES = {d["short_key"]: d["valid"] for d in DIMENSIONS}
