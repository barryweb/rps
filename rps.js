const choiceRock = "rock";
const choicePaper = "paper";
const choiceScissors = "scissors";

//to run prompt function in local environment install npm package
// $ `npm install prompt`
// run tests
// $ `npm test`
// const prompt = require('prompt-sync')();

function getHumanChoice() {
    let humanInput = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase(); 

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

//play 5 rounds
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

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
   
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Player score: ${humanScore}, Computer score: ${computerScore}`);
    }

    console.log("Final Scores: ");
    console.log(`Player: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congrats! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie game! Play another round!");
    }
}

playGame();