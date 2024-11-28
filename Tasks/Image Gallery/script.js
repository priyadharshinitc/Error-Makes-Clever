let imgContainer = document.querySelector(".img-container");
let imgs = imgContainer.querySelectorAll("img");
let overlay = document.getElementById("overlay");
let selectedImgContainer = document.getElementById("selectedImgContainer");
let closeBtn = document.getElementById("closeBtn");

imgs.forEach((img) => {
    img.addEventListener("click", function(){
        overlay.style.display = "block";
        selectedImgContainer.style.display = "block";
        selectedImgContainer.innerHTML = `<img src=${img.src} alt=${img.alt}>`;
        let selectedImg = selectedImgContainer.querySelector("img");
        selectedImg.setAttribute("id", "selectedImg");
        closeBtn.style.display = "block";    
    });
});

closeBtn.addEventListener("click", () => {  
    closeBtn.style.display = "none";
    selectedImgContainer.style.display = "none";
    overlay.style.display = "none";
});