// Generate a random number between min and max, inclusive
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initial setup
const mysteryNum = getRandom(1, 100);
let guessesMade = 0;
const maxGuesses = 5;
let guessesRemaining = maxGuesses;

// Selecting elements
const feed = document.getElementById("feed");
const output = document.getElementById("output");
const btnGuess = document.getElementById("btn-guess");

btnGuess.addEventListener("click", makeGuess);

function makeGuess() {
  const playerGuess = parseInt(feed.value);

  // Input validation
  if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
    output.textContent = "Enter only numbers between 1 and 100!";
    return;
  }

  guessesMade++;
  guessesRemaining--;

  if (playerGuess === mysteryNum) {
    output.textContent = `Great! You won the game. It took you ${guessesMade} guesses.`;
    endGame();
  } else if (guessesRemaining === 0) {
    output.textContent = `No more guesses left. Secret number was ${mysteryNum}.`;
    endGame();
  } else if (playerGuess > mysteryNum) {
    output.textContent = `Your guess is too high! Guess num: ${guessesMade}. You still have ${guessesRemaining} guesses remaining.`;
  } else {
    output.textContent = `Your guess is too low! Guess num: ${guessesMade}. You still have ${guessesRemaining} guesses remaining.`;
  }

  feed.value = "";  // Clear the input field
}

function endGame() {
  feed.disabled = true;
  btnGuess.disabled = true;
}
