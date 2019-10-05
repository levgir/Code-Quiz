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
    q: "How do you write an if statement in JavaScript?",
    a: "if(i == 5)",
    pas: ["if i = 5", "if(i == 5)", "if i == 5 then", "if i = 5 then"]
  }
];

var currentQuestion = 0;
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#startButton");
var questionsArea = document.querySelector("#questionsDiv");
var answersArea = document.querySelector("#answersDiv");
var breakLineArea = document.querySelector("#breakLineDiv");
var answer = "";
var possibleAnswers = [];

function gameTime() {
  if (currentQuestion < questions.length) {
    var newQuestion = questions[currentQuestion].q;
    // var newQuestionDiv = document.createElement('div');
    questionsArea.textContent = newQuestion;
    // questionsArea.appendChild(newQuestionDiv);
    possibleAnswers = questions[currentQuestion].pas;
    answer = questions[currentQuestion].a;

    possibleAnswers.forEach(function (possibleAnswer) {
      var answerBtn = document.createElement('button');
      answerBtn.className = 'answerButton';
      var answerText = document.createTextNode(possibleAnswer);
      answerBtn.appendChild(answerText);
      answersArea.append(answerBtn);

    });
  } else {
    console.log(timer.textContent);
    alert("Game over man, game over!");
  }
};

var answerButtons = answersArea;
answerButtons.addEventListener("click", function (event) {
  var userClick = event.target.textContent;
  if (userClick === questions[currentQuestion].a) {
    breakLine(true);
  } else {
    breakLine(false);
  }
  currentQuestion++;
  answersArea.innerHTML = "";
  gameTime();
});

function breakLine(value) {
  if (value) {
    breakLineArea.innerHTML = "<hr>" + "<p>" + "Right!" + "</p>";
  } else {
    breakLineArea.innerHTML = "<hr>" + "<p>" + "Wrong!" + "</p>";
  }
  setTimeout(function () { breakLineArea.innerHTML = ""; }, 1000);
}

function gameTimer() {
  timer.textContent = 100;
  var interval = setInterval(function () { timer.textContent--; 
    if (timer.textContent === "0") {
      clearInterval(interval);
    }
  }, 1000); 
}



startBtn.addEventListener("click", function () {
  questionsArea.innerHTML = "";
  gameTime();
  gameTimer();
});

