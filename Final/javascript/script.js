const menuBtn = document.getElementById("btn_drpdwn");
const navResponsive = document.querySelector(".nav-responsive");
const slide = document.querySelectorAll(".nav_a1, .nav_a2, .nav_a3, .nav_a4");
const extend = document.querySelector(".nav-main-responsive");

menuBtn.addEventListener("click", function () {
  navResponsive.classList.toggle("show");
  slide.forEach(tile => {
    tile.classList.toggle("slide-to-side");
  });
});
menuBtn.addEventListener("click", function () {
  extend.classList.toggle("extend");
  });

const asideBtn = document.getElementById("btn_aside");
const asideBtnBack = document.getElementById("btn_aside_back");
const asideResponsive = document.querySelector(".resources_aside");
const mainContent = document.querySelector(".resources_section");

asideBtn.addEventListener("click", function () {
  asideResponsive.classList.toggle("show_aside");
  asideBtn.classList.toggle("hide");
  asideBtnBack.classList.toggle("show");
  mainContent.classList.toggle("main_opacity");
});

asideBtnBack.addEventListener("click", function () {
  asideResponsive.classList.remove("show_aside");
  asideResponsive.classList.add("hide_aside");
  asideBtn.classList.remove("hide");
  asideBtnBack.classList.remove("show");
  mainContent.classList.toggle("main_opacity_remove");
});