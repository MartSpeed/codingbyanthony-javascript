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
  clearInputField();
});

function renderLeads() {
  // lisItems inner HTML document injections
  let listItems = '';

  // forloop for the leads
  for (let i = 0; i < myLeads.length; ++i) {
    // standard UI values
    listItems += ` 
    <li> 
      listItems variable:\n 
        <a href="${myLeads[i]}" target="_blank">
          ${myLeads[i]}
        </a> 
    </li> `;
  }

  // standard UI output
  ulEl.innerHTML = ` standard UI output listItems variable: ${listItems} `;
  // TEST UI output
  testUlEl.innerHTML = ` test UI output listItems variable: ${listItems} `;
}

function clearInputField() {
  inputEl.value = '';
}

// METHODS

// TESTING
