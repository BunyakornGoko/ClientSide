const st1 = {studentId:65130500108 , fistname:'Bunyakorn' , lasstname:'Gokogua'}
const st3 = {studentId:65130500107 , fistname:'Bunyakorn' , lasstname:'Gokogua'}
const st2 = st1
console.log(st1 === st3)
console.log(st2 === st1)

//create compare function to compare two students
function compareStudent(obj1,obj2){
    return obj1.studentId === obj2.studentId
}
console.log(compareStudent(st1,st2))
console.log(compareStudent(st1,st3))

