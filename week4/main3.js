let arr
arr = arr ?? [1,2,3] //undefined และ null จะโชว์ทางฝั่งขวาของ ??
console.log(arr)

let num = [1,2,3]
arr = num ?? [5,5,5]
console.log(arr)