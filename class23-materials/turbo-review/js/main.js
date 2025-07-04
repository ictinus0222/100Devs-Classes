// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const sentence = 'Hey Motherfucker?';
alert(sentence.endsWith('?'));
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
 const devString = 'I am a Jr. Dev at #100Devs'

 let rightString = devString.replaceAll('Jr. Dev', 'Software Engineer');
 alert(rightString);
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
 
    let prob = Math.random();

    if(prob < .333) {
        return 'Rock';
    } else if (prob > .333 && prob < .666) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
alert(rockPaperScissor());
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin (playerChoice) {
    let botChoice = rockPaperScissor();
    if (playerChoice === 'Rock' && botChoice === 'Paper' || playerChoice === 'Paper' && botChoice === 'Scissors' || playerChoice === 'Scissors' && botChoice === 'Rock') {
        return 'Bot Wins';
    } else if (playerChoice === botChoice) {
        return 'Match Tied';
    } else {
        return 'You Win';
    }
}
alert(checkWin());

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
