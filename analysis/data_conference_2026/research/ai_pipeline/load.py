import json,glob,re,os
R='/Users/jeremychia/Documents/Github/analytics-engineers-job-descriptions/data/'
def load():
    out=[]
    for d in sorted(os.listdir(R)):
        try: j=json.load(open(f'{R}{d}/{d}.json')); t=open(f'{R}{d}/jd_archive.md').read()
        except Exception: continue
        t=t.split('## Layer B')[0]
        t=re.sub(r'^\*\*URL:\*\*.*$','',t,count=1,flags=re.M)
        j['text']=t; j['scrape']=d[:10]; out.append(j)
    return out
