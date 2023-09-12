// create array with Array.from
const x = [1,2,4,8,16,32]
let y = Array.from(x)
console.log(x)
console.log(y)
console.log(y.length)
// y = x ถึงจะได้ x === y 

if(x === y){
    console.log('x === y')
} else {
    console.log('x!==y')
}