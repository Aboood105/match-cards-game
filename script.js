const startButton = document.querySelector(`#startButton`)
const resetButton = document.querySelector(`#resetButton`)
const time = document.querySelector(`#timer`)
const mainBoard = document.querySelector(`#mainBoard`)
const img = document.querySelectorAll(`.photo`)
// console.log(img.src)
let arraySrc = []
// console.log(arraySrc)
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
}, 1000)

function doubleImg() {
  for (i = 0; i < img.length; i++) {
    const src = img[i].src
    const creatImg = document.createElement("img")
    creatImg.src = src
    creatImg.className = "photo"
    mainBoard.appendChild(creatImg)
  }
}
// console.log(img[11].src)

doubleImg()
