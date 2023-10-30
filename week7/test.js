function getInfo(nums){
    if(nums === null || nums === undefined){
        return{}
    }
    const minValue = Math.min(...nums) // ...nums เป็นการกระจาย ตัวเลขใน Object ออกมา [1,2,3,4,5] = 1,2,3,4,5
    const maxValue = Math.max(...nums) 
    let sum = 0
    for(let i = 0 ; i < nums.length; i++){
        sum += nums[i]
    }
    return{sum:sum , avg:sum / nums.length , min:minValue , max:maxValue}
}
console.log(getInfo([1,2,3,4,5]));