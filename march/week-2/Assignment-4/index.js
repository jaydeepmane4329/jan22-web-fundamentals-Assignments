let initial_time = 5;
let timer = initial_time * 60;

let handle_timer = function () {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  let counter = document.getElementById("counter");
  if (seconds < 10) {
    counter.innerText = `0${minutes} : 0${seconds}`;
  } else {
    counter.innerText = `0${minutes} : ${seconds}`;
  }
  timer--;

  if (minutes == 0 && seconds == 0) {
    clearInterval(interval);
  }
};

let interval = setInterval(handle_timer, 1000);
