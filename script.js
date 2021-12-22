console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Jashn-E-Bahaara - Jodhaa Akbar.mp3", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: "Kun Faya Kun", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "ae-dil-hai-mushkil-title-track-pritam", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: " agar-tum-saath-ho-tamasha", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: " Give Me Som Sunshine", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Behti Hawa Sa Tha Woh", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "aal-izz-well", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "O Saathi - Baaghi 2 2018", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Afreen Afreen - Rahat Fateh Ali Khan ", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg"},
    {songName: "Ajj Din Chadeya - Rahat Fateh Ali Khan ", filePath: "songs/10.mp3", coverPath: "covers/10.jpeg"},
    {songName: " Dekhte Dekhte", filePath: "songs/11.mp3", coverPath: "covers/11.jpeg "},
    {songName: "Jag Ghoomeya - Rahat Fateh Ali Khan ", filePath: "songs/12.mp3", coverPath: "covers/12.jpeg "},
    {songName: "Rustom 2016 - Tere Sang Yaara", filePath: "songs/13.mp3", coverPath: "covers/13.jpeg "},
    {songName: "BGMC 2018 - Dekhte Dekhte", filePath: "songs/14.mp3", coverPath: "covers/14.jpeg "},
   
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
