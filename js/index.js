window.onload = () => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });
};

/* const menuBtn = document.querySelector(".menu"); */

const mobile_menu = document.querySelector("mobile-nav");

/* menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("is-active");
}); */

function openSlideMenu() {
  document.getElementById("nav_menu").style.width = "414px";
  document.getElementById("content_menu").style.marginRight = "400px";
}

function closeSlideMenu() {
  document.getElementById("nav_menu").style.width = "0x";
  document.getElementById("content_menu").style.marginRight = "0px";
}

// GO UP BUTTON
const go_up = document.getElementById("go_up");
go_up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
