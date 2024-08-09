
let myWindow;

function gameOverWindow() {
  myWindow = window.open(
    "./game_over.html",
    "Game Over",
    "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
  );
  myWindow.focus();
}

function youWonWindow() {
    myWindow = window.open(
      "./you_won.html",
      "You Won!",
      "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
    );
    myWindow.focus();
  }

function closeWindow() {
  myWindow.close();
}

// Initialize game variables

    // To generate a random integer between 1 and 50 (Math.floor(Math.random() * 50) + 1). 
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    let guessCount = 0;
    const maxGuesses = 5;


    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const restartButton = document.getElementById('restartButton');
    console.log(restartButton)

// Function to check the user's guess
    const guessInput = document.getElementById('guessInput');
    
    function checkGuess() {
        const userGuess = Number(guessInput.value);
        guessCount++;

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number in ${guessCount} tries.`;

            //let container = document.querySelector(".container").style;
            //container.classList.add("containerWin"); // Add the new class
            document.querySelector(".container").style.backgroundColor = 'rgb(184, 231, 215)';
            endGame();
            youWonWindow();

        } else if (guessCount >= maxGuesses) {
            message.textContent = `Game over! The number was ${randomNumber}.`;
            endGame();
            gameOverWindow();            
        } else {
            if (userGuess > randomNumber) {
                message.textContent = `Too high! Try again. You have another ${maxGuesses-guessCount} tries`;
            } else {
                message.textContent = `Too low! Try again. You have another ${maxGuesses-guessCount} tries`;
            }
        }

        guessInput.value = '';
        guessInput.focus();
    }

// Function to end the game
function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    restartButton.style.display = 'inline-block';
}

// Function to restart the game
function restartGame() {
    guessCount = 0;
    randomNumber = Math.floor(Math.random() * 50) + 1;
    message.textContent = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = 'none';
    guessInput.value = '';
    guessInput.focus();
    document.querySelector(".container").style.backgroundColor = ' #f0f0f0';
}

// Event listeners
guessButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);
