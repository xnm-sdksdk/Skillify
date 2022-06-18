import * as userModel from "./models/userModel.js";

if (!userModel.isLogged()) {
  window.open("../html/logIn.html", "_self");
}

// GET USER LOGGED IN (AS AN OBJECT)
const currentUser = userModel.getUserLogged();

// ADD ADMIN BUTTON
document.querySelector("#btnsSection").innerHTML +=
  currentUser.type === "admin"
    ? `
<button type="button" class="btn text-white" id="adminBtn">Admin Settings</button>
<button type="submit" class="btn text-white">Apply</button>
<button type="button" class="btn text-white" id="backBtn">Back</button>
`
    : `
<button type="button" class="btn text-white" id="adminBtn">Admin Settings</button>
<button type="submit" class="btn text-white">Apply</button>
`;

// INJECT USER DATA INTO HTML ELEMENTS
document.querySelector("#nameInput").value = currentUser.name;
document.querySelector("#emailInput").value = currentUser.email;
document.querySelector("#pwInput").value = currentUser.password;
document.querySelector("#dateInput").value = currentUser.dateOfBirth;
document.querySelector("#genderInput").value = currentUser.gender;
document.querySelector("#localityInput").value = currentUser.locality;
document.querySelector("#avatarInput").value =
  currentUser.avatar == "../../imgs/main/user.png" ? "" : currentUser.avatar;

// ADD EVENT TO BACK BUTTON
document.querySelector("#backBtn").addEventListener("click", () => {
  window.open("../html/userprofile.html", "_self");
});

// ADD EVENT TO ADMIN SETTINGS BUTTON
document.querySelector("#adminBtn")?.addEventListener("click", () => {
  window.open("../html/admin.html", "_self");
});

// SHOW PASSWORD BUTTON

// variable used to store information about the "Show Password" status (checked / unchecked)
let passwordStatus =
  document.querySelector("#pwInput").type == "password" ? "hidden" : "visible";

// by default (on load) the checkbox should be unchecked
document.querySelector("#showPwBtn").checked = false;

//add event on click
document.querySelector("#showPwBtn").addEventListener("click", () => {
  if (passwordStatus === "hidden") {
    document.querySelector("#pwInput").type = "text";
    passwordStatus = "visible";
  } else {
    document.querySelector("#pwInput").type = "password";
    passwordStatus = "hidden";
  }
});

// ADD EVENT TO APPLY BUTTON
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // clear success message
  document.querySelector("#successMsg").innerText = "";

  // Load Users
  userModel.init();

  for (let user in userModel.users) {
    if (userModel.users[user].username === currentUser.username) {
      // update data
      userModel.users[user].name = document.querySelector("#nameInput").value;

      userModel.users[user].email = document.querySelector("#emailInput").value;

      userModel.users[user].password = document.querySelector("#pwInput").value;

      userModel.users[user].dateOfBirth =
        document.querySelector("#dateInput").value;

      userModel.users[user].gender =
        document.querySelector("#genderInput").value;

      userModel.users[user].locality =
        document.querySelector("#localityInput").value;

      userModel.users[user].avatar =
        document.querySelector("#avatarInput").value == ""
          ? "../../imgs/main/user.png"
          : document.querySelector("#avatarInput").value;

      //update currentUser variable
      currentUser.name = document.querySelector("#nameInput").value;
      currentUser.email = document.querySelector("#emailInput").value;
      currentUser.password = document.querySelector("#pwInput").value;
      currentUser.dateOfBirth = document.querySelector("#dateInput").value;
      currentUser.gender = document.querySelector("#genderInput").value;
      currentUser.locality = document.querySelector("#localityInput").value;
      currentUser.avatar =
        document.querySelector("#avatarInput").value == ""
          ? "../../imgs/main/user.png"
          : document.querySelector("#avatarInput").value;

      //Update Local Storage and Session Storage
      localStorage.users = JSON.stringify(userModel.users);
      sessionStorage.loggedUser = JSON.stringify(currentUser);

      document.querySelector("#successMsg").innerText = "New Settings Applied";
      break;
    }
  }
});
