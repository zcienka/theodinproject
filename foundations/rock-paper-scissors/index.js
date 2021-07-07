const gameList = ["rock", "paper", "scissors"]
let playerSelection
let computer = document.getElementById("computer")
let player = document.getElementById("player")
let game_result = document.getElementById("game-result")
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

function rock(){
    playerSelection = "rock"
    startGame()
}


function paper(){
    playerSelection = "paper"
    startGame()
}


function scissors(){
    playerSelection = "scissors"
    startGame()
}


function startGame() {
        const random = Math.floor(Math.random() * gameList.length)
        let computerSelection = gameList[random]
        computer.innerHTML = textToEmoji(computerSelection)
        player.innerHTML = textToEmoji(playerSelection)

        game_result.textContent = playRound(playerSelection, computerSelection)
}

function textToEmoji(text){
    if (text === "rock")
        return "&#128074;"
    else if (text === "paper")
        return "&#9995;"    
    else
        return "&#9996;&#65039;"
}