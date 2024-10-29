// The function creates the rows for the grid

function createTheRows(numberOfRows) {
    let containerDiv = document.getElementById("container");
    let containerDivHeight = containerDiv.offsetHeight;
    
    let rowHeight = containerDivHeight / numberOfRows;
    for (let i = 0; i < numberOfRows; i++) {
        let rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
            rowDiv.style.height = `${rowHeight}px`;
            containerDiv.appendChild(rowDiv);
    }
}

// The function creates the squares for the grid

function createTheSquares (numberOfSquares) {
    let containerDiv = document.getElementById("container");
    let containerDivHeight = containerDiv.offsetHeight;
    
    let rows = document.querySelectorAll(".row");

    console.log(rows);

    let squareSize = containerDivHeight / numberOfSquares;

    for (let i = 0; i < numberOfSquares; i++) {
        let currentRow = rows[i];
        for (let j = 0; j < numberOfSquares; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.style.height = `${squareSize}px`;
            squareDiv.style.width = `${squareSize}px`;
            currentRow.appendChild(squareDiv);
        }
        
    }
}

createTheRows(16);

createTheSquares(16);

function createTheGrid (gridSize) {
       
}