document.querySelector("form").addEventListener("submit", function (e){
    e.preventDefault();
    const inputField = document.querySelector("input");
    const numSize = Number(inputField.value);
    if (!isNaN(numSize) && numSize > 0 && numSize < 100) {
        grid(numSize);
    } else {
        console.error("Please enter a valid number.");
    }
});

function grid(size) {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    for (let i=0; i < size; i++) {
        const tile = document.createElement("div");
        container.appendChild(tile);
        tile.className = "tile";
        tile.innerText = "hi";
        console.log("tile");
        localStorage.setItem(`tile-${i}`, "created");
    }
} 

