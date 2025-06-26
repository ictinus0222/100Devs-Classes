// *Variables*
// Create a variable and console log the value
let aRandomVariable = "yay, this is a random variable's value"
console.log(aRandomVariable)
// Create a variable, add 10 to it, and alert the value
let anotherRandomVariable = 35
anotherRandomVariable = anotherRandomVariable + 10
alert(Number(anotherRandomVariable))
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(a,b,c,d) {
    let diff = a - b - c - d
    alert(Number(diff)) 
}
// Create a function that divides one number by another and returns the remainder
function div(x,y) {
    return x % y
}
let remainder = div(23, 45)
alert(remainder)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2) {
    let sum = num1 + num2

    if(sum >= 50) {
        alert('Jumanji!!!')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mulThree(one, two, three) {
    let product = one * two * three

    if(product % 3 == 0) {
        alert('Zebra!!')
    }

}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function printXTimes (word, number) {
    for (let i = 0; i <= number; i++) {
        console.log(word)
    }
}