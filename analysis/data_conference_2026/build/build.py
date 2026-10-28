#!/usr/bin/env python3
"""Assemble the self-contained pages from src/ and inputs/deck_data.json.

Usage:  python3 analysis/data_conference_2026/build/build.py
Run prep_data.py first when the corpus or the snapshots change.
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent
SITE = OUT.parent
SRC = HERE / "src"
SHARED = ["lib.js", "s_open.js", "s_titles.js", "s_barcode.js", "s_stack.js", "s_ai.js", "s_juniors.js",
          "s_ladder.js", "s_benefits.js", "s_pitch.js", "s_gap.js", "slides_def.js"]
FONTS = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap"


def chance_text(ps):
    """The largest of several p-values, as "less than 1 in N" for a reader who doesn't know p-values; above 1 in 20 the claim is not made."""
    p = max(ps)
    assert p < 0.05, f"the text says this holds beyond chance, but p = {p:.3f}"
    return "less than 1 in 1,000" if p < 0.001 else "less than 1 in 100" if p < 0.01 else "less than 1 in 20"


def facts(D):
    """Every figure quoted in src/questions.json, computed from the deck data."""
    pc = lambda k, n: round(100 * k / n)
    lv, ai, sim, jr, ben, s2 = D["stats"]["levels"], D["stats"]["ai"], D["sim"], D["junior"], D["benefits"], D["stats2"]
    ai_rows = [r for r in D["ai"]["rows"] if r[0]]
    gate_k, gate_n, gate_ci = s2["juniors"]["gate"]
    years2_k = s2["juniors"]["shares"]["2+ years"][0]
    dash = D["gap_by_level"]["levels"]["mid"]
    strat = s2["ladder_shares"]["strategic verbs"]
    ladder_tests = s2["ladder"]["tests"]
    core_items = ("SQL", "Any warehouse", "THEME: Data Quality", "THEME: Stakeholder")
    core_p = min(t["holm"] for t in ladder_tests if t["item"].startswith(core_items))
    assert core_p >= 0.05, f"the text says the core skills show no change beyond chance, but one step has p = {core_p:.3f}"
    lad_n = s2["ladder"]["n"]
    years = D["ladder"]["years"]
    fr_bac = s2["juniors"]["france_bac_checked"]["fr"]
    tpl = D["pitch"]["template"]
    return {
        "ads": f"{D['corpus_n']:,}",
        "juniorYears": f"{years[0]} year" + ("" if years[0] == 1 else "s"),
        "titleAds": D["titles"]["n"], "titleCount": D["titles"]["n_titles"],
        "sqlLow": round(min(D["titles"]["core"].values())), "sqlHigh": round(max(D["titles"]["core"].values())),
        "simBetween": round(100 * sim["mean_between"]), "simWithin": round(100 * sim["mean_within"]),
        "copyPer1000": sim["copy_rate"]["duty_per_1000"], "copyPer1000Outside": sim["copy_rate"]["duty_per_1000_outside_families"],
        "midDbt": pc(*lv["mid"]["dbt"]), "midPbi": pc(*lv["mid"]["pbi"]), "seniorDbt": pc(*lv["senior"]["dbt"]), "seniorPbi": pc(*lv["senior"]["pbi"]),
        "stackChance": chance_text([lv["mid"]["fisher_p"], lv["senior"]["fisher_p"]]),
        "aeTitledPbi": D["stack"]["ae_titled"]["pbi_only_pct"],
        "dashPbiMid": round(100 * dash["pbi"][0]), "dashDbtMid": round(100 * dash["dbt"][0]),
        "aiPct": pc(len(ai_rows), len(D["ai"]["rows"])), "aiVaguePct": pc(sum(r[1] == 1 for r in ai_rows), len(ai_rows)),
        "aiDbt": pc(*ai["dbt_vs_pbi"]["a"]), "aiPbi": pc(*ai["dbt_vs_pbi"]["b"]),
        "juniorN": jr["n"], "juniorOneIn": round(D["corpus_n"] / D["junior_counts"]["classifier"]),
        "juniorTitleOneIn": round(D["corpus_n"] / D["junior_counts"]["title"]),
        "juniorGatePct": pc(gate_k, gate_n), "juniorGateLo": round(100 * gate_ci[0]), "juniorGateHi": round(100 * gate_ci[1]),
        "juniorNoGatePct": pc(gate_n - gate_k, gate_n), "juniorUnderTwoPct": pc(gate_n - years2_k, gate_n),
        "juniorProjects": len(jr["counts_projects"]), "frBac": fr_bac[0], "frJunior": fr_bac[1],
        "stratJunior": round(strat[0]), "stratMid": round(strat[1]), "stratSenior": round(strat[2]), "stratLead": round(strat[3]),
        "years": ", ".join(map(str, years[:-1])) + f" and {years[-1]}",
        "ladderChance": chance_text([t["holm"] for t in ladder_tests if t["item"] == "strategic verbs"]),
        "usHealth": round(ben["pct"]["health"]["US"]), "usPension": round(ben["pct"]["pension"]["US"]), "usEquity": round(ben["pct"]["equity"]["US"]),
        "frMeal": round(ben["pct"]["meal"]["France"]), "frPension": round(ben["pct"]["pension"]["France"]),
        "payUs": round(ben["pay"]["US"]["pct"]), "payFr": round(ben["pay"]["France"]["pct"]),
        "benefitsDiffer": s2["benefits_summary"]["differ_q01"], "benefitsTags": s2["benefits_summary"]["tags"],
        "simShown": sim["n"], "simAds": f"{sim['pop']:,}",
        "ladderJunior": lad_n[0], "ladderMid": lad_n[1], "ladderSenior": lad_n[2], "ladderLead": lad_n[3],
        "benefitsAds": f"{sum(r['n'] for r in ben['pay'].values()):,}", "pitchAds": D["pitch"]["n"],
        "uniquePct": pc(D["pitch"]["unique"], D["pitch"]["n"]), "oneApartPct": pc(D["pitch"]["one_apart"], D["pitch"]["unique"]),
        "templateTools": len(tpl["tools"]), "templateExact": tpl["exact"],
    }


