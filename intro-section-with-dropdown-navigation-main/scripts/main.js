const btnBurger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__outer");
const btnClose = document.querySelector(".nav__close");
const dropdownBtnGroup = document.querySelectorAll(".dropdown");
const dropdownContent = document.querySelectorAll(".nav__item__content");

btnBurger.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("active");
});
btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("active");
});

dropdownBtnGroup.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.nextElementSibling.classList.toggle("active");
    btn.classList.toggle("active");
  });
});
