import { createInterface } from "readline";
import { stdin, stdout } from "process";

const rl = createInterface({
  input: stdin,
  output: stdout
});

let questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    answer: "Au"
  }
];

let score = 0;
let currentQuestion = 0;

function displayQuestion() {
  if (currentQuestion < questionsData.length) {
    const current = questionsData[currentQuestion];
    console.log(current.question);
    current.options.map((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
    rl.question("Your option: ", (selectedAnswer) => {
      checkAnswer(selectedAnswer.trim(), current.answer);
    });
  } else {
    console.log(`You scored ${score}/${questionsData.length}`);
    rl.close();
  }
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (
    selectedAnswer.toLowerCase() === correctAnswer.toLowerCase() ||
    parseInt(selectedAnswer) ===
      questionsData[currentQuestion].options.indexOf(correctAnswer) + 1
  ) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Incorrect!");
    console.log("The correct answer is: ", correctAnswer);
  }
  currentQuestion++;
  displayQuestion();
}
displayQuestion();
