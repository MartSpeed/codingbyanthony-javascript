let greetingEl = document.getElementById('greeting-el');
greetingEl.innerHTML = 'Hello, this is about Javascript Objects';

let nameEl = document.getElementById('name-el');
let ageEl = document.getElementById('age-el');
let hobbyEl = document.getElementById('hobby-el');
let isMarriedEl = document.getElementById('isMarried-el');
let foodEl = document.getElementById('food-el');

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

user.favoriteFood = 'Cioppino';
foodEl.innerText = user.favoriteFood;

// facebook lite
let database = [
  {
    username: 'Anthony',
    password: 'supersecret',
  },
];

let newsfeed = [
  {
    username: 'bobby',
    timeline: 'so tired from all the learning',
  },
  {
    username: 'sally',
    timeline: 'javascript is so cool',
  },
];

let userNamePrompt = prompt('Whats your username');
let passwordPrompt = prompt('whats your password');

function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    console.log(newsfeed[0].username + ' says: ' + newsfeed[0].timeline);
    console.log(newsfeed[1].username + ' says: ' + newsfeed[1].timeline);
  } else {
    alert('sorry, wrong username and password');
  }
}
signIn(userNamePrompt, passwordPrompt);
