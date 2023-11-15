const form = document.querySelector(".signup__main__form");
const inputs = document.querySelectorAll(".signup__main__input");

const inputValidation = (field) => {
  const isEmpty = field.value.trim().length === 0;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (isEmpty) {
    field.classList.add("signup__main__input--invalid");
    const errorLabel = field.nextElementSibling;
    errorLabel.innerHTML = field.name + " can not be empty";
    errorLabel.style.display = "block";
  } else if (field.type === "email" && !emailRegex.test(field.value)) {
    // return !isEmpty && emailRegex.test(field.value);
    field.classList.add("signup__main__input--invalid");
    const errorLabel = field.nextElementSibling;
    errorLabel.innerHTML = "Looks like this is not an email";
    errorLabel.style.display = "block";
  } else {
    // return !isEmpty;
    field.classList.remove("signup__main__input--invalid");
    const errorLabel = field.nextElementSibling;
    errorLabel.style.display = "none";
  }
};

const validateAllInputs = () => {
  inputs.forEach((input) => {
    inputValidation(input);
    input.addEventListener("input", () => {
      input.classList.remove("signup__main__input--invalid");
      const errorLabel = input.nextElementSibling;
      errorLabel.style.display = "none";
    });
  });
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateAllInputs()) {
    form.submit();
  }
});
