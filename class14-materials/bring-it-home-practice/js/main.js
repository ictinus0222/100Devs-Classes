// *Variables*
// Create a variable and console log the value
let nothingToThinkBout = '12345';

console.log(nothingToThinkBout)

// Create a variable, add 10 to it, and alert the value
let aVariableToAddTen = 20;

aVariableToAddTen = Number(aVariableToAddTen) + 10

alert(aVariableToAddTen)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function aFunctionToSubFour(aVariableToSubFour){
    aVariableToSubFour = Number(aVariableToSubFour) - 4;

    alert(aVariableToSubFour)

}

// Create a function that divides one number by another and returns the remainder
function aFunctionForDivision(varA,varB){
    let div = varA % varB
    alert(div)
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// function with two variables --> add variables --> check sum if greater than 50? -->if yes, alert Jumanji
function checkJumanji(a,b) {
    let sum = a + b
    alert(sum)
    if(sum >=50) {
        alert('JUMANJI!!!')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
// function with 3 var --> multiply var --> check if dividible by 3 --> if yes, alert ZEBRA
function checkZebra(x,y,z){
    let product = x * y * z
    alert(product)
    if(product % 3 == 0) {
        alert('ZEBRA!!!')
    }
}