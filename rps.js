const choiceRock = "rock";
const choicePaper = "paper";
const choiceScissors = "scissors";

let humanScore = 0;
let computerScore = 0;

// const prompt = require('prompt-sync')();

function getHumanChoice() {
    let humanInput = prompt("Enter your choice: ").toLowerCase(); 

    if (
        (humanInput === choiceRock) || 
        (humanInput === choicePaper) || 
        (humanInput === choiceScissors)
        ) {
            console.log("Player: ", humanInput);
            return humanInput;
        } else {
            console.log("Invalid choice! Try again.")
            return getHumanChoice();
        }
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    
    if (randomNum === 1) {
        console.log("Computer: ", choiceRock);
        return choiceRock;
    } else if (randomNum === 2) {
        console.log("Computer: ", choicePaper);
        return choicePaper;
    } else {
        console.log("Computer: ", choiceScissors);
        return choiceScissors;
    }
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    
    if (randomNum === 1) {
        console.log("Computer: ", choiceRock);
        return choiceRock;
    } else if (randomNum === 2) {
        console.log("Computer: ", choicePaper);
        return choicePaper;
    } else {
        console.log("Computer: ", choiceScissors);
        return choiceScissors;
    }
}