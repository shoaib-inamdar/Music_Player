var btn=document.querySelector(".btn");
var con=document.querySelector(".container");
var img=document.querySelector(".img");
var ima=document.querySelector("#img");
var play=document.querySelector("#play");
var music=document.querySelector("audio");
var title=document.querySelector(".title");
var artist=document.querySelector(".artist");
var next=document.querySelector("#next");
var prev=document.querySelector("#pre");
var playico=document.querySelector(".play")
var progressbar=document.querySelector(".progressbar");
var progress=document.querySelector(".progress");
var currentsong=document.querySelector(".current");
var songduration=document.querySelector(".duration");
var main=document.querySelector(".main");
var backimg=document.querySelector("#backimg");
var newsong=document.querySelectorAll("li");
var list=document.querySelector(".list");
var category=document.querySelector(".category");
const songs=[{
    name:"Ramuloo-Ramulaa",
    title:"Ramuloo-Ramulaa",
    artist:"Anurag Kulkarni, Mangli",
},
{
    name:"Na-Roja-Nuvve",
    title:"Na-Roja-Nuvve",
    artist:"Hesham Abdul Wahab",
},
{
    name:"Mastaaru-Mastaaru",
    title:"Mastaaru-Mastaaru",
    artist:"Shweta Mohan",
},
];
var flag=true
btn.addEventListener("click",()=>{
    if(flag){
    con.style.flexDirection="row";
    con.style.bottom=0;
    con.style.height="15%"
    con.style.width='80%';
    img.style.width="10%"
    img.style.height="100%"
    ima.style.borderRadius="0%"
    btn.style.left="5%"
    progressbar.style.top="-10%"
    progressbar.style.width="95%"
    btn.style.transform="rotate(180deg)"
    category.style.height="60%"
    category.style.opacity=0
    list.style.opacity=0
    list.style.height="60%"
    con.style.position="absolute"
    flag=false
}
else{
    con.style.flexDirection="column";
    con.style.position="relative"
    con.style.height="70%"
    con.style.width='30%';
    img.style.width="50%"
    img.style.height="50%"
    ima.style.borderRadius="20%"
    progressbar.style.position="absolute"
    progressbar.style.top="80%"
    progressbar.style.width="80%"
    btn.style.left="10%"
    category.style.height="70%"
    list.style.height="70%"
    category.style.opacity=1
    list.style.opacity=1
    btn.style.transform="rotate(3600deg)"
    flag=true
}
})
var isplay=true
play.addEventListener("click",()=>{
    if(isplay){
        music.play();
        playico.src="pause.svg"
        isplay=false
    }
    else{
        music.pause();
        playico.src="play.svg"
        isplay=true
    }
})

const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="telugusongs/"+songs.name+".m4a";
    ima.src="teluguimages/"+songs.name+".jpg";
    backimg.src="teluguimages/"+songs.name+".jpg";
    document.title=songs.name;
}
songindex=0;
const nextsong=()=>{
    
        songindex=(songindex+1)%songs.length;
        //default index starts from 0
        //but default index for array objects is 1
        // if total songs= 3 i.e total index=2
        // and song length is 3
        //2 =(2+1)%3
        //here 3%3=0
        //therefore the songs get reset to 0
        loadSong(songs[songindex]);
        playico.src="pause.svg"
        if (music.duration > 0 && !music.paused) {
            playico.src="play.svg"
        } else {
            playico.src="pause.svg"
        }
        music.play();
};
const prevsong=()=>{
    songindex=(songindex-1+songs.length)%songs.length;
    loadSong(songs[songindex]);
    if (music.duration > 0 && !music.paused) {
        playico.src="play.svg"
    } else {
        playico.src="pause.svg"
    }
    music.play();
}

music.addEventListener("timeupdate",(event)=>{
    const {currentTime,duration}=event.srcElement;
     var minduration=Math.floor(duration/60);
     var secduration=Math.floor(duration%60);
     songduration.innerHTML=minduration+":"+secduration;

     var mincurrent=Math.floor(currentTime/60);
     var seccuurent=Math.floor(currentTime%60);
     currentsong.innerHTML=mincurrent+":"+seccuurent;
     if(music.ended)
    {
        nextsong();
    }
})
next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);

 music.ontimeupdate=function(e){
    progress.style.width=Math.floor(music.currentTime*100/music.duration)+"%";
 }
 progressbar.onclick=function(e){
   music.currentTime=((e.offsetX/progressbar.offsetWidth)*music.duration);
}

function song0(){
    songindex=0;
    loadSong(songs[songindex]);
    music.play();
    playico.src="pause.svg"
}
function song1(){
    songindex=1;
    loadSong(songs[songindex]);
    music.play();
    playico.src="pause.svg"
}
function song2(){
    songindex=2;
    loadSong(songs[songindex]);
    music.play();
    playico.src="pause.svg"
}
function song3(){
    songindex=3;
    loadSong(songs[songindex]);
    music.play();
    playico.src="pause.svg"
}
function song4(){
    songindex=4;
    loadSong(songs[songindex]);
    music.play();
    playico.src="pause.svg"
}
function song5(){
    songindex=5;
    loadSong(songs[songindex]);
    music.play();
    playico.src="pause.svg"
}
function song6(){
    songindex=6;
    loadSong(songs[songindex]);
    music.play();
    playico.src="pause.svg"
}
function song7(){
    songindex=7;
    loadSong(songs[songindex]);
    music.play();
    playico.src="pause.svg"
}
gsap.to(".loader",{
    y:-1000,
    duration:1.5,
    delay:1,
    opacity:0
})
var opa=document.querySelector(".change");
function change() {
    if (getComputedStyle(con).zIndex == "2") {
        list.style.zIndex = "2";
        list.style.opacity = "1";
        category.style.zIndex = "1";
        con.style.zIndex = "0";
        category.style.opacity = "0";
        con.style.opacity = "0";

    }
    if (getComputedStyle(category).zIndex == "2") {
        list.style.zIndex = "1";
        list.style.opacity = "0";
        con.style.zIndex = "2";
        con.style.opacity = "1";
        category.style.opacity = "0";
        category.style.zIndex = "0";
    }
    if (getComputedStyle(list).zIndex == "2") {
        list.style.zIndex = "0";
        list.style.opacity = "0";
        con.style.zIndex = "1";
        con.style.opacity = "0";
        category.style.zIndex = "2";
        category.style.opacity = "1";
    }
}