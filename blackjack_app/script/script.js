// js test line
let jsTestEl = (document.getElementById('js-test-el').innerText =
  'javascript is running');

// 1. create two variables, firstCard and secondCard
// set their values to a random number between 2-11
let firstCard = 11;
let secondCard = 7;
let firstCardEl = (document.getElementById(
  'firstCard-el'
).innerText = `first card: ${firstCard}`);
let secondCardEl = (document.getElementById(
  'secondCard-el'
).innerText = `second card: ${secondCard}`);

// 2. create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;
let sumEl = (document.getElementById('sum-el').innerText = `Sum: ${sum}`);
let hasBlackJack = false;

let resultEl = document.getElementById('result-el');
const results = [
  'Do you want to draw a new card?',
  "Woohoo!, You've got Blackjack!",
  "You've busted, would you like to play again?",
];
// logic for blackjack
if (sum <= 20) {
  resultEl.innerText = results[0];
} else if (sum === 21) {
  resultEl.innerText = results[1];
  hasBlackJack = true;
} else {
  resultEl.innerText = results[2];
}

// cash out!
