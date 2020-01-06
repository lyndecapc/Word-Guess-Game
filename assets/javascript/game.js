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
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

//randomly chooses word for player to guess//
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

//check to make sure random word works
console.log("Secret Word: " + randomWord);

var directionsText = document.getElementById("directions-text");
var secretWordText = document.getElementById("secretword-text");
var remainingguessesText = document.getElementById("remainingguesses-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");
var winsText = document.getElementById("wins-text");

var remainingGuesses = 10;
var wins = 0;
var lettersGuessed = [];
var secretWord = [];
var gameWord = [];

secretWord = [];
gameWord = [];

//spaces for secret word letters//

for (var i = 0; i < randomWord.length; i++) {
  secretWord[i] = "-";
}
secretWordText.textContent = secretWord.join("");

for (var i = 0; i < randomWord.length; i++) {
  secretWord[i] = randomWord[i];
}

document.onkeyup = function(event) {
    lettersGuessed = event.key.toUpperCase();
  };

//number of guesses player has//
remainingGuesses = 10;
remainingguessesText.textContent = remainingGuesses;




if (
  letters.indexOf(lettersGuessed) > -1 &&
  lettersGuessed.indexOf(lettersGuessed) < 0
) {
  if (secretWord.indexOf(lettersGuessed) > -1) {
    for (var i = 0; i < secretWord.length; i++) {
      if (lettersGuessed == secretWord[i]) {
        secretWord[i] = lettersGuessed;
        secretWordText.textContent = secretWord.join("");
      }
    }
  }
}

lettersGuessed += letters;
lettersGuessedText.textContent = lettersGuessed;

//    else {

// updating the guessed letters
lettersGuessed += letters;
lettersGuessedText.textContent = lettersGuessed;

// conditions for a win
if (checkArrays(secretWord, randomWord)) {
  numWins += 1;
  winsText.textContent = numWins;
}
// conditions for a loss
if (remainingGuesses === 0) {
  resetGame();
}

// lose an attempt for an incorrect guess//
remainingGuesses -= 1;
remainingguessesText.textContent = remainingGuesses;

lettersGuessed = [];
lettersGuessedText.textContent = lettersGuessed;
