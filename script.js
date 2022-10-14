console.log("hello world");

var getComputerChoiceArray = ["rock", "paper", "scissor"];
let playerWin = "Hooray You win!";
let computerWin = "DAMMMM The computer take this one";
let playerScore;
let computerScore;
let tie;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * getComputerChoiceArray.length);
  let choice = getComputerChoiceArray[randomChoice];
  /*    Between Rock
            Paper
            Scissor */
  /* console.log(choice); */
  return choice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose a hand");
  playerChoice = playerChoice.toLowerCase();

  return playerChoice;
}

function round() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  switch (computerChoice) {
    case "rock":
      if (playerChoice === "rock") {
        /* console.log("TieTieTie"); */
        return tie;
      } else if (playerChoice === "paper") {
        /* console.log(playerWin); */
        return playerScore;
      } else {
        /*  console.log("Computer took Rock " + computerWin); */
        return computerScore;
      }
      break;

    case "paper":
      if (playerChoice === "paper") {
        /* console.log("TieTieTie"); */
        return tie;
      } else if (playerChoice === "scissor") {
        /* console.log(playerWin); */
        return playerScore;
      } else {
        /* console.log("Computer took paper " + computerWin); */
        return computerScore;
      }
      break;

    case "scissor":
      if (playerChoice === "scissor") {
        /* console.log("TieTieTie"); */
        return tie;
      } else if (playerChoice === "rock") {
        /* console.log(playerWin); */
        return playerScore;
      } else {
        /* console.log("Computer took scissor " + computerWin); */
        return computerScore;
      }
      break;
  }
}
/* 
return winner
function find winner, and console.log( computerWin/playerWin)
let playerScore
let computerScore
set to 0 in start game
each round increment either player/computer score
*/
function game() {
  playerScore = 0;
  computerScore = 0;
  tie = 0;
  for (let i = 0; i < 5; i++) {
    if (round() === playerScore) {
      playerScore = playerScore + 1;
      console.log("Player win!");
    } else if (round() === computerScore) {
      computerScore = computerScore + 1;
      console.log("Computer win!");
    } else {
      i = i - 1;
      console.log("It was a tie!");
    }
    console.log("Player have " + playerScore + " points!");
    console.log("Computer have " + computerScore + " points!");
  }
  if (playerScore > computerScore) {
    console.log(
      "The winner is player with " + playerScore + " over " + computerScore
    );
  } else {
    console.log(
      "The winner is computer with " + computerScore + " over " + playerScore
    );
  }
}
/* 
find a winner
if playerScore > computerScore
  player is the winner
  else computer is the winner
*/
