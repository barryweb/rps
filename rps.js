const choiceRock = "rock";
const choicePaper = "paper";
const choiceScissors = "scissors";

let humanScore = 0;
let computerScore = 0;

//to use prompt function in local environment install npm package
// $ `npm install prompt`
// run tests
// $ `npm test`
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
//single round
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (
        (humanChoice === choiceRock && computerChoice === choiceScissors) ||
        (humanChoice === choiceScissors && computerChoice === choicePaper) ||
        (humanChoice === choicePaper && computerChoice === choiceRock)
    ) {
        console.log("Winner: Player");
        humanScore++
    } else {
        console.log("Winner: Computer");
        computerScore++
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);