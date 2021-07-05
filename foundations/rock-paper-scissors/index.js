const gameList = ["rock", "paper", "scissors"]


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection == "rock") {
            return "Draw!"
        } else if (computerSelection == "scissors") {
            return "You win! Rock beats scissors"
        } else {
            return "You lose! Paper beats rock"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            return "Draw!"
        } else if (computerSelection == "rock") {
            return "You lose! Rock beats scissors"
        } else {
            return "You win! Scissors beat paper"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return "Draw!"
        } else if (computerSelection == "rock") {
            return "You win! Paper beats rock"
        } else {
            return "You lose! Scissors beat paper"
        }
    }

}

for (var i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * gameList.length)
    let computerSelection = gameList[random]

    let playerSelection = window.prompt("Choose rock, paper or scissors: ").toLowerCase()
    console.log(playRound(playerSelection, computerSelection))
}