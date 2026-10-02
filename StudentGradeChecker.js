const studentName = "SheenPy";
const grade = 89;

function checkGrade(grade) {
  if (grade >= 90) {
    console.log("Excellent!");
  } else if (grade >= 80) {
    console.log("Very Good!");
  } else if (grade >= 75) {
    console.log("Passed.");
  } else {
    console.log("Failed.");
  }
}

function isPassing(grade) {
  if (grade == "Failed.") {
    return true;
  } else {
    return false;
  }
}

const result = checkGrade(grade);

console.log("Student: ", studentName);
console.log("Grade: ", grade);
console.log("Result: ", result);
console.log("Passing: ", isPassing(grade));
