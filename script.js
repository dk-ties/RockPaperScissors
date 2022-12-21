console.log("hello world");

var getComputerChoiceArray = ["rock", "paper", "scissor"];
let playerWin = "Hooray You win!";
let computerWin = "DAMMMM The computer take this one";
let playerScore;
let computerScore;
let tie;

const scissorElement = document.getElementById("scissor");
scissorElement.addEventListener("click", () => {
  game("scissor");
});

const paperElement = document.getElementById("paper");
paperElement.addEventListener("click", () => {
  game("paper");
});

const rockElement = document.getElementById("rock");
rockElement.addEventListener("click", () => {
  game("rock");
});

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * getComputerChoiceArray.length);
  let choice = getComputerChoiceArray[randomChoice];
  return choice;
}

/* const playerScissor = document
  .getElementById("sissor")
  .addEventListener("click", function () {
    this.alert("Scissor is pressed");
  });
/* let playerScissor = addEventListener("click", #scissor)
let playerScissor = addEventListener("click", #scissor)
 */

/* const playerScissor = document
  .getElementById(`scissor`)
  .addEventListener("click", function () {
    alert("Scissor selected!");
  });

const playerPaper = document
  .getElementById(`paper`)
  .addEventListener("click", function () {
    alert("Paper selected!");
  }); */
/* function getPlayerChoice() {

  return getPlayerChoice
} */

function round(playerChoice) {
  let computerChoice = getComputerChoice();
  //let playerChoice; // = getPlayerChoice();
  console.log(computerChoice);

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
  console.log("one round has been made");
}
/* 
return winner
function find winner, and console.log( computerWin/playerWin)
let playerScore
let computerScore
set to 0 in start game
each round increment either player/computer score
*/
function game(playerChoice) {
  playerScore = 0;
  computerScore = 0;
  tie = 0;
  for (let i = 0; i < 5; i++) {
    console.log("Round " + i);
    if (round(playerChoice) === playerScore) {
      playerScore = playerScore + 1;
      console.log("Player win!");
    } else if (round(playerChoice) === computerScore) {
      computerScore = computerScore + 1;
      console.log("Computer win!");
    } else {
      console.log("It was a tie!");
      i = i - 1;
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
