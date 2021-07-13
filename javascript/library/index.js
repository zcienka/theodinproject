let myLibrary = []
const popUpBox = document.getElementById("popup")
const button = document.getElementById("add-new-book")
const close = document.getElementsByClassName("close")[0]
const submit = document.getElementById("submit")
let displayBooks = document.getElementsByClassName("display-books")[0]
let tr = document.createElement("tr")
const localStorageBooks = JSON.parse(localStorage.getItem("Library"))


// max to 12
function displayFromLocalStorage() {
    if (localStorageBooks) {
        for (let i = 0; i < localStorageBooks.length; i++) {
            displayElements(localStorageBooks[i])
        }
    }
}
displayFromLocalStorage()
let Book = class {
    constructor(title, author, numOfPages, wasRead) {
        this.title = title
        this.author = author
        this.pages = numOfPages
        this.wasRead = wasRead
    }
}

function addBookToLibrary() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const numOfPages = document.getElementById('pages-num').value
    let wasRead = document.getElementById('isChecked').checked
    const book = new Book(title, author, numOfPages, wasRead)
    displayElements(book)
    localStorage.setItem("Library", JSON.stringify(myLibrary))
}

function displayElements(book) {
    let h5 = document.createElement("h5")
    let td = document.createElement("td")

    h5.textContent = 'Author: ' + book.author
    td.appendChild(h5)

    h5 = document.createElement("h5")
    h5.textContent = 'Title: ' + book.title
    td.appendChild(h5)

    h5 = document.createElement("h5")
    h5.textContent = 'Number of pages: ' + book.pages
    td.appendChild(h5)

    td.id = "vertical-center" + myLibrary.length.toString()
    td.className = "book-info"
    const input = document.createElement("input")
    input.type = "checkbox"
    input.id = myLibrary.length.toString()
    if (book.wasRead) {
        input.checked = true
    }
    else {
        input.checked = false
    }
    const label = document.createElement("label")
    label.htmlFor = myLibrary.length.toString()
    label.textContent = "Read"
    td.appendChild(label)
    td.appendChild(input)
    if ((myLibrary.length) % 4 === 0) {
        tr = document.createElement("tr")
    }

    let btn = document.createElement("button")
    btn.className = "btn"
    btn.textContent = "Remove book"
    btn.id = myLibrary.length.toString()
    td.append(btn)
    tr.appendChild(td)
    displayBooks.appendChild(tr)
    btn.onclick = function () {removeBook(btn.id)}
    myLibrary.push(book)
}
function removeBook(id){
    localStorage.removeItem("Library");
    let value = myLibrary[id]
    let arr = myLibrary.filter(function(item) {
        return item !== value
    })
    myLibrary = []


    document.getElementsByClassName("display-books")[0].innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        displayElements(arr[i])
    }
    localStorage.setItem("Library", JSON.stringify(myLibrary))
}


button.onclick = function() {
    popUpBox.style.display = "block"
}
close.onclick = function() {
    popUpBox.style.display = "none"
}
submit.onclick = function() {
    addBookToLibrary()
    popUpBox.style.display = "none"

}
window.onclick = function (event) {
    if (event.target === popUpBox) {
        popUpBox.style.display = "none"
    }
}






