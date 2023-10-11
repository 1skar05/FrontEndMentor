const ratingStarts = [
  ...document.getElementsByClassName("rating-state__rating-star"),
];

const ratingState = document.getElementsByClassName("rating-state")[0];
const thankyouState = document.getElementsByClassName("thankyou-state")[0];

const btnSubmit = document.getElementsByClassName("rating-state__button")[0];
btnSubmit.addEventListener("click", () => {
  const ratingResult = document.getElementsByClassName(
    "rating-state__rating-star active"
  )[0].textContent;
  ratingState.style.display = "none";
  thankyouState.style.display = "flex";
  thankyouState.querySelector("#rating").innerHTML = ratingResult;
});

const executeRating = (stars) => {
  const ratingActive = "rating-state__rating-star active";
  const ratingInActive = "rating-state__rating-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);
      if (star.className === ratingInActive) {
        for (i; i >= 0; --i) stars[i].className = ratingActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = ratingInActive;
      }
    };
  });
};
const changeActiveClass = (e) => {
  for (let i = 0; i < ratingStarts.length; i++) {
    const item = ratingStarts[i];
    item.classList.remove("active");
  }
  e.target.classList.add("active");
};
// executeRating(ratingStarts);
ratingStarts.map((star) => {
  star.addEventListener("click", changeActiveClass);
});
