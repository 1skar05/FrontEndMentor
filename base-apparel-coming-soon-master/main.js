const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementsByClassName("error")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailValidation();
});

const emailValidation = () => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === "") {
    error.classList.add("active");
    error.innerHTML = "This field cannot be empty";
    email.setAttribute("aria-invalid", "true");
  } else if (!emailRegex.test(email.value)) {
    error.classList.add("active");
    error.innerHTML = "Please provide a valid email";
    email.setAttribute("aria-invalid", "true");
  } else {
    error.innerHTML = "";
    email.setAttribute("aria-invalid", "false");
  }
};
