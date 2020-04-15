
/*
any note i want to make
*/

function setup() {
	createCanvas (640,360);
}

function draw() {
	background ('brown');

// using frameCount as the ellipse size
	var x = width / 2;
	var y = height / 2;
	var s = frameCount; // size
	
	
    fill('green');
	ellipse(x, y, s);



    /*
    fill('white');
	text('self portrait', 50, 30);
	*/
    fill('black');
	triangle(320, 180, 120, 340, 500, 340);
	triangle(90, 80, 20, 200, 220, 200);
	triangle(560, 80, 420, 200, 620, 200);
	fill('orange');
	circle(115, 165, 70);
	circle(530, 165, 70);
    fill('pink');
    rect(240, 250, 160, 80, 40);

	}