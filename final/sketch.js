/*final*/

var music, ambienceSound, horror1Sound, horror2Sound, horror3Sound;
var img;

function preload() {
	ambienceSound = loadSound("ambience.wav"); //used A key
	horror1Sound = loadSound("horror1.wav");  // used S key
	horror2Sound = loadSound("horror2.wav");  // used D key
	horror3Sound = loadSound("horror3.wav");  // used F key

	img = loadImage("ghost.jpg");
}

function setup() {
	createCanvas(640, 360);
	noStroke();
}

function keyPressed(){ // to add sound

	if (keyCode == 65) {  //key A
		if  (ambienceSound.isPlaying()) {
			ambienceSound.pause();
		} else {
			ambienceSound.play();
		}
	}
	if (keyCode == 83) {  //key S
		horror1Sound.play();
	}
	if (keyCode == 68) {  //key D
		horror2Sound.play();
	}
	if (keyCode == 70) {  //key F
		horror3Sound.play();
	}

}

function draw() {

	background('red');

 	if (ambienceSound.isPlaying()) {  //key A
 	fill('white');
    rect(0,0,160, height);
  } 
  	if (horror1Sound.isPlaying()) {  //key S
 	fill('gray');
    rect(160,0,160, height);
  } 
  if (horror2Sound.isPlaying()) {  //key D
 	fill('orange');
    rect(320,0,160, height);
  } 
  if (horror3Sound.isPlaying()) {  //key F
 	image(img,0,0, width);       //Ghost image appears
  } 

}
