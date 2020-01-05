//possible words for hangman game//
var wordList = ["Sheldon", "Leonard", "Rajesh", "Howard", "Penny", "Bernadette", "physics", "theoretical", "bazinga", "Pasadena", "comic books", "Spock", "brisket", "nerds", "eidetic"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//randomly chooses word for player to guess//
var randomWord = wordList[Math.floor(Math.random()*wordList.length)];

console.log("Random Word: " + randomWord);

for (var i = 0; i < wordList.length; i++) {
    const element = wordList[i];
    
}
 

document.onkeyup = function(event) {
    var letterGuess = event.key;
}