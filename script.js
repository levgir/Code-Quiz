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
var answer ="";
var possibleAnswers = [];

function gameTime() {
  for (var i = 0; i < 4; i++) {
    var newQuestion = questions[i].q;
    var newQuestionDiv = document.createElement('div');
    newQuestionDiv.textContent = newQuestion;
    questionsArea.appendChild(newQuestionDiv);
    possibleAnswers = questions[i].pas;
    answer = questions[i].a;
    
    possibleAnswers.forEach(function (possibleAnswer) {
      var answerBtn = document.createElement('button');
      var answerText = document.createTextNode(possibleAnswer);
      answerBtn.appendChild(answerText);
      questionsArea.append(answerBtn);
      
    })

    
  };

};


startBtn.addEventListener("click", function () {
  questionsArea.innerHTML = "";
  gameTime();
});

