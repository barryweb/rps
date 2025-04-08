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