def fill(text, F):
    """Replace each {{name}} with its computed figure; an unknown name is an error, not a blank."""
    return re.sub(r"\{\{(\w+)\}\}", lambda m: str(F[m.group(1)]), text)


def scope_css(css, scope=".qv"):
    """Prefix every rule with the scope class so the charts' styles cannot reach the host page."""
    out, i = [], 0
    while i < len(css):
        j = css.find("{", i)
        if j < 0: break
        sel = css[i:j].strip()
        depth, k = 1, j + 1
        while depth:
            depth += {"{": 1, "}": -1}.get(css[k], 0); k += 1
        body = css[j + 1:k - 1]
        sel = re.sub(r"/\*.*?\*/", "", sel, flags=re.S).strip()
        if sel.startswith("@media"):
            out.append(f"{sel}{{{scope_css(body, scope)}}}")
        elif sel.startswith("@"):
            out.append(f"{sel}{{{body}}}")
        else:
            parts = []
            for one in (x.strip() for x in sel.split(",")):
                if one == "html": continue
                if one == ":root": parts += [scope, "#tip"]               # the tooltip hangs off body, outside the scope
                elif one == "body" or one.startswith(scope): parts.append(one.replace("body", scope))
                elif one.startswith("#tip"): parts.append(one)
                elif one.startswith(".fast"): parts.append(f".fast {scope}{one[len('.fast'):]}")   # Anim puts .fast on <html>
                else: parts.append(f"{scope} {one}")
            if parts: out.append(f"{','.join(parts)}{{{body}}}")
        i = k
    return "\n".join(out)


