const btnShare = document.getElementById("btn-share");
const tooltip = document.getElementById("tooltip");

btnShare.addEventListener("click", (e) => {
  btnShare.classList.toggle("active");
  tooltip.classList.toggle("active");
});
