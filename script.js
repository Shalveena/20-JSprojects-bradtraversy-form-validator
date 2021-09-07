// Pull in all the DOM elements

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-two");

// FUNCTIONS ----------------------------------------------------------------

// Show error outline and error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.classList.add("error");
  small.textContent = message;
};

// Re-format the error message
const reFormatter = (title) => {
  const firstCharacter = title.id.trim().charAt(0).toUpperCase();
  const restOfWord = title.id.trim().slice(1);
  return firstCharacter + restOfWord;
};

// Show success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
};

// Check if all required fields are completed
const checkRequired = (...inputs) => {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${reFormatter(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// Check if email is valid
const checkEmail = (email) => {
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regEmail.test(email.value.trim().toLowerCase())) {
    showError(email, "Email is not valid");
    // } else {
    //   showSuccess(email);
  }
};

// Check input length
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${reFormatter(input)} must be more than ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${reFormatter(input)} must be less than ${max} characters`
    );
    // } else {
    //   showSuccess(input);
  }
};

// Check passwords match
const checkPasswordsMatch = (password1, password2) => {
  if (password1.value !== password2.value) {
    showError(password2, "Passwords don't match!");
  }
};
// EVENT LISTENERS -------------------------------------------------------------

// Add event listener on the form, listening for a submit event
form.addEventListener("submit", (e) => {
  e.preventDefault(); // preventing the default action of the submit event (which is to submit the form and reload the page)
  checkRequired(username, email, password, passwordConfirm);
  checkLength(username, 3, 15);
  checkLength(email, 7, 30);
  checkEmail(email);
  checkPasswordsMatch(password, passwordConfirm);
});
