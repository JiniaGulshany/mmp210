
/*
any note i want to make
*/


var img;
var r = 0;
var c = 1; // change

function preload() {
	img = loadImage("MEME2.jpg");
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
	background(0);
	fill(r, 0, 100);
	noStroke();
	rect(0, 0, 640, 480);
	r += c;
	if (r > 255 || r < 0) {
		c *= -1;
	}

	textSize(60);
	fill('lightblue');
	stroke('black');
	strokeWeight(2);
	text("When people get offended over a meme, I'm over here like..".toUpperCase(), 10, 50, width);

	if (mouseIsPressed) {
		image(img, 0, 0, width);
	}
	

}