/*pattern version 1*/

// loop repeats something
/*
var img;

function preload() {
	img = loadImage("pan.png");
}
*/
function setup() {
	createCanvas(640, 360);
	noStroke();
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	/*image(img, 0, 0, width); //frying pan
	*/
	background('green');

	for (let x = 100; x <= width; x += 150) {

		let s = random(40, 80); // to change the size

		let y = random(s/2, height - s/2); // to change the height

// fried eggs

		
		fill(255); // for egg white

		for (let i = 0; i<6; i++) {

			ellipse(x + random(-45, 45), y + random(-45, 45), s + random(50));
	
		}
		fill('yellow'); // yolk
		ellipse(x,y,s);
	}
}