//Arrays

//Create an array of tv shows. Loop through and print each show to the console
let favShows = ['Sucession','Severance','Breaking Bad','The Bear']

for(let i = 0; i < favShows.length; i++) {
    console.log(favShows[i]);
}
//Create an array of numbers
let oldArr = [1,3,4,5,6,23297,83,65656,1038];
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = oldArr => oldArr.filter(n => n % 2 == 0) 
console.log(onlyEvens(oldArr))
//Create a function that takes in an array of numbers
function sumSecondLowAndHigh(arrOfNum){
    let sorted = arrOfNum.sort((a,b) => a-b);
    alert(sorted[1] + sorted[sorted.length - 2]);
}
//Alert the sum of the second lowest and the second highest number
sumSecondLowAndHigh([2,355566,68,45767,574,6754,7,34,54,737,27,6,1,1,17,68,8,678,56,])