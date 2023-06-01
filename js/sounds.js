export default function () {
  const buttonPressAudio = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')
  const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')

  
  const rainAudio = new Audio('audio/Chuva.wav')
  const cafeAudio = new Audio('audio/Cafeteria.wav')
  const indoorAudio = new Audio('audio/lareira.wav')
  const forestAudio = new Audio('audio/Floresta.wav')



  rainAudio.loop = true
  cafeAudio.loop = true
  indoorAudio.loop = true
  forestAudio.loop = true

  buttonPressAudio.volume = 0.35

  function pressButton() {
    buttonPressAudio.play()
  }

  function timerEnd() {
    kitchenTimer.play()
  }


 
  return {
    pressButton,
    timerEnd,
    forestAudio,
    rainAudio,
    cafeAudio,
    indoorAudio
  }
}