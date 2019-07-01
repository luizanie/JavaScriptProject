// ustawienie daty koncowej - wazny format
const endTime = new Date('2020-07-20 23:24:22').getTime();

// pobranie wymaganych elementow
const spanY = document.querySelector("span.y");
const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");

const divY = document.querySelector("div.y");
const divD = document.querySelector("div.d");
const divH = document.querySelector("div.h");
const divM = document.querySelector("div.m");
const divS = document.querySelector("div.s");


setInterval(() => {
        // pobranie aktualnego czasu - liczba w milisekundach od 00:00 1 stycznia 1970
        const nowTime = new Date().getTime();

        // years - roznica lat pomiedzy data koncowa a obecnym czasem uzytkownika
        let years = Math.floor(endTime / (1000 * 60 * 60 * 24 * 365) - nowTime / (1000 * 60 * 60 * 24 * 365));
        // warunek trojargumentowy (nawet czteroargumentowy) 
        years = years < 1 ? divY.classList.add('hid') : years < 10 ? `0${years}` : years;

        let days = Math.floor(endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)) % 365;
        days = days < 1 ? divD.classList.add('hid') : days < 10 ? `0${days}` : days;

        let hours = Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;
        hours = hours < 1 ? divH.classList.add('hid') : hours < 10 ? `0${hours}` : hours;

        let minutes = Math.floor(endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60;
        minutes = minutes < 1 ? divM.classList.add('hid') : minutes < 10 ? `0${minutes }` : minutes;

        let seconds = (Math.floor(endTime / 1000 - nowTime / 1000)) % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        // dodanie roznicy lat itd do elementu strony
        spanY.textContent = years;
        spanD.textContent = days;
        spanH.textContent = hours;
        spanM.textContent = minutes;
        spanS.textContent = seconds;

    },
    ///ustawienie zmiany czasu co 1 sekunde
    1000)