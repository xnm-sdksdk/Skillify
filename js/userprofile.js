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

// SHOW COURSES
document.querySelector("#courseListBtn").addEventListener("click", () => {
  $("#courseListModal").modal({ show: true });

  if (currentUser.courses.length == 0) {
    document.querySelector("table").innerHTML = `
    <tr>
      <th></th>
      <th>You're not subscribed to any course.</th>
      <th></th>
    </tr>
    `;
    return;
  }

  document.querySelector("table").innerHTML = `
  <tr>
    <th>COURSE</th>
    <th>STATUS</th>
    <th>OPTIONS</th>
  </tr>
  `;

  for (let course in currentUser.courses) {
    document.querySelector("table").innerHTML += `
      <tr class="text-center">
        <td>
          ${currentUser.courses[course].title}
        </td>
        <td>
          ${currentUser.courses[course].status}
        </td>
        <td>
          <button type="btn" class="openCourseBtn">
            Open
          </button>
        </td>
      </tr>
    `;
  }

  const btns = document.querySelectorAll(".openCourseBtn");

  for (let btn of btns) {
    btn.addEventListener("click", function () {
      const courseTitle =
        this.parentNode.previousSibling.previousSibling.previousSibling
          .previousSibling.innerHTML;

      for (let course in coursesModel.courses) {
        if (coursesModel.courses[course] === courseTitle) {
          sessionStorage.selectedCourse = JSON.stringify(
            coursesModel.courses[course]
          );
          break;
        }
      }

      window.open("../html/coursepage.html", "_self");
    });
  }
});
