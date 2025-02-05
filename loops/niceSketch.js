let x = 0

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  drawEye(width/2, height/2, 150);
  drawEye(400, 200, 10);
  drawEye(100, 200, 50);
}


function drawEye(xEye, yEye, diam){
  
  fill(0,127,0);
  ellipse(xEye, yEye, diam);

  fill(255);
  ellipse(xEye, yEye, diam, diam*0.45);
  
  fill(0);
  ellipse(xEye, yEye+diam*0.1, diam*0.2); 
}
