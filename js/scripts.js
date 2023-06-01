import Timer from "./timer.js"
import Sound from './sounds.js'

const playButton = document.querySelector('.play')
const stopButton = document.querySelector('.stop')
const addButton = document.querySelector('.add')
const removeButton = document.querySelector('.remove')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const forestCard = document.querySelector('#forest')
const rainCard = document.querySelector('#rain')
const cafeCard = document.querySelector('#cafe')
const indoorCard = document.querySelector('#indoor')

const lightModeButton = document.querySelector('.lightButton')
const darkModeButton = document.querySelector('.darkButton')

const forestRange = document.getElementById('forestVolume')
const rainRange = document.getElementById('rainVolume')
const cafeRange = document.getElementById('cafeVolume')
const indoorRange = document.getElementById('indoorVolume')

const html = document.querySelector('html')

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sound = Sound()



addButton.addEventListener('click', function(){
  addMinutes()
  sound.pressButton()
})
removeButton.addEventListener('click', function(){
  removeMinutes()
  sound.pressButton()
})
playButton.addEventListener('click', function() {
  timer.playTimer()
  sound.pressButton()
})
stopButton.addEventListener('click', function(){
  timer.hold()
  sound.pressButton()
})

forestCard.addEventListener('click', function() {
  forestCard.classList.toggle('playing')
  sound.forestAudio.paused == true ? sound.forestAudio.play() : sound.forestAudio.pause()
  sound.forestAudio.volume = 0.5
  forestRange.value = 50
  if(!forestCard.classList.contains('playing')) {
    forestRange.value = 0
  }
  sound.pressButton()
})
forestRange.addEventListener('click', function(event){
  event.stopPropagation()
  const volume = forestRange.value / 100;
  sound.forestAudio.volume = volume
  if(forestCard.classList.contains('playing')){
    sound.forestAudio.play()
  }
})

rainCard.addEventListener('click', function() {
  rainCard.classList.toggle('playing')
  sound.rainAudio.paused == true ? sound.rainAudio.play() : sound.rainAudio.pause()
  sound.rainAudio.volume = 0.5
  rainRange.value = 50
  if(!rainCard.classList.contains('playing')) {
    rainRange.value = 0
  }
  sound.pressButton()
})
rainRange.addEventListener('click', function(event){
  event.stopPropagation()
  const volume = rainRange.value / 100;
  sound.rainAudio.volume = volume
  if(rainCard.classList.contains('playing')){
    sound.rainAudio.play()
  }
})

cafeCard.addEventListener('click', function() {
  cafeCard.classList.toggle('playing')
  sound.cafeAudio.paused == true ? sound.cafeAudio.play() : sound.cafeAudio.pause()
  sound.cafeAudio.volume = 0.5
  cafeRange.value = 50
  if(!cafeCard.classList.contains('playing')) {
    cafeRange.value = 0
  }
  sound.pressButton()
})
cafeRange.addEventListener('click', function(event){
  event.stopPropagation()
  const volume = cafeRange.value / 100;
  sound.cafeAudio.volume = volume
  if(cafeCard.classList.contains('playing')){
    sound.cafeAudio.play()
  }
})

indoorCard.addEventListener('click', function() {
  indoorCard.classList.toggle('playing')
  sound.indoorAudio.paused == true ? sound.indoorAudio.play() : sound.indoorAudio.pause()
  sound.indoorAudio.volume = 0.5
  indoorRange.value = 50
  if(!indoorCard.classList.contains('playing')) {
    indoorRange.value = 0
  }
  sound.pressButton()
})
indoorRange.addEventListener('click', function(event){
  event.stopPropagation()
  const volume = indoorRange.value / 100;
  sound.indoorAudio.volume = volume
  if(indoorCard.classList.contains('playing')){
    sound.indoorAudio.play()
  }
})




lightModeButton.addEventListener('click', function() {
  html.classList.toggle('darkMode')
  lightModeButton.classList.toggle('hide')
  darkModeButton.classList.toggle('hide')
})
darkModeButton.addEventListener('click', function() {
  html.classList.toggle('darkMode')
  lightModeButton.classList.toggle('hide')
  darkModeButton.classList.toggle('hide')
})

function addMinutes() {
  let minutesHold = Number(minutesDisplay.textContent)
  minutesHold % 5 == 0 ? minutesHold += 5 : minutesHold = 25
  secondsDisplay.textContent = String(0).padStart(2,'0')
  return minutesDisplay.textContent = String(minutesHold).padStart(2, '0')
}

function removeMinutes() {
  let minutesHold = Number(minutesDisplay.textContent)
  minutesHold % 5 == 0 ? minutesHold -= 5 : minutesHold = 25
  if(minutesHold >= 5) {
    secondsDisplay.textContent = String(0).padStart(2,'0')
    return minutesDisplay.textContent = String(minutesHold).padStart(2, '0')
  }
  else {
    secondsDisplay.textContent = String(0).padStart(2,'0')
    return minutesDisplay.textContent = String(25).padStart(2, '0')
  }
}
