var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemaining = 9;
var lettersGuessed = [];
var guessingLetters = null;


var computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];



function updateGuessesRemaining() {
    document.querySelector('#guessRemaining').innerHTML = "Guesses remaining: " + guessesRemaining;
};

function updateGuessingLetters() {
    this.guessingLetters = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessedAllready() {
    document.querySelector('#letterGuess').innerHTML = "What you have guessed so far: " + lettersGuessed.join(', ');
};

var reset = function() {
    totalGuesses = 9;
    guessesRemaining = 9;
    lettersGuessed = [];

    updateGuessingLetters();
    updateGuessesRemaining();
    updateGuessedAllready();
}

updateGuessingLetters();
updateGuessesRemaining();

document.onkeyup = function(event) {
    
    var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
        alert("Not a valid guess. Try again.");
    }

    else if (check === true) {
        guessesRemaining--;
        lettersGuessed.push(userGuess);
        updateGuessesRemaining();
        updateGuessedAllready();

        if (guessesRemaining > 0){
            if (userGuess == guessingLetters){
                wins++
                document.querySelector(wins).innerHTML = "Wins: " + wins;
                alert("The letter you guessed was " + guessingLetters + "that was the right letter!");
                reset();
            }
        }

        else if(guessesRemaining == 0){
            losses++;
            document.querySelector(losses).innerHTML = "Losses: " + losses;
            alert("The letter you were trying to guess was " + guessingLetters);
            reset();
        }
    }
};    
