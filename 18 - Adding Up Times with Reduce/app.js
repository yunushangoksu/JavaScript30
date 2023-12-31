const nodeList = document.querySelectorAll(".videos li");
let dataFields = Array.from(nodeList);

let totalSecond = dataFields.reduce((acc, time) => {
  timeField = time.dataset.time.split(":");
  timeArrayMin = parseInt(timeField[0]);
  timeArraySec = parseInt(timeField[1]);
  minToSec = timeArrayMin * 60 + timeArraySec;
  return (acc += minToSec);
}, 0);

let totalHours = Math.floor(totalSecond / 3600);
let totalMinutes = Math.floor(totalSecond / 60);

console.log(totalHours, totalMinutes % 60, totalSecond % 60);
