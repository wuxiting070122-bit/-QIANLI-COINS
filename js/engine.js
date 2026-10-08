/* Culture experience: transparent coin simulation; no material-consumption game. */
(function(root){
const trigrams={
'111':{name:'乾',symbol:'☰',nature:'天'},'000':{name:'坤',symbol:'☷',nature:'地'},
'100':{name:'震',symbol:'☳',nature:'雷'},'011':{name:'巽',symbol:'☴',nature:'风'},
'010':{name:'坎',symbol:'☵',nature:'水'},'101':{name:'离',symbol:'☲',nature:'火'},
'001':{name:'艮',symbol:'☶',nature:'山'},'110':{name:'兑',symbol:'☱',nature:'泽'}
};
function toss(random=Math.random){return Array.from({length:3},()=>random()<.5?2:3).reduce((a,b)=>a+b,0);}
function validLines(lines,complete=false){return Array.isArray(lines)&&lines.length<=(6)&&(!complete||lines.length===6)&&lines.every(n=>[6,7,8,9].includes(n));}
function image(lines,changed=false){if(!validLines(lines,true))throw Error('需要完整的六爻');return lines.map(n=>changed&&[6,9].includes(n)?(n===6?'1':'0'):([7,9].includes(n)?'1':'0')).join('');}
function decode(lines,hexagrams){const bits=image(lines),changed=image(lines,true);return {hex:hexagrams.find(h=>h.image===bits),changed:hexagrams.find(h=>h.image===changed),lower:trigrams[bits.slice(0,3)],upper:trigrams[bits.slice(3)],moving:lines.flatMap((n,i)=>[6,9].includes(n)?[i+1]:[])};}
function fresh(){return {id:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8),lines:[],note:''};}
function validatePost(title,body){if(!title.trim()||!body.trim())return '请填写标题与内容。';if(title.trim().length>60||body.trim().length>1000)return '标题限 60 字，内容限 1000 字。';return '';}
const api={trigrams,toss,validLines,image,decode,fresh,validatePost};root.Culture=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
