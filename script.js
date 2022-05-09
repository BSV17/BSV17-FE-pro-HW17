"use strict";

let clock = document.querySelector(".clock");

const colorsArray = ["aqua", "blueviolet", "yellow", "chartreuse", "red", "orange", "darkmagenta", "springgreen"];

function time() {
    let date = new Date();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    let currentTime = `${hours}:${minutes}:${seconds}`;
    displayTime(currentTime);
}

function displayTime(timeString) {
    let splitCurrentTime = timeString.split("");
    for (let i = 0; i < splitCurrentTime.length; i++) {
        let symbolEl = document.getElementById(`symbol-${i}`);
        if (symbolEl) {
            symbolEl.innerText = splitCurrentTime[i];
        } else {
            let newEl = document.createElement("div");
            newEl.id = `symbol-${i}`;
            newEl.style.color = colorsArray[i];
            newEl.innerText = splitCurrentTime[i];
            clock.appendChild(newEl);
        }
    }
}

time();
setInterval(time, 1000);
