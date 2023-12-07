import { Todo } from "./todo.js"
function TodoManagement(){
    let todos = []
    function addTodo(desc){
        const todo = new Todo()
        todo.setDescription(desc)
        todos.push(todo)
        return todo.id
    }

    function findTodo(searchId){
        return todos.find((todo) => todo.id === searchId)
    }

    function findIndexIodo (searchId){
        return todos.findIndex((todo) => todo.id === searchId)
    }

    function removeTodo(removeId){
        return todos = todos.filter((todo) => todo.id !== removeId)
    }
    function getTodos(){
        return todos
    }
    function getNumberOfDone(){
        return todos.filter((todo) => todo.done === true).length
    }
    function getNumberOfNotDone(){
        return todos.filter((todo) => todo.done === false).length
    }
    function clearTodo(){
        todos = []
    }
    function setItemToDone(doneId){
        todos.forEach((todo) => {
            if(todo.id === doneId){
                todo.setDone(true)
            }
        })
    }
    function loadTodos (userTodos){
        todos = userTodos
    }
    return {addTodo , findTodo , findIndexIodo , removeTodo , getTodos , getNumberOfDone , getNumberOfNotDone , clearTodo , setItemToDone ,loadTodos} 
}
export {TodoManagement}