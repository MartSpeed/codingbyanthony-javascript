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

/*
  1. create the variable listItems, to hold all the HTML for the list items
    and assign it to an empty string
  2. add the item to the listItems variable instead of the ulEl.innerHTML
  3. render the list items inside the ordered list user ulEl.innerHTML
*/

//log out "button clicked" when the user clicks the save input
const inputBtn = document.querySelector('#input-btn');
inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  renderLeads();
});

// renderLeads()
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

// TESTING

// METHODS
/*  
  you can use the below to retrieve the same result, practice this method
  so that you understand. these are calls may be better for CRUD calls
  instead of basic HTML insertion
*/
// create the element
// const liEl = document.createElement('li');
// set text content
// liEl.textContent = myLeads[i];
// append to the ul element
// testUlEl.append(liEl);
