function counter(){
    let count = 100
    function increment(){
        return ++count
    }
    function decrement(){
        return --count
    }
    function getCount(){
        return count
    }
    return {
        getCount , increment , decrement
    }
}
const fn = counter()

console.log(typeof fn.getCount); //function
console.log(fn.getCount);//[Function: getCount]
console.log(fn.getCount());//100

console.log(fn.increment());//101

console.log(fn.decrement()); //100