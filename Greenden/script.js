let menuicon = document.getElementById("menuicon");
let sidenavbar = document.getElementById("sidenavbar");
let closeicon = document.getElementById("closeicon");

menuicon.addEventListener("click", function() {
    sidenavbar.style.right = "0";
});

closeicon.addEventListener("click", function() {
    sidenavbar.style.right = "-50%";
})