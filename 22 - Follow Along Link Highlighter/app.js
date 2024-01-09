const links = document.querySelectorAll("a");
const highlight = document.createElement("div");
highlight.classList.add("highlight");

document.querySelector("body").appendChild(highlight);

function highlightLink() {
  const position = this.getBoundingClientRect();
  highlight.style.width = `${position.width}px`;
  highlight.style.height = `${position.height}px`;
  highlight.style.transform = `translate(${position.left + window.scrollX}px,${position.top + window.scrollY}px)`;
}

links.forEach((a) => a.addEventListener("mouseenter", highlightLink));
