import "./styles/style.css";
const closeBtn = document.querySelectorAll(".close-dropdown");
closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach((button) => {
      button.style.backgroundColor = "black";
      button.style.color = "white";
    });
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

const buttons = document.querySelectorAll(".nav-btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.style.backgroundColor = "black";
      button.style.color = "white";
    });
    button.style.backgroundColor = "white";
    button.style.color = "black";
    console.log(button.classList[0].split("-")[0]);
    showDropdown(button.classList[0].split("-")[0]);
  });
});
