
var countDown = new Date("Nov 15, 2021 23:00:00").getTime();

var update = setInterval(function() {

  var today = new Date().getTime();

  var distance = countDown - today;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(update);
    document.getElementById("time").innerHTML = "Together at last";
  }
}, 1000);
