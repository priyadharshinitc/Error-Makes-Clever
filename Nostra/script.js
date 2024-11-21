// Main Navbar Close Functionality
let navCloseIcon = document.getElementById("navCloseIcon");
let offerBanner = document.querySelector(".offer-banner");

navCloseIcon.addEventListener("click", function() {
    offerBanner.style.display = "none";
});

// Side Navbar Close Functionality
let menubar = document.getElementById("menubar");
let sideNavbarContainer = document.querySelector(".sideNavbarContainer");
let sideNavbar__close = document.querySelector("#sideNavbar__close");

menubar.addEventListener("click", function() {
    sideNavbarContainer.style.left = "0";
});

sideNavbar__close.addEventListener("click", function() {
    sideNavbarContainer.style.left = "var(--n200px)";
});