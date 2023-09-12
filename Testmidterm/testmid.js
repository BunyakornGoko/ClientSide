function raindrops(rain){
    let result = ''
    if(rain < 0){
        throw new Error('Value must be integer')
    }
    for(let i = 1 ; i <=rain ; i++){
        if(rain %3 === 0 && rain %5 === 0){
            result+= 'PlingPlang'    
        } else if(rain %3 === 0){
            result += 'Pling'
        } else if(rain %5 === 0){
            result += 'Plang'
        } else if(rain %7 === 0){
            result += 'Plong'
        } else {
            result += i.toString()
            result = rain
        }
        return result
    }

}
console.log(raindrops(30));