const images = ["img/IMG_4637.jpeg", "img/MCEinar2.jpeg", "img/MCEinar-default.webp"];

let current = 0;

const slide = document.getElementById("slideshow");

setInterval(() => {
  current++;

  if (current >= images.length) {
    current = 0;
  }

  slide.src = images[current];
}, 5000);

const burger = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
