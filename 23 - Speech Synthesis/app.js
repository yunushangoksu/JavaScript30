const synth = window.speechSynthesis;
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
let voices = [];

function populateVoicelist() {
  voices = synth.getVoices();

  for (i = 0; i < voices.length; i++) {
    let voiceOption = document.createElement("option");
    voiceOption.text = voices[i].name;
    voiceOption.value = i;
    voicesDropdown.add(voiceOption);
  }
}

function speak() {
  if (options[2].value) {
    const msg = new SpeechSynthesisUtterance(options[2].value);
    speechSynthesis.pause();
    speechSynthesis.cancel();
    msg.pitch = options[1].value;
    msg.rate = options[0].value;
    msg.voice = voices[voicesDropdown.value];
    synth.speak(msg);
    console.log(msg.pitch, msg.rate, msg.voice);
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
