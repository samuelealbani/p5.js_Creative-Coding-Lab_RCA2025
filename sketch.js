let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(220, 100, 150);
  fill(0,0, 255);
  circle(x, 100, 30);
  x=x+1;

  noFill();
  circle(mouseX, mouseY, 50);
}
