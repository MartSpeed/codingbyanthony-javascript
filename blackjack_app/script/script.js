// js test line
let jsTestEl = (document.querySelector('#js-test-el').innerText =
  'javascript is running');

// variable selector
let firstCard = getRandomCard();
let secondCard = getRandomCard();
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
// card array
let cards = [firstCard, secondCard];

// blackjack functions and logic
function startGame() {
  renderGame();
}
function renderGame() {
  cardsEl.textContent = `Cards: `;
  sumEl.textContent = `Sum: ${sum}`;

  for (let i = 0; i < cards.length; ++i) {
    cardsEl.textContent += cards[i] + ' ';
  }

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

function getRandomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card === 1) {
    return 11;
  } else if (card > 10) {
    return 10;
  }
  return card;
}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
  cards.push(card);
  renderGame();
}
