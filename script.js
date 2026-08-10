const phrases=["Python Developer","Django Developer","Full Stack Developer","MongoDB Enthusiast"];let pi=0,ci=0,deleting=false;const typed=document.getElementById("typed");function type(){const p=phrases[pi];typed.textContent=p.slice(0,ci);if(!deleting&&ci<p.length){ci++;setTimeout(type,75)}else if(!deleting){deleting=true;setTimeout(type,1300)}else if(deleting&&ci>0){ci--;setTimeout(type,42)}else{deleting=false;pi=(pi+1)%phrases.length;setTimeout(type,350)}}type();const menu=document.querySelector(".menu-btn"),nav=document.querySelector(".nav-links");menu.addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));const glow=document.querySelector(".cursor-glow");window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});const sections=[...document.querySelectorAll("main section[id]")],links=[...document.querySelectorAll(".nav-links a")];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id))}})},{rootMargin:"-35% 0px -55% 0px"});sections.forEach(s=>observer.observe(s));const reveals=document.querySelectorAll(".reveal");const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");ro.unobserve(e.target)}}),{threshold:.08});reveals.forEach(x=>ro.observe(x));
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",event=>{
    const id=link.getAttribute("href");
    const target=document.querySelector(id);
    if(!target) return;
    event.preventDefault();
    target.scrollIntoView({behavior:"smooth",block:"start"});
    history.replaceState(null,"",id);
  });
});
