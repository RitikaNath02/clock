
var msec=0;
var secs=0;
var min=0;
var interval=0;
var checkstart=0;
var sec=0;
var x=0;
function startwatch(){
    if (checkstart==0){
    interval=setInterval(()=>{
        document.getElementById("second-hand").style.transform = `rotate(${secs}deg)`;
            secs = secs + 0.06;
        if(min<10){
            document.getElementById('m').innerHTML=`0${min}`;
        }
        else{
            document.getElementById('m').innerHTML=min;
        }

        if(sec<10){
            document.getElementById('s').innerHTML=`0${sec}`;
        }
        else{
            document.getElementById('s').innerHTML=sec;
        }

        if(msec<10){
            document.getElementById('ms').innerHTML=`0${msec}`;
        }
        else{
            document.getElementById('ms').innerHTML=msec;
        }
     
        msec = msec + 1;
        if(msec==100){
            msec=0;
            sec++;
          
        }
        if(sec==60){
            sec=0;
            min++;
        }
      
    },10);
    checkstart=1;
}
}
function pausewatch() {
    if (x == 1) {
        document.getElementById("pause").innerHTML = "Pause";
        startwatch();
        x = 0;
       
    }
    else if (x == 0) {
        clearInterval(interval);
        document.getElementById("pause").innerHTML = "Resume";
        x = 1;
        checkstart=0;
    }

}
function resetwatch() {
     msec=0;
     secs=0;
     min=0;
   
     sec=0;
     x=0;
     document.getElementById("pause").innerHTML = "Pause";
    clearInterval(interval);
    document.getElementById("second-hand").style.transform = `rotate(${sec}deg)`;
    document.getElementById("m").innerHTML="0"+min;
    document.getElementById("s").innerHTML="0"+sec;
    document.getElementById("ms").innerHTML="0"+msec;
}
