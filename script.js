console.log("hello world");

var getComputerChoiceArray = ["rock", "paper", "scissor"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * getComputerChoiceArray.length);
  let choice = getComputerChoiceArray[randomChoice];
  /*    Between Rock
            Paper
            Scissor */
  console.log(choice);
}
