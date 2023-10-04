
let score = 0;
let timer = 0;

const scoreDisplay = document.getElementById("scoreBoard"); 
const timeDisplay = document.getElementById("timeBoard"); 
scoreDisplay.textContent = `Score: ${score}`;
timeDisplay.textContent = `Time: ${timer} secs`;


startTimer = () => {
 clock = setInterval( () => {
        timer++;
        timeDisplay.textContent = `Time: ${timer} seconds`;
        updateScore();
    }, 1000)
}

startTimer();

updateScore = () => {
    score +=1000;
    scoreDisplay.textContent = `Score: ${score}`;
}

stopTimer = () => {
    clearInterval(clock);
}

