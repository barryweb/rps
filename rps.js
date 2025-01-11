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