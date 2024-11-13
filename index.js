let startTime;
let updatedTime;
let difference;
let timerInterval;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTime, 1000 / 60); // Update every 60th of a second for smooth display
    }
}

function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    difference = 0;
    document.getElementById('time-display').innerText = "00:00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    const milliseconds = Math.floor((difference % 1000) / 10);

    document.getElementById('time-display').innerText =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}
