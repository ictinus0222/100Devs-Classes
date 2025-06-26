
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Carousel!");


function getNumberOfTurns() {
    readline.question('How many turns would you like? ', (input) => {
        const numTurns = parseInt(input);
        
        if (isNaN(numTurns) || numTurns <= 0) {
            console.log("Please enter a positive number of turns.");
            getNumberOfTurns(); // Ask again
        } else {
            startCarousel(numTurns);
        }
    });
}


function startCarousel(numTurns) {
    console.log(`Starting the carousel for ${numTurns} turns...`);
    
    for (let turn = 1; turn <= numTurns; turn++) {
        console.log(`Turn ${turn} of the carousel`);
    }
    
    console.log("The carousel has stopped. Hope you enjoyed the ride!");
    readline.close();
}

// Start the program
getNumberOfTurns();