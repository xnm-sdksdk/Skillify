import * as userModel from "./models/userModel.js";
import * as courseModel from "./models/courseModel.js";

userModel.init();
courseModel.init();

//TODO un-comment after finishing
/* if (!userModel.isLogged()) {
  window.open("../html/logIn.html", "_self");
} */

/* const currentUser = userModel.getUserLogged(); */

//! HARD CODED COURSE FOR TESTS
const currentUser = {
  id: 1,
  name: "Tiago",
  username: "TiagoRibeiro.25",
  type: "admin",
  status: "normal",
  courses: [],
};

//! HARD CODED COURSE FOR TESTS
const selectedCourse = {
  title: "Nome do curso",
  chapters: [
    {
      title: "Chapter I",
      video: "../videos/SkillifyPromoFinal.mp4",
      exercises: [
        {
          number: 1,
          question: "Click in the option PORTUGAL",
          options: ["ESPANHA", "PORTUGAL", "FRANÇA", "ALEMANHA"],
          correct: "PORTUGAL",
        },
        {
          number: 2,
          question: "Click in the option Tiago",
          options: ["Tiago", "Daniel", "Santos", "Ribeiro"],
          correct: "Tiago",
        },
        {
          number: 3,
          question: "How much is 1+1?",
          options: ["1", "3", "2", "4"],
          correct: "2",
        },
      ],
    },
    {
      title: "Chapter II",
      video: "../videos/SkillifyPromoFinal.mp4",
      exercises: [],
    },
    {
      title: "Chapter III",
      video: "../videos/SkillifyPromoFinal.mp4",
      exercises: [],
    },
    {
      title: "Chapter IV",
      video: "../videos/SkillifyPromoFinal.mp4",
      exercises: [],
    },
  ],
};

// CHECK IF ITS THE FIRST TIME THE USER IS OPENING THIS COURSE
for (let user in userModel.users) {
  if (userModel.users[user].username === currentUser.username) {
    let result = false;

    for (let course in currentUser.courses) {
      if (currentUser.courses[course].title === selectedCourse.title) {
        result = true;
        break;
      }
    }

    // ADD COURSE TO THE USER SUBSCRIBED COURSES
    if (!result) {
      const newCourse = {
        title: selectedCourse.title,
        chapters: [],
        status: "uncompleted",
      };

      for (let chapter in selectedCourse.chapters) {
        newCourse.chapters.push({
          number: selectedCourse.chapters[chapter].title,
          status: "uncompleted",
        });
      }

      currentUser.courses.push(newCourse);

      // SAVE CHANGES TO SESSION STORAGE
      sessionStorage.loggedUser = JSON.stringify(currentUser);
      // SAVE CHANGES TO LOCAL STORAGE
      for (let user in userModel.users) {
        if (userModel.users[user].username == currentUser.username) {
          userModel.users[user] = currentUser;
          localStorage.users = JSON.stringify(userModel.users);

          break;
        }
      }
    }
  }
}

// ADD COURSE TITLE TO HTML ELEMENT
document.querySelector("h1").innerText = selectedCourse.title;

// ADD CHAPTERS TO CHAPTER LIST
for (let chapter in selectedCourse.chapters) {
  document.querySelector("#chaptersList").innerHTML += `
  <div class="card text-light">
    <div class="card-body">
      <h5 class="card-title h3">${selectedCourse.chapters[chapter].title}</h5>
      <div class="d-grid gap-2">
        <button type="button" class="btn text-light openChapterBtn" value="${selectedCourse.chapters[chapter].title}">OPEN</button>
      </div>
    </div>
  </div>
  `;
}

// ADD EVENT TO OPEN CHAPTER BUTTON
const btns = document.querySelectorAll(".openChapterBtn");

for (let btn of btns) {
  btn.addEventListener("click", function () {
    selectChapter(this.value);
  });
}

