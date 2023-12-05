function echo(msg){
    return msg
}

function sum(...nums){
    let total = 0
    for(const num of nums){
        total += num
    }
    return total
}
// console.log(sum(1,2,3,4));


const MAX_VALUE = 100
//common js
//named export
//export list

//default export
export {sum as default , echo , MAX_VALUE}

