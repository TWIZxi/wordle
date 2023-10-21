//List of Random5 letter words
//Define Variables

let user;
let gameBoard;
let winner;
let randomWord;
let keyBoard;

const rowElement = document.querySelector(".board");
const resetButton = document.querySelector("#reset");

//Init & // Create Game Board 6 Rows by 5 columns

function init() {
  gameBoard = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ];
}

//attach event listeners for click or typing to register input
//Get Random Word From List and make it upper case
//Update Game Board Logic with Random word
//User Inputs First  guess into top row and clicks submit guess
//Return which letters are correct for the word (orange background around letter) and which are correct in correct place (green background around letter)
//User Inputs Lext 5 guesses, getting more understanding of 5 correct 5 letter word
// User either guesses correctly, 5 green boxes = win message OR Loss message and display the correct word
//Keepintg Score of how many words guessed
// Reset Game Button
