

    // Word list
    var wordOptions = {
            'stamkos': 'img/stamkos.jpg', 
            'kucherov': 'img/kucherov.jpg', 
            'stralman': 'img/stralman.jpg', 
            'callahan': 'img/callahan.jpg', 
            'vasilevskiy': 'img/vasilevskiy.jpg', 
            'hedman': 'img/hedman.jpg', 
            'point': 'img/point.jpg', 
            'johnson': 'img/johnson.jpg', 
        };

        


    // Create variables that hold references to the places in the HTML where we want to display things.
    var winsTotalText = document.getElementById("winsTotal");
    var activeWordText = document.getElementById("activeWord");
    var guessesRemainingText = document.getElementById("guessesRemaining");
    var lettersGuessedText = document.getElementById("lettersGuessed");
    var hintElement = document.getElementById("");
    var tryAgainText = document.getElementById("pressKeyTryAgain");
    var directionsTextElement = document.getElementById("directionsText");

    hintElement.innerHTML = "<img src='"+wordOptions["point"]+"'>";

    // max number of guesses
    var TotalGuesses = 10;

    // Each letter the player guesses/userGuess is pushed into this array
    var lettersGuessed = [];

    // number of guesses remaining
    var guessesRemaining = [];

    // active word in wordOptions array
    var activeWord = "";

    //Array of all acceptable key strokes (ie only lowercase letters)
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        function startGame(){

            var emptyWordArray = [];

            var activeWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

    // Array that holds the letters of the activeWord 
    //Creates underscores for the active word at the start
    var emptyWordArray = [];
    function createUnderscore(){ 
    for (var i = 0; i < activeWord.length; i++) {
        emptyWordArray[i] = "_ ";
        activeWordText.textContent = emptyWordArray.join(' ');
    }
    return emptyWordArray;
}

    console.log(emptyWordArray);

    console.log(activeWord);

    // Total number of rounds user has won
    var winsTotal = 0;



    // This function is run whenever the user presses a key
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        // Hide the directions
        directionsTextElement.textContent = "";
        letterGuessed = String.fromCharCode(event.which).toLowerCase();

        lettersGuessedText.textContent = userGuess;

        
        for (var j = 0; j < activeWord.length; j++) {
            if (activeWord[j] === userGuess) {
                emptyWordArray[j] = userGuess;
                activeWordText.textContent = emptyWordArray.join(' ');//if 
                //lettersRemaining--;
            }
            return 

        }

        console.log(emptyWordArray);



    }
        }
