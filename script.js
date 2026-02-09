//////////////////////////////////////
// const
const startButton = document.querySelector(`#startButton`)
const resetButton = document.querySelector(`#resetButton`)
const time = document.querySelector(`#timer`)
const mainBoard = document.querySelector(`#mainBoard`)
const img = document.querySelectorAll(`.photo`)
// console.log(img.src)

// console.log(arraySrc)

////////////////////////////////////////
///// let

let timeLeft = 60
let imgMaths = [
  `img-html/hhh.png`,
  `img-html/aa.png`,
  `img-html/33.png`,
  `img-html/44.jpg`,
  `/img-html/55.png`,
  `/img-html/66.png`,
  `/img-html/77.png`,
  `/img-html/88.jpg`,
]

let random = imgMaths[Math.floor(Math.random() * imgMaths.length)]

img.forEach((singleImg) => {
  const creatImg1 = document.createElement("img")
  creatImg1.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
  creatImg1.classList.add("photo")
  singleImg.appendChild(creatImg1)
})

////////////////////////////////////
// function
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
  for (i = 0; i < imgMaths.length; i++) {
    const creatImg = document.createElement("img")
    creatImg.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
    creatImg.classList.add(`photo`)
    mainBoard.appendChild(creatImg)
  }
}
doubleImg()
