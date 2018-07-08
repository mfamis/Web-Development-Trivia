var difficultyTimings = [
    20, // easy difficulty
    12, // medium difficulty
    8,  // challenge difficulty
    4   // expert difficulty
]

var clockSound = new Audio("assets/sounds/tick.mp3");
var errorSound = new Audio("assets/sounds/error.wav");
var successSound = new Audio("assets/sounds/success.wav");

// game state object for tracking time, correct/incorrect answers,
// remaining questions, etc.
var gameState = {
    initialQuestion: true,
    gameOver: false,
    displayingAnswers: false,
    timePerAnswer: 8,
    questions: [],
    currentQuestion: {},
    correctAnswers: 0,
    wrongAnswers: 0,
    timerInterval: {},
    currentTime: 0,
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
    this.displayingAnswers = false;
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

// starts the next question and the timer
// if no questions remain, display gameover
gameState.nextQuestion = function()
{
    this.displayingAnswers = false;
    this.currentTime = this.timePerAnswer;
    if (this.questions.length > 0)
    {
        this.currentQuestion = this.questions.pop();
        displayQuestion(this.currentQuestion);
        this.timerInterval = setInterval(checkAndDisplayClock, 1000);
        checkAndDisplayClock();
    }
    else
    {
        this.gameOver = true;
        this.gameOverScreen();
    }
}

// display the game over screen, with stats as to how the user did
gameState.gameOverScreen = function()
{
    console.log("Game over, man! Game over!");
    gameOver.answers[0][1] = this.correctAnswers;
    gameOver.answers[1][1] = this.wrongAnswers;
    displayQuestion(gameOver);
}

// display the answer and any incorrect answer from the user
// this lasts for three seconds and then the next question starts
gameState.showAnswer = function(answer)
{
    this.displayingAnswers = true;
    displayAnswer(this.currentQuestion, answer);
    setTimeout(stopDisplayingAnswer, 3000);
}

// process user input and perform the correct action per game state
gameState.processAnswer = function(answer)
{
    // if this is the start screen, process difficulty selection
    // and start the game
    if (this.initialQuestion)
    {
        this.timePerAnswer = difficultyTimings[answer];
        this.initialQuestion = false;
        this.randomizeQuestions();
        this.nextQuestion();
    }

    // if the game is over, only process input for the reset option
    else if (this.gameOver)
    {
        if (answer == 3) // reset button clicked
        {
            this.initialize();
        }
    }

    // if game is still in progress and we aren't currently
    // displaying the answers, process the selected answer
    else if (!this.displayingAnswers)
    {
        clearInterval(this.timerInterval);
        if (this.currentQuestion.correctAnswer == answer)
        {
            this.correctAnswers += 1;
            successSound.play();
            $("#clock-paragraph").text("Nice one! You got it right!");
        }
        else
        {
            this.wrongAnswers += 1;
            errorSound.play();
            $("#clock-paragraph").text("Wrong! Better luck on the next one!");
        }
        this.showAnswer(answer);
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

// checks the current time and updates the clock
// if no time is remaining, show the answers
function checkAndDisplayClock()
{
    if (gameState.currentTime < 0)
    {
        clearInterval(gameState.timerInterval);
        gameState.wrongAnswers += 1;
        $("#clock-paragraph").text("Time's up! Gotta be quick!");
        gameState.showAnswer(false);
    }
    else
    {
        $("#clock-paragraph").text("Time Left: " + gameState.currentTime);
        gameState.currentTime -= 1;
        if (gameState.currentTime < 4)
        {
            clockSound.play();
        }
    }
}

// display the answer to the current question
// correct answer is marked in green
// if user answer supplied and is incorrect, mark it in red
function displayAnswer(question, userAnswer)
{
    $("#answer-" + question.correctAnswer).css({"background-color": "green"});
    if (userAnswer && userAnswer != question.correctAnswer)
    {
        $("#answer-" + userAnswer).css({ "background-color": "red"});
    }
}

// reset the answer colors and start the next question
function stopDisplayingAnswer()
{
    for (var i = 0; i < 4; i++)
    {
        $("#answer-" + i).css({"background-color": "transparent"});
    }
    gameState.nextQuestion();
}

// when the user selection one of the answer fields,
// get the answer index and process it
function answerClicked()
{
    var answer = $(this).attr("id").split("-")[1];
    console.log("Answer selected: " + answer);
    gameState.processAnswer(answer);
}

// bind the answer div click to the answerClick function above
$(".answer").on("click", answerClicked);

// initial the game
gameState.initialize();