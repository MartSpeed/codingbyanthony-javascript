// js test line
let jsTestEl = (document.getElementById('js-test-el').innerText =
  'javascript is running');

let firstCard = 11;
let secondCard = 7;
let firstCardEl = (document.getElementById('firstCard-el').innerText =
  firstCard + ', ');

let secondCardEl = (document.getElementById('secondCard-el').innerText =
  secondCard);

let sum = firstCard + secondCard;
// let sumEl = (document.getElementById('sum-el').innerText = `Sum: ${sum}`);
let sumEl = (document.querySelector('#sum-el').innerText = `Sum: ${sum}`);
let hasBlackJack = false;
// create a variable called isAlive and assign it to true
// flip its value to false in the appropriate code block
let isAlive = true;

let messageEl = document.getElementById('message-el');
const message = [
  'Do you want to draw a new card?',
  "You've got Blackjack!",
  "You've busted, would you like to play again?",
];

// create a startGame() function. move the conditional
// inside the body of the function
function startGame() {
  // logic for blackjack
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
