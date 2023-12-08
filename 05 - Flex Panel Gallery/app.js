const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  let texts = this.querySelectorAll("p");
  this.classList.toggle("panelActive");
  texts[1].classList.toggle("middleText");
}
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
