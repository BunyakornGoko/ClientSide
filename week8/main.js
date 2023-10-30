const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'DAVID', score: 80 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 80 },
    { name: 'Eve', score: 78 },
    { name: 'david', score: 85 }
  ]
const found1 = studentScores.find((student) => student.name.toLowerCase() === 'david' && student.score >= 80)

const found2 = studentScores.filter((student) => student.name.toLowerCase() === 'david' && student.score >= 80)
console.log(found2);

const foundIndex = studentScores.findIndex(
    (student) => student.name.toLowerCase() === 'eve'
  )
  console.log(foundIndex) //5