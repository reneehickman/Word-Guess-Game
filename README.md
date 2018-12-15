# Word-Guess-Game

### Press a letter and try to guess the word before your number of guesses run out! 

The hangman game is very helpful in better understanding loops and conditionals. Breaking down the game logic into small psuedocode steps is very helpful. Here were my steps below:

##### Psuedocoding steps below:
- The computer picks a random word from the wordoptions array to use as the active/currentWord.

- while the word has not been guessed the player will be able to see their current progress while the computer waits for a key input from the player. 

- Check that the player’s guess is a valid letter in the active/current word and if true, push that letter into the empty/underscore array.

- We can keep track of the different letters the player has guessed by pushing each valid keypress into the empty lettersGuessed array.

- Reset game and start a new round when the player has guessed the word or runs out of guesses. 

- Wins and losses increase depending on whether the player guesses each letter of the active word in the set number of guesses.




