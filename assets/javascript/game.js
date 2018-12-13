// Word list
var wordOptions = [
    "STEVEN STAMKOS",
    "NIKITA KUCHEROV",
    "ANTON STRALMAN",
    "RYAN CALLAHAN",
    "ANDRE VASILEVSKIY",
    "VICTOR HEDMAN",
    "BRAYDEN POINT",
    "TYLER JOHNSON",
];



// Create variables that hold references to the places in the HTML where we want to display things.

// max number or guesses
TotalGuesses = 10;

// letters the player has guessed
var lettersGuessed = [];

// letters the player has guessed
var guessesRemaining = [];

// active word in wordOptions array
var activeWord;

// Total number of rounds user has won
var winsTotal = 0;


// This function is run whenever the user presses a key
document.onkeyup = function (event) {

// Determines which key was pressed.
var userGuess = event.key;


};