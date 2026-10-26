import sys,json,re
sys.path.insert(0,'../role')
from load import *
from roletext import is_heading
D=json.load(open('/Users/jeremychia/Documents/Github/analytics-engineers-job-descriptions/analysis/data.json'))
META={d['jd_id']:d for d in D}
AIRE=re.compile(r"\bAI\b|\bA\.I\.|\bAI[-/]|artificial intelligence|\bLLMs?\b|generative|\bgen[- ]?AI\b|machine[- ]learning|\bML\b|\bMLOps\b|copilot|chat ?gpt|openai|\bclaude\b|\bcursor\b|agentic|\bagents?\b|\bMCP\b|\bRAG\b|prompt|vibe|large language|\bgemini\b|\bGPT|\bcodex\b|\bnlp\b|deep learning|neural|\bKI\b|\bIA\b|intelligence artificielle|künstliche",re.I)
def segs(text):
    sec='';out=[]
    for raw in text.split('\n'):
        l=raw.strip()
        if not l: continue
        if is_heading(l) and not re.match(r'^[-•*]',l):
            sec=l.strip('*#_ ').rstrip(':');continue
        isb=bool(re.match(r'^[-•*]\s',l))
        for s in re.split(r'(?<=[.!?])\s+',l):
            s=re.sub(r'^[-•*]\s*','',s.strip())
            if len(s)>12: out.append((sec,s,isb))
    return out
