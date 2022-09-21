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