const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', yell)

function yell () {
  const firstName = document.querySelector('#firstName').value
  const firstMiddle = document.querySelector('#firstMiddle').value
  const lastMiddle = document.querySelector('#lastMiddle').value
  const lastName = document.querySelector('#lastName').value

  let yellText = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`
  document.querySelector('#placeToYell').innerText = yellText

  const yellThis = new SpeechSynthesisUtterance(yellText)

  synth.speak(yellThis)
}