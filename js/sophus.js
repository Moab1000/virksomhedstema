const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

const html = document.querySelector("html");
const btn = document.querySelector("#toggle-btn");

function toggleDark() {
  console.log("toggleDark");
  // html.classList.toggle("dark");
  if (html.classList === "dark") {
    html.classList = "light";
    btn.textContent = "light_mode";
  } else {
    html.classList = "dark";
    btn.textContent = "dark_mode";
  }
}

btn.addEventListener("click", toggleDark);
