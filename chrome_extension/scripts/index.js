const testEl = document.querySelector('#jstest-el');
testEl.textContent = 'JS is running';

const logEl = document.querySelector('#log-el');
const resultEl = document.querySelector('#result-el');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');

let myLeads = [];

//log out "button clicked" when the user clicks the save input
const inputBtn = document.querySelector('#input-btn');
inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  ulEl.textContent += `${inputEl.value} `;

  // forloop for the leads
  for (let i = 0; i < myLeads.length; ++i) {
    ulEl.textContent += myLeads[i];
  }
});
