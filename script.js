function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

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
  // const userChoice = prompt("Select rock, paper or scissors");

  // added button

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.value;
      console.log(playerSelection);

      const computerChoice = getComputerChoice();
      const result = playRound(playerSelection, computerChoice);

      console.log(`User chose: ${playerSelection}`);
      console.log(`Computer chose: ${computerChoice}`);
      console.log(`Result: ${result}`);
    });
  });
}

playGame();