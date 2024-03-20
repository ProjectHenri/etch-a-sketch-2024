const GRID_CONTAINER = document.querySelector("#container");
const INPUTS = document.querySelectorAll("button, input");
let containerHeight = window
  .getComputedStyle(GRID_CONTAINER)
  .getPropertyValue("height")
  .slice(0, 3);
let containerWidth = window
  .getComputedStyle(GRID_CONTAINER)
  .getPropertyValue("width")
  .slice(0, 3);
let squareColor = "#222222";

window.addEventListener("load", createGrid);

function createGrid(e) {
  gridSize = e.target.value || INPUTS[5].value;
  clearGrid(); // Remove previous grid before creating a new one

  for (let i = 0; i < gridSize ** 2; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.style.height = `${containerHeight / gridSize}px`;
    gridSquare.style.width = `${containerWidth / gridSize}px`;
    gridSquare.classList.add("grid-square");
    gridSquare.addEventListener("mouseover", colorSquares);
    GRID_CONTAINER.appendChild(gridSquare);
  }
}

function colorSquares(e){

  e.target.style.backgroundColor = squareColor;

}

function clearGrid() {
  while (GRID_CONTAINER.firstChild) {
    GRID_CONTAINER.removeChild(GRID_CONTAINER.lastChild);
  }
}

INPUTS.forEach((input) => addFunctionality(input));

function addFunctionality(input) {
  switch (input.getAttribute("id")) {
    case "slider":
      input.addEventListener("input", createGrid);
      input.addEventListener("input", (e) => {
        document.querySelector("#sliderText").textContent =
          `GRID SIZE: ${e.target.value} x ${e.target.value}`;
      });
      break;
    case "black":
      input.addEventListener("click", () => squareColor = "#222222");
      break;
    case "clear":
      input.addEventListener("click", createGrid)
      break;
  }
}

