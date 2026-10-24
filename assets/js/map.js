import {esc,place} from './trip.js';
let maps=[];let generation=0;
export function clearMaps(){generation++;maps.forEach(m=>m.remove());maps=[]}
export function mountMap(box,items){if(!box)return;const gen=generation;box.innerHTML='<p class="fallback">地圖載入中…每張卡的 Google Maps 仍可使用。</p>';let ticks=0;
 const start=()=>{if(gen!==generation||!box.isConnected)return;if(!window.L){if(++ticks<40){setTimeout(start,250);return}box.innerHTML='<p class="fallback">地圖未能載入。請使用景點清單及導航連結。</p>';return}
 box.innerHTML='';const map=L.map(box,{scrollWheelZoom:false});maps.push(map);let warned=false;L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).on('tileerror',()=>{if(warned)return;warned=true;const p=document.createElement('p');p.className='map-warning';p.textContent='底圖未能完整載入；請用清單導航。';box.append(p)}).addTo(map);
 const pts=items.filter(a=>Array.isArray(a.coords));pts.forEach(a=>L.marker(a.coords,{title:a.name}).bindPopup(`<strong>${esc(a.name)}</strong><p>約略區域，非入口</p><a href="${esc(place(a))}" target="_blank" rel="noopener">核對地點</a>`).addTo(map));
 if(pts.length)map.fitBounds(pts.map(a=>a.coords),{padding:[35,35],maxZoom:13});else map.setView([13.3,100.8],8);
 setTimeout(()=>{if(box.isConnected)map.invalidateSize()},80);
 };start();}
