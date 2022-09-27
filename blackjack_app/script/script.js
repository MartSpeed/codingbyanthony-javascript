// js test line
let jsTestEl = (document.querySelector('#js-test-el').innerText =
  'javascript is running');

// variable selector
let firstCard = 11;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
// query selector
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');
let messageEl = document.querySelector('#message-el');
// message array
const message = [
  'Do you want to draw a new card?',
  "You've got Blackjack!",
  "You've busted, would you like to play again?",
];

function startGame() {
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    return (messageEl.innerText = message[0]);
  } else if (sum === 21) {
    hasBlackJack = true;
    return (messageEl.innerText = message[1]);
  } else {
    isAlive = false;
    return (messageEl.innerText = message[2]);
  }
}

function newCard() {
  secondCard += 1;
  sum = firstCard + secondCard;
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
  startGame();
}
