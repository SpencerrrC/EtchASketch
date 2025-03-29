// POPUP PROMPT
function userPrompt() {
let boxWidth= prompt("Enter a desired size", 10);
let numWidth= Number(boxWidth);
grid(numWidth);
console.log(typeof(numWidth));
}

function grid(size) {
    container = document.querySelector("#container");
    container.innerHTML = "";
    for (i=0; i<size; i++) {
        const row = document.createElement("div"); 
        row.className = "row";
            for (j=0; j<size; j++){
            const tile = document.createElement("div");
            tile.className = "tile";
            tile.innerText = "hi";
            container.appendChild(tile);
            console.log("tile");
            localStorage.setItem(`tile-${i}`, "created");
        }
        
    }
}

// GENERAL DOCUMENT CODE
userPrompt();
const resetButton = document.querySelector("#reset").addEventListener("click", () => {
    userPrompt();
})

// CREATING DIV


// document.querySelector("#sizeForm").addEventListener("submit", function (e){
//     e.preventDefault();
    
//     const inputField = document.querySelector("input");
//     const numSize = Number(inputField.value);
//     if (!isNaN(numSize) && numSize > 0 && numSize < 100) {
//         grid(numSize);
//     } else {
//         console.error("Please enter a valid number.");
//     }
// });

// function grid(size) {
//     const container = document.querySelector("#container");
//     container.innerHTML = "";
//     for (let i=0; i < size; i++) {
//         const tile = document.createElement("div");
//         container.appendChild(tile);
//         tile.className = "tile";
//         tile.innerText = "hi";
//         console.log("tile");
//         localStorage.setItem(`tile-${i}`, "created");
//     }
// } 

// document.querySelector("#height").addEventListener("submit", function (e){
//     e.preventDefault();
//     const inputField = document.querySelector("input");
//     const numSize = Number(inputField.value);
//     if (!isNaN(numSize) && numSize > 0 && numSize < 80) {
//         grid(numSize);
//     } else {
//         console.error("Please enter a valid number.");
//     }
// });

// function height(input) {
//     document.querySelector("#container")

//     for (i=1;i<input;i++) {
//         grid(numSize);
//     }
// }

