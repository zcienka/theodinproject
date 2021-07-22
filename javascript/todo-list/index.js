let todoTasks = []
let listsOfTasks = []
let currentListId = 0
let localStorageListTitles = JSON.parse(localStorage.getItem("ListTitles"))
if (!localStorageListTitles) {
    localStorageListTitles = ["Today"]
    localStorage.setItem("ListTitles", JSON.stringify(localStorageListTitles))
}
// listsOfTasks = localStorageListTitles
let currentListName = "Todo " + currentListId.toString()

class Tasks {
    constructor(title, description, id, dueDate, isChecked) {
        this.title = title
        this.description = description
        this.id = id
        this.dueDate = dueDate
        this.isChecked = isChecked
    }
}

let addNewTaskBtn = document.getElementById('add-new-task')
addNewTaskBtn.addEventListener("click", addNewList)
const newTaskPopUp = document.getElementById("new-task-popup")
const showListPopUp = document.getElementById("show-task-details")
const background = document.querySelector(".background")
let submit = document.getElementById('submit')
let showPopup = true
let localStorageTodos = JSON.parse(localStorage.getItem(currentListName))

function addNewList() {
    newTaskPopUp.style.display = "block"
}

const detailsPopupClose = document.getElementById("task-details-popup-close")
const newTaskPopUpClose = document.getElementById("new-task-popup-close")

newTaskPopUpClose.onclick = function () {
    newTaskPopUp.style.display = "none"
}

detailsPopupClose.onclick = function () {
    showListPopUp.style.display = "none"
}

submit.onclick = function () {
    let taskTitle = document.getElementById("new-list-title")
    let listDescription = document.getElementById("new-list")
    let listDueDate = document.getElementById("due-date")
    let id = todoTasks.length.toString()
    let task = new Tasks(taskTitle.value, listDescription.value, id, listDueDate.value, false)

    background.style.display = "none"
    todoTasks.push(task)
    localStorage.setItem(currentListName, JSON.stringify(todoTasks))
    displayList(task, todoTasks.length - 1)
}

function displayList(list, index) {
    let tasks = document.querySelector(".tasks-titles")
    let tasksList = document.createElement("div")
    let checkbox = document.createElement("input")
    let textNode = document.createTextNode(list.title)
    let deleteButton = document.createElement("button")

    deleteButton.className = "delete-button"
    deleteButton.id = index
    deleteButton.innerHTML = "&times;"
    deleteButton.setAttribute("onclick", "deleteTask(this.id)")

    checkbox.type = "checkbox"
    checkbox.id = index
    checkbox.checked = list.isChecked
    tasksList.className = "tasks-list"
    tasksList.setAttribute("onclick", "taskDetails(this.id)")
    checkbox.setAttribute("onclick", "showDetails(this.id)")

    tasksList.id = index
    tasksList.appendChild(checkbox)
    tasksList.appendChild(textNode)
    tasksList.appendChild(deleteButton)
    tasks.appendChild(tasksList)
}

function taskDetails(id) {
    let todoList = todoTasks[id]

    let showDetails = document.getElementById('show-task-details')
    if (showPopup === false)
        showPopup = true
    else {
        showDetails.style.display = "block"

        let taskTitle = document.getElementById('task-title')
        let listDescription = document.getElementById('task-description')
        let listDueDate = document.getElementById("task-due-date")

        taskTitle.value = todoList.title
        listDueDate.value = todoList.dueDate
        listDescription.textContent = todoList.description
    }
}

function showDetails(id) {
    if (todoTasks[id].isChecked === true)
        todoTasks[id].isChecked = false
    else
        todoTasks[id].isChecked = true
    showPopup = false
    localStorage.setItem(currentListName, JSON.stringify(todoTasks))
}

function deleteTask(id) {
    showPopup = false
    todoTasks.splice(id, 1)
    localStorage.setItem(currentListName, JSON.stringify(todoTasks))
    localStorageTodos = JSON.parse(localStorage.getItem(currentListName))
    document.getElementsByClassName("tasks-titles")[0].innerHTML = ""

    displayFromLocalStorage()
    localStorage.setItem(currentListName, JSON.stringify(todoTasks))
    localStorageTodos = JSON.parse(localStorage.getItem(currentListName))
}

function displayFromLocalStorage() {
    todoTasks = []
    let currentList = localStorageTodos
    console.log(currentList)
    if (currentList) {
        for (let i = 0; i < currentList.length; i++) {
            displayList(currentList[i], i)
            todoTasks.push({
                title: currentList[i].title,
                description: currentList[i].description,
                id: i.toString(),
                dueDate: currentList[i].dueDate,
                isChecked: localStorageTodos[i].isChecked
            })
        }
    }
}

displayFromLocalStorage()

