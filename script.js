var questions = [
  {
    q: "Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    pas: ["<js>", "<script>", "<javascript>", "<scripting>"]
  },
  {
    q: "Where is the correct place to insert a JavaScript?",
    a: "Both the <head> section and the <body> section ar correct",
    pas: ["The <head> section", "Both the <head> section and the <body> section ar correct", "The <body> section", "The <garbage> can"]
  },
  {
    q: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script src='xxx.js'>",
    pas: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script id='xxx.js'>"]
  },
  {
    q: "How do you create a function in JavaScript?",
    a: "function myFunction()",
    pas: ["function = myFunction()", "function myFunction()", "function:myFunction()", "myFunction function()"]
  },
  {
    q: "How to write an IF statement in JavaScript?",
    a: "if(i == 5)",
    pas: ["if i = 5", "if(i == 5)", "if i == 5 then", "if i = 5 then"]
  }
];

var currentQuestion = 0;
var timer = 100;
var startBtn = document.querySelector("#startButton");
var questionsArea = document.querySelector("#questionsDiv");
var answer = "";
var possibleAnswers = [];

function gameTime() {
  if (currentQuestion < questions.length) {
    var newQuestion = questions[currentQuestion].q;
    var newQuestionDiv = document.createElement('div');
    newQuestionDiv.textContent = newQuestion;
    questionsArea.appendChild(newQuestionDiv);
    possibleAnswers = questions[currentQuestion].pas;
    answer = questions[currentQuestion].a;

    possibleAnswers.forEach(function (possibleAnswer) {
      var answerBtn = document.createElement('button');
      answerBtn.className = 'answerButton';
      var answerText = document.createTextNode(possibleAnswer);
      answerBtn.appendChild(answerText);
      questionsArea.append(answerBtn);

    });
  } else {
    alert("Game over man, game over!");
  }
};

var answerButtons = document.querySelector(".answerButton");
answerButtons.addEventListener("click", function () {
  userClick = this.textContent;
  currentQuestion++;
  gameTime();
  console.log(userClick);
});



startBtn.addEventListener("click", function () {
  questionsArea.innerHTML = "";
  gameTime();
});

