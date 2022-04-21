const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");




function computerPlay() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * computerOptions.length);

  return computerOptions[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let gameState = 0; // Default set to lose
  if (playerSelection == computerSelection) return -1 ; // Draw Condition
  if (computerSelection == "rock") {
    gameState = +(playerSelection == "paper");
  }
  if (computerSelection == "paper") {
    gameState = +(playerSelection == "scissors");
  }
  if (computerSelection == "scissors") {
    gameState = +(playerSelection == "rock");
  }
  return gameState
}

function displayOutcome(outcome, playerSelection, computerSelection) {
  switch (outcome) {
    case 0:
      console.log(`You LOSE! ${computerSelection} beats ${playerSelection}`);
      break;
    case 1:
      console.log(`You WIN! ${playerSelection} beats ${computerSelection}`);
      break;
    case -1:
      console.log(`It's a TIE! ${playerSelection} ties with ${computerSelection}`);
      break;
  }
}

function askPlayerSelection() {
  let input = prompt("Choose between rock, paper and scissors: ");
  if (input != "rock" &&
      input != "paper" &&
      input != "scissors") {
        console.log("Invalid Input! Please type a valid option.");
        askPlayerSelection();
  }
  return input;
}

function playGames(playerTurn) {
  //for (let i = 0; i < rounds; i++) {
    computerTurn = computerPlay();
    //playerTurn = askPlayerSelection();
    outcome = playRound(playerTurn, computerTurn);
    displayOutcome(outcome, playerTurn, computerTurn);
  //}
}

function startGame() {
  alert("Welcome to my original ROCK, PAPER, SCISSORS game.")
  rounds = Number(prompt("How many rounds would you like to play? ", 10));
  playGames(rounds);
}


rockBtn.addEventListener('click', e => {
  playGames("rock")
});

paperBtn.addEventListener('click', e => {
  playGames("paper")
});

scissorsBtn.addEventListener('click', e => {
  playGames("scissors")
});


//startGame();w
