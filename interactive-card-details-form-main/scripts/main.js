const thankYou = document.querySelector(".thank-you");
const cardDetails = document.querySelector(".form__card-details");
const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".input-group__input");

const cardName = document.getElementById("card-name");
const number = document.getElementById("card-number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

// Front
const frontName = document.querySelector(".card__front__cardholder");
const frontNumber = document.querySelector(".card__front__number");
const frontMonth = document.querySelector(
  ".card__front__exp .card__front__month"
);
const frontYear = document.querySelector(
  ".card__front__exp .card__front__year"
);

// Back
const backCvc = document.querySelector(".card__back__cvc");
// Warning
const nameWarning = document.getElementById("card-name-warning");
const numberWarning = document.getElementById("card-number-warning");
const dateWarning = document.getElementById("date-warning");
const cvcWarning = document.getElementById("cvc-warning");

const isEmpty = (input) => input.value.trim() === "";
const isNumber = (input) => /^\d+$/.test(input.value.trim());
const isCvc = (input) => /^\d{3,4}$/.test(input.value.trim());
const isName = (input) => /^[a-zA-Z\s]+$/.test(input.value.trim());

cardName.addEventListener("input", (e) => {
  frontName.textContent = e.target.value;
});

number.addEventListener("input", (e) => {
  let r = new RegExp(`[0-9]{1,${e.target.dataset.grouplength}}`, "g");
  e.target.value = e.target.value.match(r)
    ? e.target.value.match(r).join(" ")
    : "";
});

month.addEventListener("input", (e) => {
  if (e.target.value.length > 2) e.target.value = e.target.value.slice(0, 2);
  frontMonth.textContent = e.target.value;
});

year.addEventListener("input", (e) => {
  if (e.target.value.length > 2) e.target.value = e.target.value.slice(0, 2);
  frontYear.textContent = e.target.value;
});

cvc.addEventListener("input", (e) => {
  if (e.target.value.length > 3) e.target.value = e.target.value.slice(0, 3);
  backCvc.textContent = e.target.value;
});

btn.addEventListener("click", function (e) {
  e.preventDefault();

  checkValidity(cardName, nameWarning);
  checkValidity(number, numberWarning);
  checkValidity(month, dateWarning);
  checkValidity(year, dateWarning);
  checkValidity(cvc, cvcWarning);

  if (!isValid()) {
    thankYou.classList.add("hide");
    cardDetails.classList.remove("hide");
    btn.textContent = "Confirm";
  } else {
    cardDetails.classList.add("hide");
    thankYou.classList.remove("hide");
    btn.textContent = "Continue";
  }
});

const isValid = () => {
  if (
    checkValidity(cardName, nameWarning) &&
    checkValidity(number, numberWarning) &&
    checkValidity(month, dateWarning) &&
    checkValidity(year, dateWarning) &&
    checkValidity(cvc, cvcWarning)
  )
    return true;

  return false;
};

const checkValidity = (input, warning) => {
  let valid = true;
  if (isEmpty(input)) {
    warning.textContent = "Can't be blank";
    input.classList.add("input-group__input--error");

    valid = false;
  } else if (input.id === "card-name" && !isName(input)) {
    warning.textContent = "Wrong format, letters only";
    input.classList.add("input-group__input--error");

    valid = false;
  } else if (
    (input.id === "cvc" || input.id === "month" || input.id === "year") &&
    !isNumber(input)
  ) {
    warning.textContent = "Wrong format, numbers only";
    input.classList.add("input-group__input--error");
    valid = false;
  } else {
    warning.textContent = "";
    input.classList.remove("input-group__input--error");

    valid = true;
  }

  return valid;
};
