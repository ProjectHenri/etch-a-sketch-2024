const GRID_CONTAINER = document.querySelector("#container");
let containerHeight = window.getComputedStyle(GRID_CONTAINER).getPropertyValue("height").slice(0,3);
let containerWidth = window.getComputedStyle(GRID_CONTAINER).getPropertyValue("width").slice(0,3);
let gridSize = 16;

function createGrid(gridSize){

    for(let i = 0; i < gridSize**2; i++){
        let gridSquare = document.createElement("div");
        gridSquare.style.height = `${containerHeight/gridSize}px`;
        gridSquare.style.width = `${containerWidth/gridSize}px`;
        gridSquare.classList.add("grid-square");
        GRID_CONTAINER.appendChild(gridSquare);
    }
}

createGrid(gridSize);
