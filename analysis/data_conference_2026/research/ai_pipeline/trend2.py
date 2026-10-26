import pandas as pd,numpy as np
from scipy.stats import norm
a=pd.read_pickle('ads2.pkl'); e=a[a.lang=='en'].copy()
e['t']=(pd.to_datetime(e.scrape)-pd.Timestamp('2026-08-01')).dt.days/30
e['loglen']=np.log(e.length.clip(lower=200)); e['loglen']-=e.loglen.mean()
e['senior']=e.seniority.isin(['senior','lead','staff']).astype(int)
e['dbt_only']=((e.dbt)&~(e.pbi|e.fabric)).astype(int); e['pbi_only']=((e.pbi|e.fabric)&~e.dbt).astype(int)
e['y']=e.roleAI.astype(int)
def logit(d,cols):
    X=np.column_stack([np.ones(len(d))]+[d[c].values.astype(float) for c in cols]); y=d.y.values; b=np.zeros(X.shape[1])
    for _ in range(50):
        p=1/(1+np.exp(-X@b)); W=p*(1-p); H=X.T@(X*W[:,None]); b=b+np.linalg.solve(H,X.T@(y-p))
    p=1/(1+np.exp(-X@b)); W=p*(1-p); Hi=np.linalg.inv(X.T@(X*W[:,None])); r=(y-p)[:,None]*X
    M=np.zeros((X.shape[1],)*2)
    for c,idx in d.groupby('company').indices.items(): s=r[idx].sum(0); M+=np.outer(s,s)
    V=Hi@M@Hi; se=np.sqrt(np.diag(V)); return b,se
for name,d in [('Aug-Oct',e[e.scrape>='2026-08-01']),('Jul-Oct',e[e.scrape>='2026-07-01']),('Jun-Oct',e[e.scrape>='2026-06-01'])]:
    for cols in [['t'],['t','loglen','senior','dbt_only','pbi_only']]:
        b,se=logit(d,cols); i=1; z=b[i]/se[i]
        print(name,len(d),d.company.nunique(),cols,'OR/30d',round(np.exp(b[i]),2),'CI',round(np.exp(b[i]-1.96*se[i]),2),round(np.exp(b[i]+1.96*se[i]),2),'p',round(2*norm.sf(abs(z)),3))
print(e.groupby(e.scrape.str[:7]).length.median())
