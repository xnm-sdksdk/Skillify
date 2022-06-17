import * as userModel from "./models/userModel.js";

//* Comment the next 3 lines to edit or preview this page!
if (!userModel.isLogged()) {
  window.open("../html/logIn.html", "_self");
}

// Get User Logged In (as an object)
const currentUser = userModel.getUserLogged();

// Update image
document.querySelector("#profile-pic").src = currentUser.avatar;

// Update name
document.querySelector("h3").innerText = currentUser.name;

// Update Description
document.querySelector("p").innerText = currentUser.type;
