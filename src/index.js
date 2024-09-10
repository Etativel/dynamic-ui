import "./styles/style.css";
const closeBtn = document.querySelectorAll(".close-dropdown");
closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".dropdown-content").style.visibility = "hidden";
  });
});

function showDropdown(content) {
  const allDropdown = document.querySelectorAll(".dropdown-content");
  allDropdown.forEach((btn) => {
    btn.style.visibility = "hidden";
  });
  const dropdownDOM = document.querySelector(`.${content}.dropdown-content`);
  if (dropdownDOM.style.visibility === "visible") {
    dropdownDOM.style.visibility = "hidden";
  } else {
    dropdownDOM.style.visibility = "visible";
  }
}

const tutorialBtn = document.querySelector(".tutorial-btn");
const exercisesBtn = document.querySelector(".exercises-btn");
const certificatesBtn = document.querySelector(".certificates-btn");
const servicesBtn = document.querySelector(".services-btn");

tutorialBtn.addEventListener("click", () => {
  showDropdown("tutorial");
});
exercisesBtn.addEventListener("click", () => {
  showDropdown("exercises");
});
certificatesBtn.addEventListener("click", () => {
  showDropdown("certificates");
});
servicesBtn.addEventListener("click", () => {
  showDropdown("services");
});
