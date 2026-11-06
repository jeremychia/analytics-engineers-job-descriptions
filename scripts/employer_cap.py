"""Cap how many ads one employer contributes to analysis/data.json, so a prolific hirer cannot set the corpus figures."""
import collections

from discover_jobs import company_tokens

MAX_ADS_PER_EMPLOYER = 6
# Brands that recruit through one parent company's job board and count as one employer.
EMPLOYER_GROUPS = {"amazon": ("amazon", "aws", "prime video")}


def employer_group(company):
    tokens = company_tokens(company)
    for group, brands in EMPLOYER_GROUPS.items():
        if any(tokens[: len(brand.split())] == brand.split() for brand in brands):
            return group
    return " ".join(tokens)


def cap_per_employer(records):
    """(kept, capped): at most MAX_ADS_PER_EMPLOYER ads per employer, chosen evenly across collection dates."""
    by_employer = collections.defaultdict(list)
    for record in records:
        by_employer[employer_group(record.get("company"))].append(record)
    capped_ids = set()
    for employer_records in by_employer.values():
        if len(employer_records) <= MAX_ADS_PER_EMPLOYER:
            continue
        ordered = sorted(employer_records, key=lambda record: record["jd_id"])
        last = len(ordered) - 1
        keep = {round(step * last / (MAX_ADS_PER_EMPLOYER - 1)) for step in range(MAX_ADS_PER_EMPLOYER)}
        capped_ids.update(record["jd_id"] for position, record in enumerate(ordered) if position not in keep)
    kept = [record for record in records if record["jd_id"] not in capped_ids]
    capped = [record for record in records if record["jd_id"] in capped_ids]
    return kept, capped
