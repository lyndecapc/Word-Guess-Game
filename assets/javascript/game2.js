//possible words for hangman game//
var wordList = [
  "SHELDON",
  "LEONARD",
  "RAJ",
  "HOWARD",
  "PENNY",
  "BERNADETTE",
  "PHYSICS",
  "THEORETICAL",
  "BAZINGA",
  "TRAINS",
  "COMICS",
  "SPOCK",
  "BRISKET",
  "NERDS",
  "EIDETIC"
];

//letters for player to choose//
var choices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//randomly chooses word for player to guess//
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

//check to make sure random word works
console.log("Secret Word: " + randomWord);

var wins = 0;
var attempts = 10;

// this array will store the letters already guessed
var guesses = [];

// this array will store the secret word
var secretWord = [];

// this array will hold the computer word to check for a win
var computerWord = [];

// this function will reset the game after a win or loss
function resetGame() {
  console.log("------------------------------------------------");

  attempts = 10;
  attemptsText.textContent = attempts;

  guesses = [];
  guessesText.textContent = guesses;

  // picking a new word from the array
  randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  console.log("Secret Word: " + randomWord);

  // resetting arrays for comparison
  secretWord = [];
  computerWord = [];

  for (var i = 0; i < randomWord.length; i++) {
    secretWord.push("-");
  }
  display.textContent = secretWord.join("");

  for (var i = 0; i < randomWord.length; i++) {
    computerWord.push(randomWord[i]);
  }

  return attempts, guesses, randomWord, secretWord, computerWord;
}

// function to check if hiddenWord and computerWord are identical
function checkArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// assigning variables to the HTML elements we're changing
var winsText = document.getElementById("wins");
var displayText = document.getElementById("display");
var attemptsText = document.getElementById("attempts");
var guessesText = document.getElementById("guesses");

for (var i = 0; i < randomWord.length; i++) {
  secretWord[i] = "-";
}
display.textContent = secretWord.join("");

for (var i = 0; i < randomWord.length; i++) {
  computerWord[i] = randomWord[i];
}

document.onkeyup = function(event) {
  var letter = event.key.toLowerCase();

  // checking that the input is a letter and has not already been guessed
  if (choices.indexOf(letter) > -1 && guesses.indexOf(letter) < 0) {
    // checking if the input is in the computer's word
    if (computerWord.indexOf(letter) > -1) {
      // replacing the "-" in the hidden word with the correct letter
      for (var i = 0; i < computerWord.length; i++) {
        if (letter == computerWord[i]) {
          secretWord[i] = letter;
          display.textContent = secretWord.join("");
        }
      }

      // updating the guessed letters
      guesses += letter;
      guessesText.textContent = guesses;

    } else {
      // lose an attempt for an incorrect guess
      attempts -= 1;
      attemptsText.textContent = attempts;
    }

    // conditions for a win
    if (checkArrays(secretWord, computerWord)) {
      wins += 1;
      winsText.textContent = wins;
      resetGame();
    }
    // conditions for a loss
    if (attempts === 0) {
      resetGame();
    }
  }
};
