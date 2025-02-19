let xPos = [];
let yPos = [];
let r = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  r = 255 - (frameCount % 255) ;
  background(r, 0, 0);
  

  for(let i =0; i < xPos.length; i++){
    let offsetX = noise(frameCount + i) * 10;
    let offsetY = noise(frameCount+1 + i) * 10;
    circle(xPos[i] + offsetX, yPos[i] + offsetY, 20);
  }

  fill(255)
  textSize(20);
  text(r, 20,20);

}

function mouseClicked(){
  xPos.push(mouseX);
  yPos.push(mouseY);

  console.log(xPos)
  console.log(yPos)
}
