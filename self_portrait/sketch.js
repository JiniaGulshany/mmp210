
/*
any note i want to make
*/

function setup() {
	createCanvas (640,360)
}

function draw() {
	background ('pink');

	//SHAPES THAT ARE ONLY xy coordinate + size//

	fill ('green');
	stroke ('lime');
	strokeWeight (2);

	ellipse (200, 180, 200);
	fill ('red');
	noStroke();
	ellipse (220, 160, 30, 10);
	ellipse (180, 160, 30, 10);
	fill ('yellow');
	rectMode (CENTER);
	rect (200, 220, 80, 10, 5);
    fill ('orange');
	arc (290, 180, 40, 60, -HALF_PI, HALF_PI);
	arc (290, 180, 30, 50, -HALF_PI, HALF_PI);

//SHAPES THAT ARE ONLY XY POINTS//

    line(150, 60, 170, 100);
    line(160, 60, 180, 100);
    line(170, 60, 190, 100);
    line(180, 60, 200, 100);

    fill ('purple');
    triangle (190, 180, 180, 200, 220, 190);
}