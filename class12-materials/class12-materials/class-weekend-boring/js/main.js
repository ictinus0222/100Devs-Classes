document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value


  //Make it not Case Sensitive
  //1. add every possibility in the condition 

  if (day === 'Saturday' || day === 'saturday' || day ==='SATURDAY' || day === 'Sunday' || day === 'sunday' || day === 'SUNDAY') {
    document.querySelector('#placeToSee').innerText = "This is the Weeknd"
    document.querySelector('body').style.backgroundColor = 'blue'

  } else if (day === 'Thursday' || day === 'thursday' || day ==='THURSDAY' || day === 'Tuesday' || day === 'tuesday' || day === 'TUESDAY') {
    document.querySelector('#placeToSee').innerText = "This is a Class Day!"
  } else {
    document.querySelector('#placeToSee').innerText = "BOOOOORING DAYY!!!"
  }

}
