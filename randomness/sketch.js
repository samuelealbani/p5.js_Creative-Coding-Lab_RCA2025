let x, y, diam; // circle // single line multi-variable declare

function setup() {
  createCanvas(400, 400);

  x = random( width );
  y = height/2;
  diam = 20;

  background(random(255), random(255), random(255));
}

function draw() {
  fill(random(255), random(255), random(255), 50)
  x = random(-10, 10) + mouseX;
  y = random(-10, 10) + mouseY;
  circle(x, y, diam);
}
