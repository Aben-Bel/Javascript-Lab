let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");

function rotateHand() {
  const currentDate = new Date();

  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  const secondFraction = currentSeconds / 60;
  const minuteFraction = (secondFraction + currentMinutes) / 60;
  const hourFraction = (minuteFraction + currentHours) / 12;

  const degreesToRotateForSeconds = secondFraction * 360;
  const degreesToRotateForMinutes = minuteFraction * 360;
  const degreesToRotateForHours = hourFraction * 360;

  secondHand.style.transform = `rotate(${degreesToRotateForSeconds}deg)`;
  minuteHand.style.transform = `rotate(${degreesToRotateForMinutes}deg)`;
  hourHand.style.transform = `rotate(${degreesToRotateForHours}deg)`;
}

setInterval(rotateHand, 1000);
