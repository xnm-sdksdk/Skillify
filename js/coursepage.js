import * as courseModel from "./models/courseModel.js";
import * as userModel from "./models/userModel.js";

courseModel.init();
userModel.init();

const selectedCourse = {
  title: "Nome do curso",
  description: "Very Nice yes",
  btnDescription: "Begin Course",
  initialVideo: "../videos/SkillifyPromoFinal.mp4",
  chapters: [],
  comments: [
    {
      username: "TiagoRibeiro.25",
      text: "Curso muito bom!",
    },
    {
      username: "Desconhecido",
      text: "MELHOR CURSO!!!",
    },
    {
      username: "Vizinho",
      text: "Random comment",
    },
    {
      username: "Tkinter Enjoyer",
      text: "Prefiro python smh",
    },
    {
      username: "Joaquim",
      text: "kinda cool ngl",
    },
    {
      username: "random user on the internet",
      text: "ok",
    },
    {
      username: "vscode hater",
      text: "YOOO!",
    },
    {
      username: "Garfield",
      text: "SKILLIFY 💪",
    },
    {
      username: "USER",
      text: "TOP!",
    },
    {
      username: "Não sei",
      text: "ta bom",
    },
  ],
  likes: 0,
};

document.querySelector("title").innerText =
  selectedCourse.title + " - Skillify";

document.querySelector("h1").innerText = selectedCourse.title;

document.querySelector("h4").innerText = selectedCourse.description;

document.querySelector("#videoLocation").innerHTML = `
      <video width="720" height="405" controls>
          <source src=${selectedCourse.initialVideo} type="video/mp4" />
      </video>
  `;

/* Like Button */
$(function () {
  $(document).one("click", ".like-review", function (e) {
    $(this).html('<i class="like-button" aria-hidden="true"></i> Liked!');
    $(this).children(".fa-heart").addClass("animate-like");
  });
});

// COMMENTS SECTION

const renderComments = (n = selectedCourse.comments.length - 5) => {
  // clear comments
  document.querySelector("#commentSection").innerHTML = "";

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

  // Load/Reduce comments button
  document.querySelector("#commentSection").innerHTML +=
    n == selectedCourse.comments.length - 5
      ? `
    <br>
    <button
        type="button"
        class="btn btn-primary py-2 p-5"
        id="loadAllCommentsBtn"
    >Load All Comments</button>
  `
      : `
  <br>
  <button
      type="button"
      class="btn btn-primary py-2 p-5"
      id="ReduceAllCommentsBtn"
  >Reduce to 5 Comments</button>
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
};

// CALL FUNCTION TO RENDER COMMENTS SECTION (only 5comments)
renderComments();
