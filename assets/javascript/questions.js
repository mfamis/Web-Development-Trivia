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
    {
        question: "Which of the following is not a way to access an object field?",
        answers: [
            ["obj['field']"],
            ["obj.field"],
            ["obj.get('field')"],
            ["All of these are correct"],
        ],
        correctAnswer: 2,
    },
    {
        question: "What will the following code return: 'i am a string'.indexOf('o')",
        answers: [
            ["NaN"],
            ["undefined"],
            ["-1"],
            ["It will throw an error"],
        ],
        correctAnswer: 2,
    },
    {
        question: "What will the following code return: parseInt('i am a string')",
        answers: [
            ["-1"],
            ["undefined"],
            ["NaN"],
            ["It will throw an error"],
        ],
        correctAnswer: 2,
    },
    {
        question: "What will the following code return: 'i am a string'.indexOf('a')",
        answers: [
            ["2"],
            ["5"],
            ["NaN"],
            ["-1"],
        ],
        correctAnswer: 0,
    },
    {
        question: "myArray = [0, 1, 2, 3]; What will the value of myArray be after: myArray.splice(2, 1)",
        answers: [
            ["[0, 1, 2, 3]"],
            ["[0, 2, 3]"],
            ["[0, 1, 3]"],
            ["[0, 2, 1, 2, 3]"],
        ],
        correctAnswer: 0,
    },
    {
        question: "myArray = [0, 1, 2, 3]; What will the following return: myArray.splice(2, 1)",
        answers: [
            ["[0, 1, 2, 3]"],
            ["[0, 2, 3]"],
            ["[0, 1, 3]"],
            ["[0, 2, 1, 2, 3]"],
        ],
        correctAnswer: 2,
    },
    {
        question: "How would you get the length of the string myString?",
        answers: [
            ["len(myString)"],
            ["myString.length"],
            ["myString.length()"],
            ["myString.len()"],
        ],
        correctAnswer: 1,
    },
    {
        question: "How many array elements will you get with this code: 'hello,world,how,are,you'.split(',')?",
        answers: [
            ["5"],
            ["4"],
            ["0"],
            ["1"],
        ],
        correctAnswer: 0,
    },
    {
        question: "What type of output would you get with this code: 'hello,world,how,are,you'.split(',')?",
        answers: [
            ["string"],
            ["array"],
            ["boolean"],
            ["object"],
        ],
        correctAnswer: 1,
    },
    {
        question: "Which of the following is a potential output of: Math.random()",
        answers: [
            ["0"],
            ["1"],
            ["12"],
            ["undefined"],
        ],
        correctAnswer: 0,
    },
    {
        question: "What does Ron think a greenhouse is?",
        answers: [
            ["A structure for growing plants"],
            ["A government building"],
            ["Literally a house painted green"],
            ["An environmentally friendly home"],
        ],
        correctAnswer: 2,
    },
    {
        question: "What does the following code return: Math.floor(5.6)",
        answers: [
            ["5.6"],
            ["5"],
            ["6"],
            ["undefined"],
        ],
        correctAnswer: 1,
    },
    {
        question: "Assuming the AJAX request succeeds, what will myString be after:"
                + " myString = 'a'; $.ajax(/* ignore this*/).then(function(){ myString += 'b'}); myString += 'c'",
        answers: [
            ["abc"],
            ["acb"],
            ["ac"],
            ["Cannot know for sure"],
        ],
        correctAnswer: 3,
    },
    {
        question: "What is CSS an abbreviation for?",
        answers: [
            ["Cumulative Style Sheets"],
            ["Creative Style Selection"],
            ["Cascade Style Sheets"],
            ["Complementary Sorted Styles"],
        ],
        correctAnswer: 2,
    },
    {
        question: "What is HTML an abbreviation for?",
        answers: [
            ["Hotmail"],
            ["Human Translated Markup Language"],
            ["Heuristic Transform Machine Language"],
            ["Hypertext Markup Language"],
        ],
        correctAnswer: 3,
    },
    {
        question: "What is this variable naming convention called: gameModelView",
        answers: [
            ["Camel Case"],
            ["Lower Case-y Upper Case-y"],
            ["JavaScript Style"],
            ["Gangnam Style"],
        ],
        correctAnswer: 0,
    },
    {
        question: "How do you stop the interval timer myInterval?",
        answers: [
            ["stopInterval(", "myInterval", ")"],
            ["myInterval", ".stop()"],
            ["clearInterval(", "myInterval", ")"],
            ["deleteInterval(", "myInterval", ")"],
        ],
        correctAnswer: 2,
    },
    {
        question: "Which would you choose to call a function once after 5 seconds passes?",
        answers: [
            ["setInterval(", "myFunction,", "5000)"],
            ["setInterval(", "myFunction,", "5)"],
            ["setTimeout(", "myFunction,", "5)"],
            ["setTimeout(", "myFunction,", "5000)"],
        ],
        correctAnswer: 3,
    },
]