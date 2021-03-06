// window.onload = function () {

var players = [{
    name: "stamkos",
    image: "stamkos"
},

{
    name: "kucherov",
    image: "kucherov"
},
{
    name: "stralman",
    image: "stralman"
},
{
    name: "callahan",
    image: "callahan"
},
{
    name: "vasilevskiy",
    image: "vasilevskiy"
},
{
    name: "hedman",
    image: "hedman"
},
{
    name: "point",
    image: "point"
},
{
    name: "johnson",
    image: "johnson"
}
]

// Create variables that hold references to the places in the HTML where we want to display things.
var winsTotalText = document.getElementById("winsTotal");
var activeWordText = document.getElementById("activeWord");
var guessesRemainingText = document.getElementById("guessesRemaining");
var lettersGuessedText = document.getElementById("lettersGuessed");
var hintElement = document.getElementById("hangmanImg");
var tryAgainText = document.getElementById("tryAgain");
var youLoseText = document.getElementById("youLose");
var youWinText = document.getElementById("youWin");
var directionsTextElement = document.getElementById("directionsText");


//number of wins
var wins;

// Each letter the player guesses/userGuess is pushed into this array
var lettersGuessed = [];

// number of guesses remaining
var guessesRemaining;

// Array that holds the letters of the activeWord
var emptyWordArray = [];

// active word index of players array- number
var activeWordIndex = [Math.floor(Math.random() * players.length)];

// active word name/string based on the current index of players array
var activeWord = players[activeWordIndex].name;

//Array of all acceptable key strokes (ie only lowercase letters)
// var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var gamePlay = {

    startGame: function(){
        wins = 0;
        guessesRemaining = 10;
        TotalGuesses = 10;
        gamePlay.createEmptySpaces();
        gamePlay.displayHint();
        youLoseText.style.display = 'none';
        youWinText.style.display = 'none';
        tryAgainText.style.display = 'none';
        winsTotalText.textContent = wins;
        guessesRemainingText.textContent = guessesRemaining;
    },


    createEmptySpaces: function () {
        for (var i = 0; i < activeWord.length; i++) {
            emptyWordArray[i] = "_ ";
            activeWordText.textContent = emptyWordArray.join(' ');
        }

        console.log("Current word array: " + emptyWordArray);

        console.log("Current word: " + activeWord);

    },


    displayHint: function () {
        // for (var i = 0; i < players.length; i++) {
            hintElement.innerHTML = '<img src="assets/images/' + players[activeWordIndex].image + '.jpg">';
        // }
    },


    replaceEmptyWord: function() {
        for (var i = 0; i < activeWord.length; i++) {
            if (activeWord[i] === userGuess) {
                emptyWordArray[i] = userGuess;
                activeWordText.textContent = emptyWordArray.join(' ');
                //lettersRemaining--;
            }
    
        }
    },


}

gamePlay.startGame();

// Total number of rounds user has won
var winsTotal = 0;

// This function is run whenever the user presses a key
document.onkeyup = function (event) {

    // gamePlay.startGame();
    // gamePlay.createEmptySpaces();

    // Determines which key was pressed.
    var userGuess = event.key;

    // Hide the directions
    // directionsTextElement.textContent = "";
    directionsTextElement.style.display = 'none';
    

    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    lettersGuessedText.textContent = userGuess;
    gamePlay.replaceEmptyWord();

    // for (var i = 0; i < activeWord.length; i++) {
    //     if (activeWord[i] === userGuess) {
    //         emptyWordArray[i] = userGuess;
    //         activeWordText.textContent = emptyWordArray.join(' ');
    //         //lettersRemaining--;
    //     }

    // }

    // console.log(emptyWordArray);



}

