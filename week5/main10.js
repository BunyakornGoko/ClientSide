// 1.function declaration
function concat(str1,str2){
    return str1 + str2
}


console.log(concat('Hello','world'))

// 2.function expression
const toLower = function(str){
    return str.toLowerCase()
}
console.log(toLower('HELLOWORLD'))

const doSomething = toLower
console.log(doSomething('Hi'))
console.log(typeof(doSomething))
const y = toLower('Hey') //hey
console.log(y)
console.log(typeof(y))

const doit = function(op,str1,str2){
    return op(str1,str2)
}
console.log(doit(concat,'good','morning'))// goodmorning
console.log(doit(toLower,'GOOD','MORNING')) //good

function a(){
    return toLower
}
const m = a()
console.log(m('MAX'))