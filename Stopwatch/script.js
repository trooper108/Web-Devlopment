let timerDisplay = document.querySelector('.timerDisplay');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let sec = 0;
let mins = 0;
let hours = 0;

function startTimer(){
    msec++;
    if(msec === 100){
        msec = 0;
        sec ++;
        if(sec === 60){
            sec = 0;
            mins++;
            if(mins === 60){
                mins = 0;
                hours++;
            }
        }
    }
    let msecstring = msec<10? `0${msec}`: msec;
    let secstring = sec<10? `0${sec}`: sec;
    let minsstring = mins<10? `0${mins}`: mins;
    let hoursstring = hours<10? `0${hours}`: hours;
    timerDisplay.innerHTML = `${hoursstring} : ${minsstring} : ${secstring} : ${msecstring}`;
}
let timerId = null;
startBtn.addEventListener('click',()=>{
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
});
stopBtn.addEventListener('click',()=>{
    clearInterval(timerId);
});
resetBtn.addEventListener('click',()=>{
    clearInterval(timerId);
    timerDisplay.innerHTML ='00 : 00 : 00 : 00';
    msec = sec = mins = hours = 00;
});
