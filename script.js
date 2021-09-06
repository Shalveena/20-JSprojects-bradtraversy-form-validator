// Pull in all the DOM elements

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

// FUNCTIONS

// Show error outline and error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("error");
  small.textContent = message;
};

// Show success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
};

// Check if email is valid
const checkEmail = () => {
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regEmail.test(email.value.toLowerCase());
};

// EVENT LISTENERS

// Add event listener on the form, listening for a submit event
form.addEventListener("submit", (e) => {
  e.preventDefault(); // preventing the default action of the submit event (which is to submit the form and reload the page)

  // Validation of username

  if (username.value === "") {
    showError(username, "Please enter username");
  } else {
    showSuccess(username);
  }

  // Validation of email

  if (email.value === "") {
    showError(email, "Please enter your email");
  } else if (!checkEmail()) {
    showError(email, "Please enter valid email address");
  } else {
    showSuccess(email);
  }

  // Validation of password

  if (password.value === "") {
    showError(password, "Please enter password");
  } else {
    showSuccess(password);
  }

  // Validation of second input of password
  if (passwordConfirm.value === "") {
    showError(passwordConfirm, "Please enter password again");
  } else if (passwordConfirm.value != password.value) {
    showError(passwordConfirm, "Passwords don't match!");
  } else {
    showSuccess(passwordConfirm);
  }
});
