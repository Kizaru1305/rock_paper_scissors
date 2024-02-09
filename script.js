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
        (playerSelection === 'rock' && computerChoice === 'scissors') ||
        (playerSelection === 'paper' && computerChoice === 'rock') ||
        (playerSelection === 'scissors' && computerChoice === 'paper') 
    ) {
        return "You Win!";
    } else {
        return "Computer wins!";
    }

}

playRound() {
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
            userScore++;
        } else if (result === 'Its a tie!') {
            userScore++;
            computerScore++;
        } else {
            computerScore++;
        }

        if (userScore === 5) {
            console.log('player wins');
        } else if (computerScore === 5) {
            console.log('computer wins');
        } else if (computerScore === userScore) {
            console.log('tie');
        }

        loop++;
        
    } while (loop === 5);
    

}


playRound();