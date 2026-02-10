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
  `img-html/hhh.png`,
  `img-html/aa.png`,
  `img-html/33.png`,
  `img-html/44.jpg`,
  `img-html/55.png`,
  `img-html/66.png`,
  `img-html/77.png`,
  `img-html/88.jpg`,
] //more img

// function startGame() {
//   mainBoard.innerHTML = ``
//   flippedImg = []
//   count = 0
//   timeLeft = 60

//   let allImg = [...imgMaths, ...imgMaths]

//   allImg.random
//   allImg.sort(() => Math.random() - 0.5)

//   allImg.forEach((divs) => {
//     const card = document.createElement("div")
//     card.classList.add("photo")
//     card.classList.add("flipped")

//     const front = document.createElement("img")
//     // front.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
//     front.src = divs
//     front.classList.add("front")

//     const back = document.createElement("div")
//     back.classList.add("back")

//     card.appendChild(back)
//     card.appendChild(front)

//     card.addEventListener("click", flipImg)
//     mainBoard.appendChild(card)
//   })
//   // 2. WAIT 5 SECONDS: Then flip them back and enable clicking
//   time.innerHTML = `<h3>Memorize the cards!</h3>`

//   setTimeout(() => {
//     const allCards = document.querySelectorAll(".photo")
//     allCards.forEach((card) => {
//       card.classList.remove("flipped") // Flip them back to hide the image
//       card.addEventListener("click", flipImg) // ONLY enable clicking after the peek
//     })
//     // 3. START GAME: Start the countdown timer only after the peek is over
//     startTimer()
//   }, 3000)
// }
// img.forEach((divs) => {
//   const front = document.createElement("img")
//   front.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
//   front.classList.add("front")

//   const back = document.createElement("img")
//   back.classList.add("back")

//   divs.appendChild(back)
//   divs.appendChild(front)

//   divs.addEventListener("click", () => {
//     divs.classList.toggle("flipped")
//   })
// })

// let random = imgMaths[Math.floor(Math.random() * imgMaths.length)]

// img.forEach((singleImg) => {
//   const creatImg1 = document.createElement("img")
//   creatImg1.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
//   creatImg1.classList.add("photo")
//   singleImg.appendChild(creatImg1)
// })

////////////////////////////////////
// function

function startGame() {
  mainBoard.innerHTML = ``
  flippedImg = []
  count = 0
  timeLeft = 60

  let allImg = [...imgMaths, ...imgMaths]
  allImg.random
  // maybe this
  // allImg.sort(() => Math.random() - 0.5)
  // or this
  // for (let i = allImg.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1))
  //   let temp = allImg[i]
  //   allImg[i] = allImg[j]
  //   allImg[j] = temp
  // }
  // or this
  for (let i = 0; i < allImg.length; i++) {
    const j = Math.floor(Math.random() * allImg.length)
    let temp = allImg[i]
    allImg[i] = allImg[j]
    allImg[j] = temp
  }

  allImg.forEach((divs) => {
    const card = document.createElement("div")
    card.classList.add("photo")
    card.classList.add("flipped")

    const front = document.createElement("img")
    // front.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
    front.src = divs
    front.classList.add("front")

    const back = document.createElement("div")
    back.classList.add("back")

    card.appendChild(back)
    card.appendChild(front)

    // card.addEventListener("click", flipImg)
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
// let flippedImg = []
function flipImg() {
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
    }
  }, 1000)
}
// startTimer()
// no need for it ^^^^^
// function doubleImg() {
//   for (i = 0; i < imgMaths.length; i++) {
//     const creatImg = document.createElement("img")
//     creatImg.src = imgMaths[Math.floor(Math.random() * imgMaths.length)]
//     creatImg.classList.add(`photo`)
//     mainBoard.appendChild(creatImg)
//   }
// }
// doubleImg()

// function reset() {
//   timeLeft = 60
// }
resetButton.addEventListener(`click`, startGame)
startGame()
