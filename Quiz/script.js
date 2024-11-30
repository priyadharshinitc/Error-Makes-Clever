// Initial Display
let login = document.getElementById("login");
let instructions = document.getElementById("instructions");
let qnaSection = document.getElementById("qnaSection");

// window.onload = () => {
//     login.style.display = "block";
//     instructions.style.display = "none";
//     qnaSection.style.display = "none";
// }

// Selection
let nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
let emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;

let userName = document.getElementById("userName");
let email = document.getElementById("email");

let emptyBox = document.querySelectorAll(".emptyBox");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");

// Checking Valid Username, email address
userName.addEventListener("input", function() {
    if(nameRegex.test(userName.value) === false) {
        emptyBox[0].classList.add("hidden");
        nameError.classList.remove("hidden");
    } else {
        nameError.classList.add("hidden");
    }
});

email.addEventListener("input", function(){
    if(emailRegex.test(email.value) === false) {
        emptyBox[1].classList.add("hidden");
        emailError.classList.remove("hidden");
    } else {
        emailError.classList.add("hidden");
    }
});

let startBtn = document.getElementById("startBtn");

// Display Instructions
let goBtn = document.getElementById("goBtn");
goBtn.addEventListener("click", function(){
    if(userName.value.trim() === "") {
        emptyBox[0].classList.remove("hidden");
    } else {
        emptyBox[0].classList.add("hidden");
    }   

    if(email.value.trim() === "") {
        emptyBox[1].classList.remove("hidden");
    } else {
        emptyBox[1].classList.add("hidden");
    }
    login.style.display = "none";
    instructions.style.display = "block";
});

// Set of Questions and Answers
let questionSet = [
    {
        question: "What is the purpose of the div tag in HTML?",
        answer: "C. To group elements together",
        options: [
            "A. To define a heading",
            "B. To create a hyperlink",
            "C. To group elements together",
            "D. To format text in bold"
        ]
    }, 
    {
        question: "Which HTML attribute is used to specify the source of an image?",
        answer: "A. src",
        options: [
            "A. src", 
            "B. alt", 
            "C. title", 
            "D. width"
        ]
    }, 
    {
        question: "What is the difference between div and span tags?",
        answer: "B. span is an inline element, while div is a block-level element.",
        options: [
            "A. div is an inline element, while span is a block-level element.",
            "B. span is an inline element, while div is a block-level element.",
            "C. Both are block-level elements.",
            "D. Both are inline elements."
        ]
    }, 
    {
        question: "What is the purpose of the meta tag in HTML?",
        answer: "C. To provide metadata about the HTML document.",
        options: [
            "A. To define a heading",
            "B. To create a hyperlink",
            "C. To provide metadata about the HTML document.",
            "D. To define a table"
        ]
    }, 
    {
        question: "What is the difference between id and class attributes in HTML?",
        answer: "B. class attributes can be used multiple times on a page, while id attributes can only be used once",
        options: [
            "A. id attributes can be used multiple times on a page, while class attributes can only be used once.",
            "B. class attributes can be used multiple times on a page, while id attributes can only be used once",
            "C. Both id and class attributes can be used multiple times on a page.",
            "D. Neither id nor class attributes can be used multiple times on a page."
        ]
    }
]

let currentIndex = -1;
let previousIndex = -1;
let nextIndex = -1;

let qnaDiv = document.getElementById("qnaDiv");
let question = document.getElementById("question");
let options = document.getElementById("options");
let btnContainer = document.getElementById("btnContainer");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let showResultBtn = document.getElementById("showResultBtn");

let count = 0;

let getIndex = () => {
    qnaSection.style.display = "block";
    previousIndex = count - 1;
    currentIndex = count;
    nextIndex = count + 1;
    displayQns(currentIndex, previousIndex, nextIndex);
}

// Display Question and Answers
function displayQns(currentIndex, previousIndex, nextIndex) {
    options.innerHTML = "";
    question.innerHTML = `<strong>Question: ${currentIndex + 1}</strong> ${questionSet[currentIndex].question}`;
    questionSet[currentIndex].options.forEach((option) => {
        if(option === questionSet[currentIndex].answer) {
            options.innerHTML += `<label id=${questionSet[currentIndex + 1]} class="border-2 border-blue-800 p-2 rounded-md block w-full mb-3 cursor-pointer"><input type="radio" class="hidden">${option}</label>`;
        } else {
            options.innerHTML += `<label class="border-2 border-blue-800 p-2 rounded-md block w-full mb-3 cursor-pointer"><input type="radio" class="hidden">${option}</label>`;
        }            
    });

    if(previousIndex === -1) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }

    if(nextIndex === 5) {
        nextBtn.style.display = "none";
        showResultBtn.style.display = "block";
    } else {
        nextBtn.style.display = "block";
        showResultBtn.style.display = "none";
    }
}

// Go to previous question
prevBtn.addEventListener("click", function() {
    count--;
    getIndex();
});

// Go to next question
nextBtn.addEventListener("click", function() {
    count++;
    getIndex();
});

startBtn.addEventListener("click", function(){
    instructions.style.display = "none";
    getIndex();
});

// Display Result
let result = document.getElementById("result");
showResultBtn.addEventListener("click", function() {
    qnaSection.style.display = "none";
    result.innerHTML = "Result";
});