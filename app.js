const grid = document.getElementById("grid");


function addSquares(length) {
    grid.style.cssText = `grid-template-columns: repeat(${length}, 1fr); grid-template-rows: repeat(${length}, 1fr)`
    length = length ** 2;
    removeAllChildNodes(grid);
    while (length > 0) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = 'border: solid black';     
        grid.appendChild(square);
        console.log(length);
        length--;
    }
}

function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}