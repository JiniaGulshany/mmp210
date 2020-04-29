
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
    var s =70;

  /* x = mouseX; 
*/ 
	triangle(x, y, x-200, y+160, x+180, y+160);
	triangle(x-230, y-100, x-300, y+20, x-100, y+20);
	triangle(x+240, y-100, x+100, y+20, x+300, y+20);
	fill('orange');
	circle(x-205, y-15, s);
	circle(x+210, y-15, s);
    fill('pink'); //tongue

    rect(x-80, y+70, s*2, s, 40);

}