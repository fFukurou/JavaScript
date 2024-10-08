'use strict';

// document.querySelector('.message').textContent = 'BRUUUUUUUH';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 'BRUUUUUUUH';

// document.querySelector('.guess').value = 30;


// const bruh = a => a * 2;

let secretNumber = Math.trunc(Math.random() * 15) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // When there's no input
    if (!guess) {
        displayMessage('🦧 No number!') ;

    // When player guesses correctly
    } else if (guess === secretNumber) {
        displayMessage('🎉👯‍♀️🤵🏻👯‍♀️ Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        // Changing color of the page when guess is correct
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }

    // When guess is wrong
       
    } else if (guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? '📈 Guess was too high. Just like you.' : '📉 Guess was too low. Lowballer')
            score--; 
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😎 You lost the game.');
            document.querySelector('.score').textContent = 0;
        }

    // When guess is lower than secret number
    }
});


/* Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
 */

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 15) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

});