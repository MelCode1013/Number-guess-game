'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10


// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

//Adding in random number generator

const randomNum = Number(Math.trunc(Math.random() * 20 + 1))
const message = document.querySelector('.message')
const scoreDisplay = document.querySelector('.score')
let score = Number(scoreDisplay.textContent)
const showCorrectNum = document.querySelector('.number')
const highScoreDisplay = document.querySelector('.highscore')
let highScore = Number(highScoreDisplay.textContent)

console.log(randomNum)
console.log(score)


const btn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

btn.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        message.textContent = "Please enter a number to play!"
    } else if (guess === randomNum) {
        message.textContent = 'You won!'
        showCorrectNum.textContent = randomNum
        console.log('Message should change to "you won!"')
        //add logic for highscore after win
        if (score > highScore) {
            highScore = score
            highScoreDisplay.textContent = highScore
            console.log(highScore)
        }
    } else if (guess > randomNum) {
        if (score > 1) {
            message.textContent = "Too high!"
            score--
            scoreDisplay.textContent = score
        } else {
            message.textContent = "You lost the game :(. Play again?"
            scoreDisplay.textContent = 0
        }
    } else if (guess < randomNum) {
        message.textContent = "Too low!"
        score--
        scoreDisplay.textContent = score
    }
})

againBtn.addEventListener('click', function () {
    const refreshRandomNum = Number(Math.trunc(Math.random() * 20 + 1))
    console.log(refreshRandomNum)
})