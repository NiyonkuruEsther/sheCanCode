import { createInterface } from "readline";
import { stdin, stdout } from "process";

const rl = createInterface({
  input: stdin,
  output: stdout
});

let questionData = [
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
let i = 0;

const generateQuestion = () => {
  if (i < 3) {
    rl.question(`Enter question ${i + 1}: `, (answer) => {
      questionData.push({ question: answer });
      console.log(questionData);
    });
  }
  generateQuestion();
};

generateQuestion();
