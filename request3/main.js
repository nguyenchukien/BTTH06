const today = new Date();
function times() {
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var number1 = Math.floor(h / 10);
  var number2 = h % 10;
  var number3 = Math.floor(m / 10);
  var number4 = m % 10;
  var number5 = Math.floor(s / 10);
  var number6 = s % 10;
  document.querySelector("#hours-1").src = `icons/0${number1}.gif`;
  document.querySelector("#hours-2").src = `icons/0${number2}.gif`;
  document.querySelector("#minutes-1").src = `icons/0${number3}.gif`;
  document.querySelector("#minutes-2").src = `icons/0${number4}.gif`;
  document.querySelector("#second-1").src = `icons/0${number5}.gif`;
  document.querySelector("#second-2").src = `icons/0${number6}.gif`;
  if (h >= 0 && h < 12) {
    document.querySelector(".content").textContent = "Chào buổi sáng";
  } else if (h >= 12 && h < 17) {
    document.querySelector(".content").textContent = "Chào buổi chiều";
  } else if (h >= 17 && h < 23) {
    document.querySelector(".content").textContent = "Chào buổi tối";
  }
}
setInterval(times, 100);
