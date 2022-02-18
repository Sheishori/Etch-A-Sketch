const container = document.querySelector(".container");

//prevent dragging elements
container.addEventListener("dragstart", (e) => {
	e.preventDefault()
});

container.addEventListener("drop", (e) => {
	e.preventDefault()
});

let resolution = 10;

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

let color = "black";
let colorsDiv = document.querySelector(".colors");
let colorButtons = colorsDiv.querySelectorAll("button");
colorButtons.forEach((button) => {
	button.style.backgroundColor = button.className;
	button.addEventListener("click", (e) => {
		color = e.target.className;
	});
});

function randomColor () {
	let random = `hsl(${Math.floor(Math.random()*360)},
	100%, ${Math.floor(Math.random()*70)+ 20}%)`;
	//numbers in last random inconsequential, just wanted to avoid too bright/dark colors
	return random;
}

function customColor () {
	color = prompt("Enter a color (Name, RGB, HEX or HSL)");
}

const customButton = document.querySelector(".custom");
customButton.addEventListener("click", customColor);

function enableDrawing () {
	grid = document.querySelectorAll(".square");
	//two event listeners to detect whether a single square was clicked
	//or if a line was drawn over a couple of them
	grid.forEach((square) => {
		square.addEventListener("mousedown", () => {
			if (color === "random") {
				square.style.backgroundColor = randomColor();
			} else square.style.backgroundColor = color;
		});
		square.addEventListener("mouseover", () => {
			if (color === "random" && clicked === 1) {
				square.style.backgroundColor = randomColor();
			} else if (clicked === 1) square.style.backgroundColor = color;
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
	resolution = prompt("Choose number of squares per side (up to 100):");
	while (resolution > 100) {
		resolution = prompt("Number too big! Choose a new number (up to 100):");
	}
	if (resolution === null || resolution === '') exit;
	container.textContent = '';
	createGrid(resolution);
}

const resizeButton = document.querySelector(".resize");
resizeButton.addEventListener("click", resize);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
	grid.forEach((square) => {
		square.style.backgroundColor = "white";
	});
});