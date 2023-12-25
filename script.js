gsap.registerPlugin(ScrollTrigger);
const tl=gsap.timeline();
tl.to(".loader",{
    y:-1000,
    duration:2,
    delay:2
})
gsap.to(".loader img",{
    rotate:"360",
    duration:.9,
    repeat:-1,
    yoyo:true,
})
tl.from("nav,.logo ,.name, nav ul li",{
    y:-100,
    opacity:0,
    stagger:.1
})
gsap.from(".page2 h1,.page2 .c1 h4,.page2 .c2 h4",{
    y:200,
    opacity:0,
    stagger:.2,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
    }
})
gsap.to(".page2 .musical",{
    y:-500,
    rotate:-90,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:1,
        start:"top 50%",
    }
})
gsap.from(".page2 .song",{
    y:-300,
    rotate:90,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:1,
        start:"top 50%",
    }
})
gsap.to(".scrolldown",{
    y:50,
    repeat:-1,
    yoyo:true,
    duration:.5
})
var crsr = document.querySelector(".cursor");
window.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.clientX + "px";
    crsr.style.top = dets.clientY + "px";
  });
var category=document.querySelector(".page2 h1");
var nav=document.querySelector("nav")
var a=document.querySelectorAll("body nav a");
var footer=document.querySelector("footer");
var contentanchor=document.querySelectorAll(".content a");
[footer,nav,category].forEach(function(elem){
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4;
        crsr.style.backgroundColor = "transparent";
        crsr.style.backdropFilter="none"
        crsr.style.border = ".5px solid #fff";
      })
    
      elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.background = "none";
      });
})
a.forEach(function(elem){
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4;
        crsr.style.background = "transparent";
        crsr.style.backdropFilter="none"
        crsr.style.border = ".5px solid #fff";
      })
    
      elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
      });
})
contentanchor.forEach(function(elem){
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 6;
        crsr.style.border = "1px solid #fff";
        crsr.innerHTML="Play"
        crsr.style.background="rgba(0, 0, 0, .3)";
        crsr.style.backdropFilter="blur(1px)"
      })
    
      elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.innerHTML="";
        crsr.style.background = "transparent";
      });
})
var bars=document.querySelector("#bars")
var cross=document.querySelector("#cross")
var sidenav=document.querySelector(".sidenav")
var anchor=document.querySelectorAll(".sidenav ul li a")
bars.addEventListener("click",function(){
    sidenav.style.right=0
    sidenav.style.opacity=1
})

cross.addEventListener("click",function(){
    sidenav.style.right="-100%"
    sidenav.style.opacity=0
})

anchor.forEach(function(elem){
    elem.addEventListener("click",function(){
        sidenav.style.right="-100%"
        sidenav.style.opacity=0

    })
})
