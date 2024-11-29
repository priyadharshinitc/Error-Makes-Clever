const fetchBtn = document.getElementById("fetchBtn");
const inputBox = document.getElementById("inputBox");
const filter = document.querySelector(".filter");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");
let jsonUserData = [];
async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        jsonUserData = await response.json();
        // console.log(jsonUserData);
        jsonUserData.forEach((userData) => {
            result.innerHTML += `
                                    <li>
                                        <h2>User ID: ${userData.userId}</h2>
                                        <h2>Title: ${userData.title}</h2>
                                        <p><strong>Description: </strong>${userData.body}</p>
                                    </li>
                `
        });
    } catch (error) {
        result.innerHTML = error.message + " 😟";
        result.style.fontSize = "20px";
        result.style.textAlign = "center";
    }
};

function filteredData() {
    let userInput = inputBox.value.trim().toLowerCase();
    result.innerHTML = "";
    for(const userData of jsonUserData) {
        if((userInput !== "") && userData.title.includes(userInput)) {
            result.innerHTML += `
                                <li>
                                    <h2>User ID: ${userData.userId}</h2>
                                    <h2>Title: ${userData.title}</h2>
                                    <p><strong>Description: </strong>${userData.body}</p>
                                </li>
            `;
        } else {
            continue;
        }
    }
}

fetchBtn.addEventListener("click", getUserData);
filter.addEventListener("submit", function(){
    event.preventDefault();
    filteredData;
});
searchBtn.addEventListener("click", filteredData);