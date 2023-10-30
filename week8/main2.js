const fruits = ['apple','mango','orange','pineapple']
console.log(fruits.every(fruit => ['a','e','i','o','u'].includes(fruit[0].toLowerCase())))
console.log(fruits.reduce((firstChars, fruit) => firstChars.concat(fruit.charAt(0)),''))

const nums = [1,2,3,4,5] //1*2*3*4*5
const result = nums.reduce((mul,num) => mul * num)
console.log(result)

const selProducts = [{id:1,price:100,sell:5} , {id:2,price:50,sell:2} , {id:3,price:25,sell:10}]
const result2 = selProducts.reduce((total , prices) => total + prices.price * prices.sell,0)
console.log(result2)

