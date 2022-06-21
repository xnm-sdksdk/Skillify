import * as courseModel from "./models/courseModel.js";

// LOAD COURSES FROM LOCAL STORAGE
courseModel.init();

for (let course in courseModel.courses) {
  document.querySelector("#coursesSection").innerHTML += `
    <div class="card ">
        <div class="card-body">
        <h3 class="card-title text-light">${courseModel.courses[course].title}</h3>
        <p class="card-text text-light h5">
            ${courseModel.courses[course].description}
        </p>
        <button class="btn text-light btn-lg py-2 openCourseBtn" value="${courseModel.courses[course].title}">
            ${courseModel.courses[course].btnDescription}
        </button>
        </div>
    </div>
    `;
}

const btns = document.querySelectorAll(".openCourseBtn");

for (let btn of btns) {
  btn.addEventListener("click", function () {
    // Set Current Course
    courseModel.setSelectedCourse(this.value);

    // Open Current Course Page
    window.open("../html/coursepage.html", "_self");
  });
}
