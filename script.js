
timerElement = document.querySelector('.timer')

timerElement.innerHTML = '00:00:00'

let count = 0
let Minutes = 0
let Seconds = 0
let Miliseconds = 0

started = false
let intervalId;

function play() {

     if (!started) { intervalId = setInterval(function() {
      count += 1
  
      Miliseconds = count % 100
  
      Seconds = Math.floor(count/100)
      Seconds = Seconds % 60
  
      Minutes = Math.floor(count/6000)
  
      Miliseconds = toString(Miliseconds)
      Seconds = toString(Seconds)
      Minutes = toString(Minutes)
    
      timerElement.innerHTML = `${Minutes}:${Seconds}:${Miliseconds}`
      
    }, 10)
    started = true
  } else {
  
  }
  }

function stop() {
  clearInterval(intervalId)
  started = false
}

function reset() {
  timerElement.innerHTML = '00:00:00'

  clearInterval(intervalId)
  started = false
  count = 0
  Miliseconds = 0
  Seconds = 0
  Minutes = 0
  
}
      
       


function toString(param) {
  if (param < 10) {
    param = '0' + param
  } else {
    param = param
  }
  return param
}

document.querySelector('.js-start-button')
  .addEventListener('click', () => {
    play();
  })

document.querySelector('.js-stop-button')
  .addEventListener('click', () => {
    stop();
})

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    reset();
})
