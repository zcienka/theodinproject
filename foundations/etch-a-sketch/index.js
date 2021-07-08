const center = document.getElementById("grid-center")
const container = document.getElementById("container")

const matrixWidth = 400
let rows = "50"
let columns = rows


function drawGrid() {
    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    center.style.setProperty("left", Math.floor(windowWidth / 2 - matrixWidth / 2) + "px")
    center.style.setProperty("top", Math.floor(windowHeight / 2 - matrixWidth / 2) + "px")


    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', columns)

    container.style.setProperty("width", Math.floor(matrixWidth / rows) + "px")
    container.style.setProperty("height", Math.floor(matrixWidth / columns) + "px")

    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div")
        container.appendChild(cell).className = "grid-item"
        cell.onmouseover = function () {
            cell.style.backgroundColor = random_rgba()
        }
        cell.style.width = Math.floor(matrixWidth / rows) + "px"
        cell.style.height = Math.floor(matrixWidth / rows) + "px"
    }
}

function random_rgba() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const a = Math.random()
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
}

function reset() {
    document.getElementById('container').innerHTML = ""
    drawGrid()
}

function changeSize() {
    rows = window.prompt("Enter the number of rows: ")
    columns = rows
    if (rows < 100)
        reset()
    else
        window.alert("The number of rows must be less than 100")
}


drawGrid()

