const obj1 = {}
const obj2 = {id:1}
if(Object.keys(obj1).length === 0){
    console.log('True')
}
if(Object.keys(obj2).length === 0){
    console.log('True')
} else {
    console.log('False')
}

console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))

function isEmpty(obj){
    return JSON.stringify(obj) === '{}'
}
console.log(isEmpty(obj1))