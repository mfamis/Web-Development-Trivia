var initialQuestion = {
    question: "Welcome to Web Development Trivia! Select your difficult below!",
    answers: [
        ["Easy Difficulty"],
        ["Medium Difficulty"],
        ["Challenge Difficulty"],
        ["Expert Difficulty"],
    ],
}

var gameOver = {
    question: "Game over! Here are your stats!",
    answers: [
        ["Correct:", ""],
        ["Wrong:", ""],
        ["Thanks for playing!"],
        ["Reset"],
    ],
};

var questions = [
    {
        question: "Which of the following is an object?",
        answers: [
            ["var a = []"],
            ["var a = 5"],
            ["var a = {}"],
            ["var a = ''"],
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the length of this array: ['hello', 5, {}, [1, 2]]?",
        answers: [
            ["4"],
            ["5"],
            ["undefined"],
            ["not an array"],
        ],
        correctAnswer: 0,
    },
]