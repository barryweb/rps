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

function playGame() {

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
            console.log(`Player choice: ${humanChoice} | Computer choice: ${computerChoice}`);
            console.log("It's a tie!");
        } else {
            console.log(`Player choice: ${humanChoice} | Computer choice: ${computerChoice}`);
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            console.log(`Player score: ${humanScore} | Computer score: ${computerScore}`);
        }
    }

    let askUser = 
        prompt("How many rounds would you like to play? (Enter a number or enter 'exit' to quit):");

    if (askUser === 'exit') return;

    while (askUser !== 'exit' && (isNaN(askUser) || askUser <= 0)) {
        if (askUser === 'exit') return;
        askUser = prompt("Please enter a valid number of rounds (greather than 0):")
    }

    const numRounds = Number(askUser);

    for (let i = 1; i <= numRounds; i++) {
        console.log(`Round ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log("It's a tie. Play another round!");
        console.log(`Final scores: Player ${humanScore} | Computer ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log("Congratulations! You're the winner!");
        console.log(`Final scores: Player ${humanScore} | Computer ${computerScore} `);
    } else {
        console.log("Computer wins the game!");
        console.log(`Final scores: Player ${humanScore} | Computer ${computerScore} `);
    }
}

playGame();