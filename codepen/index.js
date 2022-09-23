// js test
let testEl = (document.getElementById('test-el').innerText = 'js is working');
// greeting
let greetingEl = document.getElementById('greeting-el');
let messageEl = document.getElementById('message-el');
// user login prompt
let userPrompt = '';
let passPrompt = '';

// database info
let database = [
  {
    username: 'customer1',
    password: '12345',
  },
  {
    username: 'customer2',
    password: '54321',
  },
  {
    username: 'customer3',
    password: '67890',
  },
];

let newsfeed = [
  {
    username: database[0].username,
    timeline: 'dinner is served!!',
  },
  {
    username: database[1].username,
    timeline: 'I CANT SWIM!!',
  },
  {
    username: database[2].username,
    timeline: 'I sell propane and propane accessories... hmmMmm',
  },
];

// user valid
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

// button click
function signIn() {
  // user prompt
  userPrompt = prompt('What is your username?');
  passPrompt = prompt('what is your password?');
  // username verification
  if (isUserValid(username, password)) {
    greetingEl.innerText += newsfeed[0].username;
    messageEl.innerText += newsfeed[0].timeline;
  } else {
    // console.log(greetingEl.innerText += newsfeed[0].username);
    // console.log(messageEl.innerText += newsfeed[0].timeline);
    // greetingEl.innerText += newsfeed[0].username;
    // messageEl.innerText = newsfeed[0].timeline;
    console.log('this is not an error');
  }
}
