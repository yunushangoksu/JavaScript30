const navBar = document.getElementById("main");
const logo = document.querySelector("li.logo");
let coordinates = main.getBoundingClientRect();

function fixNavbar() {
  if (window.scrollY > coordinates.top) {
    logo.style.maxWidth = "100px";
    navBar.style.display = "sticky";
  } else {
    logo.style.maxWidth = "0px";
    navBar.style.display = "relative";
  }
}

window.addEventListener("scroll", fixNavbar);
