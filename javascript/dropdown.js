let dropdownbtn = document.querySelector(".dropdown-icon");
let dropdown = document.querySelector(".dropdown-menu");

dropdownbtn.addEventListener("click", function() {
    dropdown.classList.toggle("active");
});