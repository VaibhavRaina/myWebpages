// let p1Display = document.querySelector(`#p1Display`);
// let p2Display = document.querySelector(`#p2Display`);
// let p1Button = document.querySelector(`#p1Button`);
// let p2Button = document.querySelector(`#p2Button`);
// let reset = document.querySelector(`#reset`);
// let matches = document.querySelector(`#matches`);
// let s1 = 0;
// let s2 = 0;
// winningScore = parseInt(matches.value);
// p1Button.addEventListener(`click`, function () {

//     p1Display.innerText = ++s1;
//     checkWinner();


// })
// p2Button.addEventListener(`click`, function () {

//     p2Display.innerText = ++s2;
//     checkWinner();
// })
// let resetButton = reset.addEventListener(`click`, function () {
//     winningScore = parseInt(matches.value);
//     s1 = 0;
//     s2 = 0;
//     p1Display.innerText = s1;
//     p2Display.innerText = s2;
//     p1Display.classList.remove(`winner`, `loser`);
//     p2Display.classList.remove(`winner`, `loser`);
//     p1Button.disabled = false;
//     p2Button.disabled = false;

// })

// function checkWinner() {
//     if (s1 >= winningScore) {
//         p1Display.classList.add(`winner`)
//         p2Display.classList.add(`loser`)
//         p1Button.disabled = true;
//         p2Button.disabled = true;
//     }
//     else if (s2 >= winningScore) {
//         p2Display.classList.add(`winner`)
//         p1Display.classList.add(`loser`)
//         p1Button.disabled = true;
//         p2Button.disabled = true;

//     }
// }
// matches.addEventListener('change', function () {
//     winningScore = parseInt(matches.value);
//     s1 = 0;
//     s2 = 0;
//     p1Display.innerText = s1;
//     p2Display.innerText = s2;
//     p1Button.disabled = false;
//     p2Button.disabled = false;
//     p1Display.classList.remove(`winner`, `loser`);
//     p2Display.classList.remove(`winner`, `loser`);
//     checkWinner();
// });

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const matches = document.querySelector('#matches');

let s1 = 0;
let s2 = 0;
let winningScore = parseInt(matches.value);

p1Button.addEventListener('click', () => {
    updateScore(p1Display, ++s1);
});

p2Button.addEventListener('click', () => {
    updateScore(p2Display, ++s2);
});

resetButton.addEventListener('click', resetGame);

matches.addEventListener('change', () => {
    resetGame();
});

function updateScore(display, score) {
    display.innerText = score;
    checkWinner();
}

function resetGame() {
    winningScore = parseInt(matches.value);
    s1 = 0;
    s2 = 0;
    updateScore(p1Display, s1);
    updateScore(p2Display, s2);
    resetDisplayClasses();
    enableButtons();
}

function checkWinner() {
    if (s1 >= winningScore) {
        declareWinner(p1Display, p2Display, p1Button, p2Button);
    } else if (s2 >= winningScore) {
        declareWinner(p2Display, p1Display, p2Button, p1Button);
    }
}

function declareWinner(winnerDisplay, loserDisplay, winnerButton, loserButton) {
    winnerDisplay.classList.add('winner');
    loserDisplay.classList.add('loser');
    winnerButton.disabled = true;
    loserButton.disabled = true;
}

function resetDisplayClasses() {
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}

function enableButtons() {
    p1Button.disabled = false;
    p2Button.disabled = false;
}

