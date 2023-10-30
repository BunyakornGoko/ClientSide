class Person{
    constructor(firstname,lastname,dateOfBirth){
        this.firstname = firstname
        this.lastname = lastname
        this.dateOfBirth = dateOfBirth
    }
    getFullName(){
        return `${this.lastname} , ${this.firstname}`
    }

    isEqual(anotherPerson){
        return (
            this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() &&
            this.lastname.toLowerCase() === anotherPerson.lastname.toLowerCase()
        )
    }

    getAge(){
        const currentDateMilli = Date.now()
        const birthDateMilli = this.dateOfBirth.getTime()
        const diffMilli = currentDateMilli - birthDateMilli
        // console.log(currentDateMilli , birthDateMilli , diffMilli) <- return Millisecond
        const diffDate = new Date(diffMilli)
        return diffDate.getFullYear() - 1970
    }

    toString(){
        return `${this.getFullName()} , ${this.getAge()}`
    }
}

const p1 = new Person('Bunyakorn','Pornsombatpaibool',new Date(2003,10,13))
const p2 = new Person('samsunsaisum','Pornsombatpaibool',new Date(2003,0,13))

console.log(p1.getFullName)
console.log(p2.isEqual(p1))
console.log(p1.isEqual(p1))
console.log(p1.getAge())
console.log(p2.toString())