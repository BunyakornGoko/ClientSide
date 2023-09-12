const $a = 3
// const _b1c = 1 <- Can not assign value in const
console.log($a)

let x = 1
console.log(x)
console.log(typeof(x))
// weakly and dinamic data type
x = 'A'
console.log(x)
console.log(typeof(x))

x = true
console.log(typeof(x))
console.log(typeof(undefined))
console.log(typeof(null))

let nums = [1,3,5,7,9]
console.log(typeof(nums))

const obj = {id:1,title:'JS'}
console.log(obj)
console.log(typeof(obj))

//obj = nums <- Error

nums = obj
nums.id = 555
console.log(nums)
console.log(obj)

const ids = [101,105,110,120]
ids[0] = 1
console.log(ids)
ids[ids.length] = 444
console.log(ids)
ids[ids.length] = 111
console.log(ids)

let m , n , o = 1 , p=true , q = null
console.log(m)
console.log(n)
console.log(o)
console.log(p)
console.log(q)

if(m === undefined){
    console.log('m is undefined')
}
if(q === null){
    console.log('q is null')
}
if(2 == '2'){
    console.log(`'2' == 2`)
}
if(2 === '2'){
    console.log(`2 === '2'`)
} else {
    console.log(`2 !== '2'`)
}

if(typeof m === 'undefined'){
    console.log(`typeof m === 'undefined'`)
}

if(typeof q === 'object'){
    console.log(`typeof q === 'object'`)
}

function doSomething(activity){
    return activity
}
console.log(typeof(doSomething))



