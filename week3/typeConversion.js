//x is a global scope
let x = 1
console.log(x)
{  
    //x is a block scope  
    let x = 5  
    console.log(x)  
    var y = 111
}
console.log(y) //var has no block scope, so y is a global scope
x = 10
console.log(x)
function doIt(){
    if(1){
        //Block scope
        let x = 555
        console.log(x)
    } else {
        console.log(`not 1`)  
        console.log(`x: ${x}`)
    }
}
doIt()
console.log(x) // global scope x of line 2

let m = 1 
//explicit type conversion
console.log(typeof m)
//number->string
console.log(typeof String(m))
//number->boolean
console.log(typeof Boolean(m))
//if need boolean but 1 is number, so implicit conversion is called automaticallyif (1) 
console.log('implicit conversion is working')