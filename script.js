console.log("hello world");

var getComputerChoiceArray = ["rock", "paper", "scissor"];
let playerWin = "Hooray You win!";
let computerWin = "DAMMMM The computer take this one";
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

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

console.log(playerChoice);
console.log(computerChoice);

function round(computerChoice, playerChoice) {
  switch (computerChoice) {
    case "rock":
      if ((playerChoice = "rock")) {
        if ((playerChoice = "paper")) {
          console.log(playerWin);
          break;
        }
        console.log(computerWin);
      }
      break;
    /*     case "paper":
      if (playerChoice != "paper" || playerChoice != "scissor") {
        console.log(computerWin);
      }
      break;
    case "scissor":
      if (playerChoice != "scissor" || playerChoice != "rock") {
        console.log(computerWin);
      } */
    default:
      console.log(playerWin);
  }
}
