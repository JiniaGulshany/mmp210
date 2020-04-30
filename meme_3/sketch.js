
/*
meme 3 animation
*/


var img;
var r = 0;
var c = 1; // change
//image animation perimeter

var y = 40;
var minY = y - 20;
var maxY = y + 20;
var ySpeed = 1;

function preload() {
	img = loadImage("MEME2.jpg");
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
	background(0);
	//backgound color animation
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

    //when mouse pressed, animation starts
	if (mouseIsPressed) {
		image(img, 0, y, width);
		y += ySpeed;

		if (y > maxY || y < minY) {
			ySpeed *= -1; 
		}
	}
	

}