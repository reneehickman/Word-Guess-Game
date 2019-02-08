// window.onload = function () {

var gamePlay = {

players: {
    stamkos: {
        name: "stamkos",
        image: "stamkos"
    },

    kucherov: {
        name: "kucherov",
        image: "kucherov"
    },
    
    stralman: {
        name: "stralman",
        image: "stralman"
    },
    
    callahan: {
        name: "callahan",
        image: "callahan"
    },
    
    vasilevskiy: {
        name: "vasilevskiy",
        image: "vasilevskiy"
    },
    
    hedman: {
        name: "hedman",
        image: "hedman"
    },
    
    point: {
        name: "point",
        image: "point"
    },
    
    johnson: {
        name: "johnson",
        image: "johnson"
    }
},

// Create variables that hold references to the places in the HTML where we want to display things.
// var winsTotalText: document.getElementById("winsTotal");
// var activeWordText = document.getElementById("activeWord");
// var guessesRemainingText = document.getElementById("guessesRemaining");
// var lettersGuessedText = document.getElementById("lettersGuessed");
// var hintElement = document.getElementById("hangmanImg");
// var tryAgainText = document.getElementById("tryAgain");
// var youLoseText = document.getElementById("youLose");
// var youWinText = document.getElementById("youWin");
// var directionsTextElement = document.getElementById("directionsText");

//variables that set state of game
wins: 0,
// Each letter the player guesses/userGuess is pushed into this array
lettersGuessed: [],
// number of guesses remaining
guessesRemaining: 0,
// Array that holds the letters of the activeWord
activeLettersInWord: [],
correctLetters: [],
totalGuesses: 0,
activeWord: null,
letterGuessed: null,


setupGame: function() {

    // Update wins on the page.
    document.querySelector("#winsTotal").innerHTML = this.wins;
    
    //pick random word
    var keys = Object.keys(this.players);    
    this.activeWord = keys[Math.floor(Math.random() * keys.length)];

    // Split active word into individual letters
    this.activeLettersInWord = this.activeWord.split("");

    // Update the image of player
    document.querySelector("#hangmanImg").innerHTML = '<img src="assets/images/' + this.players[this.activeWord].image + '.jpg">';

    document.querySelector("#tryAgain").style.display = 'none';
    document.querySelector("#youLose").style.display = 'none';
    document.querySelector("#youWin").style.display = 'none';
    
    //create underscores and bulid and display word
    this.rebuildWord();
    
    //sets the number of guesses the user gets, and renders it to the HTML.
    this.updateTotalGuesses();
},


// This function is run whenever the user guesses a letter..
updatePage: function(letter) {
    // If the user has no guesses left, restart the game.
    if (this.guessesRemaining === 0) {
      this.restartGame();
    }
    // Otherwise...
    else {
      // Check for and handle incorrect guesses.
      this.updateGuesses(letter);

      // Check for and handle correct guesses.
      this.updateCorrectLetters(letter);

      // Rebuild the view of the word. Letters guessed are revealed, non-guessed letters have a "_".
      this.rebuildWord();

      // If the user wins, restart the game.
      if (this.updateWins() === true) {
        this.restartGame();
      }
    }

  },


  // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
  updateGuesses: function(letter) {
    // If the letter is not in the lettersGuessed array, and the letter is not in the activeLettersInWord array..
    if ((this.lettersGuessed.indexOf(letter) === -1) && (this.activeLettersInWord.indexOf(letter) === -1)) {

      // Add the letter to the guessedLetters array.
      this.lettersGuessed.push(letter);

      // Decrease guesses by one.
      this.guessesRemaining--;

      // Update guesses remaining and guesses letters on the page.
      document.querySelector("#guessesRemaining").innerHTML = this.guessesRemaining;
      document.querySelector("#lettersGuessed").innerHTML = this.lettersGuessed.join(", ");
    }
  },


  // This function sets the initial guesses the user gets.
  updateTotalGuesses: function() {
    // The user will get more guesses the longer the word is.
    this.totalGuesses = this.activeLettersInWord.length + 2;
    this.guessesRemaining = this.totalGuesses;

    // Render the guesses left to the page.
    document.querySelector("#guessesRemaining").innerHTML = this.guessesRemaining;
  },

  // This function governs what happens if the user makes a successful guess.
  updateCorrectLetters: function(letter) {
    // Loop through the letters of the "solution".
    for (var i = 0; i < this.activeLettersInWord.length; i++) {
      // If the guessed letter is in the solution, and we haven't guessed it already..
      if ((letter === this.activeLettersInWord[i]) && (this.correctLetters.indexOf(letter) === -1)) {
        // Push the newly guessed letter into the correctLetters array.
        this.correctLetters.push(letter);
      }
    }
  },


  // This function builds the display of the word that is currently being guessed.
  rebuildWord: function() {
    // We start with an empty string.
    var word = "";

    // Loop through the letters of the word we are trying to guess..
    for (var i = 0; i < this.activeLettersInWord.length; i++) {
      // If the current letter has been guessed, display that letter.
      if (this.correctLetters.indexOf(this.activeLettersInWord[i]) !== -1) {
        word += this.activeLettersInWord[i];
      }
      // If it hasn't been guessed, display a "_" instead.
      else {
        word += "&nbsp;_&nbsp;";
      }
    }

    // Update the page with the new string we built.
    document.querySelector("#activeWord").innerHTML = word;
  },


// Function that "restarts" the game by resetting all of the variables.
restartGame: function() {
    document.querySelector("#lettersGuessed").innerHTML = "";
    this.activeWord = null;
    this.activeLettersInWord = [];
    this.correctLetters = [];
    this.lettersGuessed = [];
    this.guessesRemaining = 0;
    this.totalGuesses = 0;
    this.letterGuessed = null;
    this.setupGame();
    this.rebuildWord();
  },

  // Function that checks to see if the user has won.
  updateWins: function() {
    var win;

    // this won't work for words with double or triple letters
    // var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
    // this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')

    // If you haven't correctly guessed a letter in the word yet, we set win to false.
    if (this.correctLetters.length === 0) {
      win = false;
    }
    // Otherwise, we set win to true.
    else {
      win = true;
    }

    // If a letter appears in the activeLettersInWord array, but not in the correctLetters array, set win to false.
    for (var i = 0; i < this.activeLettersInWord.length; i++) {
      if (this.correctLetters.indexOf(this.activeLettersInWord[i]) === -1) {
        win = false;
      }
    }

    // If win is true...
    if (win) {

      // Increment wins.
      this.wins = this.wins + 1;

      // Update wins on the page.
      document.querySelector("#winsTotal").innerHTML = this.wins;

      // return true, which will trigger the restart of our game in the updatePage function.
      return true;
    }
    // If win is false, return false to the updatePage function. The game goes on!
    return false;
  }
};

// Initialize the game when the page loads.
gamePlay.setupGame();

// When a key is pressed..
document.onkeyup = function(event) {

document.querySelector("#directionsText").style.display = 'none';
  // Capture pressed key and make it lowercase.
  gamePlay.letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // Pass the guessed letter into our updatePage function to run the game logic.
  gamePlay.updatePage(gamePlay.letterGuessed);
};




