
const music = document.getElementById("music")

playMusic = () => {
    music.currentTime = 43;
    music.play();
}

stopMusic = () => {
    music.pause();
    music.currentTime = 43;
}

playMusic();