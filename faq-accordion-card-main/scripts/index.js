const accordArr = [...document.querySelectorAll(".card__accordion")];
console.log(accordArr);

accordArr.forEach((accord) => {
  accord.addEventListener(
    "click",
    (e) => {
      const target = e.target;
      const question = target.closest(".card__question");
      const answer = question.nextElementSibling;

      // Hide all answers
      accordArr.forEach((accord) => {
        const question = accord.querySelector(".card__question");
        const answer = question.nextElementSibling;
        question.classList.remove("card__question--active");
      });

      if (answer.style.display === "block") {
        question.classList.remove("card__question--active");
      } else {
        question.classList.add("card__question--active");
      }
    },
    false
  );
});
