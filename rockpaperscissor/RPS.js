const Choices = ["rock", "paper", "scissors"];
const PlayerDisplay = document.getElementById("playerDisplay");
const ComputerDisplay = document.getElementById("computerDisplay");
const ResultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = Choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    PlayerDisplay.textContent = `PLAYER: ${playerChoice}`;
    ComputerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    ResultDisplay.textContent = result;
}
