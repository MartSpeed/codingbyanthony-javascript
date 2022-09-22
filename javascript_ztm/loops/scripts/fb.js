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
let bobbyEl = document.getElementById('bobby-el');
let sallyEl = document.getElementById('sally-el');
let errorEl = document.getElementById('error-el');

function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    bobbyEl.innerText = newsfeed[0].username + ' says: ' + newsfeed[0].timeline;
    sallyEl.innerText = newsfeed[1].username + ' says: ' + newsfeed[1].timeline;
  } else {
    errorEl.innerText = 'sorry, wrong username and password';
  }
}
signIn(userNamePrompt, passwordPrompt);
