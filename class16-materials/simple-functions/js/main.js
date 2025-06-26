//---Easy
//create a function that subtracts two numbers and alerts the difference
function easyDiff (easyA, easyB) {
    alert(easyA - easyB)
}
easyDiff(20, 33)
//create a function that divides three numbers and console logs the quotient
function easyDiv (easyX, easyY, easyZ) {
    console.log (easyX / easyY / easyZ)
}
easyDiff(23, 11, 78)
//create a function that multiplys three numbers and returns the product
function easyMultiply (easyMa, easyMb, easyMc) {
    return easyMa * easyMb * easyMc
}
easyMultiply(34, 55, 99)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function mediumFunc (a, b, c) {
    let temp = a + b
    return temp % c
}
mediumFunc(24, 56, 77)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
