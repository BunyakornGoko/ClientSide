// random Dict 1 - 6
let rand = Math.floor(Math.random() * 6) + 1 //1-6
console.log(rand)

let rand2 = Math.floor(Math.random() * 41) + 10 //10 - 50

let rand3 = Math.floor(Math.random() * 901) + 100 //100 - 1000


//random in a range 1 - 100
let min =1
let max = 100
let rand4 = Math.floor(Math.random() * (max - min + 1)) + min // 1 - 99
console.log(rand4) 
//1.Math.random() -> 0 - 0.999999
//2. No1. * 100 -> 0 - 99.9999999
//2.Math.floor(No2.) -> 0 - 99
//4.No3. + min -> 1 - 100