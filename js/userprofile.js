import * as userModel from "./models/userModel.js";

if (!userModel.isLogged()) {
  window.open("../html/logIn.html", "_self");
}

// Get User Logged In (as an object)
const currentUser = userModel.getUserLogged();

// Update image
document.querySelector("#profile-pic").src = currentUser.avatar;
document.querySelector("#profile-pic").alt = "../imgs/main/user.png";

// Update name
document.querySelector("h3").innerText = currentUser.username;

// Update Description
document.querySelector("p").innerText = `
  ID: ${currentUser.id}
  NAME: ${currentUser.name}
  TYPE: ${currentUser.type}
  STATUS: ${currentUser.status}
`;

// SETTINGS (modal)
document.querySelector("#editProfileBtn").addEventListener("click", () => {
  window.open("../html/userSettings.html", "_self");
});
