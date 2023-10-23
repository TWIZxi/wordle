let canSubmit;
let grid;
let targetWord;

const guessInput = document.querySelector("#guess");
const submitButton = document.querySelector("#submit");
const resetButton = document.querySelector("#reset");

function init() {
  canSubmit = true;
  grid = [];
  targetWord = validWords[Math.floor(Math.random() * validWords.length)];
  console.log(targetWord);
}

init();

resetButton.addEventListener("click", function (event) {
  const colElements = document.querySelectorAll(".col");
  for (let i = 0; i < colElements.length; i++) {
    const colElement = colElements[i];
    colElement.textContent = "";
    colElement.style.backgroundColor = "";
  }

  init();
});

submitButton.addEventListener("click", function (e) {
  if (canSubmit === false) {
    return;
  }

  // Grab value from guessInput
  const guess = guessInput.value.toUpperCase();
  guessInput.value = "";
  if (isValidGuess(guess) === false) {
    return;
  }
  guessInput.value = "";

  addGuessToGrid(guess);

  updateGrid();

  if (isWinner(guess) === true) {
    alert("Winner");
    canSubmit = false;
  }
});

const isWinner = (guess) => guess === targetWord;

const isValidGuess = function (guess) {
  // Guess length must be 5 characters
  if (guess.length !== 5) {
    alert("Guess must be 5 characters");
    return false;
  }

  // Guess must be in word list
  if (!validWords.includes(guess)) {
    alert("Guess Must Be In Word List");

    return false;
  }

  return true;
};

const addGuessToGrid = function (guess) {
  // Create a row letter by letter
  const row = [];
  for (let i = 0; i < guess.length; i++) {
    const letter = {
      char: guess[i],
      color: getLetterColor(guess[i], i),
    };

    row.push(letter);
  }

  grid.push(row);
};

const getLetterColor = function (letter, index) {
  if (letter === targetWord[index]) {
    return "#abc19c";
  }

  for (let i = 0; i < targetWord.length; i++) {
    if (letter === targetWord[i]) {
      return rgb(255, 196, 37);
    }
  }

  return "gray";
};

const updateGrid = function () {
  const index = grid.length - 1;
  const lastGuess = grid[index];

  const rowElement = document.querySelectorAll(".row")[index];
  const colElements = rowElement.querySelectorAll(".col");

  for (let i = 0; i < colElements.length; i++) {
    const colElement = colElements[i];
    const letter = lastGuess[i];
    colElement.textContent = letter.char;
    colElement.style.backgroundColor = letter.color;
  }
};
