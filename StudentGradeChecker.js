const studentName = "SheenPy";
const grade = 89;

function checkGrade(grade) {
  if (grade >= 90) {
    return "Excellent";
  } else if (grade >= 80) {
    return "Very Good!";
  } else if (grade >= 75) {
    return "Passed";
  } else {
    return "Failed.";
  }
}

function isPassing(grade) {
  if (grade >= 75) {
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
