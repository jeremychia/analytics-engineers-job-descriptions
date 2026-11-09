#!/usr/bin/env python3
"""Assemble the self-contained pages from src/ and inputs/deck_data.json.

Usage:  python3 analysis/data_conference_2026/build/build.py
Run prep_data.py first when the corpus or the snapshots change.
"""
import base64
import calendar
import json
import math
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent
SITE = OUT.parent
SRC = HERE / "src"
SHARED = ["lib.js", "qr.js", "s_open.js", "s_titles.js", "s_barcode.js", "s_stack.js", "s_ai.js", "s_juniors.js",
          "s_ladder.js", "s_benefits.js", "s_pitch.js", "s_gap.js", "slides_def.js"]
FONTS = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap"


def chance_text(ps):
    """The largest of several p-values, as "less than 1 in N" for a reader who doesn't know p-values; above 1 in 20 the claim is not made."""
    p = max(ps)
    assert p < 0.05, f"the text says this holds beyond chance, but p = {p:.3f}"
    return "less than 1 in 1,000" if p < 0.001 else "less than 1 in 100" if p < 0.01 else "less than 1 in 20"


def two_share_p(a, b):
    """Chance that two shares this far apart come from one rate: a two-sided chi-square test on [k, n] pairs."""
    (ka, na), (kb, nb) = a, b
    pooled = (ka + kb) / (na + nb)
    z = (ka / na - kb / nb) / math.sqrt(pooled * (1 - pooled) * (1 / na + 1 / nb))
    return math.erfc(abs(z) / math.sqrt(2))


