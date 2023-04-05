const trigger = document.querySelector('.js-trigger');
const target = document.querySelector('.js-target');
const close = document.querySelector('.js-close');

trigger.addEventListener('click', () => {
  target.classList.toggle('is-active');
  trigger.classList.toggle('is-active');
});

close.addEventListener('click', () => {
  target.classList.toggle('is-active');
  trigger.classList.toggle('is-active');
});

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
