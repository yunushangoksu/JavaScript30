let sounds = [
  { name: "Boom", key: "A", sound: new Audio("sounds/boom.wav") },

  { name: "Clap", key: "S", sound: new Audio("sounds/clap.wav") },

  { name: "Hihat", key: "D", sound: new Audio("sounds/hihat.wav") },

  { name: "Kick", key: "F", sound: new Audio("sounds/kick.wav") },

  { name: "Openhat", key: "G", sound: new Audio("sounds/opehnat.wav") },

  { name: "Ride", key: "H", sound: new Audio("sounds/ride.wav") },

  { name: "Snare", key: "J", sound: new Audio("sounds/snare.wav") },

  { name: "Tink", key: "K", sound: new Audio("sounds/tink.wav") },

  { name: "Tom", key: "L", sound: new Audio("sounds/tom.wav") },
];

for (let i = 0; i < sounds.length; i++) {
  let wrapper = document.querySelector(".wrapper");

  let noteBlock = document.createElement("div");
  noteBlock.classList.add("noteButton");
  noteBlock.classList.add(`button${sounds[i].key}`);
  noteBlock.innerText = sounds[i].key;

  let noteText = document.createElement("div");
  noteText.innerText = sounds[i].name;

  noteBlock.appendChild(noteText);
  wrapper.appendChild(noteBlock);

  document.addEventListener("keydown", (event) => {
    if (event.code == `Key${sounds[i].key}`) {
      sounds[i].sound.currentTime = 0;
      sounds[i].sound.play();
      noteBlock.classList.add("playing");
      noteBlock.style.animation = "none";
      noteBlock.offsetHeight;
      noteBlock.style.animation = null;
    }
  });
}
