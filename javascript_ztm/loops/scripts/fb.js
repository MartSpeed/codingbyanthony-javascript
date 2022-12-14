let database = [
  {
    username: 'Anthony',
    password: 'supersecret',
  },
  {
    username: 'Flash',
    password: '1234',
  },
  {
    username: 'TheMainMan',
    password: 'boomstick',
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
  {
    username: 'mitch',
    timeline: 'javascript is pretty cool',
  },
];

const userNamePrompt = prompt('Whats your username');
const passwordPrompt = prompt('whats your password');
let bobbyEl = document.getElementById('bobby-el');
let sallyEl = document.getElementById('sally-el');
let mitchEl = document.getElementById('mitch-el');
let errorEl = document.getElementById('error-el');

// isUserValid
function isUserValid(username, password) {
  for (let i = 0; i < database.length; ++i) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    bobbyEl.innerText = newsfeed[0].username + ' says: ' + newsfeed[0].timeline;
    sallyEl.innerText = newsfeed[1].username + ' says: ' + newsfeed[1].timeline;
    mitchEl.innerText = newsfeed[2].username + ' says: ' + newsfeed[2].timeline;
  } else {
    errorEl.innerText = 'sorry, wrong username and password';
  }
}
signIn(userNamePrompt, passwordPrompt);
