var difficultyTimings = [
    20, // easy difficulty
    12, // medium difficulty
    8,  // challenge difficulty
    4   // expert difficulty
]

var gameState = {
    initialQuestion: true,
    timePerAnswer: 8,
    questions: [],
    currentQuestion: {},
    correctAnswers: 0,
    wrongAnswers: 0,
    initialize: function() { alert("initialize not implemented!"); },
    processAnswer: function(answer) { alert("processAnswer not implemented!"); },
    randomizeQuestions: function() { alert("randomizeQuestions not implemented!"); },
    startGame: function() { alert("startGame not implemented"); },
}

// initialize / reset game state for new session
gameState.initialize = function()
{
    this.initialQuestion = true;
    this.questions = [];
    this.currentQuestion = initialQuestion;
    this.correctAnswers = 0;
    displayQuestion(this.currentQuestion);
}

// copies questions and randomizes them in game state object
gameState.randomizeQuestions = function()
{
    // copy questions to temporary questionsToRandomize array
    var questionsToRandomize = questions.slice();

    // keep grabbing random questions from questionsToRandomize,
    // removing questions that get selected.
    while (questionsToRandomize.length > 0)
    {
        var index = Math.floor(Math.random() * questionsToRandomize.length);
        this.questions.push(questionsToRandomize[index]);
        questionsToRandomize.splice(index, 1);
    }
}

gameState.startGame = function()
{
    displayQuestion(this.currentQuestion);
}

gameState.processAnswer = function(answer)
{
    if (this.initialQuestion)
    {
        this.timePerAnswer = difficultyTimings[answer];
        this.initialQuestion = false;
        this.randomizeQuestions();
        this.currentQuestion = this.questions.pop();
        this.startGame();
    }
    else
    {

    }
}

function displayQuestion(question)
{
    var questionParagraph = $("<p>");
    questionParagraph.text(question.question);
    $("#question").html("");
    $("#question").append(questionParagraph);

    for (var answer = 0; answer < question.answers.length; answer++)
    {
        $("#answer-" + answer).html("");
        for (var paragraph = 0; paragraph < question.answers[answer].length; paragraph++)
        {
            var answerParagraph = $("<p>");
            answerParagraph.text(question.answers[answer][paragraph]);
            $("#answer-" + answer).append(answerParagraph);
        }
    }
}

function answerClicked()
{
    var answer = $(this).attr("id").split("-")[1];
    console.log("Answer selected: " + answer);
    gameState.processAnswer(answer);
}

$(".answer").on("click", answerClicked);

gameState.initialize();