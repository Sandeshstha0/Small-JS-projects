let time = new Date();
console.log(time);

const showseconds = () => {
  let seconds = new Date().getSeconds();
  document.getElementById("seconds").innerHTML = `${seconds}`;
};

const showminutes = () => {
  let minutes = new Date().getMinutes();
  document.getElementById("minutes").innerHTML = `${minutes}`;
};

const showhours = () => {
  let hours = new Date().getHours();
  document.getElementById("hours").innerHTML = `${hours}`;
};

const showdate = () => {
  let month = new Date().getMonth();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = monthNames[month];

  let year = new Date().getFullYear();
  let date = new Date().getDate();

  let day = new Date().getDay();
  let weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekdayName = weekdayNames[day];

  document.getElementById(
    "date"
  ).innerHTML = `${date} ${monthName}, ${weekdayName}`;
};

setInterval(showseconds, 100);
setInterval(showminutes, 1000);
setInterval(showhours, 1000);
setInterval(showdate, 1000);
setInterval(showdate, 10000);
