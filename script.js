var questions = [
    "Inside which HTML element do we put the JavaScript?",
    "Where is the correct place to insert a JavaScript?",
    "What is the correct syntax for referring to an external script called 'xxx.js'?",
    "How do you create a function in JavaScript?",
    "How to write an IF statement in JavaScript?"
    ];
  
  var answers = {
    "answer1":"<script>",
    "answer2":"Both the <head> section and the <body> section ar correct",
    "answer3":"<script src='xxx.js'>",
    "answer4":"function myFunction()",
    "answer5":"if(i == 5)"
  };
  
  var possibleAnswers = {
    "question1": [
      "<js>",
      "<script>",
      "<javascript>",
      "<scripting>"
    ],
    "question2": [
      "The <head> section",
      "Both the <head> section and the <body> section ar correct",
      "The <body> section",
      "The <garbage> can"
    ],
    "question3": [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script id='xxx.js'>"
    ],
    "question4": [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "myFunction function()"
    ],
    "question5": [
      "if i = 5",
      "if(i == 5)",
      "if i == 5 then",
      "if i = 5 then"
    ]
  }

var startBtn = document.querySelector("#startButton");
var questionsArea = document.querySelector("#questionsDiv");

startBtn.addEventListener("click", function() {
    questionsArea.innerHTML = "";

    for (var i = 0; i < questions.lenght; i++) {
        var newQuestion = document.createElement("<div>");
        var newText = questions[i];
        newQuestion.innerHTML("<h1>",newText,"</h1>");
        console.log(newQuestion);
        questionsArea.innerHTML = newQuestion;
      

    };
















  });