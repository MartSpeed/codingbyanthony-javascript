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
  forLoopEl.innerText += `for loop: ${todos[i]}!\n`;
}

// while loops
let whileLoopEl = document.getElementById('whileLoop-el');
let counterOne = 0;
while (counterOne < 10) {
  whileLoopEl.innerText += `while loop: ${counterOne},\n`;
  counterOne++;
}

// while loop in reverse
counterOne = 10;
while (counterOne > 0) {
  whileLoopEl.innerText += `'\nwhile loop: ${counterOne}!`;
  counterOne--;
}

// do while loop
let doLoopEl = document.getElementById('doLoop-el');
do {
  doLoopEl.innerText += `do while loop: ${counterOne}\n`;
  counterOne++;
} while (counterOne < 10);

// for each loop method
let forEachEl = document.getElementById('forEach-el');
todos.forEach(function (i) {
  forEachEl.innerText += `forEach method: ${i}\n`;
});

function logTodos(todo, i) {
  forEachEl.innerText += `calling log todo array list and index with for each loop: ${todo}, ${i}\n`;
}
todos.forEach(logTodos);
