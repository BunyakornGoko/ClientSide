function Person(id,firstname,lastname){
    this.id = id
    this.firstname = firstname
    this.lastname = lastname
}
const p1 = new Person(123,'Bunyakorn','Omagaze')
const pp1 = Object.create(p1)
console.log(pp1)
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)
console.log(Object.prototype.isPrototypeOf(pp1)) //true
console.log(Person.prototype.isPrototypeOf(pp1)) //true
pp1.hobbies = ['reading' , 'shopping']
console.log(pp1)
console.log(Object.keys(pp1))
console.log(Object.values(pp1))