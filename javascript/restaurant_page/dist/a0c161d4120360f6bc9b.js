import {navbar} from "./navbar.js"

const numInRow = 4
let row = 0
const navbarSize = 90
let margin = 30
const boxSize = 450
const animationSpeed = 0.3
let content = document.getElementById("content")

function animation() {
    window.addEventListener("scroll", function () {
        let offset = window.pageYOffset - navbarSize
        if (offset >= 0) {
            row = Math.floor(offset / (boxSize + margin))
            if (offset * animationSpeed < boxSize * (row + 1)) {
                pizzaAnimation(row, offset)
            }
        }
    })
}

function pizzaAnimation(row, offset) {
    offset -= boxSize * row
    for (let i = 4 * row; i < (numInRow + 4 * row); i++) {
        let pizzaAnimation = document.getElementById("pizza" + i.toString())
        pizzaAnimation.style.width = offset * animationSpeed + navbarSize + "px"
    }
}

function displayingPizzas() {
    const pizzas = ["California Pizza", "Sicilian Pizza", "Calzone pizza", "Detroit pizza", "Margherita Pizza",
        "Pizza al taglio", "Bean Pizza", "Potato Pizza", "Chicken Pizza", "Artichoke Pizza",
        "Cheese Pizza", "Pizza ortolana"]
    let img, div, div2, div3, th, tr, button, k = 0, p
    let table = document.createElement("table")
    let tableContainer = document.createElement("div")
    table.className = "center-table"

    for (let i = 0; i < 3; i++) {
        tr = document.createElement("tr")
        for (let j = 0; j < 4; j++) {
            th = document.createElement("th")
            div = document.createElement("div")
            div2 = document.createElement("div")
            div3 = document.createElement("div")
            img = document.createElement('img')
            p = document.createElement('p')
            img.className = "cropped2"
            button = document.createElement('button')
            th.className = "menu-items"
            div.textContent = pizzas[k]
            div.className = "txt-container"
            img.src = "img/pizza_imgs/" + (k + 1).toString() + ".png"
            img.id = "pizza" + k.toString()
            div2.className = "order-button"
            p.textContent = "$6.66"
            div2.appendChild(p)
            div3.className = "bottom"
            button.textContent = "Order"
            div3.appendChild(button)
            div2.appendChild(div3)

            th.appendChild(div)
            th.appendChild(p)
            th.appendChild(img)
            th.appendChild(div2)
            tr.appendChild(th)
            k += 1
        }
        table.appendChild(tr)
    }
    tableContainer.append(table)
    content.append(tableContainer)
}

content.append(navbar())
animation()
displayingPizzas()
