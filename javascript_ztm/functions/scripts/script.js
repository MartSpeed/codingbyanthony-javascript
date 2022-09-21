let greetingEl = document.getElementById('greeting-el');
let message = 'grand rising';
function sayHello() {
  greetingEl.innerText = message;
}
sayHello();

message = 'see you later';
let farewell = function () {
  document.getElementById('farewell-el').innerText = message;
};
farewell();

// let age = prompt('what is your age?');
// function checkDriverAge() {
//   if (Number(age) < 18) {
//     alert('sorry youre not old enough to drive yet');
//   } else if (Number(age) > 18) {
//     alert('Powering on, enjoy the ride');
//   } else if (Number(age) === 18) {
//     alert('congratulation on your next year of driving');
//   }
// }
// checkDriverAge();

let age = prompt('what is your age');
let messageEl = document.getElementById('message-el');
let driverAgeEl = document.getElementById('driverAge-el');
function checkDriverAge2() {
  let message = function () {
    if (Number(age) < 18) {
      console.log(age);
      let res = (messageEl.innerText = 'you are not old enough');
      return res;
    } else if (Number(age) > 18) {
      console.log(age);
      let res = (messageEl.innerText = 'Power on and keep riding you badass');
      return res;
    } else if (Number(age) === 18) {
      console.log(age);
      let res = (messageEl.innerText = 'congrats on your years of riding');
      return res;
    }
  };

  if (Number(age) < 18) {
    driverAgeEl.innerText = age;
    return driverAgeEl + message();
  } else if (Number(age) > 18) {
    driverAgeEl.innerText = age;
    return driverAgeEl + message();
  } else if (Number(age) === 18) {
    driverAgeEl.innerText = age;
    return driverAgeEl + message();
  }
}

checkDriverAge2();
