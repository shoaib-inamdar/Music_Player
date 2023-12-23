gsap.registerPlugin(ScrollTrigger);
const tl=gsap.timeline();
// tl.to(".main",{x:window.innerWidth})
// gsap.to(".main",{z
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
        start:"top 60%"
    }
})
gsap.to(".page2 .musical",{
    // x:500,
    y:-500,
    rotate:-90,
    // duration:1,
    // scrub:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:1,
        start:"top 50%",
        // markers:true
    }
})
gsap.from(".page2 .song",{
    // x:500,
    y:-300,
    rotate:90,
    // duration:1,
    // scrub:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:1,
        start:"top 50%",
        // markers:true
    }
})
// gsap.to(".page3",{
//     background:"black",
//     scrollTrigger:{
//         trigger:".page3 .box",
//         scroller:"body",
//         start:"top 60%"
//         // scrub:1
//         // markers:true
//     }
// })
// gsap.from(".page3 h1,.page3 .content,.page3 .box",{
//     opacity:0,
//     stagger:.2,
//     // duration:.5,
//     // scrub:1,
//     scrollTrigger:{
//         trigger:".page3",
//         scroller:"body",
//         pin:true
//         // scrub:1,
//         // marker:true
//     }
// })
gsap.to(".scrolldown",{
    y:50,
    repeat:-1,
    yoyo:true,
    duration:.5
})

// gsap.to(".page1 .para1 h5",{
//     x:-500,
//     scrollTrigger:{
//         trigger:".page1",
//         scroller:"body",
//         scrub:1
//         // pin:true
//     }
//     // duration:1,
//     // repeat:-1,
//     // yoyo:true
// })
// gsap.to(".page1 .para2 h5",{
//     x:500,
//     scrollTrigger:{
//         trigger:".page1",
//         scroller:"body",
//         scrub:1
//         // pin:true
//     }
// })
// gsap.to(".page1 .name span",{
//     opacity:0,
//     repeat:-1,
//     stagger:.1,
//     // yoyo:true
// })
// tl.from(".page2",{
//     scale:0,
//     opacity:0,
//     // rotate:360,
//     scrollTrigger:{
//         trigger:".page2 .content",
//         scroller:"body",
//         start:"top 150%",
//         scrub:1
//     }
// })
// gsap.from(".page3 .box",{
//     x:100,
//     opacity:0,
//     stagger:.4,
//     // duration:.5,
//     scrollTrigger:{
//         trigger:".page3 .box",
//         scroller:"body",
//         // start:"top 60%",
//         pin:true
//         // marker:true
//     }
// })
// tl.from(".page3 .box",{
//     y:1000,
//     opacity:0
// })
// tl.from("nav ul li",{
//     y:-100,
//     opacity:0,
//     stagger:.1,
//     // duration:.5
// })
// var main=document.querySelector(".main");
// var progress=document.querySelector(".progress");
// // main.addEventListener("onscroll",function(){
//     // })
//     var x=0;
//     function scroll(){
//             progress.style.heigth=x++;
        
// }
var crsr = document.querySelector(".cursor");
window.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.clientX + "px";
    crsr.style.top = dets.clientY + "px";
  });
var category=document.querySelector(".page2 h1");
var nav=document.querySelector("nav")
var a=document.querySelectorAll("body a");
var footer=document.querySelector("footer");
[footer,nav,category].forEach(function(elem){
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #fff";
        // crsr.style.transform='translate(-50%,-50%)'
        crsr.style.backgroundColor = "transparent";
      })
    
      elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        // crsr.style.backgroundColor = "#95C11E";
      });
})
//   window.addEventListener("mousemove", moveCircle);
a.forEach(function(elem){
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #fff";
        // crsr.style.transform='translate(-50%,-50%)'
        crsr.style.backgroundColor = "transparent";
      })
    
      elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        // crsr.style.backgroundColor = "#95C11E";
      });
})

// function moveCircle(e) {
//   TweenLite.to(crsr, 0.3, {
//     x: e.clientX,
//     y: e.clientY
//   });
// }