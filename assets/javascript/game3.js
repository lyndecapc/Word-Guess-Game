//GLOBAL VARIABLES
//===============================================================================

//ARRAYS and VARIABLES FOR HOLDING DATA
//===============================================================================
var wordList = [
  "sheldon",
  "leonard",
  "raj",
  "howard",
  "penny",
  "bernadette",
  "physics",
  "theoretical",
  "bazinga",
  "trains",
  "comics",
  "spock",
  "brisket",
  "nerds",
  "eidetic"
];

var secretWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 8;

//FUNCTIONS
//===============================================================================

function startGame() {
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
  lettersInWord = secretWord.split("");
  numBlanks = lettersInWord.length;

  //Reset
  guessesLeft = 8;
  wrongLetters = [];
  blanksAndSuccesses = [];

  //correct number of blanks for secret word
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  //change HTML
  document.getElementById("display").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("win-counter").innerHTML = winCount;
  document.getElementById("loss-counter").innerHTML = lossCount;

  //TEST
  console.log(secretWord);
  console.log(lettersInWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
  //check if letter exists in word

  var isLetterInWord = false;

  for (var i = 0; i < numBlanks; i++) {
    if (secretWord[i] === letter) {
      isLetterInWord = true;
    }
  }

  //check where in word letter is; populate blanks and successes array
  if (isLetterInWord) {
    for (var i = 0; i < numBlanks; i++) {
      if (secretWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
      }
    }
  }
  //letter wasn't found in word
  else {
    wrongLetters.push(letter);
    guessesLeft--;
  }
  console.log(blanksAndSuccesses);
}

function roundComplete() {
  console.log(
    "Win Count: " +
      winCount +
      " | Loss Count: " +
      lossCount +
      " | Guesses Left " +
      guessesLeft
  );

  //Update HTML with most recent info
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("display").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongLetters.join(" ");

  //check if user won
if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
winCount++;
alert("You Won!");

//Update the win counter in HTML 
document.getElementById("win-counter").innerHTML = winCount;

startGame();
}
  //check if user lost
  else if (guessesLeft == 0) {
    lossCount++;
    alert("You lost!");

    //Update HTML
    document.getElementById("loss-counter").innerHTML = lossCount;

    startGame(); 
  }
}

//MAIN PROCESS
//===============================================================================

//initiates code for the first time
startGame();

//registers key clicks
document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();

  //TESTING
  console.log(letterGuessed);
};
