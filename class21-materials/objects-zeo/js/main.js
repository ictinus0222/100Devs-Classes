//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    color: "Blue",
    brand: "casio",
    time: "1200 hours"
}

stopwatch.brand = "Nike"
stopwatch.time = "1300 Hours"
stopwatch.color = "Black"
stopwatch.size = "45mm"

stopwatch.sayBrand = function () {
    console.log(stopwatch.brand);
}
stopwatch.startTimer = function() {
    console.log("STARTINGGGGG!");
}
stopwatch.stopTimer = function(){
    console.log("Stopped.");
}