var inputBox = document.getElementById("inputBox");
var result = document.getElementById("result");
var guessCount = document.getElementById("guessCount");
var remainingGuesses = document.getElementById("remainingGuesses");

var noOfGuesses = 3;
var randomNumber = Math.floor(Math.random() * 5) + 1;

function checkNumber() {
    var userGuess = parseInt(inputBox.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 5) {
        result.textContent = "Please enter a valid number between 1 and 5.";
        result.style.color = "#e74c3c";
        result.style.visibility = "visible";
        return;
    }

    if (userGuess === randomNumber) {
        result.textContent = "Congratulations! You guessed the right number!";
        result.style.color = "#2ecc71";
        result.style.visibility = "visible";
        result.style.animation = "glow 1.5s ease-in-out infinite";
    } else {
        noOfGuesses--;
        remainingGuesses.textContent = noOfGuesses;

        if (noOfGuesses === 0) {
            result.textContent = "Game Over! The correct number was " + randomNumber + ".";
            result.style.color = "#e74c3c";
            result.style.visibility = "visible";
            inputBox.disabled = true;
        } else {
            result.textContent = "Wrong guess! Try again!";
            result.style.color = "#f1c40f";
            result.style.visibility = "visible";
        }
    }
}
