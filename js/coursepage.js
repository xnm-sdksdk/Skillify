/* import * as courseModel from "./models/courseModel.js";

courseModel.init(); */

const SelectedCourse = {
    title: "Nome do curso",
    description: "Very Nice yes",
    btnDescription: "Begin Course",
    initialVideo: "../videos/SkillifyPromoFinal.mp4",
    chapters: "",
};

document.querySelector("title").innerText =
    SelectedCourse.title + " - Skillify";

document.querySelector("h1").innerText = SelectedCourse.title;

document.querySelector("h4").innerText = SelectedCourse.description;

document.querySelector("#videoLocation").innerHTML = `
      <video width="720" height="405" controls>
          <source src=${SelectedCourse.initialVideo} type="video/mp4" />
      </video>
  `;

/* Like Button */
$(function () {
    $(document).one('click', '.like-review', function (e) {
        $(this).html('<i class="like-button" aria-hidden="true"></i> Liked!');
        $(this).children('.fa-heart').addClass('animate-like');
    });
});

/* Comment box */
$(document).ready(function () {

    $(".primaryContained").on('click', function () {
        $(".comment").addClass("commentClicked");
    }); //end click
    $("textarea").on('keyup.enter', function () {
        $(".comment").addClass("commentClicked");
    }); //end keyup
}); //End Function

new Vue({
    el: "#comment-box",
    data: {
        title: 'Add a comment',
        newItem: '',
        item: [],
    },
    methods: {
        addItem() {
            this.item.push(this.newItem);
            this.newItem = "";
        }
    }

});