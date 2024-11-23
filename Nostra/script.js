// Main Navbar Close Functionality
let offerCloseIcon = document.getElementById("offerCloseIcon");
let offerBanner = document.querySelector(".offerBanner");

offerCloseIcon.addEventListener("click", function() {
    offerBanner.style.display = "none";
});

// Side Navbar Close Functionality
let menubar = document.getElementById("menubar");
let sideNavbarContainer = document.querySelector(".sideNavbarContainer");
let sideNavbar__close = document.querySelector("#sideNavbar__close");

menubar.addEventListener("click", function() {
    sideNavbarContainer.style.left = "0%";
});

sideNavbar__close.addEventListener("click", function() {
    sideNavbarContainer.style.left = "-50%";
});

// Image Slider Functionality
let sliderImgContainer = document.querySelector(".slider__imgContainer");
let sliderLeftArrow = document.getElementById("sliderLeftArrow");
let sliderRightArrow = document.getElementById("sliderRightArrow");

sliderLeftArrow.addEventListener("click", function() {
    sliderImgContainer.style.scrollBehavior = "smooth";
    sliderImgContainer.scrollLeft -= 300; 
});

sliderRightArrow.addEventListener("click", function() {
    sliderImgContainer.style.scrollBehavior = "smooth";
    sliderImgContainer.scrollLeft += 300; 
});

// Save favourite collections using save button
let savedLists = document.querySelectorAll(".saveBtn");

savedLists.forEach((saveBtn) => {
    saveBtn.addEventListener("click", function() {
        saveBtn.classList.toggle("save");
    });
});

// Mark favorite by liking Hearts
let favouriteLists = document.querySelectorAll(".heart");

favouriteLists.forEach((heart) => {
    heart.addEventListener("click", function() {
        heart.classList.toggle("heartLiked");
    });
});

// New Arrivals Linking Functionality
// let newArrivalsLists = document.querySelectorAll(".newArrivalsLink");

// function scrollToSection(referTo) {
//     document.getElementById(referTo).scrollIntoView({behavior: 'smooth'});
// }

// newArrivalsLists.forEach((newArrivalLink) => {
//     newArrivalLink.addEventListener("click", function() {
//         scrollToSection("index.html#newArrivals");
//     });
// });