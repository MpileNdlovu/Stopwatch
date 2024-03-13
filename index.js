const display = document.getElementById("display");
let mylaptime = document.getElementById("mylaptime");
let timer = null;
let startTime = 0;
let elapseTime = 0;
let isRunning = false;
let laps = [];
let Hours = 0;
let Minutes = 0;
let Seconds = 0;
let miliseconds = 0;
let lapCount = 0;

function start(){
    
    if(!isRunning){
        startTime = Date.now() - elapseTime;
        timer = setInterval(update, 100);
        isRunning = true;
    }

    
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapseTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    laps = [];
    lapCount = 0;
    startTime = 0;
    elapseTime = 0;
    isRunning = false;

    display.textContent = `00:00:00:00`;
    mylaptime.innerHTML = `<div>00:00:00:00</div>`;
} 

function update(){
    const currentTime = Date.now();
    elapseTime = currentTime - startTime;

    Hours = Math.floor(elapseTime / (1000 * 60 * 60));
    Minutes = Math.floor(elapseTime / (1000 * 60) % 60);
    Seconds = Math.floor(elapseTime / 1000 % 60);
    miliseconds = Math.floor(elapseTime % 1000/10 );

    Hours = String(Hours).padStart(2, "0");
    Minutes = String(Minutes).padStart(2, "0");
    Seconds = String(Seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${Hours}:${Minutes}:${Seconds}:${miliseconds}`;  

}

function lapTime(){
    lapCount++
    laps.push(`<div>Lap ${lapCount}: ${Hours}:${Minutes}:${Seconds}:${miliseconds}</div>`);
    mylaptime.innerHTML = laps.join(" ");
}