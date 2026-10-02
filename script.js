function openInvitation(){
 const btn=document.getElementById('openEnvelope'),screen=document.getElementById('envelopeScreen'),inv=document.getElementById('invitation'),audio=document.getElementById('audio'),mb=document.getElementById('musicBtn');
 btn.classList.add('open');
 setTimeout(()=>{screen.classList.add('hidden');inv.classList.remove('hidden');window.scrollTo(0,0);audio.play().then(()=>mb.textContent='❚❚').catch(()=>{});},900);
}
const audio=document.getElementById('audio'),mb=document.getElementById('musicBtn'),prog=document.getElementById('progress');
mb.addEventListener('click',e=>{e.stopPropagation();if(audio.paused){audio.play().then(()=>mb.textContent='❚❚')}else{audio.pause();mb.textContent='▶'}});
audio.addEventListener('timeupdate',()=>{if(audio.duration)prog.style.width=(audio.currentTime/audio.duration*100)+'%'});
audio.addEventListener('ended',()=>mb.textContent='▶');
const target=new Date('2026-10-18T12:00:00-05:00').getTime();
function countdown(){let x=Math.max(0,target-Date.now());document.getElementById('days').textContent=Math.floor(x/86400000);document.getElementById('hours').textContent=String(Math.floor(x%86400000/3600000)).padStart(2,'0');document.getElementById('minutes').textContent=String(Math.floor(x%3600000/60000)).padStart(2,'0');document.getElementById('seconds').textContent=String(Math.floor(x%60000/1000)).padStart(2,'0')}
countdown();setInterval(countdown,1000);