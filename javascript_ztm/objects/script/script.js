let greetingEl = document.getElementById('greeting-el');
greetingEl.innerHTML = 'Hello, this is about Javascript Objects';

let nameEl = document.getElementById('name-el');
let ageEl = document.getElementById('age-el');
let hobbyEl = document.getElementById('hobby-el');
let isMarriedEl = document.getElementById('isMarried-el');

let user = {
  name: 'Anthony',
  age: 35,
  hobby: 'coding',
  isMarried: false,
};

nameEl.innerText = 'name: ' + user.name;
ageEl.innerText = 'age: ' + user.age;
hobbyEl.innerText = 'hobby: ' + user.hobby;
isMarriedEl.innerText = 'is married: ' + user.isMarried;
