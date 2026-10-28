#!/usr/bin/env python3
"""What the ad leaves out: the share of ads that tell a candidate each thing they would ask on a first call.
Pay, work arrangement and interview steps come from the classifier's fields; years, reporting line and team size
are read from the ad text. Writes inputs/missing_stats.json (totals and one row of flags per ad).
Run: python3 build/missing_stats.py"""
import json, re
from pathlib import Path

HERE = Path(__file__).resolve().parent
DATA = HERE.parents[2] / "data"
NUM = r"(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|twelve|fifteen|twenty)"
EXPERIENCE = r"(experience|expérience|erfahrung|experiencia|esperienza|ervaring|in (a |an )?(similar|data|analytics|bi|business|engineering|sql|the field)|of (professional|hands-on|relevant|work|industry))"
TEXT = {   # years: a number of years with experience in the same phrase; team size: a team under 100 people
    "years": re.compile(rf"\b({NUM}|\d{{1,2}})\s*(\+|plus)?\s*((-|–|to)\s*{NUM}\s*\+?\s*)?(years?|yrs|ans|années|jahre|jaar|jaren|años|anos|anni)\b.{{0,60}}?{EXPERIENCE}|{EXPERIENCE}.{{0,40}}?\b\d{{1,2}}\s*\+?\s*(years?|yrs|ans|années|jahre|jaar|jaren|años)\b", re.I | re.S),
    "reports_to": re.compile(r"\b(will|you['’]?ll|you will|role|position|who|directly)\s+report(s|ing)?\s+(directly\s+)?((in)?to|through)\b|\breporting\s+(directly\s+)?(in)?to\s+(the|our|a|an)\s+(?-i:[A-Z])|\byour (line )?manager will be\b|\brattachée?\s+(au|à la|à)\b|\bberichte(s|st)\s+(direkt\s+)?an\b", re.I | re.S),
    "team_size": re.compile(rf"\bteam of {NUM}(?![\d,])\b|\b{NUM}[- ](person|people|strong)\s+((data|analytics|bi|engineering|analytics engineering)\s+)*team\b", re.I),
}
WORDS = {"one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10, "twelve": 12, "fifteen": 15, "twenty": 20}


def min_years_asked(text):
    """The smallest number of years of experience the ad asks for, or None when it states none."""
    found = []
    for m in TEXT["years"].finditer(text):
        tok = re.search(r"(?<!\d)(\d{1,2})(?!\d)|\b(" + "|".join(WORDS) + r")\b", m.group(0), re.I).group(0).lower()
        found.append(int(tok) if tok.isdigit() else WORDS[tok])
    return min(found) if found else None


ITEMS = [("years", "how many years"), ("arrangement", "remote, hybrid or office"), ("pay", "the pay"),
         ("reports_to", "who you report to"), ("process", "the interview steps"), ("team_size", "how big the team is")]


def flags(r, text):
    return {"pay": r.get("salary_min") is not None or r.get("salary_max") is not None,
            "arrangement": r.get("work_arrangement") not in (None, "not_stated"),
            "process": r.get("interview_stages") is not None,
            **{k: bool(TEXT[k].search(text)) for k in ("years", "reports_to", "team_size")}}


if __name__ == "__main__":
    ads = []
    for d in sorted(p for p in DATA.iterdir() if (p / f"{p.name}.json").exists()):
        r = json.loads((d / f"{d.name}.json").read_text())
        text = (d / "jd_archive.md").read_text() if (d / "jd_archive.md").exists() else ""
        ads.append({"id": d.name, **flags(r, text)})
    n = len(ads)
    totals = [{"key": k, "label": lab, "k": sum(a[k] for a in ads), "pct": round(100 * sum(a[k] for a in ads) / n)} for k, lab in ITEMS]
    json.dump({"n": n, "items": totals, "ads": ads}, open(HERE / "inputs" / "missing_stats.json", "w"), separators=(",", ":"))
    for t in totals: print(f"{t['label']:<30} {t['k']:>4} of {n}  {t['pct']}%")
