//GLOBAL VARIABLES//================================================================
//array of possible words for hangman game (all lowercase)//
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

//THE WORD to be guessed will be held here
var secretWord = "";

//breaks solution into letters to be stored in array
var lettersInSecretWord = [];

//the number of blanks we show based on secret word
var numBlanks = 0;

//holds both blank spaces and solved letters 
var spacesAndSolved = [];

//holds all wrong guesses
var wrongGuesses = [];

//game counters
var winCounter = 0;
var lossCounter = 0;
var numAttempts = 8;

//FUNCTIONS===========================================================
//start and reset game 
function startGame() {

  //reset guesses back to zero
  numAttempts = 8;

  //randomly chooses word for player to guess
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];

  //breaks secret word into individual letters
  lettersInSecretWord = secretWord.split("");
  //number of letters in secret word
  numBlanks = lettersInSecretWord.length;

  //TESTING: check to make sure secret word in chosen 
  console.log("Secret Word:" + secretWord);

  //reset arrays after each round
  spacesAndSolved = [];
  wrongGuesses = [];

  //spaces for secret word based on number of letters in solution

  for (var i = 0; i < numBlanks; i++) {
    spacesAndSolved.push("_");
  }

  //resets number of guesses
  document.getElementById("guesses-left").innerHTML = numAttempts;

  //displays number of blanks when each round begins
  document.getElementById("display").innerHTML = spacesAndSolved.join("_");

  //Clears worng guess after each round
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

  //check if the letters gussed match letters in the secret word
  function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
      if (secretWord[i] === letter) {
        letterInWord = true;
      }
    }
    if (letterInWord) {
      for (var j = 0; j < numBlanks; j++) {
        if (secretWord[j] === letter) {
          spacesAndSolved[j] = letter;
        }
      }
    } else {
      wrongGuesses.push(letter);
      numAttempts--;
    }
  }

  function roundComplete(){
 document.getElementById("guesses-left").innerHTML = numAttempts;
 document.getElementById("display").innerHTML = spacesAndSolved.join(" ");
 document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("_");

 if (LettersInSecretWord.toString() === spacesAndSolved.toString())
 {
   winCounter++;
   alert("You Win!");

   document.getElementById("win-counter").innerHTML = winCounter;
   startGame();
 }

 else if (numGuesses === 0) {
   lossCounter++;
   alert("You Lose!");

   document.getElementById("loss-counter").innerHTML = lossCounter;
   startGame();
 }
  }
  //MAIN GAME PROCESS ============================================================
  startGame();
  document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      var letterGuessed = event.key.toLowerCase();
      checkLetters(lettersGuessed);
      roundComplete();
    }
  };