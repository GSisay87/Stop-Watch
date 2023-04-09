const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const millisecondsDisplay = document.querySelector('.milliseconds');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let stopwatchIntervalId;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function updateDisplay() {
  millisecondsDisplay.textContent = padNumber(milliseconds % 1000, 3);
  secondsDisplay.textContent = padNumber(Math.floor(milliseconds / 1000) % 60, 2);
  minutesDisplay.textContent = padNumber(Math.floor(milliseconds / 1000 / 60), 2);
}

function padNumber(number, length) {
  return number.toString().padStart(length, '0');
}

function startStopwatch() {
  if (!stopwatchIntervalId) {
    stopwatchIntervalId = setInterval(function() {
      milliseconds += 10;
      updateDisplay();
    }, 10);
  }
}

function stopStopwatch() {
  if (stopwatchIntervalId) {
    clearInterval(stopwatchIntervalId);
    stopwatchIntervalId = null;
  }
}

function resetStopwatch() {
  stopStopwatch();
  milliseconds = 0;
  updateDisplay();
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
