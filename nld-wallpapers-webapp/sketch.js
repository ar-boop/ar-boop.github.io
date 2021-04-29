var canvas;
var cw, ch;
var btn;

let v1;
var disX;
var disY;

function setup() {
	cw = 0.45 * windowHeight;

	ch = 0.8 * windowHeight;
	console.log(cw + ', ' + ch);
	let canvas = createCanvas(0.45 * windowHeight, 0.8 * windowHeight);
	canvas.parent('container');
	btn = createButton('Download');
	btn.mouseClicked(dPressed);
	background('#ffd1d1');

	var x = random(0, 550);
	var y = random(0, 550);

	v1 = createVector(x, y);
	frameRate(100);
	disX = +1;
	disY = +1;
}

function draw() {
	fill('blue');
	rectMode(CENTER);
	rect(v1.x, v1.y, 10, 10);
	v1.x += disX;
	v1.y += disY;
	var nx = v1.x;
	var ny = v1.y;

	if (v1.y >= 575) disY *= -1.05;
	else if (v1.x >= 575) disX *= -1.05;
	else if (v1.y <= 25) disY *= -1.05;
	else if (v1.x <= 25) disX *= -1.05;
}

function dPressed() {
	noCanvas();
	console.log('inside');
	resizeCanvas(900, 1600);
	save('download.png');
}
