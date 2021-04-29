var canvas;
var btn;

var x = 100;
var y = 100;

function setup() {
	let canvas = createCanvas(0.45 * windowHeight, 0.8 * windowHeight);
	canvas.parent('container');
	btn = createButton('Download');
	btn.mouseClicked(dPressed);
}

function draw() {
	background('#ffd1d1');

	fill(255, 0, 0);
	rect(x, y, 20, 20);
	x = x + random(-10, 10);
	y = y + random(-10, 10);
}

function dPressed() {
	noCanvas();
	console.log('inside');
	resizeCanvas(900, 1600);
	save('download.png');
}
