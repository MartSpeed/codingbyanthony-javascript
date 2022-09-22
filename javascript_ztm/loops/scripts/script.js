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
  forLoopEl.innerText += `${todos[i]}\n`;
  console.log(todos[i]);
}
