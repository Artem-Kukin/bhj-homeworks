let timer = document.getElementById("timer");

function timerStart() {
  timer.textContent--;

  if (timer.textContent <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerId);
  }
}
let timerId = setInterval(timerStart, 100);
