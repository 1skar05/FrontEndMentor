let btnSubscribe = document.getElementById("subscribe");
let btnDismiss = document.getElementById("dismiss");
let modal = document.getElementById("modal");
let formWrapper = document.getElementById("form-wrapper");
let error = document.getElementById("error");

const emailRegex =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

btnSubscribe.addEventListener("click", function () {
  let emailInput = document.getElementById("email");
  let email = emailInput.value;
  if (email.match(emailRegex)) {
    modal.classList.add("modal-open");
    formWrapper.style.display = "none";
  } else {
    error.style.display = "unset";
    emailInput.focus();
  }
});

btnDismiss.addEventListener("click", function () {
  modal.classList.remove("modal-open");
  formWrapper.style.display = "unset";
});
