
var secs = 0;
var interval = 0;
var checkstart = 0;

var x = 0;
var pausebutton = 0;
var resetbutton = 0;
var total=0;
function starttimer() {
  if (checkstart == 0) {
    var hour = parseInt(document.getElementById("hset").value);
    var minute = parseInt(document.getElementById("mset").value);
    var sec = parseInt(document.getElementById("sset").value);
    total=(hour*60*60)+(minute*60)+(sec);
  }

  interval = setInterval(() => {
    secs=secs+(360/total);
    document.getElementById('second-hand').style.transform = `rotate(${secs}deg)`;

    if (sec > 0) {
      sec--;
    } else if (minute > 0 && sec == 0) {
      minute--;
      sec = 59;
    } else if (hour > 0 && minute == 0 && sec == 0) {
      hour--;
      minute = 59;
      sec = 59;
    }

    document.getElementById("h").innerHTML = hour;
    document.getElementById("m").innerHTML = minute;
    document.getElementById("s").innerHTML = sec;

    if (sec == 0 && minute == 0 && hour == 0) {
      clearInterval(interval);
      document.getElementById("audio").play();
    }
  }, 1000);
}

function pausetimer() {
  if (pausebutton == 1) {
    document.getElementById("pause").innerHTML = "pause";
    starttimer();
    pausebutton = 0;
  }
  if (pausebutton == 0) {
    clearInterval(interval);
    document.getElementById("pause").innerHTML = "Resume";
    checkstart = 1;
    pausebutton = 1;
    document.getElementById("audio").pause();
  }
}

function resettimer() {
  hour = 0;
  minute = 0;
  sec = 0;
  secs=0
  clearInterval(interval);

  document.getElementById("second-hand").style.transform = `rotate(${secs}deg)`;


  document.getElementById("h").innerHTML = "0" + hour;
  document.getElementById("m").innerHTML = "0" + minute;
  document.getElementById("s").innerHTML = "0" + sec;

  document.getElementById("hset").value = "00";
  document.getElementById("mset").value = "00";
  document.getElementById("sset").value = "00";
  document.getElementById("audio").pause();
}
