(function(root){
'use strict';
// Public offline checksum; intentionally not a secret or secure entitlement system.
async function issueLicense(){const bytes=new TextEncoder().encode('gcal-bulk-move:local:unlock:v1'); const hash=new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)); return 'GCB1.'+Array.from(hash,b=>b.toString(16).padStart(2,'0')).join('');}
async function verifyLicense(value){return typeof value==='string' && /^GCB1\.[a-f0-9]{64}$/.test(value.trim()) && value.trim()===await issueLicense();}

const api={issueLicense,verifyLicense}; Object.assign(root.GcalBulk ||= {},api); if(typeof module!=='undefined' && module.exports) module.exports=api;
})(globalThis);
