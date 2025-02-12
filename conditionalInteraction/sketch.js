let firstX, firstY, firstW , firstH;

let secondX, secondY, secondW, secondH;

function setup() {
  createCanvas(400, 400);

  firstX = 80;
  firstY = 50;
  firstW  = 100;
  firstH =80;

  secondX = width/2;
  secondY = height/3 * 2;
  secondW = 40;
  secondH = 70;}

function draw() {
  background(220, 200, 0);

  if(
    ( mouseX > firstX &&  mouseX < firstX + firstW 
    && mouseY > firstY && mouseY < firstY + firstH )
    ||
    (mouseX > secondX &&  mouseX < secondX + secondW
    && mouseY > secondY && mouseY < secondY + secondH)
  ){
    fill(255,0,0);
  } else {
    noFill();
  }
  
  rect(firstX, firstY, firstW , firstH);
  rect(secondX, secondY, secondW, secondH);

  fill(255,  150);
  circle(mouseX, mouseY, 20);
}
