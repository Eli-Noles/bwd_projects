const dropdownBtn = document.getElementById("menuu");
const dropdownMenu = document.getElementById("nav");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});


console.log("Dropdown JS loaded");
dropdownBtn.addEventListener("click", function (e) {
  console.log("Button clicked");
  e.stopPropagation();
  toggleDropdown();
});

dropdownMenu.addEventListener("error", function (e) {
  console.log("Menu error event");
  e.stopPropagation();
})