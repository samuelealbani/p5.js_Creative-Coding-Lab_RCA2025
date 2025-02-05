let x = 0

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  drawEye(x, height/2);
  x += 1;
  

  drawEye(200, 100);
  drawEye(mouseX, mouseY);
}


function drawEye(xEye, yEye){

  
  fill(0,127,0);
  ellipse(xEye, yEye, width*0.25);

  fill(255);
  ellipse(xEye, yEye, width*0.25, height/10);
  
  fill(0);
  ellipse(xEye, yEye+10, width*0.05); // + x
}
