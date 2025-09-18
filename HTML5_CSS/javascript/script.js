const dropdownBtn = document.getElementById("menuu");
const dropdownMenu = document.getElementById("nav");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});