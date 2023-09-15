const play=document.getElementById("play");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const music=document.querySelector('audio');
const image=document.querySelector('img');
const title=document.getElementById('title');
const singer=document.getElementById('singer');
const p1=document.getElementById('progress');


const songs=[
    {

    name:"yoyo1",
    title:"Angreji Beat",
    singer:"YO YO Honey Singh",
},
{
    name:"yoyo2",
    title:"Yaar Bathere",
    singer:"YO YO Honey Singh",
    
},
{
name:"yoyo3",
title:"Blue Eyes",
singer:"YO YO Honey Singh",
}
];

let isplaying=false;
const playing=()=>{
    if(isplaying==false){
        music.play();
        image.classList.add('anim');
        play.classList.replace('fa-play','fa-pause');
        play.removeAttribute("title");
        play.setAttribute('title','pause');
        isplaying=true;
    }
    else{
        music.pause();
        image.classList.remove('anim');
        play.classList.replace('fa-pause','fa-play');
        play.removeAttribute("title");
        play.setAttribute('title','play');
        isplaying=false;
    }
};
play.addEventListener("click",playing);

// change music data
const loadsongs=(songs)=>{
    title.textContent=songs.title;
    singer.textContent=songs.singer;
    music.src="/musics/"+songs.name+".mp3";
    image.src="/images/"+songs.name+".jpg";
};


// loadsongs(songs[0]);
let songindex=0;
const nextsong=()=>{
    songindex=(songindex+1)%songs.length;
   loadsongs(songs[songindex]);
   if(isplaying==true){
          music.play();

   }

};
const prevsong=()=>{
    songindex=(songindex-1 + songs.length)%songs.length;
   loadsongs(songs[songindex]);
if(isplaying==true){
    music.play();

}

};
next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);

//  input tag progress change 
music.onloadedmetadata=function(){
    p1.max=music.duration;
    p1.value=music.currentTime;
}
if(!isplaying){
    setInterval(()=>{
      p1.value=music.currentTime;
      console.log(music.currentTime);
      console.log("value"+p1.value);
      console.log('max'+p1.max);

      if(music.currentTime==p1.max){
          nextsong();
      }
    },500);
}

p1.onchange=function(){
    // music.play();
    music.currentTime=p1.value;
}
