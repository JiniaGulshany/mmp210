// loop repeats something
for (let i = 100; i >= 1; i--) {
    console.log('i', i);

}

function setup() {
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	background('green');

	for (let x = 0; x <= width; x += 100) {

		fill('plum');
		ellipse(x, 180, 80); //face

		fill('pink');
		ellipse(x + 20, 170, 20); // right eye
		ellipse(x - 20, 170, 20); // left eye
		rect(x - 20, 200, 40, 10, 5);
	}
}