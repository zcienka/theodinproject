const calculator = document.querySelector(".calculator")
const screen = document.getElementById("screen")
const buttonsNum = 20
let curr_num = []
let calculation = []
const max_length = 10
const math_operations = ["\u00f7", "\u00d7", "+", '-', '=']

const calc = ["AC", "CE", "\u00f7", "\u00d7", '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', ' ', '.', ' ', ' ']

function making_calculator() {
    for (let i = 0; i < buttonsNum; i++) {
        if (i !== 17) {
            let div = document.createElement("div")
            div.textContent = calc[i]
            div.setAttribute('id', calc[i]);
            if (i === 15) {
                div.textContent = ' '
                div.style.setProperty("position", "absolute")
                div.style.setProperty("margin-top", "20px")
                div.style.setProperty("height", "136.8px")
                let text = document.createElement("div")
                text.textContent = calc[i]
                div.appendChild(text).className = "text"
                calculator.appendChild(div).className = "button"

                let div2 = document.createElement("div")
                div2.textContent = ' '
                div2.style.setProperty("background-color", "#A08794")
                calculator.appendChild(div2).className = "button"
            } else if (i === 16) {
                div.style.setProperty("width", "160px")
                calculator.appendChild(div).className = "button"
            } else
                calculator.appendChild(div).className = "button"
        }
    }
}

let current_operator = []
let num_with_separator = Boolean(false)
let number
// checking what button is clicked
document.querySelector(".calculator").addEventListener('click', clicked => {
    if (clicked.target !== clicked.currentTarget) {
        if (!isNaN(clicked.target.id) || (clicked.target.id === '.' && !(num_with_separator))) {
            if (clicked.target.id === ".") {
                num_with_separator = Boolean(true)
            }
            if (num_with_separator)
                calculation.pop()
            if (curr_num.length < max_length) {  // tu musi być smienione
                curr_num.push(clicked.target.id)
                number = curr_num.join('')
                displaying_number(number)
            }

        } else if (clicked.target.id === "AC") {
            calculation = []
            screen.textContent = ''
            curr_num = []
        } else if (clicked.target.id === "CE") {
            screen.textContent = ''
            curr_num = []
        } else {
            num_with_separator = Boolean(false)
            if (!(number === undefined))
                calculation.push(number)
            if (calculation.length === 2) {
                let result = making_calculations(current_operator, calculation)
                calculation = []
                if (result !== "ERROR")
                    calculation.push(result)
            }
            if (clicked.target.id === '=') {
                calculation = []
            }
            number = undefined
            curr_num = []
            current_operator = clicked.target.id
        }

    }


})

function displaying_number(num) {
    screen.textContent = num
}

function making_calculations(operator, calculation) {
    let result
    if (operator === "\u00f7")
        operator = '/'
    else if (operator === "\u00d7")
        operator = '*'
    if (operator === '/' && calculation[1] === "0") {
        displaying_number("ERROR")
        return "ERROR"
    }
    else {
        result = eval(calculation[0] + operator + calculation[1])
        if (result.toString().length > max_length) {
            result = result.toExponential(max_length)
        }

        displaying_number(result)
        return result
    }

}

making_calculator()







