const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 360;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = ((minutes / 60) * 360);
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hourDegrees = ((hours / 12) * 360);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (seconds == 0) {
        secondHand.style.transitionDuration = '0s';
        minHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
    } else {
        secondHand.style.transitionDuration = '0.05s';
        minHand.style.transitionDuration = '0.05s';
        hourHand.style.transitionDuration = '0.05s';
    }
}
setInterval(setDate, 1000)