const btnStart1 = document.getElementById('start');
const btnStopagain = document.getElementById('stop');
btnStart1.addEventListener('click', onStarthappen)
btnStopagain.addEventListener('click', onStophappen)


let speedCounter = null;
let timeCounter = null;

var sCount = 0;
var tCount = 0;

function onStarthappen()
{
    const changetime = document.getElementById('time').value;
    btnStopagain.disabled = false
    btnStart1.disabled = true;
    if(speedCounter==null)
    {
        speedCounter = setInterval(speedCounterhappen,Number(changetime)*1000);
    }

    if(timeCounter == null)
    {
        timeCounter = setInterval(timeCounterhappen,1000);
    }

    
}
const speedVal = document.getElementById('speed-val');
const timeMin = document.getElementById('timeminimuma');
const timeSec = document.getElementById('timeinsecond');


function onStophappen()
{
    btnStopagain.disabled = true;
    clearInterval(speedCounter);
    speedCounter= null;
    btnStart1.disabled = false; 
    sCount = 0; 

    clearInterval(timeCounter);
    timeCounter=null;
    tCount = 0;

}

function timeCounterhappen()
{
    const timeMin = document.getElementById('timeminimuma');
    const timeSec = document.getElementById('timeinsecond');
    tCount+=1;
    var timeMinCount = 0;
    timeSec.innerText = tCount;
    if(tCount>=59)
    {
        tCount = 0;
        timeMinCount+=1;
        timeMin.innerText = timeMinCount;
    }

    
}

function speedCounterhappen()
{
    const speedChange = document.getElementById('speed').value;
    sCount+=Number(speedChange);
    speedVal.innerHTML = sCount;

    calcDistancehappen();

}

function calcDistancehappen()
{
    const speed = Number(speedVal.textContent)*(5/18);
    const time = (Number(timeMin.textContent)*60) + Number(timeSec.textContent);
    const distance  = Math.round((speed * time)/1000);
    const distEle = document.getElementById('distance');
    distEle.innerText = distance;
}