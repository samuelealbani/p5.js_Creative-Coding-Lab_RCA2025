let positions = [];
let maxParticles = 20;
let myImage;

function preload() {
  myImage = loadImage("images/cat.png");
}

function setup() {
  createCanvas(400, 400);
}

// [older] [] [] [] [] [] [] [] [] [new Mouse position]
function draw() {
  background(220, 0, 140);

  for (let i = 1; i < positions.length; i++) {
    positions[i - 1] = positions[i];
  }

  // iterate 
  // beginShape();
  // noFill();

  for (let i = 0; i < positions.length; i++) {
    const alpha = (255 / maxParticles)  * i;
    // fill(255, alpha);
    circle(positions[i].x, positions[i].y, 20);
    tint(255, alpha);
    image(myImage, positions[i].x - 50, positions[i].y - 50 , 100, 100);
    // vertex(positions[i].x, positions[i].y);
  }
  // endShape();

  fill(255)
  textSize(20)
  text(positions.length, 30, 30)

}

function mouseMoved() {
  const currentMousePos = createVector(mouseX, mouseY);
  positions.push(currentMousePos);

  if (positions.length > maxParticles) {
    positions.splice(0, 1);
  }
}

