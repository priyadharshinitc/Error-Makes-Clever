let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let captcha = "";
for(let count = 0; count < 6; count++) {
    captcha += letters[Math.floor(Math.random() * 62)];
}

let display = document.getElementById("display");
display.textContent = captcha;

let verify = document.getElementById("verifyBtn");

// Verify
verify.addEventListener("click", function(){
    let inputValue = document.getElementById("inputBox").value;
    if(inputValue === "") {
        window.alert("Enter CAPTCHA");
    } else if(inputValue === captcha) {
        window.alert("CAPTCHA Verified Successfully!");
        location.reload();
    } else {
        window.alert("CAPTCHA Verification Failed. Please try again");
    }
});

let reloadBtn = document.getElementById("reloadBtn");
reloadBtn.addEventListener("click", function(){
    location.reload();
});