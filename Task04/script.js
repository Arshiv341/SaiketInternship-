const quizData = [
  {
    question: "1. Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "2. Which HTML element do we put JavaScript inside?",
    options: ["<script>", "<js>", "<code>", "<javascript>"],
    answer: "<script>"
  },
  {
    question: "3. What is the output of typeof null in JavaScript?",
    options: ["object", "null", "undefined", "string"],
    answer: "object"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const div = document.createElement("div");
    div.textContent = option;
    div.classList.add("option");
    div.addEventListener("click", () => selectOption(div));
    optionsEl.appendChild(div);
  });
}

function selectOption(selectedDiv) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(opt => opt.classList.remove("selected"));
  selectedDiv.classList.add("selected");
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector(".option.selected");
  if (!selected) {
    alert("Please select an answer before proceeding!");
    return;
  }

  if (selected.textContent === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  resultEl.innerHTML = `🎉 You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();
