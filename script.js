'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10


// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

//Adding in random number generator

let randomNum = Number(Math.trunc(Math.random() * 20 + 1))
let message = document.querySelector('.message')
const scoreDisplay = document.querySelector('.score')
let score = Number(scoreDisplay.textContent)
const showCorrectNum = document.querySelector('.number')
const highScoreDisplay = document.querySelector('.highscore')
let highScore = Number(highScoreDisplay.textContent)
let background = document.querySelector('body')

console.log(randomNum)


const btn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

btn.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        message.textContent = "Please enter a number to play!"
    } else if (guess === randomNum) {
        message.textContent = 'You won!'
        showCorrectNum.textContent = randomNum
        console.log('Message should change to "you won!"')
        background.style.backgroundColor = '#49be25'

        //add logic for highscore after win
        if (score > highScore) {
            highScore = score
            highScoreDisplay.textContent = highScore
        }
    } else if ((guess < 1) || (guess > 20)) {
        message.textContent = "Please enter a number between 1 and 20!"
    } else if (score > 1) {
        guess > randomNum ? message.textContent = "Too high!" : message.textContent = "Too low!"
        score--
        scoreDisplay.textContent = score
    } else {
        message.textContent = "You lost the game :(. Play again?"
        scoreDisplay.textContent = 0
        background.style.backgroundColor = '#8d1919'
    }
    // } else if (guess < randomNum) {
    //     message.textContent = "Too low!"
    //     score--
    //     scoreDisplay.textContent = score
    // }
})

againBtn.addEventListener('click', function () {
    randomNum = Number(Math.trunc(Math.random() * 20 + 1))
    console.log(randomNum)
    scoreDisplay.textContent = 20
    score = 20
    showCorrectNum.textContent = '?'
    document.querySelector('.guess').value = ''
    message.textContent = 'Start guessing...'
    background.style.backgroundColor = '#222'

})