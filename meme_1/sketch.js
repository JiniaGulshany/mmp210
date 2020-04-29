
/*
any note i want to make
*/


var img;

function preload() {
	img = loadImage("MEME2.jpg");
}

function setup() {
    createCanvas(640, 480);

}

function draw(){
	image(img, 0, 0, width);
	textSize(60);
	fill('lightblue');
	stroke('black');
	strokeWeight(2);
	text("When people get offended over a meme, I'm over here like..".toUpperCase(), 10, 50, width);
}
