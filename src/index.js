import "./styles/style.css";

// Dropdown menu
const closeBtn = document.querySelectorAll(".close-dropdown");
closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach((button) => {
      button.style.backgroundColor = "black";
      button.style.color = "pink";
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
      button.style.color = "pink";
    });
    button.style.backgroundColor = "pink";
    button.style.color = "black";
    console.log(button.classList[0].split("-")[0]);
    showDropdown(button.classList[0].split("-")[0]);
  });
});

// Image slideshow
import image1 from "./images/hawaiiBeach.jpg";
import image2 from "./images/morningFog.jpg";
import image3 from "./images/rockOcean.jpg";
import image4 from "./images/sunriseMorning.jpg";
const img1 = document.querySelector(".image-1");
const img2 = document.querySelector(".image-2");
const img3 = document.querySelector(".image-3");
const img4 = document.querySelector(".image-4");

img1.src = image1;
img2.src = image2;
img3.src = image3;
img4.src = image4;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", () => {
  plusSlides(-1);
});
nextBtn.addEventListener("click", () => {
  plusSlides(1);
});

const dot1 = document.querySelector(".d1");
const dot2 = document.querySelector(".d2");
const dot3 = document.querySelector(".d3");
const dot4 = document.querySelector(".d4");

dot1.addEventListener("click", () => {
  currentSlide(1);
});
dot2.addEventListener("click", () => {
  currentSlide(2);
});
dot3.addEventListener("click", () => {
  currentSlide(3);
});
dot4.addEventListener("click", () => {
  currentSlide(4);
});
