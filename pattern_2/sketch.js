/*pattern version 2*/

// Interface
var angleSlider;

function setup() {
	createCanvas(640, 360);
	noStroke();


	angleSlider = createSlider(0, TWO_PI); //slider
	angleSlider.input(pattern);


	var patternButton = createButton('New Pattern');
	patternButton.mousePressed(pattern);

	var saveButton = createButton('Save Image');
	saveButton.mousePressed(saveImage);

	pattern();
}

function saveImage() {
	save('pattern.png');
}

function pattern() {
	background('green');

	for (let x = 20; x <= width; x += 100) {

		let s = random(40, 80); // to change the size

		let y = random(s/2, height - s/2); // to change the height

// fried eggs


		fill(255); // for egg white

		for (let i = 0; i<6; i++) {

			push();
			translate(x, height/16);
			rotate(angleSlider.value() * PI);

			ellipse(x + random(-45, 45), y + random(-45, 45), s + random(50));
			pop();
		}

		fill('yellow'); // yolk
		ellipse(x,y,s);
	}
}