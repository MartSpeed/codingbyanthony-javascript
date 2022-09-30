const testEl = document.querySelector('#jstest-el');
testEl.textContent = 'JS is running';

const logEl = document.querySelector('#log-el');
const resultEl = document.querySelector('#result-el');
const inputEl = document.querySelector('#input-el');

let myLeads = [];

//log out "button clicked" when the user clicks the save input
const inputBtn = document.querySelector('#input-btn');
inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  resultEl.textContent += inputEl.value;
  // forloop for the leads
  for (let i = 0; i < myLeads.length; ++i) {
    logEl.textContent += 'this is the for loop: ' + inputEl.value;
    logEl.textContent += myLeads[i];
  }
});
