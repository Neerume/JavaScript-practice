const display = document.getElementById("display");
let timer = null;
let startTime=0;
let elapsedTime = 0;
let isRunning=false;

function start(){
  if(!isRunning){
    startTime = Date.now()-elapsedTime;
    timer = setInterval(update,10);
    isRunning=true;
  }
}
function stop(){
  if(isRunning){
    clearInterval(timer);
    isRunning=false;
  }
}
function reset(){
  clearInterval(timer); //stops the time 
  isRunning=false;
  elapsedTime=0;
  display.textContent="00:00:00:00";
}
function update(){
 const currentTime= Date.now();
  elapsedTime=currentTime-startTime;

  let hours= Math.floor(elapsedTime/(1000*60*60)) //converting ms into hrs
  let minutes = Math.floor(elapsedTime/(1000*60)%60); //to change to min
  let sec = Math.floor(elapsedTime/1000%60); //converting into sec
  let miliseconds =Math.floor(elapsedTime%1000/10);

  display.textContent=`${hours}:${minutes}:${sec}:${miliseconds}`
}