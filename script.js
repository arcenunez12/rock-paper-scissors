// This function returns either rock, paper, or scissors.
function rockPaperScissors(num) {
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else if (num === 3) {
        return "Scissors";
    }
}


// This function will generate the computer's choice of rock, paper, or scissors
function getComputerChoice() {
    // Use Math.random() to get a random number b/t 0 and 2
    let randomNum = Math.random() * 3;
    randomNum = Math.ceil(randomNum);
    // console.log("Here is our random number b/t 1 and 3: " + randomNum);
    let computerChoice = rockPaperScissors(randomNum);
    // console.log("Here is the computer's choice: " + computerChoice);
    return computerChoice;
}
getComputerChoice();
// console.log("Hello World!");

// This function plays a SINGLE round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    // Set the two parameters to be lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // If else statements to determine who wins
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors!";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock!";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper!";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You Lose! Scissors beats Paper!";
    } else if ( (playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "scissors") ) {
        return "It's a TIE!";
    }
}
// const playerChoice = "Scissors";
// const computerChoice = getComputerChoice();
// console.log(playRound(playerChoice, computerChoice));

// Function that will play 5 rounds of rock, paper, scissors
function game() {
    // Number of rounds is 5
    let numOfRounds = 5;
    // For loop to play 5 rounds
    for (let i = 0; i < numOfRounds; i++) {
        // Get the player's choice
        let playerChoice = prompt("Enter rock, paper, or scissors");
        // Log it to the console
        console.log("Your choice: " + playerChoice);
        // Get computer's choice
        let computerChoice = getComputerChoice();
        // Log it to the console
        console.log("Computer's choice: " + computerChoice);
        // Call the playRound() function, pass in the correct parameters
        // and log the winner to the console.
        console.log(playRound(playerChoice, computerChoice));
    }
}

// Call the game() function to see it work in the web browser.
game();
