setInterval(() => {
  let currentTime = new Date();
  document.querySelector(".top").innerHTML = `${
    currentTime.getHours() < 10 ? "0" : ""
  }${currentTime.getHours()}:${
    currentTime.getMinutes() < 10 ? "0" : ""
  }${currentTime.getMinutes()}:${
    currentTime.getSeconds() < 10 ? "0" : ""
  }${currentTime.getSeconds()}`;
}, 1000);

function setWeek() {
  let day;
  switch (new Date().getDay()) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thrusday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 0:
      day = "Sunday";
      break;
  }
  document.querySelector(".weekday").innerHTML = day;
}
setWeek();

function setFullTime() {
  let date = new Date();
  let month;
  switch (date.getMonth()) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Augt";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }
  let fulltime = `${date.getDate()}   ${month} ${date.getFullYear()} `;
  document.querySelector(".year").innerHTML = fulltime;
}
setFullTime();
