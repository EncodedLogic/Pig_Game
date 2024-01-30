'use strict';

const score1El = document.querySelector('#score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let playing, currentPlayer, currentScore, scores;

let init = function () {
    playing = true;
    currentPlayer = 0;
    currentScore = 0;
    scores = [0, 0];

    diceEl.classList.add('hidden');

    score1El.textContent = 0;
    score2El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    diceEl.classList.remove('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
init();


let switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentPlayer = (currentPlayer === 0) ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    console.log(`Player Switched, current player is ${currentPlayer + 1}`);
}

// let newGame = function () {
//     window.location.reload();
// }

// let gameOver = function () {
//     alert(`THE WINNER IS PLAYER ${currentPlayer + 1}`);
//     document.querySelector('.btn--roll').disabled = true;
//     document.querySelector('.btn--hold').disabled = true;
// }

btnRoll.addEventListener('click', function () {
    if (playing) {
        // generate a random number
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceEl.classList.remove('hidden');
        diceEl.src = `/dice_images/dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
        if (scores[currentPlayer] >= 10) {
            // gameOver();
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init); //<-- here the function call is passed as object bcoz it is 
//                                        the only line of code inside the event handler body


