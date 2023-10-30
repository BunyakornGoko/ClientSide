const nums = [10,20,30,40,50]
const obj = {id: 1001 , title:'Js Beginner' , isbn: 5784759 , author: {fullname:'Bunykorn'}}

const [num1 , num2] = nums
console.log(num1);
console.log(num2);

const {isbn:bookId} = obj //change isbn to bookId
console.log(bookId);

const {
    author : {fullname : authorName}
} = obj

console.log(authorName);