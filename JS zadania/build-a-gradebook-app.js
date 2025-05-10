let scores = [];

function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function getGrade(studentScore) {
  if (studentScore == 100) {
    return "A+";
  }
  else if (studentScore >= 90) {
    return "A";
  }
  else if (studentScore >= 80) {
    return "B";
  }
  else if (studentScore >= 70) {
    return "C";
  }
  else if (studentScore >= 60) {
    return "D";
  }
  else if (studentScore >= 0) {
    return "F";
  }
}

function hasPassingGrade(score) {
  if (getGrade(score) == "F") {
    return false;
  }
  else {
    return true;
  }
}

function studentMsg(scores, studentScore) {
  let average = getAverage(scores);
  let grade = getGrade(studentScore);
  if (hasPassingGrade(studentScore) == true) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
  }
  else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
  }
}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));