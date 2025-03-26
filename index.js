
const sizeRaw = document.getElementById("sizeForm");
const inputNumber = Number(sizeRaw); 
function grid(size) {
    container = document.querySelector("#container");
    for (let i=0; i < size; i++) {
        const tile = document.createElement("div");
        container.appendChild(tile);
        tile.className = "tile";
        console.log("tile");
    }
} 
