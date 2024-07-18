

var al = 0;
function alarmring(e) {
  e.preventDefault();
  al = 1;
}
function stopring(e) {
  e.preventDefault();
  al = 0;
  document.getElementById("audio").pause();
}
document.getElementsByTagName("button")[0].addEventListener("click", alarmring);
document.getElementsByTagName("button")[1].addEventListener("click", stopring);

setInterval(() =>{
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  hrotation = 30 * h + m / 2;
  mrotation = 6 * m;
  srotation = 6 * s;

  document.getElementById("hour-hand").style.transform = `rotate(${hrotation}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${mrotation}deg)`;
  document.getElementById("second-hand").style.transform = `rotate(${srotation}deg)`;
  if (al == 1) {
    var hour = parseInt(document.getElementById("hour").value);
    var minute = document.getElementById("min").value;
    var ampm = document.getElementById("ampm").value;

    if (ampm === "pm" && hour != 12) {
      hour = hour + 12;
    } else if (ampm === "am" && hour == 12) {
      hour = 0;
    }

    if (hour == d.getHours() && minute == d.getMinutes()) {
      document.getElementById("audio").play();
    }
  }
}, 1000);
