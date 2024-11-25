// Main Navbar Close Functionality
let offerCloseIcon = document.getElementById("offerCloseIcon");
let offerBanner = document.querySelector(".offerBanner");

if(offerCloseIcon) {
    offerCloseIcon.addEventListener("click", function() {
        offerBanner.style.display = "none";
    });
}

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

// Using scrollLeft
// if(sliderLeftArrow) {
//     sliderLeftArrow.addEventListener("click", function() {
//         sliderImgContainer.style.scrollBehavior = "smooth";
//         sliderImgContainer.scrollLeft -= 300; 
//     });
// }

// if(sliderRightArrow) {
//     sliderRightArrow.addEventListener("click", function() {
//         sliderImgContainer.style.scrollBehavior = "smooth";
//         sliderImgContainer.scrollLeft += 300; 
//     });
// }

// Using marginLeft
if(sliderImgContainer) {
    let imgCount = sliderImgContainer.querySelectorAll("img").length;
    let sliderMargin = 0;
    if(sliderLeftArrow) {
        sliderLeftArrow.addEventListener("click", function() {
            if(sliderMargin == 0) {
                sliderMargin = `${(imgCount - 1) * 100}`;
                sliderImgContainer.style.marginLeft = `-${sliderMargin}vw`;
            } else {
                sliderMargin -= 100;
                sliderImgContainer.style.marginLeft = `-${sliderMargin}vw`;
            }
        });
    }

    if(sliderRightArrow) {
        sliderRightArrow.addEventListener("click", function() {
            sliderMargin += 100;
            if(sliderMargin > `${(imgCount - 1) * 100}`) {
                sliderMargin = 0;
                sliderImgContainer.style.marginLeft = 0;
            } else {
                sliderImgContainer.style.marginLeft = `-${sliderMargin}vw`;
            }
        });
    }
}

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

// Select all checkbox tags
let filterArray = [];
let checkBoxTags = document.querySelectorAll(".checkBoxTag");

if(checkBoxTags) {
    checkBoxTags.forEach((tag) => {
        tag.addEventListener("change", function() {
            if(tag.checked) {
                filterArray.push(tag.value);
            } else {
                let index = filterArray.indexOf(tag.value);
                filterArray.splice(index, 1);
            }
            console.log(filterArray);
            
            displayProduct();
        });
    });
}

// Product Filter Functionality
function displayProduct() {
    let productItems = document.querySelectorAll(".productItem");
    productItems.forEach((product) => {
        let isMatch = true;

        // Getting the tags from the current product 
        let productAllTags = product.querySelector(".tags").textContent;

        // Making the tags into an array
        let productTagsArray = productAllTags.split(", ");
        console.log(productTagsArray);
        

        // Checking if the selected filters are in the productTagsArray
        for(let count = 0; count < filterArray.length; count++) {
            let tag = filterArray[count];
            if(!productTagsArray.includes(tag)) {
                isMatch = false;
                count = filterArray.length;
            }
        }

        // Decide on showing the product
        if(filterArray.length > 0 && !isMatch) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
}