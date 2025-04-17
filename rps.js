const gameChoices = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("#choices button");
const playAgnBtn = document.querySelector(".play-again")

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * gameChoices.length);
    return gameChoices[randomChoice];
}

function playRound(humanChoice, computerChoice) {

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        return `It's a tie! You both chose ${humanChoice}`;
    } else {
        computerScore++
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function updateResults(message) {
    result.textContent = message;
    score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

function getWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const winner = 
            humanScore === 5 ? "You won the game!" : "Computer won the game!";

        const finalMsg = 
            `${winner} Final Score - Player: ${humanScore}
            | Computer: ${computerScore}`;
        
        updateResults(finalMsg);
        disableBtns();
    }
}

function disableBtns() {
    buttons.forEach((btn) => {
        btn.disabled = true;
    })
}

function enableBtns() {
    buttons.forEach((btn) => {
        btn.disabled = false;
    })
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.textContent;
        const computerChoice = getComputerChoice();

        const roundResult = playRound(playerSelection, computerChoice);
        updateResults(roundResult);
        getWinner();
    });
});