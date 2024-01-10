const synth = window.speechSynthesis;
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const textArea = document.querySelector("textarea");
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
let voices = [];

function populateVoicelist() {
  voices = synth.getVoices();
}

function speak() {
  if (textArea.value) {
    const msg = new SpeechSynthesisUtterance(textArea.value);
    msg.pitch = options[1].value;
    msg.rate = options[0].value;
    synth.speak(msg);
  } else {
    return;
  }
}

function stopSpeaking() {
  speechSynthesis.pause();
  speechSynthesis.cancel();
}

speakButton.addEventListener("click", speak);
stopButton.addEventListener("click", stopSpeaking);
synth.addEventListener("voiceschanged", populateVoicelist);
