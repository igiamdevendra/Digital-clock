const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const sec = document.getElementById('sec');

function updateClock() {
    let currentTime = new Date;
    hrs.innerText = currentTime.getHours();
    mins.innerText = String(currentTime.getMinutes()).padStart(2, '0');
    sec.innerText = String(currentTime.getSeconds()).padStart(2, '0');
}

setInterval(updateClock, 1000);
updateClock();
