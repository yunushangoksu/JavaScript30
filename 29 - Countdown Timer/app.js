let countdown;

const timeDisplay = document.querySelector(".display__time-left");
const minuteInput = document.getElementById("custom");
const endTime = document.querySelector(".display__end-time");

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  let minutesLeft = Math.floor(seconds / 60) % 60;
  let hoursLeft = Math.floor(seconds / 3600) % 60;
  let secondsLeft = seconds % 60;
  let timeObject = new Date();
  let endingTime = new Date(timeObject.getTime() + seconds * 1000);

  timeDisplay.textContent = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
  endTime.textContent = `BE BACK AT ${endingTime.getHours()}:${endingTime.getMinutes()}`;
}

minuteInput.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(minuteInput);
  inputValue = [...formData.entries()][0][1] * 60;
  timer(inputValue);
});
