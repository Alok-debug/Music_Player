let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs= [
    {songName: " Tum Hi Ho - Arijit Singh",          filePath: "1.mp3 ", coverPath:"cover.jpg "},
    {songName: " Ae Dil Hai Mushkil - Arijit Singh", filePath: "2.mp3 ", coverPath:" cover.jpg "},
    {songName: " Bas Ek Baar - Arijit Singh",        filePath: "3.mp3 ", coverPath:"cover.jpg  "},
    {songName: " Muskurane - Arijit Singh",          filePath: "4.mp3 ", coverPath:"cover.jpg  "},
    {songName: " Gerua - Arijit Singh",              filePath: "5.mp3 ", coverPath:" cover.jpg "},
    {songName: " Teri Mere Kahaani - Arijit Singh",  filePath: "6.mp3 ", coverPath:"cover.jpg  "},
    {songName: " Hamari Adhuri Kahani -A Singh",     filePath: "7.mp3 ", coverPath:" cover.jpg "},
    {songName: " Aaj Dil Shayarana - Arijit Singh",  filePath: "8.mp3 ", coverPath:" cover.jpg "},
    {songName: " Aaj Phir - Arijit Singh",           filePath: "9.mp3 ", coverPath:"cover.jpg  "},
    {songName: " Judaa - Arijit Singh",              filePath: "10.mp3 ", coverPath:"cover.jpg "}
]

songItems.forEach((element,i ) => {
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
    element.getElementsByClassName('coverImg')[0].src= songs[i].coverPath;
    
});


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
    Array.from(document.getElementsByClassName('timeStamp'))[songIndex].innerText= ((audioElement.duration-audioElement.currentTime)/60);
    console.log((audioElement.duration-audioElement.currentTime)/60);
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value *audioElement.duration)/100;
})



const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
       

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src =`${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})


//audioElement.play();