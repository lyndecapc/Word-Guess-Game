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

var directionsText = document.getElementById("directions");
var displayText = document.getElementById("display");
var attemptsText = document.getElementById("attempts");
var guessesText = document.getElementById("guesses");
var winsText = document.getElementById("wins");

var attempts = 10;
var wins = 0;
var guesses = [];
var secretWord = [];
var computerWord = [];

secretWord = [];
computerWord = [];

//spaces for secret word letters//

for (var i = 0; i < randomWord.length; i++) {
  secretWord[i] = "-";
}
displayText.textContent = secretWord.join("");

for (var i = 0; i < randomWord.length; i++) {
  secretWord[i] = randomWord[i];
}

document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();
  };


//number of guesses player has//
attempts = 10;
attemptsText.textContent = attempts;




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

guesses += letters;
guessesText.textContent = guesses;

//    else {

// updating the guessed letters
guesses += letters;
guessesText.textContent = guesses;

// conditions for a win
if (checkArrays(secretWord, computerWord)) {
  wins += 1;
  winsText.textContent = wins;
}
// conditions for a loss
if (attempts === 0) {
  resetGame();
}

// lose an attempt for an incorrect guess//
attempts -= 1;
attemptsText.textContent = attempts;


