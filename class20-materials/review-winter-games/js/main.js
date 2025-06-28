//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function makeNewEvenArray(oldArr) {
    let newArr = [];
    
    oldArr.forEach(n => {
        if(n % 2 === 0){
            newArr.push(n);
        }
    });
    alert(newArr);
}

makeNewEvenArray([0,1,2,3,4,5,6,7,8,9,10])