// const trigger2 = document.querySelector('.js-trigger-2');
// const target2 = document.querySelector('.js-target-2');
// trigger2.addEventListener('click', () => {
//   target2.classList.toggle('is-active');
// });

// const trigger3 = document.querySelector('.js-trigger-3');
// const target3 = document.querySelector('.js-target-3');
// const target3c = document.querySelector('.js-target-3c');
// trigger3.addEventListener('click', () => {
//   target3.classList.toggle('is-active');
//   target3c.classList.toggle('is-active');
// });

var button = document.querySelector(".button");
var menu = document.querySelector(".menu");
var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);
