const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if (randomChoice === 1) {
        return rock;
    } else if (randomChoice === 2) {
        return paper;
    } else {
        return scissors;
    }
}

function getHumanChoice() {
    let getChoice = 
    prompt("Enter one of the following choices: Rock, Paper, or Scissors? ").toLowerCase();

    while (getChoice !== "rock" && getChoice !== "paper" && getChoice !== "scissors") {
        getChoice = prompt(
            "Please try again. Enter one of the following choices: rock, paper, or scissors? ").toLowerCase();
    }

    if (getChoice === "rock") {
        return rock;
    } else if (getChoice === "paper") {
        return paper;
    } else {
        return scissors;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === rock && computerChoice === scissors) 
        || (humanChoice === paper && computerChoice === rock)
        || (humanChoice === scissors && computerChoice === paper)) {
            console.log(`Player choice: ${humanChoice} | Computer choice: ${computerChoice}`);
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            console.log(`Player score: ${humanScore} | Computer score: ${computerScore}`);
        } else if (humanChoice === computerChoice) {
            console.log(`Player choice: ${humanChoice} | Computer choice: ${computerChoice}: It's a tie!`);
        } else {
            console.log(`Computer choice: ${computerChoice} | Player choice: ${humanChoice}`);
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            console.log(`Computer score: ${computerScore} | Player score: ${humanScore}`);
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
