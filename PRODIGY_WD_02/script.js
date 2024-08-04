// script.js
let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime = 0;
let running = false;
let lapCounter = 1;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const display = document.getElementById('display');
const laps = document.getElementById('laps');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(updateTime, 1);
        running = true;
        startStopBtn.textContent = 'Pause';
    } else {
        clearInterval(tInterval);
        savedTime = new Date().getTime() - startTime;
        running = false;
        startStopBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(tInterval);
    savedTime = 0;
    running = false;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    laps.innerHTML = '';
    lapCounter = 1;
}

function updateTime() {
    updatedTime = new Date().getTime() - startTime;
    let hours = Math.floor(updatedTime / (1000 * 60 * 60));
    let minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((updatedTime % 1000) / 10);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function recordLap() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = `Lap ${lapCounter}: ${display.textContent}`;
        laps.appendChild(lapTime);
        lapCounter++;
    }
}
