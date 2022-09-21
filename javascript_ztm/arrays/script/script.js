// list
let list = ['tiger', 'cat', 'bear', 'bird'];
//element
let anim1El = document.getElementById('animal1-el');
let anim2El = document.getElementById('animal2-el');
let anim3El = document.getElementById('animal3-el');
let anim4El = document.getElementById('animal4-el');
// dom input
anim1El.innerText = list.join(' ,');
anim2El.innerText = list.toString();
anim3El.innerText = list[2];
anim4El.innerText = list[3];

//arrays methods practice
const array = ['Banana', 'Apples', 'Oranges', 'Blueberries'];
// remove banana from the array using shift() method
array.shift();
// add Kiwi to the end of the array using push() method
array.push('Kiwi');
// remove apple from the array using the shift() method
array.splice(0, 1);
// reverse the array using the reverse() method
array.reverse();
console.log(array);

// access oranges in this array
const array2 = ['Banana', ['Apples', ['Oranges'], 'Blueberries']];
console.log(array2[0][0][1]);
