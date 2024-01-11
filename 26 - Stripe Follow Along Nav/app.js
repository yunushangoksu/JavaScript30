const dropdown = document.querySelectorAll(".cool > li");
const dropdownBackground = document.querySelector(".dropdownBackground");
const dropdownContent = document.querySelectorAll(".dropdown");
const navbar = document.querySelector(".cool");

function displayDropdown() {
  // const dropdownContentPosition
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active"), 150);
  dropdownBackground.classList.add("open");

  const navbarPosition = navbar.getClientRects();
  const position = this.querySelector(".dropdown").getBoundingClientRect();

  dropdownBackground.style.left = position.left - navbarPosition[0].left + "px";
  dropdownBackground.style.top = position.top - navbarPosition[0].top + "px";
  dropdownBackground.style.width = position.width + "px";
  dropdownBackground.style.height = position.height + "px";

  console.log(navbarPosition);
}

function removeDropdown() {
  dropdownBackground.classList.remove("open");
  this.classList.remove("trigger-enter", "trigger-enter-active");
}

dropdown.forEach((link) => link.addEventListener("mouseover", displayDropdown));
dropdown.forEach((link) => link.addEventListener("mouseout", removeDropdown));
