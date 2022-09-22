let jsEl = document.getElementById('js-el');
function jsRunning() {
  jsEl.innerText = 'Javascript is running, and the function is invoked';
}
jsRunning();

// for loop
// adding an exclamation mark using loops
let forLoopEl = document.getElementById('forLoop-el');

let todos = [
  'clean room',
  'brush teeth',
  'exercise',
  'study javascript',
  'eat healthy',
];

for (let i = 0; i < todos.length; i++) {
  forLoopEl.innerText += `${todos[i]}!\n`;
}

// while loops
let whileLoopEl = document.getElementById('whileLoop-el');
let counterOne = 0;
while (counterOne < 10) {
  whileLoopEl.innerText += `[${counterOne}],`;
  counterOne++;
}

// while loop in reverse
counterOne = 10;
while (counterOne > 0) {
  whileLoopEl.innerText += '\n' + counterOne + '!';
  counterOne--;
}

// do while loop
let doLoopEl = document.getElementById('doLoop-el');
do {
  doLoopEl.innerText += `${counterOne}< `;
  counterOne++;
} while (counterOne < 10);

// for each loop method
let forEachEl = document.getElementById('forEach-el');
