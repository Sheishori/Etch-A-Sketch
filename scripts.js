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

const grid = document.querySelectorAll(".square");

grid.forEach((square) => {
	square.addEventListener("mouseover", () => {
		square.style.backgroundColor = "blue";
	});
});