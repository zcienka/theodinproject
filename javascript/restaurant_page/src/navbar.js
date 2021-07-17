export function navbar() {
    let nav = document.createElement("div")
    nav.className = "nav"
    let ul = document.createElement("ul")
    let pizzeria = document.createElement("li")
    pizzeria.textContent = "pizzeria"
    let li0 = document.createElement("li")
    li0.appendChild(pizzeria)
    let li = document.createElement("li")
    let contact = document.createElement("a")
    contact.href = "contact.html"
    contact.textContent = "contact"
    li.appendChild(contact)

    let li1 = document.createElement("li")
    let menu = document.createElement("a")
    menu.href = "menu.html"
    menu.textContent = "menu"
    li1.appendChild(menu)

    let li2 = document.createElement("li")
    let home = document.createElement("a")
    home.href = "home.html"
    home.textContent = "home"
    li2.appendChild(home)
    ul.appendChild(li0)
    ul.appendChild(li)
    ul.appendChild(li1)
    ul.appendChild(li2)
    nav.appendChild(ul)

    return nav
}
