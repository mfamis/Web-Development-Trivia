var difficultyTimings = [
    20, // easy difficulty
    12, // medium difficulty
    8,  // challenge difficulty
    4   // expert difficulty
]

var gameState = {
    initialQuestion: true,
    gameOver: false,
    timePerAnswer: 8,
    questions: [],
    currentQuestion: {},
    correctAnswers: 0,
    wrongAnswers: 0,
    initialize: function() { alert("initialize not implemented!"); },
    processAnswer: function(answer) { alert("processAnswer not implemented!"); },
    randomizeQuestions: function() { alert("randomizeQuestions not implemented!"); },
    nextQuestion: function() { alert("nextQuestion not implemented"); },
    gameOverScreen: function() { alert("gameOverScreen not implemented"); },
}

// initialize / reset game state for new session
gameState.initialize = function()
{
    this.initialQuestion = true;
    this.gameOver = false;
    this.questions = [];
    this.currentQuestion = initialQuestion;
    this.correctAnswers = 0;
    this.wrongAnswers = 0;
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

gameState.nextQuestion = function()
{
    if (this.questions.length > 0)
    {
        this.currentQuestion = this.questions.pop();
        displayQuestion(this.currentQuestion);
    }
    else
    {
        this.gameOver = true;
        this.gameOverScreen();
    }
}

gameState.gameOverScreen = function()
{
    console.log("Game over, man! Game over!");
    gameOver.answers[0][1] = this.correctAnswers;
    gameOver.answers[1][1] = this.wrongAnswers;
    displayQuestion(gameOver);
}

gameState.processAnswer = function(answer)
{
    if (this.initialQuestion)
    {
        this.timePerAnswer = difficultyTimings[answer];
        this.initialQuestion = false;
        this.randomizeQuestions();
        this.nextQuestion();
    }
    else if (this.gameOver)
    {
        if (answer == 3) // reset button clicked
        {
            this.initialize();
        }
    }
    else
    {
        if (this.currentQuestion.answer == answer)
        {
            this.correctAnswers += 1;
        }
        else
        {
            this.wrongAnswers += 1;
        }
        this.nextQuestion();
    }
}

// update game display with new question and answer choices
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