
/*
any note i want to make
*/

function setup() {
	createCanvas (640,360);

}

function draw() {
	background ('brown');
    fill('black');
    //mouth
    var x =320;
    var y =180;

  /* x = mouseX; 
*/ 
	triangle(x, y, x-200, y+160, x+180, y+160);
	triangle(90, 80, 20, 200, 220, 200);
	triangle(560, 80, 420, 200, 620, 200);
	fill('orange');
	circle(115, 165, 70);
	circle(530, 165, 70);
    fill('pink'); //tongue

    rect(x-80, y+70, 160, 80, 40);

}