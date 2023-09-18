let btnSubscribe = document.getElementById("subscribe");
let btnDismiss = document.getElementById("dismiss");
let modal = document.getElementById("modal");
btnSubscribe.addEventListener("click", function () {
  modal.classList.add("modal-open");
});

btnDismiss.addEventListener("click", function () {
  modal.classList.remove("modal-open");
});
