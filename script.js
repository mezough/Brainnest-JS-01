let words = ["rock", "paper", "scissors"];


function computerPlay() {
    return words[(Math.floor(Math.random() * 3))]
}

let playerScore = 0;
let computerScore = 0;

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

function game() {
alert ('Hello My Friend \n Welcome to my GAME ; ) \n \n We will Play 5 rounds "Paper-Rock-Scissor" and you can leave any time \n Click -OK- if you are ready');
    let round = 1;
    while (round <= 5) {
        let playerSelection = prompt("Round " + round + ": Choose rock, paper or scissors?");
        if (playerSelection === null) {
            let answer = prompt("Do you want to cancel the game? (Y/N)");
            if (answer === "y".toLowerCase().trim()) {
                alert('See You Later : ) \n Bye');
                return;
            } else if (answer === "n".toLowerCase().trim()) {
                alert('GOOD : ) \n Lets PLAY');
                continue;
            } else {
                alert("Invalid input. Please enter Y or N.");
                continue;
            }
        } else if (playerSelection === '') {
            alert('Empty Field \n Try Again');
            continue;
        }

        playerSelection = playerSelection.toLowerCase().trim();
        if (!words.includes(playerSelection)) {
            alert('Wrong Input \n Try Again');
            continue;
        }
        let computerSelection = computerPlay();
        console.log("Round " + round + ": Player: " + playerSelection + " vs Computer: " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result !== "It's a Draw!") {
            round++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game! Player score: " + playerScore + ", Computer score: " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game! Player score: " + playerScore + ", Computer score: " + computerScore);
    } else {
        console.log("It's a tie! Player score: " + playerScore + ", Computer score: " + computerScore);
    }
}

game();