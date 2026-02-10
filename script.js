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
let timer
let timeLeft = 60
let imgMaths = [
  `img-html/hhh.png`,
  `img-html/aa.png`,
  `/index.html/`,
  // `img-html/33.png`,
  // `img-html/44.jpg`,
  // `/img-html/55.png`,
  // `/img-html/66.png`,
  // `/img-html/77.png`,
  // `/img-html/88.jpg`,
]

img.forEach((divs) => {
  const front = document.createElement("img")
  front.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
  front.classList.add("front")

  const back = document.createElement("img")
  back.classList.add("back")

  divs.appendChild(back)
  divs.appendChild(front)

  divs.addEventListener("click", () => {
    divs.classList.toggle("flipped")
  })
})

let random = imgMaths[Math.floor(Math.random() * imgMaths.length)]

img.forEach((singleImg) => {
  const creatImg1 = document.createElement("img")
  creatImg1.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
  creatImg1.classList.add("photo")
  singleImg.appendChild(creatImg1)
})

////////////////////////////////////
// function

function doubleImg() {
  for (i = 0; i < imgMaths.length; i++) {
    const creatImg = document.createElement("img")
    creatImg.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
    creatImg.classList.add(`photo`)
    mainBoard.appendChild(creatImg)
  }
}
doubleImg()

function reset() {
  timeLeft = 60
}
resetButton.addEventListener(`click`, reset)
