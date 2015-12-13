// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  var myCanvas = createCanvas(800, 600);
  myCanvas.parent('a-container');
  // stroke(0);
  background(0);
}

function getRandomColor() {
	var c1 = Math.floor(Math.random()*255 + 1);
	var c2 = Math.floor(Math.random()*255 + 1);
	var c3 = Math.floor(Math.random()*255 + 1);
	return color(c1, c2, c3);
}

function draw() {
  if(mouseIsPressed) {
    fill(getRandomColor());
  } else {
    fill(Math.floor(Math.random()*255 + 1));
  }
  ellipse(mouseX,mouseY,Math.random()*100,Math.random()*100);
}