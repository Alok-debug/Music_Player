let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName: " Tum Hi Ho - Arijit Singh",          filePath: "1.mp3 ", coverPath:" "},
    {songName: " Ae Dil Hai Mushkil - Arijit Singh", filePath: "2.mp3 ", coverPath:" "},
    {songName: " Bas Ek Baar - Arijit Singh",        filePath: "3.mp3 ", coverPath:" "},
    {songName: " Muskurane - Arijit Singh",          filePath: "4.mp3 ", coverPath:" "},
    {songName: " Gerua - Arijit Singh",              filePath: "5.mp3 ", coverPath:" "},
    {songName: " Teri Mere Kahaani - Arijit Singh",  filePath: "6.mp3 ", coverPath:" "},
    {songName: " Hamari Adhuri Kahani -A Singh",     filePath: "7.mp3 ", coverPath:" "},
    {songName: " Aaj Dil Shayarana - Arijit Singh",  filePath: "8.mp3 ", coverPath:" "},
    {songName: " Aaj Phir - Arijit Singh",           filePath: "9.mp3 ", coverPath:" "},
    {songName: " Judaa - Arijit Singh",              filePath: "10.mp3 ", coverPath:" "}
]


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1
        }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0

    }    
})

audioElement.addEventListener('timeupdate',()=>{
    
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value *audioElement.duration)/100;
})

songItems.forEach((element,i ) => {
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
    
});


//audioElement.play();