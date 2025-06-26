document.getElementById('black').onclick = partyBlack
document.getElementById('red').onclick = partyRed
document.getElementById('blue').onclick = partyBlue
document.getElementById('green').onclick = partyGreen
document.getElementById('purple').onclick = partyPurple

function partyBlack() {
  document.querySelector('body').style.backgroundColor = 'black'
  document.querySelector('body').style.color = 'red'
}
function partyRed() {
  document.querySelector('body').style.color = 'blue'
  document.querySelector('body').style.backgroundColor = 'red'
}
 function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}
function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'Green'
  document.querySelector('body').style.color = 'white'
}
function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'purple'
  document.querySelector('body').style.color = 'white'
}