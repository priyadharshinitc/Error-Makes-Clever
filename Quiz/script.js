// Initial Display
let login = document.getElementById("login");
let instructions = document.getElementById("instructions");
let qna = document.getElementById("qna");

// window.onload = () => {
//     login.style.display = "block";
//     instructions.style.display = "none";
//     qna.style.display = "none";
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