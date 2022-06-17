import * as userModel from "./models/userModel.js";

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form_message");

  messageElement.textContent = message;
  messageElement.classList.remove("form_message.success", "form_message-error");
  messageElement.classList.add(`form_message-${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form_input-error");
  inputElement.parentElement.querySelector(
    ".form_input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form_input-error");
  inputElement.parentElement.querySelector(
    ".form_input-error-message"
  ).textContent = "";
}

// CREATE ACCOUNT SUBMIT
document.querySelector("#createAccount").addEventListener("submit", (event) => {
  event.preventDefault();

  //Clear previous error messages
  clearInputError(document.querySelector("#signUserName"));
  clearInputError(document.querySelector("#signPassword"));
  clearInputError(document.querySelector("#signPasswordConfirm"));
  clearInputError(document.querySelector("#email"));

  // Load Users
  userModel.init();

  //Verify Data
  // if the username exceeds 20 characters
  if (document.querySelector("#signUserName").value.length > 20) {
    setInputError(
      document.querySelector("#signUserName"),
      "Username can't exceed 20 characters!"
    );
    return;
  }
  // if there's already a user with this name
  if (
    userModel.users.some(
      (user) =>
        user[document.querySelector("#signUserName").value] ===
        document.querySelector("#signUserName").value
    )
  ) {
    setInputError(
      document.querySelector("#signUserName"),
      "This Username already exists!"
    );
    return;
  }
  // if the passwords don't match
  if (
    document.querySelector("#signPassword").value !==
    document.querySelector("#signPasswordConfirm").value
  ) {
    setInputError(
      document.querySelector("#signPassword"),
      "Passwords don't match!"
    );
    setInputError(
      document.querySelector("#signPasswordConfirm"),
      "Passwords don't match!"
    );
    return;
  }

  // if the email isn't valid
  if (
    document.querySelector("#email").value.indexOf("@") == -1 ||
    document.querySelector("#email").value.indexOf(".") == -1
  ) {
    setInputError(document.querySelector("#email"), "Email is not valid!");
    return;
  }
  if (
    document.querySelector("#email").value.lastIndexOf(".") <
    document.querySelector("#email").value.indexOf("@")
  ) {
    setInputError(document.querySelector("#email"), "Email is not valid!");
    return;
  }

  // CREATE ACCOUNT
  const gender = document.querySelector("#genderSelect").value;
  const locality = document.querySelector("#selectLocality").value;

  //if the user hasn't chosen a gender
  if (gender === "Gender") {
    gender = "UNKNOWN";
  }

  //if the user hasn't chosen a locality
  if (locality === "Locality") {
    locality = "UNKNOWN";
  }

  userModel.addNewUser(
    document.querySelector("#signName").value,
    document.querySelector("#signUserName").value,
    document.querySelector("#dateBirth").value,
    gender,
    document.querySelector("#email").value,
    locality,
    document.querySelector("#signPassword").value
  );

  setFormMessage(
    document.querySelector("#createAccount"),
    "success",
    "Account Created Successfully!"
  );
});
