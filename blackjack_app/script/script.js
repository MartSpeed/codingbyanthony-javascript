// variable selector
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

// query selector
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');
let messageEl = document.querySelector('#message-el');
let playerEl = document.querySelector('#player-el');

// player object
let player = {
  name: 'Kevin',
  chips: 200,
};

playerEl.textContent = player.name + ': $' + player.chips;

// message array
const message = [
  'Do you want to draw a new card?',
  "You've got Blackjack!",
  "You've busted, would you like to play again?",
];

// card array
let cards = [];

// blackjack functions and logic
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardsEl.textContent = `Cards: `;
  sumEl.textContent = `Sum: ${sum}`;

  // NOTE: create a for loop with a conditional for the messages and cards display
  // NOTE: create a condition for losing money when ypu have lost
  // NOTE: create a condition for gaining money when you have won
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
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// NOTE: create a new function to reset the game after winning
// NOTE: create a win/lose condition using the isAlive boolean
