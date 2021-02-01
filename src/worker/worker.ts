// This is the minified and stringified code of the web-audio-beat-detector-worker package.
export const worker = `!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=(e,t,n)=>{const o=e.length,r=[];let s=!1;for(let a=0;a<o;a+=1)e[a]>t?s=!0:s&&(s=!1,r.push(a-1),a+=n/4-1);return s&&r.push(o-1),r},r=(e,t,n)=>{const r=(e=>{let t=0;const n=e.length;for(let o=0;o<n;o+=1)e[o]>t&&(t=e[o]);return t})(e),s=.3*r;let a=[],l=r-.05*r;if(r>.25)for(;a.length<30&&l>=s;)a=o(e,l,t),l-=.05*r;const p=((e,t,n={})=>{var o,r;const s=Math.max(0,null!==(o=n.minTempo)&&void 0!==o?o:90),a=Math.max(0,null!==(r=n.maxTempo)&&void 0!==r?r:180),l=[];return e.forEach((e=>{let n=60/(e.interval/t);for(;n<s;)n*=2;for(;n>a;)n/=2;let o=!1,r=e.peaks.length;l.forEach((t=>{if(t.tempo===n&&(t.score+=e.peaks.length,t.peaks=[...t.peaks,...e.peaks],o=!0),t.tempo>n-.5&&t.tempo<n+.5){const o=2*Math.abs(t.tempo-n);r+=(1-o)*t.peaks.length,t.score+=(1-o)*e.peaks.length}})),o||l.push({peaks:e.peaks,score:r,tempo:n})})),l})((e=>{const t=[];return e.forEach(((n,o)=>{const r=Math.min(e.length-o,10);for(let s=1;s<r;s+=1){const r=e[o+s]-n;t.some((e=>e.interval===r&&(e.peaks.push(n),!0)))||t.push({interval:r,peaks:[n]})}})),t})(a),t,n);return p.sort(((e,t)=>t.score-e.score)),p};addEventListener("message",(({data:e})=>{try{if("analyze"===e.method){const{id:t,params:{channelData:n,sampleRate:o,tempoSettings:s}}=e,a=((e,t,n)=>{const o=r(e,t,n);if(0===o.length)throw new Error("The given channelData does not contain any detectable beats.");return o[0].tempo})(n,o,s);postMessage({error:null,id:t,result:{tempo:a}})}else{if("guess"!==e.method)throw new Error('The given method "'.concat(e.method,'" is not supported'));{const{id:t,params:{channelData:n,sampleRate:o,tempoSettings:s}}=e,{bpm:a,offset:l,tempo:p}=((e,t,n)=>{const o=r(e,t,n);if(0===o.length)throw new Error("The given channelData does not contain any detectable beats.");const{peaks:s,tempo:a}=o[0],l=Math.round(a),p=60/l;s.sort(((e,t)=>e-t));let u=s[0]/t;for(;u>p;)u-=p;return{bpm:l,offset:u,tempo:a}})(n,o,s);postMessage({error:null,id:t,result:{bpm:a,offset:l,tempo:p}})}}}catch(t){postMessage({error:{message:t.message},id:e.id,result:null})}}))}]);`; // tslint:disable-line:max-line-length
