const container = document.querySelector(".container");

//prevent dragging elements
container.addEventListener("dragstart", (e) => {
	e.preventDefault()
});

container.addEventListener("drop", (e) => {
	e.preventDefault()
});

let resolution = 20;

function createGrid (resolution) {
	for (i = 0; i < resolution; i++) {
		const verticalLine = document.createElement("div");
		verticalLine.classList.add("vertical-line");
		container.appendChild(verticalLine);
		for (j = 0; j < resolution; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			verticalLine.appendChild(square);
		}
	}
	enableDrawing();
}

function enableDrawing () {
	grid = document.querySelectorAll(".square");
	//two event listeners to detect whether a single square was clicked
	//or if a line was drawn over a couple of them
	grid.forEach((square) => {
		square.addEventListener("mousedown", () => {
			square.style.backgroundColor = "blue";
		});
		square.addEventListener("mouseover", () => {
			if (clicked === 1) square.style.backgroundColor = "blue";
		});
	});
}

let grid = document.querySelectorAll(".square");
createGrid(resolution);

//a helper variable to decide when to color squares
let clicked = 0;

//draw when hovering over squares only when a button is pressed
container.addEventListener("mousedown", () => {
	clicked = 1;
});

//stop drawing if the button was released outside of the grid
document.addEventListener("mouseup", () => {
	clicked = 0;
});

function resize () {
	resolution = prompt("Choose new resolution!");
	container.textContent = '';
	createGrid(resolution);
	draw();
}

const resizeButton = document.querySelector(".resize");
resizeButton.addEventListener("click", resize);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
	grid.forEach((square) => {
		square.style.backgroundColor = "white";
	});
});