/* SET A CHAPTER */
function selectChapter(chapterSelected) {
  for (let chapter in selectedCourse.chapters) {
    if (selectedCourse.chapters[chapter].title === chapterSelected) {
      chapterSelected = selectedCourse.chapters[chapter];
      break;
    }
  }

  /* ADD CHAPTER INFORMATION TO HTML ELEMENTS */
  document.querySelector("#courseContent").innerHTML = `
      <h2 class="p-2">${chapterSelected.title}</h2>

      <video controls>
        <source src="${chapterSelected.video}" type="video/mp4" />
      </video>

      <button type="button" class="btn text-light" id="showExercisesBtn">
        Show Exercises
      </button>

      <section id="exercisesSection"></section>
    `;

  /* LOAD EXERCISES */
  document
    .querySelector("#showExercisesBtn")
    .addEventListener("click", function () {
      // if the user has "status: blocked", this button won't work
      if (currentUser.status === "blocked") {
        alert(
          "Your account is blocked! You are not allowed to solve exercises. Contact an admin for more information."
        );
        return;
      }

      // delete "show exercises" button
      document.querySelector("#showExercisesBtn").remove();

      for (let i = 0; i < chapterSelected.exercises.length; i++) {
        document.querySelector("#exercisesSection").innerHTML += `
      <div class="container exercise">
      <div class="row">
        <div class="col-12">
          <p class="fw-bold h5 text-light" id="question">${i + 1}. ${
          chapterSelected.exercises[i].question
        }</p>
          <div class="py-2">
            <input
              type="radio"
              name="ex${i + 1}"
              id="oneEX${i + 1}"
              class="one"
              value="${chapterSelected.exercises[i].options[0]}"
            />
            <input
              type="radio"
              name="ex${i + 1}"
              id="twoEX${i + 1}"
              class="two"
              value="${chapterSelected.exercises[i].options[1]}"
            />
            <input
              type="radio"
              name="ex${i + 1}"
              id="threeEX${i + 1}"
              class="three"
              value="${chapterSelected.exercises[i].options[2]}"
            />
            <input
              type="radio"
              name="ex${i + 1}"
              id="fourEX${i + 1}"
              class="four"
              value="${chapterSelected.exercises[i].options[3]}"
            />
            <label for="oneEX${i + 1}" class="box first">
              <div class="course">
                <span class="circle"></span>
                <span class="subject text-light h5">${
                  chapterSelected.exercises[i].options[0]
                }</span>
              </div>
            </label>
            <label for="twoEX${i + 1}" class="box second">
              <div class="course">
                <span class="circle"></span>
                <span class="subject text-light h5">${
                  chapterSelected.exercises[i].options[1]
                }</span>
              </div>
            </label>
            <label for="threeEX${i + 1}" class="box third">
              <div class="course">
                <span class="circle"></span>
                <span class="subject text-light h5">${
                  chapterSelected.exercises[i].options[2]
                }</span>
              </div>
            </label>
            <label for="fourEX${i + 1}" class="box forth">
              <div class="course">
                <span class="circle"></span>
                <span class="subject text-light h5">${
                  chapterSelected.exercises[i].options[3]
                }</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
      `;
      }

      // BUTTON TO SUBMIT ANSWERS
      document.querySelector("#exercisesSection").innerHTML += `
      <button
        type="button"
        class="btn text-light btn-lg"
        id="submitAnswers"
      >SUBMIT</button>
    `;

      // ADD EVENT TO SUBMIT BUTTON
      document.querySelector("#submitAnswers").addEventListener("click", () => {
        const correctAnswers = [];
        const userAnswers = [];
        let totalCorrect = 0;
        let totalWrong = 0;

        // GET CORRECT ANSWERS
        for (let exercise in chapterSelected.exercises) {
          correctAnswers.push(chapterSelected.exercises[exercise].correct);
        }

        // GET USER ANSWERS
        for (let i = 0; i < chapterSelected.exercises.length; i++) {
          userAnswers.push(
            document.querySelector(`input[name="ex${i + 1}"]:checked`).value
          );
        }

        // VERIFY USER CORRECT ANSWERS (0-wrong, 1-correct)
        for (let i = 0; i < userAnswers.length; i++) {
          if (userAnswers[i] === correctAnswers[i]) {
            totalCorrect += 1;
          } else {
            totalWrong += 1;
          }
        }

        // EXERCISES RESULTS
        document.querySelector("#courseContent").innerHTML = `
          <h2 class="p-2">${chapterSelected.title}</h2>
          
          <p class="text-center py-3">
            <h2>Total Questions: ${correctAnswers.length}</h2>
            <br>
            <h3>Answered Correctly: ${totalCorrect}</h3>
            <h3>Answered Wrong: ${totalWrong}</h3>
            <br>
            <h4>Note: In order to complete a chapter, you need to answer all questions correctly</h4>
          </p>
        `;

        // IF THE USER ANSWERED ALL QUESTIONS CORRECTLY
        if (totalWrong === 0) {
          document.querySelector("#courseContent").innerHTML += `
            <br><br>
            <h3>Congratulations! You have successfully completed the ${chapterSelected.title}</h3>
          `;

          // update user information
          for (let course in currentUser.courses) {
            if (currentUser.courses[course].title === selectedCourse.title) {
              for (let chapter in currentUser.courses[course].chapters) {
                if (
                  currentUser.courses[course].chapters[chapter].number ===
                  chapterSelected.title
                ) {
                  currentUser.courses[course].chapters[chapter].status =
                    "completed";
                  break;
                }
              }
              break;
            }
          }

          completeCourse();
        }
      });
    });

  const completeCourse = () => {
    for (let user in userModel.users) {
      if (userModel.users[user].username == currentUser.username) {
        // check if all chapters are completed
        for (let course in currentUser.courses) {
          if (currentUser.courses[course].title === selectedCourse.title) {
            for (let chapter in currentUser.courses[course].chapters) {
              if (
                currentUser.courses[course].chapters[chapter].status ===
                "uncompleted"
              ) {
                return;
              }
            }

            // if all chapters have the "status: completed"
            currentUser.courses[course].status = "completed";

            // save data to session storage
            sessionStorage.loggedUser = currentUser;
            // save data to local storage
            for (let user in userModel.users) {
              if (userModel.users[user].username == currentUser.username) {
                userModel.users[user] = currentUser;
                localStorage.users = JSON.stringify(userModel.users);

                checkIfCourseCompleted();
                break;
              }
            }
            break;
          }
        }

        break;
      }
    }
  };
}

const checkIfCourseCompleted = () => {
  for (let course in currentUser.courses) {
    if (currentUser.courses[course].title === selectedCourse.title) {
      if (currentUser.courses[course].status === "completed") {
        document.querySelector("#chaptersList").innerHTML += `
        <div class="card text-light">
          <div class="card-body">
            <h5 class="card-title h3">COURSE COMPLETED</h5>
          </div>
        </div>
        `;
      }
      break;
    }
  }
};

// After loading page, "Chapter I" is shown
selectChapter("Chapter I");

// Check if the user completed all chapters
checkIfCourseCompleted();
