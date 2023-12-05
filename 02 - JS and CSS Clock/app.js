setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let hourHand = document.querySelector(".hour-hand");
  let minuteHand = document.querySelector(".min-hand");
  let secondHand = document.querySelector(".second-hand");

  let hourDegree = hour * 30;
  let minuteDegree = minute * 6;
  let secondDegree = second * 6;

  hourHand.style.rotate = `${hourDegree}deg`;
  minuteHand.style.rotate = `${minuteDegree}deg`;
  secondHand.style.rotate = `${secondDegree}deg`;
}, 1000);
