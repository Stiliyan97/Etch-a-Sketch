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

createTheRows(16);

function createTheGrid (gridSize) {
       
}