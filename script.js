setInterval(function () {
  let currentdate = new Date();
  console.log(currentdate);
  let displayHour = currentdate.getHours();
  let displayMinute = currentdate.getMinutes();
  let displaySeconds = currentdate.getSeconds();

  if (currentdate.getHours() < 10) {
    displayHour = "0" + currentdate.getHours();
  }

  if (currentdate.getMinutes() < 10) {
    displayMinute = "0" + currentdate.getMinutes();
  }

  if (currentdate.getSeconds() < 10) {
    displaySeconds = "0" + currentdate.getSeconds();
  }

  let months = [
    null,
    `"Jan"`,
    `"Feb"`,
    `"Mar"`,
    `"Apr"`,
    `"May"`,
    `"June"`,
    `"July"`,
    `"Aug"`,
    `"Sept"`,
    `"Oct"`,
    `"Nov"`,
    `"Dec"`,
  ];

  document.querySelector("#hour").innerHTML = displayHour;
  document.querySelector("#minute").innerHTML = displayMinute;
  document.querySelector("#second").innerHTML = displaySeconds;
  document.querySelector("#period").innerHTML =
    currentdate.getHours() > 11 ? `"PM"` : `"AM`;
  document.querySelector("#date").innerHTML = currentdate.getDate();
  document.querySelector("#month").innerHTML =
    months[currentdate.getMonth() + 1];
  document.querySelector("#year").innerHTML = currentdate.getFullYear();
}, 10);
