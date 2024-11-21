let menuicon = document.getElementById("menuicon");
let sidenavbar = document.getElementById("sidenavbar");
let closeicon = document.getElementById("closeicon");
let watchVideo = document.getElementById("watch-video");
let videoContainer = document.getElementById("video-container");
let video = document.getElementById("video");
let closeButton = document.getElementById("close");

menuicon.addEventListener("click", function() {
    sidenavbar.style.right = "0";
});

closeicon.addEventListener("click", function() {
    sidenavbar.style.right = "-50%";
});

watchVideo.addEventListener("click", function() {
    videoContainer.style.display = "flex";
});

closeButton.addEventListener("click", function() {
    video.pause();
    video.currentTime = 0;
    videoContainer.style.display = "none";
});