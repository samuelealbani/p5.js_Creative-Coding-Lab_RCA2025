let x = 0;

let offset = 0;

function setup() {
  createCanvas(500, 400);

  frameRate(10)
}

function draw() {
  background(220, 0, 0);

  offset = sin(frameCount)*5;

  // for(let i = 0; i <= height; i+= 10){
  //     drawEye(random(width), random(height), random(50));
  // }

    for(let i = width; i >= 50; i-= 10){
      drawEye(i, height/2, width - i);
  }

}


function drawEye(xEye, yEye, diam){
  
  fill(0,127,0);
  ellipse(xEye, yEye, diam);

  fill(255);
  ellipse(xEye, yEye, diam, diam*0.45);
  
  fill(0);
  ellipse(xEye + offset, yEye+diam*0.1, diam*0.2); 
}
