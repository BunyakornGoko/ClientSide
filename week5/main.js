const x = [1,true ,'A']
console.log(x)
console.log(x.length)
console.log(x[0])
console.log(x[x.length - 1]) // last element of array
x[x.length] = 555 // append a new element 
x.push(888)
x[1] = false
console.log(x)

const y = [] // y is an empty Array
let z 
console.log(typeof(y))
console.log(typeof(z))

if(y.length === 0){
    console.log('y is an empty array')
} else {
    console.log('y is not an empty array')
}

if(z?.length === 0){
    console.log('z is an empty array')
} else {
    console.log('z is not an empty array')
}