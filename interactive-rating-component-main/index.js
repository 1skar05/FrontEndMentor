const ratingStarts = [
  ...document.getElementsByClassName("rating-state__rating-star"),
];

const ratingState = document.getElementsByClassName("rating-state")[0];
const thankyouState = document.getElementsByClassName("thankyou-state")[0];

const btnSubmit = document.getElementsByClassName("rating-state__button")[0];

const changeActiveClass = (e) => {
  for (let i = 0; i < ratingStarts.length; i++) {
    const item = ratingStarts[i];
    item.classList.remove("active");
  }
  e.target.classList.add("active");
};
ratingStarts.map((star) => {
  star.addEventListener("click", changeActiveClass);
});

btnSubmit.addEventListener("click", () => {
  const ratingResult = document.getElementsByClassName(
    "rating-state__rating-star active"
  )[0].textContent;
  ratingState.style.display = "none";
  thankyouState.style.display = "flex";
  thankyouState.querySelector("#rating").innerHTML = ratingResult;
});
