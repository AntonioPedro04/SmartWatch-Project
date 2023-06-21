
timerElement = document.querySelector('.timer')

timerElement.innerHTML = '00:00:00'

let count = 0

let Hours = 0
let Minutes = 0
let Seconds = 0

setInterval(function() {
  

   count += 1

   Seconds = count % 60

   Minutes = Math.floor(count/60)
   
   Minutes = Minutes % 60

   Hours = Math.floor(count/3600)

   Seconds = toString(Seconds)
   Minutes = toString(Minutes)
   Hours = toString(Hours)
  



   timerElement.innerHTML = `${Hours}:${Minutes}:${Seconds}`

 



}, 1000)


function toString(param) {
  if (param < 10) {
    param = '0' + param
  } else {
    param = param
  }
  return param
}