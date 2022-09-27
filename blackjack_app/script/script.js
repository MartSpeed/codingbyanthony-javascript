// js test line
let jsTestEl = (document.getElementById('js-test-el').innerText =
  'javascript is running');

let firstCard = 11;
let secondCard = 7;
let firstCardEl = (document.getElementById(
  'firstCard-el'
).innerText = `first card: ${firstCard}`);
let secondCardEl = (document.getElementById(
  'secondCard-el'
).innerText = `second card: ${secondCard}`);

let sum = firstCard + secondCard + 3;
let sumEl = (document.getElementById('sum-el').innerText = `Sum: ${sum}`);
let hasBlackJack = false;
// create a variable called isAlive and assign it to true
// flip its value to false in the appropriate code block
let isAlive = true;

let resultEl = document.getElementById('result-el');
const message = [
  'Do you want to draw a new card?',
  "Woohoo!, You've got Blackjack!",
  "You've busted, would you like to play again?",
];

// create a startGame() function. move the conditional
// inside the body of the function
function startGame() {
  // logic for blackjack
  if (sum <= 20) {
    resultEl.innerText = message[0];
  } else if (sum === 21) {
    resultEl.innerText = message[1];
    hasBlackJack = true;
  } else {
    resultEl.innerText = message[2];
    isAlive = false;
  }
}