function createNewListOfTasks() {
    let addNewList = document.getElementById('added-list-of-tasks')
    let li = document.createElement("li")
    let input = document.createElement("input")
    let img = document.createElement("img")
    input.placeholder = "Enter the name of your new list"
    input.maxLength = 18
    input.id = 'listTitle#' + listsOfTasks.length.toString()
    input.setAttribute("onfocusout", "saveTitleToLocalStorage(this.id)")
    // input.setAttribute("onclick", "changeCurrentList(this.id)")
    img.src = "img/calendar.png"
    li.appendChild(input)
    li.appendChild(img)
    addNewList.appendChild(li)
    listsOfTasks.push("")
}

function saveTitleToLocalStorage(id) {
    let title = document.getElementById(id)
    let newId = id.replace('listTitle#', '')
    console.log("XD")
    listsOfTasks[newId] = title.value
    localStorage.setItem("ListTitles", JSON.stringify(listsOfTasks))
    document.getElementById("added-list-of-tasks").innerHTML = ""
    localStorageListTitles = JSON.parse(localStorage.getItem("ListTitles"))
    displayListOfTodoLists()
}

function changeCurrentList(id) {
    currentListId = id.replace('listTitle#', '')
    // document.getElementById("added-list-of-tasks").innerHTML = ""
    // displayListOfTodoLists()
    currentListName = "Todo " + currentListId.toString()
    todoTasks = []
    document.getElementsByClassName("tasks-titles")[0].innerHTML = ""

    localStorageTodos = JSON.parse(localStorage.getItem(currentListName))
    displayFromLocalStorage()
}

function displayListOfTodoLists() {
    let tasksFromLocalStorage = document.getElementById('added-list-of-tasks')

    if (!localStorageListTitles) {
        localStorageListTitles = ["Today"]
        listsOfTasks = localStorageListTitles
    }
    addNewListBtn()
    for (let i = 0; i < localStorageListTitles.length; i++) {
        let calendarImg = document.createElement("img")
        calendarImg.src = "img/calendar.png"
        // deleteImg.style.float = "right"
        calendarImg.id = "img#" + i.toString()
        let li = document.createElement("li")
        li.textContent = localStorageListTitles[i]
        li.append(calendarImg)
        li.id = "listTitle#" + i.toString()
        li.setAttribute("onclick", "changeCurrentList(this.id)")
        li.setAttribute("onmouseover", "changeIconToDeleteBtn(this.id)")
        li.setAttribute("onmouseout", "changeIconToCalendar(this.id)")
        tasksFromLocalStorage.appendChild(li)

    }
    listsOfTasks = localStorageListTitles
}

function addNewListBtn() {
    let tasksFromLocalStorage = document.getElementById('added-list-of-tasks')
    let newListButton = document.createElement("li")
    let img = document.createElement("img")
    img.src = "img/plus.png"
    newListButton.setAttribute("onclick", "createNewListOfTasks(this.id)")
    newListButton.id = "list-of-todo-lists"
    newListButton.textContent = "Add new list"
    newListButton.appendChild(img)
    tasksFromLocalStorage.appendChild(newListButton)

    if (listsOfTasks.length !== 0) {
        let newListName = "Todo " + (listsOfTasks.length - 1).toString()
        console.log(listsOfTasks)
        localStorage.setItem(newListName, JSON.stringify([]))
    }
}

function changeIconToDeleteBtn(id) {
    currentListId = id.replace('listTitle#', '')
    let calendarImg = document.getElementById("img#" + currentListId)
    calendarImg.src = "img/delete_btn.png"
    calendarImg.style.width = "24px"
    calendarImg.style.height = "24px"
    calendarImg.className = "delete-list-btn"
    calendarImg.setAttribute("onclick", "deleteListOfTodos(this.id)")
}

function changeIconToCalendar(id) {
    currentListId = id.replace('listTitle#', '')
    let deleteBtn = document.getElementById("img#" + currentListId)
    // let deleteImg = document.createElement("img")
    deleteBtn.src = "img/calendar.png"
    deleteBtn.style.width = "24px"
    deleteBtn.style.height = "24px"
}

// function deleteListOfTodos(id) {
//     currentListId = id.replace('listTitle#', '')
//     localStorageListTitles.splice(currentListId, 1)
//     localStorage.setItem("ListTitles", JSON.stringify(localStorageListTitles))
//     localStorage.removeItem("Todo" + currentListId)
//     for (let i = 0; i < localStorage.length; i++) {
//         let item = localStorage.getItem(localStorage.key(i))
//         if (localStorage.key(i) !== "ListTitles") {
//             let itemId = localStorage.key(i).replace('Todo ', '')
//             if (parseInt(itemId) <= parseInt(currentListId)) {
//                 localStorage.removeItem("Todo " + itemId)
//                 localStorage.setItem("Todo " + (parseInt(itemId) - 1).toString(), JSON.stringify(item))
//             }
//         }
//     }
// }

displayListOfTodoLists()


