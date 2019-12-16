const submit = document.querySelector(".form__button");
const form = document.querySelector("form");

form.style = "background-color: red;"

function validate(e) {
  e.preventDefault();
  console.log(e);

}

submit.addEventListener("click", validate);