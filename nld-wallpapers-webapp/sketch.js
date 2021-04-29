function setup() {
	createCanvas(450, 800);
	btn = createButton('Download');
	btn.mouseClicked(keyPressed);
}

function draw() {
	background('#ffd1d1');
}

function keyPressed() {
	noCanvas();
	resizeCanvas(900, 1600);
	save('download.png');
}
