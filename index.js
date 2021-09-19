/*
function shortBreak() {
  let minute = 4;
  let sec = 60;
  setInterval(function () {
    document.getElementById("timer").innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      minute--;
      sec = 60;
      if (minute == 0) {
        minute = 5;
      }
    }
  }, 1000);
}
*/
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
