const vid = document.querySelector(".player__video");
const videoPlayer = document.querySelector(".player__video");
const progressBar = document.querySelector(".progress");
const progressBarFilled = document.querySelector(".progress__filled");
const playButton = document.querySelector(".toggle");
const volumeRange = document.querySelector("input[name='volume']");
const playbackRate = document.querySelector("input[name='playbackRate']");
const back10 = document.querySelector('[data-skip="-10"]');
const forward25 = document.querySelector('[data-skip="25"]');
let isPlaying = false;

/* vid.onloadedmetadata = function () {
  playRange.max = this.duration;
}; */

function handlePlay() {
  if (isPlaying) {
    vid.pause();
    isPlaying = false;
    playButton.innerText = "⏸︎";
  } else {
    vid.play();
    isPlaying = true;
    playButton.innerText = "►";
  }
}

function handleVolumeChange() {
  vid.volume = volumeRange.value;
}

function handlePlaybackRateChange() {
  vid.playbackRate = playbackRate.value;
}

function handleProgress() {
  const percent = (vid.currentTime / vid.duration) * 100;
  progressBarFilled.style.flexBasis = `${percent}%`;
}

function changeTime(e) {
  const time = (e.offsetX / progressBar.offsetWidth) * vid.duration;
  vid.currentTime = time;
}

videoPlayer.addEventListener("click", () => handlePlay());
playButton.addEventListener("click", () => handlePlay());

progressBar.addEventListener("click", changeTime);

vid.addEventListener("timeupdate", () => handleProgress());

playbackRate.addEventListener("change", () => handlePlaybackRateChange());
volumeRange.addEventListener("change", () => handleVolumeChange());

back10.addEventListener("click", () => {
  vid.currentTime = vid.currentTime - 10;
  playRange.value = vid.currentTime;
});

forward25.addEventListener("click", () => {
  vid.currentTime = vid.currentTime + 25;
  playRange.value = vid.currentTime;
});
