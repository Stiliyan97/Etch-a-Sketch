function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*255) + 1 ;

    console.log(randomNumber);
    return randomNumber;
}


function changeColor (e) {
    let currentSquare = e.target;

    currentSquare.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

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

    let squareSize = containerDivHeight / numberOfSquares;

    for (let i = 0; i < numberOfSquares; i++) {
        let currentRow = rows[i];
        for (let j = 0; j < numberOfSquares; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.style.height = `${squareSize}px`;
            squareDiv.style.width = `${squareSize}px`;
            currentRow.appendChild(squareDiv);
            squareDiv.addEventListener("dragenter", changeColor);
            squareDiv.addEventListener("click", changeColor);
        }
        
    }
}

// The function clears the grid

function clearTheGrid() {
    let containerDiv = document.getElementById("container");
    
    let gridRows = Array.from(containerDiv.children);

    for (let i = 0; i < gridRows.length; i++) {
        containerDiv.removeChild(gridRows[i]);
    }
}

createTheRows(16);

createTheSquares(16);


let changeGridBtn = document.getElementById("change-grid-btn");

changeGridBtn.addEventListener("click", createTheGrid)

function createTheGrid (e) {

    let inputValue = e.target.previousElementSibling.value;
    console.log(inputValue);

    if(isNaN(parseInt(inputValue))) {
        return;
    }

    let gridSize = parseInt(inputValue);

    if (gridSize < 0 || gridSize > 100) {
        return;
    }

    clearTheGrid();

    createTheRows(gridSize);

    createTheSquares(gridSize);

       
       
}