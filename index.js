alert("Testing");

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    switch (i) {
      case 0:
        return "rock";

      case 1:
        return "paper";

      case 2:
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
    }

let humanScore = 0; 
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return `It's a tie. you both chose ${humanChoice}`;
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (( humanChoice === "rock" ) || ( humanChoice === "paper" ) || (humanChoice === "scissors")){
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }
    else {return `${humanChoice} is not a valid input`};
}

function playGame() {
    let i = 0;
    while(i < 5){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        alert(playRound(humanChoice, computerChoice));
        i++;
    }
    alert(`Computer-Score: ${computerScore}, Your-Score: ${humanScore}`);
}

playGame();