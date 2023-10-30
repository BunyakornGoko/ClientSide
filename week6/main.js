//1.create object with object literals
const st1 = {studentId:65130500108 , fistname:'Bunyakorn' , lasstname:'Gokogua'}
console.log(typeof(st1));
console.log(st1)

console.log(Object.keys(st1)) //array of property key
console.log(Object.values(st1)) //array of property value

const st2 ={}
console.log(typeof(st2))

//composite object
const st3 = {
    firstname: 'Bunyakorn',
    lastname: 'Pornsombat',
    stdid: 65130500108,
    address: {province:'Bangkok' , country: 'Thailand'}
}
console.log(st3)
console.log(st3.address.country)

//property value can store function 
const st4 = {
    firstname: 'Bunyakorn' , 
    lastname: 'Pornsombatpaibool',
    stdid:65130500108,
    getFullname: function () {
        return `${this.firstname} ${this.lastname}`
    }
}
console.log(st4.getFullname())
//get property
console.log(st4.firstname)
console.log(st4['firstname']) //dynamic key
//dynamic property: add a new one , update or delete existing property
st4.email = 'bunyakorn.porn@mail.kmutt.ac.th' //add a new property
st4.firstname = 'Pattarawan'
delete st4.email //delete a property
st4.getAddress = function () {
    return this.address
}
console.log(st4)
console.log(Object.prototype.isPrototypeOf(st4))