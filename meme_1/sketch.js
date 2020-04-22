
/*
any note i want to make
*/
/*
function setup() {
	createCanvas (800,450);
}
function image()
function draw() {
	background ('brown');
}

*/
var img;

function preload() {
	img = loadImage("MEME.jpg");
}

function setup() {
    createCanvas(640, 480);
}

function draw(){
	image(img, 0, 0);
}
