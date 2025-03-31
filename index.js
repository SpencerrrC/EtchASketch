// POPUP PROMPT
function userPrompt() {
let boxWidth= prompt("Enter a desired size", 16);
let numWidth= Number(boxWidth);
grid(numWidth);
console.log(typeof(numWidth));
}

// MAKE THE GRID
function grid(size) {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    for (i=0; i<size; i++) {
        const row = document.createElement("div"); 
        row.className = "row";
        container.appendChild(row);
        console.log(row);
            for (j=0; j<size; j++){
            const tile = document.createElement("div");
            tile.className = "tile";
            row.appendChild(tile);
            tile.addEventListener("mouseover", event => {
                event.target.style.backgroundColor = getRandomColor();
             });
        }
        
    }
}

function getRandomColor() {
    let r = getRandomInt(255);
    let g = getRandomInt(255);
    let b = getRandomInt(255);
    
    return `rgb(${r},${g},${b})`;
  }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// GENERAL DOCUMENT CODE
userPrompt();
const resetButton = document.querySelector("#reset").addEventListener("click", () => {
    userPrompt();
})
