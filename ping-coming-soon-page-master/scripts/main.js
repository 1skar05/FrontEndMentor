const input = document.querySelector(".notify__input");
const error = document.querySelector(".notify__error");
const cta = document.querySelector(".notify__cta");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

cta.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    error.classList.add("notify__error--show");
    input.classList.add("error");

    error.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else if (!emailRegex.test(input.value)) {
    error.classList.add("notify__error--show");
    input.classList.add("error");
    error.innerHTML = "Please provide a valid email address";
  } else {
    error.classList.remove("notify__error--show");
    input.classList.remove("error");

    error.innerHTML = "";
  }
});