def facts(D):
    """Every figure quoted in src/questions.json, computed from the deck data."""
    pc = lambda k, n: round(100 * k / n)
    month = lambda ym: calendar.month_name[int(ym[5:])]
    lv, ai, ben, s2, dut = D["stats"]["levels"], D["stats"]["ai"], D["benefits"], D["stats2"], D["sim"]["duties_only"]
    ai_rows = [r for r in D["ai"]["rows"] if r[0]]
    dash = D["gap_by_level"]["levels"]["mid"]
    strat = s2["ladder_shares"]["strategic verbs"]
    ladder_tests = s2["ladder"]["tests"]
    core_items = ("SQL", "Any warehouse", "THEME: Data Quality", "THEME: Stakeholder")
    core_p = min(t["holm"] for t in ladder_tests if t["item"].startswith(core_items))
    assert core_p >= 0.05, f"the text says the core skills show no change beyond chance, but one step has p = {core_p:.3f}"
    mentor_p = next(t["holm"] for t in ladder_tests if t["item"].startswith("Mentoring") and t["step"] == "mid to senior")
    lad_n, years = s2["ladder"]["n"], D["ladder"]["years"]
    fr = s2["juniors"]["france_bac_checked"]
    tpl, sem, miss = D["pitch"]["template"], D["semantics"]["layer"], {m["key"]: m["pct"] for m in D["missing"]["items"]}
    europe = [r for r in ben["pay"] if r not in ("US", "APAC")]
    deg = D["junior"]["degree_by_level"]
    deg_other = [sum(deg[lvl][i] for lvl in ("mid", "senior", "lead+")) for i in (0, 1)]
    deg_p = two_share_p(deg["junior"], deg_other)
    lvl_n, senior_plus = D["seniority_n"], sum(D["seniority_n"][lvl] for lvl in ("senior", "lead", "staff", "manager"))
    bands = [count for _, count in D["population"]["bands"]]
    core_themes = [k for _, k in D["job"]["themes"][:4]]
    prog = D["progression"]
    men = D["mentoring"]
    return {
        "ads": f"{D['corpus_n']:,}", "firstMonth": month(D["collection"][0][0]), "lastMonth": month(D["collection"][-1][0]),
        "aeAe": f"{100 * dut['ae_ae']['mean']:.1f}", "aeDe": f"{100 * dut['ae_de']['mean']:.1f}", "withinCompany": f"{100 * dut['mean_within']:.1f}",
        "deAds": dut["ads"]["data engineer"], "dutyAds": f"{dut['pop']:,}", "dutyMinWords": dut["min_words"],
        "coreLow": pc(min(core_themes), D["job"]["n_themes"]), "coreHigh": pc(max(core_themes), D["job"]["n_themes"]), "dutyThemeAds": f"{D['job']['n_themes']:,}",
        "sqlPct": pc(D["job"]["tools"]["core"][0][1], D["corpus_n"]), "nextToolPct": pc(D["job"]["max_other"], D["corpus_n"]),
        "titleAds": D["titles"]["n"], "titleCount": D["titles"]["n_titles"],
        "sqlLow": round(min(D["titles"]["core"].values())), "sqlHigh": round(max(D["titles"]["core"].values())),
        "midDbt": pc(*lv["mid"]["dbt"]), "midPbi": pc(*lv["mid"]["pbi"]), "seniorDbt": pc(*lv["senior"]["dbt"]), "seniorPbi": pc(*lv["senior"]["pbi"]),
        "stackChance": chance_text([lv["mid"]["fisher_p"], lv["senior"]["fisher_p"]]),
        "aeTitledPbi": D["stack"]["ae_titled"]["pbi_only_pct"],
        "dashPbiMid": round(100 * dash["pbi"][0]), "dashDbtMid": round(100 * dash["dbt"][0]),
        "uniquePct": pc(D["pitch"]["unique"], D["pitch"]["n"]), "oneApartPct": pc(D["pitch"]["one_apart"], D["pitch"]["unique"]),
        "templateTools": len(tpl["tools"]), "templateExact": tpl["exact"], "pitchAds": D["pitch"]["n"],
        "contextEngineering": D["semantics"]["context_engineering"], "semanticLayer": sem["ai"][0] + sem["other"][0],
        "semanticAi": pc(*sem["ai"]), "semanticOther": pc(*sem["other"]), "semanticChance": chance_text([sem["p"]]),
        "semanticWithModel": D["semantics"]["ai"][0] + D["semantics"]["other"][0],
        "aiPct": pc(len(ai_rows), len(D["ai"]["rows"])), "aiVaguePct": pc(sum(r[1] == 1 for r in ai_rows), len(ai_rows)),
        "aiDbt": pc(*ai["dbt_vs_pbi"]["a"]), "aiPbi": pc(*ai["dbt_vs_pbi"]["b"]),
        "payPct": miss["pay"], "processPct": miss["process"], "reportsPct": miss["reports_to"], "teamPct": miss["team_size"],
        "payUs": round(ben["pay"]["US"]["pct"]), "payEurope": pc(sum(ben["pay"][r]["k"] for r in europe), sum(ben["pay"][r]["n"] for r in europe)),
        "usHealth": round(ben["pct"]["health"]["US"]), "usPension": round(ben["pct"]["pension"]["US"]), "usEquity": round(ben["pct"]["equity"]["US"]),
        "frMeal": round(ben["pct"]["meal"]["France"]), "frPension": round(ben["pct"]["pension"]["France"]),
        "benefitsDiffer": s2["benefits_summary"]["differ_q01"], "benefitsTags": s2["benefits_summary"]["tags"],
        "benefitsAds": f"{sum(r['n'] for r in ben['pay'].values()):,}",
        "juniorN": lvl_n["junior"], "seniorPlus": senior_plus, "seniorPerJunior": round(senior_plus / lvl_n["junior"]),
        "koreaBase": pc(bands[0], max(bands)), "juniorOfWidest": pc(lvl_n["junior"], max(lvl_n.values())),
        "degreeJunior": pc(*deg["junior"]), "degreeOther": pc(*deg_other), "degreeChance": chance_text([deg_p]),
        "frBac": fr["fr"][0], "frJunior": fr["fr"][1],
        "guideK": men["junior_names_guide"][0], "guideN": men["junior_names_guide"][1],
        "seniorMentorK": men["senior_asks_mentor"][0], "seniorMentorN": men["senior_asks_mentor"][1],
        "neitherK": men["junior_neither"][0],
        "sqlLevelLow": min(prog["sql"][1:]), "sqlLevelHigh": max(prog["sql"][1:]), "bizLow": min(prog["business"][1:]), "bizHigh": max(prog["business"][1:]),
        "bizSilentPct": 100 - pc(sum(prog["business_k"]), sum(prog["n"])), "levelAds": f"{sum(prog['n']):,}",
        "stratJunior": round(strat[0]), "stratMid": round(strat[1]), "stratSenior": round(strat[2]), "stratLead": round(strat[3]),
        "years": ", ".join(map(str, years[:-1])) + f" and {years[-1]}",
        "ladderChance": chance_text([t["holm"] for t in ladder_tests if t["item"] == "strategic verbs"]),
        "ladderJunior": lad_n[0], "ladderMid": lad_n[1], "ladderSenior": lad_n[2], "ladderLead": lad_n[3],
        "askmeChance": chance_text([D["semantics"]["layer"]["senior"]["p"], lv["mid"]["fisher_p"], mentor_p, deg_p, fr["fisher_p"]]),
    }


