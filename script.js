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
  console.log(choice);
  return choice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose a hand");
  playerChoice = playerChoice.toLowerCase();

  return playerChoice;
}
/* console.log(getComputerChoice());
console.log(getPlayerChoice()); */

function round(getComputerChoice, getPlayerChoice) {
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
/*    else if getComputerChoice is  paper and getPlayerChoice is not scissor
        return computerWin
    else if getComputerChoice is  scissor and getPlayerChoice is not rock
        return computerWin
    else 
        return playerWin*/
