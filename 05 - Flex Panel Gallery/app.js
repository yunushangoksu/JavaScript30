const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("panelActive");
}
console.log(panels);
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
