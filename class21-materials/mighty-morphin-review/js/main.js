// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let bestday = "DIWALI";
bestday = bestday.toUpperCase();
console.log(bestday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let strVar = "heybuddy";
alert(strVar.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeFive(n1, n2, n3, n4, n5) {
    diff = 100 - n1 - n2 - n3 - n4 - n5;
    console.log(Math.abs(diff));
}
takeFive(1,2,8,8,9);


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function highsAndLows(n1,n2,n3) {
    let max = Math.max(n1,n2,n3);
    let min = Math.min(n1,n2,n3);
    console.log(`The lowest number is ${min} and the highest number is ${max}`);
}
highsAndLows(23,889,8888);


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const headsOrTails = _ => Math.random() < .5 ? "Heads" : "Tails"
    // console.log(headsOrTails());


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipFlip(x) {
    for (let i = 1; i <= x; i++) {
        let result = headsOrTails();
        console.log(result);
    }
    
}

function boleMereLips() {
    return "I love Uncle Chips";
}