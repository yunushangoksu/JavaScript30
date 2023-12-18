let keySequence = [];
let konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
function handleSequence(e) {
  keySequence.push(e.key);
  keySequence.splice(
    -konamiCode.length - 1,
    keySequence.length - konamiCode.length
  );
  if (keySequence.toString() == konamiCode.toString()) {
    cornify_add();
  }
  console.log(keySequence);
}
window.addEventListener("keydown", handleSequence);
