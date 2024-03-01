function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const computerSelection = getComputerChoice();

  let selection1 = document.querySelector(".selection1");
  let selection2 = document.querySelector(".selection2");

  selection1.textContent = playerSelection;
  selection2.textContent = computerSelection;

  // console.log("Player: ", playerSelection);
  // console.log("Computer: ", computerSelection);

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore.textContent = tempScore1;
    return "You Win!";
  } else {
    computerScore.textContent = tempScore2;
    return "Computer wins!";
  }
}

let tempScore1 = 0;
let tempScore2 = 0;
let round = 0;

let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");


const buttons = document.querySelectorAll("button");
const winnerMsg = document.querySelector(".winner");
const roundTxt = document.querySelector('.round');

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.value;
    winnerMsg.textContent = playRound(playerSelection);
    if (winnerMsg.textContent === "You Win!") {
        tempScore1++;
        round++;
        roundTxt.textContent = round;
        playerScore.textContent = tempScore1;
    } else if (winnerMsg.textContent == "Computer wins!") {
        tempScore2++;
        round++
        roundTxt.textContent = round;
        computerScore.textContent = tempScore2;
    } else {
        tempScore1++;
        tempScore2++;
        round++
        roundTxt.textContent = round;
        playerScore.textContent = tempScore1;
        computerScore.textContent = tempScore2;
    }

    if(round === 5) {
      const winner = document.createElement('a');
      if(tempScore1 > tempScore2) {
          winner.textContent = "Player has won the game!";
          document.body.appendChild(winner);
      } else if (tempScore2 > tempScore1) {
          winner.textContent = "Computer has won the game!";
          document.body.appendChild(winner);
      } else if (tempScore1 === tempScore2) {
          winner.textContent = "Game ended in a tie";
          document.body.appendChild(winner);
      }

    }

  });
});