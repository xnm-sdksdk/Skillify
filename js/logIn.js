import * as userModel from "./models/userModel.js";

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form_message");

  messageElement.textContent = message;
  messageElement.classList.remove("form_message.success", "form_message-error");
  messageElement.classList.add(`form_message-${type}`);
}

// LOG IN SUBMIT
document.querySelector("#login").addEventListener("submit", (event) => {
  event.preventDefault();

  // Load Users
  userModel.init();

  // Log In
  if (
    userModel.login(
      document.querySelector("#logInUsername").value,
      document.querySelector("#logInPassword").value
    )
  ) {
    setFormMessage(document.querySelector("#login"), "success", "Logging In");

    //wait 1second to load next page
    setTimeout(() => {
      location.href = "../html/userprofile.html";
    }, 1000);
    return;
  }

  // If user doesn't exist or password doesn't match
  setFormMessage(
    document.querySelector("#login"),
    "error",
    "Invalid username or password"
  );
});
