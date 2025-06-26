// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let declaredVar = "Bwahaha"
declaredVar = "Chicken Roll"
alert(declaredVar);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newVar;
newVar = 'Hey Buddy';;
alert(newVar.charAt(1));
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function takeThree(one, two, three){
    return ((one / two) * three);
}
alert(takeThree);
takeThree(3, 7, 9);


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function takeOne(oneNum){
    let cbrt = Math.cbrt(oneNum);
    console.log(cbrt);
}
takeOne(23);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function takeMonth(month){
    let monthLowerCase = month.toLowerCse()
    if(monthLowerCase == 'may' || 'june' || 'july' || 'August'){
        alert('YAY');
    } else {
        alert('BOO')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(number){
    for (let i = 1; i <= number; i++){
        if (i % 5 != 0) {
            console.log(i);
        }
    }
}