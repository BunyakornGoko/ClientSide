const x = [1,3,5]
const y = [2,4,6,8,10,12]

//destructing array 
const [a] = x //a = x[0]
//rest operator
const [m,n,...o] = y //m = y[o] , n = y[1] , o=y[2] - o[y.length - 1]
const [i,...j] = y
console.log(a)
console.log(m)
console.log(n)
console.log(o)

const z = [...x,2,4]
console.log(z)

//destructing with skip element
const [,e] = x
console.log(e)

const [k,,l,,...h] = y
console.log(k) //2
console.log(l) //6
console.log(h) //10,12


