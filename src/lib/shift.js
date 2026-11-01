(function(root){
'use strict';
function parseLocal(value){if(value instanceof Date){if(!Number.isFinite(+value))throw Error('无效时间');return new Date(value);}const m=/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?$/.exec(value);if(!m)throw Error('请使用 YYYY-MM-DD 或 YYYY-MM-DDTHH:mm');const [y,mo,d,h,mi]=m.slice(1).map(x=>Number(x||0));const date=new Date(y,mo-1,d,h,mi);if(date.getFullYear()!==y||date.getMonth()!==mo-1||date.getDate()!==d||h>23||mi>59)throw Error('无效日期或时间（可能处于夏令时跳时）');return date;}
function formatLocal(value,allDay=false){const d=parseLocal(value),p=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`+(allDay?'':`T${p(d.getHours())}:${p(d.getMinutes())}`);}
function shiftTime(value,amount,unit,allDay=false){if(!Number.isInteger(amount)||!['minutes','hours','days'].includes(unit))throw Error('偏移量须为整数');if(allDay&&unit!=='days')throw Error('全天事件只支持按天平移');const d=parseLocal(value);if(unit==='days')d.setDate(d.getDate()+amount);else if(unit==='hours')d.setHours(d.getHours()+amount);else d.setMinutes(d.getMinutes()+amount);if(!Number.isFinite(+d))throw Error('时间超出范围');return formatLocal(d,allDay);}

const api={parseLocal,formatLocal,shiftTime}; Object.assign(root.GcalBulk ||= {},api); if(typeof module!=='undefined' && module.exports) module.exports=api;
})(globalThis);
