let x, y, diam;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220, 10);

  x = random(width);
  y = random(height);
  diam = random (20);

  fill(255, 255, 0, random(255));
  circle(x, y, diam);
}

function keyPressed(){
  console.log(key);
  if(key === 's'){
    // saveCanvas('myCanv.jpg');
    saveGif('mySketch', 5);
  }
}
