const handleErrors = () => {};

const handleForm = (() => {
  const form = document.querySelector(".content__form");
  const error = document.querySelector(".content__form__error");
  const input = form.children[0].value;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
})();
