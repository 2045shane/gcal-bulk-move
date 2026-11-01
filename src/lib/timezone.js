(function(root){
'use strict';
function timezoneText(value,timeZone,allDay=false){if(allDay)return '全天日期不进行时区换算';const d=globalThis.GcalBulk.parseLocal(value);return new Intl.DateTimeFormat('zh-CN',{timeZone,dateStyle:'medium',timeStyle:'short',hourCycle:'h23'}).format(d)+`（${timeZone}）`;}
const api={timezoneText}; Object.assign(root.GcalBulk ||= {},api); if(typeof module!=='undefined' && module.exports) module.exports=api;
})(globalThis);
