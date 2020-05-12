
let alarmSet = document.querySelector('#alarmSet');
let timeRemaining = document.querySelector('#timeRemaining');
let stopBtn = document.getElementById("stop")
let pauseBtn = document.getElementById("pause")
let setBtn = document.getElementById("set")

let setTimer
let input


function setAlarm() {

setTimer = setInterval(countDown, 1000);

//COUNTDOWN FUNCTION

  function countDown(){

    if (input > 0){

      let hours =  Math.floor(input / 3600);
      let minutes = Math.floor((input - hours * 3600)/60)
      let seconds = input - hours * 3600 -  minutes * 60;

      seconds < 10 ? seconds = ('0' + seconds.toString()).slice(-2) : 0
      minutes < 10 ? minutes = ('0' + minutes.toString()).slice(-2) : 0
      hours < 10 ? hours = ('0' + hours.toString()).slice(-2) : 0

      input > 3600 ? timeRemaining.textContent = `Time Remaining: ${hours}:${minutes}:${seconds}` : timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`

    
      input--;
    }
    else if (input === 0) {

      clearInterval(setTimer)
    }
  }
}


//STOP BUTTON

stopBtn.addEventListener('click', () => {

  clearInterval(setTimer)

});

//PAUSE BUTTON


pauseBtn.addEventListener('click', () => {

  if (setTimer === -1){
    
    setAlarm()
    pauseBtn.innerText = "Pause" 
  }else{
  
    clearInterval(setTimer)
    setTimer = -1
    pauseBtn.innerText = "Start"
  }
})

//SET ALARM BUTTON

setBtn.addEventListener("click", () => {
  clearInterval(setTimer)
  input = alarmSet.value;
  setAlarm();
});




