// Initial Display
let login = document.getElementById("login");
let instructions = document.getElementById("instructions");
let qnaSection = document.getElementById("qnaSection");

window.onload = () => {
    login.style.display = "block";
    instructions.style.display = "none";
    qnaSection.style.display = "none";
}

// Selection
let nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
let emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;

let userName = document.getElementById("userName");
let email = document.getElementById("email");

let emptyBox = document.querySelectorAll(".emptyBox");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");

let validate = true;

// Checking Valid Username, email address
userName.addEventListener("input", function() {
    if(nameRegex.test(userName.value) === false) {
        emptyBox[0].classList.add("hidden");
        nameError.classList.remove("hidden");
        validate = false;
    } else {
        nameError.classList.add("hidden");
        validate = true;
    }
});

email.addEventListener("input", function(){
    if(emailRegex.test(email.value) === false) {
        emptyBox[1].classList.add("hidden");
        emailError.classList.remove("hidden");
        validate = false;
    } else {
        emailError.classList.add("hidden");
        validate = true;
    }
});

// Display Instructions
let goBtn = document.getElementById("goBtn");
goBtn.addEventListener("click", function(){
    if(userName.value.trim() === "") {
        emptyBox[0].classList.remove("hidden");
        validate = false;
    } else {
        emptyBox[0].classList.add("hidden");
        validate = true;
    }   

    if(email.value.trim() === "") {
        emptyBox[1].classList.remove("hidden");
        validate = false;
    } else {
        emptyBox[1].classList.add("hidden");
        validate = true;
    }

    if(validate === true) {
        login.style.display = "none";
        instructions.style.display = "block";
    }
});

// Show Questions
let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function(){
    instructions.style.display = "none";
    getIndex();
    callTimer;
});

// Set of Questions and Answers
let questionSet = [
    {
        question: "What is the purpose of the div tag in HTML?",
        answer: "To group elements together",
        options: [
            "To define a heading",
            "To create a hyperlink",
            "To group elements together",
            "To format text in bold"
        ]
    }, 
    {
        question: "Which HTML attribute is used to specify the source of an image?",
        answer: "src",
        options: [
            "src", 
            "alt", 
            "title", 
            "width"
        ]
    }, 
    {
        question: "What is the difference between div and span tags?",
        answer: "span is an inline element, while div is a block-level element.",
        options: [
            "div is an inline element, while span is a block-level element.",
            "span is an inline element, while div is a block-level element.",
            "Both are block-level elements.",
            "Both are inline elements."
        ]
    }, 
    {
        question: "What is the purpose of the meta tag in HTML?",
        answer: "To provide metadata about the HTML document.",
        options: [
            "To define a heading",
            "To create a hyperlink",
            "To provide metadata about the HTML document.",
            "To define a table"
        ]
    }, 
    {
        question: "What is the difference between id and class attributes in HTML?",
        answer: "class attributes can be used multiple times on a page, while id attributes can only be used once",
        options: [
            "id attributes can be used multiple times on a page, while class attributes can only be used once.",
            "class attributes can be used multiple times on a page, while id attributes can only be used once",
            "Both id and class attributes can be used multiple times on a page.",
            "Neither id nor class attributes can be used multiple times on a page."
        ]
    }
]

let currentIndex = -1;
let previousIndex = -1;
let nextIndex = -1;

// let qnaDiv = document.getElementById("qnaDiv");
let question = document.getElementById("question");
let options = document.getElementById("options");
// let btnContainer = document.getElementById("btnContainer");
// let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let showResultBtn = document.getElementById("showResultBtn");

let count = 0;
let score = 0;

let getIndex = () => {
    qnaSection.style.display = "block";
    previousIndex = count - 1;
    currentIndex = count;
    nextIndex = count + 1;
    displayQns(currentIndex, previousIndex, nextIndex);
    timer.style.display = "flex";
}

// Display Question and Answers
function displayQns(currentIndex, previousIndex, nextIndex) {
    options.innerHTML = "";
    question.innerHTML = `<strong>Question: ${currentIndex + 1}</strong> ${questionSet[currentIndex].question}`;
    questionSet[currentIndex].options.forEach((option) => {
        if(option === questionSet[currentIndex].answer) {
            options.innerHTML += `<label class="border-2 border-blue-800 p-2 rounded-md block w-full mb-3 cursor-pointer"><input type="radio" name="Qn ${currentIndex + 1}" onclick=check(this) value=1> ${option}</label>`;
        } else {
            options.innerHTML += `<label class="border-2 border-blue-800 p-2 rounded-md block w-full mb-3 cursor-pointer"><input type="radio" name="Qn ${currentIndex + 1}" onclick=check(this) value=0> ${option}</label>`;
        }            
    });

    // if(previousIndex === -1) {
    //     prevBtn.style.display = "none";
    // } else {
    //     prevBtn.style.display = "block";
    // }

    if(nextIndex === 5) {
        nextBtn.style.display = "none";
        showResultBtn.style.display = "block";
    } else {
        nextBtn.style.display = "block";
        showResultBtn.style.display = "none";
    }
}

// Score Calculation
function check(radio) {
    if(radio.checked) {
        score += (Number(radio.value) === 1) ? 10 : 0;
    }
}

// Go to previous question
// prevBtn.addEventListener("click", function() {
//     count--;
//     getIndex();
// });

// Go to next question
nextBtn.addEventListener("click", function() {
    count++;
    getIndex();
});

// Display Result
let resultSection = document.getElementById("resultSection");
let yourName = document.getElementById("yourName");
let yourScore = document.getElementById("yourScore");
showResultBtn.addEventListener("click", function() {
    timer.style.display = "none";
    qnaSection.style.display = "none";
    resultSection.style.display = "flex";
    yourName.innerHTML = `${userName.value}`;
    yourScore.innerHTML = score;
});

// Timer
let timer = document.getElementById("timer");
let timerIcon = document.getElementById("timerIcon");
let runTime = document.getElementById("runTime");
let startTime = 1.5;
let time = startTime * 60;
let minutes = 0;
let seconds = 0;

let callTimer = setInterval(updateTime, 1000);

function updateTime() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    minutes = (minutes < 10) ? ('0' + minutes) : minutes;
    seconds = (seconds < 10) ? ('0' + seconds) : seconds;
    runTime.innerHTML = `${minutes}:${seconds}`;
    time--;
    time = (time < 0) ? 0 : time;
    if(time < 30) {
        timerIcon.style.fill = "#FFF";
        timer.style.backgroundColor = "red";
        timer.style.color = "white";
    }

    if(time === 0) {
        timer.style.display = "none";
        qnaSection.style.display = "none";
        resultSection.style.display = "flex";
        yourName.innerHTML = `${userName.value}`;
        yourScore.innerHTML = score;
    }

    if(time < 0) {
        clearInterval(callTimer);
    }
}

// Show Answer Sheet
let tryAgain = document.getElementById("tryAgain");
tryAgain.addEventListener("click", function() {
    resultSection.style.display = "none";
    count =  0;
    score = 0;
    getIndex();
    startTime = 1.5;
    callTimer;
});