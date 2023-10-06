const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");

const errorDay = document.getElementById("error-day");
const errorMonth = document.getElementById("error-month");
const errorYear = document.getElementById("error-year");

const resultYears = document.getElementById("result-years");
const resultMonths = document.getElementById("result-months");
const resultDays = document.getElementById("result-days");

const invalidDay = "Must be a valid day";
const invalidMonth = "Must be a valid month";
const invalidYear = "Must be a valid year";
const invalidDate = "Must be a valid date";
const emptyField = "This field is required";
const nonNumeric = "Must be numeric";

const btnSubmit = document.getElementById("btn-submit");

const currentDate = new Date();
const currentDay = parseInt(String(currentDate.getDate()).padStart(2, "0"));
const currentMonth = parseInt(
  String(currentDate.getMonth() + 1).padStart(2, "0")
);
const currentYear = currentDate.getFullYear();

// numeric only
inputDay.addEventListener("input", function (event) {
  let inputText = event.target.value;
  let numericOnly = inputText.replace(/\D/g, "");
  event.target.value = numericOnly;
});

inputMonth.addEventListener("input", function (event) {
  let inputText = event.target.value;
  let numericOnly = inputText.replace(/\D/g, "");
  event.target.value = numericOnly;
});

inputYear.addEventListener("input", function (event) {
  let inputText = event.target.value;
  let numericOnly = inputText.replace(/\D/g, "");
  event.target.value = numericOnly;
});

const inputFocus = (itemToFocus) => {
  itemToFocus.classList.add("input-focus");
};

const resetState = (itemToReset, resetNode) => {
  itemToReset.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.classList.remove("input-focus");
    itemToReset.value = "";
    resetNode.textContent = "";
  });
};

function isEmpty(input) {
  return input.trim() === "";
}

function isValidDate(day, month, year) {
  day = parseInt(day, 10);
  month = parseInt(month, 10);
  year = parseInt(year, 10);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

const calculateAge = (
  day,
  month,
  year,
  currentDay,
  currentMonth,
  currentYear
) => {
  let years = currentYear - year;
  let months = currentMonth - month;
  let days = currentDay - day;

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += days < 0 ? 11 : 12;
  }

  if (days < 0) {
    let monthDays = new Date(currentYear, currentMonth, 0).getDate();
    days += monthDays;
    months--;
  }

  resultYears.textContent = years;
  resultMonths.textContent = months;
  resultDays.textContent = days;
};

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const dayValue = inputDay.value;
  const monthValue = inputMonth.value;
  const yearValue = inputYear.value;

  let passed = true;

  if (!isValidDate(dayValue, monthValue, yearValue)) {
    errorDay.textContent = invalidDate;
    errorMonth.textContent = invalidDate;
    errorYear.textContent = invalidDate;
    inputFocus(inputDay);
    inputFocus(inputMonth);
    inputFocus(inputYear);
    passed = false;
  }
  if (isEmpty(dayValue)) {
    errorDay.textContent = emptyField;
    inputFocus(inputDay);
    passed = false;
  } else if (dayValue < 1 || dayValue > 31) {
    errorDay.textContent = invalidDay;
    inputFocus(inputDay);
    passed = false;
  }
  if (isEmpty(monthValue)) {
    errorMonth.textContent = emptyField;
    inputFocus(inputMonth);
    passed = false;
  } else if (monthValue < 1 || monthValue > 12) {
    errorMonth.textContent = invalidMonth;
    inputFocus(inputMonth);
    passed = false;
  }
  if (isEmpty(yearValue)) {
    errorYear.textContent = emptyField;
    inputFocus(inputYear);
    passed = false;
  } else if (yearValue < 1000) {
    errorYear.textContent = invalidYear;
    inputFocus(inputYear);
    passed = false;
  }
  if (passed) {
    calculateAge(
      dayValue,
      monthValue,
      yearValue,
      currentDay,
      currentMonth,
      currentYear
    );
  }
});

resetState(inputDay, errorDay);
resetState(inputMonth, errorMonth);
resetState(inputYear, errorYear);

// TODO: add animation
