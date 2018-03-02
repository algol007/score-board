var start = document.querySelector(".start")
var pause = document.querySelector(".pause")
var stop = document.querySelector(".stop")
var preparation = document.querySelector(".preparation")

let second = 60;
let minute = 2;
let timerIsOn = 0;
let timer;

var audioStart = new Audio();
audioStart.src = "start_sumo.mp3";
var audioPreparation = new Audio();
audioPreparation.src = "preparation_sumo.mp3";

function timerOn() {
  preparation.disabled = true;

  second -= 1;
  document.querySelector(".timer").innerHTML = "0" + minute + ":" + second;
  timer = setTimeout(function() {
    timerOn();
    if (second < 10 && second >= 0) {
      second = "0" + second;
      document.querySelector(".timer").innerHTML = "0" + minute + ":" + second;
      if (minute >= 1 && second < 1 ) {
        minute -= 1;
        second = 60;
      }
      else if (minute <= 0 && second < 1) {
        minute = 0;
        second = 0;
        clearTimeout(timer);
      }
    }
  }, 1000);
}

function startTimer() {
  audioStart.play();
  if (!timerIsOn) {
    timerIsOn = 1;
    timerOn();
  }
}

function pauseTimer() {
  audioStart.pause();
  audioPreparation.pause();
  clearTimeout(timer);
  timerIsOn = 0;
}

function stopTimer() {
  audioStart.pause();
  audioStart.currentTime = 0;
  audioPreparation.pause();
  audioPreparation.currentTime = 0;
  document.querySelector(".timer").innerHTML = "00" + ":" + "00";
  second = 60;
  minute = 2;
  clearTimeout(timer);
  timerIsOn = 0;
  preparation.disabled = false;
  start.disabled = false;
  pause.disabled = false;
}

function preparationTimer() {
  start.disabled = true;
  pause.disabled = true;

  audioPreparation.play();

  second = 60;
  minute = 0;

  second -= 1;
  document.querySelector(".timer").innerHTML = "0" + minute + ":" + second;
  timer = setTimeout(function() {
    timerOn();
    if (second < 10 && second >= 0) {
      second = "0" + second;
      document.querySelector(".timer").innerHTML = "0" + minute + ":" + second;
      if (minute >= 1 && second < 1 ) {
        minute -= 1;
        second = 60;
      }
      else if (minute <= 0 && second < 1) {
        minute = 0;
        second = 0;
        clearTimeout(timer);
      }
    }
  }, 1000);
}

start.addEventListener("click", startTimer)
pause.addEventListener("click", pauseTimer)
stop.addEventListener("click", stopTimer)
preparation.addEventListener("click", preparationTimer)

// ================================================================================

var plusOrange = document.querySelector(".plus-orange")
var minusOrange = document.querySelector(".minus-orange")
var plusBlue = document.querySelector(".plus-blue")
var minusBlue = document.querySelector(".minus-blue")

let orange = 0;
let blue = 0;

function poinPlusOrange() {
  orange += 1;
  document.querySelector(".score-orange").innerHTML = orange;
}

function poinPlusBlue() {
  blue += 1;
  document.querySelector(".score-blue").innerHTML = blue;
}

function poinMinusOrange() {
  orange -= 1;
  document.querySelector(".score-orange").innerHTML = orange;
}

function poinMinusBlue() {
  blue -= 1;
  document.querySelector(".score-blue").innerHTML = blue;
}

plusOrange.addEventListener("click", poinPlusOrange)
plusBlue.addEventListener("click", poinPlusBlue)
minusOrange.addEventListener("click", poinMinusOrange)
minusBlue.addEventListener("click", poinMinusBlue)

// ================================================================================

var teamOrange = document.querySelector(".add-team-orange");
var teamBlue = document.querySelector(".add-team-blue");

function addTeamOrange() {
  document.querySelector(".team-orange").innerHTML = document.querySelector(".input-team-orange").value;
  document.querySelector(".school-orange").innerHTML = document.querySelector(".input-school-orange").value;
}

function addTeamBlue() {
  document.querySelector(".team-blue").innerHTML = document.querySelector(".input-team-blue").value;
  document.querySelector(".school-blue").innerHTML = document.querySelector(".input-school-blue").value;
}

teamOrange.addEventListener("click", addTeamOrange)
teamBlue.addEventListener("click", addTeamBlue)

// ================================================================================
