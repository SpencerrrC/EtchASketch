// POPUP PROMPT
// function userPrompt() {
// let boxWidth= prompt("Enter a desired size", 6);
// let numWidth= Number(boxWidth);
// grid(numWidth);
// console.log(typeof(numWidth));
// }

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
            tile.innerText = "hi";
            row.appendChild(tile);
            console.log("tile");
            
        }
        
    }
}

// GENERAL DOCUMENT CODE
// userPrompt();
grid(6);
const resetButton = document.querySelector("#reset").addEventListener("click", () => {
    userPrompt();
})
