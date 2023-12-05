const students = [
  {
    name: "Sophia",
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },
  {
    name: "Mason",
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },
  {
    name: "Isabella",
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },
  {
    name: "Liam",
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },
  {
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  }
]
function getAttendaceRate(student) {
  const passAttendance = student.attendance.filter((element) => element === true,0).length
  const lengthOfAttendance = student.attendance.length
  return (passAttendance / lengthOfAttendance) * 100
}

function getAvgScore(student) {
  const sumTestscores = student.testScores.reduce((accumulator, currentValue) => accumulator + currentValue,0)
  const numOfTimetestScore = student.testScores.length
  return sumTestscores / numOfTimetestScore
}

function underPerformStudents(students) {
  return students.map((student) => {
    return {
      name: student.name,
      attendanceRate: getAttendaceRate(student),
      AvgScores: getAvgScore(student)
    }
  }).filter((student) => student.attendanceRate < 80 && student.AvgScores < 70)
}
console.log(underPerformStudents(students))
// module.exports = {getAttendaceRate,getAvgScore,underPerformStudents}
