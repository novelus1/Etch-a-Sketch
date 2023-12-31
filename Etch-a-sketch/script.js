document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid-container");
  const createGridButton = document.getElementById("create-grid-btn");

  function createGrid(size) {
    gridContainer.innerHTML = "";
    
    const containerWidth = 400;
    const cellSize = containerWidth / size;

    gridContainer.style.width = `${containerWidth}px`;
    gridContainer.style.height = `${containerWidth}px`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, ${cellSize}px)`;

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        gridContainer.appendChild(cell);
      }
    }

    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#ffd";
      });
    });
  }

  createGrid(16);

  createGridButton.addEventListener("click", () => {
    const gridSizeInput = document.getElementById("grid-size");
    const gridSize = parseInt(gridSizeInput.value);
    if (!isNaN(gridSize) && gridSize >= 1 && gridSize <= 100) {
      createGrid(gridSize);
    } else {
      alert("Please enter a valid grid size (between 1 and 100).");
    }
  });
});