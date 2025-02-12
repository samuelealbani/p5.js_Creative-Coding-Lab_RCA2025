let x = 0; // declare and initialise
let y; // declare only
let diam = 40;
let speed = 2;



function setup() {
  createCanvas(600, 400);
  y = height / 2; // initialise later
}

function draw() {
  background(220);


  if(x < width/2){
    fill(255, 0, 0);
  } else if (x > (width/4) * 3 ){
    fill(255, 255, 0);
  } else {
    fill(0, 255, 0);
  }
  circle(x, y, diam);
  
  x+=speed; // this animates the x

  console.log(x)
  if (x > width) {
    x = 0;
  }
}
