class Students{
    static nextId = 1
    constructor(studentFName , studentLName){
        this.id = Students.nextId++
        this.studentFName = studentFName
        this.studentLName = studentLName
    }
}
const stu1 = new Students('Pattarawan','kumoad')
const stu2 = new Students('Bunyakorn','Porn')
console.log(stu1);
console.log(stu2);