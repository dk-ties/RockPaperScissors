console.log("hello world");

var getComputerChoiceArray = ["rock", "paper", "scissor"];
let playerWin = "Hooray You win!";
let computerWin = "DAMMMM The computer take this one";

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
/* console.log(getComputerChoice());
console.log(getPlayerChoice()); */

/* function round(getComputerChoice, getPlayerChoice) {
  if (getComputerChoice === "rock" && getPlayerChoice != "paper") {
    return computerWin;
  } else if (getComputerChoice === "paper" && getPlayerChoice != "scissor") {
    return computerWin;
  } else if (getComputerChoice === "scissor" && getPlayerChoice != "rock") {
    return computerWin;
  } else {
    return playerWin;
  }
}
 */
/* function round(getComputerChoice, getPlayerChoice) {
  console.log("So far so good");
} */

function round() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice();

  switch (computerChoice) {
    case "rock":
      if (playerChoice === "rock") {
        console.log("TieTieTie");
      } else if (playerChoice === "paper") {
        console.log(playerWin);
      } else {
        console.log("Computer took Rock " + computerWin);
      }
      break;

    case "paper":
      if (playerChoice === "paper") {
        console.log("TieTieTie");
      } else if (playerChoice === "scissor") {
        console.log(playerWin);
      } else {
        console.log("Computer took paper " + computerWin);
      }
      break;

    case "scissor":
      if (playerChoice === "scissor") {
        console.log("TieTieTie");
      } else if (playerChoice === "rock") {
        console.log(playerWin);
      } else {
        console.log("Computer took scissor " + computerWin);
      }
      break;
  }
}
