/*updated pattern version 2
DOM*/

// Interface
var angleSlider;

function setup() {
	var canvas = createCanvas(640, 360);
	canvas.parent("sketch");
	noStroke();

	angleSlider = createSlider(0, TWO_PI, 0, TWO_PI / 360); //slider
	angleSlider.input(pattern);
	angleSlider.parent("sketch");

	var patternButton = createButton('New Pattern');
	patternButton.mousePressed(pattern);
	patternButton.parent("sketch");

	var saveButton = createButton('Save Image');
	saveButton.mousePressed(saveImage);
	saveButton.parent("sketch");

	pattern();
}

function saveImage() {
	save('pattern.png');
}

function pattern() {
	background('green');

	for (let x = 20; x <= width; x += 150) {

		let s = random(60, 80); // to change the size

		let y = x/2; // to change the height

// fried eggs


		fill(255); // for egg white

		for (let i = 0; i<6; i++) {

			push();
			translate(x, y);
			rotate(angleSlider.value() * PI);

			ellipse(random(40), random(20), s + random(50));
			pop();
		}

		fill('yellow'); // yolk
		ellipse(x,y,s);
	}
	
}