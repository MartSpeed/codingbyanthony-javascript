// store the count
let count = 0;
let countEl = document.getElementById('count-el');

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(`count has been clicked this many times ${count}`);
}

// 1. create a function, save(), which logs out the count when it called
function save() {
  console.log('save button clicked');
}
