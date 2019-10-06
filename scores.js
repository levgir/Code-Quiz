var storedScores = JSON.parse(localStorage.getItem("userData"));
var highScoresArea = document.querySelector("#highScoresList");
var backBtn = document.querySelector("#backButton");
var clearBtn = document.querySelector("#clearScores");


function displayScores() {
    var scoreList = document.createElement("ol");
    for (var i = 0; i < storedScores.length; i++) {
        var initials = storedScores[i].inits;
        var scores = storedScores[i].userScore
        var scoreEntry = document.createElement("li");
        scoreEntry.innerHTML = initials + " - " + scores;
        scoreList.appendChild(scoreEntry);
    }
    highScoresArea.appendChild(scoreList);

};

displayScores();

backBtn.addEventListener("click", function () {
    location.href = "index.html";
});

clearBtn.addEventListener("click", function () {
    highScoresArea.innerHTML = "";
    storedScores = "";
    var allScores = [];
    localStorage.setItem("userData", JSON.stringify(allScores));

});
