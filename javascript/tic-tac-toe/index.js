let gameBoard = ['', '', '', '', '', '', '', '', '']
const player1 = "X"
const player2 = "O"
let currMove = player1
const popUpBox = document.getElementById("popup")
let set
let player2Score = 0
let player1Score = 0
let drawsNum = 0

document.querySelector("#board").addEventListener('click', clicked => {
    if (clicked.target !== clicked.currentTarget) {
        let id = clicked.target.id
        if (gameBoard[id - 1] === '') {
            if (currMove === player1) {
                displayX(id)
                gameBoard[id - 1] = currMove
                currMove = player2
            } else {
                displayO(id)
                gameBoard[id - 1] = currMove
                currMove = player1
            }
            if (checkIfGameIsOver()) {
                popUpBox.style.display = "block"
                clearBoard()
                displayEndingMessage()
            }
            set = new Set(gameBoard)
        }
        if (!set.has('')) {
            let draw = document.getElementById("draws")
            drawsNum += 1
            draw.textContent = drawsNum.toString()
            popUpBox.style.display = "block"
            displayDrawMessage()
            clearBoard()
        }
    }
})

function displayX(id) {
    let div = document.createElement("div")
    div.className = "x"
    div.innerHTML = "&#10005"
    const square = document.getElementById(id)
    square.appendChild(div)
}

function displayO(id) {
    let div = document.createElement("div")
    div.className = "o"
    const square = document.getElementById(id)
    square.appendChild(div)
}

function checkIfGameIsOver() {
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i * 3] !== '' && gameBoard[1 + i * 3] !== '' && gameBoard[2 + i * 3] !== '')
            if (gameBoard[i * 3] === gameBoard[1 + i * 3] && gameBoard[1 + i * 3] === gameBoard[2 + i * 3])
                return true
        if (gameBoard[i] !== '' && gameBoard[i + 3] !== '' && gameBoard[i + 6] !== '')
            if (gameBoard[i] === gameBoard[i + 3] && gameBoard[i + 3] === gameBoard[i + 6])
                return true
    }
    if (gameBoard[0] !== '' && gameBoard[4] !== '' && gameBoard[8] !== '')
        if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8])
            return true
    if (gameBoard[2] !== '' && gameBoard[4] !== '' && gameBoard[6] !== '')
        if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])
            return true
}

function clearBoard() {
    gameBoard = ['', '', '', '', '', '', '', '', '']
    for (let i = 0; i < gameBoard.length; i++)
        document.getElementById((i + 1).toString()).innerHTML = ""
}

function displayEndingMessage() {
    let popupMessage = document.getElementById("popup-content")
    let div = document.createElement("div")
    div.className = "winning-message"
    if (currMove === player1) {
        div.textContent = "Player 2 have won!"
        let player2 = document.getElementById("player2")
        player2Score += 1
        player2.textContent = player2Score.toString()

    } else {
        let player1 = document.getElementById("player1")
        div.textContent = "Player 1 have won!"
        player1Score += 1
        player1.textContent = player1Score.toString()
    }
    popupMessage.appendChild(div)

}
function displayDrawMessage(){
    let xd = document.getElementById("popup-content")
    let div = document.createElement("div")
    div.className = "winning-message"
    div.textContent = "It's a draw"
    xd.appendChild(div)
}

const close = document.getElementsByClassName("close")[0]

close.onclick = function () {
    popUpBox.style.display = "none"
}


