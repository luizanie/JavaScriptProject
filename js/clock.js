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

    //dopasowanie minut do ruchu wskazowek po kole zegara
    const minutesDegrees = ((minutes / 60) * 360);
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    //dopasowanie godzin do ruchu wskazowek po kole zegara
    const hourDegrees = ((hours / 12) * 360);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    //ustawienie wskazowek, tak aby caly czas poruszaly sie do przodu, bez koniecznosci "powroty" do 12 za kazdym razem gdy sec wskazkow rowna 0
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
//ustawienie zmieny czasu co 1 sekunde
setInterval(setDate, 1000)