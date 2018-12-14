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
var winsTotalText = document.getElementById("winsTotal");
var activeWordText = document.getElementById("activeWord");
var guessesRemainingText = document.getElementById("guessesRemaining");
var lettersGuessedText = document.getElementById("lettersGuessed");
var hangmanImageElement = document.getElementById("");
var tryAgainText = document.getElementById("pressKeyTryAgain");
var directionsTextElement = document.getElementById("directionsText");




// max number or guesses
TotalGuesses = 10;

// Each letter the player guesses/userGuess is pushed into this array
var lettersGuessed = [];

// number of guesses remaining
var guessesRemaining = [];

// active word in wordOptions array
var activeWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

// Array that holds the letters of the activeWord
var emptyWordArray = [];
for (i = 0; i < activeWord.length; i++) {
    emptyWordArray[i] = "_";
}

console.log(emptyWordArray);

// Total number of rounds user has won
var winsTotal = 0;

// This function is run whenever the user presses a key
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Hide the directions
    directionsTextElement.textContent = "";

    // lettersGuessed.forEach()
    lettersGuessed.push(userGuess);
    lettersGuessed.textContent = userGuess;



};