let timerText = document.querySelector(".timer-clock");
let timerButton = document.querySelector(".timer-start");

// Different Timer times
let timerOptions = [
    {
        name: "focus",
        duration: 25
    },{
        name: "small_break",
        duration: 5
    },{
        name: "large_break",
        duration: 10
    }
]

// Pomodoro Cycle Programming
let cycle = [0, 1, 0, 1, 0, 1, 0, 1, 2];
let cycleStep = 0;

// Timer
function startTimer(option) {
    console.log("StartedTimer");

    // Timer Variables
    let min = timerOptions[option].duration;
    let sec = -1;
    // Timer operation
    let timer = setInterval( () => {
        sec--;
        //Time checking
        if (sec < 0) {
            if (min > 0) {
                //Reset seconds and reduce minutes
                sec = 59;
                min--;
            } else {
                //Timer ended
                cycleStep++;
                timerText.innerHTML("Timer done!");
                clearInterval(timer);
            }
        }

        //Formatting for single digit numbers
        let leadingZeroMinutes = "";
        let leadingZeroSeconds = "";
        if (min < 10) {
            leadingZeroMinutes = "0";
        }
        if (sec < 10) {
            leadingZeroSeconds = "0"
        }

        //Update text
        timerText.innerHTML = leadingZeroMinutes + min + ":" + leadingZeroSeconds + sec;

    }, 1000);
}

timerButton.onclick = () => {
    startTimer(cycle[cycleStep]);
};