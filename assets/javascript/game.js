//possible words for hangman game//
var wordList = ["SHELDON", "LEONARD", "RAJ", "HOWARD", "PENNY", "BERNADETTE", "PHYSICS", "THEORETICAL", "BAZINGA", "TRAINS", "COMICS", "SPOCK", "BRISKET", "NERDS", "EIDETIC"];

//letters for player to choose//
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//randomly chooses word for player to guess//
var randomWord = wordList[Math.floor(Math.random()*wordList.length)];

//check to make sure random word works
console.log("Secret Word: " + randomWord);

    var directionsText = document.getElementById("directions-text");
    var secretWordText = document.getElementById("secretword-text");
    var remainingguessesText = document.getElementById("remainingguesses-text");
    var lettersguessedText = document.getElementById("lettersguessed-text");
    var winsText = document.getElementById("wins-text");
    

var remainingGuesses = 10;
var wins = 0;
var lettersGuessed = [];
var secretWord = [];

//spaces for secret word letters//
 
for (var i = 0; i < randomWord.length; i++) {
    secretWord[i] = "-";
}
secretWordText.textContent = secretWord.join("");

for (var i = 0; i < randomWord.length; i++) {
    secretWord[i] = randomWord[i];
}

document.onkeyup = function(event) {
     letters = event.key.toUpperCase(); 
}