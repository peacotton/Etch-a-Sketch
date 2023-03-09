const grid = document.getElementById("grid");

const slider = document.getElementById("myRange");
let length = slider.value;

const size = document.getElementById("sizeValue");
size.textContent = (`${length} x ${length}`);

const clearButton = document.getElementById("clear");
clearButton.addEventListener('click', clearGrid);

const color = document.getElementById("color");
color.addEventListener('change', updateColor);

const rainbowButton = document.getElementById("rainbow");
rainbowButton.addEventListener('click', rainbowUpdate);

let currentColor = 'black';
let rainbowMode = false;


let mouseDown = false;
grid.onmousedown = () => (mouseDown = true);
grid.onmouseup = () => (mouseDown = false);

function addSquares(length) {
    grid.style.cssText = `grid-template-columns: repeat(${length}, 1fr); grid-template-rows: repeat(${length}, 1fr)`
    size.textContent = (`${length} x ${length}`);
    length = length ** 2;
    removeAllChildNodes(grid);
    while (length > 0) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        // square.style.cssText = 'border: solid black';
        // console.log(length);
        length--;
    }
    
    const square = document.querySelectorAll('.square');
    square.forEach(square => square.addEventListener('mouseover', fillSquare));
    square.forEach(square => square.addEventListener('mousedown', fillSquare));

}

function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function fillSquare(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    if (rainbowMode == true) {
        currentColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        rainbowButton.style.backgroundColor = currentColor;
    }
    e.target.style.cssText = `background-color: ${currentColor}`;
}

function clearGrid(){
    const square = document.querySelectorAll('.square');
    square.forEach(square => square.style.cssText = 'background-color: white');
}

function updateColor(e){
    currentColor = this.value;
}

function rainbowUpdate(){
    if (rainbowMode == false){
        rainbowMode = true;
        rainbowButton.style.backgroundColor = 'indigo';
        rainbowButton.style.color = 'beige';
    } else {
        rainbowMode = false;
        currentColor = color.value;
        rainbowButton.style.backgroundColor = 'beige';
        rainbowButton.style.color = 'indigo';
    }
}

addSquares(length);