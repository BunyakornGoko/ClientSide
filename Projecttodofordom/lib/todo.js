class Todo{
    static nextId = 0
    constructor(id,description,done = false){
        this.id = id
        this.description = description
        this.done = done
        if(id === undefined){
            this.id = Todo.nextId++
        } else{
            this.id = id
        }
    }
    getTodo(){
        return {id: this.id , description: this.description}
    }
    setDescription(newDescription){
        this.description = newDescription
    }
    setDone(newDone){
        this.done = newDone
    }
}
export {Todo} 