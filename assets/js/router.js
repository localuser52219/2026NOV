export function route(){const [path,query='']=(location.hash.slice(2)||'today').split('?');const [view,param]=path.split('/');return {view,param:decodeURIComponent(param||''),query:new URLSearchParams(query)}}
export function go(view,param='',query=''){location.hash='/'+view+(param?'/'+encodeURIComponent(param):'')+(String(query)?'?'+query:'')}
