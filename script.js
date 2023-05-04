let words = ["rock", "paper", "scissors"];

function computerPlay() {
    return words[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;
let round = 1;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Draw!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

function userInput() {
    let playerSelection = prompt("Round " + round + ": Choose rock, paper or scissors?");
    if (playerSelection === null) {
        let answer = prompt("Do you want to cancel the game? (Y/N)");
        if (answer.toLowerCase().trim() === "y") {
            alert("See You Later : ) \n Bye");
        } else if (answer.toLowerCase().trim() === "n") {
            alert("Good Choise : ) \n Let's PLAY");
            return userInput();
        } else {
            alert("Invalid input. Please enter Y or N.");
            return userInput();
        }
    } else if (playerSelection.trim() === "") {
        alert("Empty Field \n Try Again");
        return userInput();
    } else {
        playerSelection = playerSelection.toLowerCase().trim();
        if (!words.includes(playerSelection)) {
            alert("Wrong Input \n Try Again");
            return userInput();
        }
    }
    return playerSelection;
}

function game() {
    alert(
        'Hello My Friend \n Welcome to my GAME ; ) \n \n We will Play 5 rounds "Paper-Rock-Scissor" and you can leave any time \n Click -OK- if you are ready'
    );

    while (round <= 5) {
        let playerSelection = userInput();
        if (playerSelection === null) {
            return;
        }
        let computerSelection = computerPlay();
        console.log("Round " + round + ": Player: " + playerSelection + " vs Computer: " + computerSelection
        );
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result !== "It's a Draw!") {
            round++;
        }
    }
    if (playerScore > computerScore) {
        alert("You win the game! Player score: " + playerScore + ", Computer score: " + computerScore + "\n Press F5 to rematch "
        );
    } else if (playerScore < computerScore) {
        alert("Computer wins the game! Player score: " + playerScore + ", Computer score: " + computerScore+ "\n Press F5 to rematch "
        );
    } else {
        alert("It's a Draw! Player score: " + playerScore + ", Computer score: " + computerScore+ "\n Press F5 to rematch "
        );
    }
}

game();
