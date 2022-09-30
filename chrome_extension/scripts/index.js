let testEl = document.querySelector('#jstest-el');
testEl.textContent = 'JS is running';

let logEl = document.querySelector('#log-el');
let resultEl = document.querySelector('#result-el');
const inputEl = document.querySelector('#input-el');

let myLeads = [];

//log out "button clicked" when the user clicks the save input
const inputBtn = document.querySelector('#input-btn');
inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  logEl.textContent = myLeads;
  resultEl.textContent += inputEl.value;
});
