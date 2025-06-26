document.querySelector('#check').addEventListener('click', checkDay)


function checkDay() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerText = "This is the Weeknd"
  } else if (day === 'tuesday' || day === 'Thursday') {
    document.querySelector('#placeToSee').innerText = "Today is Class Day!"
  } else {
    document.querySelector('#placeToSee').innerText = "Boring Day"
  }
}