def fill(text, F):
    """Replace each {{name}} with its computed figure; an unknown name is an error, not a blank."""
    return re.sub(r"\{\{(\w+)\}\}", lambda m: str(F[m.group(1)]), text)


def assemble(template, runtime, out, F, images=False):
    data = (HERE / "inputs" / "deck_data.json").read_text(encoding="utf-8")
    img = {f.stem: f"data:image/{f.suffix[1:].replace('jpg', 'jpeg')};base64," + base64.b64encode(f.read_bytes()).decode()
           for f in sorted((HERE / "inputs" / "img").glob("*")) if images and f.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp")}   # pictures for slides that use them; a missing file leaves the text version
    questions = json.dumps(json.loads(fill((SRC / "questions.json").read_text(encoding="utf-8"), F)), ensure_ascii=False)
    js = "\n".join((SRC / f).read_text(encoding="utf-8") for f in SHARED + runtime)
    html = fill((SRC / template).read_text(encoding="utf-8"), F)
    html = html.replace("/*__CSS__*/", (SRC / "style.css").read_text(encoding="utf-8"))
    html = html.replace("/*__DATA__*/", "const D=" + data + ";const IMG=" + json.dumps(img) + ";").replace("/*__Q__*/", "const Q=" + questions + ";")
    html = html.replace("/*__JS__*/", js)
    out.write_text(html, encoding="utf-8")
    print("wrote", out.relative_to(SITE.parent), len(html) // 1024, "KB")


# the builders behind the talk's later charts, and the list that puts every chart in story order for the explorer
STORY_FILES = ["s_missing.js", "s_v5.js", "s_v6.js", "s_v7.js", "s_v8.js", "story.js"]


if __name__ == "__main__":
    F = facts(json.loads((HERE / "inputs" / "deck_data.json").read_text(encoding="utf-8")))
    assemble("deck.template.html", ["deck.js"], OUT / "jd_deck.html", F)
    assemble("deck.template.html", ["s_missing.js", "slides_v2.js", "deck.js"], OUT / "jd_deck_v2.html", F)
    assemble("deck.template.html", ["s_missing.js", "s_v4.js", "slides_v2.js", "slides_v4.js", "deck.js"], OUT / "jd_deck_v4.html", F)
    assemble("deck.template.html", ["s_missing.js", "s_v5.js", "slides_v2.js", "slides_v5.js", "deck.js"], OUT / "jd_deck_v5.html", F)
    assemble("deck.template.html", ["s_missing.js", "s_v5.js", "s_v6.js", "slides_v2.js", "slides_v6.js", "deck.js"], OUT / "jd_deck_v6.html", F)
    assemble("deck.template.html", ["s_missing.js", "s_v5.js", "s_v6.js", "s_v7.js", "slides_v2.js", "slides_v7.js", "deck.js"], OUT / "jd_deck_v7.html", F, images=True)
    assemble("deck.template.html", ["s_missing.js", "s_v5.js", "s_v6.js", "s_v7.js", "s_v8.js", "slides_v2.js", "slides_v8.js", "deck.js"], OUT / "jd_deck_v8.html", F, images=True)
    assemble("views.template.html", STORY_FILES + ["views.js"], OUT / "jd_views.html", F)
