//Constructor Functions
function Person(id,firstname,lastname){
    this.id = id
    this.firstname = firstname
    this.lastname = lastname
}
const p1 = new Person(123,'Bunyakorn','Omagaze')
const p2 = new Person(555,'Jelly','Mumu')
const p3 = new Person(666,'Yuki','O')
p1.email = 'bunyakorn.porn@mail.kmutt.ac.th'
console.log(p1)
console.log(p2)
console.log(p3)
//Object property <- Person property <- p1
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Person.prototype.isPrototypeOf(p1))