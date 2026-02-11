//////////////////////////////////////
// const
const startButton = document.querySelector(`#startButton`)
const resetButton = document.querySelector(`#resetButton`)
const time = document.querySelector(`#timer`)
const mainBoard = document.querySelector(`#mainBoard`)
const img = document.querySelectorAll(`.photo`)

////////////////////////////////////////
///// let
let flippedImg = []
let count = 0
let timer
let timeLeft = 60
let imgMaths = [
  `img-html/barcelona.png`,
  `/img-html/laptop.png`,
  `/img-html/Michael.png`,
  `/img-html/phone.png`,
  `/img-html/tida.png`,
  `/img-html/yusuf.png`,
  `/img-html/sea.png`,
  `/img-html/robot.png`,
  `/img-html/messi.png`,
]
let turnTheGame = false

////////////////////////////////////
// function

function startGame() {
  clearInterval(timer)
  mainBoard.innerHTML = ``
  flippedImg = []
  count = 0
  timeLeft = 60
  turnTheGame = true

  let allImg = [...imgMaths, ...imgMaths]

  for (let i = 0; i < allImg.length; i++) {
    const j = Math.floor(Math.random() * allImg.length)
    let temp = allImg[i]
    allImg[i] = allImg[j]
    allImg[j] = temp
  }

  allImg.forEach((imgSrc) => {
    const card = document.createElement("div")
    card.classList.add("photo")
    card.classList.add("flipped")

    const front = document.createElement("img")
    front.src = imgSrc
    front.classList.add("front")

    const back = document.createElement("div")
    back.classList.add("back")

    card.appendChild(back)
    card.appendChild(front)

    card.addEventListener("click", flipImg)
    mainBoard.appendChild(card)
  })

  time.innerHTML = `<h3>Memorize the cards!</h3>`
  setTimeout(() => {
    const allCards = document.querySelectorAll(".photo")

    allCards.forEach((card) => {
      card.classList.remove("flipped")
      card.addEventListener("click", flipImg)
    })
    startTimer()
  }, 3000)
}

function flipImg() {
  if (!turnTheGame) return
  if (flippedImg.length === 2 || this.classList.contains(`flipped`)) return
  this.classList.add(`flipped`)
  flippedImg.push(this)
  if (flippedImg.length === 2) {
    checkCard()
  }
}

function checkCard() {
  const [card1, card2] = flippedImg
  const isMatched =
    card1.querySelector(`.front`).src === card2.querySelector(`.front`).src

  if (isMatched) {
    count++
    flippedImg = []

    if (count === imgMaths.length) {
      clearInterval(timer)
      time.innerHTML = `<h3> you win </h3> `
      window.location.href = "/winner.html"
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped")
      card2.classList.remove("flipped")
      flippedImg = []
    }, 1000)
  }
}

function startTimer() {
  clearInterval(timer)
  timer = setInterval(() => {
    timeLeft--
    time.innerHTML = `<h3> time :${timeLeft}</h3>`

    if (timeLeft <= 0) {
      clearInterval(timer)
      time.innerHTML = `<h3> Time's up! </h3> `
      turnTheGame = false
      window.location.href = "/loser.html"
    }
  }, 1000)
}
///////////////////
// add event
resetButton.addEventListener(`click`, startGame)
startGame()
