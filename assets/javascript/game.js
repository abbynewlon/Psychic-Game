
var guesses = [];
var randomLetter = "";
var remaining = 10;
var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingText = document.getElementById("remaining-text");
var guessesText = document.getElementById("guesses-text");




document.onkeyup = function(event) {
    newGuess(event.key);
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainingText.textContent = "Guesses Left: " + remaining;
    guessesText.textContent = "Your Guesses So Far: " + guesses;//ideally would maybe go through a for loop and print each one out.
}

function newGuess(letter) {

    var format = letter.toLowerCase();//should check that it's actually a letter. 

    if(format === randomLetter) { 
        wins++;
        remaining = 10;
        randomLetter = getLetter();
        guesses = [];
        alert("you won");
    }

    if(guesses.indexOf(letter) === -1){
        remaining--;
        guesses.push(format);
    }

    if(remaining <= 0){
        losses++;
        remaining = 10;
        randomLetter = getLetter();
        guesses = [];
        alert("you lost");
    }

}

function getLetter(){
    return letterList[Math.floor(Math.random()* listWords.length)];
}




    


