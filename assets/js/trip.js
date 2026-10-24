import { DATA } from '../itinerary-data.js';
export const D=DATA;
export const item=id=>D.activities.find(a=>a.id===id);
export const hotel=id=>D.hotels.find(h=>h.id===id);
export const status={Confirmed:'已確認',Planned:'計劃',Optional:'可選',Unverified:'未核實',Excluded:'已排除'};
export const cats={Sight:'景觀',Culture:'文化',Event:'活動',Experience:'體驗',Food:'餐飲',Shopping:'購物',Relaxation:'休閒',Stop:'交通／短停'};
export function esc(x){return String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
export const dateText=date=>new Intl.DateTimeFormat('zh-HK',{timeZone:D.trip.timezone,month:'long',day:'numeric',weekday:'short'}).format(new Date(date+'T12:00:00+07:00'));
export function today(){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:D.trip.timezone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());return ['year','month','day'].map(k=>parts.find(p=>p.type===k).value).join('-')}
export function clock(date=today()){let selected=D.days.find(d=>d.date===date);return {date,day:selected||D.days[date<D.trip.start?0:D.days.length-1],phase:date<D.trip.start?'before':date>D.trip.end?'after':'during',count:Math.round((Date.parse(D.trip.start)-Date.parse(date))/86400000)}}
export const maps=a=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(a.mapQuery||a.name)+'&travelmode='+ (D.trip.mode==='driving'?'driving':D.trip.mode==='walking'?'walking':'transit');
export const place=a=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(a.mapQuery||a.name);
export function dayRoute(d){const points=[...new Set(d.events.map(e=>e.activityId).filter(Boolean))].map(item).filter(a=>a&&a.id!=='massage');if(!points.length)return null;const q=new URLSearchParams({api:'1',destination:points.at(-1).mapQuery,travelmode:'transit'});if(points.length>1)q.set('origin',points[0].mapQuery);/* Transit directions do not support waypoints. */return {url:'https://www.google.com/maps/dir/?'+q,first:points[0].name,last:points.at(-1).name}}
export const badge=s=>`<span class="badge ${s==='Unverified'?'unverified':''}">${status[s]||esc(s)}</span>`;
