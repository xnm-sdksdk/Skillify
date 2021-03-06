import * as userModel from "./models/userModel.js";
import * as courseModel from "./models/courseModel.js";

// CHECK IF CURRENT USER IS AN ADMIN
if (!userModel.isLogged()) {
  window.open("../html/logIn.html", "_self");
}
if (userModel.getUserLogged().type != "admin") {
  window.open("../html/userprofile.html", "_self");
}

// ADD EVENT TO BACK BUTTON
document.querySelector("#backToSettingsBtn").addEventListener("click", () => {
  window.open("../html/userSettings.html", "_self");
});

/* MANAGE USERS */

// ADD NEW USER
document.querySelector("#addNewUserBtn").addEventListener("click", () => {
  $("#addUserModal").modal({ show: true });
});

// Create Account
document
  .querySelector("#addNewUserForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    if (document.querySelector("#changeUserStatusBtn").value == "Users:")
      return;

    //Clear warning message
    document.querySelector("#errorMsg").innerText = "";

    //Load Users
    userModel.init();

    //Verify Data
    // if the username exceeds 20 characters
    if (document.querySelector("#signUserName").value.length > 20) {
      alert("Username exceeds 20 characters!");
      document.querySelector("#errorMsg").innerText =
        "Username can't exceed 20 characters!";
      return;
    }
    // if there's already a user with this name
    for (let user in userModel.users) {
      if (
        userModel.users[user].username ===
        document.querySelector("#signUserName").value
      ) {
        document.querySelector("#errorMsg").innerText =
          "Username already exists!";
        return;
      }
    }

    // if the passwords don't match
    if (
      document.querySelector("#signPassword").value !==
      document.querySelector("#signPasswordConfirm").value
    ) {
      document.querySelector("#errorMsg").innerText = "Passwords don't match!";
      return;
    }

    // if the email isn't valid
    if (
      document.querySelector("#email").value.indexOf("@") == -1 ||
      document.querySelector("#email").value.indexOf(".") == -1
    ) {
      document.querySelector("#errorMsg").innerText = "Email is not valid";
      return;
    }
    if (
      document.querySelector("#email").value.lastIndexOf(".") <
      document.querySelector("#email").value.indexOf("@")
    ) {
      document.querySelector("#errorMsg").innerText = "Email is not valid";
      return;
    }

    // CREATE ACCOUNT
    let gender = document.querySelector("#genderSelect").value;
    let locality = document.querySelector("#selectLocality").value;

    //if the user hasn't chosen a gender
    if (gender === "Gender") {
      gender = "Other";
    }

    //if the user hasn't chosen a locality
    if (locality === "Locality") {
      locality = "Other";
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

    alert("User Created!");
  });

// CHANGE USER STATUS
document.querySelector("#changeUserStatusBtn").addEventListener("click", () => {
  $("#changeUserStatusModal").modal({ show: true });

  // Load Users
  userModel.init();

  //Reset select list
  document.querySelector(
    "#selectUser"
  ).innerHTML = `<option selected disabled>Users</option>`;

  // Add Users to Select List
  for (let user in userModel.users) {
    if (userModel.users[user].username === "admin") {
      continue;
    } else {
      document.querySelector("#selectUser").innerHTML += `
        <option class="changeStatusOption" value="${userModel.users[user].username}">${userModel.users[user].username}</option>
    `;
    }
  }

  // add event on click when choosing an option (show user status)
  const options = document.querySelectorAll(".changeStatusOption");
  for (let option of options) {
    option.addEventListener("click", function () {
      const optionUserName = this.value;

      let userSelectedStatus = "";

      for (let user in userModel.users) {
        if (userModel.users[user].username === optionUserName) {
          userSelectedStatus = userModel.users[user].status;
        }
      }

      //show user status
      document.querySelector(
        "#statusInfo"
      ).innerText = `Status: ${userSelectedStatus}`;
    });
  }
});
document.querySelector("#changeStatusBtn").addEventListener("click", () => {
  if (document.querySelector("#selectUser").value === "Users") return;

  // Load Users
  userModel.init();

  for (let user in userModel.users) {
    if (
      userModel.users[user].username ===
      document.querySelector("#selectUser").value
    ) {
      // if the user status is normal, change it to blocked; if it's blocked, change back to normal
      const result =
        userModel.users[user].status === "normal" ? "blocked" : "normal";
      userModel.users[user].status = result;

      // update LocalStorage
      localStorage.users = JSON.stringify(userModel.users);

      // update the info in the modal
      document.querySelector("#statusInfo").innerText = `Status: ${result}`;
      setTimeout(() => {
        location.href = "../html/admin.html";
      }, 200);
      return;
    }
  }
});

