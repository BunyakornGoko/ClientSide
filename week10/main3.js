function sum(num1,num2,num3){
    return num1 + num2 + num3
}
let nums = [5,20,10]
//spread parameter
console.log(sum(...nums)); //40
console.log(sum(nums));