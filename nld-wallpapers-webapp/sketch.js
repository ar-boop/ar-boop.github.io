function setup() {
	createCanvas(0.45 * windowHeight, 0.8 * windowHeight);
	btn = createButton('Download');
	btn.mouseClicked(keyPressed);
}

function draw() {
	background('#ffd1d1');
}

function keyPressed() {
	noCanvas();
	console.log('inside');
	resizeCanvas(900, 1600);
	save('download.png');
}
