let x ;
let speed = 10;

function setup() {
  createCanvas(500, 500);
  background(255, 0, 100);
  x = width;
}

function draw() {
  // background(0);

  noFill(); // stroke only
  stroke(255); // this controls the colour of the outline
  circle(mouseX, mouseY, 50); // built-in variable containing the current x and y mouse position 

  noStroke();
  fill(0, 255, 0);
  circle(x, height/4, 30);
  x -= speed;

  fill(0, 0, 255);
  circle(width / 2, height / 2, 30); // built-in variables containing width and height of the canvas
}
