// Integer minor-unit accounting: deterministic remainder assignment conserves totals.
export function calculate(entries,members){
 const shares=Object.fromEntries(members.map(id=>[id,0]));let total=0,unknown=0;const invalid=[];
 for(const e of entries){
  if(e.amount===null||e.amount===''){unknown++;continue}
  if(!Number.isFinite(e.amount)||e.amount<0||!Number.isFinite(e.rate)||e.rate<=0||!Array.isArray(e.participants)||!e.participants.length||new Set(e.participants).size!==e.participants.length||e.participants.some(id=>!members.includes(id))){invalid.push(e.id);continue}
  const cents=Math.round(e.amount*e.rate*100);if(!Number.isSafeInteger(cents)){invalid.push(e.id);continue}
  total+=cents;const each=Math.floor(cents/e.participants.length),extra=cents% e.participants.length;
  e.participants.forEach((id,i)=>shares[id]+=each+(i<extra?1:0));
 }
 return {total,shares,unknown,invalid,balanced:Object.values(shares).reduce((a,b)=>a+b,0)===total};
}
export const money=cents=>(cents/100).toLocaleString('zh-HK',{minimumFractionDigits:2,maximumFractionDigits:2});
