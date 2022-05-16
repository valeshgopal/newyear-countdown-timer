"use strict";
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const presentYear = document.querySelector(".current-year");
const newYear = document.querySelector(".new-year");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

newYear.innerHTML = currentYear + 1;
const updateCountdownTime = function () {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 24 / 60 / 60);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
};

updateCountdownTime();

setInterval(updateCountdownTime, 1000);
