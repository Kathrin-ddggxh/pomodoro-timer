/*

let timerEl = document.getElementById("timer");
let intervalID;
function countdown(min, sec) {
  let minutes = min;
  let seconds = sec;
  intervalID = setInterval(function () {
    timerEl.textContent = `${minutes} : ${seconds}`;
    seconds--;
    if (seconds < 10) {
      timerEl.textContent = `${minutes} : 0${seconds}`;
      if (seconds === 00) {
        minutes--;
        seconds = 59;
        if (minutes === 0) {
          minutes = min;
        }
      }
    }
  }, 1000);
}
function pauseTimer() {
  clearInterval(intervalID);
}

*/

let timerEl = document.getElementById("timer");
let intervalID;
function countdown(duration) {
  let seconds,
    minutes = 0;
  intervalID = setInterval(function () {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerEl.textContent = `${minutes} : ${seconds}`;
    if (--duration < 0) {
      clearInterval(intervalID);
    }
  }, 1000);
}
function pauseTimer() {
  clearInterval(intervalID);
}
