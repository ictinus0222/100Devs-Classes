//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

let age = 25

if (age < 16) {
    alert('You cannot Drive Buddy!')
} else if (age < 18) {
    alert("Can't take hate from outside the club")
} else if (age < 21) {
    alert("You won't get a drink!")
} else if (age < 25) {
    alert("You can't rent cars affordably...")
} else if(age < 30) {
    alert("You'll have a hard time renting Fancy cars.")
} else {
    alert("There's nothing left to look forward too buddy!")
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click', paste)

function paste () {
    let h1Age = document.querySelector('#danceDanceRevolution').value
    document.querySelector('p').innerText = h1Age
}
