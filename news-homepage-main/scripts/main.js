const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");
const navbar = document.querySelector(".header__nav");

openNav.addEventListener("click", (e) => {
  navbar.style.display = "block";
});

closeNav.addEventListener("click", () => {
  navbar.style.display = "none";
});
