const qna = [
  {
    question: "Which programming language is Popular for DOM",
    options: ["CSS", "HTML", "Python", "Javascript"],
    answer: "Javascript",
  },
  {
    question: "how invented javascript",
    options: ["Elon Musk", "Steve Jobs", "Mark Zuckerberg", "Brendan Eich"],
    answer: "Brendan Eich",
  },
  {
    question: "Which programming language is Best For Web Development",
    options: ["CSS", "HTML", "c++", "Javascript"],
    answer: "Javascript",
  },
  {
    question: "How to insert js script in HTML",
    options: ["link", "script", "tag", "html"],
    answer: "script",
  },
  {
    question: "Where do you write Javascript file",
    options: [
      "in the JS file",
      "in the CSS file",
      "in the HTML file",
      "in the JSX file",
    ],
    answer: "in the JS file",
  },
];

const optionsEl = document.querySelector(".options");
const btnSubmit = document.querySelector(".btn--submit");
// data var
let index = 0;
const maxLenghOfArr = qna.length;
let correctAns = qna.length;
let userChoosen = "";
let currentQuestionIndex = 1;
let questionAndAnswer = qna[index];

// insert options
function insertOptions() {
  const questionEl = document.querySelector(".question");
  questionEl.textContent = qna[index].question;

  const option = qna[index].options
    .map((el) => `<div class="option">${el}</div>`)
    .join("");

  optionsEl.innerHTML = option;
}

insertOptions();

function clickedOption(e) {
  const clicked = e.target;
  const btnOptions = document.querySelectorAll(".option");
  if (!clicked.classList.contains("option")) return;

  btnOptions.forEach((option) => {
    option.classList.remove("option--active");
  });

  clicked.classList.add("option--active");

  userChoosen = clicked.textContent;
  // checks if user has choosen any options or not
  disableOrEnableSubmit();
}

function disableOrEnableSubmit() {
  if (userChoosen === "") {
    btnSubmit.setAttribute("disabled", true);
    btnSubmit.style.opacity = 0.5;
  } else {
    btnSubmit.removeAttribute("disabled");
    btnSubmit.style.opacity = 1;
  }
}

disableOrEnableSubmit();
optionsEl.addEventListener("click", clickedOption);

function forAllTextcontent() {
  const maxArr = document.querySelectorAll(".max--questions");

  maxArr.forEach((el) => (el.textContent = maxLenghOfArr));
}
forAllTextcontent();

const togo = document.querySelector(".togo span");
function submit() {
  if (userChoosen !== qna[index].answer) {
    correctAns--;
  }
  // checks how many questions
  userChoosen = "";

  disableOrEnableSubmit();

  index++;
  // retry if

  if (index >= maxLenghOfArr) {
    showResult();
  } else {
    currentQuestionIndex++;
    togo.textContent = currentQuestionIndex;
    insertOptions();
  }
}

btnSubmit.addEventListener("click", submit);

const result = document.querySelector(".result");
const content = document.querySelector(".content");
const resultContent = document.querySelector(".correctly--answered");
const btnRetry = document.querySelector(".btn--retry");

function showResult() {
  content.classList.add("content--hidden");
  result.classList.remove("result--hidden");
  resultContent.textContent = correctAns;
}

function retry() {
  index = 0;
  insertOptions();
  content.classList.remove("content--hidden");
  result.classList.add("result--hidden");
  currentQuestionIndex = 1;
  togo.textContent = currentQuestionIndex;
  correctAns = qna.length;
}

btnRetry.addEventListener("click", retry);
