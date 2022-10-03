const testEl = document.querySelector('#jstest-el');
testEl.textContent = 'JS is running';

// standard input
const resultEl = document.querySelector('#result-el');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');

// test scripts
const logEl = document.querySelector('#log-el');
const testUlEl = document.querySelector('#test-ul');

let myLeads = [];

//log out "button clicked" when the user clicks the save input
const inputBtn = document.querySelector('#input-btn');
inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  renderLeads();
});

function renderLeads() {
  // lisItems inner HTML document injections
  let listItems = '';

  // forloop for the leads
  for (let i = 0; i < myLeads.length; ++i) {
    // standard UI values
    listItems += ` <li> listItems variable:  ${myLeads[i]}</li> `;
  }

  // standard UI output
  ulEl.innerHTML = ` ulEl.innerHTML calling listItems variable ${listItems} `;
  // TEST UI output
  testUlEl.innerHTML = ` testUlEl.innerHTML listItems variable ${listItems} `;
}

// METHODS

// TESTING
