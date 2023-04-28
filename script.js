
// begin with a function called 'computerPlay' that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

let words = ["rock", "paper", "scissors"];

function computerPlay() {
    for (let i = words.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = words[i];
        words[i] = words[j];
        words[j] = temp;
    }
    return words[0];
}

// User Input:

let userInput = prompt("Choose: rock, paper or scissors?").toLowerCase();


// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection:
let computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Lets do it again :)";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

console.log("Player: " + userInput);
console.log("Computer: " + computerSelection);
console.log(playRound(userInput, computerSelection));

// Write a NEW function called game():

// function game() {
//     for (let i = 1; i <= 5; i++) {
      
// }
// }