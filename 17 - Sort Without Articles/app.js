const list = document.querySelector("#bands");
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function removeArticle(str) {
  let newWord = str.split(" ");
  if (str.length <= 1) return str;
  if (newWord[0] == "The" || newWord[0] == "A" || newWord[0] == "An") {
    return newWord.splice(1).join(" ");
  } else return str;
}

const bandsSorted = bands.sort(function (a, b) {
  if (removeArticle(a) > removeArticle(b)) {
    return 1;
  } else {
    return -1;
  }
});

for (let i = 0; i < bands.length; i++) {
  const listElement = document.createElement("li");
  listElement.innerText = bandsSorted[i];
  list.appendChild(listElement);
}
