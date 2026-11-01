(function(root){
'use strict';
function createPlan(events,amount,unit,timeZone){return events.map(event=>{try{if(!event.start||!event.end)throw Error('缺少时间，请补全');const api=globalThis.GcalBulk; if(+api.parseLocal(event.end)<=+api.parseLocal(event.start))throw Error('结束须晚于开始（全天结束为不含当日）');const start=api.shiftTime(event.start,amount,unit,event.allDay),end=api.shiftTime(event.end,amount,unit,event.allDay);if(+api.parseLocal(end)<=+api.parseLocal(start))throw Error('平移后结束须晚于开始');return {...event,newStart:start,newEnd:end,zoneText:timeZone?api.timezoneText(start,timeZone,event.allDay):'',status:'pending'};}catch(error){return {...event,status:'failed',error:error.message};}});}
const api={createPlan}; Object.assign(root.GcalBulk ||= {},api); if(typeof module!=='undefined' && module.exports) module.exports=api;
})(globalThis);
