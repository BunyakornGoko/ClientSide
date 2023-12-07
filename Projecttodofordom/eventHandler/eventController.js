import { TodoManagement} from "../lib/todomanagement.js";
import {showTodoItem , showNumberOfDone , showNumberOfNotDone , removeTodoItem} from "../ui/todolist.js"
const manage = TodoManagement()
function addTodoHandler(){
    const addTodoDiv = document.getElementById('addTodo')
    const addTodoInput = addTodoDiv.children[1]
    const valueOfTodoInput = addTodoInput.value
    if(valueOfTodoInput.length === 0){
        return 
    }
    const id = manage.addTodo(valueOfTodoInput)
    const toDo = manage.findTodo(id)
    showTodoItem(toDo.id , toDo.description)

    const parentDiv = document.getElementById(`${toDo.id}`)
    const notDone = parentDiv.children[1]
    const reMove = parentDiv.children[2]
    notDone.addEventListener('click', notDoneButtonHandler)
    reMove.addEventListener('click' , removeButtonHandler)
}
function notDoneButtonHandler(event){
    event.target.style.backgroundColor = 'green'
    event.target.style.color = 'white'
    event.target.textContent = 'Done'
    manage.setItemToDone(event.target.parentElement.getAttribute('id'))
}
function removeButtonHandler(event){
    removeTodoItem(event.target.parentElement.getAttribute('id'))
    manage.removeTodo(event.target.parentElement.getAttribute('id'))
}
function loadHandler(){
    const addTodoDiv = document.getElementById('addTodo')
    const addButton = addTodoDiv.children[2]
    addButton.addEventListener('click' , addTodoHandler)
    const getItem = localStorage.getItem('todos')
    if(!getItem){
        return
    }
    const arrTodos = JSON.parse(getItem)
    manage.loadTodos(arrTodos)
    manage.getTodos().forEach((todo) => {
        showTodoItem(todo.id,todo.description)
        const divParent = document.getElementById(`${todo.id}`)
        const notDone = divParent.children[1]
        const remove = divParent.children[2]
        notDone.addEventListener('click' , notDoneButtonHandler)
        remove.addEventListener('click' , removeButtonHandler)
    })
    showNumberOfDone(manage.getNumberOfDone())
    showNumberOfNotDone(manage.getNumberOfNotDone())

}
function beforeUnloadHandler(event){
    event.preventDefault()
    localStorage.setItem('todos' , JSON.stringify(manage.getTodos()))
    manage.clearTodo()
}
export {addTodoHandler , loadHandler , beforeUnloadHandler}