let boom = new Audio("sounds/boom.wav");
let clap = new Audio("sounds/clap.wav");
let hihat = new Audio("sounds/hihat.wav");
let kick = new Audio("sounds/kick.wav");
let openhat = new Audio("sounds/openhat.wav");
let ride = new Audio("sounds/ride.wav");
let snare = new Audio("sounds/snare.wav");
let tink = new Audio("sounds/tink.wav");
let tom = new Audio("sounds/tom.wav");

let buttons = document.querySelectorAll(".noteButton");
let buttonA = document.getElementById("a");
let buttonS = document.getElementById("s");
let buttonD = document.getElementById("d");
let buttonF = document.getElementById("f");
let buttonG = document.getElementById("g");
let buttonH = document.getElementById("h");
let buttonJ = document.getElementById("j");
let buttonK = document.getElementById("k");
let buttonL = document.getElementById("l");

document.addEventListener("keydown", (event) => {
  if (event.code == "KeyA") {
    boom.currentTime = 0;
    boom.play();
    buttonA.classList.add("playing");
  } else if (event.code == "KeyS") {
    clap.currentTime = 0;
    clap.play();
    buttonS.classList.add("playing");
  } else if (event.code == "KeyD") {
    kick.currentTime = 0;
    kick.play();
    buttonD.classList.add("playing");
  } else if (event.code == "KeyF") {
    openhat.currentTime = 0;
    openhat.play();
    buttonF.classList.add("playing");
  } else if (event.code == "KeyG") {
    boom.currentTime = 0;
    boom.play();
    buttonG.classList.add("playing");
  } else if (event.code == "KeyH") {
    ride.currentTime = 0;
    ride.play();
    buttonH.classList.add("playing");
  } else if (event.code == "KeyJ") {
    snare.currentTime = 0;
    snare.play();
    buttonJ.classList.add("playing");
  } else if (event.code == "KeyK") {
    tom.currentTime = 0;
    tom.play();
    buttonK.classList.add("playing");
  } else if (event.code == "KeyL") {
    tink.currentTime = 0;
    tink.play();
    buttonL.classList.add("playing");
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code == "KeyA") {
    buttonA.classList.remove("playing");
  } else if (event.code == "KeyS") {
    buttonS.classList.remove("playing");
  } else if (event.code == "KeyD") {
    buttonD.classList.remove("playing");
  } else if (event.code == "KeyF") {
    buttonF.classList.remove("playing");
  } else if (event.code == "KeyG") {
    buttonG.classList.remove("playing");
  } else if (event.code == "KeyH") {
    buttonH.classList.remove("playing");
  } else if (event.code == "KeyJ") {
    buttonJ.classList.remove("playing");
  } else if (event.code == "KeyK") {
    buttonK.classList.remove("playing");
  } else if (event.code == "KeyL") {
    buttonL.classList.remove("playing");
  }
});

function removeTransition(e) {
  console.log(e);
}
buttons.addEventListener("transitionend", removeTransition());
