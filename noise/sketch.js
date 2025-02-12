let x, y, diam;
let speed = 1;


function setup() {
  createCanvas(400, 400);

  x = 0;
  y = height/ 2;
  diam=10;
  background(0, 0, 220);
}

function draw() {
  
  // x += speed;
  // y = random(height); // random
  x = noise(frameCount *  0.01) * width;
  y = noise(frameCount *  0.01 + 1) * height;
  

  
  if(x > width){
    x = 0;
    fill(random(255), random(255), random(255))
  }
  circle(x, y, diam);
}
