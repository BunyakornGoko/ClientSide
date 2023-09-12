let score = 30
let grade 
if(score < 0 || score > 100){
    grade = 'invalid scores'
}else{
    if(score <= 40 ){
        grade = 'F'
    } else if(score <= 70){
        grade = 'B'
    }
}

let gradeMeaning
switch (grade) {
    case 'F':
        gradeMeaning = 'Need Improvement'
        break
    case 'c':
        gradeMeaning = 'Good'
        break
    case 'B':
        gradeMeaning = 'So good'
        break
    case 'A':
        gradeMeaning = 'Very Good'
        break
    default:
        break
}
console.log(grade)
console.log(gradeMeaning)