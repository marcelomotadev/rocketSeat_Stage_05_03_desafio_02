import Sounds from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function playTimer() {

    timerTimeOut = setTimeout( function() {
    
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
  
      if(minutes <= 0 && seconds <= 0) {
        updateDisplay()
        Sounds().timerEnd()
        return
      }
  
      if(seconds <= 0) {
        seconds = 60
        --minutes
      }
      
      updateDisplay(minutes, seconds - 1)
    
      playTimer()
    }, 1000)
  
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
  playTimer,
  reset,
  updateDisplay,
  updateMinutes,
  hold
  }
}