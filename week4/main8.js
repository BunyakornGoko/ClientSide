const a = [1,2,3]
const b = [1,2,3]
console.log(a === b)

const c = b
console.log(c === b)
c[0] = 'a'
console.log(b)
console.log(c)

a[0] = 555
console.log(a)
console.log(b)
console.log(c)

const x = {id:1,title:'JS'}
const y = {id:1,title:'JS'} 
const z = y
console.log(x === y)
console.log(y === z)

y.id = 888
console.log(x)
console.log(y)
console.log(z)

let m = 5
let n = 10
let o = n
m = 999
o = 1000
console.log(m)
console.log(n)
console.log(o)