const students = [
  {
    name: "Renzo",
    grade: 95,
    section: "IT-3A",
  },
  {
    name: "Maria",
    grade: 88,
    section: "IT-3A",
  },
  {
    name: "Juan",
    grade: 72,
    section: "IT-3A",
  },
  {
    name: "Angela",
    grade: 91,
    section: "IT-3B",
  },
  {
    name: "Carlo",
    grade: 76,
    section: "IT-3B",
  },
  {
    name: "Sophia",
    grade: 68,
    section: "IT-3B",
  },
  {
    name: "Mark",
    grade: 84,
    section: "IT-3C",
  },
  {
    name: "Daniel",
    grade: 74,
    section: "IT-3C",
  },
  {
    name: "Nicole",
    grade: 97,
    section: "IT-3C",
  },
  {
    name: "Kevin",
    grade: 63,
    section: "IT-3A",
  },
];

function getStudentNames(students) {
  return students.map((student) => student.name);
}
function getPassingStudents(students) {
  return students.filter((student) => student.grade >= 75);
}
function getFailingStudents(students) {
  return students.filter((student) => student.grade < 75);
}
function findStudent(students, name) {
  return students.find((student) => student.name === name);
}
function getAchievers(students) {
  return students.filter((student) => student.grade >= 90);
}

console.log("All Student Names: ", getStudentNames(students));
console.log("Passing Students: ", getPassingStudents(students));
console.log("Failing Students: ", getFailingStudents(students));
console.log("Achievers: ", getAchievers(students));
console.log("Find one specific student: ", findStudent(students, "Daniel"));
