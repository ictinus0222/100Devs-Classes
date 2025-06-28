//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiplyArr(arr) {
    let prod = 1;
    arr.forEach(num => prod *= num);
    alert(prod);
}
multiplyArr([10,20,30]);