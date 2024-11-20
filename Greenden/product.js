// Adding Filter Functionality
let searchBox = document.getElementById("searchBox");
let productsContainer = document.querySelector("#products-container");
let productsList = productsContainer.querySelectorAll("div");

searchBox.addEventListener("keyup", function() {
    let inputValue = searchBox.value.toUpperCase();

    for(let count = 0; count < productsList.length; count++) {
        let productName = productsList[count].querySelector(".productName");

        if(productName.textContent.toUpperCase().includes(inputValue)) {
            productsList[count].style.display = "block";
        } else {
            productsList[count].style.display = "none";
        }
    }
});