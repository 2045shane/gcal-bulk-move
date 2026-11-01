importScripts('../lib/license.js','../lib/quota.js');
const quota=GcalBulk.createQuotaStore(chrome.storage.local,GcalBulk.verifyLicense);
chrome.runtime.onMessage.addListener((message,sender,reply)=>{if(!sender.tab || !sender.url?.startsWith('https://calendar.google.com/'))return; if(!['quota-status','quota-consume','options'].includes(message.type))return; if(message.type==='options'){chrome.runtime.openOptionsPage();reply({ok:true});return;}quota[message.type==='quota-consume'?'consume':'status']().then(reply).catch(e=>reply({error:e.message}));return true;});
chrome.action.onClicked.addListener(()=>chrome.runtime.openOptionsPage());