// MODIFY USER
document.querySelector("#modifyUserBtn").addEventListener("click", () => {
  $("#modifyUserModal").modal({ show: true });

  // Load Users
  userModel.init();

  //Reset select list
  document.querySelector(
    "#modifySelectUser"
  ).innerHTML = `<option selected disabled>Users</option>`;

  // Add Users to Select List
  for (let user in userModel.users) {
    if (userModel.users[user].username === "admin") {
      continue;
    } else {
      document.querySelector("#modifySelectUser").innerHTML += `
        <option class="modifyUserOption" value="${userModel.users[user].username}">${userModel.users[user].username}</option>
    `;
    }
  }

  // add event on click when choosing an option (show user info)
  const options = document.querySelectorAll(".modifyUserOption");
  for (let option of options) {
    // when the admin clicks on an user (of the list), it updates the info below (input boxes)
    option.addEventListener("click", function () {
      const optionUserName = this.value;

      for (let user in userModel.users) {
        if (userModel.users[user].username === optionUserName) {
          // Insert user info into the html elements
          // name
          document.querySelector("#modifyName").value =
            userModel.users[user].name;
          // date of birth
          document.querySelector("#modifyDateBirth").value =
            userModel.users[user].dateOfBirth;
          // gender
          document.querySelector("#modifyGenderSelect").value =
            userModel.users[user].gender === "UNKNOWN"
              ? "Other"
              : userModel.users[user].gender;
          // locality
          document.querySelector("#modifySelectLocality").value =
            userModel.users[user].locality === "UNKNOWN"
              ? "Other"
              : userModel.users[user].locality;
          // email
          document.querySelector("#modifyEmail").value =
            userModel.users[user].email;
          // password
          document.querySelector("#modifyPassword").value =
            userModel.users[user].password;

          document.querySelector("#modifySelectType").value =
            userModel.users[user].type;
          break;
        }
      }
    });

    // Add Event on click to Apply Button
    document.querySelector("#ApplyChangesBtn").addEventListener("click", () => {
      if (document.querySelector("#modifySelectUser").value === "Users") return;

      // get username being modified
      const userMod = document.querySelector("#modifySelectUser").value;

      // clear error/success messages
      document.querySelector("#modifyErrorMsg").innerText = "";
      document.querySelector("#modifySuccessMsg").innerText = "";

      // if the email isn't valid
      if (
        document.querySelector("#modifyEmail").value.indexOf("@") == -1 ||
        document.querySelector("#modifyEmail").value.indexOf(".") == -1
      ) {
        return (document.querySelector("#modifyErrorMsg").innerText =
          "Invalid Email");
      }
      if (
        document.querySelector("#modifyEmail").value.lastIndexOf(".") <
        document.querySelector("#modifyEmail").value.indexOf("@")
      ) {
        return (document.querySelector("#modifyErrorMsg").innerText =
          "Invalid Email");
      }

      // MODIFY USER DATA
      for (let user in userModel.users) {
        if (userModel.users[user].username === userMod) {
          //Update Data
          userModel.users[user].name =
            document.querySelector("#modifyName").value;
          userModel.users[user].email =
            document.querySelector("#modifyEmail").value;
          userModel.users[user].password =
            document.querySelector("#modifyPassword").value;
          userModel.users[user].dateOfBirth =
            document.querySelector("#modifyDateBirth").value;
          userModel.users[user].gender = document.querySelector(
            "#modifyGenderSelect"
          ).value;
          userModel.users[user].locality = document.querySelector(
            "#modifySelectLocality"
          ).value;
          userModel.users[user].type =
            document.querySelector("#modifySelectType").value;

          //Update LocalStorage

          localStorage.users = JSON.stringify(userModel.users);

          document.querySelector("#modifySuccessMsg").innerText =
            "New Data has been applied";

          setTimeout(() => {
            location.href = "../html/admin.html";
          }, 200);
          return;
        }
      }
    });
  }
});
