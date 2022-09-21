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
function checkDriverAge2(age) {
  let message = function () {
    if (Number(age) < 18) {
      messageEl.innerText = 'you are not old enough';
      console.log(age, messageEl.innerText);
      return messageEl;
    } else if (Number(age) > 18) {
      messageEl.innerText = 'Power on and keep riding you badass';
      console.log(age, messageEl.innerText);
      return messageEl;
    } else if (Number(age) === 18) {
      messageEl.innerText = 'congrats on your years of riding';
      console.log(age, messageEl.innerText);
      return messageEl;
    }
  };

  if (Number(age) < 18) {
    driverAgeEl.innerText = age;
    console.log(age, driverAgeEl.innerText);
    return driverAgeEl + message();
  } else if (Number(age) > 18) {
    driverAgeEl.innerText = age;
    console.log(age, driverAgeEl.innerText);
    return driverAgeEl + message();
  } else if (Number(age) === 18) {
    driverAgeEl.innerText = age;
    console.log(age, driverAgeEl.innerText);
    return driverAgeEl + message();
  }
}

checkDriverAge2();
