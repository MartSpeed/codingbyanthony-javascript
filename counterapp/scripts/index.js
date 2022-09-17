// document.getElementById('count-el').innerText = 5;

// store the count
let count = 0;
let countEl = document.getElementById('count-el');

// change the count-el in the HTML to reflect the new count

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(`count has been clicked this many times ${count}`);
}
