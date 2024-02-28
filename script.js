function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') 
    ) {
        return "You Win!";
    } else {
        return "Computer wins!";
    }

}

function playGame() {
    let loop = 0;
    let userScore = 0;
    let computerScore = 0;

    do {
        const userChoice = prompt('Select rock, paper or scissors');

        const computerChoice = getComputerChoice();

        const result = playRound(userChoice, computerChoice);

        console.log(`User chose: ${userChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(`Result: ${result}`);

        if (result === "You Win!") {
            userScore = userScore + 1;
        } else if (result === 'Its a tie!') {
            userScore = userScore + 1;
            computerScore = computerScore + 1;
        } else {
            computerScore = computerScore + 1;
        }

        

        loop = loop + 1;
        
    } while (loop < 5);
    
    if (userScore > computerScore) {
        console.log('player wins');
    } else if (computerScore > userScore) {
        console.log('computer wins');
    } else if (computerScore === userScore) {
        console.log('tie');
    }

    console.log(`Computer score: ${computerScore}` + ` Player score: ${userScore}`);

}


playGame();