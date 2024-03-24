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
let effect;
let currentOppacity;

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

switch(effect){
  case "eraser":
    e.target.style.backgroundColor = "#ffffff";
  break;
  case "black":
    e.target.style.backgroundColor = "#222222";
  break;
  case "rainbow":
    let randomR = Math.floor(Math.random()*256);
    let randomB = Math.floor(Math.random()*256);
    let randomG = Math.floor(Math.random()*256);
    e.target.style.backgroundColor = `rgb(${randomR},${randomB},${randomG})`;
  break;
  case "shadow":
    currentOppacity = Number(e.target.style.opacity) || 0.1;
    console.log(currentOppacity);
    if (currentOppacity < 1){
      currentOppacity += 0.1;
      e.target.style.opacity = currentOppacity;
      e.target.style.backgroundColor = "#222222";
    }
  break;
  default:
    e.target.style.backgroundColor = "#222222";
}

}

function clearGrid() {
  while (GRID_CONTAINER.firstChild) {
    GRID_CONTAINER.removeChild(GRID_CONTAINER.lastChild);
  }
}

INPUTS.forEach((input) => addFunctionality(input));

function addFunctionality(input) {
  switch (input.getAttribute("id")) {
    case "clear":
      input.addEventListener("click", createGrid)
      break;
    case "eraser":
      input.addEventListener("click", () => effect = "eraser");
      input.addEventListener("click", toggleStates);
      break;
    case "black":
      input.addEventListener("click", () => effect = "black");
      input.addEventListener("click", toggleStates);
      break;
    case "rainbow":
      input.addEventListener("click", () => effect = "rainbow");
      input.addEventListener("click", toggleStates);
      break;
    case "shadow":
      input.addEventListener("click", () => effect = "shadow");
      input.addEventListener("click", toggleStates);
      break;
    case "slider":
      input.addEventListener("input", createGrid);
      input.addEventListener("input", (e) => {
        document.querySelector("#sliderText").textContent =
          `GRID SIZE: ${e.target.value} x ${e.target.value}`;
      });
      break;
  }
}

function toggleStates(e){
  INPUTS.forEach(input => input.classList.remove("active"));
  e.target.classList.add("active");
}

