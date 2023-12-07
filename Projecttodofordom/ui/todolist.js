function showTodoItem(newId, newDescription){
    const listTodo = document.getElementById('listTodo')
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class' , 'todoItem')
    newDiv.setAttribute('id' , newId)
    const newP = document.createElement('p')
    newP.textContent = newDescription
    const newButton1 = document.createElement('button')
    newButton1.textContent = 'Not done'
    const newButton2 = document.createElement('button')
    newButton2.textContent = 'remove'
    listTodo.appendChild(newDiv)
    newDiv.append(newP,newButton1,newButton2)
}
function showNumberOfDone(numberOfDone){
    const doneId = document.getElementById('done')
    doneId.textContent = `Number of Done: ${numberOfDone}`
}
function showNumberOfNotDone(numberOfNotDone){
    const notDoneId = document.getElementById('notDone')
    notDoneId.textContent = `Number of Not Done: ${numberOfNotDone}`
}
function removeTodoItem(removeId){
    const todoItemDiv = document.getElementById(`${removeId}`)
    todoItemDiv.remove()
}
export {showTodoItem , showNumberOfDone , showNumberOfNotDone , removeTodoItem}