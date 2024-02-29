function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const computerSelection = getComputerChoice();

  console.log("Player: ", playerSelection);
  console.log("Computer: ", computerSelection);

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win!";
  } else {
    return "Computer wins!";
  }
}

function playGame() {

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.value;
        console.log(playerSelection);
        console.log(playRound(playerSelection));
    });
  });
}

playGame();