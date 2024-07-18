const hour = document.getElementById('hour-hand');
const minute = document.getElementById('minute-hand');
const second = document.getElementById('second-hand');

setInterval(() => {
    d= new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();



    hrotation = (30*h +m/2);
    mrotation = (6*m)
    srotation = (6*s)

    hour.style.transform =`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`
}, 1000)

const hr = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {
    date= new Date();
    H = (date.getHours())
    M = (date.getMinutes())
    S = (date.getSeconds())



    // hrotation = (30*h +m/2);
    // mrotation = (6*m)
    // srotation = (6*s)
if(H<10)
    hr.innerHTML ="0"+H+" : ";
if(M<10)
    min.innerHTML="0"+M+" : ";
if(S<10)
    sec.innerHTML="0"+S;


if(H>=10)
    hr.innerHTML =H+" : ";
if(M>=10)
    min.innerHTML=M+" : ";
if(S>=10)
    sec.innerHTML=S;

    hr.style.fontSize = '3rem';
    min.style.fontSize = '3rem';
    sec.style.fontSize = '3rem';
    // hr.style.color = 'blue';
    // min.style.color = 'blue';
    // sec.style.color = 'blue';
    hr.style.fontWeight = '3rem';
    min.style.fontWeight = '3rem';
    sec.style.fontWeight = '3rem';

    hr.style.fontFamily = 'Orbitron, sans-serif';
    min.style.fontFamily = 'Orbitron, sans-serif';
    sec.style.fontFamily = 'Orbitron, sans-serif';

}, 1000)