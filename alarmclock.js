
  let alarmSet = document.querySelector('#alarmSet');
  let timeRemaining = document.querySelector('#timeRemaining');
  let stopBtn = document.getElementById("stop")
  let pauseBtn = document.getElementById("pause")
  let setTimer
  let input
function setAlarm() {
 setTimer = setInterval(countDown, 1000);
  function countDown(){

    if (input > 3600){
      let hours =  Math.floor(input / 3600);
      let minutes = Math.floor((input - hours * 3600)/60)
      let seconds = input - hours * 3600 -  minutes * 60;
      
      seconds < 10 ? seconds = ('0' + seconds.toString()).slice(-2) : 0
      minutes < 10 ? minutes = ('0' + minutes.toString()).slice(-2) : 0
      hours < 10 ? hours = ('0' + hours.toString()).slice(-2) : 0
      timeRemaining.textContent = `Time Remaining: ${hours}:${minutes}:${seconds}`;
      input--;

    } else if (input>= 1 && input <= 3600){
      let minutes = Math.floor(input / 60);
      let seconds = input - minutes * 60;
      seconds < 10 ? seconds = ('0' + seconds.toString()).slice(-2) : 0
      minutes < 10 ? minutes = ('0' + minutes.toString()).slice(-2) : 0
      timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;

      input--;

    }
    else if (input === 0) {
      timeRemaining.textContent = `Time Remaining: 00:00`;

      clearInterval(setTimer)
    }
  }
}


  stopBtn.addEventListener('click', () => {

    clearInterval(setTimer)

  });

 
  pauseBtn.addEventListener('click', () => {

    if (setTimer === -1){
      
      setAlarm()
      pauseBtn.innerText = "Pause" 
    }else{
      pauseBtn.innerText = "Start"
   
      clearInterval(setTimer)

      setTimer = -1
    }
  })

  document.getElementById("set").addEventListener("click", () => {
    clearInterval(setTimer)
    input = alarmSet.value;
    setAlarm();
  });




