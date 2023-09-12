const x = [1,9,11]
const y = [3,5,7]
// using spread operator [...] to copy element of x and y
const z = [...x, ...y]
console.log(z)

const a = [1 , ...y , 11]
console.log(a)
console.log(a[2])

const str = 'hello world'
const collstr = [...str]
console.log(collstr)

for (const i of collstr) {
    console.log(i)
}