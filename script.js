const startButton = document.querySelector(`#startButton`)
const resetButton = document.querySelector(`#resetButton`)
const time = document.querySelector(`#timer`)

let timeLeft = 60

function reset() {
  timeLeft = 60
}
resetButton.addEventListener(`click`, reset)

const timer = setInterval(() => {
  time.innerHTML = `<h3> time :${timeLeft}</h3>`
  timeLeft--

  if (timeLeft < 0) {
    clearInterval(timer)
    time.innerHTML = `<h3> Time's up! </h3> `
  }
}, 100)
