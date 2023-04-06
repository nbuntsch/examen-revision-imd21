var containerLabel = document.querySelector(".container-label");
var shrek = document.querySelector(".shrek");
var minus = document.querySelectorAll(".burger-menu-minus");
var plus = document.querySelectorAll(".burger-menu");

containerLabel.addEventListener("click", () => {
  shrek.classList.toggle("is-active");
  plus.classList.toggle("exchange");
  minus.classList.toggle("is-active");
});
