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
var newsong=document.getElementsByClassName("a");
var list=document.querySelector(".list");
var category=document.querySelector(".category");
const songs=[{
    name:"Cheques",
    title:"Cheques",
    artist:"Shubh",
},
{
    name:"Pasoori",
    title:"Pasoori",
    artist:"Shae Gill, Ali Sethi",
},
{
    name:"Brown-Munde",
    title:"Brown-Munde",
    artist:"AP DHILLON",
},
{
    name:"Elevated",
    title:"Elevated",
    artist:"Shubh",
    
},
{
    name:"Pagol",
    title:"Pagol",
    artist:"Deep Jandu ft. Bohemia",
    
},
{
    name:"No-Love",
    title:"No-Love",
    artist:"Satyam Yaduvanshi",
    
},
{
    name:"Obsessed",
    title:"Obsessed",
    artist:"Riar Saab, Abhijay Sharma",
    
},
{
    name:"so- high",
    title:"so- high",
    artist:"Sidhu Moose Wala",
},
{
    name:"Check-It-Out",
    title:"Check-It-Out",
    artist:"PARMISH VERMA, Paradox",
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
    music.src="punjabisongs/"+songs.name+".m4a";
    ima.src="punjabiimages/"+songs.name+".jpg";
    backimg.src="punjabiimages/"+songs.name+".jpg";
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
function song8(){
    songindex=8;
    loadSong(songs[songindex]);
    music.play();
    playico.src="pause.svg"
}