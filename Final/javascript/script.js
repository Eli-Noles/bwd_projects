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