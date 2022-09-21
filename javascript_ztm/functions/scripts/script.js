let greeting = document.getElementById('greeting-el');
let message = 'grand rising';
function sayHello() {
  greeting.innerText = message;
}
sayHello();

message = 'see you later';
let farewell = function () {
  document.getElementById('farewell-el').innerText = message;
};
farewell();
