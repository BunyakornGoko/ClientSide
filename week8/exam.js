function getPassingNames(students) {
    return students.filter((student) => student.score >= 70).map((student) => student.name.toUpperCase())
}
function getNoPassingName(students2){
  return students2.filter((stu) => stu.score <= 50).map((stu) => stu.name.toUpperCase())
}
// Example usage:
const studentScores = [
  { name: 'Alice', score: 85 }, 
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 } , 
  { name: 'Joko', score: 45 }
]
const passingNames = getPassingNames(studentScores)
console.log(passingNames)

const noPassingName = getNoPassingName(studentScores)
console.log(noPassingName);
// Output should be: ["ALICE", "BOB", "EVE"]
