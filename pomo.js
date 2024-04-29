let timerText = document.querySelector(".timer-clock");
let timerButton = document.querySelector(".timer-start");
let leadingZeroMinutes;
let leadingZeroSeconds;
let timerID;
let cycle = [0, 1, 0, 1, 0, 1, 0, 1, 2];
let cycleStep = 0;
let timerOptions = [
    {
        name: "focus",
        duration: 25
    },{
        name: "small_break",
        duration: 5
    },{
        name: "large_break",
        duration: 30
    }
]
let isStarted = false;
let isPaused = true;
let min = 25;
let sec = -1

function adjustTime() {
    sec--;
    if (sec < 0) {
        if (min > 0) {
            sec = 59;
            min--;
        } else {
            stopTimer();
        }
    }
    updateTimerText();
};

function updateTimerText() {
    console.log(min + ":" + sec);
    if (min < 10) { leadingZeroMinutes = "0"; } 
    else { leadingZeroMinutes = ""; }

    if (sec < 10) { leadingZeroSeconds = "0"}
    else { leadingZeroSeconds = ""; }

    timerText.innerHTML = leadingZeroMinutes + min + ":" + leadingZeroSeconds + sec;
};

function startTimer(){
    console.log("started");
    isStarted = true;
    isPaused = false;
    timerButton.innerHTML = "Pause";
    timerID = setInterval(adjustTime, 1000);
};

function pauseTimer(){
    console.log("paused");
    isPaused = true;
    timerButton.innerHTML = "Resume";
    clearInterval(timerID);
};

function stopTimer(){
    console.log("stopped");
    cycleStep++;
    timerText.innerHTML = "Timer done!";
    isPaused = true;
    timerButton.innerHTML = "Pause";
    clearInterval(timerID);
};

function resumeTimer(){
    console.log("resumed");
    isPaused = false;
    timerButton.innerHTML = "Pause";
    timerID = setInterval(adjustTime, 1000);
};

function timerManager(){
    if (!isStarted){
        startTimer();
    } else if (isPaused){
        resumeTimer()
    } else {
        pauseTimer()
    }
}

timerButton.onclick = () => {
    timerManager()
};