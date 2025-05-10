const questions = [];

const question1 = {
  category: "History",
  question: "In what year WWII ended?",
  choices: ["1944", "1945", "1946"],
  answer: "1945",
}

const question2 = {
  category: "Animals",
  question: "How many cervical vertebrae giraffes have?",
  choices: ["seven", "ten", "twelve"],
  answer: "seven",
}

const question3 = {
  category: "Geography",
  question: "What is the longest river on Earth?",
  choices: ["Warta", "Amazonka", "Nile"],
  answer: "Nile",
}

const question4 = {
  category: "Informatics",
  question: "In what language you code the styles of your website?",
  choices: ["css", "c++", "python"],
  answer: "css",
}

const question5 = {
  category: "Biology",
  question: "What part of the cell is responsible for producing energy?",
  choices: ["Nucleus", "Mitochondria", "Ribosome"],
  answer: "Mitochondria",
}

questions[0] = question1;
questions[1] = question2;
questions[2] = question3;
questions[3] = question4;
questions[4] = question5;

function getRandomQuestion(questions) {
  let random = Math.floor(Math.random()*questions.length);
  return questions[random];
}


function getRandomComputerChoice(choices) {
  let randomChoice = Math.floor(Math.random()*questions.length);
  return choices[randomChoice];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}