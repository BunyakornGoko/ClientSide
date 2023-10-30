const elements = ['dog','cat','elephant']
let element2 = elements.join('/')
console.log(element2);

function op1(fn){
    return fn()
}
function op2(fn){
    return fn
}
function greeting(){
    return 'Hello'
}
function goodbye(){
    return 'Bye Bye'
}

const result1 = op1(greeting)
console.log(typeof result1);
console.log(result1);
const result2 = op1(goodbye)
console.log(typeof result2);
console.log(result2);
const result3 = op2(greeting)
console.log(typeof result3);
console.log(result3);
const result4 = op2(goodbye)
console.log(typeof result3);
console.log(result4);

const a = greeting
const b = greeting()
console.log(a);
console.log(b);
console.log(a());



