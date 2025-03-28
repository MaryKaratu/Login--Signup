const form = document.querySelector("form");
const firstNameInput = document.getElementById("firstname-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeat-password");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  // e.preventDefault() prevent submit

  let errors = [];

  if (firstNameInput) {
    // if we have a firstname input we are on the signup page
    errors = getSignupFormErrors(
      firstNameInput.value,
      emailInput.value,
      passwordInput.value,
      repeatPasswordInput.value
    );
  } else {
    //if we dont have a firstname input then we are in the login page
    errors = getLoginFormErrors(emailInput.value, passwordInput.value);
  }

  if (errors.length > 0) {
    e.preventDefault();
    errorMessage.innerText = errors.join(". ");
  }
});

function getSignupFormErrors(firstname, email, password, repeatPassword) {
  let errors = [];

  if (firstname === "" || firstname === null) {
    errors.push("Firstname is required");
    firstNameInput.parentElement.classList.add("incorrect");
  }
  if (email === "" || email === null) {
    errors.push("Email is required");
    emailInput.parentElement.classList.add("incorrect");
  }
  if (password.length < 8) {
    errors.push("Password must have at least 8 characters");
    passwordInput.parentElement.classList.add("incorrect");
  }
  if (password === "" || password === null) {
    errors.push("Password is required");
    passwordInput.parentElement.classList.add("incorrect");
  }
  if (password !== repeatPassword) {
    errors.push("Password not match repeated password");
    passwordInput.parentElement.classList.add("incorrect");
    repeatPasswordInput.parentElement.classList.add("incorrect");
  }
  return errors;
}

const allInputs = [
  firstNameInput,
  emailInput,
  passwordInput,
  repeatPasswordInput,
].filter((input) => input != null);

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      errorMessage.innerText = "";
    }
  });
});

function getLoginFormErrors(email, password, repeatPassword) {
  let errors = [];
  if (email === "" || email === null) {
    errors.push("Email is required");
    emailInput.parentElement.classList.add("incorrect");
  }
  if (password === "" || password === null) {
    errors.push("Password is required");
    passwordInput.parentElement.classList.add("incorrect");
  }
  return errors;
}
