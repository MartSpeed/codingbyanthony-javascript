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
