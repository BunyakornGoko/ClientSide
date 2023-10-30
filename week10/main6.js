class Todo{
    static nextId = 0
    constructor(description){
        this.id = Todo.nextId++
        this.description = description
    }
    getTodo(){
        return {id: this.id , description: this.description}
    }
    setDescription(newDescription){
        this.description = newDescription
    }
}
// let p1 = new Todo('anya')
// let p2 = new Todo('Ball')
// let p3 = new Todo('Bas')

// console.log(p1.getTodo());
// console.log(p2.getTodo());
// console.log(p3.getTodo());

// p1.setDescription('Goko');
// console.log(p1);

function TodoManagement(){
    let todos = []
    function addTodo(desc){
        return todos.push(new Todo(desc))
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
    return {addTodo , findTodo , findIndexIodo , removeTodo , getTodos} 
}
let todoManagement = TodoManagement()
console.log(todoManagement.addTodo('Pattha'));
console.log(todoManagement.addTodo('Momo'));
console.log(todoManagement.addTodo('JJ'));

console.log(todoManagement.findTodo(0));
console.log(todoManagement.findTodo(1));
console.log(todoManagement.findTodo(2));

console.log(todoManagement.findIndexIodo(0));
console.log(todoManagement.findIndexIodo(1));
console.log(todoManagement.findIndexIodo(2));

console.log(todoManagement.removeTodo(0));

console.log(todoManagement.getTodos());










