import {DATA as D} from '../itinerary-data.js';
const prefix=D.trip.id; let memory={};
export function read(key,fallback){try{return JSON.parse(localStorage.getItem(prefix+key))??fallback}catch{return memory[key]??fallback}}
export function save(key,value){memory[key]=value;try{localStorage.setItem(prefix+key,JSON.stringify(value));return true}catch{return false}}
export const stars=()=>read('.stars',[]).filter(id=>D.activities.some(a=>a.id===id));
export function toggle(id){const next=new Set(stars());next.has(id)?next.delete(id):next.add(id);return save('.stars',[...next])}
export function theme(){const current=document.documentElement.dataset.theme|| (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');const next=current==='dark'?'light':'dark';document.documentElement.dataset.theme=next;save('.theme',next)}
const stored=read('.theme',null);if(stored)document.documentElement.dataset.theme=stored;
