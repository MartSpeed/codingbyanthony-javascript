// 1. grab the save-el paragraph and store it in a variable called saveEl
let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  // 2. create a variable that contains both the count and the dash separator, i.e. "12 - "
  let _save = ' ' + count + ' -';
  // 3. render the variable in the saveEl using innerText
  saveEl.innerText += _save;
  // NB: make sure to not delete the existing content of the paragraph
  console.log(`this is the count: ${count}`);
}
