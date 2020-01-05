//possible words for hangman game//
var wordList = ["Sheldon", "Leonard", "Rajesh", "Howard", "Penny", "Bernadette", "physics", "theoretical", "bazinga", "Pasadena", "comic books", "Spock", "brisket", "nerds", "eidetic"];

//letters for player to choose//
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//randomly chooses word for player to guess//
var randomWord = wordList[Math.floor(Math.random()*wordList.length)];

//check to make sure random word works
console.log("Random Word: " + randomWord);

var attempts = 10;
var wins = 0;
var lettersGuessed = [];
var secretWord = [];

//spaces for secret word letters//
for (var i = 0; i < randomWord.length; i++) {
    secretWord.push("_");   
}
 

document.onkeyup = function(event) {
    var lettersGuessed = event.key;
}