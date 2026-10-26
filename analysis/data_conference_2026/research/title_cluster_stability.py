import pandas as pd,numpy as np,json
from math import comb
ae=pd.read_pickle('ae_cl.pkl'); cols=['bi','de','model','analysis','ds','gov']
X=np.array([[r['n_'+k] for k in cols] for _,r in ae.iterrows()],float); X=X/(X.sum(1,keepdims=True)+1e-9); n=len(X)
def km(X,k,rs,ninit=8,it=60):
    best=None
    for _ in range(ninit):
        C=[X[rs.integers(len(X))]]
        for _ in range(k-1):
            d=np.min(((X[:,None]-np.array(C)[None])**2).sum(2),1); C.append(X[rs.choice(len(X),p=d/d.sum())] if d.sum()>0 else X[rs.integers(len(X))])
        C=np.array(C)
        for _ in range(it):
            L=((X[:,None]-C[None])**2).sum(2).argmin(1); C2=np.array([X[L==j].mean(0) if (L==j).any() else C[j] for j in range(k)])
            if np.allclose(C,C2): break
            C=C2
        L=((X[:,None]-C[None])**2).sum(2).argmin(1); inr=((X-C[L])**2).sum()
        if best is None or inr<best[0]: best=(inr,C,L)
    return best[1],best[2]
def ari(a,b):
    ct=pd.crosstab(a,b).values; s=sum(comb(int(x),2) for x in ct.ravel()); sa=sum(comb(int(x),2) for x in ct.sum(1)); sb=sum(comb(int(x),2) for x in ct.sum(0)); t=comb(len(a),2)
    e=sa*sb/t; return (s-e)/((sa+sb)/2-e)
def sil(X,L):
    D=np.sqrt(((X[:,None]-X[None])**2).sum(2)); s=[]
    for i in range(len(X)):
        same=L==L[i]; a=D[i][same].sum()/max(same.sum()-1,1)
        b=min(D[i][L==j].mean() for j in set(L) if j!=L[i]); s.append((b-a)/max(a,b) if same.sum()>1 else 0)
    return float(np.mean(s))
rs=np.random.default_rng(0); res={'n':n,'k':{}}
for k in range(2,9):
    C,L=km(X,k,rs); aris=[]
    for _ in range(100):
        idx=rs.integers(0,n,n); Cb,_=km(X[idx],k,rs,ninit=3); Lb=((X[:,None]-Cb[None])**2).sum(2).argmin(1); aris.append(ari(L,Lb))
    res['k'][k]={'silhouette':round(sil(X,L),3),'ari_mean':round(float(np.mean(aris)),3),'ari_lo':round(float(np.percentile(aris,2.5)),3),'sizes':np.bincount(L).tolist()}
    print(k,res['k'][k])
json.dump(res,open('stab.json','w'),indent=1)
