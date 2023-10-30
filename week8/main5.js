const animals = ['ant','dogs','cats','bird']
animals.reverse()
console.log(animals);

const animals2 = ['ant','dogs','cats','Bird','Birds']
animals2.sort()
console.log(animals2)

const nums = [5,1,10,1000,2,3,50]
nums.sort()
console.log(nums.sort((a,b) => a-b))

const persons = [
    { id:1 , fullname:'Susan Jo'},
    { id:2 , fullname:'John Lee'},
    { id:3 , fullname:'ann Smith'},
]