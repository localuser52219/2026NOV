import assert from 'node:assert/strict';
import {DATA as D} from '../assets/itinerary-data.js';
import {calculate} from '../assets/js/budget.js';
import {PHOTOS} from '../assets/photos.js';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const statuses=new Set(['Confirmed','Planned','Optional','Unverified','Excluded']);
for(const key of ['activities','hotels','bases','days','transport','excluded']){
 const list=D[key];assert.equal(new Set(list.map(a=>a.id)).size,list.length,`${key}: duplicate ID`);
 for(const x of list){if(x.status)assert(statuses.has(x.status));}
}
const refs=k=>new Set(D[k].map(x=>x.id));const act=refs('activities'),hotels=refs('hotels'),bases=refs('bases'),transport=refs('transport');
assert.equal(D.days.length,(Date.parse(D.trip.end)-Date.parse(D.trip.start))/86400000+1);
assert.equal(D.days[0].date,D.trip.start);assert.equal(D.days.at(-1).date,D.trip.end);
for(let i=0;i<D.days.length;i++){
 const d=D.days[i];assert.equal(d.date,d.id);assert(bases.has(d.base));if(d.hotelId)assert(hotels.has(d.hotelId));
 if(i)assert.equal(Date.parse(d.date)-Date.parse(D.days[i-1].date),86400000);
 for(const id of d.transportIds)assert(transport.has(id));
 let last=-1;for(const e of d.events){assert(/^\d\d:\d\d$/.test(e.time));const [h,m]=e.time.split(':').map(Number);assert(h<24&&m<60);const t=h*60+m;assert(t>=last);last=t;if(e.activityId)assert(act.has(e.activityId));assert(statuses.has(e.status));}
}
const expectedEvents=[12,5,12,10,11,10,11];assert.deepEqual(D.days.map(d=>d.events.length),expectedEvents,'raw schedule preservation');
const expectedBookings=['sky','here','copper','lay'];assert.deepEqual(D.activities.filter(a=>a.bookingStatus==='Confirmed').map(a=>a.id),expectedBookings);
assert(D.trip.pax===null&&D.travelers.length===0);assert(D.budget.entries.length===0);
for(const a of D.activities){assert(bases.has(a.base)||a.base==='unassigned');assert(a.cost.currency==='THB');assert.equal(a.cost.amount,null);assert(a.unverified.length>0);assert(a.days.every(id=>D.days.some(d=>d.id===id)));if(a.coords){assert(a.coords[0]>11&&a.coords[0]<15&&a.coords[1]>99&&a.coords[1]<103);assert(a.positionConfidence.includes('約略'))}for(const s of a.sources)assert.equal(new URL(s[1]).protocol,'https:');}
for(const p of Object.values(PHOTOS)){assert(p.author&&p.license&&p.licenseUrl);assert.equal(new URL(p.src).protocol,'https:');}
// Mixed currencies, subgroups, personal spending, unknown cost, zero cost and rounding.
const members=['甲','乙','丙'];const result=calculate([{id:'a',amount:100,rate:1,participants:members},{id:'b',amount:20,rate:4.2,participants:['甲','乙']},{id:'c',amount:7.03,rate:1,participants:['丙']},{id:'d',amount:null,rate:1,participants:members},{id:'e',amount:0,rate:1,participants:['乙']}],members);
assert.equal(result.total,19103);assert.equal(result.unknown,1);assert.equal(result.balanced,true);assert.deepEqual(result.shares,{'甲':7534,'乙':7533,'丙':4036});
assert.equal(calculate([{id:'bad',amount:1,rate:1,participants:['甲','甲']}],members).invalid.length,1);
assert.equal(calculate([{id:'bad',amount:1,rate:null,participants:['甲']}],members).invalid.length,1);
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(resolve(dir,e.name)):[resolve(dir,e.name)])}
for(const file of walk(resolve(root,'assets')).filter(f=>f.endsWith('.js'))){execFileSync(process.execPath,['--check',file]);const text=readFileSync(file,'utf8');for(const m of text.matchAll(/from ['"]([^'"]+)['"]/g)){if(m[1].startsWith('.'))assert(existsSync(resolve(dirname(file),m[1])),`missing import ${m[1]}`)}}
assert(!/北海道|Granbell|Moving Inn|SISUMO/.test(readFileSync(resolve(root,'assets/itinerary-data.js'),'utf8')));
console.log(`PASS: ${D.days.length} days, ${D.activities.length} activities, ${D.days.reduce((n,d)=>n+d.events.length,0)} source schedule rows, 4 booking annotations; references, dates, statuses, coordinates, imports and budget conservation.`);
