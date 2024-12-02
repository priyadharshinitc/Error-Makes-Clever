// Welcome, login
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
let userValid = true;
let emailValid = true;

// Checking Valid Username, email address
userName.addEventListener("input", function() {
    if(nameRegex.test(userName.value) === false) {
        emptyBox[0].classList.add("hidden");
        nameError.classList.remove("hidden");
        validate = false;
        userValid = false;
    } else {
        nameError.classList.add("hidden");
        validate = true;
        userValid = true;
    }
});

email.addEventListener("input", function(){
    if(emailRegex.test(email.value) === false) {
        emptyBox[1].classList.add("hidden");
        emailError.classList.remove("hidden");
        validate = false;
        emailValid = false;
    } else {
        emailError.classList.add("hidden");
        validate = true;
        emailValid = true;
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

    if((validate === true) && (userValid === true) &&(emailValid === true)) {
        login.style.display = "none";
        instructions.style.display = "block";
    }
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

let qnaContainer = document.getElementById("qnaContainer");
let btnContainer = document.getElementById("btnContainer");
for(let i = 0; i < questionSet.length; i++) {
    generateQnA(i);
}

function generateQnA(cIndex) {
    let qnaDiv = document.createElement("div");
    qnaDiv.className = "qnaDiv flex-none";
    let questionHeader = document.createElement("h1");
    questionHeader.className = "text-xl";
    questionHeader.innerHTML = `<strong>Question: ${cIndex + 1}</strong> ${questionSet[cIndex].question}`;

    let optionsDiv = document.createElement("div");
    optionsDiv.className = "mt-3 flex flex-col justify-center items-center";
    
    questionSet[cIndex].options.forEach((option) => {
        if(option === questionSet[cIndex].answer) {
            optionsDiv.innerHTML += `<label class="border-2 border-blue-800 p-2 rounded-md block w-full mb-3 cursor-pointer"><input type="radio" name="Qn ${cIndex + 1}" onclick=check(this) data-validate="true"> ${option}</label>`;
        } else {
            optionsDiv.innerHTML += `<label class="border-2 border-blue-800 p-2 rounded-md block w-full mb-3 cursor-pointer"><input type="radio" name="Qn ${cIndex + 1}" onclick=check(this) data-validate="false"> ${option}</label>`;
        }            
    });

    qnaDiv.appendChild(questionHeader);
    qnaDiv.appendChild(optionsDiv);
    qnaDiv.style.display = "none";
    qnaContainer.appendChild(qnaDiv);
}

// Display Question and Answers
let qnaDivs = document.querySelectorAll(".qnaDiv");
let previousIndex = 0;
let currentIndex = 0;
let nextIndex = 0;
let callTimer;

function displayQuestion(index) {
    timer.style.display = "flex";
    qnaSection.style.display = "flex";
    previousIndex = index - 1;
    currentIndex = index;
    nextIndex = index + 1;
    
    if(qnaDivs[previousIndex]) {
        qnaDivs[previousIndex].style.display = "none";
    }

    if(qnaDivs[nextIndex]) {
        qnaDivs[nextIndex].style.display = "none";
    }

    qnaDivs[index].style.display = "block";
    
    if(previousIndex < 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }

    if(nextIndex === qnaDivs.length) {
        nextBtn.style.display = "none";
        showResultBtn.style.display = "block";
    } else {
        nextBtn.style.display = "block";
        showResultBtn.style.display = "none";
    }
}

// Previous and Next Button Functionalities
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

// Go to previous question
prevBtn.addEventListener("click", function() {
    displayQuestion(previousIndex);
});

// Go to next question
nextBtn.addEventListener("click", function() {
    displayQuestion(nextIndex);
});

// Setting checked attribute
function check(radio) {
    radio.setAttribute("checked", "true");
}

// Score Calculation
let score = 0;
function scoreCalculation() {
    score = 0;
    let allRadioButtons = document.querySelectorAll('input[type="radio"]:checked');
    allRadioButtons.forEach((radioBtn) => {
        score += (radioBtn.getAttribute("data-validate") === "true") ? 10 : -5;
    });
}

// Show Result Button functionality
let showResultBtn = document.getElementById("showResultBtn");
let resultSection = document.getElementById("resultSection");
let yourName = document.getElementById("yourName");
let yourScore = document.getElementById("yourScore");

function showResult() {   
    scoreCalculation();
    resultSection.style.display = "flex";
    yourName.innerHTML = `${userName.value}`;
    yourScore.innerHTML = score;
}

// Display Result
showResultBtn.addEventListener("click", function() {
    timer.style.display = "none";
    qnaSection.style.display = "none";
    showResult();
});

// Timer
let timerIcon = document.getElementById("timerIcon");
let runTime = document.getElementById("runTime");
let startTime = 1.6;
let time = startTime * 60;
let minutes = 0;
let seconds = 0;

function updateTime() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    minutes = (minutes < 10) ? ('0' + minutes) : minutes;
    seconds = (seconds < 10) ? ('0' + seconds) : seconds;
    runTime.innerHTML = `${minutes}:${seconds}`;

    if(time === 0) {
        timer.style.display = "none";
        qnaSection.style.display = "none";
        showResult();
    }

    if(time > 0) {
        time--;
    } else {
        clearInterval(callTimer);
        time = 0;
    }
    
    // time = (time < 0) ? 0 : time;
    if(time < 30) {
        timerIcon.style.fill = "#FFF";
        timer.style.backgroundColor = "red";
        timer.style.color = "white";
        timer.classList.add("animate-pulse");
    }
}

// Show Questions
let startBtn = document.getElementById("startBtn");
let timer = document.getElementById("timer");

startBtn.addEventListener("click", function(){
    instructions.style.display = "none";
    displayQuestion(0);
    callTimer = setInterval(updateTime, 1000);
});

// Display Answer Sheet
let viewAnswer = document.getElementById("viewAnswer");
let answerSheet = document.getElementById("answerSheet");

viewAnswer.addEventListener("click", async function() {
    resultSection.innerHTML = "Loading answer sheet...";
    
    try {
        // Generate answer sheet asynchronously
        let wait = await generateAnswerSheet();

        // Remove loading indicator and display answer sheet
        if(wait) {
            resultSection.style.display = "none";
            answerSheet.style.display = "block";
        }
        
    } catch(error) {
        // Handle errors here, e.g., display an error message
        console.error("Error generating answer sheet:", error);
        resultSection.innerHTML = "Error generating answer sheet. Please try again.";
    }
});

async function generateAnswerSheet() {
    for(let i = 0; i < questionSet.length; i++) {
        let displaySet = document.createElement("div");
        displaySet.className = "mb-3";
    
        let qnHeader = document.createElement("h1");
        qnHeader.className = "text-xl";
        qnHeader.innerHTML = `<strong>${qnaDivs[i].querySelector("h1").textContent}</strong>` ;
    
        let ansDiv = document.createElement("ul");
        ansDiv.className = "mt-3 flex flex-col justify-center items-left";
        ansDiv.style.listStyleType = "disc";
        ansDiv.style.listStylePosition = "inside";
        
        qnaDivs[i].querySelectorAll("label").forEach((label) => {
            let inputBox = label.querySelector('input[type="radio"]');
            let li = document.createElement("li");
            li.textContent = label.textContent;
    
            if((inputBox.checked) && (inputBox.getAttribute("data-validate") === "true")) {
                li.style.color = "green";
            } else if((inputBox.checked) && (inputBox.getAttribute("data-validate") === "false")){
                li.style.color = "red";
            }
    
            if(inputBox.getAttribute("data-validate") === "true"){
                li.style.color = "green";
                li.style.fontWeight = "bold";
            }
            
            ansDiv.appendChild(li);
        });
        
        displaySet.appendChild(qnHeader);
        displaySet.appendChild(ansDiv);
        answerSheet.appendChild(displaySet);
    }
    return true;
}
