/*========== LOADER ==========*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},900);

});

/*========== CUSTOM CURSOR ==========*/

const cursor=document.getElementById("cursor");

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

/*========== NAVBAR ==========*/

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

nav.style.background="rgba(12,12,12,.82)";
nav.style.backdropFilter="blur(24px)";
nav.style.boxShadow="0 0 35px rgba(168,85,247,.28)";

}else{

nav.style.background="";
nav.style.boxShadow="none";

}

});

/*========== SCROLL REVEAL ==========*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.18
});

document.querySelectorAll("section,.glass").forEach(el=>{

el.classList.add("hidden-item");

observer.observe(el);

});

/*========== COUNTERS ==========*/

const counters=document.querySelectorAll(".counter");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats-grid");

if(!stats||started)return;

if(window.scrollY+window.innerHeight>stats.offsetTop+100){

started=true;

counters.forEach(counter=>{

const target=+counter.dataset.target;

let value=0;

const update=()=>{

value+=Math.ceil(target/120);

if(value<target){

counter.innerText=value.toLocaleString();

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString();

}

};

update();

});

}

});

/*========== FAQ ==========*/

document.querySelectorAll(".faq").forEach(item=>{

item.querySelector(".faq-btn").onclick=()=>{

document.querySelectorAll(".faq").forEach(x=>{

if(x!==item)x.classList.remove("active");

});

item.classList.toggle("active");

};

});

/*========== HERO PARALLAX ==========*/

const heroImg=document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

if(heroImg){

heroImg.style.transform=`translateY(${window.scrollY*.08}px) scale(1.04)`;

}

});

/*========== FLOATING CARDS ==========*/

document.querySelectorAll(".floating").forEach((card,i)=>{

setInterval(()=>{

card.style.transform=`translateY(${Math.sin(Date.now()/700+i)*12}px)`;

},20);

});

/*========== GLOW BLOBS ==========*/

const blobs=document.querySelectorAll(".blob");

window.addEventListener("mousemove",e=>{

const x=e.clientX/window.innerWidth-.5;

const y=e.clientY/window.innerHeight-.5;

blobs.forEach((blob,i)=>{

const speed=(i+1)*18;

blob.style.transform=`translate(${x*speed}px,${y*speed}px)`;

});

});
/*========== MAGNETIC BUTTONS ==========*/

document.querySelectorAll(".main-btn,.nav-btn").forEach(btn=>{

btn.addEventListener("mousemove",e=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=`translate(${x*.18}px,${y*.18}px) scale(1.05)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0) scale(1)";

});

});

/*========== 3D GAME CARDS ==========*/

document.querySelectorAll(".game-card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=(e.clientX-rect.left)/rect.width-.5;
const y=(e.clientY-rect.top)/rect.height-.5;

card.style.transform=`
perspective(1000px)
rotateY(${x*18}deg)
rotateX(${y*-18}deg)
translateY(-10px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

/*========== HERO PARALLAX ==========*/

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",e=>{

if(!hero) return;

const x=e.clientX/window.innerWidth-.5;
const y=e.clientY/window.innerHeight-.5;

hero.style.transform=`translate(${x*10}px,${y*10}px)`;

});

/*========== IMAGE GLOW ==========*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.filter="brightness(1.1) saturate(1.15)";

});

img.addEventListener("mouseleave",()=>{

img.style.filter="";

});

});

/*========== SCROLL PROGRESS ==========*/

const progress=document.createElement("div");

progress.style.cssText=`
position:fixed;
top:0;
left:0;
height:4px;
width:0;
background:linear-gradient(90deg,#a855f7,#ff3cac,#ff8a00);
z-index:999999;
box-shadow:0 0 25px #a855f7;
`;

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const h=document.documentElement;

const percent=(h.scrollTop)/(h.scrollHeight-h.clientHeight);

progress.style.width=percent*100+"%";

});

/*========== REVEAL ANIMATION ==========*/

const style=document.createElement("style");

style.innerHTML=`

.hidden-item{
opacity:0;
transform:translateY(70px);
transition:1s ease;
}

.show{
opacity:1;
transform:none;
}

`;

document.head.appendChild(style);

/*========== ACTIVE NAV ==========*/

const sections=document.querySelectorAll("section");
const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-150;

if(scrollY>=top){

current=sec.id;

}

});

links.forEach(link=>{

link.style.color="";

if(link.getAttribute("href")==="#"+current){

link.style.color="#a855f7";

}

});

});

/*========== SMOOTH ENTRY ==========*/

window.addEventListener("load",()=>{

document.body.animate([

{
opacity:0,
transform:"translateY(25px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,
fill:"forwards",
easing:"ease"

});

});

/*========== CONSOLE ==========*/

console.log("%cVOIDFORGE STUDIOS","font-size:20px;color:#a855f7;font-weight:bold;");
console.log("%cCyberpunk Gaming Experience Loaded ⚡","color:#ff3cac;");