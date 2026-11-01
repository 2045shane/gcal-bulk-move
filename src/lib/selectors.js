(function(root){
'use strict';
const SELECTORS={events:['[data-eventid]'],edit:['[aria-label="Edit event"]','[aria-label="编辑活动"]','[aria-label="编辑日程"]'],save:['[aria-label="Save"]','[aria-label="保存"]'],delete:['[aria-label="Delete event"]','[aria-label="删除活动"]','[aria-label="删除日程"]'],startDate:['input[aria-label="Start date"]','input[aria-label="开始日期"]'],endDate:['input[aria-label="End date"]','input[aria-label="结束日期"]'],startTime:['input[aria-label="Start time"]','input[aria-label="开始时间"]'],endTime:['input[aria-label="End time"]','input[aria-label="结束时间"]'],allDay:['[role="checkbox"][aria-label="All day"]','[role="checkbox"][aria-label="全天"]'],dialogs:['[role="dialog"]'],recurrence:['input[aria-label="This event"]','[role="radio"][aria-label="此活动"]']};
function visible(el){return !!el && el.getClientRects().length>0 && getComputedStyle(el).visibility!=='hidden';}
function findSelector(key,scope=document){return SELECTORS[key].flatMap(s=>Array.from(scope.querySelectorAll(s))).find(visible);}

const api={SELECTORS,visible,findSelector}; Object.assign(root.GcalBulk ||= {},api); if(typeof module!=='undefined' && module.exports) module.exports=api;
})(globalThis);
