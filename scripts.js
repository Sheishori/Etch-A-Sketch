const container = document.querySelector(".container");

for (i = 0; i < 20; i++) {
	const verticalLine = document.createElement("div");
	verticalLine.classList.add("vertical-line");
	container.appendChild(verticalLine);
	for (j = 0; j < 20; j++) {
		const square = document.createElement("div");
		square.classList.add("square");
		verticalLine.appendChild(square);
	}
}

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

const grid = document.querySelectorAll(".square");
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

//prevent dragging elements
container.addEventListener("dragstart", (e) => {
	e.preventDefault()
});

container.addEventListener("drop", (e) => {
	e.preventDefault()
});