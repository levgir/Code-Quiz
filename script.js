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
var userInitials = "";
var allScores =[];
var storedScores = JSON.parse(localStorage.getItem("userData"));

function gameTime() {
  if (storedScores !== null) {
    allScores = storedScores;
  }
  if (currentQuestion < questions.length) {
    var newQuestion = questions[currentQuestion].q;
    questionsArea.innerHTML = "<h1>" + newQuestion + "</h1>";
    possibleAnswers = questions[currentQuestion].pas;
    answer = questions[currentQuestion].a;

    var answersList = document.createElement("ol");
    possibleAnswers.forEach(function (possibleAnswer) {
        var answerItem = document.createElement('li');
        var answerBtn = document.createElement('button');
        answerBtn.className = 'btn btn-primary';
        var answerText = document.createTextNode(possibleAnswer);
        answerBtn.appendChild(answerText);
        answerItem.appendChild(answerBtn);
        answersList.appendChild(answerItem);
        answersArea.append(answersList);


    });
  } else {
    questionsArea.innerHTML = "";
    answersArea.innerHTML = "";
    var allDone = document.createElement('h1');
    allDone.textContent = "All Done!";
    questionsArea.appendChild(allDone);
    var yourScore = document.createElement('p');
    yourScore.textContent = "Your score was " + timer.textContent;
    questionsArea.appendChild(yourScore);
    var initials = document.createElement('span');
    initials.textContent = "Enter your initials: ";
    questionsArea.appendChild(initials);
    var yourInput = document.createElement('input');
    yourInput.className = 'initialsInput';
    questionsArea.appendChild(yourInput);
    var inputButton = document.createElement('button');
    inputButton.className = 'inputButton';
    inputButton.textContent = 'Submit';
    questionsArea.appendChild(inputButton);
    inputButton.addEventListener("click", function(event) {
      userInitials = document.querySelector('.initialsInput').value;
      scorePage(yourInput.value,timer.textContent);
    });
  }
};

function scorePage(a, b) {
  
  var userData = {
    inits: a,
    userScore: b
  };
  allScores.push(userData);

  localStorage.setItem("userData", JSON.stringify(allScores));
  location.href = "scores.html";
}


var answerButtons = answersArea;
answerButtons.addEventListener("click", function (event) {
  var userClick = event.target.textContent;
  if (userClick === questions[currentQuestion].a) {
    breakLine(true);
  } else {
    timer.textContent = timer.textContent - 15;
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
  timer.textContent = 75;
  var interval = setInterval(function () { timer.textContent--; 
    if (timer.textContent === "0" || currentQuestion === questions.length) {
      clearInterval(interval);
    }
  }, 1000); 
}

startBtn.addEventListener("click", function () {
  questionsArea.innerHTML = "";
  gameTime();
  gameTimer();
});

