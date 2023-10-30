//decralation
function sum(n1,n2){
    return n1 + n2
}

//function expression , annonymous function
const sum2 = function (n1,n2){
    return n1 + n2
}

//function expression
const sum3 = function sumfn(n1,n2){
    return n1 + n2
}

//arrow function
const sum4 = (n1,n2) => n1+n2

console.log(sum(1,2))
console.log(sum2(1,2))
console.log(sum3(1,2))
console.log(sum4(1,2))