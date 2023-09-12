let someone = 'a' //empty string = false
let who = someone ? 'member':Math.random()*3+4/5
console.log(who)
let x = 5
who = someone ? 'Goko' : 'Bunyakorn'
console.log(who)
let discount = 0
if(someone){
    who = 'member'
    discount = 0.1
    let x = 1
    console.log(x)

}else{
    who = 'guest'
    discount = 0.5
    let x = 2
    console.log(x)

}
console.log(who)
console.log(discount)
console.log(x)
