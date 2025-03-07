const currentTime = document.querySelector(".para");
const buttonParent = document.querySelector(".btn-container");
// const startButton = document.querySelector("button[name='start']");
// const stopButton = document.querySelector("button[name='stop']");
// const resetButton = document.querySelector("button[name='reset']");

// Variables to store time
let msec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timerId = null;

// funciton to dipsly time in the browser

const displayTime = () => {
  currentTime.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10? `0${minutes}`: minutes}:${seconds < 10? `0${seconds}`: seconds}:${msec < 10? `0${msec}`: msec}`;
};


// function to handle start button click
// const handleStartClick = (event) => {
    
// };
/**
 * setInterval() is a JavaScript function that repeatedly executes a specified function at a fixed time interval (in milliseconds).
 * let intervalId = setInterval(callback, delay, arg1, arg2, ...);
 * callback: The function to be executed repeatedly.
 * delay: The time interval (in milliseconds) between executions.
 * arg1, arg2, ... (optional): Arguments to pass to the callback function.
 * Returns an intervalId which can be used to stop the interval.
 */


// function to handle stop button click
// const handleStopClick = (event) => {
    
// };// stopping the interval

// function to handle reset button click
// const handleResetClick = (event) => {
    
// };

const handleClick = (event) => {
    const name = event.target.getAttribute("name");
    if(name === "start"){
        if (timerId) {
            return;
        }// Prevent multiple intervals from being created
        timerId = setInterval(() => {
            msec++;
            if(msec === 100){
                msec = 0;
                seconds++;
            }
            if(seconds === 60){
                seconds = 0;
                minutes++;
            }
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
            displayTime();
        }, 10);
    }
    else if(name === "stop"){
        clearInterval(timerId);
        timerId = null;
    }
    else if(name === "reset"){
        clearInterval(timerId);
        timerId = null;
        msec = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        displayTime();
    }
}


// Adding event listeners to buttons
// startButton.addEventListener("click", handleStartClick);
// stopButton.addEventListener("click", handleStopClick)
// resetButton.addEventListener("click", handleResetClick);

buttonParent.addEventListener("click", handleClick);

displayTime(); // Display initial time