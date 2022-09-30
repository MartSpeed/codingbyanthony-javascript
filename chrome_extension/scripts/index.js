let testEl = document.querySelector('#jstest-el');
testEl.textContent = 'JS is running';
let logEl = document.querySelector('#log-el');

//log out "button clicked" when the user clicks the save input
function saveInput() {
  logEl.textContent += 'Button Clicked! ';
}
