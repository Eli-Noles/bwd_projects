const dropdownBtns = document.querySelectorAll(".menuu");
const dropdownMenu = document.getElementById("nav");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

dropdownBtns.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });
});