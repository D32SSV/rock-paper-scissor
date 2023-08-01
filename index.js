let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

// Function to update the score and announce the winner
function updateScoreAndCheckWinner() {
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore >= winningScore) {
        document.getElementById("result").innerText = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore >= winningScore) {
        document.getElementById("result").innerText = "Sorry! You lost the game.";
        resetGame();
    }
}

// Function to reset the game when one player wins
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreAndCheckWinner();
}

// Function to get a random computer choice (rock, paper, or scissors)
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

// Function to handle the game when a button is clicked
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById("result").innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    updateScoreAndCheckWinner();
}

// Event listeners for buttons
document.getElementById("rock-btn").addEventListener("click", function () {
    playGame("rock");
});

document.getElementById("paper-btn").addEventListener("click", function () {
    playGame("paper");
});

document.getElementById("scissors-btn").addEventListener("click", function () {
    playGame("scissors");
});
