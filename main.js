alert('is this working?');

const hrDiv = document.querySelector('#hr');
const minDiv = document.querySelector('#mn');
const secDiv = document.querySelector('#sc');

setInterval(updateClock, 1000);

function updateClock() {
    let day = new Date();
    let hh = day.getHours() / 12;
    let mm = day.getMinutes() / 60;
    let ss = day.getSeconds() / 60;

    hrDiv.style.transform = `rotate(${(hh * 360)}deg)`;
    minDiv.style.transform = `rotate(${(mm * 360)}deg)`;
    secDiv.style.transform = `rotate(${(ss * 360)}deg)`;
};