def assemble(template, runtime, out, F):
    data = (HERE / "inputs" / "deck_data.json").read_text(encoding="utf-8")
    questions = json.dumps(json.loads(fill((SRC / "questions.json").read_text(encoding="utf-8"), F)), ensure_ascii=False)
    js = "\n".join((SRC / f).read_text(encoding="utf-8") for f in SHARED + runtime)
    html = fill((SRC / template).read_text(encoding="utf-8"), F)
    html = html.replace("/*__CSS__*/", (SRC / "style.css").read_text(encoding="utf-8"))
    html = html.replace("/*__DATA__*/", "const D=" + data + ";").replace("/*__Q__*/", "const Q=" + questions + ";")
    html = html.replace("/*__JS__*/", js)
    out.write_text(html, encoding="utf-8")
    print("wrote", out.relative_to(SITE.parent), len(html) // 1024, "KB")


# The deck's palette and fonts, redrawn in the main pages' tokens (index.html and full-analysis.html :root).
SITE_COLOURS = {
    "#ea5b4d": "#1d4ed8", "#5b2a4a": "#3f4451", "#3b6fd1": "#b45309", "#1d9a74": "#16a34a", "#e3a21a": "#93b4f5",
    "#2a0a08": "#1a1d24", "#7a5a55": "#586070", "#b79e99": "#9aa1ab", "#e9cfc8": "#e5e5e1", "#f5d6cf": "#dbe5fb",
    "#fdf1ee": "#f8f8f6", "#fff8f6": "#ffffff", "#e6d4cf": "#e2e4e8", "#fbeee9": "#f3f6fd", "#f5d0c8": "#c9d8f7",
    "#f9ddd5": "#e4ebfb", "#a8322a": "#1e3a8a", "#f3a79e": "#93b4f5", "#c9b2ad": "#b8bdc6", "#c97a70": "#6b84c4",
    "#2b7a4b": "#15803d", "#b9770e": "#b45309", "#9a817c": "#6b7280",
}
SITE_FONT = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif"
# Chart labels the deck can keep but the main pages say in plain words; each must match exactly once.
SITE_WORDS = {
    "'the classifier says junior'": "'our reading says junior'",
    "'Are ads a lagging indicator?'": "'Do ads lag behind the work?'",
    "'stakeholders']]": "'working with users']]",
    "'median years asked'": "'typical years asked'",
}


def site_theme(text):
    """Swap every deck colour, font and jargon label for the main pages' own; a deck colour left behind is an error."""
    for deck, site in SITE_WORDS.items():
        if deck in text:
            assert text.count(deck) == 1, deck
            text = text.replace(deck, site)
    text = re.sub(r"#[0-9a-fA-F]{6}\b", lambda m: SITE_COLOURS.get(m.group(0).lower(), m.group(0)), text)
    for font in ("'Space Grotesk'", "'JetBrains Mono'", "Space Grotesk", "JetBrains Mono"):
        text = text.replace(font, SITE_FONT)
    left = {c for c in re.findall(r"#[0-9a-fA-F]{6}\b", text.lower())} & {c.lower() for c in SITE_COLOURS}
    assert not left, left
    return text


def bundle(out, F):
    """One script the main pages load to embed the question charts; everything stays inside one function scope."""
    data = (HERE / "inputs" / "deck_data.json").read_text(encoding="utf-8")
    questions = json.dumps(json.loads(fill((SRC / "questions.json").read_text(encoding="utf-8"), F)), ensure_ascii=False)
    css = site_theme(scope_css((SRC / "style.css").read_text(encoding="utf-8") + (SRC / "embed.css").read_text(encoding="utf-8")))
    js = site_theme("\n".join((SRC / f).read_text(encoding="utf-8") for f in SHARED + ["widget.js", "embed.js"]))
    out.write_text("/* Built by analysis/data_conference_2026/build/build.py; edit the sources there. */\n(function () {\n"
                   f"const D={data};\nconst Q={questions};\nconst QV_CSS={json.dumps(css)};\n{js}\n}})();\n", encoding="utf-8")
    print("wrote", out.relative_to(SITE.parent), out.stat().st_size // 1024, "KB")


if __name__ == "__main__":
    F = facts(json.loads((HERE / "inputs" / "deck_data.json").read_text(encoding="utf-8")))
    assemble("deck.template.html", ["deck.js"], OUT / "jd_deck.html", F)
    assemble("views.template.html", ["views.js"], OUT / "jd_views.html", F)
    bundle(SITE / "question-charts.js", F)
