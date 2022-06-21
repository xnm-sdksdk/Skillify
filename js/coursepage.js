import * as courseModel from "./models/courseModel.js";
import * as userModel from "./models/userModel.js";

courseModel.init();
userModel.init();

const selectedCourse = courseModel.getSelectedCourse();

document.querySelector("title").innerText =
  selectedCourse.title + " - Skillify";

document.querySelector("h1").innerText = selectedCourse.title;

document.querySelector("h4").innerText = selectedCourse.description;

document.querySelector("#videoLocation").innerHTML = `
      <video controls>
          <source src="${selectedCourse.initialVideo}" type="video/mp4" />
      </video>
  `;

// COMMENTS SECTION

const renderComments = (n = selectedCourse.comments.length - 5) => {
  // clear comments
  document.querySelector("#commentSection").innerHTML = "";

  // ADD COMMENT BUTTON
  if (userModel.isLogged() && userModel.getUserLogged().status !== "blocked") {
    document.querySelector("#commentSection").innerHTML += `
    <form id="addCommentForm">
    <div class="d-flex flex-row add-comment-section mt-4 mb-4">
        <input
          type="text"
          class="form-control mr-3"
          id="newCommentText"
          placeholder="Add comment"
          required
        />
        <button 
          type="submit"
          class="btn btn-primary" 
        >Comment</button>
        </div>
        </form>
    `;
  }

  // In order to show the comments from newer to older (an ordinary for loop was used)
  for (let i = selectedCourse.comments.length - 1; i >= n; i--) {
    document.querySelector("#commentSection").innerHTML += `
              <div class="card p-3 mt-2">
                  <div
                      class="d-flex justify-content-between align-items-center"
                      >
                      <div class="user d-flex flex-row align-items-center">
                          <span
                          ><small class="font-weight-bold text-primary"
                              >${selectedCourse.comments[i].username}</small
                          >
                          <small class="font-weight-bold"
                              >${selectedCourse.comments[i].text}</small
                          ></span
                          >
                      </div>
                  </div>
              </div>
          `;
  }

  // LOAD/REDUCE COMMENTS BUTTON
  document.querySelector("#commentSection").innerHTML +=
    n == selectedCourse.comments.length - 5
      ? `
    <br>
    <button
        type="button"
        class="btn btn-primary py-2 p-5"
        id="loadAllCommentsBtn"
    >Expand</button>
  `
      : `
  <br>
  <button
      type="button"
      class="btn btn-primary py-2 p-5"
      id="ReduceAllCommentsBtn"
  >Collapse</button>
`;
  document
    .querySelector("#loadAllCommentsBtn")
    ?.addEventListener("click", () => {
      renderComments(0);
    });

  document
    .querySelector("#ReduceAllCommentsBtn")
    ?.addEventListener("click", () => {
      renderComments();
    });

  document
    .querySelector("#addCommentForm")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      // add comment to selected course
      selectedCourse.comments.push({
        username: userModel.getUserLogged().username,
        text: document.querySelector("#newCommentText").value,
      });

      // add comment to courses in LocalStorage
      for (let course in courseModel.courses) {
        if (courseModel.courses[course].title === selectedCourse.title) {
          courseModel.courses[course].comments.push({
            username: userModel.getUserLogged().username,
            text: document.querySelector("#newCommentText").value,
          });

          // save to LocalStorage
          localStorage.courses = JSON.stringify(courseModel.courses);
        }
      }

      if (document.querySelector("#loadAllCommentsBtn")) {
        renderComments();
      } else {
        renderComments(0);
      }
    });
};

// CALL FUNCTION TO RENDER COMMENTS SECTION (only 5comments)
renderComments();

// ADD EVENT TO START COURSE BUTTON
document.querySelector("#startCourseBtn").addEventListener("click", () => {
  window.open("../html/courseContent.html", "_self");
});
