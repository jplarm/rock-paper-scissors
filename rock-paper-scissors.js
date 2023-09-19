
function getComputerChoice() {
    let number =Math.ceil(Math.random() * 3);
    console.log(number)
    switch (number) {
        case 1:
            return "Rock"
            
        case 2:
            return "Paper"
            
        case 3:
            return "Scissors"
           
        default:
            return "Rock"
            
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();
    let playerPick;
    switch (playerSelectionLower) {
        case 'rock':
            playerPick = 'Rock'
            break;
        case 'paper':
            playerPick = 'Paper'
            break;
        case 'scissors':
                playerPick = 'Scissors'
                break;
        default:
            console.log('try again!')
            return;
    }
    if (playerPick === 'Rock' && computerSelection === 'Scissors' || playerPick === 'Paper' && computerSelection === 'Rock' || playerPick === 'Scissors' && computerSelection === 'Paper'){
    return 'You Win! '+ playerPick +' beats '+computerSelection;
    } else if (playerPick === computerSelection) {
        return 'You Tie! You both picked '+ playerPick;
    } else {
        return 'You Lose! '+ playerPick +' gets beaten by '+computerSelection;
    }
    
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore<3 || computerScore<3) {
        
        const playerSelection = prompt('Pick Rock, Paper or Scissors');
        const computerSelection = getComputerChoice()
        let round = playRound(playerSelection,computerSelection);
        console.log(round);
        if (round.startsWith('You Win!')) {
            playerScore++;
        }
        if (round.startsWith('You Lose!')) {
            computerScore++;
        }
        if (playerScore>=3) {
            console.log('GAMEOVER, You Win')
            return 'You Win'
        }
        if (computerScore>=3) {
            return 'You Lose'
        }

    }

}

