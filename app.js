const revealTarget=()=>{const id=decodeURIComponent(location.hash.slice(1));const el=document.getElementById(id);if(!el)return;const detail=el.closest('details');if(detail)detail.open=true;};
window.addEventListener('hashchange',revealTarget);revealTarget();
const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}},{rootMargin:'-10% 0px -65% 0px'});document.querySelectorAll('main section').forEach(s=>observer.observe(s));
