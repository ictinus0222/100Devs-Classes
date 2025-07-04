//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let array = [1,2,3,4,5,6,7,8,9,0];

let sum = array.reduce((acc,c) => acc + c , 0);
alert(sum);


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = array.map(num = num ** 2);
alert(newArr);
//Create a function that takes string
//Print the reverse of that string to the console
let unoReverse = str => console.log(str.split('').reverse().join(''));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeCheck = str => console.log(str === unoReverse(str));
console.log(palindromeCheck('racecar'));