let hasNoErrors = false;

const handleErrors = (input) => {
  const reg = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

  if (input.value.match(reg)) {
    hasNoErrors = true;
  } else {
    hasNoErrors = false;
  }
};

const handleForm = (() => {
  const form = document.querySelector(".content__form");
  const error = document.querySelector(".error");
  const input = form.children[0];

  form.addEventListener("submit", (e) => {
    handleErrors(input);

    if (hasNoErrors) {
      error.style.display = "none";
    } else {
      e.preventDefault();
      error.style.display = "block";
      form.style.border = "2px solid #F96464";
      error.textContent = "Please provide a valid email";
      input.classList.add("img-error");
    }
  });
})();
